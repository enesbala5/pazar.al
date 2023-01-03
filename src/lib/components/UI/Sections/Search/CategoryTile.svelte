<script lang="ts">
	import type { Category } from '$lib/data/categories';
	import { filterCategory } from '$lib/functions/navigation';
	import Badge from '../../Important/Badge.svelte';
	import CategoryItem from '../CategoryItem.svelte';

	export let category: Category;

	let parentCategory: Category | undefined = undefined;

	const getParentCategory = () => {
		if (category.parentCategory !== undefined) {
			const parentCategoryLocal = filterCategory(category.parentCategory);
			return parentCategoryLocal;
		}
		return undefined;
	};

	$: category, (parentCategory = getParentCategory());
</script>

<section
	class="defaultBg mx-2 flex flex-col justify-start rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800"
>
	<div class="flex flex-col md:flex-row md:items-start md:justify-between">
		<div class="w-full self-center">
			<div
				class="
			{category.subcategories !== undefined && category.subcategories.length > 0
					? 'mb-6 mt-2 md:mt-10 md:mb-6'
					: ''}
			"
			>
				<p class="text-sm uppercase tracking-wide opacity-75">CATEGORY</p>
				<h2 class="headline mt-1 text-2xl font-medium md:text-3xl lg:text-4xl">{category.name}</h2>
				{#if parentCategory !== undefined}
					<div class="mt-4 flex items-center justify-between rounded-md ">
						<!-- <p class="headline text-sm ">Parent Category:</p> -->
						<CategoryItem size="xs" categoryTileVersion categoryId={parentCategory.id} />
					</div>
				{/if}
				<div />
			</div>
			<!-- <Badge message="Category" sm type="" /> -->
			{#if category.subcategories !== undefined && category.subcategories.length > 0}
				<div class="w-full">
					<hr class="my-4 border-neutral-200 dark:border-neutral-700" />

					<h3 class="mb-2 text-sm opacity-75">Similar Categories:</h3>
					<!-- <div class="mt-2 flex flex-wrap "> -->
					<div class="mt-4 grid w-full gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
						{#each category.subcategories as subcategory}
							<!-- <h2>{subcategory}</h2> -->
							<CategoryItem size="sm" categoryId={subcategory} />
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<div
			class="mt-4 flex h-full max-h-64 items-center justify-center overflow-hidden sm:justify-start md:w-1/2 md:justify-end lg:max-h-64"
		>
			<img
				src={category.images !== undefined ? category.images[0].link : ''}
				alt={category.images !== undefined ? category.images[0].alt : category.name}
				class="h-full max-h-[90%] w-full max-w-[90%] object-contain"
			/>
		</div>
	</div>
</section>
