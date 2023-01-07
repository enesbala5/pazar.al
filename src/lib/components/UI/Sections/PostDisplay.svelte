<script lang="ts">
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import PostGrid from './PostGrid.svelte';
	import type { Product } from '$lib/types/product';
	import { card } from '$lib/userState/preferences';
	import KerkimError from '$lib/components/error/KerkimError.svelte';

	export let posts: Product | any;
	export let classNames = '';
</script>

<section class=" w-full {classNames}">
	<div class="relative">
		<div class="fixed top-0 -z-50 h-full min-h-screen w-full bg-neutral-50 dark:bg-neutral-900" />

		<div class="absolute top-0 z-0 w-full overflow-hidden rounded-xl">
			<div
				class="
					h-[400px] -translate-y-[5%] bg-gradient-to-b from-neutral-200 to-neutral-50
		transition-all duration-300 dark:from-neutral-700 dark:to-neutral-900 lg:h-[150px]
		"
			/>
		</div>
		<div class="px-1.5 lg:px-0 lg:pt-3">
			<PostGrid fullWidth>
				{#if posts !== undefined && posts.length > 0}
					{#each posts as postim, i}
						<ProductItem card={$card} product={postim} />
					{/each}
				{:else}
					<KerkimError alternate />
				{/if}
			</PostGrid>
		</div>
	</div>
</section>
