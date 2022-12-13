<script lang="ts">
	import { gotoCategory } from '$lib/functions/navigation';
	import { nav } from '$lib/userPreferences/nav';
	import Category from './Category.svelte';
</script>

<div class="flex items-end justify-between px-4 md:px-0">
	<p class="text-2xl font-medium">Popular Categories</p>
	<a class="text-sm font-medium uppercase opacity-80 md:text-base" href="recommended">View All</a>
</div>

<div
	class="noScroll container mt-8 flex space-x-4 overflow-x-scroll pr-4 pl-4 md:grid md:grid-cols-6 md:grid-rows-1 md:gap-8 md:overflow-hidden"
>
	<!-- categoryDescriptor="Cars" -->
	<Category category="automjete" imgLink="images/categories/popular/cars.png" />

	<!-- categoryDescriptor="Mobile Phones" -->
	<Category
		category="elektronike"
		imgLink="images/categories/popular/iphone.png"
		imgAlt="iPhone 14 Pro Max"
	/>

	<!-- categoryDescriptor="Gaming Console" -->
	<Category
		category="gaming"
		imgLink="images/categories/popular/playstation.png"
		imgAlt="Playstation 5"
	/>
	<!-- categoryDescriptor="Shoes" -->
	<Category category="kepuce" imgLink="images/categories/popular/shoes.png" imgAlt="Nike Dunks" />

	<!-- categoryDescriptor="Clothing" -->
	<Category
		category="veshje"
		imgLink="images/categories/popular/clothing.png"
		imgAlt="Nike Sweatshirt"
	/>

	<!-- categoryDescriptor="Home Appliances" -->
	<Category
		category="shtepiake"
		imgLink="images/categories/popular/appliances.png"
		imgAlt="Home Appliances"
	/>
</div>
