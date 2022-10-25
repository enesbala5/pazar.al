<script lang="ts">
	import type { Post } from '@prisma/client';
	import Euro from '../logos/user/currencies/Euro.svelte';
	import Lek from '../logos/user/currencies/Lek.svelte';

	export let card: boolean;

	export let product: Post;
</script>

{#if card}
	<section class="relative mx-2 my-4 mb-12 min-h-[30vh] rounded-md">
		<img
			src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
			alt={product.title}
			class="absolute top-0 left-0 z-10 h-full w-full rounded-md object-cover"
		/>
		<div
			class="absolute bottom-0 z-20 h-2/3 w-full rounded-md bg-gradient-to-t from-black to-transparent "
		/>

		<div class=" absolute bottom-8 z-30 px-4">
			<h3 class="text-xl ">{product.title}</h3>
			<p class="opacity-70">{product.description}</p>
		</div>

		<div
			class=" absolute bottom-0 left-2.5 z-30 translate-y-1/2 rounded-sm bg-neutral-900 p-1.5  font-medium"
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
	</section>
{:else}
	<div>Test2</div>
{/if}
