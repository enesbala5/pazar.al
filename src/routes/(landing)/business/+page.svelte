<script>
	// Components
	import Img from '@zerodevx/svelte-img';
	// Import original full-sized image with `?run` query param.
	import meeting from '$lib/assets/business/HERO/meeting.jpeg?run';
	import coffee from '$lib/assets/business/HERO/coffee.jpg?run';
	import keyboard from '$lib/assets/business/HERO/keyboard.jpg?run';
	// Icons
	import Dollar from '$lib/components/logos/user/filters/sort/Dollar.svelte';
	import CareerCTA from './components/CareerCTA.svelte';
	import GetStartedCTA from './components/GetStartedCTA.svelte';
	import Stats from './components/Stats.svelte';
	import TechnicalInfo from './components/TechnicalInfo.svelte';
	import Incentives from './components/Incentives.svelte';
	import Footer from '$lib/components/UI/Footer.svelte';
	import Feeds from './components/Feeds.svelte';

	// Variable Initialisation
	let name = 'Enes Bala';
</script>

<title>Business</title>

<main class="mx-auto w-11/12">
	<article
		class="flex h-[80vh] items-center justify-between rounded-xl bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900"
	>
		<section class="mb-6 w-1/2 p-8">
			<h1 class="headline text-5xl font-medium leading-tight">Dyqani juaj dixhital.</h1>
			<p class="my-4 w-2/3">
				Pazar.al ju ofron dyqanin tuaj dixhital pa asnje kosto. Zgjidhja ideale per te ndertuar
				eksperiencen ideale per klientet tuaj e per te rritur shitjet.
			</p>
			<hr class="mt-6  w-24 border-neutral-200" />
			<div class="mt-8 flex space-x-2">
				<button class="buttonBase buttonPrimary">Get Started</button>
				<button class="buttonBase buttonSecondary">Get on a call</button>
			</div>
		</section>
		<section class="grid h-full w-1/2 grid-cols-2 grid-rows-2 gap-4 p-6">
			<div
				class="relative col-span-2 flex h-full w-full items-center justify-center overflow-hidden rounded-xl"
			>
				<div class="absolute inset-0">
					<Img
						class="h-full w-full object-cover"
						src={meeting}
						alt="Business Meeting - E-Commerce"
					/>

					<div class="absolute inset-0 bg-indigo-400 mix-blend-multiply" />
				</div>
			</div>
			<div
				class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl "
			>
				<div class="absolute inset-0">
					<Img class="h-full w-full object-cover" src={keyboard} alt="People working on laptop" />
					<div class="absolute inset-0 bg-blue-400 mix-blend-multiply" />
				</div>
			</div>
			<div
				class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl "
			>
				<div class="absolute inset-0">
					<Img class="h-full w-full object-cover" src={coffee} alt="Business Executive Relaxing" />
					<div class="absolute inset-0 bg-sky-400 opacity-90 mix-blend-multiply" />
				</div>
			</div>
		</section>
	</article>
	<section class="my-16 sm:my-24 lg:my-28">
		<Stats />
	</section>

	<section class="my-20 sm:my-28 lg:my-36 ">
		<div
			class="flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md border-neutral-300 bg-neutral-50 shadow-dark dark:bg-neutral-800 dark:shadow-darkProMax lg:rounded-xl"
		>
			<div>
				<h3 class="h3 mb-6">Simple process - Pazar.al</h3>
			</div>
			<div
				class="flex h-1/2 w-fit min-w-[50%] items-center justify-center rounded-md bg-neutral-900 shadow-dark dark:shadow-darkProMax sm:rounded-lg lg:rounded-xl"
			>
				<Feeds />
			</div>
		</div>
	</section>
	<section class="mx-auto my-16 sm:my-24 lg:my-28 lg:w-10/12 ">
		<TechnicalInfo />
	</section>
	<section class="mx-auto my-16 sm:my-24 lg:my-28 lg:w-10/12 ">
		<!-- <CareerCTA /> -->
	</section>
	<section class="mx-auto my-16 sm:my-24 lg:my-28 lg:w-10/12 ">
		<GetStartedCTA />
	</section>
</main>
<Footer />
