<script lang="ts">
	// Icons
	import Euro from '$lib/components/logos/user/currencies/Euro.svelte';
	import Lek from '$lib/components/logos/user/currencies/Lek.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import Map from '$lib/components/UI/Location/Map.svelte';
	import ImagePreview from '$lib/components/UI/Sections/Post/ImagePreview.svelte';
	// Imported Functions
	import manageLike from '$lib/fetching/manageLike';
	// Types
	import type { PageData } from './$types';
	import type { PostimPageRequest } from './+page';
	// -----------

	// Variable Declaration
	export let data: PostimPageRequest;
	let liked: boolean = data?.isLiked;
	let likedCache: boolean = liked;

	// Function
	const updateLikes = async (postId: string) => {
		if (!postId || typeof postId !== 'string') {
			likeError = true;
			return;
		}
		liked = !liked;
		let updatedLikes: any = await manageLike(postId, !liked);
		if (updatedLikes === true) {
			liked = likedCache;
		}
	};

	$: data, console.log(data.data);

	const formatPrice = (num: any) => parseFloat(num).toFixed(2).toLocaleString();
</script>

<!-- NAVBAR -->

<article
	class="flex w-full flex-col justify-between lg:mx-auto lg:w-11/12 lg:flex-row lg:space-x-4"
>
	<article class="lg:w-9/12">
	<menu class="sticky top-4 left-4 h-24 w-full bg-neutral-50 z-50 border-b border-neutral-200">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#">Link 1</a>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#">Link 1</a>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#">Link 1</a>
	</menu>
		<!-- Top Content (Image + Title) -->
		<div class="flex flex-col-reverse md:flex-col">
			<!-- ! Title and Quick Actions -->
			<div class="mx-4 flex items-center space-x-2 py-2 md:mx-0 md:hidden">
				<button
					class="flex w-full items-center justify-center space-x-2 rounded-full bg-neutral-100 px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800"
					on:click={() => updateLikes(data?.data.id)}
				>
					<Heart classNames="h-5 w-5 {liked ? 'stroke-red-500' : 'stroke-neutral-800'}" />
					<p class="text-sm font-medium">Like Post</p>
				</button>
				<button
					class="flex w-full items-center justify-center space-x-2 rounded-full bg-neutral-100 px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800"
					on:click={() => updateLikes(data?.data.id)}
				>
					<Heart classNames="h-5 w-5 {liked ? 'stroke-red-500' : 'stroke-neutral-800'}" />
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
							<p class="">Kategoria:<a class="ml-1" href="#">{data.data.category}</a></p>
						</div>
						<div class="h-1.5 w-1.5 rounded-full bg-neutral-800 dark:bg-neutral-200" />
						<div class="text-sm">
							<!-- TODO: Add Link that navigates to Location Filter -->
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a class="underline" href="#">{data.data.city}, {data.data.country}</a>
						</div>
					</div>
				</div>
				<button
					class="hidden items-center space-x-2 whitespace-nowrap rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 md:flex"
					on:click={() => console.log('sharing')}
				>
					<Heart classNames="h-5 w-5 {liked ? 'stroke-red-500' : 'stroke-neutral-800'}" />
					<p class="text-sm font-medium">Share</p>
				</button>
				<button
					class="hidden items-center space-x-2 whitespace-nowrap rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 md:flex"
					on:click={() => updateLikes(data?.data.id)}
				>
					<Heart classNames="h-5 w-5 {liked ? 'stroke-red-500' : 'stroke-neutral-800'}" />
					<p class="text-sm font-medium">Like Post</p>
				</button>
			</section>

			<!-- ! Image Container -->
			<ImagePreview />
		</div>
		
		<!-- ! Bottom Content -->
		<div class="mt-8 flex items-start px-4 md:space-x-12 md:px-0">
			<div class="flex w-full flex-col md:w-4/6">
				<!-- User Info Short -->
				<div class="flex w-full flex-col-reverse justify-between md:flex-row md:items-center">
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
						class="mb-2 h-16 w-16 overflow-hidden rounded-full lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20"
					>
						<img src={data.data.author.profilePicture} alt="User's Profile" />
						<!-- !  -->
					</div>
				</div>
				<!-- ? Tags -->
				<hr class="my-1 mt-8 border-neutral-200 dark:border-neutral-800" />
				<div class="w-full">
					<div class=" mb-4 mt-6 flex flex-wrap">
						{#each data.data.tags ?? [] as tag}
							<Badge title="{tag.name}:" message={tag.value} margin />
						{/each}
					</div>
				</div>
				<hr class="my-1 mb-6 border-neutral-200 dark:border-neutral-800" />

				<div class="my-4 w-full">
					<h3 class="text-2xl font-medium ">Description:</h3>
					<p class="mt-4">{data.data.description}</p>
				</div>
				<hr class="my-6 border-neutral-200 dark:border-neutral-800" />
				<!-- ? Location -->
				<div class="my-4 w-full">
					<h3 class="text-2xl font-medium ">Location:</h3>
					<div class="relative flex items-center justify-between">
						<div class="z-10 h-[90%] w-full px-6">
							<p class="text-3xl font-medium">
								{data.data.city},
								{data.data.country}
							</p>
							<p class="mt-1 text-sm">Blv. Gjergj Fishta, Ish-Ekspozita</p>
							<button class="buttonSmall mt-4 flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="h-5 w-5"
								>
									<path
										fill-rule="evenodd"
										d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
										clip-rule="evenodd"
									/>
								</svg>
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
				<div class="my-4 w-full">
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
					<div class="mt-6 flex items-center space-x-4">
						<button class="buttonPrimary">Visit Profile</button>
						<button class="buttonSecondary">Contact Seller</button>
					</div>
				</div>
			</div>

			<div class="hidden flex-col items-center md:sticky md:top-12 md:left-4 md:flex md:w-2/6">
				<div class="defaultBg shadowDark rounded-xl p-4 dark:border-none dark:bg-neutral-800">
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
					<p class="mt-2 text-right text-sm opacity-80">Approx. 19031 Lek</p>
					<hr class="mb-6 mt-8 border-neutral-200 dark:border-neutral-800" />
					<div>
						<button class="buttonPrimary w-full">Message Seller</button>
						<button class="buttonSecondary mt-2 w-full">Contact on WhatsApp</button>
						<button class="buttonSecondary mt-2 w-full">Contact on Facebook Messenger</button>
					</div>
				</div>
				<div class="group my-4 flex items-center space-x-2 text-sm opacity-50 hover:cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-4 w-4"
					>
						<path
							d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z"
						/>
					</svg>

					<p class="group-hover:underline">Report this listing</p>
				</div>
			</div>
		</div>
	</article>

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
</style>
