<script lang="ts">
	// Icons
	import Euro from '$lib/components/logos/user/currencies/Euro.svelte';
	import Lek from '$lib/components/logos/user/currencies/Lek.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Share from '$lib/components/logos/user/Share.svelte';
	import Flag from '~icons/feather/flag';
	import Navigate from '~icons/feather/navigation';
	import Whatsapp from '$lib/components/logos/social/Whatsapp.svelte';

	// UI Components
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import Toast from '$lib/components/UI/Important/Toast.svelte';
	import Map from '$lib/components/UI/Location/Map.svelte';
	import ImagePreview from '$lib/components/UI/Sections/Post/ImagePreview.svelte';
	import NavLink from '$lib/components/UI/Sections/Post/NavLink.svelte';
	// Imported Functions
	import { browser } from '$app/environment';
	import manageLike from '$lib/fetching/manageLike';
	import { onMount } from 'svelte';
	// Types
	import type { PageData } from './$types';
	import type { PostimPageRequest } from './+page';
	import { currencyConversion } from '$lib/functions/conversions';
	import PostInformation from '$lib/components/UI/Sections/Post/PostInformation.svelte';
	// -----------

	// Variable Declaration
	export let data: PostimPageRequest;
	let liked: boolean = data?.isLiked;
	let likedCache: boolean = liked;
	let likeError: boolean = true;

	// Function
	const updateLikes = async (postId: string) => {
		if (!postId || typeof postId !== 'string') {
			likeError = true;
			return;
		}
		likeError = false;
		liked = !liked;
		let updatedLikes: any = await manageLike(postId, !liked);
		if (updatedLikes === true) {
			liked = likedCache;
		}
	};

	export const formatPrice = (num: any) => parseFloat(num).toFixed(2).toLocaleString();

	let scrollY: number;

	let bottomContentContainer: HTMLDivElement;
	let postActions: HTMLElement;

	const updateOffsetTop = (div: HTMLElement): number => {
		if (browser) {
			return div.offsetTop;
		} else {
			return 500;
		}
	};

	onMount(() => {
		bottomContentContainerTop = updateOffsetTop(bottomContentContainer);
		postActionsTop = updateOffsetTop(postActions);
	});

	$: if (scrollY === 0) {
		bottomContentContainerTop = updateOffsetTop(bottomContentContainer);
		postActionsTop = updateOffsetTop(postActions);
	}

	let bottomContentContainerTop: number;
	let bottomContentContainerOffsetHeight: number;

	let postActionsTop: number;
	let postActionsOffsetHeight: number;
</script>

<svelte:window
	bind:scrollY
	on:resize={() => {
		bottomContentContainerTop = updateOffsetTop(bottomContentContainer);
		postActionsTop = updateOffsetTop(postActions);
	}}
/>

<title>Pazar{data.data.title ? ' - ' + data.data.title : ''}</title>

