<script lang="ts">
	// Icons
	import UserSettings from '$lib/components/logos/user/generic/UserSettings.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import Globe from '~icons/feather/globe';
	// Data
	import { page } from '$app/stores';
	import type { PageUser } from '$lib/types/page';
	import type { PageData } from './$types';
	import { nav } from '$lib/userState/nav';
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
<section
	class="mt-12 flex flex-col justify-between space-y-4 md:flex-row md:space-x-8 md:space-y-0 lg:mt-24"
>
	{#if likedPosts !== undefined}
		<PostGrid>
			{#each likedPosts as postim, i}
				<ProductItem card={$card} product={postim} />
			{:else}
				<KerkimError id={'liked'} />
			{/each}
		</PostGrid>
	{/if}
</section>
