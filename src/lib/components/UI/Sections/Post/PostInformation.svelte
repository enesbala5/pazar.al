<script lang="ts">
	import { toggleModal } from '$lib/functions/modal';
	import type { ProductTag } from '$lib/types/product';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import Modal from '$lib/components/UI/Important/Modal.svelte';
	import { bottomBarOpen } from '$lib/userState/preferences';

	import { Svrollbar } from 'svrollbar';
	let viewport: Element;
	let contents: Element;

	export let tags: ProductTag[];
</script>

<div class=" mb-6 mt-6">
	<div class="mb-4 mt-8 flex w-full items-center justify-between">
		<h3 class="h3 font-medium ">Post Information:</h3>
		<button on:click={toggleModal} class="buttonXs buttonSecondary rounded-full"
			>View Detailed</button
		>
		<Modal>
			<section
				class=" relative z-50 mx-2 flex h-fit w-full max-w-2xl flex-col rounded-xl bg-neutral-50 dark:bg-neutral-900 lg:mx-0
				
				{$bottomBarOpen ? 'mb-[15%]' : ''}"
			>
				<div class="w-full p-4 lg:p-6">
					<h3 class="headline h3 font-medium">Detailed Information:</h3>
					<p class="mt-2">Information around the post.</p>
				</div>

				<hr class="mx-4 border-neutral-50 dark:border-neutral-900 lg:mx-6" />

				<section class="wrapper">
					<!-- Container - For padding -->
					<div
						class=" viewport max-h-[45vh] border-y bg-neutral-100 border-neutral-200 dark:border-none p-4 dark:bg-neutral-800 lg:p-6"
						bind:this={viewport}
					>
						<!-- Headline -->
						<!-- Tags?  -->
						<div class="grid grid-cols-1 gap-4 text-sm lg:grid-cols-2" bind:this={contents}>
							{#each tags as tag, i}
								<div
									class="
									{i === tags.length - 1 ? '' : 'border-b pb-2'}
									flex w-full items-center justify-between border-neutral-300  dark:border-neutral-700"
								>
									<p class="font-medium">{tag.name}:</p>
									<p>{tag.value}</p>
								</div>
							{/each}
						</div>
					</div>
					<Svrollbar {viewport} {contents} />
				</section>

				<!-- Actions -->
				<div class="flex w-full items-center space-x-4 p-4 dark:border-neutral-800 lg:p-6">
					<button class="buttonBase buttonSecondary w-full" on:click={toggleModal}>Return</button>
					<button class="buttonBase buttonPrimary w-full">Print as PDF</button>
				</div>
			</section>
		</Modal>
	</div>
	<div class="mt-6 flex flex-wrap">
		{#each tags as tag}
			<Badge title="{tag.name}:" message={tag.value} margin rounded="md" />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		/* width: 10rem; */
	}

	.viewport {
		position: relative;
		/* width: 10rem; */
		/* height: 10rem; */
		overflow: scroll;
		box-sizing: border-box;

		/* hide scrollbar */
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.viewport::-webkit-scrollbar {
		/* hide scrollbar */
		display: none;
	}
</style>
