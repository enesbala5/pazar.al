<script lang="ts">
	import '../app.css';

	// Sveltekit Functions
	import { afterNavigate } from '$app/navigation';
	// Functions
	import { loadTranslations } from '$lib/lang';
	// UI Sections
	import { Svrollbar } from 'svrollbar';
	import Toast from '$lib/components/UI/Important/Toast.svelte';
	import { alerts } from '$lib/userState/alerts';
	// Transition / Animations
	import { crossfade } from 'svelte/transition';
	// Data
	import { page } from '$app/stores';
	import { bottomBarOpen, darkMode, modalOpen } from '$lib/userState/preferences';

	// Variable Initialization
	let currentLocale = $page.data.language ?? 'sq';
	let translationsLoaded = false;
	let innerWidth: number = 1024;

	// Translation Setup
	afterNavigate(async () => {
		modalOpen.set(false);
		if (translationsLoaded) translationsLoaded = false;
		await loadTranslations(currentLocale, $page.url.pathname)?.then(
			(e) => (translationsLoaded = true)
		);
	});

	// Vercel Analytics
	import { inject } from '@vercel/analytics';
	inject();

	const [insert, remove] = crossfade({});

	$: ($bottomBarOpen, $page.url.pathname), console.log('$bottomBarOpen: ', $bottomBarOpen);
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<meta name="theme-color" content={$darkMode ? '#000' : '#fafafa'} />
</svelte:head>

<section class="{$darkMode ? 'dark' : ''} font-aeonik">
	{#if $alerts.length > 0}
		<div
			class="
			{$bottomBarOpen ? 'bottom-20 pb-2' : 'bottom-6'}
			fixed right-1/2 z-30 w-full translate-x-1/2 space-y-2 px-4 md:right-6 md:w-fit md:translate-x-0"
		>
			{#each $alerts as alert, i}
				{#if !alert.hidden}
					<div class="" in:insert={{ key: i }} out:remove={{ key: i }}>
						<Toast {...alert} index={i} />
					</div>
				{/if}
			{/each}
		</div>
	{/if}
	<slot />
</section>

{#if innerWidth >= 1024}
	<Svrollbar />
{/if}
