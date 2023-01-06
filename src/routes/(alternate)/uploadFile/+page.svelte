<script lang="ts">
	// Icons
	import ImageIcon from '~icons/feather/image';
	// SvelteKit Functions
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	// External Libraries
	import Dropzone from 'svelte-file-dropzone';
	import { uploadImages } from '$lib/upload/cloudinary';
	// Type Declaration
	interface Files {
		accepted: any;
		rejected: any;
	}
	// Variable Declaration
	let files: Files = {
		accepted: [],
		rejected: [],
	};
	
	// Functions
	function handleFilesSelect(e: any) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
	// SELECT
	import { applyAction, deserialize } from '$app/forms';

	export let form: ActionData;
	import type { ActionResult } from '@sveltejs/kit';
	import type { ActionData } from './$types';

	async function handleSubmit(this: any, event: any) {
		let uploadedImages = await uploadImages(files.accepted);

		const data = new FormData(this);
		data.append('uploadedImages', JSON.stringify(uploadedImages));
		const response = await fetch(this.action, {
			method: 'POST',
			body: data,
		});

		const result: ActionResult = deserialize(await response.text());

		if (result.type === 'success') {
			// re-run all `load` functions, following the successful update
			await invalidateAll();
		}

		applyAction(result);
	}
</script>

<section class="mx-auto px-4 lg:w-11/12 lg:px-0">
	<Dropzone on:drop={handleFilesSelect}>
		<div class="space-y-1 text-center">
			<ImageIcon class="mx-auto h-12 w-12 text-gray-400" />
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
		<!-- {#if files.accepted?.length > 0}
			<ol class="mt-2 flex flex-wrap">
				{#each files.accepted as item}
					<Badge message={item.name} margin />
				{/each}
			</ol>
		{/if} -->

		<form
			method="POST"
			action="?/uploadFile"
			class="w-full"
			on:submit|preventDefault={handleSubmit}
			use:enhance
		>
			<button type="submit" class="buttonBase buttonPrimary">Upload Images</button>
		</form>
	</div>
</section>
