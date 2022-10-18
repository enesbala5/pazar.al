<script>
	// Imports:
	import Search from '$lib/components/logos/user/Search.svelte';
import { onMount } from 'svelte';

	// Initializations & Exports:
	// :3

	onMount(() => {
		// :3
	});
</script>

<!-- #################################################################################################### -->

<!-- SvelteKit Dynamic Header -->
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home Page" />
</svelte:head>

<!-- Page Content -->
<section class="w-full px-4">
	<div class="mb-8 mt-12">
		<h1 class="text-3xl mb-4 font-medium">Kerko ne Pazar.al</h1>
	<form action="" class="relative">
		<input
			type="text"
			class="w-full rounded-md border-0 bg-neutral-800 outline-none focus-within:border  px-5 py-3.5 focus-within:border-indigo-700 focus:ring-0"
		/>
		<button class="aspect-square h-9 absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-indigo-700 flex items-center justify-center p-1">
			<Search classNames="fill-white w-2/3 h-2/3"></Search>
		</button>
	</form>
	</div>
</section>

<!-- #################################################################################################### -->
<style>
	/* CSS Goes Here */
</style>
