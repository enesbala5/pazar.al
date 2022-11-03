<script lang="ts">
	import { browser } from '$app/environment';
	import { toggleBoolean } from '$lib/functions/generic';
	import { locale } from '$lib/lang';
	import Albania from '../logos/user/flags/Albania.svelte';
	import UnitedStates from '../logos/user/flags/UnitedStates.svelte';
	import Popover from './Popover.svelte';

	export let bgColor: string;

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'sq', name: 'Shqip' },
	];

	$: selected = locale.get();

	const handleOnChange = () => {
		if (browser) {
			document.cookie = `language=${selected};path=/`;
		}
		locale.set(selected);
	};

	let element: HTMLElement;

	let visible: boolean = false;

	const toggleVisible = () => {
		visible = toggleBoolean(visible);
	};

	const notVisible = () => (visible = false);

	function selectEnglish() {
		selected = 'en';
		handleOnChange();
		visible = false;
	}

	function selectAlbanian() {
		selected = 'sq';
		handleOnChange();
		visible = false;
	}
</script>

<button
	bind:this={element}
	on:click={toggleVisible}
	on:keydown={toggleVisible}
	class="z-20 flex items-center space-x-2 rounded-md {bgColor} py-1.5 px-3"
>
	{#if selected === 'en'}
		<UnitedStates classNames="h-3" />
	{/if}
	{#if selected === 'sq'}
		<Albania classNames="h-3" />
	{/if}
</button>
<Popover {element} {bgColor} position="bottom" anchor="right" {visible} on:notVisible={notVisible}>
	{#each languages as l (l.code)}
		{#if l.code === 'en'}
			<button class="flex items-center space-x-2 " on:click={selectEnglish}>
				<UnitedStates classNames="h-3" />
				<p>{languages[0].name}</p>
			</button>
		{/if}
		{#if l.code === 'sq'}
			<button class="flex items-center space-x-2 " on:click={selectAlbanian}>
				<Albania classNames="h-3" />
				<p>{languages[1].name}</p>
			</button>
		{/if}
	{/each}
</Popover>
