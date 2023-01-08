<script lang="ts">
	interface Stat {
		value: string;
		descriptor: string;
	}
	export let stats: Stat[] = [
		{
			value: '1M',
			descriptor: 'Monthly Active Users',
		},
		{
			value: '14.5K',
			descriptor: 'Live Listings',
		},
		{
			value: '140',
			descriptor: 'Businesses Registered',
		},
	];
</script>

<div class="bg-neutral-50 pt-12 dark:bg-neutral-900 sm:pt-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="headline text-3xl font-medium tracking-tight sm:text-4xl">
				Trusted by users in Albania and Kosovo
			</h2>
			<p class="mt-4 sm:mt-4">
				We provide with a highly efficient platform for your products, free of charge. <br /> Available
				for the public and the private sector alike.
			</p>
		</div>
	</div>
	<div class="mt-10 rounded-lg bg-neutral-50 pb-12 dark:bg-neutral-900 sm:pb-16">
		<div class="relative">
			<div class="absolute inset-0 h-1/2 bg-neutral-50 dark:bg-neutral-900 " />
			<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-4xl">
					<dl
						class="rounded-lg bg-neutral-50  shadow-dark dark:bg-neutral-900 dark:shadow-darkProMax sm:grid sm:grid-cols-3"
					>
						{#each stats as stat, i}
							<div
								class="
								{i === 0
									? 'sm:border-r'
									: i === stats.length - 1
									? 'sm:border-l'
									: 'border-t border-b sm:border-l sm:border-r'}
								flex flex-col  border-neutral-200 p-6 text-center dark:border-neutral-800 sm:border-0"
							>
								<dt class="order-2 mt-2 leading-6 opacity-80">
									{stat.descriptor}
								</dt>
								<dd
									class="headline order-1 text-5xl font-medium tracking-tight text-indigo-600 dark:text-neutral-100"
								>
									{stat.value}
								</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
		</div>
	</div>
</div>
