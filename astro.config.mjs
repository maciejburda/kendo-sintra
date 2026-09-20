import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kendosintra.pt',
  build: {
    /**
     * Inline the stylesheet instead of linking it.
     *
     * GitHub Pages serves HTML with cache-control: max-age=600, and Astro's CSS
     * filename is content-hashed. A visitor holding 10-minute-old HTML from
     * before a deploy asks for a stylesheet that the deploy has replaced, gets a
     * 404, and sees the page with no styles at all. Inlining removes the second
     * request, so there is nothing left to go missing — and it drops a
     * render-blocking round trip. The sheet is 6 KB gzipped; the cost is that it
     * is not cached across pages.
     */
    inlineStylesheets: 'always',
  },
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
