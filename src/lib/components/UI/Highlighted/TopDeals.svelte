<script lang="ts">
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import type { Product } from '$lib/types/product';

	let RecommendedItems: Product[] = [
		{
			title: 'Range Rover 2022',
			description: 'Luks',
			id: 'rangerover22',
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
			id: 'benz',
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
			id: 'audi',
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
			id: 'audi',
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
	<p class="text-2xl font-medium">Today's Top Deals</p>
	<a class="font-medium uppercase opacity-80 text-sm md:text-base" href="recommended">View All</a>
</div>
<div class="mt-6 grid grid-cols-4 gap-4">
	{#each RecommendedItems as product}
		<ProductItem {product} card margin={false} />
	{/each}
</div>
