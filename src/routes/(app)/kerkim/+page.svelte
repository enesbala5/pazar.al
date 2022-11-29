<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import KerkimError from '$lib/components/error/KerkimError.svelte';
	import Pagination from '$lib/components/UI/Pagination.svelte';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import ProductItemSkeleton from '$lib/components/productItem/ProductItemSkeleton.svelte';
	import SearchForm from '$lib/components/UI/SearchForm.svelte';
	import { getCount, getLatestPosts } from '$lib/fetching/main';
	import { getParams } from '$lib/functions/paramHandling';
	import type { searchQuery } from '$lib/types/query';
	import { card } from '$lib/userPreferences/preferences';
	import PageInfoDesktop from '$lib/components/SearchUI/PageInfoDesktop.svelte';
	import LayoutDesktop from '$lib/components/SearchUI/LayoutDesktop.svelte';
	import SortDesktop from '$lib/components/SearchUI/SortDesktop.svelte';

	let params: searchQuery = {};
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
</script>

<title>Pazar{params.id ? ' - ' + params.id : ''}</title>

<div class="relative">
	<div class="fixed top-0 -z-50 h-full min-h-screen w-full bg-neutral-50 dark:bg-neutral-900" />

	<div
		class="absolute top-0 z-0 h-[500px] w-full rounded-xl bg-gradient-to-b from-indigo-600 to-neutral-50 dark:from-indigo-700 dark:to-neutral-900 lg:h-[250px]"
	/>

	<div class="absolute top-0 w-full">
		<!-- ! Mobile Only Information -->
		<div class="p-4 lg:hidden">
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
		<!-- * end -->
		<!-- ! Desktop Only -->
		<article class="mb-2 hidden rounded-t-xl lg:block">
			<section class="flex items-center justify-between py-1.5 lg:mx-auto lg:w-11/12 ">
				<PageInfoDesktop
					{itemsAmount}
					pageNumber={params.faqja !== undefined ? params.faqja : 1}
					itemsPerPage={15}
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
			<!-- ! FILTER -->
			<section
				class=" hidden items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 lg:flex lg:w-2/12"
			>
				<p>FILTERING</p>
			</section>
			<!-- * end -->
			<!-- ? MAIN -->
			<section class="grid lg:w-8/12  {$card ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1'}">
				<!-- * end -->
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
			</section>
			<!-- ? END -->
			<!-- ! ADS -->
			<section
				class="flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 lg:w-2/12"
			>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6838300598245572"
					crossorigin="anonymous"></script>
				<!-- Kerkim - Ads Sidebar -->
				<ins
					class="adsbygoogle"
					style="display:block"
					data-ad-client="ca-pub-6838300598245572"
					data-ad-slot="6795246788"
					data-ad-format="auto"
					data-full-width-responsive="true"
				/>
				<script>
					(adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			</section>
			<!-- * end -->
		</article>
	</div>
</div>
<!-- <button on:click={createItem} class="fixed top-0 w-full ">Delete all users</button> -->
