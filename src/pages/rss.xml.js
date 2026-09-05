import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const vpnEntries = await getCollection('vpn');
  const airportEntries = await getCollection('airport');
  const guideEntries = await getCollection('guide');

  const items = [
    ...vpnEntries.map((e) => ({ e, collection: 'vpn' })),
    ...airportEntries.map((e) => ({ e, collection: 'airport' })),
    ...guideEntries.map((e) => ({ e, collection: 'guide' })),
  ].sort((a, b) => b.e.data.pubDate.getTime() - a.e.data.pubDate.getTime());

  return rss({
    title: 'ivpn｜VPN、机场与网络工具知识博客',
    description: 'ivpn 用简单的中文讲清楚 VPN、机场、代理、节点与客户端的基础知识。',
    site: context.site,
    items: items.map(({ e, collection }) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.pubDate,
      link: `/${collection}/${e.id}/`,
      categories: [e.data.category, ...e.data.tags],
    })),
    customData: `<language>zh-cn</language>`,
  });
}
