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
	import PostDisplay from '$lib/components/UI/Sections/PostDisplay.svelte';
</script>

<title>Liked Posts - Pazar</title>

<article class="mt-12 px-4 lg:mx-auto lg:w-11/12 lg:px-0">
	<div class="flex items-center justify-between">
		<h1 class="headline text-4xl font-medium lg:text-5xl">Liked Posts</h1>
		<div class="flex items-center">
			<ReturnButton />
		</div>
	</div>
	<!-- USER ACTIONS -->
	<!-- {#if loggedIn} -->
</article>
<PostDisplay posts={likedPosts} classNames="mt-16" />
