<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { loadTranslations, locale } from '$lib/lang';
	import { darkMode, modalOpen } from '$lib/userState/preferences';

	import { Svrollbar } from 'svrollbar';
	import { alerts } from '$lib/userState/alerts';
	import Toast from '$lib/components/UI/Important/Toast.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let currentLocale = $page.data.language ?? 'sq';
	let translationsLoaded = false;

	afterNavigate(async () => {
		modalOpen.set(false);
		if (translationsLoaded) translationsLoaded = false;
		await loadTranslations(currentLocale, $page.url.pathname)?.then(
			(e) => (translationsLoaded = true)
		);
	});

	let innerWidth: number = 1024;

	import { inject } from '@vercel/analytics';
	import { crossfade } from 'svelte/transition';

	// onMount(() => {
	inject();
	// });

	const [insert, remove] = crossfade({});
</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= 1024}
	<Svrollbar />
{/if}

<section class="{$darkMode ? 'dark' : ''} font-aeonik">
	{#if $alerts.length > 0}
		<div
			class="fixed bottom-6 right-1/2 z-30 w-full translate-x-1/2 space-y-2 px-4 md:right-6 md:w-fit md:translate-x-0"
		>
			{#each $alerts as alert (alert)}
				<div class="" in:insert={{ key: alert.id }} out:remove={{ key: alert.id }}>
					<Toast {...alert} />
				</div>
			{/each}
		</div>
	{/if}
	<slot />
</section>
