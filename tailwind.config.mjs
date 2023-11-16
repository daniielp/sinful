const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				sinful: {
					'light-red': '#FDC7CD',
					'red': '#E71F33',
					'green': '#134840',
					'gray': '#2c2f32',
					'blue': '#2e45b8'
				}
			}
		},
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
			display: ['Inter'],
			body: ['Inter']
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
