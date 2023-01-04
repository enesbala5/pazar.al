<script lang="ts">
	import Euro from '../logos/user/currencies/Euro.svelte';
	import Lek from '../logos/user/currencies/Lek.svelte';

	export let eur: boolean = false;
	export let price: number;

	export let transparent: boolean = false;
	type Size = 'sm' | 'base' | 'lg';
	export let size: Size = 'sm';
</script>

<section
	class="
	{transparent ? 'w-fit' : 'rounded-sm bg-indigo-600'}
	{size === 'sm' ? 'items-center py-0.5 px-2' : 'items-end font-medium'}
	flex "
>
	<div
		aria-label="Currency Used"
		class="
		{size === 'sm' ? 'mr-2' : size === 'base' ? 'mr-2' : 'mr-2.5'}
		opacity-80"
	>
		{#if eur}
			<Euro
				classNames="
			{size === 'sm'
					? 'h-2.5 md:h-3 fill-white'
					: size === 'base'
					? 'h-3 md:h-4 iconColors'
					: 'h-3 md:h-4 iconColors mb-1.5'}
			"
			/>
		{:else}
			<Lek
				classNames="
			{size === 'sm'
					? 'h-2.5 md:h-3 fill-white'
					: size === 'base'
					? 'h-3 md:h-4 iconColors'
					: 'h-3 md:h-4 iconColors mb-1.5'}"
			/>
		{/if}
	</div>
	<p
		class="
		{size === 'sm'
			? 'text-sm text-white md:text-base'
			: size === 'base'
			? 'text-base md:text-lg'
			: 'text-2xl md:text-xl'}
		
	"
	>
		{price.toLocaleString()}
	</p>
</section>
