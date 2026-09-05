import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const contentRoot = fileURLToPath(new URL('./src/content/', import.meta.url));
const collections = ['vpn', 'airport', 'guide'];

function readFrontmatterDate(raw, key) {
  const match = raw.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match ? match[1].trim() : null;
}

function buildArticleLastmodMap() {
  const map = {};
  for (const collection of collections) {
    const dir = path.join(contentRoot, collection);
    let files;
    try {
      files = readdirSync(dir);
    } catch {
      continue;
    }
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const slug = file.replace(/\.md$/, '');
      const raw = readFileSync(path.join(dir, file), 'utf8');
      const date = readFrontmatterDate(raw, 'updatedDate') ?? readFrontmatterDate(raw, 'pubDate');
      if (date) map[`/${collection}/${slug}/`] = date;
    }
  }
  return map;
}

const articleLastmod = buildArticleLastmodMap();
// 非文章页的最近一次实质性改动日期，人工维护，反映真实更新时间。
const staticPageLastmod = {
  '/': '2026-09-06',
  '/vpn/': '2026-09-05',
  '/airport/': '2026-09-05',
  '/airport/wuyou/': '2026-09-06',
  '/guide/': '2026-09-05',
  '/tools/': '2026-09-05',
  '/about/': '2026-09-05',
};

export default defineConfig({
  site: 'https://ivpn.xyz',
  output: 'static',
  integrations: [
    sitemap({
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = articleLastmod[pathname] ?? staticPageLastmod[pathname];
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});
