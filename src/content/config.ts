import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    author: z.string().default('NESHISE Studio'),
    featured: z.boolean().default(false)
  })
});

export const collections = { blog };
