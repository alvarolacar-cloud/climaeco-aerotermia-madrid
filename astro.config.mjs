// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://climaeco-aerotermia-madrid.pages.dev',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
