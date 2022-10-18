<script lang="ts">
	// Imports:
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import Heart from './components/logos/user/Heart.svelte';
	import Save from './components/logos/user/Save.svelte';

	// Initializations:
	const links = [{ route: '/', name: 'Home' }];

	export let onIndex: boolean;
</script>

<nav class="flex items-center justify-between p-4">
	<a href="/" class="h-8 w-8">
		<Logo classNames="fill-neutral-50" />
	</a>

	<div class="flex items-center ">
		<!-- Liked  & Saved -->
		<div
			class="mr-4 flex items-center space-x-4 border-r-2 {onIndex
				? ' border-neutral-700'
				: ' border-neutral-800'} px-4 pr-4 "
		>
			<div class=" flex h-5 w-5   items-center justify-center opacity-70">
				<Heart classNames="fill-white" />
			</div>
			<div class=" flex h-5 w-3.5  items-center justify-center opacity-70">
				<Save classNames="fill-white" />
			</div>
		</div>
		<!-- Break Line -->
		<!-- <div class=" bg-neutral-50 px-2" /> -->

		<!-- Profile Item -->
		<div
			class="flex h-10 w-10 items-center justify-center rounded-full {onIndex
				? ' bg-neutral-900'
				: ' bg-neutral-800'}"
		>
			<p class="mb-0.5 text-xl text-neutral-50">E</p>
		</div>
	</div>
</nav>
