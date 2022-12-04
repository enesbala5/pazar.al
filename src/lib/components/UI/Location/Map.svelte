<script lang="ts">
	import type { Countries } from '@prisma/client';
	import type { Cities } from '@prisma/client';
	import AlbaniaMap from './AlbaniaMap.svelte';
	import KosovoMap from './KosovoMap.svelte';

	export let city: Cities;
	export let country: Countries = 'Albania';

	let maps = [
		{ country: 'Albania', component: AlbaniaMap },
		{ country: 'Kosovo', component: KosovoMap },
	];

	let selectedMap = maps.find((map) => map.country === country);

	export let classNames: string = '';
	export let mapClassNames: string = '';

	let highlightedClasses =
		'fill-indigo-600 stroke-neutral-50 dark:fill-neutral-200 dark:stroke-neutral-800 z-50 hover:dark:fill-neutral-50 hover:dark:stroke-neutral-500 hover:fill-indigo-500';
	let defaultClasses =
		'fill-neutral-100 stroke-neutral-500 dark:fill-neutral-800 dark:stroke-neutral-500 hover:fill-neutral-200 hover:dark:fill-neutral-700 hover:stroke-neutral-800';
</script>

<section class={classNames}>
	<svelte:component
		this={selectedMap?.component}
		{city}
		{mapClassNames}
		{highlightedClasses}
		{defaultClasses}
	/>
</section>
