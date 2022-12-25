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

	$: data, console.log(data);

	let likedPosts: Product[] | undefined = data.likedPosts ?? undefined;
	console.log(likedPosts);
</script>

<title>Liked Posts - Pazar</title>

<article class="mt-12 px-4 lg:mx-auto lg:w-11/12 lg:px-0">
	<h1 class="headline mt-12 text-6xl font-medium">Liked Posts</h1>
	<!-- USER ACTIONS -->
	<!-- {#if loggedIn} -->
</article>
<section class="mt-12 w-full lg:mt-24">
	<PostGrid fullWidth>
		{#if likedPosts !== undefined && likedPosts.length > 0}
			{#each likedPosts as postim, i}
				<ProductItem card={$card} product={postim} />
				<ProductItem card={$card} product={postim} />
				<ProductItem card={$card} product={postim} />
				<ProductItem card={$card} product={postim} />
			{/each}
		{:else}
			<KerkimError alternate />
		{/if}
	</PostGrid>
</section>
