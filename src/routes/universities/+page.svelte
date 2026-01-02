<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Card, Button } from '$lib/components';

	const universities = [
		{
			name: 'CTU MIAS',
			fullName: 'Czech Technical University in Prague - MIAS School of Business',
			city: 'Prague',
			country: 'Czech Republic',
			flag: '🇨🇿',
			logo: `${base}/images/universities/masaryk_institute_of_advnced_studies.svg`,
			role: 'Host Institution',
			website: 'https://www.muvs.cvut.cz/en',
			description: 'The organizing institution coordinating IPW, providing course structure, company partnerships, and hosting the kick-off week in Prague.',
			contributions: ['Overall coordination', 'Company partnerships', 'Kick-off week hosting', 'Course governance']
		},
		{
			name: 'Université de Lille',
			fullName: 'University of Lille',
			city: 'Lille',
			country: 'France',
			flag: '🇫🇷',
			logo: `${base}/images/universities/logo-lille.svg`,
			role: 'Partner Institution',
			website: 'https://www.univ-lille.fr/en',
			description: 'Founding partner since 2021, University of Lille brings expertise in international education and hosts the final week mobility.',
			contributions: ['Student recruitment', 'Academic tutors', 'Final week hosting', 'Mobility coordination']
		},
		{
			name: 'Mykolas Romeris University',
			fullName: 'Mykolas Romeris University',
			city: 'Vilnius',
			country: 'Lithuania',
			flag: '🇱🇹',
			logo: `${base}/images/universities/MRU_EN_horizontalus_spalvotas_RGB.svg`,
			role: 'Partner Institution',
			website: 'https://www.mruni.eu/en/',
			description: 'Joined IPW in 2022, bringing diverse student perspectives and expertise in European studies and business education.',
			contributions: ['Student recruitment', 'Academic tutors', 'Cross-cultural collaboration', 'Research support']
		},
		{
			name: 'Hochschule Görlitz',
			fullName: 'Hochschule Zittau/Görlitz - University of Applied Sciences',
			city: 'Görlitz',
			country: 'Germany',
			flag: '🇩🇪',
			logo: `${base}/images/universities/logo-gorlitz.svg`,
			role: 'Academic Tutor Partner',
			website: 'https://www.hszg.de/en',
			description: 'Contributing academic expertise through experienced tutors who guide student teams throughout the project.',
			contributions: ['Academic tutors', 'Project supervision', 'Quality assurance', 'Student mentorship']
		},
		{
			name: 'La Mache',
			fullName: 'Ecole Supérieure La Mache',
			city: 'Lyon',
			country: 'France',
			flag: '🇫🇷',
			logo: `${base}/images/universities/logo-lamace.png`,
			role: 'Academic Tutor Partner',
			website: 'https://www.lamache.fr',
			description: 'Engineering and business school providing academic tutors who bring practical industry experience to student projects.',
			contributions: ['Academic tutors', 'Project supervision', 'Industry connections', 'Technical expertise']
		}
	];
</script>

<svelte:head>
	<title>University Partners - IPW</title>
</svelte:head>

<!-- Hero -->
<Section class="bg-gradient-to-br from-blue-50 to-indigo-100">
	<Container>
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Become an IPW university partner
			</h1>
			<p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
				Join a European network delivering a shared international project course with an Erasmus+
				mobility element.
			</p>
			<Button href="{base}/contact">Partner with us</Button>
		</div>
	</Container>
</Section>

<!-- What partnership looks like -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What partnership looks like</h2>
		<p class="text-lg text-gray-700 mb-6">
			IPW is built on collaboration between universities. Partners typically:
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<p class="text-gray-700">Recruit and select students locally</p>
			</Card>
			<Card>
				<p class="text-gray-700">Contribute academic tutors</p>
			</Card>
			<Card>
				<p class="text-gray-700">Co‑host in‑person weeks (kick‑off and/or final week)</p>
			</Card>
			<Card>
				<p class="text-gray-700">
					Participate in joint evaluation and course governance
				</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- Why partner -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why partner</h2>
		<p class="text-lg text-gray-700 mb-6">
			A partnership helps you deliver internationalisation that students can feel:
		</p>
		<ul class="space-y-3 text-gray-700 text-lg">
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>A repeatable, high-impact course format</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Mobility embedded in the course timeline</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Real company engagement and visible outcomes</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>A network of peers for future collaboration</span>
			</li>
		</ul>
	</Container>
</Section>

<!-- Partners change over time -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			Partners change over time
		</h2>
		<p class="text-lg text-gray-700 mb-4">
			Partner universities vary by cohort: new institutions join, others rotate out. To keep the
			website clear, we separate:
		</p>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Current partners</h3>
				<p class="text-gray-700">Upcoming cohort</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Partner profiles</h3>
				<p class="text-gray-700">What each institution brings</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Alumni partners</h3>
				<p class="text-gray-700">Institutions involved in previous cohorts</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- Roles & responsibilities -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			Roles & responsibilities (typical)
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">CTU / organising team</h3>
				<p class="text-gray-700">
					Overall coordination, course governance, company onboarding, and communication.
				</p>
			</Card>
			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Partner university</h3>
				<p class="text-gray-700">
					Student recruitment and selection, tutor participation, and (where agreed) hosting the
					final week.
				</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- Partner profiles -->
<Section>
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Our University Partners
				</span>
			</h2>
			<p class="text-lg text-gray-600">Academic institutions collaborating to deliver IPW</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each universities as uni}
				<Card class="group hover:shadow-2xl transition-all duration-300">
					<a href={uni.website} target="_blank" rel="noopener noreferrer" class="block">
						<div class="flex items-start gap-6 mb-6">
							<!-- University Logo -->
							<div class="flex-shrink-0 w-32 h-32">
								<img src={uni.logo} alt="{uni.name} logo" class="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform" />
							</div>
							<div class="flex-1">
								<h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors flex items-center gap-2">
									{uni.name}
									<svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
									</svg>
								</h3>
								<p class="text-gray-600 mb-3">{uni.city}, {uni.country}</p>
								<span class="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-semibold rounded-full">
									{uni.role}
								</span>
							</div>
						</div>

						<p class="text-gray-700 mb-4 leading-relaxed">{uni.description}</p>

						<div class="border-t border-gray-100 pt-4 mt-4">
							<h4 class="text-sm font-semibold text-gray-900 mb-3">Key Contributions:</h4>
							<div class="grid grid-cols-2 gap-2">
								{#each uni.contributions as contribution}
									<div class="flex items-center gap-2 text-sm text-gray-600">
										<svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
										</svg>
										{contribution}
									</div>
								{/each}
							</div>
						</div>
					</a>
				</Card>
			{/each}
		</div>
	</Container>
</Section>

<!-- Alumni partners -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			Alumni partners (placeholder)
		</h2>
		<div class="space-y-3 text-gray-700">
			<p>[University] — participated in [years]</p>
			<p>[University] — participated in [years]</p>
		</div>
	</Container>
</Section>

<!-- Contact -->
<Section class="bg-blue-50">
	<Container>
		<div class="text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact</h2>
			<p class="text-lg text-gray-700 mb-6">
				Email: <a href="mailto:ipw@cvut.cz" class="text-blue-600 hover:text-blue-700"
					>ipw@cvut.cz</a
				>
			</p>
			<Button href="{base}/contact">Get in touch</Button>
		</div>
	</Container>
</Section>
