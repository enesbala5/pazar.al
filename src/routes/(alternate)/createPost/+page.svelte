<script lang="ts">
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import Alert from '$lib/components/UI/Important/Alert.svelte';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import InputField from '$lib/components/UI/Input/InputField.svelte';
	import categories from '$lib/data/categories';
	import cities from '$lib/data/cities';
	import countries from '$lib/data/countries';
	import { faqjaParamParse } from '$lib/functions/conversions';
	import type { Product, ProductTag } from '$lib/types/product';
	import Select from 'svelte-select';

	interface Selection {
		index: number;
		value: any;
		label: any;
	}

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
		eur: false,
		city: 'Tirane',
		country: 'Albania',
		pid: '',
		disabled: true,
	};

	$: product = {
		title: title !== '' ? title : 'Title',
		description: description !== '' ? description : 'Description',
		price: faqjaParamParse(price),
		eur: false,
		city: 'Tirane',
		country: 'Albania',
		pid: '',
		disabled: true,
	};

	const addTag = () => {
		if (tagText === '' || tagValue === '' || !tagText || !tagValue) {
			return;
		}
		tags = [{ name: tagText, value: tagValue }, ...tags];
		tagText = '';
		tagValue = '';
		focusInput();
	};

	let tags: ProductTag[] | [] = [];

	let tagText: string;
	let tagValue: string;

	let focusInput: any, blurInput: any;
</script>

<title>Krijo nje Postim - Pazar</title>

<main class="mt-12 px-4 lg:mx-auto lg:w-11/12 lg:px-0">
	<article class="mt-12 flex w-full justify-between space-x-8">
		<section class="w-9/12">
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
				<InputField
					classNames="mt-4"
					name="price"
					type="number"
					title="Price"
					required
					bind:value={price}
				/>
				<hr class="my-4" />
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

				<!-- Inserting Tags -->
				<div class="mt-6">
					<h1 class="text-xl font-medium ">Additional Information</h1>
					<form
						on:submit|preventDefault={addTag}
						class="mt-4 flex items-center justify-center space-x-4"
					>
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
						<button class="buttonPrimary whitespace-nowrap">Add Tag</button>
					</form>
				</div>
			</form>
			<div>
				<div class="" />
			</div>
		</section>

		<section class="h-full w-3/12 ">
			<h1 class="text-xl font-medium ">Preview</h1>
			<div class="mt-4">
				<ProductItem margin={false} card {product} />
			</div>
			<div class="mt-4">
				<Alert
					type="info"
					title="Quick Tip:"
					message="You can edit your post even after uploading it."
				/>
			</div>
			<div class="mt-4">
				<p class="font-medium">Post Tags</p>
				<div class="mt-2 flex flex-wrap ">
					{#each tags as tag, i}
						<Badge title={tag.name} message={tag.value} />
					{/each}
				</div>
			</div>
		</section>
	</article>
</main>
