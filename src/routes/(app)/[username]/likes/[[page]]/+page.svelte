<script lang="ts">
	// Types
	import type { PageData } from './$types';
	//
	import KerkimError from '$lib/components/error/KerkimError.svelte';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import { card } from '$lib/userState/preferences';
	import PostGrid from '$lib/components/UI/Sections/PostGrid.svelte';
	import type { Product } from '$lib/types/product';

	export let data: PageData;

	// let user: PageUser | undefined = data ?? undefined;
	// let loggedInUser: PageUser | undefined = $page.data.user ?? undefined;

	// $: loggedInUser = $page.data.user;
	// $: user = data;

	// $: (user, loggedInUser), (loggedIn = loggedInUser?.uid === user?.uid);

	let likedPosts: Product[] | undefined = data.likedPosts ?? undefined;
	import ReturnIcon from '~icons/feather/corner-up-left';
	import ReturnButton from '$lib/components/UI/Buttons/ReturnButton.svelte';
</script>

<title>Liked Posts - Pazar</title>

<article class="mt-12 px-4 lg:mx-auto lg:w-11/12 lg:px-0">
	<h1 class="headline mt-12 text-4xl font-medium lg:text-5xl">Liked Posts</h1>
	<div class="mt-4 flex items-center">
		<ReturnButton />
	</div>
	<!-- USER ACTIONS -->
	<!-- {#if loggedIn} -->
</article>
<section class="mt-12 w-full lg:mt-24">
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
		<div class="px-1.5">

		<PostGrid fullWidth>
			{#if likedPosts !== undefined && likedPosts.length > 0}
				{#each likedPosts as postim, i}
					<ProductItem card={$card} product={postim} />
				{/each}
			{:else}
				<KerkimError alternate />
			{/if}
		</PostGrid>
		</div>
	</div>
</section>
