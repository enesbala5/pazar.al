<script lang="ts">
	import { toggleModal } from '$lib/functions/modal';
	import { modalOpen, scrollingAllowed } from '$lib/userPreferences/preferences';

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

	let scrollable: boolean = $scrollingAllowed;
	$: $scrollingAllowed, (scrollable = $scrollingAllowed);
</script>

<svelte:window use:wheel={{ scrollable }} />

{#if $modalOpen}
	<div class="fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center">
		<slot />
		<div
			class="fixed top-0 left-0 h-full w-full bg-black opacity-75"
			on:click={toggleModal}
			on:keydown={toggleModal}
		/>
	</div>
{/if}
