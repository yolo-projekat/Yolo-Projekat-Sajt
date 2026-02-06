import adapter from '@sveltejs/adapter-static'; // Promeni ovo
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html' // Važno za GitHub Pages
		})
	}
};

export default config;