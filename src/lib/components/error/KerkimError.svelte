<script lang="ts">
	import { goto } from '$app/navigation';
	import { nav } from '$lib/userState/nav';
	import NoResults from '../logos/user/NoResults.svelte';

	export let id: string | undefined = undefined;
	export let alternate: boolean = false;
</script>

<section
	class="
	{alternate ? 'col-span-3' : 'col-span-3'} 
	mx-2 my-4 rounded-md bg-gradient-to-t from-neutral-100 to-transparent p-4 py-6 text-left dark:from-neutral-800"
>
	<NoResults classNames="w-24 h-24 dark:fill-neutral-50 fill-neutral-800" />
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
		<a href={nav.index} class="buttonPrimary buttonBase">Return Home</a>
		<a href={nav.support} class="buttonSecondary buttonBase">Kontaktoni Suportin</a>
	</div>
</section>
