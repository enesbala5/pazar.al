<script lang="ts">
	// UI Components
	import { alerts, type Alert } from '$lib/userState/alerts';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import NavLink from '$lib/components/UI/Sections/Post/NavLink.svelte';
	import PriceDisplay from '$lib/components/productItem/PriceDisplay.svelte';
	import ShareContainer from '$lib/components/UI/Important/ShareContainer.svelte';
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
	import { capitalizeFirstLetter, formatPrice } from '$lib/functions/generic';
	// Types
	import type { PostimPageRequest } from './+page';
	// Data
	import { nav } from '$lib/userState/nav';
	// Icons
	import Euro from '$lib/components/logos/user/currencies/Euro.svelte';
	import Lek from '$lib/components/logos/user/currencies/Lek.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Share from '$lib/components/logos/user/Share.svelte';
	import Flag from '~icons/feather/flag';
	import Whatsapp from '$lib/components/logos/social/Whatsapp.svelte';
	import { bottomBarOpen } from '$lib/userState/preferences';
	import BottomBar from '$lib/components/UI/Sections/Search/BottomBar.svelte';
	import { page } from '$app/stores';

	// --------------------------------
	// Variable Declaration
	export let data: PostimPageRequest;
	let liked: boolean = data?.isLiked;
	let likedCache: boolean = liked;

	type ManageLikeResponse = {
		updatedLikes: boolean;
		error?: Alert;
	};

	let likeError: boolean;
	// Function
	const updateLikes = async (postId: string) => {
		if (!postId || typeof postId !== 'string') {
			likeError = true;
			return;
		}
		likeError = false;
		liked = !liked;

		let { updatedLikes, error }: ManageLikeResponse = await manageLike(postId, !liked);

		if (!updatedLikes && error) {
			liked = likedCache;
			$alerts = [error, ...$alerts];
		}
	};

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

<svelte:window
	bind:scrollY
	on:resize={() => {
		bottomContentContainerTop = updateOffsetTop(bottomContentContainer);
		postActionsTop = updateOffsetTop(postActions);
	}}
/>

<title>Pazar{post?.title ? ' - ' + post?.title : ''}</title>

