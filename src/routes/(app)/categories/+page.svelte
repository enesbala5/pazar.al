<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import KerkimError from '$lib/components/error/KerkimError.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import ProductItemSkeleton from '$lib/components/productItem/ProductItemSkeleton.svelte';
	import SearchForm from '$lib/components/UI/SearchForm.svelte';
	import { getCount, getPostsByCategory } from '$lib/fetching/main';
	import { getParams } from '$lib/functions/paramHandling';
	import type { searchQuery, searchQueryCategories } from '$lib/types/query';
	import { card } from '$lib/userPreferences/preferences';
	import PageInfoDesktop from '$lib/components/SearchUI/PageInfoDesktop.svelte';
	import LayoutDesktop from '$lib/components/SearchUI/LayoutDesktop.svelte';
	import SortDesktop from '$lib/components/SearchUI/SortDesktop.svelte';
	import { nav } from '$lib/userPreferences/nav';
	import type { Category, CategoryId } from '$lib/data/categories';
	import { filterCategory } from '$lib/functions/navigation';

	let params: searchQueryCategories = {};
	let itemsAmount: number = 0;

	// let paramsCache: searchQuery = {};

	afterNavigate(async () => {
		params = getParams($page);
		itemsAmount = await getCount(params);
	});

	const paginateFN = () => {
		paginate();
	};

	let paginate: any;

	let itemsPerPage: number = 15;

	export let data: Category;
	let categoryId: CategoryId | undefined = params.id ?? undefined;

	let category: Category | undefined;

	$: params.id, (categoryId = params.id ?? undefined);
	$: categoryId, updateCategory();

	const updateCategory = () => {
		if (categoryId !== undefined) {
			category = filterCategory(categoryId);
		}
	};
</script>

<title>Pazar{params.id ? ' - ' + params.id : ''}</title>

<div>
	<h1 class="headline my-24 text-center text-5xl font-medium">
		{category !== undefined ? category.name : 'Categories'}
	</h1>
</div>
<div class="relative">
	<div class="fixed top-0 -z-50 h-full min-h-screen w-full bg-neutral-50 dark:bg-neutral-900" />

	<div
		class="absolute top-0 z-0 h-[500px] w-full rounded-xl bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-900 lg:h-[250px]"
	/>

	<div class="absolute top-0 w-full">
		<!-- ! Mobile Only Information -->
		<div class="p-4 lg:hidden ">
			<SearchForm
				url={nav.category}
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
		<!-- * end -->
		<!-- ! Desktop Only -->
		<article class="mb-2 hidden rounded-t-xl lg:block ">
			<section
				class="m-4 flex items-center justify-between rounded-full bg-indigo-600 px-5 py-1.5 dark:bg-neutral-200 dark:bg-opacity-5 lg:mx-auto lg:w-11/12"
			>
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
		<article
			class="flex w-full flex-col justify-between lg:mx-auto lg:w-11/12 lg:flex-row lg:space-x-4"
		>
			{#await getPostsByCategory(params)}
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
		</article>
	</div>
</div>
