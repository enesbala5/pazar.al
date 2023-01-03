<script lang="ts">
	import CategoryItem from '$lib/components/UI/Sections/CategoryItem.svelte';
</script>

<div class="flex items-end justify-between px-4 lg:px-0">
	<p class="h3 font-medium">Popular Categories</p>
	<a class="text-sm font-medium uppercase opacity-80 lg:text-base" href="recommended">View All</a>
</div>

<div
	class="noScroll mt-8 flex space-x-4 overflow-x-scroll lg:grid lg:grid-cols-6 lg:grid-rows-1 lg:gap-8 lg:overflow-hidden px-4 lg:px-0"
>
	<!-- categoryDescriptor="Cars" -->
	<CategoryItem categoryId="automjete" />

	<!-- categoryDescriptor="Mobile Phones" -->
	<CategoryItem categoryId="elektronike" />

	<!-- categoryDescriptor="Gaming Console" -->
	<CategoryItem categoryId="consoles" />
	<!-- categoryDescriptor="Shoes" -->
	<CategoryItem categoryId="kepuce" />

	<!-- categoryDescriptor="Clothing" -->
	<CategoryItem categoryId="veshje" />

	<!-- categoryDescriptor="Home Appliances" -->
	<CategoryItem categoryId="shtepiake" />
</div>
