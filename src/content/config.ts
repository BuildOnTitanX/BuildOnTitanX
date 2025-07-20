import { z, defineCollection } from 'astro:content'

// Define your "pages" collection schema, adjust fields as needed
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    published: z.boolean().default(true),
    description: z.string().optional(),
    title: z.string(),
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

export const collections = {
  pages: pagesCollection,
} as const

console.log('Content directory exists:', await import('fs').then(fs => fs.existsSync('src/content/pages')))
console.log('Content files:', await import('fs').then(fs => fs.readdirSync('src/content/pages')))

// Validate collections
console.log('Registered collections:', Object.keys(collections))
