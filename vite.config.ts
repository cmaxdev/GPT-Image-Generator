import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		sourcemap: true
	}, 
	server: {
		host: "0.0.0.0", 
		port: 3000
	}
});