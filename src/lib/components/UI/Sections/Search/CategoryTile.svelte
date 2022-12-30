<script lang="ts">
	import type { Category } from '$lib/data/categories';
	import Badge from '../../Important/Badge.svelte';
	import CategoryItem from '../CategoryItem.svelte';

	export let category: Category;
</script>

<section class="defaultBg mx-2 flex flex-col rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800">
	<div class="flex flex-col md:flex-row md:items-center md:justify-between">
		<div class="">
			<div class="mb-6 mt-2 md:mt-10 md:mb-8">
				<p class="text-sm uppercase tracking-wide opacity-75">CATEGORY</p>
				<h2 class="headline mt-1 text-2xl font-medium md:text-3xl lg:text-4xl">{category.name}</h2>
			</div>
			<!-- <Badge message="Category" sm type="" /> -->
			{#if category.subcategories !== undefined && category.subcategories.length > 0}
				<div class="">
					<h3 class="mb-2 text-sm">Subcategories:</h3>
					<div class="mt-2 flex flex-wrap ">
						{#each category.subcategories as subcategory}
							<!-- <h2>{subcategory}</h2> -->
							<CategoryItem size="xs" categoryId={subcategory.id} />
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<div class="mt-4 flex h-full max-h-64 md:max-h-48 items-center justify-center  sm:justify-start md:justify-end overflow-hidden md:w-1/2">
			<img
				src={category.images !== undefined ? category.images[0].link : ''}
				alt={category.images !== undefined ? category.images[0].alt : category.name}
				class="object-fit h-full max-h-64 md:max-h-48"
			/>
		</div>
	</div>
</section>
