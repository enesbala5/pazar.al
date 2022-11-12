<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import KerkimError from '$lib/components/error/KerkimError.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import ProductItemSkeleton from '$lib/components/productItem/ProductItemSkeleton.svelte';
	import SearchForm from '$lib/components/UI/SearchForm.svelte';
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

<title>Pazar{params.id ? ' - ' + params.id : ''}</title>

<div class="relative">
	<div class="fixed top-0 -z-50 h-full min-h-screen w-full bg-neutral-900" />

	<div
		class="absolute top-0 z-0 h-[40vh] w-full rounded-xl bg-gradient-to-b from-indigo-600 dark:from-indigo-700 dark:to-neutral-900 to-neutral-50"
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
					itemsPerPage={15}
					on:updatePageNumber={(e) => {
						params.faqja = e.detail.pageNumber;
						paginateFN();
					}}
				/>
			{/key}
		</div>
		{#await getLatestPosts(params)}
			{#each Array(5) as _, i}
				<ProductItemSkeleton index={i} card={$card} />
			{/each}
		{:then data}
			{#each data as postim, i}
				<ProductItem card={$card} product={postim} />
			{:else}
				<KerkimError id={params.id} />
				<!-- TODO: Add Recently Viewed Items -->
			{/each}
		{:catch}
			<KerkimError id={params.id} />
			<!-- TODO: Add Recently Viewed Items -->
		{/await}
	</div>
</div>
<!-- <button on:click={createItem} class="fixed top-0 w-full ">Delete all users</button> -->
