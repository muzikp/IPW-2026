<script lang="ts">
	import { Container, Section, Card } from '$lib/components';
	import { base } from '$app/paths';

	const organizers = [
		{
			name: 'Vincent Blaise Montenero',
			role: 'IPW Founder',
			bio: 'Vincent was the one who came up with the idea years ago to connect universities and corporate partners, aiming to bring students an authentic experience of a small consulting team providing services to leading global brands; for companies, his concept brings fresh perspectives on challenges and connects businesses with talented potential employees.',
		photo: 'vincent-montenero.jpg',
			linkedin: 'https://www.linkedin.com/in/vincentmontenero/'
		},
		{
			name: 'Pavel Mužík',
			role: 'Project Manager',
			bio: 'Pavel is responsible for project organization and also serves as a tutor. He started as a statistician in education, then led media analysts at the largest Czech media agency for over 10 years. In 2018, he co-founded the successful Czech startup Testuj.to, where he held a position on the Board of Directors until his exit. He specializes in research and data analytics and is co-author of several patents in biomedicine. He has been teaching at MIAS since 2025, including courses in statistics, management fundamentals, How to Build a Startup, and Agile Bootcamp.',
		photo: 'pavel-muzik.jpg',
			linkedin: 'https://www.linkedin.com/in/pavel-muzik-341a8620/'
		}
	];

	const currentTutors = [
		{ name: 'Petr Fanta', affiliation: 'MIAS', linkedin: 'https://www.linkedin.com/in/petr-fanta-7a36162a/', photo: 'petr-fanta.jpg' },
		{ name: 'Petra Jílková', affiliation: 'MIAS', linkedin: 'https://www.linkedin.com/in/petra-j%C3%ADlkov%C3%A1-2229a8123/', photo: 'petra-jilkova.jpg' },
		{ name: 'Dagmar Skokanová', affiliation: 'MIAS', linkedin: 'https://www.linkedin.com/in/dagmar-skokanova-047546235/', photo: 'dagmar-skokanova.jpg' },
		{ name: 'Falk Maiwald', affiliation: 'Görlitz', linkedin: null, photo: null },
		{ name: 'Tinno Schütte', affiliation: 'Görlitz', linkedin: null, photo: null },
		{ name: 'Sophie Putcrabey', affiliation: 'La Mache', linkedin: 'https://www.linkedin.com/in/sophie-putcrabey-146515155/', photo: 'sophie-putcrabey.jpg' },
		{ name: 'Jean-François Couvé', affiliation: 'La Mache', linkedin: 'https://www.linkedin.com/in/jfcouve/', photo: 'jean-francois-couve.jpg' },
		{ name: 'Pavel Mužík', affiliation: 'MIAS', linkedin: 'https://www.linkedin.com/in/pavel-muzik-341a8620/', photo: 'pavel-muzik.jpg' }
	];
</script>

<svelte:head>
	<title>About Us - IPW</title>
	<meta name="description" content="Meet the team behind International Project Workshop" />
</svelte:head>

<!-- Hero Section -->
<Section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
	
	<Container>
		<div class="relative text-center max-w-4xl mx-auto">
			<div class="inline-block mb-6">
				<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
					<span class="text-4xl">👥</span>
				</div>
			</div>
			
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					About Us
				</span>
			</h1>
			
			<p class="text-xl text-gray-600 leading-relaxed">
				Meet the passionate team behind International Project Workshop
			</p>
		</div>
	</Container>
</Section>

