/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'aeonik': ['aeonik', 'sans-serif']
			},
			boxShadow: {
				'dark': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
				'light': 'rgba(0, 0, 0, 0.05) 0px 4px 12px',
				'darkProMax': 'rgba(0, 0, 0, 0.3) 0px 4px 12px'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		// ...
	],
}
