<script lang="ts">
	// ? CAROUSEL
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	// Carousel Styling
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/zoom';
	import { Zoom, Navigation, Pagination } from 'swiper';

	// SvelteKit Functions
	import { browser } from '$app/environment';
	// Images / Cloudinary
	import { image, initialize } from 'svelte-cloudinary';
	import type { Image } from '@prisma/client';

	// Pagination Clasess
	const pagination = {
		clickable: true,
		renderBullet: function (index: any, className: any) {
			return `<span class="${className}"></span>`;
		},
	};
	// Variable Initialisations

	interface LocalImage extends Image {
		previewedHQ?: boolean;
	}
	export let images: LocalImage[] = [];

	// Function to link component to Cloudinary API
	if (browser) {
		initialize({
			cloud_name: 'pazar-al',
			api_key: '456488463241268',
		});
	}
	// Icons
	import ImageIcon from '~icons/feather/image';
	import UploadIcon from '~icons/feather/upload-cloud';
	import GridIcon from '~icons/feather/grid';
	import RemoveIcon from '~icons/feather/x';

	import { fade } from 'svelte/transition';
	import { linear, quadOut } from 'svelte/easing';
	let fullscreen: boolean = false;
	let fullscreenDeferred = false;

	import { scrollingAllowed } from '$lib/userState/preferences';

	const wheel = (node: any, options: any) => {
		let { scrollable } = options;
		const handler = (e: any) => {
			if (!scrollable) e.preventDefault();
		};
		node.addEventListener('wheel', handler, {
			passive: false,
		});
		return {
			update(options: any) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, {
					passive: false,
				});
			},
		};
	};

	const checkForEscape = (event: any) => {
		let char = typeof event !== 'undefined' ? event.keyCode : '';

		// IF CHAR === 27
		if (char === 27) {
			fullscreen = false;
			scrollingAllowed.set(true);
		}
	};

	let scrollable: boolean = true;
	scrollingAllowed.subscribe((value) => (scrollable = value));

	$: index, (fullscreenDeferred = false);
	$: if (fullscreen) fullscreenDeferred = true;

	let index: number = 0;

	// Simple variable for #key
	let keyValue = fullscreenDeferred ? 0 : 1 + index;
	$: keyValue = fullscreenDeferred ? 0 : 1 + index;

	/* "swiper" event emitted with "swiper" instance argument */
	const onSwiper = (e: any) => {
		const [swiper] = e.detail;
		index = swiper.realIndex;
	};

	const updatePreviewedHQ = (index: number, fullscreen: boolean) => {
		if (images !== undefined && images && images.length > 0) {
			if (fullscreen) {
				images[index].previewedHQ = true;
			}
		}
	};

	$: updatePreviewedHQ(index, fullscreen);

	export let showEditButton: boolean = false;
</script>

<svelte:window use:wheel={{ scrollable }} on:keydown={checkForEscape} />

<div
	class={fullscreen
		? 'fixed top-0 left-0 z-50 h-screen w-full'
		: 'aspect-[4/3] h-fit w-full rounded-t-xl sm:aspect-[20/9] md:rounded-xl'}
