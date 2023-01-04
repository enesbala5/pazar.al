<script lang="ts">
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	import { uploadImages } from '$lib/upload/cloudinary';
	import Dropzone from 'svelte-file-dropzone';

	interface Files {
		accepted: any;
		rejected: any;
	}

	let files: Files = {
		accepted: [],
		rejected: [],
	};

	function handleFilesSelect(e: any) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
	import Image from '~icons/feather/image';
</script>

<section class="mx-auto px-4 lg:w-11/12 lg:px-0">
	<Dropzone on:drop={handleFilesSelect}>
		<div class="space-y-1 text-center">
			<Image class="mx-auto h-12 w-12 text-gray-400" />
			<div class="flex text-sm text-gray-600">
				<label
					for="file-upload"
					class="relative cursor-pointer rounded-md font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
				>
					<span>Upload a file</span>
				</label>
				<p class="pl-1">or drag and drop</p>
			</div>
			<p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
		</div>
	</Dropzone>

	<div class="mt-4 w-full rounded-xl bg-neutral-100 p-4">
		{#if files.accepted?.length > 0}
			<ol class="mt-2 flex flex-wrap">
				{#each files.accepted as item}
					<Badge message={item.name} margin />
				{/each}
			</ol>
		{/if}

		<form
			method="POST"
			class="w-full"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<input type="">
			<button type="submit" class="buttonBase buttonPrimary">Upload Images </button>
		</form>
	</div>
</section>
