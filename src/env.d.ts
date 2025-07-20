/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.md' {
  import { AstroComponentFactory } from 'astro/dist/runtime/server'
  export const frontmatter: {
    title?: string
    blocks?: Array<{
      _block: 'hero' | 'card' | 'code'
      heading?: string
      subheading?: string
      image?: string
      title?: string
      description?: string
      language?: string
      code?: string
    }>
  }
  const Component: AstroComponentFactory
  export default Component
}
