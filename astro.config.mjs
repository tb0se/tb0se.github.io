import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://tb0se.github.io',
  integrations: [tailwind(), icon({
    include: {
      logos: ['github-icon', 'javascript', 'typescript-icon', 'python', 'react', 'solidjs-icon',
        'svelte-icon', 'nodejs-icon', 'tailwindcss-icon', 'html-5', 'postgresql', 'bun', 'astro-icon',
        'css-3', 'docker-icon', 'jira', 'aws', 'confluence', 'vitejs', 'ubuntu', 'github-actions', 'github'],
      heroicons: ['bars-3-solid']
    }
  })]
});