>
	{#if images.length > 0 && images}
		<div
			class="
		{fullscreen
				? 'h-screen w-screen bg-neutral-900'
				: 'aspect-[4/3] rounded-t-xl bg-neutral-100 sm:aspect-[20/9] md:rounded-xl'}
		relative flex w-full items-center justify-center overflow-hidden  dark:bg-neutral-900"
			id="wrapper"
		>
			<Swiper
				{pagination}
				navigation={true}
				on:slideChange={onSwiper}
				on:click={() => (fullscreen = true)}
				zoom={true}
				modules={[Zoom, Navigation, Pagination]}
				keyboard={{
					enabled: true,
					onlyInViewport: false,
				}}
				class="mySwiper h-full w-full overflow-hidden rounded-md"
			>
				{#each images as cloudinaryImage, i}
					<SwiperSlide
						class="
				{i === 0
							? 'lg:rounded-l-x overflow-hidden rounded-l-md md:rounded-l-lg'
							: i === images?.length - 1
							? 'lg:rounded-r-x overflow-hidden rounded-r-md md:rounded-r-lg'
							: ''}
						relative  flex items-center justify-center 
				"
					>
						<div class="swiper-zoom-container z-50 h-full w-full ">
							{#key keyValue}
								<img
									use:image={{
										src: cloudinaryImage.publicId,
										bind: cloudinaryImage?.previewedHQ
											? {}
											: fullscreen
											? {}
											: { height: '#wrapper' },
										lazy: false,
									}}
									class="
					{fullscreen ? 'max-h-[90%]' : ''}
							z-50 h-full w-fit object-contain"
									alt="background"
								/>
							{/key}
						</div>

						{#if fullscreen}
							<div
								in:fade={{ duration: 1500, easing: linear }}
								out:fade={{ duration: 500, easing: quadOut }}
								class="absolute left-0 top-0 h-screen w-screen bg-black"
								on:submit|preventDefault={() => {
									fullscreen = false;
									scrollingAllowed.set(true);
								}}
							/>
						{/if}
						<img
							use:image={{
								src: cloudinaryImage.publicId,
								options: {
									height: 200,
								},
								lazy: false,
							}}
							class="absolute top-1/2 left-1/2 z-40  w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 
							transition-all ease-in-out {fullscreen ? 'blur-3xl' : 'blur-xl'}
						"
							alt="background"
						/>
					</SwiperSlide>
				{/each}
			</Swiper>

			{#if fullscreen}
				<form
					class=" absolute right-6 top-6 z-[200] "
					on:submit|preventDefault={() => {
						fullscreen = false;
						scrollingAllowed.set(true);
					}}
				>
					<button class="buttonSecondary   rounded-full p-2">
						<RemoveIcon class="h-5 w-5 " />
					</button>
				</form>
			{/if}
			{#if showEditButton && !fullscreen}
				<div class="absolute left-4 bottom-4 z-[2000] flex items-center space-x-2">
					<a href="#" class="buttonPrimary buttonXs flex items-center space-x-2">
						<UploadIcon class="h-4 w-4 text-white" />
						<p>Upload Image</p>
					</a>
					<a href="#" class="buttonSecondary buttonXs flex items-center space-x-2">
						<GridIcon class="iconColors h-4 w-4" />
						<p>Change Order</p>
					</a>
				</div>
			{/if}
		</div>
	{:else}
		<div
			class="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-t-xl bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 dark:bg-opacity-50 sm:aspect-[20/9] md:rounded-xl"
			id="wrapper"
		>
			<ImageIcon class="mx-auto h-12 w-12 text-neutral-400 dark:text-neutral-500" />
			{#if showEditButton && !fullscreen}
				<div class="absolute left-4 bottom-4 z-[2000]">
					<a href="#" class="buttonPrimary buttonXs flex items-center space-x-2">
						<UploadIcon class="h-4 w-4 text-white" />
						<p>Upload Image</p>
					</a>
				</div>
			{/if}
		</div>
	{/if}
</div>

<!-- <div
	class="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-t-xl bg-neutral-100 sm:aspect-[20/9] md:rounded-xl"
>
	<img
		src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
		alt=""
		class="z-10 h-full object-cover"
	/>
	<img
		src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
		alt=""
		class="absolute  top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 blur-xl"
	/>
	<div class="button" />
</div> -->
<style>
	:global(.swiper-pagination-bullet) {
		height: 0.375rem;
		width: 100%;
		border-radius: 9999px;
		opacity: 20%;
		/* mix-blend-mode: exclusion; */

		--tw-bg-opacity: 1 !important;
		background-color: rgb(229 229 229 / var(--tw-bg-opacity)) !important;
	}

	:global(.swiper-pagination-bullet-active) {
		opacity: 50%;
	}

	:global(.swiper-pagination) {
		left: 50% !important;
		transform: translateX(-50%) !important;
		display: flex !important;
		/* background-color: pink !important; */
		align-items: center !important;
		justify-content: center !important;
		padding-left: 0.5rem /* 16px */ !important;
		padding-right: 0.5rem /* 16px */ !important;
	}

	@media (min-width: 768px) {
		:global(.swiper-pagination) {
			width: 50% !important;
			padding-left: 0px !important;
			padding-right: 0px !important;
		}
	}

	@media (min-width: 1024px) {
		:global(.swiper-pagination) {
			width: 33.333333% !important;
		}
	}

	.dark :global(.swiper-pagination-bullet) {
		--tw-bg-opacity: 1;
		background-color: rgb(115 115 115 / var(--tw-bg-opacity));
	}
</style>
