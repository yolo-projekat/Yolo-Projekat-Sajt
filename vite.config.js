// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { join } from 'path';

// Ako utils pravi problem, Partytown ima i ovaj način za kopiranje fajlova:
export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
	]
	// Alternativa za Partytown ako utils ne radi:
	// Ručno kopiranje se obično radi kroz static folder,
	// ali za samu grešku, proveri da li je paket @builder.io/partytown ispravno instaliran
});
