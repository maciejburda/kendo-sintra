import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kendosintra.pt',
  // Empty for production on the custom domain. The GitHub preview URL is
  // maciejburda.github.io/kendo-sintra, which needs the prefix.
  base: process.env.ASTRO_BASE || '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-GB', pt: 'pt-PT' } },
      filter: (page) => !page.includes('/home/'), // old v1 URLs are redirect stubs; keep them out of the sitemap
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
