<script lang="ts">
	// * UI COMPONENENTS
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import Alert from '$lib/components/UI/Important/Alert.svelte';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import Accordion from '$lib/components/UI/Important/Accordion.svelte';
	// Icons
	import Euro from '$lib/components/logos/user/currencies/Euro.svelte';
	import Lek from '$lib/components/logos/user/currencies/Lek.svelte';
	import ImageIcon from '~icons/feather/image';
	import RemoveIcon from '~icons/feather/x';
	// * FUNCTIONAL Components
	import InputField from '$lib/components/UI/Input/InputField.svelte';
	import Select from 'svelte-select';
	import Dropzone from 'svelte-file-dropzone';
	// Data
	import categories from '$lib/data/categories';
	import { cities } from '$lib/data/cities';
	import countries from '$lib/data/countries';
	import { nav } from '$lib/userState/nav';
	// *FUNCTIONS
	import { uploadImages } from '$lib/upload/cloudinary';
	import { getTagsByCategory, type TagInCategory } from '$lib/data/tagsByCategory';
	import { getCarModelsByBrand } from '$lib/fetching/carsByBrand';
	import { pageParamParse } from '$lib/functions/conversions';
	// SvelteKit Functions
	// -> Form Submission
	import { enhance } from '$app/forms';
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	// Types
	import type { Product, ProductTag } from '$lib/types/product';
	import type { Selection } from '$lib/types/selection';
	import MapComponent from '$lib/components/UI/Location/MapComponent.svelte';
	import { darkMode } from '$lib/userState/preferences';
	// -> Form Submission
	import type { ActionResult } from '@sveltejs/kit';
	import type { ActionData } from './$types';

	// --------------------------------
	// * Input Variables
	let title: string = '',
		description: string = '',
		price: string = '';
	let eur: boolean = false;

	// * Image Picker - Dropzone (svelte-file-dropzone)
	// ->Type Declaration
	interface Files {
		accepted: any;
		rejected: any;
	}
	// -> Variable Declaration
	let files: Files = {
		accepted: [],
		rejected: [],
	};
	// -> Functions
	function handleFilesSelect(e: any) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
	function handleRemoveFile(e: any, index: any) {
		files.accepted.splice(index, 1);
		files.accepted = [...files.accepted];
	}

	// Svelte:Select
	// -> Bindings
	let category: Selection | undefined,
		city: Selection | undefined,
		country: Selection = { index: 0, label: 'Albania', value: 'Albania' };

	// -> Combined Product to Display on Preview
	let product: Product = {
		id: '',
		title: title !== '' ? title : 'Title',
		description: description !== '' ? description : 'Description',
		priceHistory: [
			{
				eur: eur,
				price: pageParamParse(price, 0),
			},
		],
		city: city !== undefined ? city?.label : 'Tirane',
		country: 'Albania',
		disabled: true,
	};
	$: product = {
		id: '',
		title: title !== '' ? title : 'Title',
		description: description !== '' ? description : 'Description',
		priceHistory: [
			{
				price: pageParamParse(price, 0),
				eur,
			},
		],
		city: city !== undefined ? city?.label : 'Tirane',
		country: 'Albania',
		pid: '',
		disabled: true,
	};
	// -> CATEGORY OPTIONS:
	// -> -> Extracting categories from main Array and converting to format which Svelte:Select can use
	let categoryOptions: any = [];
	for (let category of categories) {
		categoryOptions = [
			...categoryOptions,
			{
				value: category.id,
				label: category.name,
			},
		];
	}

	// ! TAGS
	let tags: ProductTag[] | [] = [];
	let optionalTags: ProductTag[] | [] = [];
	let requiredTags: TagInCategory[] = [];

	// Initial Tag ID
	let currentId: number = 0;
	// -> Functions
	const manageRequiredTag = (event: any) => {
		const formData = new FormData(event.target);

		let showError: boolean = false;
		let requiredTagText, requiredTagValue;
		let isSelectOption: boolean = false;

		for (let field of formData) {
			const [key, value] = field;

			if (key === 'requiredTagText') {
				if (value === '' || !value) {
					showError = true;
				} else {
					requiredTagText = value;
				}
			}
			if (key === 'requiredTagValue') {
				if (value === '' || !value) {
					showError = true;
				} else {
					requiredTagValue = value;
				}
			}
			if (key === 'isSelectOption') {
				if (value === 'true') {
					isSelectOption = true;
				}
			}
		}

		if (!showError) {
			let parsedTagText = String(requiredTagText);
			let parsedTagValue = String(requiredTagValue);

			if (isSelectOption) {
				let selectResponse = JSON.parse(parsedTagValue);
				console.log(selectResponse);
				submitRequiredForm(parsedTagText, selectResponse.value);
			} else {
				submitRequiredForm(parsedTagText, parsedTagValue);
			}
		}
	};
	const submitRequiredForm = (text: string, value: string | number) => {
		if (!text || typeof text !== 'string' || !value) {
			// ERROR - invalid input
			console.error('Invalid input');
			return;
		}
		const alreadyExists = (tag: ProductTag) => tag.name === text;

		let tagIndex = tags.findIndex(alreadyExists);

		if (tagIndex !== -1) {
			// basically if tag has already been inserted
			tags[tagIndex].value = String(value);
		} else {
			tags = [...tags, { id: currentId, name: text, value: String(value), required: true }];
			currentId++;
		}
	};
	const clearRequiredInformationTag = (text: string) => {
		const alreadyExists = (tag: ProductTag) => tag.name !== text;

		tags = tags.filter(alreadyExists);
	};

	// ACCORDION Visibility Management
	// -> Binding:
	let makeVisible: any;
	// Function -> Conditionally make visible
	$: if (category?.value !== undefined) {
		requiredTags = getTagsByCategory(category?.label) ?? [];
		makeVisible();
	}
	// Recommended Tags
	/**
	 * Adds Recommended Tag to List
	 * @param text
	 */
	const addRecommendedTagToList = (text: string) => {
		const alreadyExists = (tag: ProductTag) => tag.name === text;
		const removeExisting = (tag: ProductTag) => tag.name !== text;

		let optionalTagIndex = optionalTags.findIndex(alreadyExists);

		if (optionalTagIndex !== -1) {
			optionalTags = optionalTags.filter(removeExisting);
		} else {
			optionalTags = [...optionalTags, { id: currentId, name: text, value: '' }];
			currentId++;
		}
	};

	// * IF (category = 'Automjete') -
	// -> TODO: Maybe move to external file
	let selectedCarBrand: string = '';
	let carModelsByBrand: string[];
	const getSelectedCarBrand = (tags: ProductTag[]) => {
		const tagContainingCarBrand = tags.find((tag) => tag.name === 'Lloji / Marka');
		return tagContainingCarBrand?.value ?? '';
	};
	$: selectedCarBrand = getSelectedCarBrand(tags);
	$: carModelsByBrand = getCarModelsByBrand(selectedCarBrand);

	// FORM SUBMISSION
	// Binding
	export let form: ActionData;
	// Submit Function
	async function handleSubmit(this: any, event: any) {
		// Uploading Images
		let uploadedImages = await uploadImages(files.accepted);
		// Creating FormData element
		const data = new FormData(this);
		// Adding uploadedImages to form
		data.append('uploadedImages', JSON.stringify(uploadedImages));
		const response = await fetch(this.action, {
			method: 'POST',
			body: data,
		});

		const result: ActionResult = deserialize(await response.text());
		// if (result.type === 'success') {
		// 	// re-run all `load` functions, following the successful update
		// 	await invalidateAll();
		// }
		applyAction(result);
	}

	$: category, console.log(category);
