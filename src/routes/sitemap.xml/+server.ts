import { sitemapPages } from '$lib/seo';

export const prerender = true;

const siteUrl = 'https://ipw.muvs.cvut.cz';

export function GET() {
	const lastModified = new Date().toISOString();
	const urls = sitemapPages
		.map((path) => {
			const loc = path === '/' ? siteUrl : `${siteUrl}${path}`;

			return [
				'<url>',
				`  <loc>${loc}</loc>`,
				`  <lastmod>${lastModified}</lastmod>`,
				path === '/' ? '  <priority>1.0</priority>' : '  <priority>0.8</priority>',
				'</url>'
			].join('\n');
		})
		.join('\n');

	const body = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', urls, '</urlset>'].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
