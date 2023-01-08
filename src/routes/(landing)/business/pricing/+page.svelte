<script lang="ts">
	const tiers = [
		{
			name: 'Standard',
			href: '#',
			priceMonthly: 49,
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
			features: [
				'Pariatur quod similique',
				'Sapiente libero doloribus modi nostrum',
				'Vel ipsa esse repudiandae excepturi',
				'Itaque cupiditate adipisci quibusdam',
			],
		},
		{
			name: 'Enterprise',
			href: '#',
			priceMonthly: 79,
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
			features: [
				'Pariatur quod similique',
				'Sapiente libero doloribus modi nostrum',
				'Vel ipsa esse repudiandae excepturi',
				'Itaque cupiditate adipisci quibusdam',
			],
		},
	];

	import Footer from '$lib/components/UI/Footer.svelte';
	import Badge from '$lib/components/UI/Important/Badge.svelte';
	import CheckIcon from '~icons/feather/check';
</script>

<div class="">
	<div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-lg font-medium text-indigo-600 dark:text-indigo-500">Pricing</h2>
			<p class="mt-1 text-4xl font-medium tracking-tight  sm:text-5xl lg:text-6xl">
				Take control of your <br /> Selling Experience.
			</p>
			<p class="mx-auto mt-5 max-w-xl text-xl text-neutral-500">
				Start building for free, then add a site plan to go live. Account plans unlock additional
				features.
			</p>
		</div>
	</div>

	<div class="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:pb-24">
		<div class="relative">
			<div
				class="absolute inset-0 h-3/4 bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800"
			/>
			<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					class="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0"
				>
					{#each tiers as tier}
						<div class="flex flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-xl">
							<div
								class="bg-neutral-50 px-6 py-8 dark:bg-neutral-900 dark:shadow-darkProMax sm:p-10 sm:pb-6"
							>
								<div>
									<Badge type="default" message={tier.name} />
								</div>
								<div class="mt-6 flex items-baseline text-6xl font-medium tracking-tight">
									${tier.priceMonthly}
									<span class="ml-1 text-2xl font-medium tracking-normal text-neutral-500">/mo</span
									>
								</div>
								<p class="mt-5 text-lg text-neutral-500">{tier.description}</p>
							</div>
							<div
								class="flex flex-1 flex-col justify-between space-y-6 bg-neutral-100 px-6 pt-6 pb-8 dark:bg-neutral-800 sm:p-10 sm:pt-6"
							>
								<ul class="space-y-4">
									{#each tier.features ?? [] as feature}
										<li class="flex items-start">
											<div class="flex-shrink-0">
												<CheckIcon class="h-6 w-6 text-green-500" aria-hidden="true" />
											</div>
											<p class="ml-3 text-base opacity-75">{feature}</p>
										</li>
									{/each}
								</ul>
								<a class="w-full " href={tier.href}>
									<div class="buttonLg buttonPrimary w-full" aria-describedby="tier-standard">
										Get started
									</div>
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:mt-5 lg:px-8">
			<div class="mx-auto max-w-md lg:max-w-5xl">
				<div
					class="rounded-lg bg-neutral-100 px-6 py-8 dark:bg-neutral-800 dark:shadow-darkProMax sm:p-10 lg:flex lg:items-center lg:rounded-xl"
				>
					<div class="flex-1">
						<div class="w-fit rounded-full shadow-light">
							<Badge title="Discounted " type="default" />
						</div>
						<div class="mt-4 text-lg lg:w-2/3">
							<span class="opacity-75">
								Get full access to all of standard license features for solo projects that make less
								than $20k gross revenue for
							</span><span class="headline font-medium">$29</span>.
						</div>
					</div>
					<div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
						<a href="#" class="buttonLg buttonSecondary">Buy Discounted License</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />
