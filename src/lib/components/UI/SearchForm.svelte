<script lang="ts">
	import Search from '$lib/components/logos/user/Search.svelte';
	import Arrow from '$lib/components/logos/user/Arrow.svelte';
	import Grid from '$lib/components/logos/user/filters/Grid.svelte';
	import List from '$lib/components/logos/user/filters/List.svelte';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import Dollar from '$lib/components/logos/user/filters/sort/Dollar.svelte';
	import { card } from '$lib/userState/preferences';
	import type { searchQuery } from '$lib/types/query';
	import Clear from '$lib/components/logos/user/Clear.svelte';
	import { page } from '$app/stores';
	import { searchProduct } from '$lib/functions/paramHandling';
	import { nav } from '$lib/userState/nav';

	export let onIndex: boolean = true;
	export let params: searchQuery = {};
	export let searchInput: string = ''; // Search value
	export let itemsPerPage: number;

	export let url: string = nav.search;

	export const paginate = () => {
		searchProductLocalised(searchInput, false);
	};

	const searchProductLocalised = (
		searchInputLocalScope: string,
		resetPage: boolean = true,
		isCategory: boolean = false,
		returnUrl: boolean = false
	) => {
		searchProduct(
			params,
			itemsPerPage,
			searchInputLocalScope,
			resetPage,
			isCategory,
			returnUrl,
			url
		);
	};

	const clearInput = () => {
		searchInput = '';
		searchBar.focus();
	};

	let searchBar: HTMLInputElement;
	let searchBarFocused: boolean = false;

	const checkForSlash = (event: any) => {
		let char = typeof event !== 'undefined' ? event.keyCode : '';

		// IF CHAR === 27
		if (char === 191) {
			searchBar.focus();
		}
	};

	$: searchInput = searchInput.replace('/', '');
</script>

<svelte:window on:keydown={checkForSlash} />

<!-- {onIndex ? 'bg-neutral-100 dark:bg-neutral-800' : 'bg-neutral-50 dark:bg-indigo-600'} -->

<form on:submit|preventDefault={() => searchProductLocalised(searchInput)} class="">
	<section class="relative">
		<input
			tabindex="32767"
			bind:this={searchBar}
			type="text"
			on:focus={() => (searchBarFocused = true)}
			on:blur={() => (searchBarFocused = false)}
			bind:value={searchInput}
			class="
				{onIndex ? 'bg-neutral-50 dark:bg-neutral-800' : 'dark:bg-indigo-600'}
				w-full rounded-md border border-neutral-200 px-5 py-3 shadow-sm outline-none focus:ring-0 dark:border-0"
		/>
		<!-- -->
		{#if searchInput !== '' && !searchBarFocused && $page.url.pathname != '/'}
			<button
				on:click={clearInput}
				class="
			{onIndex ? 'buttonPrimary' : ''}
			absolute right-2 top-1/2 flex aspect-square h-9 -translate-y-1/2 items-center justify-center rounded-md p-1"
			>
				<Clear
					classNames="w-2/3 h-2/3"
					innerClassNames={onIndex ? ' bg-white' : 'bg-indigo-600 dark:bg-neutral-50'}
				/>
			</button>
		{:else}
			<button
				on:click={() => searchProductLocalised(searchInput)}
				on:mousedown={() => searchProductLocalised(searchInput)}
				class="
			{onIndex ? 'buttonPrimary' : ''}
			absolute right-2 top-1/2 flex aspect-square h-9 -translate-y-1/2 items-center justify-center rounded-md p-1"
			>
				<Search
					classNames="dark:stroke-white {onIndex ? 'fill-white' : 'fill-indigo-600'} w-2/3 h-2/3"
				/>
			</button>{/if}
	</section>

	{#if !onIndex}
		<!-- Filters -->
		<section class="mt-3 flex space-x-3">
			<div
				class="flex w-full overflow-hidden rounded-md bg-indigo-100 bg-opacity-20 dark:bg-indigo-600 dark:bg-opacity-100"
			>
				<button
					on:click={() => {
						card.set('card');
					}}
					class="
					{$card === 'card' ? 'bg-neutral-50' : 'bg-transparent'}
					flex h-full w-1/2 grow items-center justify-center p-1.5"
				>
					<div class="mx-2">
						<Grid
							classNames="
							{$card === 'card' ? 'stroke-indigo-700' : 'stroke-white'}
							fill-transparent w-4 h-4 bg-transparent"
						/>
					</div>
				</button>
				<button
					on:click={() => {
						card.set('list');
					}}
					class="
					{$card === 'list' ? 'bg-neutral-50' : 'bg-transparent'}
					flex h-full w-1/2 grow items-center justify-center  p-1.5"
				>
					<div class="mx-2">
						<List classNames="{$card === 'list' ? 'fill-indigo-700' : 'fill-white'} w-4 h-4" />
					</div>
				</button>
			</div>

			<div
				class="flex w-full items-center justify-center overflow-hidden rounded-md bg-indigo-100 bg-opacity-20 px-2 dark:bg-indigo-600 dark:bg-opacity-100"
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
				class=" flex w-full items-center justify-center overflow-hidden rounded-md bg-indigo-100 bg-opacity-20 px-2 dark:bg-indigo-600 dark:bg-opacity-100"
			>
				<div class="flex items-center">
					<Settings classNames="w-3.5 h-3.5 fill-white min-w-[0.875rem]" />
					<p class="ml-2  text-sm font-medium uppercase text-white">Options</p>
				</div>
			</div>
		</section>
	{/if}
</form>
