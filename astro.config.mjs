import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import path from 'path'
import starlight from './submodules/starlight/packages/starlight'
import preact from '@astrojs/preact'
import starlightUtils from '@lorenzo_lewis/starlight-utils'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://BuildOnTitanX.com',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'html', 'css', 'json'],
      wrap: true,
      transformers: [
        {
          pre(node) {
            this.addClassToHast(node, 'astro-code')
          },
        },
      ],
    },
  },
  integrations: [
    starlight({
      title: 'BuildOnTitanX',
      customCss: ['./src/styles/customStarlight.css'],
      sidebar: [
        {
          label: 'Main',
          autogenerate: { directory: '/docs' },
        },
        {
          label: 'Solidity',
          autogenerate: { directory: '/solidity' },
        },
        {
          label: 'Vyper',
          autogenerate: { directory: '/vyper' },
          badge: 'New',
        },
        {
          label: 'ExtraNavi',
          items: [
            { label: 'Solidity', link: '/solidity' },
            { label: 'Vyper', link: '/vyper' },
            { label: 'Docs', link: '/docs' },
          ],
        },
      ],
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: 'horizontalList',
          },
          navLinks: {
            leading: { useSidebarLabelled: 'ExtraNavi' },
          },
        }),
      ],
    }),
    preact(),
    mdx(),
    icon(),
    compress(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
    plugins: [tailwindcss()],
    // plugins: [tailwindcss({ config: './tailwind.config.js', runtime: true })],
    resolve: {
      alias: {
        '@components': fileURLToPath(
          new URL('./src/components', import.meta.url),
        ),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@public': fileURLToPath(new URL('./public', import.meta.url)),
        '@post-images': fileURLToPath(
          new URL('./public/posts', import.meta.url),
        ),
        '@project-images': fileURLToPath(
          new URL('./public/projects', import.meta.url),
        ),
      },
    },
  },
})
