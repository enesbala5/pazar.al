<script lang="ts">
	// Imports:
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import { nav } from '../../userState/nav';
	import Popover from './Popover.svelte';
	import Language from '$lib/components/UI/Language.svelte';
	import Logout from '../auth/Logout.svelte';
	import { darkMode } from '$lib/userState/preferences';
	import SearchForm from './SearchForm.svelte';
	import type { PageUser } from '$lib/types/page';
	import PopoverItem from './UserPanel/PopoverItem.svelte';
	import DarkModeToggle from './UserPanel/DarkModeToggle.svelte';
	import type { searchQuery } from '$lib/types/query';
	import { getParams } from '$lib/functions/paramHandling';
	// Icons
	import Heart from '../logos/user/Heart.svelte';
	import Globe from '~icons/feather/globe';
	import Message from '~icons/feather/message-square';

	export let onIndex: boolean;

	export let returnUrl: string | undefined;

	let element: HTMLElement;

	let visible: boolean = false;

	const toggleVisible = () => {
		visible = !visible;
	};

	let params: searchQuery = {};

	afterNavigate(async () => {
		params = getParams($page);
	});

	const notVisible = () => (visible = false);

	let user: PageUser | undefined = $page.data.user ?? undefined;
	$: user = $page.data.user;
</script>

<nav class="flex w-full items-center justify-between py-4 px-6 lg:mx-auto lg:w-11/12 lg:px-0">
	<section class="flex items-center">
		<!-- ! LOGO -->
		<a href="/" class="h-8 w-8 ">
			<Logo classNames="dark:fill-neutral-50 fill-neutral-900 w-full h-full" />
		</a>
		<!-- ! Search Form -->
		{#if returnUrl !== undefined}
			<button
				on:click={() => {
					history.back();
				}}
				class="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700 md:hidden"
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
	<div class="mx-8 hidden w-full lg:block">
		<SearchForm searchInput={params.id !== undefined ? params.id : ''} {params} />
	</div>

	<div class="flex items-center ">
		<!-- ! Create a Listing CTA -->
		<a
			href={nav.createListing}
			class="hidden whitespace-nowrap rounded-full bg-transparent px-4 py-2.5 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:block"
		>
			Create a Listing
		</a>
		<!-- ! LANG -->
		<div
			class="rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800  "
		>
			<Globe class={'h-5 w-5'} />
		</div>
		<!-- ! Line -->
		<div class="mx-4 hidden h-5 w-0.5 rounded-full bg-neutral-300 lg:block" />
		<!-- ! Messages -->
		<div
			class="hidden rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:block"
		>
			<Message class={'h-5 w-5'} />
		</div>
		<!-- ! Heart -->
		<div
			class="hidden rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:block"
		>
			<Heart classNames="h-5 w-5" />
		</div>

		<!-- ! User Menu -->
		<div
			class="ml-2 flex items-center whitespace-nowrap rounded-full border border-neutral-200 p-0.5 hover:shadow-md dark:border-neutral-700 {visible
				? 'shadow-md'
				: ''} transition-shadow ease-in-out"
			bind:this={element}
			on:click={toggleVisible}
			on:keydown={toggleVisible}
		>
			<!-- ? Logged in -->
			{#if user}
				<div
					class="ml-0.5 flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-neutral-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="mt-0.5 h-4 w-4 fill-neutral-50"
					>
						<path
							fill-rule="evenodd"
							d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="flex items-center justify-between space-x-3 p-0.5 pl-2.5 pr-3">
					<p class="font-medium">
						{user.firstName === null ? 'Pazar.al User' : `${user.firstName} ${user.lastName ?? ''}`}
					</p>
					<!-- ! Chevron Down -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="
						{visible ? 'rotate-180 ' : ''}
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
			{/if}
			<!-- ? Not Logged In -->
			{#if !user}
				<div
					class="m-0.5 flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-neutral-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-4 w-4 fill-white"
					>
						<path
							fill-rule="evenodd"
							d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="flex items-center justify-between space-x-3 p-0.5 pl-2.5 pr-3">
					<!-- ! Chevron Down -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="
						{visible ? 'rotate-180 ' : ''}
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
			{/if}
		</div>
		<div class="z-50">
			<Popover
				title="User Popover"
				description="Display User information and common actions"
				vertical={false}
				position={'bottom'}
				direction="rtl"
				anchor="right"
				{element}
				{visible}
				on:notVisible={notVisible}
				bgColor={onIndex
					? 'bg-neutral-50 dark:bg-neutral-800'
					: 'bg-neutral-50 dark:bg-neutral-800'}
				classNames="shadowDarkPlusMax p-1"
			>
				{#if user}
					<PopoverItem textAlign="right">
						<a href={nav.profile} class="">Profile</a>
					</PopoverItem>
					<PopoverItem textAlign="right">
						<Logout>
							<button type="submit">Log Out</button>
						</Logout>
					</PopoverItem>
				{/if}
				{#if !user}
					<PopoverItem textAlign="right">
						<a href={nav.login}>Log In</a>
					</PopoverItem>
					<PopoverItem textAlign="right">
						<a href={nav.register}>Sign Up</a>
					</PopoverItem>
				{/if}
				<div class="buttonSm">
					<DarkModeToggle styled={false} />
				</div>
			</Popover>
		</div>
	</div>
</nav>
