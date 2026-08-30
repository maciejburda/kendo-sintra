import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kendosintra.pt',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-GB', pt: 'pt-PT' } },
      filter: (page) => !page.includes('/home/'), // stare URL-e v1 to zaslepki, nie indeksujemy
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
