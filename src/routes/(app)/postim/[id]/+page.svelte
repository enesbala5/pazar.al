<script lang="ts">
	// Icons
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
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
</script>

<article
	class="flex w-full flex-col justify-between lg:mx-auto lg:w-11/12 lg:flex-row lg:space-x-4"
>
	<article class="lg:w-9/12">
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
					on:click={() => updateLikes(data?.data.id)}
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
		<!-- Bottom Content -->
		<div class="mt-8 flex items-start px-4 md:space-x-12 md:px-0">
			<div class="flex w-4/6 flex-col-reverse justify-between md:flex-row md:items-center">
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
					<div class="mt-1 md:mt-2 flex items-center text-sm w-full md:w-fit">
						<div class=" md:hidden">
							<Badge
								type="default"
								title={data.data.author.account_type == 'Personal' ? 'PERDORUES' : 'BIZNES'}
								sm
							/>
						</div>
						<p class="ml-2 md:ml-0 w-full whitespace-nowrap">Ne Pazar.al qe nga 2022</p>
					</div>
				</div>
				<div
					class="w-16 h-16 overflow-hidden rounded-full lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 mb-2"
				>
					<img src={data.data.author.profilePicture} alt="User's Profile" />
				</div>
			</div>
			<div class="defaultBg shadowDark hidden h-96 rounded-xl p-4 md:block md:w-2/6" />
		</div>
	</article>

	<!-- ------------------------------------------- -->
	<!-- Ad Panel -->
	<article class="sticky top-0 rounded-md bg-neutral-100 dark:bg-neutral-800 lg:w-3/12" />
</article>
