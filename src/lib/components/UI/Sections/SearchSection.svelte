<script lang="ts">
	// Data
	import { card } from '$lib/userState/preferences';
	// Fetching
	import { getCount, getPosts } from '$lib/fetching/main';
	// UI
	import SearchForm from '$lib/components/UI/SearchForm.svelte';
	import KerkimError from '$lib/components/error/KerkimError.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import ProductItemSkeleton from '$lib/components/productItem/ProductItemSkeleton.svelte';
	import PageInfoDesktop from '$lib/components/SearchUI/PageInfoDesktop.svelte';
	import LayoutDesktop from '$lib/components/SearchUI/LayoutDesktop.svelte';
	import SortDesktop from '$lib/components/SearchUI/SortDesktop.svelte';
	// Functions
	import { getParams } from '$lib/functions/paramHandling';
	// Sveltekit Functions
	import { afterNavigate } from '$app/navigation';
	// SvelteKit Data
	import { page } from '$app/stores';
	// Types
	import type { searchQuery } from '$lib/types/query';

	let itemsAmount: number = 0;
	let params: searchQuery = {};

	afterNavigate(async () => {
		params = getParams($page);
		itemsAmount = await getCount(params);
	});

	const paginateFN = () => {
		paginate();
	};

	let paginate: any;

	let itemsPerPage: number = 15;

	import { createEventDispatcher } from 'svelte';
	import PostGrid from './PostGrid.svelte';

	const dispatch = createEventDispatcher();

	function updateSearchId() {
		dispatch('searchIdUpdate', {
			searchId: params.id,
		});
	}

	$: params.id, updateSearchId();
</script>

<div class="relative">
	<div class="fixed top-0 -z-50 h-full min-h-screen w-full bg-neutral-50 dark:bg-neutral-900" />

	<!-- Gradient -->
	<div
		class="absolute top-0 z-0 h-[500px] w-full rounded-xl bg-gradient-to-b from-indigo-600 to-neutral-50 dark:from-indigo-700 dark:to-neutral-900 lg:h-[250px]"
	/>

	<div class="absolute top-0 w-full">
		<!-- ? FILTERING -->
		<!-- ! Mobile Only -->
		<div class="p-4 lg:hidden">
			<SearchForm
				onIndex={false}
				searchInput={params.id !== undefined ? params.id : ''}
				{itemsPerPage}
				{params}
				bind:paginate
			/>
			{#key itemsAmount}
				<Pagination
					pageNumber={params.page !== undefined ? params.page : 1}
					{itemsAmount}
					{itemsPerPage}
					on:updatePageNumber={(e) => {
						params.page = e.detail.pageNumber;
						paginateFN();
					}}
				/>
			{/key}
		</div>
		<!-- end -->
		<!-- ! Desktop Only -->
		<article class="mb-2 hidden rounded-t-xl lg:block">
			<section class="flex items-center justify-between py-1.5 lg:mx-auto lg:w-11/12 ">
				<PageInfoDesktop
					{itemsAmount}
					pageNumber={params.page !== undefined ? params.page : 1}
					itemsPerPage={params.itemsPerPage ?? 15}
				/>
				<div class="flex  items-center space-x-2">
					<SortDesktop />
					<LayoutDesktop />
				</div>
			</section>
		</article>
		<!-- ? FILTERING END -->

		<PostGrid fullWidth={false}>
			<!-- ! Filters -->
			<section slot="filters">
				<p>FILTERING</p>
			</section>
			<!-- end -->

			<!-- ? MAIN -->
			<!-- * end -->
			{#await getPosts(params)}
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
			<!-- ? END -->

			<!-- * end -->
		</PostGrid>
	</div>
</div>
