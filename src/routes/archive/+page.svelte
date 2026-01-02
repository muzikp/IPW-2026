<script lang="ts">
	import { Container, Section, Card, Tag } from '$lib/components';

	const cohorts = [
		{
			year: '2022/2023',
			kickoff: { location: 'Prague', dates: 'September 2022' },
			finalWeek: { location: 'Lille, France', university: 'Université de Lille' },
			partners: [
				{ name: 'Université de Lille', country: 'France' },
				{ name: 'Mykolas Romeris University', country: 'Lithuania' }
			],
			companies: 6,
			themes: ['Strategy', 'Operations', 'Marketing', 'HR', 'Innovation', 'Sustainability'],
			highlight: 'Second year of IPW expanded with new Lithuanian partner. Six international companies provided diverse project assignments across various business domains.'
		},
		{
			year: '2021/2022',
			kickoff: { location: 'Prague', dates: 'September 2021' },
			finalWeek: { location: 'Lille, France', university: 'Université de Lille' },
			partners: [
				{ name: 'Université de Lille', country: 'France' }
			],
			companies: 6,
			themes: ['Strategy', 'Digital Transformation', 'Sustainability', 'Innovation'],
			highlight: 'Inaugural IPW cohort successfully launched in cooperation with Université de Lille. Foundation year establishing the framework for international student collaboration.'
		}
	];

	const upcomingGuests2023 = [
		{ name: 'Arnaud Guigné', role: 'French Embassy in Prague' },
		{ name: 'Martin Svášek', role: 'Press officer, European Commission\'s representation in Prague' },
		{ name: 'Magali Voisin-Ratelle', role: 'Director of Business France in Czech Republic' }
	];
</script>

<svelte:head>
	<title>Archive - IPW</title>
</svelte:head>

<!-- Hero Section -->
<Section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
	
	<Container>
		<div class="relative text-center max-w-4xl mx-auto">
			<div class="inline-block mb-6">
				<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
					<span class="text-4xl">📚</span>
				</div>
			</div>
			
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Cohorts Archive
				</span>
			</h1>
			
			<p class="text-xl text-gray-600 leading-relaxed">
				Explore previous cohorts and see the key facts at a glance
			</p>
		</div>
	</Container>
</Section>

