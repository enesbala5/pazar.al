<script lang="ts">
	import { toggleModal } from '$lib/functions/modal';
	import type { ProductTag } from '$lib/types/product';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import Modal from '$lib/components/UI/Important/Modal.svelte';

	export let tags: ProductTag[];
</script>

<div class=" mb-6 mt-6">
	<div class="mb-4 mt-8 flex w-full items-center justify-between">
		<h3 class="text-2xl font-medium ">Post Information:</h3>
		<button on:click={toggleModal} class="buttonXs buttonSecondary rounded-full"
			>View Detailed</button
		>
		<Modal>
			<section class="z-50 grid w-full max-w-2xl rounded-xl bg-neutral-50 dark:bg-neutral-900">
				<div class="w-full  p-4 lg:p-6 ">
					<h3 class="headline text-2xl font-medium">Detailed Information:</h3>
					<p class="mt-2">Information around the post.</p>
				</div>
				<hr class="mx-4 border-neutral-200 dark:border-neutral-800 lg:mx-6" />
				<!-- Container - For padding -->
				<div class="noScroll overflow-y-scroll  p-4 lg:p-6">
					<!-- Headline -->
					<!-- Tags?  -->
					<div class=" grid max-h-96 grid-cols-1 gap-4 text-sm lg:grid-cols-2">
						{#each tags as tag}
							<!-- border-indigo-600 dark:border-indigo-500 -->
							<div
								class="flex w-full items-center justify-between border-b border-neutral-300 pb-2 dark:border-neutral-700"
							>
								<p class="font-medium">{tag.name}:</p>
								<p>{tag.value}</p>
							</div>
						{/each}
					</div>
				</div>
				<!-- Actions -->
				<div
					class="flex w-full items-center space-x-4 border-t border-neutral-200 p-4 dark:border-neutral-800 lg:p-6"
				>
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
