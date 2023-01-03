<script lang="ts">
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import type { Product } from '$lib/types/product';
	import PostGrid from '../Sections/PostGrid.svelte';

	let TopDeals: Product[] = [
		{
			title: 'Range Rover 2022',
			description: 'Luks',
			id: 'd4fcab2e-f303-4655-b914-69e742039b13',
			category: 'Automjete',
			city: 'Tirane',
			country: 'Albania',
			priceHistory: [
				{
					price: 100,
					eur: false,
				},
			],
		},
		{
			title: 'Mercedes S-Class 2022',
			description: 'Luks 2',
			category: 'Automjete',
			city: 'Tirane',
			country: 'Albania',
			id: 'd4fcab2e-f303-4655-b914-69e742039b13',
			priceHistory: [
				{
					price: 100,
					eur: false,
				},
			],
		},
		{
			title: 'Audi Q8 2023',
			description: 'Luks 3',
			category: 'Automjete',
			city: 'Tirane',
			country: 'Albania',
			id: 'd4fcab2e-f303-4655-b914-69e742039b13',
			priceHistory: [
				{
					price: 100,
					eur: false,
				},
			],
		},
		{
			title: 'Bentley 2023',
			description: 'Luks 4',
			category: 'Automjete',
			city: 'Tirane',
			country: 'Albania',
			id: 'd4fcab2e-f303-4655-b914-69e742039b13',
			priceHistory: [
				{
					price: 100,
					eur: false,
				},
			],
		},
	];
</script>

<div class="flex items-end justify-between">
	<p class="h3 font-medium">Today's Top Deals</p>
	<a class="text-sm font-medium uppercase opacity-80 md:text-base" href="recommended">View All</a>
</div>
<section class="mt-6">
	<PostGrid fullWidth hideAds inheritWidth gap cardDisplay="minimized">
		{#each TopDeals as product, i}
			<ProductItem {product} card="minimized" margin={false} />
		{/each}
	</PostGrid>
</section>