<!-- Organizers -->
<Section>
	<Container>
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Organizers
				</span>
			</h2>
			<p class="text-lg text-gray-600">The visionaries who made IPW possible</p>
		</div>

		<div class="space-y-12">
			{#each organizers as organizer, index}
				<Card class="overflow-hidden">
					<div class="grid md:grid-cols-[300px_1fr] gap-8 items-start">
						<!-- Photo -->
						<div class="relative group">
						<div class="aspect-square rounded-full bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden relative">
								{#if organizer.photo && !organizer.photo.startsWith('placeholder')}
									<!-- Real photo -->
									<img 
										src="{base}/images/team/{organizer.photo}" 
										alt={organizer.name}
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								{:else}
									<!-- Decorative pattern -->
									<div class="absolute inset-0 opacity-10">
										<svg class="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
											<defs>
												<pattern id="grid-{organizer.photo}" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
													<circle cx="5" cy="5" r="1" fill="currentColor"/>
												</pattern>
											</defs>
											<rect width="100" height="100" fill="url(#grid-{organizer.photo})"/>
										</svg>
									</div>
									
									<!-- Icon placeholder -->
									<div class="absolute inset-0 flex items-center justify-center">
										<div class="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
											<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
											</svg>
										</div>
									</div>
									
									<!-- Photo coming soon badge -->
									<div class="absolute bottom-4 left-4 right-4">
										<div class="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
											<span class="text-xs font-medium text-gray-600">Photo coming soon</span>
										</div>
									</div>
								{/if}
							</div>
						</div>

						<!-- Bio -->
						<div class="flex flex-col justify-center">
							<div class="mb-4">
								<div class="flex items-center gap-3 mb-2">
									<h3 class="text-2xl md:text-3xl font-bold text-gray-900">
										{organizer.name}
									</h3>
									{#if organizer.linkedin}
										<a 
											href={organizer.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											class="text-primary-600 hover:text-primary-700 hover:scale-110 transition-all"
											aria-label="LinkedIn profile"
										>
											<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
												<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
											</svg>
										</a>
									{/if}
								</div>
								<div class="inline-block">
									<span class="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-semibold shadow-lg">
										{organizer.role}
									</span>
								</div>
							</div>
							
							<p class="text-lg text-gray-700 leading-relaxed">
								{organizer.bio}
							</p>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</Container>
</Section>

<!-- Academic Tutors -->
<Section class="bg-gradient-to-br from-gray-50 to-white">
	<Container>
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Academic Tutors
				</span>
			</h2>
			<p class="text-lg text-gray-600">Faculty members guiding students through their IPW journey</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each currentTutors as tutor}
				<Card class="group hover:border-primary-300 transition-all">
					<div class="flex items-start gap-4">
						<!-- Avatar -->
						<div class="flex-shrink-0">
						<div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
							{#if tutor.photo}
								<img 
									src="{base}/images/team/{tutor.photo}" 
									alt={tutor.name}
									class="w-full h-full object-cover rounded-full"
									/>
								{:else}
									<div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 opacity-10"></div>
									<svg class="w-8 h-8 text-primary-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
									</svg>
								{/if}
							</div>
						</div>
						
						<div class="flex-1">
							<div class="flex items-center justify-between gap-2 mb-1">
								<h4 class="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
									{tutor.name}
								</h4>
								{#if tutor.linkedin}
									<a 
										href={tutor.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										class="flex-shrink-0 text-primary-600 hover:text-primary-700 hover:scale-110 transition-all"
										aria-label="LinkedIn profile"
									>
										<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
										</svg>
									</a>
								{/if}
							</div>
							<div class="inline-block">
								<span class="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-100">
									{tutor.affiliation}
								</span>
							</div>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</Container>
</Section>

<!-- CTA Section -->
<Section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style="animation-delay: 2s;"></div>
	
	<Container>
		<div class="relative text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">
				<span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
					Want to join us?
				</span>
			</h2>
			
			<p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
				IPW is always looking for passionate tutors and partners
			</p>
			
			<div class="flex flex-wrap gap-4 justify-center">
				<a href="{base}/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-2xl hover:scale-105 transform">
					Get in touch
				</a>
				<a href="{base}/" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40">
					Learn more about IPW
				</a>
			</div>
		</div>
	</Container>
</Section>
