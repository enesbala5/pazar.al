import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		imagetools(),
		Icons({
			compiler: 'svelte',
		}),
	],
	define: {
		'process.env': process.env,
	},
};

export default config;
