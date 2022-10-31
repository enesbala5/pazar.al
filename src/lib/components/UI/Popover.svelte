<script lang="ts">
	import { fade } from 'svelte/transition';
	import Logout from '$lib/components/auth/Logout.svelte';

	// Type Declarations
	type Position = 'left' | 'right' | 'top' | 'bottom';
	type Direction = 'ltr' | 'rtl';

	// Props
	export let element: HTMLElement;
	export let position: Position;
	export let direction: Direction = 'ltr';

	// Calculations
	let bottom: number;
	let left: number;

	const initPosition = () => {
		({ bottom, left } = element?.getBoundingClientRect() ?? { bottom: 0, left: 0 });
		console.log({ bottom, left });
	};

	$: element, initPosition();
</script>

<svelte:window on:resize={initPosition} />

<section
	role="dialog"
	aria-labelledby="Title"
	aria-describedby="Description"
	aria-orientation="vertical"
	transition:fade
	class="wrapper flex flex-col bg-neutral-800 p-4 {direction === 'rtl'
		? 'items-end'
		: 'items-start'}"
	style="--popover-top: {`${bottom}px`};
	{`${direction !== 'rtl' ? '--popover-left' : '--popover-left'}`}: {`${left}px`}"
>
	<Logout>
		<button type="submit">Log Out</button>
	</Logout>
	<p class="">Test</p>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ipsam nobis? Consequuntur
		asperiores, incidunt aperiam doloribus reprehenderit quam dolor laborum perferendis fugiat
		repellendus. Tempora dicta reprehenderit omnis, totam voluptate asperiores!
	</p>
</section>

<style>
	.wrapper {
		position: absolute;

		top: calc(var(--popover-top) + 10px);
		left: var(--popover-left);
		right: var(--popover-right);
	}
</style>
