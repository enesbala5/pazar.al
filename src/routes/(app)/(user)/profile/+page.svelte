<script lang="ts">
	import { page } from '$app/stores';
	import Settings from '$lib/components/logos/user/filters/Settings.svelte';
	import UserSettings from '$lib/components/logos/user/generic/UserSettings.svelte';
	import Heart from '$lib/components/logos/user/Heart.svelte';
	import type { PageUser } from '$lib/types/page';

	let user: PageUser | undefined = $page.data.user ?? undefined;
	$: user = $page.data.user;
</script>

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
				{user?.firstName}
				{user?.lastName}
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
				<div class="buttonPrimary buttonSm flex w-full items-center space-x-4">
					<UserSettings classNames="w-6 h-6 " />
					<p>Cilesimet</p>
				</div>
				<div class="buttonSecondary buttonSm flex w-full items-center space-x-4">
					<svg
						class="h-6 w-6 stroke-neutral-900 dark:stroke-neutral-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 22 22"
					>
						<g id="Group_274" data-name="Group 274" transform="translate(-1 -1)">
							<circle
								id="Ellipse_64"
								data-name="Ellipse 64"
								cx="10"
								cy="10"
								r="10"
								transform="translate(2 2)"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<line
								id="Line_43"
								data-name="Line 43"
								x2="20"
								transform="translate(2 12)"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<path
								id="Path_84"
								data-name="Path 84"
								d="M12,2a15.3,15.3,0,0,1,4,10,15.3,15.3,0,0,1-4,10A15.3,15.3,0,0,1,8,12,15.3,15.3,0,0,1,12,2Z"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</g>
					</svg>
					<p>Gjuha / Language</p>
				</div>
			</div>
		</div>

		<div />
	</section>
</article>
