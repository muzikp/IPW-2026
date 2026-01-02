<script lang="ts">
	let {
		class: className = '',
		hover = true,
		children
	}: { class?: string; hover?: boolean; children?: any } = $props();

	function getHoverClass(): string {
		return hover
			? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1'
			: '';
	}
</script>

<div
	class="rounded-xl bg-white p-6 shadow-lg border border-gray-100 backdrop-blur-sm {getHoverClass()} {className}">
	{@render children?.()}
</div>