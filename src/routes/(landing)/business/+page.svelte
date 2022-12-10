<script lang="ts">
	import Dollar from '$lib/components/logos/user/filters/sort/Dollar.svelte';

	let name = 'Enes Bala';
</script>

<title>Business</title>

<main class="mx-auto w-11/12">
	<article class=" flex h-[80vh] items-center justify-between rounded-xl bg-neutral-100">
		<section class="mb-6 w-1/2 p-8">
			<h1 class="headline text-5xl font-medium leading-tight">Dyqani juaj dixhital.</h1>
			<p class="mt-4 w-2/3 text-sm">
				Pazar.al ju ofron dyqanin tuaj dixhital pa asnje kosto. Zgjidhja ideale per te ndertuar
				eksperiencen ideale per klientet tuaj e per te rritur shitjet.
			</p>
			<hr class="border-neutral-200  mt-6 w-24">
			<div class="mt-8 flex space-x-2">
				<button class="buttonBase buttonPrimary">Get Started</button>
				<button class="buttonBase buttonSecondary">Get on a call</button>
			</div>
		</section>
		<section class="grid h-full w-1/2 grid-cols-2 grid-rows-2 gap-4 p-6">
			<div
				class="col-span-2 flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200"
			>
				<Dollar classNames="h-8 w-8" />
			</div>
			<div
				class="flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200"
			>
				<Dollar classNames="h-8 w-8" />
			</div>
			<div
				class="flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200"
			>
				<Dollar classNames="h-8 w-8" />
			</div>
		</section>
	</article>
</main>
