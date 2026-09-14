import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    /** Filename in src/assets/photos, e.g. "aip-22.jpg". Resolved by glob in
        PageShell, matching how the gallery loads its images. */
    image: z.string().optional(),
    /** true = the copy still needs sign-off from the club, see README */
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(),
    /** Filename in src/assets/photos, e.g. "dojo-2111.jpg". */
    image: z.string().optional(),
  }),
});

export const collections = { pages, news };
