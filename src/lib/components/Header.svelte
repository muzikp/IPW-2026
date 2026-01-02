<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Container from './Container.svelte';

	let mobileMenuOpen = $state(false);

	const navItems = [
		{ label: 'Home', href: `${base}/` },
		{ label: 'Students', href: `${base}/students` },
		{ label: 'Companies', href: `${base}/companies` },
		{ label: 'University partners', href: `${base}/universities` },
		{ label: 'Projects', href: `${base}/projects` },
		{ label: 'Archive', href: `${base}/archive` },
		{ label: 'About', href: `${base}/about` },
		{ label: 'Contact', href: `${base}/contact` }
	];
</script>

<header class="sticky top-0 z-50 glass backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-100/50">
	<Container>
		<nav class="flex items-center justify-between py-4">
			<div class="flex items-center">
				<a
					href="{base}/"
					class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
				>
					IPW
				</a>
			</div>

			<!-- Desktop navigation -->
			<div class="hidden md:flex md:gap-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="relative text-sm font-medium text-gray-700 hover:text-primary-600 transition-all duration-300 group"
						class:text-primary-600={$page.url.pathname === item.href}
					>
						{item.label}
						<span
							class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-300 group-hover:w-full"
							class:w-full={$page.url.pathname === item.href}
						></span>
					</a>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<button
				class="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				<svg
					class="h-6 w-6 transition-transform duration-300"
					class:rotate-90={mobileMenuOpen}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</nav>

		<!-- Mobile navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden py-4 border-t border-gray-100 animate-fade-in-down">
				{#each navItems as item}
					<a
						href={item.href}
						class="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
						class:text-primary-600={$page.url.pathname === item.href}
						class:bg-primary-50={$page.url.pathname === item.href}
						onclick={() => (mobileMenuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		{/if}
	</Container>
</header>
