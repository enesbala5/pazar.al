<script lang="ts">
	import { goto } from '$app/navigation';
	import Search from './logos/user/Search.svelte';
	export let onIndex: boolean = true;
	import Arrow from '$lib/components/logos/user/Arrow.svelte';
	import Grid from '$lib/components/logos/user/filters/Grid.svelte';
	import List from '$lib/components/logos/user/filters/List.svelte';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import Dollar from '$lib/components/logos/user/filters/sort/Dollar.svelte';
	import { card } from '$lib/userPreferences/preferences';

	export let pageNumber: number = 1;

	interface searchQuery {
		faqja?: string;
	}

	let queryParams: searchQuery = {
		faqja: String(pageNumber),
	};

	const searchProduct = () => {
		queryParams = {};
		let queryString: string | undefined = undefined;

		if (pageNumber !== 1) {
			queryParams.faqja = String(pageNumber);
			queryString = new URLSearchParams(queryParams).toString();
		}

		if (productSearchInput !== undefined && productSearchInput !== '') {
			goto(`/kerkim/${encodeURI(productSearchInput)}`);

			if (Object.keys(queryParams).length > 0) {
				goto(`/kerkim/${encodeURI(productSearchInput)}?${queryString}`);
			}
		}
	};

	let pageNumberBuffer: number | undefined = undefined;

	// TODO: Check if it updates when loading page
	$: pageNumber, paginate();

	const paginate = () => {
		if (pageNumberBuffer !== undefined && pageNumber === 1) {
			searchProduct();
		} else if (pageNumber !== 1) {
			searchProduct();
		}
		pageNumberBuffer = pageNumber;
	};

	export let productSearchInput: string = '';
</script>

<form on:submit|preventDefault={searchProduct} class="">
	<section class="relative">
		<input
			type="text"
			bind:value={productSearchInput}
			class="
			{onIndex ? 'bg-neutral-800' : 'bg-indigo-600'}
			w-full rounded-md border-0 px-5 py-3.5  outline-none focus:ring-0"
		/>
		<button
			class="
			{onIndex ? 'bg-indigo-700' : ''}
			absolute right-2 top-1/2 flex aspect-square h-9  -translate-y-1/2 items-center justify-center rounded-md p-1"
		>
			<Search classNames="fill-white w-2/3 h-2/3" />
		</button>
	</section>

	{#if !onIndex}
		<!-- Filters -->
		<section class="mt-3 flex space-x-3">
			<div
				class="flex w-full overflow-hidden rounded-md bg-indigo-400 bg-opacity-20"
			>
				<button
					on:click={() => {
						card.set(true);
					}}
					class="
					{$card ? 'bg-neutral-50' : 'bg-transparent'}
					flex h-full w-1/2 grow items-center justify-center  bg-neutral-50 p-1.5"
				>
					<div class="mx-2">
						<Grid
							classNames="
							{$card ? 'stroke-indigo-700' : 'stroke-white'}
							fill-transparent w-4 h-4 bg-transparent"
						/>
					</div>
				</button>
				<button
					on:click={() => {
						card.set(false);
					}}
					class="
					{!$card ? 'bg-neutral-50' : 'bg-transparent'}
					flex h-full w-1/2 grow items-center justify-center  p-1.5"
				>
					<div class="mx-2">
						<List
							classNames="{!$card ? 'fill-indigo-700' : 'fill-white'} w-4 h-4"
						/>
					</div>
				</button>
			</div>

			<div
				class="flex w-full items-center justify-center overflow-hidden rounded-md bg-indigo-400 bg-opacity-20 px-2"
			>
				<div class="mx-auto flex items-center">
					<div id="Expensive" class="flex items-center">
						<Dollar classNames="fill-white  w-3.5 h-3.5" />
						<Dollar classNames="fill-white  w-3.5 h-3.5" />
						<Dollar classNames="fill-white  w-3.5 h-3.5" />
					</div>
					<Arrow classNames="fill-white min-w-[0.75rem] w-3 mx-1.5" />
					<div id="Cheap">
						<Dollar classNames="fill-white w-3.5 h-3.5" />
					</div>
				</div>
			</div>

			<div
				class="flex w-full items-center justify-center overflow-hidden rounded-md bg-indigo-400 bg-opacity-20 px-2"
			>
				<div class="flex items-center">
					<Settings classNames="w-3.5 h-3.5 fill-white min-w-[0.875rem]" />
					<p class="ml-2  text-sm font-medium uppercase">Opsione</p>
				</div>
			</div>
		</section>
	{/if}
</form>
