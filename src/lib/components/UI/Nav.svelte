<script lang="ts">
	// Imports:
	import { page } from '$app/stores';
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import Heart from '../logos/user/Heart.svelte';
	import { nav } from '../../userPreferences/nav';
	import Popover from './Popover.svelte';
	import Language from '$lib/components/UI/Language.svelte';
	import Logout from '../auth/Logout.svelte';
	import { toggleBoolean } from '$lib/functions/generic';
	import { darkMode } from '$lib/userPreferences/preferences';

	export let onIndex: boolean;

	export let returnUrl: string | undefined;

	let element: HTMLElement;

	let visible: boolean = false;

	const toggleVisible = () => {
		visible = toggleBoolean(visible);
	};

	const notVisible = () => (visible = false);
</script>

<nav class="flex items-center justify-between p-4 lg:mx-auto lg:w-10/12">
	<section class="flex items-center">
		<a href="/" class="h-8 w-8 ">
			<Logo classNames="dark:fill-neutral-50 fill-neutral-900 w-full h-full " />
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
			<Language bgColor={onIndex ? 'dark:bg-neutral-900 bg-neutral-300' : 'bg-neutral-200 dark:bg-neutral-800'} />
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
				on:click={toggleVisible}
				on:keydown={toggleVisible}
				class="
				{onIndex ? ' bg-neutral-900' : ' bg-neutral-800'}
				flex h-10 w-10 items-center justify-center rounded-full "
			>
				<p class="pointer-events-none mb-0.5 text-xl text-neutral-50">E</p>
			</div>
			<div class="z-50">
				<Popover
					position={'bottom'}
					direction="rtl"
					anchor="right"
					{element}
					{visible}
					on:notVisible={notVisible}
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
		{#if $darkMode}
			<div
				class="rounded-full p-2 dark:bg-neutral-800"
				on:click={() => darkMode.set(false)}
				on:keydown={() => darkMode.set(false)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
					/>
				</svg>
			</div>
		{:else}
			<div
				class="rounded-full p-2 dark:bg-neutral-800"
				on:click={() => darkMode.set(true)}
				on:keydown={() => darkMode.set(true)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
					/>
				</svg>
			</div>
		{/if}
	</div>
</nav>
