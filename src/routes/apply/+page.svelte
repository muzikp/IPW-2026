<script lang="ts">
	import { Container, Section } from '$lib/components';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Apply Now - IPW</title>
	<meta name="description" content="Apply for International Project Workshop" />
</svelte:head>

<!-- Hero Section -->
<Section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
	
	<Container>
		<div class="relative text-center max-w-4xl mx-auto mb-8">
			<div class="inline-block mb-6">
				<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
					<span class="text-4xl">📝</span>
				</div>
			</div>
			
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Apply to IPW
				</span>
			</h1>
			
			<p class="text-lg text-gray-600 mb-8">
				Ready to solve real company challenges in international teams? Fill out the application form below to join IPW 2026.
			</p>

			<!-- Back link -->
			<div class="mb-8">
				<a 
					href="{base}/"
					class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					Back to homepage
				</a>
			</div>
		</div>

		<!-- Form Container -->
		<div class="relative max-w-5xl mx-auto">
			<div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
				<!-- Microsoft Forms Embed -->
				<div class="relative w-full" style="min-height: 600px;">
					<iframe 
						width="100%" 
						height="800px" 
						src="https://forms.office.com/e/ZJHCPwNAq5?embed=true" 
						frameborder="0" 
						marginwidth="0" 
						marginheight="0" 
						style="border: none; max-width:100%;" 
						allowfullscreen 
						webkitallowfullscreen 
						mozallowfullscreen 
						msallowfullscreen
						title="IPW Application Form"
					></iframe>
				</div>
			</div>

			<!-- Info Card Below Form -->
			<div class="mt-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-2xl">
						ℹ️
					</div>
					<div>
						<h3 class="text-lg font-bold text-gray-900 mb-2">What happens next?</h3>
						<ul class="space-y-2 text-gray-600">
							<li class="flex items-start gap-2">
								<span class="text-primary-600 font-bold">1.</span>
								<span>We'll review your application carefully</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-primary-600 font-bold">2.</span>
								<span>Shortlisted candidates will be invited for an interview in English</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-primary-600 font-bold">3.</span>
								<span>Selected students will be notified about admission and team allocation</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</Container>
</Section>

<!-- Additional Info -->
<Section class="bg-gradient-to-br from-gray-50 to-white">
	<Container>
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">
				<span class="text-gradient">Questions?</span>
			</h2>
			<p class="text-lg text-gray-600 mb-8">
				If you have any questions about the application process, feel free to reach out to us.
			</p>
			<a 
				href="{base}/contact"
				class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
			>
				<span>Contact Us</span>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</Container>
</Section>
