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
</script>

<section class={classNames}>
	<svelte:component this={selectedMap?.component} {city} {mapClassNames} />
</section>
