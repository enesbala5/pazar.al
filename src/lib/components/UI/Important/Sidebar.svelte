<script lang="ts">
	import { linear, quadInOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';

	import { closeSidebar } from '$lib/functions/sidebar';
	import { sidebarOpen, scrollingAllowed } from '$lib/userState/preferences';

	import RemoveIcon from '~icons/feather/x';

	const wheel = (node: any, options: any) => {
		let { scrollable } = options;
		const handler = (e: any) => {
			if (!scrollable) e.preventDefault();
		};
		node.addEventListener('wheel', handler, {
			passive: false,
		});
		return {
			update(options: any) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, {
					passive: false,
				});
			},
		};
	};

	const checkForEscape = (event: any) => {
		let char = typeof event !== 'undefined' ? event.keyCode : '';

		// IF CHAR === 27
		if (char === 27) {
			closeSidebar();
		}
	};

	let scrollable: boolean = $scrollingAllowed;
	$: $scrollingAllowed, (scrollable = $scrollingAllowed);
</script>

<svelte:window use:wheel={{ scrollable }} on:keydown={checkForEscape} />

<div
	class="fixed top-0 hidden h-screen w-2/12 flex-col justify-between bg-neutral-200 px-4 lg:flex"
>
	<slot />
</div>

{#if $sidebarOpen}
	<div class="fixed top-0 left-0 z-30 h-full min-h-screen w-full ">
		<section class="relative h-full min-h-screen w-full">
			<div
				on:click={closeSidebar}
				on:keydown={closeSidebar}
				class="fixed left-0 top-0  h-screen w-full bg-neutral-600 bg-opacity-75"
				in:fade={{ duration: 150, easing: linear }}
			/>
			<div
				class="fixed h-full min-h-screen w-3/4 bg-neutral-200 px-4 lg:hidden"
				transition:fly={{ x: -724, opacity: 1, easing: quadInOut, duration: 200 }}
			>
				<!-- transition:slide={ { easing: linear, duration: 150}} -->
				<slot />
			</div>
			<div
				class="XButton fixed top-6"
				transition:fly={{ x: -724, opacity: 1, easing: quadInOut, duration: 200 }}
			>
				<button class="buttonSecondary rounded-full p-2 lg:hidden" on:click={closeSidebar}>
					<RemoveIcon class="h-5 w-5 " />
				</button>
			</div>
		</section>
	</div>
{/if}

<style>
	.XButton {
		left: calc(75% + 1.5rem);
	}
	nav {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		padding: 2rem 1rem 0.6rem;
		border-left: 1px solid #aaa;
		background: #fff;
		overflow-y: auto;
		width: 10rem;
	}
</style>
