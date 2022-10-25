<script lang="ts">
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import SearchForm from '$lib/components/SearchForm.svelte';
	import { card } from '$lib/userPreferences/preferences';

	import type { PageData } from './$types';
	export let data: PageData;

	let productSearchInput: string = data?.kerkim ?? '';

	const createItem = async () => {
		fetch('/api/createPost');
	};
</script>

<div class="relative">
	<div class="fixed top-0 -z-50 h-full min-h-screen w-full bg-neutral-900" />

	<div
		class="absolute top-0 z-0 h-[40vh] w-full rounded-xl bg-gradient-to-b from-indigo-700 to-neutral-900"
	/>

	<div class="absolute top-0 w-full">
		<div class="p-4">
			<SearchForm onIndex={false} {productSearchInput} />
		</div>

		{#each data.data as product}
			<ProductItem card={$card} {product} />
		{:else}
			<p>Sorry there are no posts that match that description</p>
		{/each}
		<div class="rounded-md bg-neutral-700 py-4 text-center">
			<button
				class="my-2 rounded-md bg-indigo-700 py-2 px-4"
				on:click={createItem}>Create item in DB</button
			>
		</div>
	</div>
</div>
