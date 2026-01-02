<script lang="ts">
	import { base } from '$app/paths';
	import Container from './Container.svelte';

	const quickLinks = [
		{ label: 'Home', href: `${base}/` },
		{ label: 'Students', href: `${base}/students` },
		{ label: 'Companies', href: `${base}/companies` },
		{ label: 'University partners', href: `${base}/universities` },
		{ label: 'Projects', href: `${base}/projects` },
		{ label: 'Archive', href: `${base}/archive` },
		{ label: 'Contact', href: `${base}/contact` }
	];
</script>

<footer class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 overflow-hidden">
	<!-- Decorative elements -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
	</div>

	<Container class="relative z-10">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
			<!-- Brand -->
			<div>
				<h3 class="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
					IPW
				</h3>
				<p class="text-gray-400 leading-relaxed mb-4">
					International Project Workshop bringing together students, companies, and universities for real-world collaboration.
				</p>
				<div class="flex gap-4">
					<a href="mailto:ipw@cvut.cz" aria-label="Email us" class="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="text-white font-semibold mb-4 text-lg">Quick Links</h4>
				<ul class="space-y-3">
					{#each quickLinks.slice(0, 4) as link}
						<li>
							<a
								href={link.href}
								class="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
							>
								<span class="inline-flex items-center gap-2">
									<svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
									</svg>
									{link.label}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h4 class="text-white font-semibold mb-4 text-lg">Contact</h4>
				<div class="space-y-4">
					<a
						href="mailto:ipw@cvut.cz"
						class="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
					>
						<div class="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
						</div>
						<span class="font-medium">ipw@cvut.cz</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="pt-8 border-t border-gray-700/50">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-sm text-gray-400">
					© {new Date().getFullYear()} CTU / MIAS – International Project Workshop
				</p>
				<div class="flex gap-6 text-sm text-gray-400">
					{#each quickLinks.slice(4) as link}
						<a href={link.href} class="hover:text-white transition-colors">
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</Container>
</footer>
