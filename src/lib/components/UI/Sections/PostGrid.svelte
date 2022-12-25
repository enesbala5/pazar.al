<script lang="ts">
	import { card } from '$lib/userState/preferences';

	export let fullWidth: boolean = false;
</script>

<article
	class="flex w-full flex-col justify-between lg:mx-auto lg:w-11/12 lg:flex-row lg:space-x-4 "
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
	<section
		class="grid  {fullWidth ? 'lg:w-full' : 'lg:w-8/12'}
			{$card ? `grid-cols-1' ${fullWidth ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}` : 'grid-cols-1'}"
	>
		<slot />
	</section>
	<!-- ? ADS -->
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
</article>
