<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { scale } from 'svelte/transition';
	import { toggleBoolean } from '$lib/functions/generic';
	import { quartInOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';

	const dispatch = createEventDispatcher();

	export let bgColor: string = 'bg-neutral-900';

	// Type Declarations
	type Position = 'bottom'; // TODO: Add support for left + right + top
	type Direction = 'ltr' | 'rtl';
	type Anchor = 'left' | 'right';

	// Props
	export let visible: boolean = false;
	export let element: HTMLElement;
	export let position: Position;
	export let direction: Direction = 'ltr';
	export let anchor: Anchor = 'left';

	// Calculations
	let bottom: number;
	let left: number;
	let right: number;
	let popoverSize: number;

	const initPosition = () => {
		({ bottom, left, right } = element?.getBoundingClientRect() ?? {
			bottom: 0,
			left: 0,
			right: 0,
		});
	};

	$: element, initPosition();
	$: popoverSize, console.log(popoverSize);

	/**
	 * Toggle Popover Visibility
	 */

	export const notVisible = () => {
		dispatch('notVisible');
	};

	afterNavigate(() => {
		notVisible();
	});
</script>

<svelte:window on:resize={initPosition} />

{#if visible}
	<section
		bind:offsetWidth={popoverSize}
		role="dialog"
		aria-labelledby="Title"
		aria-describedby="Description"
		aria-orientation="vertical"
		transition:scale={{ start: 0, duration: 200, easing: quartInOut }}
		class=" 
	{anchor === 'right' ? 'origin-top-right' : 'origin-top-left'}
	wrapper z-50 rounded-md {bgColor} p-4"
		style="--popover-top: {`${bottom}px`};
		--popover-left:
	{`${anchor === 'right' ? right - popoverSize : left}px`}"
	>
		<div
			class="
			{direction === 'rtl' ? 'items-end' : 'items-start'}
			flex flex-col space-y-2"
		>
			<slot />
		</div>
	</section>
	<div
		class=" fixed top-0 left-0 z-40 h-screen w-screen bg-black opacity-0"
		on:click={notVisible}
		on:keydown={notVisible}
	/>
{/if}

<style>
	.wrapper {
		position: absolute;

		top: calc(var(--popover-top) + 10px);
		left: var(--popover-left);
	}
</style>
