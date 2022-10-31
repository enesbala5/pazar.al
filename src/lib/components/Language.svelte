<script lang="ts">
	import { browser } from '$app/environment';
	import { locale } from '$lib/lang';

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
</script>

<select bind:value={selected} on:change={handleOnChange}>
	{#each languages as l (l.code)}
		{#if l.code === 'en'}
			<option value={l.code} class="flex items-center justify-center">{l.name}</option>
		{/if}
		{#if l.code === 'sq'}
			<option value={l.code} class="flex items-center justify-center">{l.name}</option>
		{/if}
	{/each}
</select>
