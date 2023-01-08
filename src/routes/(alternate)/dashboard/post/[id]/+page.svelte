<script lang="ts">
	// UI Components
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import NavLink from '$lib/components/UI/Sections/Post/NavLink.svelte';
	import PriceDisplay from '$lib/components/productItem/PriceDisplay.svelte';
	import ShareContainer from '$lib/components/UI/Important/ShareContainer.svelte';
	import BottomBar from '$lib/components/UI/Sections/Search/BottomBar.svelte';
	// Sections
	import ImagePreview from '$lib/components/UI/Sections/Post/ImagePreview.svelte';
	import MapComponent from '$lib/components/UI/Location/MapComponent.svelte';
	import PostInformation from '$lib/components/UI/Sections/Post/PostInformation.svelte';
	// SvelteKit Functions
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	// Functions
	import { currencyConversion } from '$lib/functions/conversions';
	import { parseCity } from '$lib/data/cities';
	import manageLike from '$lib/fetching/manageLike';
	import { scrollIntoView } from '$lib/functions/UX';
	import { getSearchUrl } from '$lib/functions/navigation';
	import { capitalizeFirstLetter } from '$lib/functions/generic';
	// Types
	import type { PostimPageRequest } from './+page';
	// Data
	import { nav } from '$lib/userState/nav';
	import { page } from '$app/stores';
	// Icons
	import Euro from '$lib/components/logos/user/currencies/Euro.svelte';
	import Lek from '$lib/components/logos/user/currencies/Lek.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Share from '$lib/components/logos/user/Share.svelte';
	import Flag from '~icons/feather/flag';
	import Whatsapp from '$lib/components/logos/social/Whatsapp.svelte';
	import Logout from '$lib/components/auth/Logout.svelte';
	import ReturnButton from '$lib/components/UI/Buttons/ReturnButton.svelte';

	// --------------------------------
	// Variable Declaration
	export let data: PostimPageRequest;
	let liked: boolean = data?.isLiked ?? false;
	let likedCache: boolean = liked;

	// Bindings
	let scrollY: number;
	let bottomContentContainer: HTMLDivElement;
	let postActions: HTMLElement;

	// * Check distance from Top of Screen
	// Function
	const updateOffsetTop = (div: HTMLElement): number => {
		if (browser) {
			return div.offsetTop;
		} else {
			return 500;
		}
	};
	// USAGE
	onMount(() => {
		bottomContentContainerTop = updateOffsetTop(bottomContentContainer);
		postActionsTop = updateOffsetTop(postActions);
	});
	$: if (scrollY === 0) {
		bottomContentContainerTop = updateOffsetTop(bottomContentContainer);
		postActionsTop = updateOffsetTop(postActions);
	}

	// Bindings - Part 2
	let bottomContentContainerTop: number;
	let bottomContentContainerOffsetHeight: number;

	// Bindings - Part 3
	let postActionsTop: number;
	let postActionsOffsetHeight: number;

	// * Get link to Category
	const getCategoryUrl = () => {
		const response = getSearchUrl(
			{
				id: '',
				isCategory: true,
			},
			15,
			data.data.category ?? '',
			true
		);
		return response;
	};
	// Usage
	let categoryLink: any = getCategoryUrl();
	$: post?.category, (categoryLink = getCategoryUrl());

	// PageLoad Data -> Local Variable
	let post = data.data ?? undefined;
	$: post = data.data ?? undefined;

	const checkIfCurrentUserIsAuthor = (
		authorUid: string | undefined,
		currentUserUid: string | undefined
	) => {
		if (authorUid !== undefined && currentUserUid !== undefined) {
			return authorUid === currentUserUid;
		}
		return false;
	};

	let currentUserIsAuthor = checkIfCurrentUserIsAuthor(post?.author?.uid, $page.data?.user?.uid);
	$: currentUserIsAuthor = checkIfCurrentUserIsAuthor(post?.author?.uid, $page.data?.user?.uid);
</script>

<title>Pazar{post?.title ? ' - ' + post?.title : ''}</title>

