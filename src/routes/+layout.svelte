<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { loadTranslations, locale } from '$lib/lang';
	import { darkMode } from '$lib/userPreferences/preferences';

	import { Svrollbar } from 'svrollbar';

	let currentLocale = $page.data.language ?? 'sq';
	let translationsLoaded = false;

	afterNavigate(async () => {
		if (translationsLoaded) translationsLoaded = false;
		await loadTranslations(currentLocale, $page.url.pathname)?.then(
			(e) => (translationsLoaded = true)
		);
	});
</script>

<Svrollbar />

<section class={$darkMode ? 'dark' : ''}>
	<slot />
</section>
