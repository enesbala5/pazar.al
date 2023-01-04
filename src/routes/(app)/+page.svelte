<script lang="ts">
	import RecommendedItems from '$lib/components/UI/Highlighted/RecommendedItems.svelte';
	import TopDeals from '$lib/components/UI/Highlighted/TopDeals.svelte';
	import SearchForm from '$lib/components/UI/SearchForm.svelte';
	import PopularCategories from '$lib/components/UI/Sections/PopularCategories.svelte';
	import PartnerImage from '$lib/components/UI/Sections/Secondary/PartnerImage.svelte';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';

	const pagination = {
		clickable: true,
		renderBullet: function (index: any, className: any) {
			return `<span class="${className}"></span>`;
		},
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home Page" />
</svelte:head>

<!-- Page Content -->
<article class="mt-4 w-full bg-neutral-50 dark:bg-neutral-900 lg:px-4">
	<!-- ! Mobile Only -->
	<div class="px-4 lg:hidden">
		<SearchForm itemsPerPage={15} />
	</div>

	<!-- ! Carousel -->
	<div class="relative mb-8 mt-8 h-[15rem] w-full  px-4 md:px-0 lg:mt-4 lg:h-[25rem]">
		<Swiper
			{pagination}
			modules={[Pagination]}
			class="h-full w-full overflow-hidden rounded-md md:rounded-lg lg:rounded-xl"
		>
			<SwiperSlide class="">
				<picture class="h-full w-full">
					<source media="(min-width: 1024px)" srcset="images/promo/coverLg.svg" />
					<img
						src="images/promo/coverSm.svg"
						alt=""
						class="h-full w-full rounded-md object-cover "
					/>
				</picture>
			</SwiperSlide>
			<SwiperSlide class="flex items-center justify-center bg-neutral-200 dark:bg-neutral-800"
				>Slide 2</SwiperSlide
			>
			<SwiperSlide class="flex items-center justify-center bg-neutral-200 dark:bg-neutral-800"
				>Slide 3</SwiperSlide
			>
		</Swiper>
		<!-- ? OLD CUSTOM PAGINATION  -->
		<!-- <div
			class="absolute -bottom-4 left-1/2 flex w-full -translate-x-1/2 items-center space-x-2 px-4 md:bottom-4 md:w-1/2 md:px-0 lg:w-1/3"
		>
			{#each Array(3) as _, i}
				<button
					on:click={() => (image = i)}
					class="
				{image === i ? 'opacity-50' : 'opacity-20'}
				h-1.5 w-full rounded-full bg-neutral-900 dark:bg-neutral-500 md:bg-neutral-50"
				/>
			{/each}
		</div> -->
		<!-- ? END -->
	</div>

	<!-- ! Recommended -->
	<section class="mx-auto mt-16 lg:w-10/12">
		<RecommendedItems />
	</section>
	<!-- Recommended Categories -->
	<section class="mx-auto my-24 hidden w-10/12 grid-cols-4 grid-rows-2 gap-4 md:grid">
		<!-- Left -->
		<div
			class="col-span-2 row-span-2 flex flex-col items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800"
		>
			<img src="images/categories/confetti.png" class="h-48 w-48" alt="" />
		</div>
		<!-- Right -->
		<div
			class="flex aspect-[4/3] flex-col items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800"
		>
			<img src="images/categories/message.png" class="h-12 w-12 object-cover" alt="" />
		</div>
		<div
			class="flex aspect-[4/3] flex-col items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800"
		>
			<img src="images/categories/video.png" class="h-12 w-12 object-cover" alt="" />
		</div>
		<div
			class="flex aspect-[4/3] flex-col items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800"
		>
			<img src="images/categories/ball.png" class="h-12 w-12 object-cover" alt="" />
		</div>
		<div
			class="flex aspect-[4/3] flex-col items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800"
		>
			<img src="images/categories/fire.png" class="h-12 w-12 object-cover" alt="" />
		</div>
	</section>
	<!-- Top Deals -->
	<section class="mx-auto mt-16 lg:w-10/12 ">
		<TopDeals />
	</section>
	<section class="mt-16 lg:mx-auto lg:w-10/12">
		<PopularCategories />
	</section>

	<section class="mx-auto my-24 px-4 lg:w-10/12 lg:px-0">
		<div class="flex items-end justify-between">
			<p class="h3 font-medium">Partners</p>
			<a class="font-medium uppercase opacity-80" href="recommended">View All</a>
		</div>
		<div class="mt-8 grid grid-cols-4 grid-rows-2 gap-4">
			<PartnerImage name="Miele.svg" />
			<PartnerImage name="Kastrati.png" />
			<PartnerImage name="Neptun.jpg" />
			<PartnerImage name="BuySmartStore.webp" />
			<PartnerImage name="3VFejzo.png" />
			<PartnerImage name="Hertz.svg" />
			<PartnerImage name="EcoMarket.png" />
			<PartnerImage name="Balfin.png" />
		</div>
	</section>
</article>

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
