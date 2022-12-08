<script lang="ts">
	import { modalOpen } from '$lib/userPreferences/preferences';

	modalOpen;

	const toggleModal = () => {
		$modalOpen = !$modalOpen;
	};
</script>

{#if $modalOpen}
	<div class="fixed top-0 left-0 flex h-screen w-screen items-center justify-center">
		<div class="defaultBg">
			<slot />
		</div>
	</div>
	<div
		class="fixed top-0 left-0 h-screen w-screen bg-black opacity-10"
		on:click={toggleModal}
		on:keydown={toggleModal}
	/>
{/if}
