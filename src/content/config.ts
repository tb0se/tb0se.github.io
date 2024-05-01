import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			github: z.string().url(),
			demo: z.string().url().optional(),
			techUsed: z.enum(['React', 'Svelte', 'Solidjs', 'Expressjs']),
			image: image(),
		}),
});

export const collections = {
	projects: projectsCollection,
};
