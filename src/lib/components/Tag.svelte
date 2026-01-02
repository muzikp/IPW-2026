<script lang="ts">
	let { class: className = '', children }: { class?: string; children?: any } = $props();
</script>

<span
	class="inline-flex items-center rounded-full bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-1.5 text-sm font-semibold text-primary-800 transition-all duration-300 hover:scale-110 hover:shadow-md border border-primary-200/50 {className}"
>
	{@render children?.()}
</span>
