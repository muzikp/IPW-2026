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
		<div class="text-center animate-fade-in-up">
			<div class="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100">
				<span class="text-sm font-semibold text-primary-700">🎓 6 ECTS • 🌍 International • 🚀 Real Projects</span>
			</div>
			
			<h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
				<span class="block text-gray-900">International Project</span>
				<span class="block text-gradient mt-2">Workshop</span>
			</h1>
			
			<p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
				Join an <span class="font-semibold text-primary-700">elite international student team</span> for one semester, 
				tackling <span class="font-semibold text-accent-700">real business challenges</span> from global brands. 
				With <span class="font-semibold text-primary-700">Erasmus+</span>, spend two weeks in two European cities 
				and earn <span class="font-semibold text-accent-700">6 ECTS</span>.
			</p>
			
			<!-- Main CTA Button -->
			<div class="mb-10">
				<a 
					href="{base}/apply"
					class="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300 group"
				>
					<span>Apply Now</span>
					<svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</a>
			</div>
			
			<div class="flex flex-wrap gap-4 justify-center text-sm">
				{#each ['6 ECTS', 'Real projects', 'International teams', 'Prague kick‑off', 'Erasmus+ mobility', 'Jury presentation'] as feature}
					<span class="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 text-gray-700 hover:scale-110 transition-transform duration-300 hover:shadow-md">
						✓ {feature}
					</span>
				{/each}
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
								Intensive in‑person start in Prague and a final week at a partner university abroad with Erasmus+ support.
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
		</div>
		
		<div class="text-center mt-12">
			<Button href="{base}/companies" variant="outline">
				Learn more about partnering with us
			</Button>
		</div>
	</Container>
</Section>

<!-- Explore More Section -->
<Section class="relative bg-gradient-to-br from-primary-50 to-accent-50">
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="text-gradient">Explore More</span>
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Learn more about IPW from different perspectives
			</p>
		</div>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button href="{base}/students" size="lg" variant="gradient">
				<span class="flex items-center gap-2">
					For students
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</span>
			</Button>
			<Button href="{base}/companies" variant="secondary" size="lg">For companies</Button>
			<Button href="{base}/universities" variant="outline" size="lg">For universities</Button>
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

<!-- Erasmus+ mobility -->
<Section class="bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
	<!-- Decorative background elements -->
	<div class="absolute top-0 right-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
	<div class="absolute bottom-0 left-0 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 3s;"></div>
	
	<Container>
		<div class="relative">
			<div class="flex items-center gap-4 mb-6">
				<div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-xl">
					<span class="text-3xl">✈️</span>
				</div>
				<h2 class="text-3xl md:text-4xl font-bold">
					<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
						Erasmus+ mobility
					</span>
				</h2>
			</div>
			
			<Card class="glass">
				<div class="flex items-start gap-6">
					<div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
						<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
						</svg>
					</div>
					<div>
						<p class="text-lg text-gray-700 leading-relaxed">
							IPW includes an <span class="font-semibold text-primary-700">Erasmus+ mobility element</span>—students typically travel abroad at least once as
							part of the course. Partner universities and destinations vary by cohort. Because Erasmus+
							rules and grant rates are updated each year, the website communicates the principle (mobility
							is included) while linking CTU students to official guidance and a contact person for
							cohort‑specific questions.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</Container>
</Section>

<!-- Who it is for -->
<Section>
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Who it is for
				</span>
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				IPW brings together diverse participants with a common goal
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<Card class="group relative overflow-hidden">
				<div class="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<span class="text-2xl">🎓</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Students</h3>
					<p class="text-gray-700 leading-relaxed">
						Who want a real project with real stakeholders, enjoy teamwork, and can commit to a
						semester‑long collaboration in English.
					</p>
				</div>
			</Card>
			
			<Card class="group relative overflow-hidden">
				<div class="absolute top-0 right-0 w-24 h-24 bg-accent-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<div class="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<span class="text-2xl">🏢</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">Companies</h3>
					<p class="text-gray-700 leading-relaxed">
						That have a concrete question worth exploring, can provide a mentor and basic access to
						context/data, and value a structured recommendation.
					</p>
				</div>
			</Card>
			
			<Card class="group relative overflow-hidden">
				<div class="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<div class="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<span class="text-2xl">🏛️</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">University partners</h3>
					<p class="text-gray-700 leading-relaxed">
						Who want an established, repeatable format for international project work with a mobility
						element.
					</p>
				</div>
			</Card>
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
				<span class="text-gray-600 text-xl block mt-2">(this cohort)</span>
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Each cohort collaborates with a set of European university partners. The list below reflects
				the upcoming cohort.
			</p>
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
			<Button href="{base}/universities" variant="gradient" size="lg">
				Meet the university partners
			</Button>
		</div>
	</Container>
</Section>

<!-- This year's projects -->
<Section>
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					This year's projects
				</span>
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Every team works on one company-submitted challenge. Topics vary across strategy, operations,
				marketing, HR, innovation, sustainability, and data.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
			<Card class="group relative overflow-hidden">
				<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
							01
						</div>
						<h3 class="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
							[Company]
						</h3>
					</div>
					<p class="text-gray-600 mb-4 leading-relaxed">One‑sentence challenge summary</p>
					<div class="flex gap-2 flex-wrap">
						<Tag>HR</Tag>
						<Tag>Branding</Tag>
					</div>
				</div>
			</Card>
			
			<Card class="group relative overflow-hidden">
				<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
							02
						</div>
						<h3 class="text-lg font-bold text-gray-900 group-hover:text-accent-600 transition-colors">
							[Company]
						</h3>
					</div>
					<p class="text-gray-600 mb-4 leading-relaxed">One‑sentence challenge summary</p>
					<div class="flex gap-2 flex-wrap">
						<Tag>Sustainability</Tag>
						<Tag>Strategy</Tag>
					</div>
				</div>
			</Card>
			
			<Card class="group relative overflow-hidden">
				<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
							03
						</div>
						<h3 class="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
							[Company]
						</h3>
					</div>
					<p class="text-gray-600 mb-4 leading-relaxed">One‑sentence challenge summary</p>
					<div class="flex gap-2 flex-wrap">
						<Tag>Operations</Tag>
						<Tag>Data</Tag>
					</div>
				</div>
			</Card>
		</div>
		<div class="text-center">
			<Button href="{base}/projects" variant="gradient" size="lg">
				View all projects
			</Button>
		</div>
	</Container>
</Section>

<!-- Outcomes & benefits -->
<Section class="bg-gradient-to-br from-gray-50 to-white">
	<Container>
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Outcomes & benefits
				</span>
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Real-world experience and tangible outcomes for all participants
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<Card class="group hover:border-primary-300 transition-all">
				<div class="mb-4">
					<div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
						<span class="text-2xl">🎓</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">For students</h3>
				</div>
				<div class="space-y-3">
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Earn <strong>6 ECTS</strong> while building portfolio‑ready outcome
						</p>
					</div>
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Practice problem framing, research, and professional presenting
						</p>
					</div>
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Work in international team under real constraints
						</p>
					</div>
				</div>
			</Card>
			
			<Card class="group hover:border-accent-300 transition-all">
				<div class="mb-4">
					<div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
						<span class="text-2xl">🏢</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">For companies</h3>
				</div>
				<div class="space-y-3">
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Receive structured analysis and actionable recommendations
						</p>
					</div>
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Gain visibility among talented students
						</p>
					</div>
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Strengthen your employer brand
						</p>
					</div>
				</div>
			</Card>
			
			<Card class="group hover:border-primary-300 transition-all">
				<div class="mb-4">
					<div class="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
						<span class="text-2xl">🏛️</span>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">For university partners</h3>
				</div>
				<div class="space-y-3">
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Strong course format supporting internationalization
						</p>
					</div>
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Supports mobility with shared teaching
						</p>
					</div>
					<div class="flex items-start gap-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
							<svg class="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-700 text-sm leading-relaxed">
							Evaluation shared across institutions
						</p>
					</div>
				</div>
			</Card>
		</div>
	</Container>
</Section>

<!-- Dates & application -->
<Section class="relative overflow-hidden">
	<!-- Decorative background -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
	
	<Container>
		<div class="relative">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
						Dates & application
					</span>
				</h2>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Key dates are published for each cohort, together with the current application requirements.
				</p>
			</div>
			
			<Card class="glass mb-8">
				<h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
					<div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
						<span class="text-xl">📅</span>
					</div>
					Cohort timeline
				</h3>
				<div class="grid gap-4">
					<div class="flex items-start gap-4 p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
						<div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
							<span class="text-primary-600 font-bold text-sm">1</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Applications open</div>
							<div class="text-gray-600 text-sm">[date]</div>
						</div>
					</div>
					<div class="flex items-start gap-4 p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
						<div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
							<span class="text-primary-600 font-bold text-sm">2</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Application deadline</div>
							<div class="text-gray-600 text-sm">[date]</div>
						</div>
					</div>
					<div class="flex items-start gap-4 p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
						<div class="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
							<span class="text-accent-600 font-bold text-sm">3</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Interviews / selection</div>
							<div class="text-gray-600 text-sm">[range]</div>
						</div>
					</div>
					<div class="flex items-start gap-4 p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
						<div class="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
							<span class="text-accent-600 font-bold text-sm">4</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Results published</div>
							<div class="text-gray-600 text-sm">[date]</div>
						</div>
					</div>
					<div class="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg border-2 border-primary-200">
						<div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-lg">
							<span class="text-white font-bold text-sm">🚀</span>
						</div>
						<div>
							<div class="font-bold text-gray-900">Kick‑off week (Prague)</div>
							<div class="text-gray-700 text-sm font-medium">[range]</div>
						</div>
					</div>
				</div>
			</Card>
			
			<div class="mt-8 text-center">
				<Button href="{base}/students" variant="gradient" size="lg">
					How to apply →
				</Button>
			</div>
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
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<Card class="relative overflow-hidden group">
				<div class="absolute top-0 left-0 w-20 h-20 bg-primary-100 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<svg class="w-10 h-10 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
					<p class="text-lg text-gray-700 italic mb-6 leading-relaxed">
						"[Insert meaningful testimonial from a student about their IPW experience, international collaboration, and real-world learning]"
					</p>
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
							S
						</div>
						<div>
							<div class="font-semibold text-gray-900">Student Name</div>
							<div class="text-sm text-gray-600">[University], IPW 2025</div>
						</div>
					</div>
				</div>
			</Card>
			
			<Card class="relative overflow-hidden group">
				<div class="absolute top-0 left-0 w-20 h-20 bg-accent-100 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
				<div class="relative">
					<svg class="w-10 h-10 text-accent-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
					</svg>
					<p class="text-lg text-gray-700 italic mb-6 leading-relaxed">
						"[Insert testimonial from a company representative about the value of IPW projects and student insights]"
					</p>
					<div class="flex items-center gap-4">
						<div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold">
							C
						</div>
						<div>
							<div class="font-semibold text-gray-900">[Name], [Role]</div>
							<div class="text-sm text-gray-600">[Company]</div>
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