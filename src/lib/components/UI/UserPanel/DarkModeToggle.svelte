<script lang="ts">
	import { darkMode } from '$lib/userState/preferences';

	import Moon from '~icons/feather/moon';
	import Sun from '~icons/feather/sun';

	export let styled: boolean = true;
</script>

<div
	class={styled
		? 'rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800'
		: ''}
>
	{#if $darkMode}
		<div class="" on:click={() => darkMode.set(false)} on:keydown={() => darkMode.set(false)}>
			<Moon class={'h-5 w-5'} />
		</div>
	{:else}
		<div class="" on:click={() => darkMode.set(true)} on:keydown={() => darkMode.set(true)}>
			<Sun class={'h-5 w-5'} />
		</div>
	{/if}
</div>
