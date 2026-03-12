<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Card, Button, Tag } from '$lib/components';

	const partnerUniversities = [
		{
			name: 'CTU MIAS',
			city: 'Prague',
			country: 'Czech Republic',
			flag: '🇨🇿',
			logo: `${base}/images/universities/masaryk_institute_of_advnced_studies.svg`,
			role: 'Host Institution',
			website: 'https://www.muvs.cvut.cz/en'
		},
		{
			name: 'Université de Lille',
			city: 'Lille',
			country: 'France',
			flag: '🇫🇷',
			logo: `${base}/images/universities/logo-lille.svg`,
			role: 'Partner',
			website: 'https://www.univ-lille.fr/en'
		},
		{
			name: 'Mykolas Romeris University',
			city: 'Vilnius',
			country: 'Lithuania',
			flag: '🇱🇹',
			logo: `${base}/images/universities/MRU_EN_horizontalus_spalvotas_RGB.svg`,
			role: 'Partner',
			website: 'https://www.mruni.eu/en/'
		},
		{
			name: 'Hochschule Görlitz',
			city: 'Görlitz',
			country: 'Germany',
			flag: '🇩🇪',
			logo: `${base}/images/universities/logo-gorlitz.svg`,
			role: 'Academic Partner',
			website: 'https://www.hszg.de/en'
		},
		{
			name: 'La Mache',
			city: 'Lyon',
			country: 'France',
			flag: '🇫🇷',
			logo: `${base}/images/universities/logo-lamace.png`,
			role: 'Academic Partner',
			website: 'https://www.lamache.fr'
		},
		{
			name: 'LUMSA Università',
			city: 'Rome',
			country: 'Italy',
			flag: '🇮🇹',
			logo: `${base}/images/universities/logo-lumsa.svg`,
			role: 'Academic Partner',
			website: 'https://www.lumsa.it/'
		},
		{
			name: 'Hochschule Heilbronn',
			city: 'Heilbronn',
			country: 'Germany',
			flag: '🇩🇪',
			logo: `${base}/images/universities/heilbronn.png`,
			role: 'Academic Partner',
			website: 'https://www.hs-heilbronn.de/en'
		}
	];
</script>

<svelte:head>
	<title>IPW - International Project Workshop</title>
</svelte:head>

