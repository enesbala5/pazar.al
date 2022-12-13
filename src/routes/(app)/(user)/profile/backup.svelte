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
	import { nav } from '$lib/userPreferences/nav';

	export let data: PageData;

	// let user: PageUser | undefined = data ?? undefined;
	let user: PageUser | undefined = $page.data.user ?? undefined;

	$: user = $page.data.user;
</script>

<pre>{JSON.stringify(data)}</pre>

<article class="mt-12 px-4 lg:mx-auto lg:w-11/12">
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
	<section
		class="mt-12 flex flex-col justify-between space-y-4 md:flex-row md:space-x-8 md:space-y-0 lg:mt-24"
	>
		<div class="md:w-2/3">
			<!-- <p class="mb-6 text-lg font-medium">Veprimtaria</p> -->
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div
					class="flex justify-between rounded-lg border border-neutral-100 bg-neutral-50 p-2 shadow-sm hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
				>
					<div
						class="flex aspect-square grow items-center justify-center rounded-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-2 dark:bg-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
					>
						<div class="h-10 w-10">
							<Heart classNames="w-full h-full dark:stroke-neutral-50 stroke-neutral-800" />
						</div>
					</div>
					<div class="flex w-full grow items-center py-4 px-4">
						<p class="text-base font-medium md:w-1/2 md:text-xl ">Postimet e Pelqyera</p>
					</div>
				</div>

				<div
					class="flex justify-between rounded-lg border border-neutral-100 bg-neutral-50 p-2 shadow-sm hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
				>
					<div
						class="flex aspect-square grow items-center justify-center rounded-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-2 dark:bg-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
					>
						<div class="h-10 w-10">
							<Heart classNames="w-full h-full dark:stroke-neutral-50 stroke-neutral-800" />
						</div>
					</div>
					<div class="flex w-full grow items-center py-4 px-4">
						<p class="text-base font-medium md:w-1/2 md:text-xl ">Postimet e Kontaktuar</p>
					</div>
				</div>
			</div>
		</div>
		<!-- secondary -->
		<div
			class="rounded-lg border border-neutral-100 p-4 shadow-sm dark:border-neutral-800 md:w-1/3"
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
</article>
