<script lang="ts">
  import { scrollIntoView } from '$lib/functions/UX';


	export let text: string;
	export let href: string = '';

	
</script>

<a
	href="#{href}"
	on:click|preventDefault={scrollIntoView}
	class="h-navLink group flex items-center border-b-2 border-transparent px-4 font-medium hover:border-neutral-800"
>
	<p class="pointer-events-none duration-150 ease-out group-hover:-translate-y-px">
		{text}
	</p>
</a>

<style>
	.h-navLink {
		height: calc(100% - 2px);
	}
</style>
