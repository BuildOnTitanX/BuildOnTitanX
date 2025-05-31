// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
  }),
})

// Define your "entries" collection schema, adjust fields as needed
const entries = defineCollection({
  schema: z.object({
    id: z.string(),
    published: z.boolean().default(true),
    description: z.string(),
    title: z.string(),
    author: z.string().optional(),
    blocks: z
      .array(
        z.discriminatedUnion('_block', [
          z.object({
            _block: z.literal('hero'),
            heading: z.string(),
            subheading: z.string().optional(),
            image: z.string(),
          }),
          z.object({
            _block: z.literal('card'),
            title: z.string(),
            description: z.string().optional(),
            image: z.string().optional(),
          }),
          z.object({
            _block: z.literal('code'),
            language: z.string().default('javascript'),
            code: z.string(),
          }),
          z.object({
            _block: z.literal('pageheader'),
            title: z.string(),
            subtitle: z
              .object({
                content: z.string(),
              })
              .optional(),
            bgType: z.enum(['default', 'bordered', 'filled']).default('default'),
          }),
          z.object({
            _block: z.literal('accordion'),
            useChevron: z.boolean().default(false),
            allowMultiple: z.boolean().default(false),
            items: z.array(
              z.object({
                title: z.string(),
                content: z.string(),
              }),
            ),
          }),
        ]),
      )
      .optional(),
  }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { projects, entries }
