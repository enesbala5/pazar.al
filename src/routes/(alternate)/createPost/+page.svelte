<script lang="ts">
	// * UI COMPONENENTS
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import Alert from '$lib/components/UI/Important/Alert.svelte';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	// Icons
	import Euro from '$lib/components/logos/user/currencies/Euro.svelte';
	import Lek from '$lib/components/logos/user/currencies/Lek.svelte';
	// * FUNCTIONAL Components
	import InputField from '$lib/components/UI/Input/InputField.svelte';
	import Select from 'svelte-select';
	// Data
	import categories from '$lib/data/categories';
	import cities from '$lib/data/cities';
	import countries from '$lib/data/countries';
	// *FUNCTIONS
	import { getTagsByCategory, type TagInCategory } from '$lib/data/tagsByCategory';
	import { faqjaParamParse } from '$lib/functions/conversions';
	// Types
	import type { Product, ProductTag } from '$lib/types/product';
	import type { Selection } from '$lib/types/selection';

	import Accordion from '$lib/components/UI/Important/Accordion.svelte';

	let eur: boolean = false;

	let title: string = '',
		description: string = '',
		price: string = '';

	let category: Selection | null = null,
		city: Selection | null,
		country: Selection = { index: 0, label: 'Albania', value: 'Albania' };

	let product: Product = {
		title: title !== '' ? title : 'Title',
		description: description !== '' ? description : 'Description',
		price: faqjaParamParse(price),
		eur,
		city: 'Tirane',
		country: 'Albania',
		pid: '',
		disabled: true,
	};

	$: product = {
		title: title !== '' ? title : 'Title',
		description: description !== '' ? description : 'Description',
		price: faqjaParamParse(price),
		eur,
		city: 'Tirane',
		country: 'Albania',
		pid: '',
		disabled: true,
	};

	// * Managing Tags
	// Initial ID
	let currentId: number = 0;

	// Creating Tag
	const addTag = () => {
		if (tagText === '' || tagValue === '' || !tagText || !tagValue) {
			focusInput();
			return;
		}
		tags = [...tags, { id: currentId, name: tagText, value: tagValue }];
		tagText = '';
		tagValue = '';
		focusInput();
		currentId++;
	};

	function isRequired(value: any) {
		return value != null && value !== '';
	}

	const addRequiredTag = (event: any) => {
		errors = {};
		const formData = new FormData(event.target);
		// console.log(formData);

		let error_flag = false;
		let requiredTagText, requiredTagValue;
		let isSelectOption: boolean = false;

		for (let field of formData) {
			const [key, value] = field;

			if (key === 'requiredTagText') {
				requiredTagText = value;
			}
			if (key === 'requiredTagValue') {
				requiredTagValue = value;
			}
			if (key === 'isSelectOption') {
				if (value === 'true') {
					isSelectOption = true;
				}
			}
		}

		if (!error_flag) {
			let parsedTagText = String(requiredTagText);
			let parsedTagValue = String(requiredTagValue);

			if (isSelectOption) {
				let selectResponse = JSON.parse(parsedTagValue);
				console.log(selectResponse);
				tags = [
					...tags,
					{ id: currentId, name: parsedTagText, value: selectResponse?.value ?? '' },
				];
			} else {
				tags = [...tags, { id: currentId, name: parsedTagText, value: parsedTagValue }];
			}
			currentId++;
		}
	};

	// Removing Tag
	const deleteTag = (id: number) => {
		tags = tags.filter((tag) => {
			tag.id !== id;
		});
	};

	let tags: ProductTag[] | [] = [];

	let tagText: string;
	let tagValue: string;

	let focusInput: any, blurInput: any;

	// let showManageTags: boolean = false;

	let requiredTags: TagInCategory[] = [];

	$: if (category?.value !== undefined) {
		console.log('updating required');
		requiredTags = getTagsByCategory(category?.value) ?? [];

		// showManageTags = true;
		makeVisible();
	}

	let makeVisible: any;
</script>

<title>Krijo nje Postim - Pazar</title>

