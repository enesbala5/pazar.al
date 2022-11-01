<script lang="ts">
	import { page } from '$app/stores';
	// Imports:
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import Heart from '../logos/user/Heart.svelte';
	import { nav } from '../../userPreferences/nav';
	import Popover from './Popover.svelte';
	import Language from '$lib/components/UI/Language.svelte';
	import Logout from '../auth/Logout.svelte';
	import { toggleBoolean } from '$lib/functions/generic';

	$: $page.data, console.log('page', $page.data.user);

	export let onIndex: boolean;

	export let returnUrl: string | undefined;

	let element: HTMLElement;

	let userPanelVisible: boolean = false;
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
			class="mr-4 flex items-center border-r-2 {onIndex
				? ' border-neutral-700'
				: ' border-neutral-800'} pr-4 "
		>
			<Language bgColor={onIndex ? 'bg-neutral-900' : 'bg-neutral-800'} />
		</div>
		<div class=" mr-4 flex h-5   w-5 items-center justify-center opacity-70">
			<Heart classNames="fill-white" />
		</div>
		<!-- Break Line -->
		<!-- <div class=" bg-neutral-50 px-2" /> -->

		<!-- Profile Item -->
		{#if $page.data.user}
			<div
				bind:this={element}
				on:click={() => {
					userPanelVisible = toggleBoolean(userPanelVisible);
				}}
				on:keydown={() => {
					userPanelVisible = toggleBoolean(userPanelVisible);
				}}
				class="
				{onIndex ? ' bg-neutral-900' : ' bg-neutral-800'}
				flex h-10 w-10 items-center justify-center rounded-full "
			>
				<p class="mb-0.5 text-xl text-neutral-50 pointer-events-none">E</p>
			</div>
			<div class="z-50">
				<Popover
					position={'bottom'}
					direction="rtl"
					anchor="right"
					{element}
					visible={userPanelVisible}
					bgColor={onIndex ? 'bg-neutral-900' : 'bg-neutral-800'}
				>
					<a href={nav.profile} class="">Profile</a>
					<Logout>
						<button type="submit">Log Out</button>
					</Logout>
				</Popover>
			</div>
		{/if}
		{#if !$page.data.user}
			<a href={nav.login}>Login</a>
		{/if}
	</div>
</nav>
