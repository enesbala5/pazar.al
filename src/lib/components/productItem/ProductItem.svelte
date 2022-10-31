<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Post } from '@prisma/client';
	import Euro from '../logos/user/currencies/Euro.svelte';
	import Lek from '../logos/user/currencies/Lek.svelte';
	import Heart from '../logos/user/Heart.svelte';

	export let card: boolean;

	export let product: Post;
	export let skeleton: boolean = false;

	const gotoPost = () => {
		goto(`/postim/${product.pid}`);
	};
</script>

{#if card}
	<section class="group relative mx-2 my-4 mb-12 min-h-[30vh] rounded-md">
		<div
			class="absolute top-0 left-0 z-10 h-full w-full cursor-pointer overflow-hidden rounded-md"
			on:click={gotoPost}
			on:keydown={gotoPost}
		>
			<img
				src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
				alt={product.title}
				class=" transition-scale h-full w-full object-cover group-active:scale-110 lg:group-hover:scale-110 lg:group-active:scale-100"
			/>
			<div
				class="absolute bottom-0 z-20 h-2/3 w-full rounded-md bg-gradient-to-t from-black to-transparent "
			/>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class=" absolute bottom-8 z-30 cursor-pointer px-4"
			on:click={gotoPost}
			on:keydown={gotoPost}
		>
			<h3 class="text-xl">{product.title}</h3>
			<p class="opacity-70">{product.description}</p>
		</div>

		<div
			class=" absolute bottom-0 left-2.5 z-30 translate-y-1/2 rounded-sm bg-neutral-900 p-1.5 font-medium"
		>
			<section class="flex items-center rounded-sm bg-indigo-600 py-0.5 px-2">
				<div aria-label="Currency Used" class="mr-2 opacity-80">
					{#if product.eur}
						<Euro classNames="fill-white h-2.5" />
					{:else}
						<Lek classNames="fill-white h-2.5" />
					{/if}
				</div>
				<p>{product.price.toLocaleString()}</p>
			</section>
		</div>

		<!-- Like Button -->
		<div class="absolute bottom-0 z-30 flex w-full cursor-pointer items-center  justify-end p-4">
			<Heart classNames="h-5 fill-white w-5 opacity-80 " />
		</div>
	</section>
{:else}
	<section class="relative my-4 mx-4 mb-6 flex h-auto items-center ">
		<div
			class="absolute left-0 h-full w-1/3 cursor-pointer "
			on:click={gotoPost}
			on:keydown={gotoPost}
		>
			<img
				src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
				alt={product.title}
				class=" h-full w-full rounded-md object-cover"
			/>
		</div>
		<div class="invisible w-1/3" />
		<div class="w-2/3 cursor-pointer  py-4 pl-4" on:click={gotoPost} on:keydown={gotoPost}>
			<h3 class=" ">{product.title}</h3>
			<p class="text-sm opacity-70">{product.description}</p>

			<section
				aria-label="Pricing and User Actions"
				class="mt-3 flex  w-full items-center justify-between"
			>
				<section class="flex items-center rounded-sm bg-indigo-600 py-0.5 px-2">
					<div aria-label="Currency Used" class="mr-2 opacity-80">
						{#if product.eur}
							<Euro classNames="fill-white h-2.5" />
						{:else}
							<Lek classNames="fill-white h-2.5" />
						{/if}
					</div>
					<p class="text-sm">{product.price.toLocaleString()}</p>
				</section>
				<Heart classNames="h-5 fill-white w-5 opacity-80 " />
			</section>
		</div>
	</section>
{/if}

<style>
	.transition-scale {
		transition: all 2s;
		transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
	}
</style>
