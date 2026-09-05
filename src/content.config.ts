import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  summary: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]),
  faq: z
    .array(
      z.object({
        q: z.string(),
        a: z.string(),
      })
    )
    .optional(),
  sources: z
    .array(
      z.object({
        label: z.string(),
        url: z.string().optional(),
      })
    )
    .optional(),
});

const vpn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vpn' }),
  schema: articleSchema,
});

const airport = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/airport' }),
  schema: articleSchema,
});

const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: articleSchema,
});

export const collections = { vpn, airport, guide };
