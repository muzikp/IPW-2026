<script lang="ts">
	let { class: className = '', children }: { class?: string; children?: any } = $props();
</script>

<section class="py-12 md:py-16 lg:py-20 {className}">
	{@render children?.()}
</section>
