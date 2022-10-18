<script lang="ts">
	import { page } from '$app/stores';

	// Imports:
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let onIndex: boolean = false;
	$: if ($page.url.pathname === '/') {
		onIndex = true;
	}
</script>

<div
	class="min-h-screen {onIndex ?? 'bg-neutral-900'} font-aeonik text-neutral-50"
>
	{#if onIndex}
		<div
			class="absolute top-0 -z-10 h-[40vh] w-full bg-gradient-to-b from-neutral-800 to-neutral-900"
		/>
	{/if}

	<!-- Navbar -->
	<Nav {onIndex}/>

	<!-- App Content -->
	<main><slot /></main>
</div>
