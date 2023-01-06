<script lang="ts">
	import type { Countries } from '@prisma/client';
	import type { Cities } from '@prisma/client';
	import Map from '$lib/components/UI/Location/Map.svelte';
	import Navigate from '~icons/feather/navigation';
	import type { Size } from '$lib/types/size';

	export let city: Cities;
	export let country: Countries = 'Albania';

	export let size: Size | undefined = undefined;
	export let calculatedSize: Size = 'base';

	export let classNames: string = '';

	let innerWidth: number;

	const applySizeCap = (calculatedSize: Size, size: Size | undefined): Size => {
		if (size !== undefined) {
			if (size === 'base') {
				return calculatedSize;
			}
			if (size === 'sm') {
				if (calculatedSize === 'base') return 'sm';
			}
			if (size === 'xs') {
				return 'xs';
			}
		}
		return calculatedSize;
	};

	const defineSize = (innerWidth: number, size: Size | undefined): Size => {
		let calculatedSizeWindow: Size = 'base';

		if (innerWidth > 1024) {
			calculatedSizeWindow = 'base';
		}
		if (innerWidth >= 640 && innerWidth < 1024) {
			calculatedSizeWindow = 'sm';
		}
		if (innerWidth < 640) {
			calculatedSizeWindow = 'xs';
		}

		const finalSize = applySizeCap(calculatedSizeWindow, size);
		return finalSize;
	};

	$: innerWidth, (calculatedSize = defineSize(innerWidth, size));
</script>

<svelte:window bind:innerWidth />
<div
	class=" 
		{calculatedSize === 'base'
		? ' items-center justify-between md:flex-row'
		: calculatedSize === 'sm'
		? ' items-center justify-between md:flex-row'
		: 'flex-col'}
		{classNames} relative flex
"
>
	<div
		class="z-10 h-[90%] w-full px-6
	{calculatedSize === 'base' ? 'mt-0' : calculatedSize === 'sm' ? 'mt-0' : 'my-6'}
	"
	>
		<p
			class="font-medium
			{calculatedSize === 'base' ? 'text-3xl' : calculatedSize === 'sm' ? 'text-3xl' : 'text-2xl'}"
		>
			{city},
			{country}
		</p>
		<p class="mt-1 text-sm">Blv. Gjergj Fishta, Ish-Ekspozita</p>
		<button class="buttonSmRounded buttonSecondary mt-4 flex items-center">
			<Navigate class="h-4 w-4" />
			<p class="mx-2">Open in Maps</p>
		</button>
	</div>
	<Map
		{country}
		{city}
		classNames="z-10
		{calculatedSize === 'xs' ? 'px-4' : calculatedSize === 'sm' ? 'px-12' : 'px-12'}
		"
		mapClassNames="
			{calculatedSize === 'xs' ? 'h-64' : calculatedSize === 'sm' ? 'h-72' : 'h-96'}
		"
	/>
	<!-- {#if calculatedSize !== 'xs'} -->
	<div
		class="
		absolute w-full bg-neutral-200 dark:border dark:border-neutral-800 dark:bg-neutral-900
		{calculatedSize === 'base'
			? 'top-1/2 h-[75%] -translate-y-1/2 rounded-xl'
			: calculatedSize === 'sm'
			? 'top-1/2 h-[75%] -translate-y-1/2 rounded-lg text-2xl'
			: 'top-0 h-[60%] rounded-md text-xl'}
		"
	/>

	<!-- {/if} -->
</div>
