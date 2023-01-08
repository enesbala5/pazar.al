<script lang="ts">
	const features = [
		{
			name: 'Durable',
			description:
				'The leather cover and machined steel disc binding stand up to daily use for years to come.',
		},
		{
			name: 'Refillable',
			description:
				'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
		},
		{
			name: 'Thoughtfully designed',
			description:
				'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
		},
		{
			name: 'Locally made',
			description: 'Responsibly and sustainably made real close to wherever you are, somehow.',
		},
	];
</script>

<section aria-labelledby="features-heading" class="relative">
	<div
		class="aspect-[3/2]  sm:aspect-[5/2] lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16 "
	>
		<img
			src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
			alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
			class="h-full w-full object-cover object-center lg:h-full lg:w-full lg:rounded-xl rounded-md overflow-hidden"
		/>
	</div>

	<div
		class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32"
	>
		<div class="lg:col-start-2">
			<h2 id="features-heading" class="font-medium opacity-75">Leatherbound Daily Journal</h2>
			<p class="mt-4 text-4xl font-bold tracking-tight headline">All in the Details</p>
			<p class="mt-4 opacity-75">
				We've obsessed over every detail of this handcrafted journal to bring you the best materials
				for daily use.
			</p>

			<dl class="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
				{#each features as feature}
					<div>
						<dt class="font-medium headline">{feature.name}</dt>
						<dd class="mt-2 opacity-75">{feature.description}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>
