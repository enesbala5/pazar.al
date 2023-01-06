<script lang="ts">
	import PriceDisplay from '$lib/components/productItem/PriceDisplay.svelte';
	import { bottomBarOpen } from '$lib/userState/preferences';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	export let price: number;
	export let eur: boolean;

	const dispatch = createEventDispatcher();

	function dispatchEvent() {
		dispatch('contact');
	}

	onMount(() => {
		if (innerWidth < 1024) bottomBarOpen.set(true);
	});
	onDestroy(() => bottomBarOpen.set(false));
	let innerWidth: number = 1920;
	
	$: if (innerWidth < 1024) bottomBarOpen.set(true);
</script>

<svelte:window bind:innerWidth />

<div
	class="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between border-t border-neutral-300 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900 lg:hidden"
>
	<PriceDisplay size="lg" transparent {price} {eur} />
	<button on:click={dispatchEvent} class="buttonPrimary buttonBase rounded-full"
		>Contact Author</button
	>
</div>
