<script lang="ts">
	import { goto } from '$app/navigation';
	import { nav } from '$lib/userPreferences/nav';
	import NoResults from '../logos/user/NoResults.svelte';

	export let id: string | undefined;
	console.log(id);

	export const returnHome = () => {
		goto(nav.index);
	};

	export const contactSupport = () => {
		goto(nav.suport);
	};
</script>

<section
	class="mx-2 my-4 rounded-md bg-gradient-to-t from-neutral-800 to-transparent p-4 text-left"
>
	<NoResults classNames="w-24 h-24 fill-white" />
	<p class="mt-4 w-5/6 text-xl">
		Nuk u gjeten rezultate per
		{#if id === undefined}
			kerkimin tuaj.{:else}
			kerkimin
			<span class="font-medium underline underline-offset-1 "> "{id}".</span>
		{/if}
	</p>
	<div class="mt-4 text-sm opacity-80">
		<p>Provoni te kerkoni me terma me te pergjithshem.</p>
	</div>
	<div class="mt-8 space-x-2 text-sm">
		<button class="rounded-md bg-indigo-700 py-2 px-4" on:click={returnHome}>Return Home</button>
		<button class="rounded-md bg-neutral-700 py-2 px-4" on:click={contactSupport}
			>Kontaktoni Suportin</button
		>
	</div>
</section>
