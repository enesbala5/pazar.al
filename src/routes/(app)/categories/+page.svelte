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
	import { card } from '$lib/userState/preferences';
	import PageInfoDesktop from '$lib/components/SearchUI/PageInfoDesktop.svelte';
	import LayoutDesktop from '$lib/components/SearchUI/LayoutDesktop.svelte';
	import SortDesktop from '$lib/components/SearchUI/SortDesktop.svelte';
	import { nav } from '$lib/userState/nav';
	import type { Category, CategoryId } from '$lib/data/categories';
	import { filterCategory } from '$lib/functions/navigation';
	import { capitalizeFirstLetter } from '$lib/functions/generic';
	import PostGrid from '$lib/components/UI/Sections/PostGrid.svelte';

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

<title>{params.id ? capitalizeFirstLetter(params.id) + ' - ' : ''}Pazar</title>

<div>
	<h1 class="headline my-24 text-center text-5xl font-medium">
		{category !== undefined ? category.name : 'Categories'}
	</h1>
</div>
<PostGrid {params} />