<!-- Archive Index -->
<Section>
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Archive Index
				</span>
			</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				The archive makes IPW trustworthy and easy to understand over time. It shows how cohorts
				evolve (partners, companies, locations) without cluttering the main marketing pages.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each cohorts as cohort}
				<Card class="group hover:shadow-2xl transition-all duration-300">
					<div class="flex items-start justify-between mb-6">
						<h3 class="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
							Cohort {cohort.year}
						</h3>
						<div class="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
							<span class="text-xl">🎓</span>
						</div>
					</div>
					
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<div class="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center mt-0.5">
								<span class="text-xs">🚀</span>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-900">Kick-off location</p>
								<p class="text-gray-700">{cohort.kickoff.location} ({cohort.kickoff.dates})</p>
							</div>
						</div>
						
						<div class="flex items-start gap-3">
							<div class="flex-shrink-0 w-6 h-6 bg-accent-100 rounded-lg flex items-center justify-center mt-0.5">
								<span class="text-xs">🎯</span>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-900">Final week host</p>
								<p class="text-gray-700">{cohort.finalWeek.location}</p>
								<p class="text-sm text-gray-600">{cohort.finalWeek.university}</p>
							</div>
						</div>
						
						<div class="flex items-start gap-3">
							<div class="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center mt-0.5">
								<span class="text-xs">🏛️</span>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-900">Partner universities</p>
								<ul class="text-gray-700 space-y-1">
									{#each cohort.partners as partner}
										<li class="flex items-center gap-2">
											<span class="text-xs">•</span>
											{partner.name} ({partner.country})
										</li>
									{/each}
								</ul>
							</div>
						</div>
						
						<div class="flex items-start gap-3">
							<div class="flex-shrink-0 w-6 h-6 bg-accent-100 rounded-lg flex items-center justify-center mt-0.5">
								<span class="text-xs">🏢</span>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-900">Company partners</p>
								<p class="text-gray-700">{cohort.companies} international companies</p>
							</div>
						</div>
						
						<div>
							<p class="text-sm font-semibold text-gray-900 mb-2">Themes</p>
							<div class="flex flex-wrap gap-2">
								{#each cohort.themes as theme}
									<Tag>{theme}</Tag>
								{/each}
							</div>
						</div>
						
						<div class="pt-4 border-t border-gray-100">
							<p class="text-gray-700 italic leading-relaxed">{cohort.highlight}</p>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</Container>
</Section>

<!-- Notable Moments -->
<Section class="bg-gradient-to-br from-gray-50 to-white">
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Notable Moments
				</span>
			</h2>
			<p class="text-lg text-gray-600">Special guests and milestones from IPW history</p>
		</div>

		<Card class="mb-8">
			<div class="flex items-start gap-4 mb-6">
				<div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg">
					<span class="text-2xl">🎤</span>
				</div>
				<div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2">2023 Kick-off Week Guests</h3>
					<p class="text-gray-600">Distinguished guests invited to the kick-off week in Prague</p>
				</div>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each upcomingGuests2023 as guest}
					<div class="p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
						<div class="flex items-start gap-3">
							<div class="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
								<svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
								</svg>
							</div>
							<div>
								<p class="font-bold text-gray-900">{guest.name}</p>
								<p class="text-sm text-gray-600 leading-relaxed">{guest.role}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</Card>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<Card class="group hover:shadow-xl transition-all">
				<div class="flex items-start gap-4 mb-4">
					<div class="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
						<span class="text-2xl">🏆</span>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900">Project Funding</h3>
						<p class="text-sm text-gray-600">European Union Support</p>
					</div>
				</div>
				<p class="text-gray-700 leading-relaxed">
					IPW 2022 was implemented within project CTU ESF II, CZ.02.2.69/0.0/0.0/18_056/0013243, 
					funded by the European Union from European Structural Funds in the Operational Programme 
					Research, Development and Education.
				</p>
			</Card>

			<Card class="group hover:shadow-xl transition-all">
				<div class="flex items-start gap-4 mb-4">
					<div class="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
						<span class="text-2xl">🌍</span>
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900">Growing Network</h3>
						<p class="text-sm text-gray-600">International Expansion</p>
					</div>
				</div>
				<p class="text-gray-700 leading-relaxed">
					From the initial partnership with Université de Lille in 2021, IPW has expanded to include 
					Mykolas Romeris University, creating a diverse network of European academic institutions 
					committed to practical student education.
				</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- Cohort Detail Template -->
<Section class="bg-white">
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Cohort Detail Structure
				</span>
			</h2>
			<p class="text-lg text-gray-600">Template for future cohort documentation</p>
		</div>
		
		<Card>
			<div class="space-y-8">
				<div class="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-transparent rounded-xl">
					<div class="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
						1
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Short Overview</h3>
						<p class="text-gray-700">100–150 words summary of the cohort, highlighting key achievements and unique aspects</p>
					</div>
				</div>
				
				<div class="flex items-start gap-4 p-4 bg-gradient-to-r from-accent-50 to-transparent rounded-xl">
					<div class="flex-shrink-0 w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold">
						2
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Partner Universities</h3>
						<p class="text-gray-700">List of partner universities with their roles (host/sending) and locations</p>
					</div>
				</div>
				
				<div class="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-transparent rounded-xl">
					<div class="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
						3
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Company Partners</h3>
						<p class="text-gray-700">Detailed list of companies involved with their project themes</p>
					</div>
				</div>
				
				<div class="flex items-start gap-4 p-4 bg-gradient-to-r from-accent-50 to-transparent rounded-xl">
					<div class="flex-shrink-0 w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold">
						4
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Projects List</h3>
						<p class="text-gray-700">Project cards with team compositions, themes, and one-sentence summaries</p>
					</div>
				</div>
				
				<div class="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-transparent rounded-xl">
					<div class="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
						5
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Photos & Media</h3>
						<p class="text-gray-700">Gallery of photos from kick-off week, final presentations, and team activities (optional)</p>
					</div>
				</div>
				
				<div class="flex items-start gap-4 p-4 bg-gradient-to-r from-accent-50 to-transparent rounded-xl">
					<div class="flex-shrink-0 w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold">
						6
					</div>
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">Downloadable Materials</h3>
						<p class="text-gray-700">Links to presentations, reports, and other documentation (optional)</p>
					</div>
				</div>
			</div>
		</Card>
	</Container>
</Section>
