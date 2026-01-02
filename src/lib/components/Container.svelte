<script lang="ts">
	let { class: className = '', children }: { class?: string; children?: any } = $props();
</script>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 {className}">
	{@render children?.()}
</div>
