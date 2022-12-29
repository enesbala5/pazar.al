<script lang="ts">
	import { disableDarkMode, enableDarkMode } from '$lib/fetching/themeChange';
	import { darkMode } from '$lib/userState/preferences';

	import Moon from '~icons/feather/moon';
	import Sun from '~icons/feather/sun';

	export let styled: boolean = true;

	const enableDarkModeLocal = () => {
		enableDarkModeLocal;
		enableDarkMode();
	};
	const disableDarkModeLocal = () => {
		disableDarkMode();
	};
</script>

<div
	class={styled
		? 'rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800'
		: ''}
>
	{#if $darkMode}
		<div class="" on:click={disableDarkModeLocal} on:keydown={disableDarkModeLocal}>
			<Moon class={'h-5 w-5'} />
		</div>
	{:else}
		<div class="" on:click={enableDarkModeLocal} on:keydown={enableDarkModeLocal}>
			<Sun class={'h-5 w-5'} />
		</div>
	{/if}
</div>
