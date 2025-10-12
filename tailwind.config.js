/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // './node_modules/accessible-astro-components/**/*.js'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
  darkMode: ['class', '.darkmode'], //might not be working correctly in Tailwind 4 anymore
  safelist: ["hidden", "sm:hidden"],
}