{#if post !== undefined}
	<article
		class="flex w-full flex-col justify-between lg:mx-auto lg:w-11/12 lg:flex-row lg:space-x-4"
	>
		<section class="relative lg:w-9/12">
			<!-- ! NAVBAR -->
			<menu
				class="
			{scrollY > bottomContentContainerTop + bottomContentContainerOffsetHeight
					? 'fixed hidden lg:flex'
					: 'hidden'}
			w-postNav top-0 z-30 h-20 justify-between border-b border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 lg:space-x-12
			"
			>
				<section class="flex items-end lg:w-4/6">
					<NavLink text="Post Information" href="tags" />
					<NavLink text="Description" href="description" />
					<NavLink text="Location" href="location" />
					<NavLink text="Author" href="author" />
				</section>
				<section
					class="
				{scrollY > postActionsOffsetHeight - postActionsTop / 3 ? 'block' : 'hidden'}
				flex h-full w-2/6 items-center justify-end px-4"
				>
					<p class="mr-4 font-medium">
						{formatPrice(post?.priceHistory[0].price)}
						{post?.priceHistory[0].eur ? '???' : 'LEK'}
					</p>

					<button class="buttonPrimary buttonSm">Message Seller</button>
				</section>
			</menu>
			<article class="relative w-full" bind:offsetHeight={postActionsOffsetHeight}>
				<!-- ! Top Content (Image + Title) -->
				<div class="flex flex-col-reverse lg:flex-col">
					<!-- ! Title and Quick Actions -->
					<!-- !!!!!!!! MOBILE -->
					<div class="mx-4 flex  items-center space-x-2 py-2 lg:mx-0 lg:hidden">
						<ShareContainer
							classNames="w-full "
							path={nav.post + '/' + post?.id}
							text={`Check out ${post?.title} on Pazar.al`}
						>
							<button
								class="flex w-full items-center justify-center space-x-2 rounded-full bg-neutral-200 px-4 py-2.5 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-800"
								on:click={() => console.log('shared')}
							>
								<Share classNames="h-4 w-4 {liked ? 'stroke-red-500' : 'stroke-neutral-800'}" />
								<p class="text-sm font-medium">Share</p>
							</button>
						</ShareContainer>
						<button
							class="group flex w-full items-center justify-center space-x-2 rounded-full bg-neutral-200 px-4 py-2.5 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-800 "
							on:click={() => updateLikes(post?.id)}
						>
							<Heart classNames="h-4 w-4" liked={typeof liked !== 'boolean' ? false : liked} />
							<p class="text-sm font-medium">Like Post</p>
						</button>
					</div>
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
						<!-- !!!!!!!! DESKTOP -->
						<ShareContainer
							path={nav.post + '/' + post?.id}
							text={`Check out ${post?.title} on Pazar.al`}
						>
							<button
								class="hidden items-center space-x-2 whitespace-nowrap rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:flex"
								on:click={() => console.log('sharing')}
							>
								<Share classNames="h-4 w-4" />
								<p class="text-sm font-medium">Share</p>
							</button>
						</ShareContainer>
						<button
							class="group hidden items-center space-x-2 whitespace-nowrap rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:flex"
							on:click={() => updateLikes(post?.id)}
						>
							<Heart classNames="h-4 w-4" liked={typeof liked !== 'boolean' ? false : liked} />
							<p class="text-sm font-medium">Like Post</p>
						</button>
					</section>

					<!-- ! Image Container -->
					<ImagePreview images={post.images} showEditButton={currentUserIsAuthor} />
				</div>

				<!-- ! Bottom Content -->
				<div
					class="mt-8 flex items-start px-4 lg:space-x-12 lg:px-0"
					bind:this={bottomContentContainer}
				>
					<div class="flex w-full flex-col lg:w-4/6">
						<!-- ? User Info Short -->
						<div
							class="flex w-full flex-col-reverse justify-between pb-8 lg:flex-row lg:items-center"
							bind:offsetHeight={bottomContentContainerOffsetHeight}
						>
							<!-- ? Bottom Display Information -->
							<!-- ? Profile Link Info -->
							<div class="flex flex-col">
								<div class="flex items-center">
									<h2 class="hidden text-lg font-medium lg:block">Posted by</h2>
									<a
										class="h3 font-medium hover:underline lg:ml-1.5"
										href="#author"
										on:click|preventDefault={scrollIntoView}
									>
										{post?.author.firstName === null
											? 'Pazar.al User'
											: `${post?.author?.firstName} ${post?.author?.lastName}`}
									</a>
									<div class="mx-4 hidden h-4 w-px bg-neutral-300 dark:bg-neutral-700 lg:block" />
									<div class="hidden lg:block">
										<Badge
											type="default"
											title={post?.author?.account_type == 'Personal' ? 'PERDORUES' : 'BIZNES'}
											sm
										/>
									</div>
								</div>

								<!--  -->
								<div class="mt-2 flex w-full items-center text-sm lg:mt-2 lg:w-fit">
									<div class="lg:hidden">
										<Badge
											type="default"
											title={post?.author?.account_type == 'Personal' ? 'PERDORUES' : 'BIZNES'}
											sm
										/>
									</div>
									<p class="ml-2 w-full whitespace-nowrap lg:ml-0">Ne Pazar.al qe nga 2022</p>
								</div>
							</div>
							<div
								class="mb-2 h-16 w-16 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-900 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20"
							>
								{#if post?.author?.profilePicture}
									<img
										src={post?.author?.profilePicture}
										alt="User's Profile"
										class="h-full w-full object-cover "
									/>
								{:else}
									<div
										class="relative flex h-full w-full items-center justify-center bg-neutral-200 text-3xl font-medium dark:bg-neutral-800"
									>
										{#if post?.author?.firstName === null}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												class="mt-[25%] fill-neutral-50"
											>
												<path
													fill-rule="evenodd"
													d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
													clip-rule="evenodd"
												/>
											</svg>
										{/if}
										{#if post?.author?.firstName !== null}
											<p>
												{post?.author?.firstName[0]}{post?.author.lastName[0]}
											</p>
										{/if}
									</div>
								{/if}
							</div>
						</div>
						<hr class="mb-1 border-neutral-200 dark:border-neutral-800" />
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

					<div
						class="hidden flex-col items-center lg:sticky lg:top-28 lg:left-4 lg:flex lg:w-2/6"
						bind:this={postActions}
					>
						<div
							class="rounded-xl border  border-neutral-300 p-4  shadow-dark dark:border-none dark:border-neutral-900 dark:bg-neutral-800 dark:shadow-darkProMax"
						>
							<div class="mt-4 flex w-full items-center justify-between">
								<!-- Currency Symbol -->
								{#if post?.priceHistory[0]?.eur ?? false}
									<Euro classNames="opacity-75 w-6 h-6 dark:fill-white" />
								{:else}
									<Lek classNames="opacity-75 h-5 dark:fill-white" />
								{/if}
								<!-- Price -->
								<p class="text-2xl font-medium md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
									{formatPrice(post?.priceHistory[0]?.price)}
								</p>
							</div>
							{#await currencyConversion(post?.priceHistory[0]?.eur ? 'EUR' : 'ALL', post?.priceHistory[0].eur ? 'ALL' : 'EUR', post?.priceHistory[0].price) then convertedAmount}
								<p class="mt-2 text-right text-sm opacity-80">
									Approx. {formatPrice(convertedAmount?.amount)}
									{convertedAmount?.currency}
								</p>
							{/await}
							<hr class="mb-6 mt-8 border-neutral-200 dark:border-neutral-800" />
							<div>
								<button class="buttonPrimary buttonLg w-full text-sm">Message Seller</button>
								<button class="buttonSecondary buttonLg mt-2 w-full text-sm">
									<div class="flex items-center justify-center space-x-2">
										<Whatsapp classNames="w-4 dark:fill-neutral-300" />
										<p>Contact on WhatsApp</p>
									</div>
								</button>
								<button class="buttonSecondary buttonLg mt-2 w-full text-sm"
									>Contact on Facebook Messenger</button
								>
							</div>
						</div>
						<div
							class="group my-4 flex items-center space-x-2 text-sm opacity-50 hover:cursor-pointer"
						>
							<Flag class="h-4 w-4" />

							<p class="group-hover:underline">Report this listing</p>
						</div>
					</div>
				</div>
			</article>
			<!-- ! Recommended Post - AFTER CONTENT -->
			<article
				class="relative mb-4 min-h-screen w-full rounded-xl bg-neutral-100 dark:bg-neutral-800"
			/>
		</section>

		<!-- ------------------------------------------- -->
		<!-- Ad Panel -->
		<article
			class="h-adPanel sticky top-4 right-0 rounded-lg bg-neutral-100 dark:bg-neutral-800 lg:w-3/12"
		/>
	</article>

	<!-- ! BottomBAR ? -->
	<BottomBar
		price={post?.priceHistory[0]?.price}
		eur={post?.priceHistory[0]?.eur}
		on:contact={() => console.log('CONTACTED')}
	/>
{/if}

<style>
	.h-adPanel {
		height: calc(100vh - 2rem);
	}

	.w-postNav {
		width: calc(100% * 11 / 12 * 9 / 12 - 0.75rem);
	}
</style>
