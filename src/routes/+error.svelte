<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Button } from '$lib/components';
</script>

<svelte:head>
	<title>404 - Page Not Found - IPW</title>
</svelte:head>

<Section class="bg-gradient-to-br from-blue-50 to-indigo-100">
	<Container>
		<div class="text-center">
			<h1 class="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2>
			<p class="text-xl text-gray-700 mb-8">
				The page you're looking for doesn't exist or has been moved.
			</p>
			<Button href="{base}/">Return to Home</Button>
		</div>
	</Container>
</Section>
