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

const pages = defineCollection({
  type: 'content',
  // loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    published: z.boolean().default(true),
    navOrder: z.number().optional(),
    linkUrl: z.string().optional(),
    description: z.string().optional(),
    blocks: z.array(z.any()).optional(),
  }),
})

// Define your "entries" collection schema, adjust fields as needed
const entries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: z.object({
    // id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    published: z.boolean().default(true),
    date: z.date().optional(),
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
            bgType: z
              .enum(['default', 'bordered', 'filled'])
              .default('default'),
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
          z.object({
            _block: z.literal('rtecontent'),
            content: z.string(),
          }),
          z.object({
            _block: z.literal('imageText'),
            image: z.string(),
            reverseImg: z.boolean().default(false),
            headline: z.string().optional(),
            text: z.string().optional(),
            linkText: z.string().optional(),
            linkUrl: z.string().optional(),
            linkInternal: z.boolean().default(false),
            linkStyle: z.string().default('link'),
          }),
          z.object({
            _block: z.literal('youtubeText'),
            headline: z.string().optional(),
            text: z.string().optional(),
            title: z.string().optional(),
            youtubeUrl: z.string().default(''),
            ratio: z.string().default('16:9'),
            reverse: z.boolean().default(false),
            linkText: z.string().optional(),
            linkUrl: z.string().optional(),
            linkInternal: z.boolean().default(false),
            linkStyle: z.string().default('link'),
          }),
          z.object({
            _block: z.literal('link'),
            title: z.string().optional(),
            class: z.string().optional(),
            linkText: z.string().optional(),
            linkUrl: z.string().optional().default(''),
            linkInternal: z.boolean().default(false),
            showArrow: z.boolean().default(false),
            linkStyle: z.string().default('link'),
          }),
          z.object({
            _block: z.literal('youtube'),
            headline: z.string().optional(),
            title: z.string().optional(),
            youtubeUrl: z.string().default(''),
            ratio: z.string().optional().default('16:9'),
          }),
        ]),
      )
      .optional(),
  }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { projects, pages, entries }
