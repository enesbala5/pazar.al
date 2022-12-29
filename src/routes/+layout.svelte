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
</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= 1024}
	<Svrollbar />
{/if}

<section class="{$darkMode ? 'dark' : ''} font-aeonik">
	{#if $alerts.length > 0}
		<div class="fixed bottom-6 right-6 z-30 space-y-2">
			{#each $alerts as alert, i}
				<Toast {...alert} />
			{/each}
		</div>
	{/if}
	<slot />
</section>
