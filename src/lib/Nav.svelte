<script lang="ts">
	import { goto } from '$app/navigation';

	// Imports:
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import Heart from './components/logos/user/Heart.svelte';
	import Save from './components/logos/user/Save.svelte';

	// Initializations:
	const links = [{ route: '/', name: 'Home' }];

	export let onIndex: boolean;

	export let returnUrl: string | undefined;
</script>

<nav class="flex items-center justify-between p-4">
	<section class="flex items-center">
		<a href="/" class="h-8 w-8 ">
			<Logo classNames="fill-neutral-50 w-full h-full " />
		</a>
		{#if returnUrl !== undefined}
			<button
				on:click={() => {
					history.back();
				}}
				class="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4 stroke-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
					/>
				</svg>
			</button>
		{/if}
	</section>

	<div class="flex items-center ">
		<!-- Liked  & Saved -->
		<div
			class="mr-4 flex items-center space-x-4 border-r-2 {onIndex
				? ' border-neutral-700'
				: ' border-neutral-800'} px-4 pr-4 "
		>
			<div class=" flex h-5 w-5   items-center justify-center opacity-70">
				<Heart classNames="fill-white" />
			</div>
			<div class=" flex h-5 w-3.5  items-center justify-center opacity-70">
				<Save classNames="fill-white" />
			</div>
		</div>
		<!-- Break Line -->
		<!-- <div class=" bg-neutral-50 px-2" /> -->

		<!-- Profile Item -->
		<div
			class="flex h-10 w-10 items-center justify-center rounded-full {onIndex
				? ' bg-neutral-900'
				: ' bg-neutral-800'}"
		>
			<p class="mb-0.5 text-xl text-neutral-50">E</p>
		</div>
	</div>
</nav>
