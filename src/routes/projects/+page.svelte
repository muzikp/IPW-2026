<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Card, Tag } from '$lib/components';

	const projects2025 = [
		{
			company: 'Cofidis',
			challenge: 'Consumer Finance Innovation Strategy',
			description: 'Developing innovative approaches to consumer finance and digital transformation in the financial services sector.',
			topics: ['Strategy', 'Innovation', 'Digital'],
			year: '2025'
		},
		{
			company: 'Volvo',
			challenge: 'Sustainable Mobility Solutions',
			description: 'Strategic analysis of sustainable transportation and electric vehicle market opportunities in Central Europe.',
			topics: ['Strategy', 'Sustainability', 'Operations'],
			year: '2025'
		},
		{
			company: 'Mattoni',
			challenge: 'Brand Strategy & Market Expansion',
			description: 'Enhancing brand positioning and exploring new market opportunities in the beverage industry.',
			topics: ['Marketing', 'Strategy', 'Branding'],
			year: '2025'
		},
		{
			company: 'Novartis',
			challenge: 'Healthcare Innovation & Digital Health',
			description: 'Exploring digital health solutions and patient engagement strategies in pharmaceutical sector.',
			topics: ['Innovation', 'Strategy', 'Digital'],
			year: '2025'
		},
		{
			company: 'Siemens Energy',
			challenge: 'Data Center Energy Efficiency',
			description: 'Optimizing energy consumption and sustainability strategies for data center operations.',
			topics: ['Sustainability', 'Data', 'Operations'],
			year: '2025'
		},
		{
			company: 'TotalEnergies',
			challenge: 'PackBack! Circular Economy Initiative',
			description: 'Developing circular economy solutions for packaging and waste reduction in energy sector.',
			topics: ['Sustainability', 'Innovation', 'Operations'],
			year: '2025'
		}
	];

	const projects2024 = [
		{
			company: 'Siemens Energy',
			challenge: 'Market Entry into Small Modular Reactors',
			description: 'Strategic analysis of market entry opportunities in the emerging field of small modular reactors and nuclear energy solutions.',
			topics: ['Strategy', 'Innovation', 'Sustainability'],
			year: '2024'
		},
		{
			company: 'Komerční banka',
			challenge: 'Group Financing Synergy Propositions',
			description: 'Unifying consumer financing products across KB Group institutions to create comprehensive and attractive offerings for clients.',
			topics: ['Strategy', 'Digital', 'Innovation'],
			year: '2024'
		},
		{
			company: 'Škoda Group',
			challenge: 'Rolling Stock Business Development',
			description: 'Strategic initiatives for designing, building and maintaining rolling stock products in the transportation sector.',
			topics: ['Strategy', 'Operations', 'Innovation'],
			year: '2024'
		},
		{
			company: 'TotalEnergies',
			challenge: 'Agricultural Product Range Marketing',
			description: 'Creating a comprehensive marketing strategy and action plan for deployment of TotalEnergies agricultural product ranges in Czech Republic.',
			topics: ['Marketing', 'Strategy', 'Branding'],
			year: '2024'
		}
	];

	const allProjects = [...projects2025, ...projects2024];

	let selectedYear = 'All';
	let selectedTopic = 'All';

	$: filteredProjects = allProjects.filter(project => {
		const yearMatch = selectedYear === 'All' || project.year === selectedYear;
		const topicMatch = selectedTopic === 'All' || project.topics.includes(selectedTopic);
		return yearMatch && topicMatch;
	});

	const allTopics = ['Strategy', 'Marketing', 'Operations', 'Innovation', 'Sustainability', 'Data', 'Digital', 'Branding', 'HR'];
</script>

<svelte:head>
	<title>Projects - IPW</title>
</svelte:head>

<!-- Hero -->
<Section class="bg-gradient-to-br from-primary-50 via-white to-accent-50">
	<Container>
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-6">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Projects Hub
				</span>
			</h1>
			<p class="text-xl text-gray-700 max-w-3xl mx-auto">
				Browse real challenges solved by IPW teams. Each project includes a challenge summary,
				approach, and typical deliverables from leading global companies.
			</p>
		</div>
	</Container>
</Section>

<!-- Filters -->
<Section class="bg-white">
	<Container>
		<div class="mb-12">
			<h2 class="text-2xl font-bold text-gray-900 mb-6">Filter Projects</h2>
			<div class="flex flex-wrap gap-4">
				<!-- Year Filter -->
				<div>
					<label class="block text-sm font-semibold text-gray-700 mb-2">Year</label>
					<select 
						bind:value={selectedYear}
						class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
					>
						<option value="All">All Years</option>
						<option value="2025">2025</option>
						<option value="2024">2024</option>
					</select>
				</div>

				<!-- Topic Filter -->
				<div>
					<label class="block text-sm font-semibold text-gray-700 mb-2">Topic</label>
					<select 
						bind:value={selectedTopic}
						class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
					>
						<option value="All">All Topics</option>
						{#each allTopics as topic}
							<option value={topic}>{topic}</option>
						{/each}
					</select>
				</div>

				<!-- Results Counter -->
				<div class="flex items-end">
					<p class="text-sm text-gray-600 px-4 py-2 bg-gray-50 rounded-lg">
						Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
					</p>
				</div>
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredProjects as project, i}
				<Card class="group hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
					<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
					
					<div class="relative">
						<div class="flex items-center gap-3 mb-4">
							<div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
								{String(i + 1).padStart(2, '0')}
							</div>
							<h3 class="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
								{project.company}
							</h3>
						</div>
						
						<h4 class="text-lg font-semibold text-gray-800 mb-3">{project.challenge}</h4>
						<p class="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
						
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.topics as topic}
								<Tag>{topic}</Tag>
							{/each}
						</div>
						
						<div class="flex items-center justify-between pt-4 border-t border-gray-100">
							<p class="text-sm font-semibold text-gray-500">Year: {project.year}</p>
							<div class="flex items-center gap-2 text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
								View Details
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
								</svg>
							</div>
						</div>
					</div>
				</Card>
			{/each}
		</div>

		{#if filteredProjects.length === 0}
			<div class="text-center py-12">
				<div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
					<svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
					</svg>
				</div>
				<p class="text-lg text-gray-600">No projects match your filters. Try adjusting your selection.</p>
			</div>
		{/if}
	</Container>
</Section>

<!-- CTA Section -->
<Section class="bg-gradient-to-br from-primary-600 to-accent-600">
	<Container>
		<div class="text-center text-white">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Want to Propose a Project?</h2>
			<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
				Companies interested in submitting a challenge for IPW teams can reach out to learn about the process and timelines.
			</p>
			<a 
				href="{base}/contact" 
				class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
			>
				Contact Us
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</Container>
</Section>
