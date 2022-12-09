<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { loadTranslations, locale } from '$lib/lang';
	import { darkMode, modalOpen } from '$lib/userPreferences/preferences';

	import { Svrollbar } from 'svrollbar';
	import { currencies } from '$lib/userPreferences/currencies';

	let currentLocale = $page.data.language ?? 'sq';
	let translationsLoaded = false;

	afterNavigate(async () => {
		modalOpen.set(false);
		if (translationsLoaded) translationsLoaded = false;
		await loadTranslations(currentLocale, $page.url.pathname)?.then(
			(e) => (translationsLoaded = true)
		);
	});
	
</script>

<Svrollbar />

<section class="{$darkMode ? 'dark' : ''} font-aeonik {modalOpen ? 'overflow-y-hidden' : ''}">
	<slot />
</section>
