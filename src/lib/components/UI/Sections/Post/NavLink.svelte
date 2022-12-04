<script lang="ts">
	export let text: string;
	export let href: string = '';

	function scrollIntoView({ target }: any) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth',
		});
	}
</script>

<a
	href="#{href}"
	on:click|preventDefault={scrollIntoView}
	class="h-navLink group flex items-center border-b-2 border-transparent px-4 font-medium hover:border-neutral-800"
>
	<p class="duration-150 ease-out group-hover:-translate-y-px pointer-events-none">
		{text}
	</p>
</a>

<style>
	.h-navLink {
		height: calc(100% - 2px);
	}
</style>
