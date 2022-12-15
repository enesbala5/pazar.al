<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Nav from '$lib/components/UI/Nav.svelte';
	import { page } from '$app/stores';
	import { darkMode } from '$lib/userState/preferences';
  import { nav } from '$lib/userState/nav';

	let onIndex: boolean = false;

	const updateOnIndex = (url: string) => {
		if (url === '/') {
			onIndex = true;
			return;
		}
		onIndex = false;
		return;
	};

	$: updateOnIndex($page.url.pathname);

	let urlBuffer = $page.url.pathname;

	let returnUrl: string | undefined = undefined;

	afterNavigate(() => {
		if ($page.url.pathname.startsWith(nav.post)) {
			if (urlBuffer.startsWith('/kerkim')) {
				returnUrl = urlBuffer;
			} else {
				returnUrl = undefined;
			}
		} else {
			returnUrl = undefined;
		}
		urlBuffer = $page.url.pathname;
	});
</script>

<div
	class="
	min-h-screen font-aeonik text-neutral-700 dark:text-neutral-100
	{onIndex ? 'bg-transparent' : 'bg-neutral-50 dark:bg-neutral-900'}"
>
	{#if onIndex}
		<div
			class="absolute top-0 -z-10 h-[40vh] w-full bg-gradient-to-b from-neutral-50 to-neutral-50 dark:from-neutral-900 dark:to-neutral-900"
		/>
		<div class="absolute -z-20 min-h-screen w-full bg-neutral-50 dark:bg-neutral-900 " />
	{/if}

	<!-- {#if $page.url.pathname !== nav.register && $page.url.pathname !== nav.login} -->
	<Nav {onIndex} {returnUrl} />
	<!-- {/if} -->

	<!-- App Content -->
	<main>
		<!-- {#if translationsLoaded} -->
		<slot />
		<!-- {/if} -->
	</main>
</div>
