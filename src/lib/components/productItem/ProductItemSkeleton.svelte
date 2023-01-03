<script lang="ts">
	import type { ProductItemFormat } from '$lib/userState/preferences';
	import Heart from '../logos/user/Heart.svelte';

	export let index: number;
	export let card: ProductItemFormat;
</script>

{#if card === 'card'}
	<section class="group relative mx-2 my-4 mb-12 min-h-[30vh] animate-pulse rounded-md">
		<div class="absolute top-0 left-0 z-10 h-full w-full overflow-hidden rounded-md">
			<div class="h-full w-full bg-neutral-800" />
			<div
				class="absolute bottom-0 z-20 h-full w-full rounded-md bg-gradient-to-t from-transparent to-neutral-700 "
			/>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class=" absolute bottom-8 z-30 w-full px-4">
			<div
				class="mb-2 h-5
		{index % 3 ? 'w-2/3' : index % 5 ? 'w-3/4' : index % 2 ? 'w-1/2' : ' w-1/3'}
		rounded-md bg-neutral-700"
			/>
			<div
				class="
		{index % 3 ? 'w-1/3' : index % 5 ? 'w-1/2' : index % 2 ? 'w-3/4' : 'w-2/3'}
		h-3 rounded-md bg-neutral-700"
			/>
		</div>

		<div
			class=" absolute bottom-0 left-2.5 z-30 translate-y-1/2 rounded-md bg-neutral-900 p-1.5 font-medium"
		>
			<section class="flex h-6 w-16 items-center rounded-sm bg-indigo-700 py-0.5 px-2">
				<div aria-label="Currency Used" class="mr-2 opacity-80" />
			</section>
		</div>
		<div class="absolute bottom-0 z-30 flex w-full items-center  justify-end p-4">
			<Heart classNames="h-5 fill-neutral-700 w-5" />
		</div>
	</section>
{/if}
{#if card === 'list'}
	<section class="relative my-4 mb-6 flex h-[12vh] animate-pulse items-center px-4">
		<div class=" h-full w-1/3 rounded-md bg-neutral-700" />
		<div class="w-2/3 pl-4">
			<div
				class="mb-2 h-5
		{index % 3 ? 'w-2/3' : index % 5 ? 'w-3/4' : index % 2 ? 'w-1/2' : ' w-1/3'}
		rounded-md bg-neutral-700"
			/>
			<div
				class="
		{index % 3 ? 'w-1/3' : index % 5 ? 'w-1/2' : index % 2 ? 'w-3/4' : 'w-2/3'}
		h-4 rounded-md bg-neutral-700"
			/>

			<section
				aria-label="Pricing and User Actions"
				class="mt-3 flex  w-full items-center justify-between"
			>
				<section class="flex h-5 w-16 items-center rounded-md bg-indigo-600 py-0.5 px-2 " />
				<Heart classNames="h-5 fill-neutral-700 w-5" />
			</section>
		</div>
	</section>
{/if}
{#if card === 'minimized'}

	<section>
		
	</section>

	<!-- <section class="group relative mx-2 my-4 mb-12 min-h-[30vh] animate-pulse rounded-md">
		<div class="absolute top-0 left-0 z-10 h-full w-full overflow-hidden rounded-md">
			<div class="h-full w-full bg-neutral-800" />
			<div
				class="absolute bottom-0 z-20 h-full w-full rounded-md bg-gradient-to-t from-transparent to-neutral-700 "
			/>
		</div>

		<div class=" absolute bottom-8 z-30 w-full px-4">
			<div
				class="mb-2 h-5
		{index % 3 ? 'w-2/3' : index % 5 ? 'w-3/4' : index % 2 ? 'w-1/2' : ' w-1/3'}
		rounded-md bg-neutral-700"
			/>
			<div
				class="
		{index % 3 ? 'w-1/3' : index % 5 ? 'w-1/2' : index % 2 ? 'w-3/4' : 'w-2/3'}
		h-3 rounded-md bg-neutral-700"
			/>
		</div>

		<div
			class=" absolute bottom-0 left-2.5 z-30 translate-y-1/2 rounded-md bg-neutral-900 p-1.5 font-medium"
		>
			<section class="flex h-6 w-16 items-center rounded-sm bg-indigo-700 py-0.5 px-2">
				<div aria-label="Currency Used" class="mr-2 opacity-80" />
			</section>
		</div>
		<div class="absolute bottom-0 z-30 flex w-full items-center  justify-end p-4">
			<Heart classNames="h-5 fill-neutral-700 w-5" />
		</div>
	</section> -->
{/if}
