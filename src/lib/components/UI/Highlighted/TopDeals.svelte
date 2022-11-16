<script lang="ts">
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import type { Post } from '@prisma/client';

	let RecommendedItems: Post[] = [
		{
			title: 'Range Rover 2022',
			description: 'Luks',
			archived: false,
			category: 'Automjete',
			post_likes: 0,
			post_views: 0,
			city: 'Tirane',
			country: 'Albania',
			pid: 'rangerover22',
			price: 100,
			authorId: 'Enes Bala',
			created_at: new Date(),
			likerId: 'Bala',
			eur: false,
		},
		{
			title: 'Mercedes S-Class 2022',
			description: 'Luks 2',
			archived: false,
			category: 'Automjete',
			post_likes: 0,
			post_views: 0,
			city: 'Tirane',
			country: 'Albania',
			pid: 'benz',
			price: 100,
			authorId: 'Enes Bala',
			created_at: new Date(),
			likerId: 'Bala',
			eur: false,
		},
		{
			title: 'Audi Q8 2023',
			description: 'Luks 3',
			archived: false,
			category: 'Automjete',
			post_likes: 0,
			post_views: 0,
			city: 'Tirane',
			country: 'Albania',
			pid: 'audi',
			price: 100,
			authorId: 'Enes Bala',
			created_at: new Date(),
			likerId: 'Bala',
			eur: false,
		},
		{
			title: 'Bentley 2023',
			description: 'Luks 4',
			archived: false,
			category: 'Automjete',
			post_likes: 0,
			post_views: 0,
			city: 'Tirane',
			country: 'Albania',
			pid: 'audi',
			price: 100,
			authorId: 'Enes Bala',
			created_at: new Date(),
			likerId: 'Bala',
			eur: false,
		},
	];
</script>

<div class="flex items-end justify-between">
	<p class="text-2xl font-medium">Today's Top Deals</p>
	<a class="font-medium uppercase opacity-80" href="recommended">View All</a>
</div>
<div class="mt-6 grid grid-cols-4 gap-4">
	{#each RecommendedItems as product}
		<ProductItem {product} card margin={false} />
	{/each}
</div>
