import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://scrov.github.io',
  output: 'static',

  integrations: [
    mdx(),
    tailwind()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
})