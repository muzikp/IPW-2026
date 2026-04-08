<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { getSeo } from '$lib/seo';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	const seo = $derived(getSeo(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<meta name="robots" content={seo.robots} />
	<meta name="author" content="International Project Workshop" />
	<meta name="theme-color" content="#1d4ed8" />
	<link rel="canonical" href={seo.canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="International Project Workshop" />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={seo.canonical} />
	<meta property="og:locale" content="en_GB" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />

	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'EducationalOrganization',
			name: 'International Project Workshop',
			alternateName: 'IPW',
			url: seo.siteUrl,
			email: 'ipw@cvut.cz',
			parentOrganization: {
				'@type': 'CollegeOrUniversity',
				name: 'Masaryk Institute of Advanced Studies, CTU in Prague',
				alternateName: [
					'MIAS CTU',
					'CTU MIAS',
					"Masaryk's Institute of Advanced Studies",
					'Masarykův ústav vyšších studií',
					'MUVS CVUT',
					'MÚVS ČVUT'
				],
				url: 'https://www.muvs.cvut.cz/en'
			},
			sameAs: ['https://www.linkedin.com/company/masarykuv-ustav-vyssich-studii-cvut-v-praze/']
		})}
	</script>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
