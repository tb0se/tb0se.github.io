import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			github: z.string().url(),
			demo: z.string().url().optional(),
			backend: z.string().url().optional(),
			npm: z.string().url().optional(),
			techUsed: z.array(
				z.enum([
					'React',
					'Svelte',
					'Solidjs',
					'Expressjs',
					'JavaScript',
					'HTML',
					'CSS',
					'TailwindCSS',
					'Vite',
					'NodeJS',
					'BunJS',
					'PostgreSQL',
					'MySQL',
					'MongoDB',
					'SQLLite',
					'Prisma',
					'Docker',
					'Kubernetes',
					'TypeScript',
				])
			),
			image: image(),
		}),
});

export const collections = {
	projects: projectsCollection,
};