<!-- Hero Section -->
<Section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 min-h-[90vh] flex items-center">
	<!-- Animated background elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
		<div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
		<div class="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
	</div>

	<Container class="relative z-10">
		<!-- Common Header -->
		<div class="text-center mb-12 animate-fade-in-up">
			<h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
				<span class="block text-gray-900">International Project</span>
				<span class="block text-gradient mt-2">Workshop</span>
			</h1>
			<p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
				Fresh ideas for companies, real experience for students.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 items-start">
			<!-- Left: Students Section -->
			<div class="text-center md:text-left animate-fade-in-up">
				<div class="inline-block mb-6">
					<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl">
						<span class="text-4xl">🎓</span>
					</div>
				</div>
				
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					<span class="text-gradient">Are you a student?</span>
				</h2>
				
				<div class="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100">
					<span class="text-sm font-semibold text-primary-700">🎓 6 ECTS • 🌍 International • 🚀 Real Projects</span>
				</div>
				
				<p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
					Join an <span class="font-semibold text-primary-700">elite international student team</span> for one semester, 
					tackling <span class="font-semibold text-accent-700">real business challenges</span> from global brands. 
					Spend <span class="font-semibold text-primary-700">two weeks in European cities</span> 
					and earn <span class="font-semibold text-accent-700">6 ECTS</span>.
				</p>
				
				<!-- Main CTA Button -->
				<div class="mb-8">
					<a 
						href="{base}/apply"
						class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300 group"
					>
						<span>Apply Now</span>
						<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
				</div>
				
				<div class="flex flex-wrap gap-3 justify-center md:justify-start text-sm">
					{#each ['6 ECTS', 'Real projects', 'International teams', 'Prague kick‑off', 'European mobility', 'Jury presentation'] as feature}
						<span class="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 text-gray-700 hover:scale-110 transition-transform duration-300 hover:shadow-md">
							✓ {feature}
						</span>
					{/each}
				</div>
			</div>

			<!-- Right: Business Section -->
			<div class="text-center md:text-left animate-fade-in-up" style="animation-delay: 0.2s;">
				<div class="inline-block mb-6">
					<div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-primary-500 rounded-3xl flex items-center justify-center shadow-2xl">
						<span class="text-4xl">💼</span>
					</div>
				</div>
				
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					<span class="text-gradient">Are you a business?</span>
				</h2>
				
				<p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
					Get <span class="font-semibold text-accent-700">fresh ideas</span> and discover 
					<span class="font-semibold text-primary-700">talented candidates</span> for your positions. 
					Our international teams bring innovative perspectives to your business challenges while you 
					evaluate potential future employees in action.
				</p>
				
				<div class="space-y-4 mb-8">
					<div class="flex items-start gap-3">
						<div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div class="text-left">
							<h3 class="font-semibold text-gray-900 mb-1">Fresh Perspectives</h3>
							<p class="text-gray-600 text-sm">International teams tackle your challenges with innovative approaches</p>
						</div>
					</div>
					
					<div class="flex items-start gap-3">
						<div class="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<div class="text-left">
							<h3 class="font-semibold text-gray-900 mb-1">Talent Pipeline</h3>
							<p class="text-gray-600 text-sm">Identify and recruit exceptional candidates before graduation</p>
						</div>
					</div>
					
					<div class="flex items-start gap-3">
						<div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
							</svg>
						</div>
						<div class="text-left">
							<h3 class="font-semibold text-gray-900 mb-1">Global Network</h3>
							<p class="text-gray-600 text-sm">Connect with top universities across Europe</p>
						</div>
					</div>
				</div>
				
				<!-- Business CTA Button -->
				<div>
					<a 
						href="{base}/contact"
						class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-600 to-primary-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-accent-500/50 hover:scale-105 transition-all duration-300 group"
					>
						<span>Contact Us</span>
						<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</Container>
</Section>

<!-- What IPW is -->
<Section class="relative">
	<Container>
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12 animate-fade-in-up">
				<h2 class="text-4xl md:text-5xl font-bold mb-4">
					<span class="text-gradient">What IPW is</span>
				</h2>
				<div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
			</div>
			
			<div class="grid md:grid-cols-2 gap-8">
				<Card class="group">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
							🎯
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-3">Practical Experience</h3>
							<p class="text-gray-600 leading-relaxed">
								A consulting‑style course built around real challenges from partner companies. Work with actual stakeholders on meaningful problems.
							</p>
						</div>
					</div>
				</Card>

				<Card class="group">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
							🌍
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-3">International Teams</h3>
							<p class="text-gray-600 leading-relaxed">
								Collaborate in mixed international teams, guided by academic tutors and supported by company mentors from across Europe.
							</p>
						</div>
					</div>
				</Card>

				<Card class="group">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
							✈️
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-3">Mobility Element</h3>
							<p class="text-gray-600 leading-relaxed">
								Intensive in‑person start in Prague and a final week at a partner university abroad.
							</p>
						</div>
					</div>
				</Card>

				<Card class="group">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
							📊
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-3">Professional Output</h3>
							<p class="text-gray-600 leading-relaxed">
								Deliver portfolio‑ready reports and presentations to expert juries and company stakeholders.
							</p>
						</div>
					</div>
				</Card>
			</div>

			<div class="mt-12 p-8 glass rounded-2xl border border-primary-100">
				<p class="text-lg text-gray-700 leading-relaxed text-center">
					IPW is designed for students who want <span class="font-semibold text-primary-700">real responsibility</span>, 
					<span class="font-semibold text-accent-700">real deadlines</span>, and output that can stand in a portfolio. 
					For companies, it offers a structured way to explore concrete questions and receive 
					<span class="font-semibold text-primary-700">fresh, well‑reasoned recommendations</span>.
				</p>
			</div>
		</div>
	</Container>
</Section>

<!-- Partner Companies Section -->
<Section class="bg-white">
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="text-gradient">Our Partner Companies</span>
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Work on real challenges from leading companies across Europe
			</p>
		</div>
		
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
			<a href="https://www.skoda-auto.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-skoda.svg" alt="Škoda" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.loreal.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-loreal.svg" alt="L'Oréal" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.novartis.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-novartis.png" alt="Novartis" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.siemens-energy.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-siemens-energy.svg" alt="Siemens Energy" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.kb.cz/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-komercni-banka.png" alt="Komerční Banka" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.volvogroup.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-volvo.jpg" alt="Volvo" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.mattoni.cz/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-mattoni.png" alt="Mattoni" class="max-h-16 w-auto" />
			</a>
			<a href="https://totalenergies.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-totalenergies.png" alt="TotalEnergies" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.cofidis.cz/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-cofidis.svg" alt="Cofidis" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.decathlon.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-decathlon.svg" alt="Decathlon" class="max-h-16 w-auto" />
			</a>
			<a href="https://klimchi.cz/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-klimchi.png" alt="Klimchi" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.linet.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-linet.svg" alt="Linet" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.renault-trucks.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-renault-trucks.svg" alt="Renault Trucks" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.rheagroup.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-rhea-group.png" alt="Rhea Group" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.allwyn.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-allwyn.svg" alt="Allwyn" class="max-h-16 w-auto" />
			</a>
			<a href="https://www.veolia.com/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 transition-all duration-300 hover:scale-110">
				<img src="{base}/images/companies/logo-veolia.svg" alt="Veolia" class="max-h-16 w-auto" />
			</a>
		</div>
		
		<div class="text-center mt-12">
			<Button href="{base}/partners" variant="outline">
				Learn more about partnering with us
			</Button>
		</div>
	</Container>
</Section>



<!-- How it works -->
<Section class="relative bg-gradient-to-br from-gray-50 to-primary-50/30">
	<Container>
		<div class="text-center mb-16 animate-fade-in-up">
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				<span class="text-gradient">How it works</span>
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				IPW follows a predictable yearly rhythm. Exact dates change by cohort, but the logic stays the same.
			</p>
		</div>

		<!-- Timeline -->
		<div class="relative max-w-4xl mx-auto">
			<!-- Vertical line -->
			<div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 hidden md:block"></div>

			{#each [
				{ num: '01', title: 'Company project proposals', desc: 'Companies submit a short project brief describing a concrete challenge and the desired output.', time: 'Early year', side: 'left' },
				{ num: '02', title: 'Student selection', desc: 'Students apply with a form and CV. Shortlisted candidates are invited to an interview in English.', time: 'Spring / early summer', side: 'right' },
				{ num: '03', title: 'Admission & allocation', desc: 'The IPW team decides admission and assigns students to projects and teams of around five students.', time: 'Summer', side: 'left' },
				{ num: '04', title: 'Kick‑off week in Prague', desc: 'Teams meet in person, align with company partners, and build an action plan. Often includes a company visit.', time: 'Start of winter semester', side: 'right' },
				{ num: '05', title: 'Remote collaboration', desc: 'Teams work online with regular check‑ins, deliver interim outputs, and iterate with mentor feedback.', time: '~2 months', side: 'left' },
				{ num: '06', title: 'Final week abroad', desc: 'Teams meet in person at a partner university, finalise deliverables, and present to a jury.', time: 'End of semester', side: 'right' }
			] as step, i}
				<div class="relative mb-12 md:mb-16 animate-fade-in-up" style="animation-delay: {i * 100}ms">
					<div class="md:grid md:grid-cols-2 md:gap-12 items-center">
						<!-- Content -->
						<div class="{step.side === 'right' ? 'md:col-start-2' : 'md:col-start-1'} mb-4 md:mb-0">
							<Card class="relative group">
								<div class="flex items-start gap-4">
									<div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
										{step.num}
									</div>
									<div class="flex-1">
										<div class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
											{step.time}
										</div>
										<h3 class="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
										<p class="text-gray-600 leading-relaxed">{step.desc}</p>
									</div>
								</div>
							</Card>
						</div>

						<!-- Timeline dot -->
						<div class="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2">
							<div class="w-6 h-6 bg-white border-4 border-primary-500 rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-12 p-8 glass rounded-2xl border border-primary-100 max-w-3xl mx-auto">
			<div class="flex items-start gap-4">
				<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center text-2xl">
					📦
				</div>
				<div>
					<h4 class="text-lg font-bold text-gray-900 mb-2">Typical Deliverables</h4>
					<p class="text-gray-700 leading-relaxed">
						A final report (analysis + recommendations) and presentation deck, plus optional supporting materials 
						(frameworks, roadmaps, concept proposals, or methodology notes).
					</p>
				</div>
			</div>
		</div>
	</Container>
