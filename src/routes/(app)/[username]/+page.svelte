<script lang="ts">
	// Icons
	import UserSettings from '$lib/components/logos/user/generic/UserSettings.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import Globe from '~icons/feather/globe';
	// Data
	import { page } from '$app/stores';
	import type { PageUser } from '$lib/types/page';
	import type { PageData } from './$types';
	import { nav } from '$lib/userState/nav';
	import { goto } from '$app/navigation';
	import ProductItem from '$lib/components/productItem/ProductItem.svelte';
	import PostGrid from '$lib/components/UI/Sections/PostGrid.svelte';
	import { card } from '$lib/userState/preferences';
	import PostDisplay from '$lib/components/UI/Sections/PostDisplay.svelte';

	export let data: PageData;

	let user: PageUser | undefined = data ?? undefined;
	let loggedInUser: PageUser | undefined = $page.data.user ?? undefined;

	$: loggedInUser = $page.data.user;
	$: user = data;

	let loggedIn: boolean = loggedInUser?.uid === user?.uid;
	$: (user, loggedInUser), (loggedIn = loggedInUser?.uid === user?.uid);
</script>

<article class="mt-12 px-4 lg:mx-auto lg:w-11/12 lg:px-0">
	<section
		class="flex items-center space-x-4 rounded-l-full bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 lg:space-x-12"
	>
		<div
			class="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-200 p-8 md:h-36 md:w-36 lg:h-48 lg:w-48"
		>
			<p class="text-4xl text-neutral-50 md:text-7xl lg:text-8xl">E</p>
		</div>
		<div>
			<h1 class="headline text-4xl font-medium md:text-5xl lg:text-6xl">
				{user?.firstName === null ? 'Pazar.al User' : `${user?.firstName} ${user?.lastName ?? ''}`}
			</h1>
			<p class="text-sm opacity-70 md:text-base lg:mt-2">Anetar i Pazar.al</p>
			<!-- TODO: Duplicate of NAV button -->
			<!-- <div class="mt-6 flex items-center space-x-2">
				<button class="buttonPrimary  text-sm">Krijoni nje postim</button>
				<button class="buttonSecondary  text-sm">Dilni nga llogaria</button>
			</div> -->
		</div>
	</section>

	<!-- USER ACTIONS -->
	{#if loggedIn}
		<section
			class="mt-12 flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 lg:mt-12"
		>
			<div class="mr-2 md:w-2/3">
				<!-- <p class="mb-6 text-lg font-medium">Veprimtaria</p> -->
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
					<div
						class="
				group relative flex w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 p-4 shadow-sm hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900"
						on:click={() => {
							goto(`${$page.url.pathname}${nav.likes}`);
						}}
						on:keydown={() => {
							goto(`${$page.url.pathname}${nav.likes}`);
						}}
					>
						<div
							aria-roledescription="wrapper"
							class="flex w-full flex-row items-center justify-start"
						>
							<!-- User Icon -->
							<div
								class="mr-4 rounded-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 dark:bg-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-12 w-12 "
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-lg font-medium">Liked Posts</p>
								<p class="opacity-80">View items you saved</p>
							</div>
							<!-- Chivron Right -->
							<div
								class="transition-bezier absolute right-4 top-1/2 -translate-y-1/2 transition-all group-hover:-translate-x-1 "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="h-6 w-6 group-hover:stroke-indigo-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
						</div>
					</div>
					<!-- ! 2 -->
					<div
						class="
				group relative flex w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 p-4 shadow-sm hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900"
						on:click={() => {
							goto(`${$page.url.pathname}${nav.likes}`);
						}}
						on:keydown={() => {
							goto(`${$page.url.pathname}${nav.likes}`);
						}}
					>
						<div
							aria-roledescription="wrapper"
							class="flex w-full flex-row items-center justify-start"
						>
							<!-- User Icon -->
							<div
								class="mr-4 rounded-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 dark:bg-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-12 w-12 "
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-lg font-medium">Recently Viewed</p>
								<p class="opacity-80">View products you're interested in</p>
							</div>
							<!-- Chivron Right -->
							<div
								class="transition-bezier absolute right-4 top-1/2 -translate-y-1/2 transition-all group-hover:-translate-x-1 "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="h-6 w-6 group-hover:stroke-indigo-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- secondary -->
			<div
				class="ml-2 rounded-xl border border-neutral-100 p-4 shadow-sm dark:border-neutral-800 md:w-1/3"
			>
				<p class="mb-4 text-lg font-medium">Menaxho Llogarine</p>

				<div class="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-2">
					<div class="buttonSecondaryWithIcon buttonBase flex w-full items-center space-x-2.5 pl-3">
						<UserSettings classNames="w-5 h-5 iconColors" />
						<p>Cilesimet</p>
					</div>
					<div class="buttonSecondaryWithIcon buttonBase flex w-full items-center space-x-2.5 pl-3">
						<Globe class="iconColors h-5 w-5" />
						<p>Gjuha / Language</p>
					</div>
				</div>
			</div>

			<div />
		</section>
	{/if}
	<!-- POSTS -->
	<div class="{loggedIn ? 'mt-8 ' : 'mt-12 lg:mt-16'} flex items-end justify-between ">
		<p class="h3 font-medium">Posts</p>
		<!-- <a class="text-sm font-medium uppercase opacity-80 md:text-base" href="recommended">View All</a> -->
	</div>
</article>
{#if user !== undefined}
	<PostDisplay posts={user.posts} classNames="mt-6" />
{/if}
