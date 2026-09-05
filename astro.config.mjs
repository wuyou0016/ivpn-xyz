import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ivpn.xyz',
  output: 'static',
  integrations: [sitemap()],
});