</Section>





<!-- Partner universities -->
<Section class="bg-gray-50">
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Partner universities
				</span>
			</h2>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
			{#each partnerUniversities as uni, i}
				<a href={uni.website} target="_blank" rel="noopener noreferrer" class="block">
					<Card class="group hover:shadow-2xl transition-all duration-300 h-full">
						<div class="flex flex-col items-center text-center">
							<div class="w-28 h-28 mb-4">
								<img src={uni.logo} alt="{uni.name} logo" class="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-all duration-300" />
							</div>
							<h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors flex items-center gap-2">
								{uni.name}
								<svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
								</svg>
							</h3>
							<p class="text-sm text-gray-600 mb-3">{uni.city}, {uni.country}</p>
							<span class="inline-block px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-xs font-semibold rounded-full">
								{uni.role}
							</span>
						</div>
					</Card>
				</a>
			{/each}
		</div>
		
		<div class="text-center">
			<Button href="{base}/about" variant="gradient" size="lg">
				Meet the university partners
			</Button>
		</div>
	</Container>
</Section>

<!-- Testimonials -->
<Section class="bg-gray-50">
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					What they say
				</span>
			</h2>
			<p class="text-lg text-gray-600">Hear from past participants</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<Card class="relative overflow-hidden group">
				<div class="absolute top-0 left-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<svg class="w-8 h-8 text-primary-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
					<p class="text-base text-gray-700 italic mb-4 leading-relaxed">
						"The IPW gave both French and Czech students the opportunity to join forces and collaborate on real business case. A successful first glimpse into the professional world they will remember !"
					</p>
					<div class="flex items-center gap-3">
						<img src="https://www.muvs.cvut.cz/wp-content/uploads/2022/06/portrety_kruh_12.jpg" alt="Sylvia Casado" class="w-10 h-10 rounded-full object-cover" />
						<div>
							<div class="font-semibold text-gray-900 text-sm">Sylvia Casado</div>
							<div class="text-xs text-gray-600">Associate professor</div>
						</div>
					</div>
				</div>
			</Card>
			
			<Card class="relative overflow-hidden group">
				<div class="absolute top-0 left-0 w-20 h-20 bg-accent-100 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<svg class="w-8 h-8 text-accent-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
					<p class="text-base text-gray-700 italic mb-4 leading-relaxed">
						"I enjoyed IPW despite some complications. It was a unique opportunity that gave me so much. I was excited about the cooperation in an internationally and culturally diverse environment, which broadened my horizons."
					</p>
					<div class="flex items-center gap-3">
						<img src="https://www.muvs.cvut.cz/wp-content/uploads/2022/06/Jian-Wei-Qiu.jpg" alt="Jian Wei Qiu" class="w-10 h-10 rounded-full object-cover" />
						<div>
							<div class="font-semibold text-gray-900 text-sm">Jian Wei Qiu</div>
							<div class="text-xs text-gray-600">Student</div>
						</div>
					</div>
				</div>
			</Card>
			
			<Card class="relative overflow-hidden group">
				<div class="absolute top-0 left-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<svg class="w-8 h-8 text-primary-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
					<p class="text-base text-gray-700 italic mb-4 leading-relaxed">
						"This European project opened my eyes to what management really is. We do not work in the same way in the two countries. In France, we are taught to write a report while respecting a certain formalism. In the Czech Republic, they are much more synthetic."
					</p>
					<div class="flex items-center gap-3">
						<img src="https://www.muvs.cvut.cz/wp-content/uploads/2022/06/Oumar.jpg" alt="Cheikh Oumar" class="w-10 h-10 rounded-full object-cover" />
						<div>
							<div class="font-semibold text-gray-900 text-sm">Cheikh Oumar</div>
							<div class="text-xs text-gray-600">Student</div>
						</div>
					</div>
				</div>
			</Card>
			
			<Card class="relative overflow-hidden group">
				<div class="absolute top-0 left-0 w-20 h-20 bg-accent-100 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<svg class="w-8 h-8 text-accent-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
					<p class="text-base text-gray-700 italic mb-4 leading-relaxed">
						"PW gave me a unique opportunity to meet interesting students from around the world, look behind the scenes of an internationally known company and learn more about myself, my strengths and weaknesses, all within a creative and productive environment with like-minded people."
					</p>
					<div class="flex items-center gap-3">
						<img src="https://www.muvs.cvut.cz/wp-content/uploads/2023/08/krutolova-ipw.png" alt="Emma Victoria Krutilová" class="w-10 h-10 rounded-full object-cover" />
						<div>
							<div class="font-semibold text-gray-900 text-sm">Emma Victoria Krutilová</div>
							<div class="text-xs text-gray-600">Student</div>
						</div>
					</div>
				</div>
			</Card>
			
			<Card class="relative overflow-hidden group">
				<div class="absolute top-0 left-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<svg class="w-8 h-8 text-primary-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
					<p class="text-base text-gray-700 italic mb-4 leading-relaxed">
						"I was surprised by the amount of experience I had gained during such a short period of time. Thanks to the IPW I learned many useful skills for my future career in different fields such as communication, international cooperation and leadership. This project is proof that business life can be kicked off during studies in a pleasant way."
					</p>
					<div class="flex items-center gap-3">
						<img src="https://www.muvs.cvut.cz/wp-content/uploads/2023/08/zdenovec-e.png" alt="Eduard Zdánovec" class="w-10 h-10 rounded-full object-cover" />
						<div>
							<div class="font-semibold text-gray-900 text-sm">Eduard Zdánovec</div>
							<div class="text-xs text-gray-600">Student</div>
						</div>
					</div>
				</div>
			</Card>
			
			<Card class="relative overflow-hidden group">
				<div class="absolute top-0 left-0 w-20 h-20 bg-accent-100 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<svg class="w-8 h-8 text-accent-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
					<p class="text-base text-gray-700 italic mb-4 leading-relaxed">
						"Thanks to IPW, I was able to experience what it is like to work in a team with French colleagues. The international composition of the team gave us the opportunity to come up with creative proposals for solving tasks. Thanks to this project, I gained a lot of valuable experience, from which I draw in my current work."
					</p>
					<div class="flex items-center gap-3">
						<img src="https://www.muvs.cvut.cz/wp-content/uploads/2022/06/portrety_kruh_15.jpg" alt="Miroslav Krček" class="w-10 h-10 rounded-full object-cover" />
						<div>
							<div class="font-semibold text-gray-900 text-sm">Miroslav Krček</div>
							<div class="text-xs text-gray-600">Student</div>
						</div>
					</div>
				</div>
			</Card>
		</div>
	</Container>
</Section>

<!-- Contact CTA -->
<Section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
	<!-- Decorative background elements -->
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style="animation-delay: 2s;"></div>
	
	<Container>
		<div class="relative text-center">
			<div class="inline-block mb-6">
				<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
					<span class="text-4xl">💬</span>
				</div>
			</div>
			
			<h2 class="text-3xl md:text-5xl font-bold mb-6">
				<span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
					Let's connect
				</span>
			</h2>
			
			<p class="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
				Questions about studying, partnering, or mobility?
			</p>
			
			<div class="flex items-center justify-center gap-3 mb-8">
				<div class="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
				<a href="mailto:ipw@cvut.cz" class="text-2xl font-semibold text-white hover:text-primary-400 transition-colors">
					ipw@cvut.cz
				</a>
				<div class="h-px w-12 bg-gradient-to-r from-primary-500 to-transparent"></div>
			</div>
			
			<Button href="{base}/contact" variant="gradient" size="lg">
				Get in touch
			</Button>
		</div>	</Container>
</Section>