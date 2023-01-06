<script lang="ts">
	// ? CAROUSEL
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';
	// Carousel Styling
	import 'swiper/css';
	import 'swiper/css/pagination';
	// SvelteKit Functions
	import { browser } from '$app/environment';
	// Images / Cloudinary
	import { image, initialize } from 'svelte-cloudinary';

	// Pagination Clasess
	const pagination = {
		clickable: true,
		renderBullet: function (index: any, className: any) {
			return `<span class="${className}"></span>`;
		},
	};
	// Variable Initialisations
	export let images = [
		{
			public_id: 'Range Rover 2022',
			link: 'my-uploads/range2_jwgd0g.webp',
		},
		{
			public_id: 'Cover',
			link: 'my-uploads/range_nxct2q.jpg',
		},
		{
			public_id: 'Cover',
			link: 'my-uploads/range3_oy6jr1.jpg',
		},
	];

	// Function to link component to Cloudinary API
	if (browser) {
		initialize({
			cloud_name: 'pazar-al',
			api_key: '456488463241268',
		});
	}
</script>

<div
	class="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-t-xl bg-neutral-100 dark:bg-neutral-900 sm:aspect-[20/9] md:rounded-xl"
>
	<Swiper {pagination} modules={[Pagination]} class="h-full w-full overflow-hidden rounded-md">
		{#each images as cloudinaryImage, i}
			<SwiperSlide
				class="
			{i === 0
					? 'lg:rounded-l-x overflow-hidden rounded-l-md md:rounded-l-lg'
					: i === images?.length - 1
					? 'lg:rounded-r-x overflow-hidden rounded-r-md md:rounded-r-lg'
					: ''}
					relative flex items-center justify-center
			"
			>
				<!-- <img
					src={cloudinaryImage.link}
					alt={cloudinaryImage.public_id}
					class="z-10 h-full object-cover"
				/> -->
				<img
					use:image={{ src: cloudinaryImage.link, bind: true, options: {
						resetTransformations: true
					} }}
					class="z-10 h-full w-full object-contain"
					alt="background"
				/>

				<img
					use:image={{ src: cloudinaryImage.link, bind: true }}
					class="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 blur-xl"
					alt="background"
				/>
				<!-- <img
					src={image.link}
					alt={image.public_id}
					class="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 blur-xl"
				/> -->

				<!-- <picture class="h-full w-full">
					<source media="(min-width: 1024px)" srcset="/images/promo/coverLg.svg" />
					<img src="/images/promo/coverSm.svg" alt="" class="h-full w-full  object-cover " />
				</picture> -->
			</SwiperSlide>
		{/each}
	</Swiper>
	<div class="button" />
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
