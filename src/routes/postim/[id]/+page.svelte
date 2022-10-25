<script lang="ts">
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Save from '$lib/components/logos/user/Save.svelte';
	import { card } from '$lib/userPreferences/preferences';
	import type { Post } from '@prisma/client';

	import type { PageData } from './$types';
	export let data: PageData;

	let productSearchInput: string = data?.kerkim ?? '';
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
					{`${data.data?.city}, ${data.data?.country}`}
				</p>
			</div>

			<div class="flex items-center space-x-2">
				<div
					class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 p-2"
				>
					<Heart classNames="w-full h-full fill-white " />
				</div>
				<div
					class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 p-2"
				>
					<Save classNames="w-full h-full fill-white " />
				</div>
			</div>
		</section>
		<section class="mt-4">
			<h1 class="text-2xl font-medium">{data.data?.title}</h1>

			<div class="mt-8">
				<h2 class="text-lg font-medium">Description</h2>
				<p class="mt-2">{data.data?.description}</p>
			</div>
		</section>
	</section>
</article>
