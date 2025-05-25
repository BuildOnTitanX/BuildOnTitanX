/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/accessible-astro-components/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: {
          900: '#111827',
        }
      }
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