</script>

<title>Krijo nje Postim - Pazar</title>

<main class="mt-12 px-4 lg:mx-auto lg:w-11/12 lg:px-0">
	<article class="mx-auto mt-12 flex w-10/12 justify-between space-x-8">
		<section class="w-2/3">
			<h1 class="headline text-4xl font-medium">Create a Post</h1>
			<h3 class="mt-2">
				Every post on Pazar.al is free, with the option of <a
					href={nav.promotion}
					class="underlinedLink">promotion.</a
				>
			</h3>
			<!-- <h3 class="mt-2">Cdo postim ne MerrJep eshte falas, me opsionin e promovimit.</h3> -->

			<form
				action="?/createPost"
				method="POST"
				class="mt-12"
				id="createPost"
				use:enhance
				on:submit|preventDefault={handleSubmit}
			>
				<!-- Additional Information -->
				<input type="hidden" name="eur" value={eur} id="eur" />
				<input type="hidden" name="tags" value={JSON.stringify(tags)} id="tags" />

				<!--  -->
				<InputField name="title" type="text" title="Title" required bind:value={title} />
				<InputField
					classNames="mt-4"
					name="description"
					type="text"
					title="Description"
					required
					bind:value={description}
				/>
				<div class="mt-4 flex items-center space-x-4">
					<InputField
						classNames="w-1/2"
						name="price"
						type="number"
						title="Price"
						required
						bind:value={price}
					/>
					<div
						class="box-border flex w-1/2 items-center justify-between rounded-lg border border-neutral-300 pl-2.5  dark:border-neutral-600"
					>
						<p class="pointer-events-none text-sm text-neutral-500 dark:text-neutral-400">
							Currency:
						</p>

						<div
							class="inset-1 box-border flex w-2/3 items-center space-x-2 rounded-l-lg  border-l border-neutral-300 fill-neutral-800 py-0.5 px-2 shadow-sm dark:border-neutral-600 dark:fill-neutral-200"
						>
							<div
								on:click={() => (eur = false)}
								on:keydown={() => (eur = false)}
								class="
							{!eur
									? 'border-indigo-600 bg-indigo-600 fill-indigo-50 hover:border-indigo-500 hover:bg-indigo-500'
									: 'border-neutral-300 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-600  dark:bg-neutral-900 dark:hover:bg-neutral-800'}
							my-1 box-border flex h-full w-full items-center justify-center overflow-hidden rounded-lg border py-1.5"
							>
								<Lek classNames="w-7 h-5" />
							</div>
							<div
								on:click={() => (eur = true)}
								on:keydown={() => (eur = true)}
								class="
							{eur
									? 'border-indigo-600 bg-indigo-600 fill-indigo-50 hover:border-indigo-500 hover:bg-indigo-500'
									: 'border-neutral-300 bg-neutral-100 hover:bg-neutral-200 dark:border-neutral-600  dark:bg-neutral-900 dark:hover:bg-neutral-800'}
							my-1 box-border flex h-full w-full items-center justify-center rounded-lg border py-1.5"
							>
								<!-- surrounding div because it was 1 unit bigger than the Lek - this is to make it equal -->
								<div class="">
									<Euro classNames="w-5 h-5" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr class="my-4 border-neutral-100 dark:border-neutral-800" />
				<div class="mt-4 {$darkMode ? 'selectStylingDark' : 'selectStyling'}">
					<Select
						items={categoryOptions}
						bind:value={category}
						name="category"
						placeholder="Category"
					/>
				</div>
				<div
					class="
					{$darkMode ? 'selectStylingDark' : 'selectStyling'}
					mt-4 flex w-full items-center space-x-4"
				>
					<div class="w-full">
						<Select items={cities} bind:value={city} name="city" placeholder="City" />
					</div>
					<div class="w-full ">
						<Select
							items={countries}
							bind:value={country}
							name="country"
							placeholder="Country"
							disabled
						/>
					</div>
				</div>
				<hr class="my-4 border-neutral-100 dark:border-neutral-800" />

				<!-- Tags Management -->
				<Accordion title="Post Information" bind:makeVisible>
					<!-- ? Inserting Tags -->
					<div class="w-full {$darkMode ? 'selectStylingDark' : 'selectStyling'}">
						{#if requiredTags.length < 1}
							<p class="mb-2 text-sm">Please select a category.</p>
							<hr class="my-2 border-neutral-200 dark:border-neutral-800" />
						{/if}
						{#if requiredTags.length > 0}
							{#each requiredTags as requiredTag}
								{#if requiredTag.name !== 'Other'}
									<form
										on:submit|preventDefault={manageRequiredTag}
										class="mb-4"
										name={requiredTag.name}
									>
										<div class="flex items-center justify-center">
											<input
												type="hidden"
												value={requiredTag.name}
												name="requiredTagText"
												class="hidden"
											/>
											<div class="w-full">
												{#if requiredTag.options}
													<input type="hidden" value={true} name="isSelectOption" class="hidden" />
													<Select
														items={requiredTag.options}
														justValue
														on:change={(event) =>
															submitRequiredForm(requiredTag.name, event.detail.value)}
														on:clear={() => clearRequiredInformationTag(requiredTag.name)}
														name="requiredTagValue"
														placeholder={requiredTag.name}
													/>
												{:else}
													{#if requiredTag.name === 'Modeli'}
														{#key carModelsByBrand}
															<Select
																disabled={selectedCarBrand === ''}
																items={carModelsByBrand}
																justValue
																on:change={(event) =>
																	submitRequiredForm(requiredTag.name, event.detail.value)}
																on:clear={() => clearRequiredInformationTag(requiredTag.name)}
																name="requiredTagValue"
																placeholder={requiredTag.name}
															/>
														{/key}
													{/if}
													{#if requiredTag.name !== 'Modeli'}
														<InputField
															title={requiredTag.name}
															type="text"
															name="requiredTagValue"
															on:change={(event) =>
																submitRequiredForm(requiredTag.name, event.detail.value)}
															on:clear={() => clearRequiredInformationTag(requiredTag.name)}
														/>
													{/if}
												{/if}
											</div>
										</div>
									</form>
								{/if}
								{#if requiredTag.name === 'Other'}
									<p class="mt-2 text-lg font-medium">Other</p>
									<hr class="my-2 border-neutral-200 dark:border-neutral-800" />
									<div class="mt-2 flex flex-wrap ">
										{#each requiredTag.options ?? [] as recommended}
											<Badge
												margin
												type="toggle"
												sm
												message={String(recommended)}
												useAction={true}
												on:badgeAction={() => addRecommendedTagToList(String(recommended))}
											/>
										{/each}
									</div>
								{/if}
							{/each}
						{/if}
						<div class="mt-4">
							{#each optionalTags as optionalTag}
								<InputField
									title={optionalTag.name}
									type="text"
									name="optionalTagValue"
									on:change={(event) => submitRequiredForm(optionalTag.name, event.detail.value)}
									on:clear={() => clearRequiredInformationTag(optionalTag.name)}
								/>
							{/each}
						</div>

						<!-- ! Add Tag -->
						<!-- ! ------------------------------------ -->
						<!-- <form on:submit|preventDefault={addTag} class=" my-4">
							<div class="flex items-center justify-center space-x-4">
								<div class="w-full">
									<InputField
										title="Tag Name"
										type="text"
										name="tagText"
										bind:value={tagText}
										bind:blur={blurInput}
										bind:focus={focusInput}
									/>
								</div>
								<div class="w-full">
									<InputField title="Tag Value" type="text" name="tagValue" bind:value={tagValue} />
								</div>
							</div>
							<button class=" buttonSmall mt-2 whitespace-nowrap">Add Tag</button>
						</form> -->
						<!-- ! ------------------------------------ -->
					</div>
					<!-- ? end -->

					<!-- ! Editing Tags -->
					<!-- ! ------------------------------------ -->
					<!-- <div class="">
						<p class="mb-2 text-sm font-medium">My Tags:</p>
						<hr class="my-2 mb-4 border-neutral-200 dark:border-neutral-800" />

						<div class="flex items-center ">
							{#each tags as tag}
								<div class="w-full">
									<InputField
										title="Tag Name"
										type="text"
										name="tagText"
										bind:value={tag.name}
										bind:blur={blurInput}
										bind:focus={focusInput}
									/>
								</div>
								<div class="w-full">
									<InputField
										title="Tag Value"
										type="text"
										name="tagValue"
										bind:value={tag.value}
									/>
								</div>
								<button on:click={() => deleteTag(tag.id)} class="buttonSmall whitespace-nowrap"
									>Delete Tag</button
								>
							{:else}
								<div class="text-sm ">
									<p>You have not added any Tags yet.</p>
								</div>
							{/each}
						</div>

					</div> -->
					<!-- ! ------------------------------------ -->
				</Accordion>
				<Dropzone on:drop={handleFilesSelect} accept={['image/*']}>
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
				<div class="mt-4 w-full rounded-xl ">
					{#if files.accepted?.length > 0}
						<section class="grid grid-cols-5 gap-4">
							{#each files.accepted as item, index}
								<div
									class="group flex  flex-col items-center rounded-md border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800"
								>
									<div
										class="relative h-8 w-8 rounded-md bg-neutral-700 p-1 duration-150 ease-in-out hover:cursor-pointer hover:bg-red-500 dark:bg-neutral-700"
										on:click={(e) => handleRemoveFile(e, index)}
										on:keydown={(e) => handleRemoveFile(e, index)}
									>
										<ImageIcon
											class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-white duration-150 ease-in-out group-hover:opacity-0"
										/>
										<RemoveIcon
											class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 duration-150 ease-in-out group-hover:opacity-100"
										/>
									</div>
									<p class="mt-4 text-sm font-medium">
										{item.name.substring(0, item.name.indexOf('.'))}<span
											class="font-normal opacity-75"
											>.{item.name.substring(item.name.indexOf('.') + 1)}</span
										>
									</p>
								</div>
								<!-- <Badge message={item.name} margin /> -->
							{/each}
						</section>
					{/if}

					<!-- <form
						method="POST"
						class="w-full"
						on:submit|preventDefault={() => uploadImages(files.accepted)}
						use:enhance={() => {
							return async ({ result }) => {
								invalidateAll();
								await applyAction(result);
							};
						}}
					>
						<button type="submit" class="buttonBase buttonPrimary">Upload Images </button>
					</form> -->
				</div>
			</form>
			<div />
		</section>

		<section class="top-8 h-full w-1/3 lg:sticky">
			<h2 class="headline text-xl font-medium ">Preview</h2>
			<div class="mt-4">
				<ProductItem margin={false} card="card" {product} />
			</div>

			<!-- ! Post Information -->
			<div class="mt-4">
				<Accordion
					title={'Post Tags'}
					size="compressed"
					visible={tags.length > 0}
					disabled={tags.length < 1}
				>
					<!-- <p class="font-medium">Post Tags</p> -->
					{#if tags.length > 0}
						<div class="mt-2 flex flex-wrap">
							{#each tags as tag}
								<Badge margin title={`${tag.name}: `} message={tag.value} />
							{/each}
						</div>
					{/if}
				</Accordion>
			</div>
			<div class="mt-4">
				<Accordion title={'Location Preview'} size="compressed" visible={true} disabled={true}>
					<!-- <p class="font-medium">Post Tags</p> -->
					{#if true}
						<MapComponent
							classNames="mt-4"
							city={product.city ? product.city : 'Tirane'}
							country={product.country}
							size="xs"
						/>
					{/if}
				</Accordion>
			</div>
			<!-- <hr class="my-4 border-neutral-100 dark:border-neutral-800" /> -->

			<!-- ! Location Preview - Do e heq me shume mundsi -->
			<!-- <div class="mt-4">
				<Accordion
					title={'Location Preview'}
					size="compressed"
					visible={product.city !== ''}
					disabled
				/>
			</div> -->
			<!-- <hr class="my-4 border-neutral-100 dark:border-neutral-800" /> -->

			<!-- ! Account Preview - Do e heq me shume mundsi -->
			<!-- <div class="">
				<Accordion title={'Account Preview'} size="compressed" visible={tags.length > 0} disabled />
			</div> -->

			<div class="mt-4">
				<Alert
					type="info"
					title="Quick Tip:"
					message="You can edit your post even after uploading&nbsp;it."
				/>
			</div>
			<div class="defaultBg mt-4 w-full rounded-xl p-4 shadow-dark">
				<button class="buttonPrimary buttonBase w-full" type="submit" form="createPost"
					>Create Post</button
				>
				<button class="buttonSecondary buttonBase mt-2 w-full">Create Post</button>
			</div>
		</section>
	</article>
</main>

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
