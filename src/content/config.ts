import { defineCollection, z } from 'astro:content';
import { techUsed } from '../utils/constants';

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			github: z.string().url(),
			demo: z.string().url().optional(),
			backend: z.string().url().optional(),
			npm: z.string().url().optional(),
			techUsed: z.array(z.enum(techUsed)),
			image: image(),
		}),
});

export const collections = {
	projects: projectsCollection,
};
