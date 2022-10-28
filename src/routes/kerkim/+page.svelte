<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Pagination from '$lib/components/Pagination.svelte';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import ProductItemSkeleton from '$lib/components/productItem/ProductItemSkeleton.svelte';
	import SearchForm from '$lib/components/SearchForm.svelte';
	import { getCount, getLatestPosts } from '$lib/fetching/main';
	import { faqjaParamParse } from '$lib/functions/conversions';
	import { getParams } from '$lib/functions/paramHandling';
	import type { searchQuery } from '$lib/types/query';
	import { card } from '$lib/userPreferences/preferences';

	let params: searchQuery = {};

	let itemsAmount: number = 0;

	// let paramsCache: searchQuery = {};

	afterNavigate(async () => {
		params = getParams($page);
		console.log('params received', params);

		itemsAmount = await getCount(params);
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
			{#key itemsAmount}
				<Pagination
					pageNumber={params.faqja !== undefined ? params.faqja : 1}
					{itemsAmount}
					itemsPerPage={3}
					on:updatePageNumber={(e) => {
						params.faqja = e.detail.pageNumber;
						paginateFN();
					}}
				/>
			{/key}
		</div>
		<!-- itemsAmount={data.count} -->

		<!-- {#each data.data as product}
			<ProductItem card={$card} {product} />
		{:else}
			<p>Sorry there are no posts that match that description</p>
		{/each}
		<div class="rounded-md bg-neutral-700 py-4 text-center">
		
		</div> -->

		<!-- TODO: Add ProductItem Skeleton Model x (Items per Page) -->
		{#await getLatestPosts(params)}
			{#each Array(3) as _, i}
				<ProductItemSkeleton index={i} card={$card} />
			{/each}
		{:then data}
			{#each data as postim, i}
				<ProductItem card={$card} product={postim} />
			{:else}
				{#each Array(3) as _, i}
					<ProductItemSkeleton index={i} card={$card} />
				{/each}
			{/each}
		{:catch error}
			{#each Array(3) as _, i}
				<ProductItemSkeleton index={i} card={$card} />
			{/each}
		{/await}
	</div>
</div>
