<script lang="ts">
	import { goto } from '$app/navigation';
	import Search from './logos/user/Search.svelte';

	const searchProduct = () => {
		if (productSearchInput !== undefined && productSearchInput !== '')
			goto(`/kerkim/${productSearchInput}`);
	};

	export let productSearchInput: string = '';

	export let onIndex: boolean = true;
	import Arrow from '$lib/components/logos/user/Arrow.svelte';
	import Grid from '$lib/components/logos/user/filters/Grid.svelte';
	import List from '$lib/components/logos/user/filters/List.svelte';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import Dollar from '$lib/components/logos/user/filters/sort/Dollar.svelte';
	import { card } from '$lib/userPreferences/preferences';
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

		<!-- Pagination -->
		<section class="mt-6 ">
			<div
				class="flex w-full items-center justify-between rounded-md bg-indigo-400 bg-opacity-20"
			>
				<div class="flex w-full items-center justify-around px-2">
					<!-- First Page -->
					<button class="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<!-- Previous Page -->
					<button class="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<div class="flex items-center">
						<p class="text-xs uppercase opacity-70">Faqja</p>
						<p class="mx-2 font-medium">1</p>
					</div>
					<!-- Next Page -->
					<button class="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>

				<!-- Save search content -->
				<div class="border-l border-white border-opacity-20 py-3 px-3">
					<p class="whitespace-nowrap text-xs font-medium uppercase">
						Ruani Kerkimin
					</p>
				</div>
			</div>
		</section>
	{/if}
</form>
