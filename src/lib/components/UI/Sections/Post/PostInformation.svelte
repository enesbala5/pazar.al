<script lang="ts">
  import { toggleModal } from '$lib/functions/modal';
	import type { ProductTag } from '$lib/types/product';
	import Badge from '../../Important/Badge.svelte';
	import Modal from '../../Important/Modal.svelte';

	export let tags: ProductTag[];
</script>

<div class=" mb-6 mt-6">
	<div class="mb-4 mt-8 flex w-full items-center justify-between">
		<h3 class="text-2xl font-medium ">Post Information:</h3>
		<button on:click={toggleModal} class="buttonXs buttonSecondary rounded-full">View Detailed</button>
		<Modal>
			{#each tags as tag}
				<Badge title="{tag.name}:" message={tag.value} margin rounded="md" />
			{/each}
		</Modal>
	</div>
	<div class="mt-6 flex flex-wrap">
		{#each tags as tag}
			<Badge title="{tag.name}:" message={tag.value} margin rounded="md" />
		{/each}
	</div>
</div>
