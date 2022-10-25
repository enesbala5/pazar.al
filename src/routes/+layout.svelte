<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	// Imports:
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';

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

	let returnButton: boolean = false;
	let returnUrl: string | undefined = undefined;

	afterNavigate(() => {
		if ($page.url.pathname.startsWith('/postim')) {
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
	class="min-h-screen {onIndex
		? 'bg-transparent'
		: 'bg-neutral-900'} font-aeonik text-neutral-50"
>
	{#if onIndex}
		<div
			class="absolute top-0 -z-10 h-[40vh] w-full bg-gradient-to-b from-neutral-800 to-neutral-900"
		/>
		<div class="absolute -z-20 min-h-screen w-full bg-neutral-900 " />
	{/if}

	<!-- Navbar -->
	<Nav {onIndex} {returnUrl} />

	<!-- App Content -->
	<main><slot /></main>
</div>
