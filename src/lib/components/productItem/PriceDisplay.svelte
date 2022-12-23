<script lang="ts">
	import Euro from '../logos/user/currencies/Euro.svelte';
	import Lek from '../logos/user/currencies/Lek.svelte';

	export let eur: boolean = false;
	export let price: number;
</script>

<section class="flex items-center rounded-sm bg-indigo-600 py-0.5 px-2">
	<div aria-label="Currency Used" class="mr-2 opacity-80">
		{#if eur}
			<Euro classNames="fill-white h-2.5" />
		{:else}
			<Lek classNames="fill-white h-2.5" />
		{/if}
	</div>
	<p class="text-sm text-white">{price.toLocaleString()}</p>
</section>
