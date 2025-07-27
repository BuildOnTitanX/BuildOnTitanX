// eslint.config.js
import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,

  {
    name: 'astro',
    files: ['**/*.astro'],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        extraFileExtensions: ['.astro'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...astro.configs.recommended.rules,
      ...astro.configs['jsx-a11y-strict'].rules,
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    },
  },

  {
    name: 'typescript',
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  {
    name: 'js',
    files: ['**/*.js'],
    rules: {
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    },
  },

  {
    name: 'astro-inline-scripts',
    files: ['**/*.astro/*.js', '*.astro/*.js'],
    languageOptions: {
      parser: tsParser,
    },
  },
]
