<script lang="ts">
	import Search from '$lib/components/logos/user/Search.svelte';
	import Arrow from '$lib/components/logos/user/Arrow.svelte';
	import Grid from '$lib/components/logos/user/filters/Grid.svelte';
	import List from '$lib/components/logos/user/filters/List.svelte';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import Dollar from '$lib/components/logos/user/filters/sort/Dollar.svelte';
	import { card } from '$lib/userPreferences/preferences';
	import type { searchQuery } from '$lib/types/query';
	import Clear from '$lib/components/logos/user/Clear.svelte';
	import { page } from '$app/stores';
	import { insertParams } from '$lib/functions/paramHandling';

	export let onIndex: boolean = true;
	export let params: searchQuery = {};
	export let searchInput: string = ''; // Search value

	const updateParamsField = (resetPage: boolean = true) => {
		if (searchInput !== '') {
			params.id = searchInput;
		}
		if (resetPage) {
			params.faqja = 1;
		}
	};

	const searchProduct = (resetPage: boolean = true) => {
		if (searchInput !== params.id) {
			// update params object with local values
			updateParamsField(resetPage);
			insertParams($page, params);
		}
	};

	export const paginate = () => {
		searchProduct(false);
	};

	const clearInput = () => {
		searchInput = '';
		searchBar.focus();
	};

	let searchBar: HTMLInputElement;
	let searchBarFocused: boolean = false;
</script>

<form on:submit|preventDefault={() => searchProduct()} class="">
	<section class="relative">
		<input
			bind:this={searchBar}
			type="text"
			on:focus={() => (searchBarFocused = true)}
			on:blur={() => (searchBarFocused = false)}
			bind:value={searchInput}
			class="
			{onIndex ? 'bg-neutral-100 dark:bg-neutral-800' : 'bg-neutral-50 dark:bg-indigo-600'}
			w-full rounded-md border-0 px-5 py-3.5 outline-none focus:ring-0"
		/>
		<!-- -->
		{#if searchInput !== '' && !searchBarFocused && $page.url.pathname != '/'}
			<button
				on:click={clearInput}
				class="
			{onIndex ? 'bg-indigo-500 dark:bg-indigo-700' : ''}
			absolute right-2 top-1/2 flex aspect-square h-9 -translate-y-1/2 items-center justify-center rounded-md p-1"
			>
				<Clear classNames="dark:fill-white {onIndex? 'fill-white' : 'fill-indigo-500'} w-5/6 h-5/6" />
			</button>
		{:else}
			<button
				on:click={() => searchProduct()}
				on:mousedown={() => searchProduct()}
				class="
			{onIndex ? 'bg-indigo-500 dark:bg-indigo-700' : ''}
			absolute right-2 top-1/2 z-50 flex aspect-square h-9  -translate-y-1/2 items-center justify-center rounded-md p-1"
			>
				<Search classNames="dark:fill-white {onIndex? 'fill-white' : 'fill-indigo-500'} w-2/3 h-2/3" />
			</button>{/if}
	</section>

	{#if !onIndex}
		<!-- Filters -->
		<section class="mt-3 flex space-x-3">
			<div
				class="flex w-full overflow-hidden rounded-md bg-indigo-100 bg-opacity-20 dark:bg-indigo-600"
			>
				<button
					on:click={() => {
						card.set(true);
					}}
					class="
					{$card ? 'bg-neutral-50' : 'bg-transparent'}
					flex h-full w-1/2 grow items-center justify-center p-1.5"
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
						<List classNames="{!$card ? 'fill-indigo-700' : 'fill-white'} w-4 h-4" />
					</div>
				</button>
			</div>

			<div
				class="flex w-full items-center justify-center overflow-hidden rounded-md bg-indigo-100 bg-opacity-20 px-2 dark:bg-indigo-600"
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
				class=" flex w-full items-center justify-center overflow-hidden rounded-md bg-indigo-100 bg-opacity-20 px-2 dark:bg-indigo-600"
			>
				<div class="flex items-center">
					<Settings classNames="w-3.5 h-3.5 fill-white min-w-[0.875rem]" />
					<p class="ml-2  text-sm font-medium uppercase text-white">Options</p>
				</div>
			</div>
		</section>
	{/if}
</form>