{#if post !== undefined && currentUserIsAuthor}
	<article class="flex w-full flex-col justify-between lg:w-11/12 lg:flex-row lg:space-x-4">
		<section class="lg:w-12/12 relative">
			<article class="relative w-full">
				<!-- ! Top Content (Image + Title) -->
				<div class="flex flex-col-reverse lg:flex-col">
					<!-- ! Title and Quick Actions -->

					<section
						class="my-4 flex w-full px-4 sm:my-6 lg:my-8 lg:items-end lg:justify-between lg:px-0"
					>
						<div class="flex w-full flex-col">
							<div class="flex w-full flex-shrink-0 justify-between">
								<h1 class=" headline whitespace-pre-line text-3xl font-medium lg:text-3xl">
									{post?.title}
								</h1>
							</div>
							<div class="mt-3 flex items-center space-x-3 opacity-75 lg:mt-2 lg:space-x-4">
								<div class="text-sm">
									<!-- TODO: Add Link that navigates to Posts by Category -->
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p class="">
										Kategoria:
										<a class="link ml-1 underline" href={categoryLink}>
											{capitalizeFirstLetter(post?.category ?? '')}
										</a>
									</p>
								</div>
								<div class="h-px w-2 rounded-full bg-neutral-600 dark:bg-neutral-200" />
								<div class="text-sm">
									<!-- TODO: Add Link that navigates to Location Filter -->
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a class="" href="#">{parseCity(post?.city)}, {post?.country}</a>
								</div>
							</div>
						</div>
					</section>

					<!-- ! Image Container -->
					<!-- <ImagePreview images={post.images} showEditButton={currentUserIsAuthor} /> -->
				</div>

				<!-- ! Bottom Content -->
				<div
					class="mt-8 flex items-start px-4 lg:space-x-12 lg:px-0"
					bind:this={bottomContentContainer}
				>
					<div class="flex w-full flex-col lg:w-4/6">
						<!-- ? Post Information -->
						<div class="w-full scroll-m-20" bind:this={bottomContentContainer} id="tags">
							<PostInformation tags={post?.tags ?? []} />
						</div>
						<hr class="my-1 mb-6 border-neutral-200 dark:border-neutral-800" />
						<!-- ? Description -->
						<div class="my-4 w-full scroll-m-24" id="description">
							<h3 class="h3 font-medium ">Description:</h3>
							<p class="mt-4">{post?.description}</p>
						</div>
						<hr class="my-6 border-neutral-200 dark:border-neutral-800" />
						<!-- ? Location -->
						<div class="my-4 w-full scroll-m-24" id="location">
							<h3 class="h3 font-medium">Location:</h3>
							<MapComponent city={post?.city} country={post?.country} classNames={'mt-4'} />
						</div>
						<hr class="my-6 border-neutral-200 dark:border-neutral-800" />
						<!-- ? Listing By: -->
						<div class="my-4 w-full scroll-m-24" id="author">
							<p class="text-lg font-medium">Listing by:</p>
							<h4 class="mt-1 text-4xl font-medium">
								{post?.author?.firstName === null
									? 'Pazar.al User'
									: `${post?.author?.firstName} ${post?.author?.lastName}`}
							</h4>

							<!-- Cover & Profile Picture -->
							<div
								class="relative mt-8 flex h-64 items-center overflow-hidden rounded-xl border-neutral-800 bg-neutral-100 dark:border dark:bg-neutral-900"
							>
								{#if post?.author?.sellerInfo?.coverPicture}
									<div
										class="absolute top-1/2 left-1/2 h-full w-full -translate-y-1/2 -translate-x-1/2"
									>
										<img
											src={post?.author?.sellerInfo?.coverPicture}
											alt="{post?.author?.firstName} {post?.author?.lastName} Cover Picture"
											class="h-[101%] w-[101%] object-cover"
										/>
									</div>
									<div
										class="absolute top-1/2 left-1/2 z-[5] h-full w-full -translate-y-1/2 -translate-x-1/2 bg-neutral-900 opacity-[85%]"
									/>
								{/if}
								<div class="z-10 mx-6 h-36 w-36 overflow-hidden rounded-full">
									{#if post?.author?.profilePicture}
										<img
											src={post?.author?.profilePicture}
											alt="{post?.author?.firstName} {post?.author?.lastName} Profile Picture"
											class="h-full w-full object-cover"
										/>
									{:else}
										<div
											class="relative flex h-full w-full items-center justify-center bg-neutral-200 text-5xl font-medium dark:bg-neutral-800"
										>
											<div
												class="absolute top-1/2 left-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-300 dark:border-neutral-700"
											/>
											<!-- <p>{data.data?.author?.firstName[0]}.{data.data?.author?.lastName[0]}</p> -->
											<p />
										</div>
									{/if}
								</div>
							</div>
							<div class="mt-4 flex items-center space-x-4">
								{#if post?.author?.username}
									<a class="buttonBase buttonPrimary" href={'/' + post?.author?.username}
										>Visit Profile</a
									>
								{/if}
								<button
									class="{post?.author?.username ? 'buttonSecondary' : 'buttonPrimary'} buttonBase"
									>Contact Seller</button
								>
							</div>
						</div>
					</div>
				</div>
			</article>
			<!-- ! Recommended Post - AFTER CONTENT -->
			<article
				class="relative mb-4 min-h-screen w-full rounded-xl bg-neutral-100 dark:bg-neutral-800"
			/>
		</section>
	</article>

	<!-- ! BottomBAR ? -->
	<BottomBar
		price={post?.priceHistory[0]?.price}
		eur={post?.priceHistory[0]?.eur}
		on:contact={() => console.log('CONTACTED')}
	/>
{:else}
	<div class="flex h-full min-h-[85vh] items-center justify-center lg:w-1/2 ">
		<div>
			<h1 class="headline text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
				You are not permitted to edit this post.
			</h1>
			<div class="mt-8 flex items-center space-x-2 ">
				<ReturnButton buttonSize="buttonBase" buttonType="buttonPrimary" />
				<Logout>
					<button type="submit" class="buttonSecondary buttonBase">Log Out</button>
				</Logout>
			</div>
		</div>
	</div>
{/if}

<style>
	.h-adPanel {
		height: calc(100vh - 2rem);
	}

	.w-postNav {
		width: calc(100% * 11 / 12 * 9 / 12 - 0.75rem);
	}
</style>
