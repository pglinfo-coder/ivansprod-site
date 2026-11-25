import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    affiliateUrl: z.string().url().optional(),
    forYou: z.array(z.string()),
    notForYou: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});
export const collections = { reviews };
