<script lang="ts">
	// Icons
	import ImageIcon from '~icons/feather/image';
	// UI Elements
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	// SvelteKit Functions
	import { applyAction, enhance } from '$app/forms';
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
	import Select from 'svelte-select';
	import categories from '$lib/data/categories';
	import { darkMode } from '$lib/userState/preferences';
	import { browser } from '$app/environment';

	let items = ['One', 'Two', 'Three'];

	let category: Selection | null = null;

	$: category, console.log(category);

	let categoryOptions: string[] = [];

	for (let category of categories) {
		categoryOptions = [...categoryOptions, category.name];
	}

	let formElement: HTMLFormElement;
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
		{#if files.accepted?.length > 0}
			<ol class="mt-2 flex flex-wrap">
				{#each files.accepted as item}
					<Badge message={item.name} margin />
				{/each}
			</ol>
		{/if}

		<form
			method="POST"
			action="?/uploadFile"
			class="w-full"
			bind:this={formElement}
			on:submit={async () => {
				if (browser) {
					console.log('uploading');
					let uploadedImages = await uploadImages(files.accepted);

					let input = document.createElement('input');
					input.name = 'uploadedImages';
					// input.value = uploadedImages;
					input.value = 'test';
					input.type = 'text';
					input.classList.add('hidden');
					console.log('uploaded');
					formElement.append(input);
				}

				// formElement.FormData.append('uploadedImages', uploadedImages);
			}}
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<button type="submit" class="buttonBase buttonPrimary">Upload Images</button>
		</form>
	</div>
	<div class="mt-4 {$darkMode ? 'selectStylingDark' : 'selectStyling'}">
		<Select items={categoryOptions} bind:value={category} name="category" placeholder="Category" />
		<!-- <Select i></Select> -->
	</div>
</section>

<style>
	.selectStylingDark {
		--background: #1f1f1f;
		--border: none;
		--inputFontSize: 1rem;
		--borderRadius: 0.375rem;
		--listBorderRadius: 0.375rem;
		--listBackground: #1f1f1f;
		--itemHoverBG: #141414;
		--placeholderColor: #fff;
		--placeholderOpacity: 50%;
		--inputColor: #fff;
		--inputPadding: 0.75rem 1.25rem;
		--height: 3rem;
		--clearSelectColor: #5d6167;
		--clearSelectFocusColor: #5d6167;
		--itemIsActiveBG: #141414;
	}
	.selectStyling {
		--background: #e5e5e5;
		--border: none;
		--inputFontSize: 1rem;
		--borderRadius: 0.375rem;
		--listBorderRadius: 0.375rem;
		--listBackground: #e5e5e5;
		--itemHoverBG: #f5f5f5;
		--placeholderColor: #475569;
		--placeholderOpacity: 100%;
		--inputColor: #000;
		--inputPadding: 0.75rem 1.25rem;
		--height: 3rem;
		--clearSelectColor: #5d6167;
		--clearSelectFocusColor: #5d6167;
		--itemIsActiveBG: #f5f5f5;
		--itemIsActiveColor: #000;
	}
</style>
