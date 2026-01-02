<script lang="ts">
	let {
		href = '',
		variant = 'primary',
		size = 'md',
		class: className = '',
		children
	}: {
		href?: string;
		variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		children?: any;
	} = $props();

	const baseStyles =
		'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95';
	
	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	const variants = {
		primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-500 shadow-lg hover:shadow-2xl',
		secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500 shadow-lg hover:shadow-xl',
		outline: 'border-2 border-primary-600 text-primary-700 hover:bg-primary-50 focus:ring-primary-500 hover:border-primary-700 hover:text-primary-800',
		gradient: 'bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white focus:ring-primary-500 shadow-lg hover:shadow-2xl'
	};
	
	function getStyles(): string {
		return `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;
	}
</script>

{#if href}
	<a {href} class={getStyles()}>
		{@render children?.()}
	</a>
{:else}
	<button class={getStyles()}>
		{@render children?.()}
	</button>
{/if}

