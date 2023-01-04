<script lang="ts">
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import type { Product } from '$lib/types/product';
	import PostGrid from '../Sections/PostGrid.svelte';

	let RecommendedItems: Product[] = [
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

	let innerWidth: number = 1024;
</script>

<svelte:window bind:innerWidth />

<div class="flex items-end justify-between  px-4 lg:px-0">
	<p class="h3 font-medium">Recommended</p>
	<a class="text-sm font-medium uppercase opacity-80 md:text-base" href="recommended">View All</a>
</div>

<section class="mt-6">
	<PostGrid fullWidth hideAds inheritWidth cardDisplay="minimized" gap>
		{#each RecommendedItems as product, i}
			{#if i <= 3}
				<ProductItem {product} card="minimized" margin={false} />
			{/if}
			{#if i > 3 && innerWidth < 1024}
				<ProductItem {product} card="minimized" margin={false} />
			{/if}
		{/each}
	</PostGrid>
</section>
