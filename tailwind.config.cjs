/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'aeonik': ['aeonik', 'sans-serif']
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		// ...
	],
}
