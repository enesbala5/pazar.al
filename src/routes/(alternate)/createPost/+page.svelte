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
	import { fade, fly, slide } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

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

	let errors = {};

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

	let showManageTags: boolean = false;

	let requiredTags: TagInCategory[] = [];

	$: if (category?.value !== undefined) {
		console.log('updating required');
		requiredTags = getTagsByCategory(category?.value) ?? [];

		showManageTags = true;
	}
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
						class="flex w-1/2  items-center rounded-full border border-neutral-200 fill-neutral-800 p-0.5 shadow-sm dark:border-neutral-800 dark:fill-neutral-200"
					>
						<div
							on:click={() => (eur = false)}
							on:keydown={() => (eur = false)}
							class="
							{!eur
								? 'bg-indigo-600 fill-indigo-50 hover:bg-indigo-500'
								: 'hover:bg-neutral-200 dark:hover:bg-neutral-800'}
							flex h-full w-full items-center justify-center rounded-full py-2 "
						>
							<Lek classNames="w-6 h-6" />
						</div>
						<div
							on:click={() => (eur = true)}
							on:keydown={() => (eur = true)}
							class="
							{eur
								? 'bg-indigo-600 fill-indigo-50 hover:bg-indigo-500'
								: 'hover:bg-neutral-200 dark:hover:bg-neutral-800'}
							flex h-full w-full items-center justify-center rounded-full py-2"
						>
							<!-- surrounding div because it was 1 unit bigger than the Lek - this is to make it equal -->
							<div class="p-0.5">
								<Euro classNames="w-5 h-5" />
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

				<div
					class=" my-4 rounded-xl bg-neutral-100 p-4 shadow-sm dark:border-neutral-800  dark:bg-neutral-800"
				>
					<!-- H1 and Chevron -->
					<div class="flex w-full items-center justify-between">
						<h1
							class="cursor-pointer text-xl font-medium hover:underline"
							on:click={() => (showManageTags = !showManageTags)}
							on:keydown={() => (showManageTags = !showManageTags)}
						>
							Manage Tags
						</h1>

						<div
							class="cursor-pointer p-2"
							on:click={() => (showManageTags = !showManageTags)}
							on:keydown={() => (showManageTags = !showManageTags)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="
							{showManageTags ? 'rotate-180 ' : ''}
							h-3 w-3 fill-neutral-900 transition-transform ease-in-out dark:fill-neutral-100"
								viewBox="0 0 320 191.9"
							>
								<path
									id="Path_89"
									data-name="Path 89"
									d="M98.9,184.7l1.8,2.1,136,156.5a25.3,25.3,0,0,0,19.2,8.6,25.649,25.649,0,0,0,19.2-8.6L411,187.1l2.3-2.6a15.446,15.446,0,0,0,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2,0-16.6,7.1-16.6,15.8A15.27,15.27,0,0,0,98.9,184.7Z"
									transform="translate(-96 -160)"
								/>
							</svg>
						</div>
					</div>

					<!-- Tags Management -->
					{#if showManageTags}
						<div
							class="mt-4 flex  flex-col space-y-4 rounded-xl "
							transition:slide={{ duration: 150 }}
						>
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
														<input
															type="hidden"
															value={true}
															name="isSelectOption"
															class="hidden"
														/>
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
											<InputField
												title="Tag Value"
												type="text"
												name="tagValue"
												bind:value={tagValue}
											/>
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
						</div>
					{/if}
				</div>
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
				<div class="mt-2 flex flex-wrap ">
					{#each tags as tag, i}
						<Badge margin title={`${tag.name}: `} message={tag.value} />
					{/each}
				</div>
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
