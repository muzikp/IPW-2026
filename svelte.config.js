import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.BASE_PATH || ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404 errors for download files during prerender
				// (these files come from resources/ which is not in git)
				if (path.includes('/downloads/')) {
					console.warn(`[Prerender] Ignoring 404: ${path}`);
					return;
				}
				// Throw error for other 404s
				throw new Error(message);
			}
		}
	}
};

export default config;