<main class="mt-12 px-4 lg:mx-auto lg:w-11/12 lg:px-0">
	<article class="mx-auto mt-12 flex w-10/12 justify-between space-x-8">
		<section class="w-2/3">
			<h1 class="text-4xl font-medium">Create a Post</h1>
			<h3 class="mt-2">Every post on Pazar.al is free, with the option of promotion.</h3>
			<!-- <h3 class="mt-2">Cdo postim ne MerrJep eshte falas, me opsionin e promovimit.</h3> -->

			<form action="?/createPost" method="POST" class="mt-12">
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
						<p class="pointer-events-none text-sm text-neutral-500">Currency:</p>

						<div
							class="inset-1 box-border flex w-2/3 items-center space-x-2 rounded-l-lg  border-l fill-neutral-800 py-0.5 px-2 shadow-sm dark:fill-neutral-200"
						>
							<div
								on:click={() => (eur = false)}
								on:keydown={() => (eur = false)}
								class="
							{!eur
									? 'border-indigo-600 bg-indigo-600 fill-indigo-50 hover:border-indigo-500 hover:bg-indigo-500'
									: 'border-neutral-300 bg-neutral-100 hover:bg-neutral-200  dark:border-neutral-600 dark:hover:bg-neutral-800'}
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
									: 'border-neutral-300 bg-neutral-100 hover:bg-neutral-200  dark:border-neutral-600 dark:hover:bg-neutral-800'}
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
				<div class="mt-4">
					<Select items={categories} bind:value={category} name="category" placeholder="Category" />
				</div>
				<div class="mt-4 flex w-full items-center space-x-4">
					<div class="w-full">
						<Select items={cities} bind:value={city} name="city" placeholder="City" />
					</div>
					<div class="w-full">
						<Select
							items={countries}
							bind:value={country}
							name="city"
							placeholder="City"
							disabled
						/>
					</div>
				</div>
				<hr class="my-4 border-neutral-100 dark:border-neutral-800" />

				<Accordion title="Manage Tags" bind:makeVisible>
					<!-- ? Inserting Tags -->
					<div class=" ">
						<p class="mb-2 text-sm font-medium">* Based on Category:</p>
						<hr class="my-2 border-neutral-200 dark:border-neutral-800" />

						{#if requiredTags.length > 0}
							{#each requiredTags as requiredTag}
								<form on:submit|preventDefault={addRequiredTag} class="my-4 ">
									<div class="flex items-center justify-center space-x-4">
										<div class="w-full">
											<input
												type="hidden"
												value={requiredTag.name}
												name="requiredTagText"
												class="hidden"
											/>
											<InputField
												name="Placeholder"
												title="Tag Name"
												type="text"
												value={requiredTag.name}
												disabled
											/>
										</div>
										<div class="w-full">
											{#if requiredTag.options}
												<input type="hidden" value={true} name="isSelectOption" class="hidden" />
												<Select
													items={requiredTag.options}
													justValue
													name="requiredTagValue"
													placeholder="{requiredTag.name} Options"
												/>
											{:else}
												<InputField
													title="Tag Value"
													type="text"
													name="requiredTagValue"
													bind:value={tagValue}
												/>
											{/if}
										</div>
									</div>
									<button class=" buttonSmall mt-2 whitespace-nowrap">Add Tag</button>
								</form>
							{/each}
						{/if}
						<form on:submit|preventDefault={addTag} class=" my-4">
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
						</form>
					</div>
					<!-- ? end -->

					<!-- * Editing Tags -->
					<div class="">
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

						<!-- * end -->
					</div>
				</Accordion>
			</form>
			<div>
				<div class="" />
			</div>
		</section>

		<section class="h-full w-1/3 lg:sticky">
			<h1 class="text-xl font-medium ">Preview</h1>
			<div class="mt-4">
				<ProductItem margin={false} card {product} />
			</div>
			<div class="mt-4">
				<Alert
					type="info"
					title="Quick Tip:"
					message="You can edit your post even after uploading&nbsp;it."
				/>
			</div>

			<div class="mt-4">
				<p class="font-medium">Post Tags</p>
				{#if tags.length > 0}
					<div class="mt-2 flex flex-wrap ">
						{#each tags as tag, i}
							<Badge margin title={`${tag.name}: `} message={tag.value} />
						{/each}
					</div>
				{/if}
			</div>
			<hr class="my-4 border-neutral-100 dark:border-neutral-800" />

			<div class="mt-4">
				<p class="font-medium">Location Preview</p>
			</div>
			<hr class="my-4 border-neutral-100 dark:border-neutral-800" />

			<div class="mt-4">
				<p class="font-medium">Account Preview</p>
			</div>
		</section>
	</article>
	<!-- <button
		class="buttonPrimary mt-8 mb-8"
		on:click={() => {
			getTagsByCategory();
		}}
	>
		Get car brands
	</button> -->
</main>
