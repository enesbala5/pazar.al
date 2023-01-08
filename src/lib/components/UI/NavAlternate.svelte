<script lang="ts">
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import DarkModeToggle from '$lib/components/UI/UserPanel/DarkModeToggle.svelte';
	import { nav } from '$lib/userState/nav';
	import Globe from '~icons/feather/globe';

	export let widthClasses = 'lg:w-11/12 lg:px-0 px-6 ';
	export let showDarkModeToggle = true;
</script>

<section>
	<nav class="flex w-full items-center justify-between py-5  lg:mx-auto {widthClasses} ">
		<!-- ! LOGO -->
		<section class="flex items-center">
			{#if $$slots.logoReplacement}
				<slot name="logoReplacement" />
			{:else}
				<a href="/" class="h-8 w-8 ">
					<Logo classNames="dark:fill-neutral-50 fill-neutral-900 w-full h-full" />
				</a>
			{/if}
		</section>

		<div class="flex items-center">
			<!-- ! LANG -->
			<div
				class="rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800  "
			>
				<Globe class={'h-5 w-5'} />
			</div>
			{#if showDarkModeToggle}
				<DarkModeToggle />
			{/if}

			<!-- ! Line -->
			<div class="mr-6 ml-4 hidden h-5 w-0.5 rounded-full bg-neutral-300 lg:block" />
			<!-- ! Messages -->
			<a href={nav.index} class="buttonSmRounded buttonSecondary px-4">Return Home</a>
		</div>
	</nav>
</section>
