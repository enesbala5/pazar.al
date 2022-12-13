<script lang="ts">
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import DarkModeToggle from '$lib/components/UI/UserPanel/DarkModeToggle.svelte';
	import { nav } from '$lib/userPreferences/nav';
	import Globe from '~icons/feather/globe';
	import { page } from '$app/stores';

	let alternateNav: boolean =
		$page.url.pathname === nav.login || $page.url.pathname === nav.register;

	$: alternateNav = $page.url.pathname === nav.login || $page.url.pathname === nav.register;
</script>

<main
	class="{!alternateNav ??
		'flex flex-col'} min-h-screen bg-neutral-50 font-aeonik text-neutral-800 dark:bg-neutral-900 dark:text-neutral-50"
>
	{#if !alternateNav}
		<section>
			<nav class="flex w-full items-center justify-between py-5 px-6 lg:mx-auto lg:w-11/12 lg:px-0">
				<section class="flex items-center">
					<!-- ! LOGO -->
					<a href="/" class="h-8 w-8 ">
						<Logo classNames="dark:fill-neutral-50 fill-neutral-900 w-full h-full" />
					</a>
				</section>

				<div class="flex items-center">
					<!-- ! LANG -->
					<div
						class="rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800  "
					>
						<Globe class={'h-5 w-5'} />
					</div>
					<DarkModeToggle />

					<!-- ! Line -->
					<div class="mr-6 ml-4 hidden h-5 w-0.5 rounded-full bg-neutral-300 lg:block" />
					<!-- ! Messages -->
					<a href={nav.index} class="buttonSmRounded buttonSecondary px-4">Return Home</a>
				</div>
			</nav>
		</section>
	{/if}
	<slot />
</main>
