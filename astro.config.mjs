import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://tb0se.github.io',
  integrations: [tailwind(), mdx(), icon({
    include: {
      logos: ['javascript', 'typescript-icon', 'python', 'react', 'solidjs', 'svelte-icon', 'nodejs-icon', 'tailwindcss-icon', 'html-5', 'postgresql', 'bun', 'astro-icon', 'css-3', 'docker-icon', 'jira', 'aws', 'confluence', 'vitejs', 'ubuntu', 'github-actions', 'github', 'yarn', 'mysql', 'mongodb-icon', 'sqlite', 'prisma', 'git-icon'],
      heroicons: ['bars-3-solid'],
      mdi: ['github', 'database', 'npm'],
      nimbus: ['external-link']
    }
  })],
  server: {
    open: true
  }
});