<script lang="ts">
	import Category from './CategoryItem.svelte';
</script>

<div class="flex items-end justify-between px-4 md:px-0">
	<p class="text-2xl font-medium">Popular Categories</p>
	<a class="text-sm font-medium uppercase opacity-80 md:text-base" href="recommended">View All</a>
</div>

<div
	class="noScroll container mt-8 flex space-x-4 overflow-x-scroll pr-4 pl-4 md:grid md:grid-cols-6 md:grid-rows-1 md:gap-8 md:overflow-hidden"
>
	<!-- categoryDescriptor="Cars" -->
	<Category categoryId="automjete" />

	<!-- categoryDescriptor="Mobile Phones" -->
	<Category categoryId="elektronike" />

	<!-- categoryDescriptor="Gaming Console" -->
	<Category categoryId="gaming" />
	<!-- categoryDescriptor="Shoes" -->
	<Category categoryId="kepuce" />

	<!-- categoryDescriptor="Clothing" -->
	<Category categoryId="veshje" />

	<!-- categoryDescriptor="Home Appliances" -->
	<Category categoryId="shtepiake" />
</div>
