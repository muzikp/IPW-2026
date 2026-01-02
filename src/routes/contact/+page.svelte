<script lang="ts">
	import { Container, Section, Card } from '$lib/components';
</script>

<svelte:head>
	<title>Contact - IPW</title>
</svelte:head>

<Section class="bg-gradient-to-br from-blue-50 to-indigo-100">
	<Container>
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact</h1>
			<p class="text-xl text-gray-700 mb-8">
				Questions about studying, partnering, or mobility? Write to us.
			</p>
		</div>
	</Container>
</Section>

<Section>
	<Container>
		<div class="max-w-2xl mx-auto">
			<Card>
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Get in touch</h2>
				<p class="text-lg text-gray-700 mb-6">
					Email: <a
						href="mailto:ipw@cvut.cz"
						class="text-blue-600 hover:text-blue-700 font-semibold">ipw@cvut.cz</a
					>
				</p>
				<div class="space-y-4 text-gray-700">
					<p>
						<strong>If you are a student:</strong> include your university and expected graduation year.
					</p>
					<p>
						<strong>If you are a company:</strong> briefly describe your challenge and a preferred timeline.
					</p>
				</div>
			</Card>
		</div>
	</Container>
</Section>
