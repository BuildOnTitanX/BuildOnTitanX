import { getSingletonHighlighter } from 'shiki'

const highlighterPromise = getSingletonHighlighter({
  themes: ['github-dark', 'light-plus'],
  langs: ['javascript', 'typescript', 'bash', 'json', 'markdown', 'python', 'vyper', 'solidity', 'rust', 'mdx'],
})

export async function highlight(code: string, lang: string = 'javascript'): Promise<string> {
  const highlighter = await highlighterPromise

  return highlighter.codeToHtml(code, {
    lang,
    theme: 'github-dark',
  })
}
