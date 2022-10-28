<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Pagination from '$lib/components/Pagination.svelte';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import SearchForm from '$lib/components/SearchForm.svelte';
	import { getLatestPosts } from '$lib/fetching/main';
	import { getParams } from '$lib/functions/paramHandling';
	import type { searchQuery } from '$lib/types/query';
	import { card } from '$lib/userPreferences/preferences';

	let params: searchQuery = {};

	// let paramsCache: searchQuery = {};

	$: $page.params, console.log('search...');

	let searchInput = params.id;

	afterNavigate(async () => {
		params = getParams($page);
		console.log('params received', params);

		console.log('should start new fetch request etc');
		// const data = await getLatestPosts(params);
		// console.log(data);
		console.log('should be finished?');
	});

	const createItem = async () => {
		fetch('/api/createPost');
	};

	const paginateFN = () => {
		paginate();
	};

	let paginate: any;
</script>

<div class="relative">
	<div class="fixed top-0 -z-50 h-full min-h-screen w-full bg-neutral-900" />

	<div
		class="absolute top-0 z-0 h-[40vh] w-full rounded-xl bg-gradient-to-b from-indigo-700 to-neutral-900"
	/>

	<div class="absolute top-0 w-full">
		<div class="p-4">
			<SearchForm
				onIndex={false}
				searchInput={params.id !== undefined ? params.id : ''}
				{params}
				bind:paginate
			/>

			<Pagination
				pageNumber={params.faqja !== undefined ? params.faqja : 1}
				itemsAmount={7}
				itemsPerPage={3}
				on:updatePageNumber={(e) => {
					params.faqja = e.detail.pageNumber;
					paginateFN();
				}}
			/>
		</div>
		<!-- itemsAmount={data.count} -->

		<!-- {#each data.data as product}
			<ProductItem card={$card} {product} />
		{:else}
			<p>Sorry there are no posts that match that description</p>
		{/each}
		<div class="rounded-md bg-neutral-700 py-4 text-center">
			<button class="my-2 rounded-md bg-indigo-700 py-2 px-4" on:click={createItem}
				>Create item in DB</button
			>
		</div> -->

		{#await getLatestPosts(params)}
			<div>Loading</div>
			<!-- TODO: Add ProductItem Skeleton Model x (Items per Page) -->
		{:then data}
			{#each data as postim}
				<ProductItem card={$card} product={postim} />
			{:else}
				<p>Failed</p>
			{/each}
		{:catch error}
			<p>Failed {error.status}</p>
		{/await}
		<p>{params}</p>
	</div>
</div>
