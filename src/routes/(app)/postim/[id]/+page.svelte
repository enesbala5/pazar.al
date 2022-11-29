<script lang="ts">
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import likePost from '$lib/fetching/likePost';
	import type { Product } from '$lib/types/product';
	import type { PageData } from './$types';

	interface PostimPageRequest {
		data: Product;
		isLiked: boolean;
	}

	export let { data, isLiked }: PostimPageRequest | any = {};
</script>

<article class="p-2">
	<section class="aspect-[4/3] overflow-hidden rounded-md">
		<img
			src="https://imageio.forbes.com/specials-images/imageserve/629a9b78906d4154a84fcbbd/2022-Land-Rover-Range-Rover-7/960x0.jpg?format=jpg&width=960"
			alt=""
			class="h-full object-cover "
		/>
	</section>
	<section class="mt-4 px-2">
		<section class="mt-2 flex items-center justify-between">
			<div class="w-fit rounded-md bg-indigo-700 py-0.5 px-2 text-sm">
				<p>
					{`${data?.city}, ${data?.country}`}
				</p>
			</div>

			<div class="flex items-center space-x-2">
				<button
					on:click={() => likePost(data?.id)}
					class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 p-2"
				>
					<Heart classNames="h-full w-full {isLiked? 'stroke-red-500' : 'stroke-white'}" />
				</button>
			</div>
		</section>
		<section class="mt-4">
			<h1 class="text-2xl font-medium">{data?.title}</h1>

			<div class="mt-8">
				<h2 class="text-lg font-medium">Description</h2>
				<p class="mt-2">{data?.description}</p>
			</div>
		</section>
	</section>
</article>
