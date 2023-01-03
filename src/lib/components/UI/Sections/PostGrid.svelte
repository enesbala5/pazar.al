<script lang="ts">
	import type { Category } from '$lib/data/categories';
	import { card, type ProductItemFormat } from '$lib/userState/preferences';
	import CategoryTile from './Search/CategoryTile.svelte';

	export let fullWidth: boolean = false;
	export let inheritWidth: boolean = false;
	export let hideAds: boolean = false;
	export let gap: boolean = false;
	export let category: Category | undefined = undefined;

	let innerWidth: number = 1024;

	export let cardDisplay: ProductItemFormat | undefined = undefined;

	const defineCardPreference = (settingOverride: ProductItemFormat | undefined, width: number) => {
		if (settingOverride !== undefined) {
			if (width >= 1024) {
				return $card;
			}
			return settingOverride;
		}
		return $card;
	};

	let cardLocal = defineCardPreference(cardDisplay, innerWidth);
	$: cardLocal = defineCardPreference(cardDisplay, innerWidth);
</script>

<svelte:window bind:innerWidth />

<article
	class="flex w-full flex-col justify-between  lg:flex-row lg:space-x-4
	{inheritWidth ? '' : 'lg:mx-auto lg:w-11/12'}
	"
>
	{#if $$slots.filters && !fullWidth}
		<!-- ? FILTERS -->
		<section
			class="hidden items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 lg:flex lg:w-2/12"
		>
			<slot name="filters" />
		</section>
	{/if}
	<!-- ? MAIN -->
	<article
		class="
			{fullWidth ? 'lg:w-full' : 'lg:w-8/12'}
			flex flex-col
		"
	>
		{#if category !== undefined}
			<CategoryTile {category} />
		{/if}
		<section
			class="
			w-full
			{cardLocal === 'minimized'
				? 'flex items-start space-x-2 overflow-x-scroll pb-4 lg:grid lg:items-start lg:space-x-0 lg:overflow-x-hidden'
				: 'grid'}
			{gap && innerWidth >= 1024 ? 'gap-4' : ''}
			{cardLocal === 'card'
				? `grid-cols-1' ${fullWidth ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`
				: 'grid-cols-1'} "
		>
			<slot />
		</section>
	</article>
	<!-- ? ADS -->
	{#if !hideAds}
		<section
			class="flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 lg:w-2/12"
		>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6838300598245572"
				crossorigin="anonymous"></script>
			<!-- Kerkim - Ads Sidebar -->
			<ins
				class="adsbygoogle"
				style="display:block"
				data-ad-client="ca-pub-6838300598245572"
				data-ad-slot="6795246788"
				data-ad-format="auto"
				data-full-width-responsive="true"
			/>
			<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
			</script>
		</section>
	{/if}
</article>
