<script lang="ts">
	import { closeModal, toggleModal } from '$lib/functions/modal';
	import { modalOpen, scrollingAllowed } from '$lib/userState/preferences';

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
			closeModal();
		}
	};

	let scrollable: boolean = $scrollingAllowed;
	$: $scrollingAllowed, (scrollable = $scrollingAllowed);
</script>

<svelte:window use:wheel={{ scrollable }} on:keydown={checkForEscape} />

{#if $modalOpen}
	<div class="fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center">
		<!-- <div use:clickOutside on:outclick={() => closeModal()}> -->
		<slot />
		<!-- </div> -->
		<div
			class="fixed top-0 left-0 h-full w-full bg-black opacity-75"
			on:click={toggleModal}
			on:keydown={toggleModal}
		/>
	</div>
{/if}
