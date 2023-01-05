<script lang="ts">
	import type { Product } from '$lib/types/product';
	import { nav } from '$lib/userState/nav';
	import type { ProductItemFormat } from '$lib/userState/preferences';

	import Heart from '../logos/user/Heart.svelte';
	import PriceDisplay from './PriceDisplay.svelte';

	export let card: ProductItemFormat;
	export let margin: boolean = true;
	export let marginX: boolean = true;

	export let product: Product;
	export let skeleton: boolean = false;

	const getPostURL = () => {
		if (!product.disabled) {
			return `${nav.post}/${product.id}`;
		}
		return '#';
	};

	let postURL = getPostURL();

	$: product.id, (postURL = getPostURL());
</script>

{#if card === 'card'}
	<section
		class="group relative {margin
			? `${marginX ? 'mx-2' : 'mx-2'} my-4 mb-12`
			: ''} min-h-[30vh] rounded-md  md:min-h-0"
	>
		<div
			class="absolute top-0 left-0 z-10 h-full w-full overflow-hidden rounded-md md:static md:z-0 md:h-48"
		>
			<a href={postURL} class="h-full w-full">
				<img
					src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
					alt={product.title}
					class="transition-bezier h-full w-full object-cover group-active:scale-110 lg:group-hover:scale-110 lg:group-active:scale-100"
				/>
			</a>
			<div
				class="inverted group right-2 top-2 z-50 hidden h-6 w-6 cursor-pointer  items-center justify-center md:absolute md:flex"
			>
				<Heart classNames="h-5 w-5" inverted />
			</div>
		</div>
		<!-- Shadow -->
		<div
			class="absolute bottom-0 z-20 h-2/3 w-full rounded-md bg-gradient-to-t from-black to-transparent md:hidden"
		/>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a class="absolute bottom-8 z-30 cursor-pointer px-4 md:static md:px-0" href={postURL}>
			<h3 class="text-xl text-neutral-50 dark:text-neutral-200 md:mt-2 md:text-neutral-900">
				{product.title}
			</h3>
			<p class="text-neutral-50 opacity-70 dark:text-neutral-200 md:text-neutral-900 ">
				{product.description}
			</p>
		</a>

		<div
			class="absolute  bottom-0 left-2.5 z-30 w-fit translate-y-1/2 rounded-sm bg-neutral-50 p-1.5 font-medium dark:bg-neutral-900 md:static md:mt-2 md:translate-y-0 md:p-0"
		>
			<PriceDisplay price={product.priceHistory[0].price} eur={product.priceHistory[0].eur} />
		</div>

		<!-- Like Button -->
		<div
			class="absolute bottom-0 z-30 flex w-full cursor-pointer items-center justify-end  p-4 md:hidden"
		>
			<Heart classNames="h-5 w-5 " inverted />
		</div>
	</section>
{/if}
{#if card === 'list'}
	<section class="relative my-4 mb-6 flex h-auto w-full items-center px-2">
		<div class=" minWidthNonCard left-0 h-full cursor-pointer ">
			<a href={postURL}>
				<img
					src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
					alt={product.title}
					class="h-full w-full rounded-md object-cover"
				/>
			</a>
		</div>
		<a class="w-2/3 cursor-pointer py-4 pl-4" href={postURL}>
			<h3 class="md:text-lg lg:text-xl">{product.title}</h3>
			<p class="text-sm opacity-70 md:text-base">{product.description}</p>

			<section
				aria-label="Pricing and User Actions"
				class="mt-3 flex  w-full items-center justify-between"
			>
				<PriceDisplay price={product.priceHistory[0].price} eur={product.priceHistory[0].eur} />
				<Heart classNames="h-5 fill-white w-5 opacity-80 " />
			</section>
		</a>
	</section>
{/if}
{#if card === 'minimized'}
	<!-- ! MINIMIZED IS FOR MOBILE ONLY -->
	<section class="flex flex-col lg:hidden">
		<a href={postURL} class="flex h-32 min-h-[8rem] w-40 min-w-[10rem] items-center justify-center">
			<img
				src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
				alt={product.title}
				class=" h-full w-full  grow rounded-md object-cover"
			/>
		</a>
		<section class="mt-1.5 w-full">
			<a class="w-full " href={postURL}>
				<h3 class="leading-5 md:text-lg lg:text-xl lg:leading-7">{product.title}</h3>
				<!-- <p class="text-sm opacity-70 md:text-base">{product.description}</p> -->
			</a>
			<section class="mt-2 w-fit" aria-label="Pricing and User Actions">
				<PriceDisplay price={product.priceHistory[0].price} eur={product.priceHistory[0].eur} />
			</section>
		</section>
	</section>

	<!-- ! IF !MOBILE -> SHOW card === 'card' VERSION -->
	<section
		class="
		{margin ? 'mx-2 my-4 mb-12' : ''}
		group relative hidden min-h-[30vh] rounded-md md:min-h-0 lg:block"
	>
		<div
			class="absolute top-0 left-0 z-10 h-full w-full overflow-hidden rounded-md md:static md:z-0 md:h-48"
		>
			<a href={postURL} class="h-full w-full">
				<img
					src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
					alt={product.title}
					class="transition-bezier h-full w-full object-cover group-active:scale-110 lg:group-hover:scale-110 lg:group-active:scale-100"
				/>
			</a>
			<div
				class="inverted group right-2 top-2 z-50 hidden h-6 w-6 cursor-pointer  items-center justify-center md:absolute md:flex"
			>
				<Heart classNames="h-5 w-5" inverted />
			</div>
		</div>
		<!-- Shadow -->
		<div
			class="absolute bottom-0 z-20 h-2/3 w-full rounded-md bg-gradient-to-t from-black to-transparent md:hidden"
		/>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a class="absolute bottom-8 z-30 cursor-pointer px-4 md:static md:px-0" href={postURL}>
			<h3 class="text-xl text-neutral-50 dark:text-neutral-200 md:mt-2 md:text-neutral-900">
				{product.title}
			</h3>
			<p class="text-neutral-50 opacity-70 dark:text-neutral-200 md:text-neutral-900 ">
				{product.description}
			</p>
		</a>

		<div
			class="absolute  bottom-0 left-2.5 z-30 w-fit translate-y-1/2 rounded-sm bg-neutral-50 p-1.5 font-medium dark:bg-neutral-900 md:static md:mt-2 md:translate-y-0 md:p-0"
		>
			<PriceDisplay price={product.priceHistory[0].price} eur={product.priceHistory[0].eur} />
		</div>

		<!-- Like Button -->
		<div
			class="absolute bottom-0 z-30 flex w-full cursor-pointer items-center justify-end  p-4 md:hidden"
		>
			<Heart classNames="h-5 w-5 " inverted />
		</div>
	</section>
{/if}

<style>
	:global(.transition-bezier) {
		transition: all 2s;
		transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
	}

	.minWidthNonCard {
		min-width: 1/3;
		width: 33%;
	}
</style>