{#if likeError}
	<Toast message="You are offline" />
{/if}

<article
	class="flex w-full flex-col justify-between lg:mx-auto lg:w-11/12 lg:flex-row lg:space-x-4"
>
	<section class="relative lg:w-9/12">
		<!-- ! NAVBAR -->
		<menu
			class="
			{scrollY > bottomContentContainerTop + bottomContentContainerOffsetHeight ? 'fixed' : 'hidden'}
			w-postNav top-0 z-30 flex h-20 justify-between border-b border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 md:space-x-12
			"
		>
			<section class="flex items-end md:w-4/6">
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
				<button class="buttonPrimary buttonSm">Message Seller</button>
			</section>
		</menu>
		<article class="relative w-full" bind:offsetHeight={postActionsOffsetHeight}>
			<!-- ! Top Content (Image + Title) -->
			<div class="flex flex-col-reverse md:flex-col">
				<!-- ! Title and Quick Actions -->
				<!-- !!!!!!!! MOBILE -->
				<div class="mx-4 flex items-center space-x-2 py-2 md:mx-0 md:hidden">
					<button
						class="flex w-full items-center justify-center space-x-2 rounded-full bg-neutral-200 px-4 py-2.5 hover:bg-neutral-300 dark:hover:bg-neutral-800"
						on:click={() => updateLikes(data?.data.id)}
					>
						<Heart classNames="h-4 w-4" liked={typeof liked !== 'boolean' ? false : liked} />
						<p class="text-sm font-medium">Like Post</p>
					</button>
					<button
						class="flex w-full items-center justify-center space-x-2 rounded-full bg-neutral-200 px-4 py-2.5 hover:bg-neutral-300 dark:hover:bg-neutral-800"
						on:click={() => updateLikes(data?.data.id)}
					>
						<Share classNames="h-4 w-4 {liked ? 'stroke-red-500' : 'stroke-neutral-800'}" />
						<p class="text-sm font-medium">Share</p>
					</button>
				</div>
				<section
					class="my-4 flex w-full px-4 sm:my-6 md:my-8 md:items-end md:justify-between md:px-0"
				>
					<div class="flex w-full flex-col">
						<div class="flex w-full flex-shrink-0 justify-between">
							<h1 class=" whitespace-pre-line text-3xl font-medium md:text-3xl">
								{data?.data.title}
							</h1>
						</div>
						<div class="mt-3 flex items-center space-x-3 opacity-75 md:mt-2 md:space-x-4">
							<div class="text-sm">
								<!-- TODO: Add Link that navigates to Posts by Category -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<p class="">
									Kategoria:<a class="ml-1 underline" href="#">{data.data.category}</a>
								</p>
							</div>
							<div class="h-1.5 w-1.5 rounded-full bg-neutral-800 dark:bg-neutral-200" />
							<div class="text-sm">
								<!-- TODO: Add Link that navigates to Location Filter -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a class="underline" href="#">{data.data.city}, {data.data.country}</a>
							</div>
						</div>
					</div>
					<!-- !!!!!!!! DESKTOP -->
					<button
						class="hidden items-center space-x-2 whitespace-nowrap rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 md:flex"
						on:click={() => console.log('sharing')}
					>
						<Share classNames="h-4 w-4" />
						<p class="text-sm font-medium">Share</p>
					</button>
					<button
						class="hidden items-center space-x-2 whitespace-nowrap rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 md:flex"
						on:click={() => updateLikes(data?.data.id)}
					>
						<Heart
							classNames="h-4 w-4"
							liked={typeof liked !== 'boolean' ? false : liked}
						/>liked={typeof liked !== 'boolean' ? false : liked}
						<p class="text-sm font-medium">Like Post</p>
					</button>
				</section>

				<!-- ! Image Container -->
				<ImagePreview />
			</div>

			<!-- ! Bottom Content -->
			<div
				class="mt-8 flex items-start px-4 md:space-x-12 md:px-0"
				bind:this={bottomContentContainer}
			>
				<div class="flex w-full flex-col md:w-4/6">
					<!-- ? User Info Short -->
					<div
						class="flex w-full flex-col-reverse justify-between pb-8 md:flex-row md:items-center"
						bind:offsetHeight={bottomContentContainerOffsetHeight}
					>
						<!-- ? Bottom Display Information -->
						<!-- ? Profile Link Info -->
						<div class="flex flex-col">
							<div class="flex items-center">
								<h2 class="hidden text-lg font-medium md:block">Posted by</h2>
								<h2 class="text-2xl font-medium hover:underline md:ml-1.5">
									{data.data.author.firstName}
									{data.data.author.lastName}
								</h2>
								<div class="mx-4 hidden h-4 w-px bg-neutral-300 dark:bg-neutral-700 md:block" />
								<div class="hidden md:block">
									<Badge
										type="default"
										title={data.data.author.account_type == 'Personal' ? 'PERDORUES' : 'BIZNES'}
										sm
									/>
								</div>
							</div>
							<div class="mt-1 flex w-full items-center text-sm md:mt-2 md:w-fit">
								<div class=" md:hidden">
									<Badge
										type="default"
										title={data.data.author.account_type == 'Personal' ? 'PERDORUES' : 'BIZNES'}
										sm
									/>
								</div>
								<p class="ml-2 w-full whitespace-nowrap md:ml-0">Ne Pazar.al qe nga 2022</p>
							</div>
						</div>
						<div
							class="mb-2 h-16 w-16 overflow-hidden rounded-full bg-neutral-200 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20"
						>
							{#if data.data.author.profilePicture}
								<img
									src={data.data.author.profilePicture}
									alt="User's Profile"
									class="h-full w-full object-cover "
								/>
							{:else}
								<div
									class="relative flex h-full w-full items-center justify-center bg-neutral-200 text-3xl font-medium dark:bg-neutral-800"
								>
									<p>{data.data.author.firstName[0]}.{data.data.author.lastName[0]}</p>
									<p />
								</div>
							{/if}
						</div>
					</div>
					<hr class="mb-1 border-neutral-200 dark:border-neutral-800" />
					<!-- ? Post Information -->
					<div class="w-full scroll-m-20" bind:this={bottomContentContainer} id="tags">
						<PostInformation tags={data.data?.tags ?? []} />
					</div>
					<hr class="my-1 mb-6 border-neutral-200 dark:border-neutral-800" />
					<!-- ? Description -->
					<div class="my-4 w-full scroll-m-24" id="description">
						<h3 class="text-2xl font-medium ">Description:</h3>
						<p class="mt-4">{data.data.description}</p>
					</div>
					<hr class="my-6 border-neutral-200 dark:border-neutral-800" />
					<!-- ? Location -->
					<div class="my-4 w-full scroll-m-24" id="location">
						<h3 class="text-2xl font-medium">Location:</h3>
						<div class="relative flex items-center justify-between">
							<div class="z-10 h-[90%] w-full px-6">
								<p class="text-3xl font-medium">
									{data.data.city},
									{data.data.country}
								</p>
								<p class="mt-1 text-sm">Blv. Gjergj Fishta, Ish-Ekspozita</p>
								<button class="buttonSmRounded buttonSecondary mt-4 flex items-center">
									<Navigate class="h-4 w-4" />
									<p class="mx-2">Open in Maps</p>
								</button>
							</div>
							<Map
								country={data.data.country}
								city={data.data.city}
								classNames="z-10 px-12"
								mapClassNames="h-96"
							/>
							<div
								class="absolute top-1/2 h-[75%] w-full -translate-y-1/2 rounded-xl bg-neutral-200 dark:border dark:border-neutral-800 dark:bg-neutral-900"
							/>
						</div>
					</div>
					<hr class="my-6 border-neutral-200 dark:border-neutral-800" />
					<!-- ? Listing By: -->
					<div class="my-4 w-full scroll-m-24" id="author">
						<p class="text-lg font-medium">Listing by:</p>
						<h4 class="mt-1 text-4xl font-medium">
							{data.data.author.firstName}
							{data.data.author.lastName}
						</h4>

						<!-- Cover & Profile Picture -->
						<div
							class="relative mt-8 flex h-64 items-center overflow-hidden rounded-xl border-neutral-800 bg-neutral-100 dark:border dark:bg-neutral-900"
						>
							{#if data.data.author.sellerInfo?.coverPicture}
								<div
									class="absolute top-1/2 left-1/2 h-full w-full -translate-y-1/2 -translate-x-1/2"
								>
									<img
										src={data.data.author.sellerInfo?.coverPicture}
										alt="{data.data.author.firstName} {data.data.author.lastName} Cover Picture"
										class="h-[101%] w-[101%] object-cover"
									/>
								</div>
								<div
									class="absolute top-1/2 left-1/2 z-[5] h-full w-full -translate-y-1/2 -translate-x-1/2 bg-neutral-900 opacity-[85%]"
								/>
							{/if}
							<div class="z-10 mx-6 h-36 w-36 overflow-hidden rounded-full">
								{#if data.data.author.profilePicture}
									<img
										src={data.data.author.profilePicture}
										alt="{data.data.author.firstName} {data.data.author.lastName} Profile Picture"
										class="h-full w-full object-cover"
									/>
								{:else}
									<div
										class="relative flex h-full w-full items-center justify-center bg-neutral-200 text-5xl font-medium dark:bg-neutral-800"
									>
										<div
											class="absolute top-1/2 left-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-300 dark:border-neutral-700"
										/>
										<p>{data.data.author.firstName[0]}.{data.data.author.lastName[0]}</p>
										<p />
									</div>
								{/if}
							</div>
						</div>
						<div class="mt-4 flex items-center space-x-4">
							<button class="buttonPrimary buttonBase">Visit Profile</button>
							<button class="buttonSecondary buttonBase">Contact Seller</button>
						</div>
					</div>
				</div>

				<div
					class="hidden flex-col items-center md:sticky md:top-28 md:left-4 md:flex md:w-2/6"
					bind:this={postActions}
				>
					<div
						class="defaultBg shadowDark rounded-xl border border-neutral-300 p-4 dark:border-neutral-900 dark:bg-neutral-800"
					>
						<div class="mt-4 flex w-full items-center justify-between">
							<!-- Currency Symbol -->
							{#if data.data.priceHistory[0].eur ?? false}
								<Euro classNames="opacity-75 w-6 h-6 dark:fill-white" />
							{:else}
								<Lek classNames="opacity-75 h-5 dark:fill-white" />
							{/if}
							<!-- Price -->
							<p class="text-5xl font-medium">
								{formatPrice(data.data.priceHistory[0].price)}
							</p>
						</div>
						{#await currencyConversion(data.data.priceHistory[0].eur ? 'EUR' : 'ALL', data.data.priceHistory[0].eur ? 'ALL' : 'EUR', data.data.priceHistory[0].price) then convertedAmount}
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
		<article class="relative mb-4 min-h-screen w-full rounded-xl bg-neutral-100" />
	</section>

	<!-- ------------------------------------------- -->
	<!-- Ad Panel -->
	<article
		class="h-adPanel sticky top-4 right-0 rounded-md bg-neutral-100 dark:bg-neutral-800 lg:w-3/12"
	/>
</article>

<style>
	.h-adPanel {
		height: calc(100vh - 2rem);
	}

	.w-postNav {
		width: calc(100% * 11 / 12 * 9 / 12 - 0.75rem);
	}
</style>