/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: '#212121',
				foreground: '#dadada'
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
