<script lang="ts">
	import CheckIcon from '~icons/feather/check';
	import UserIcon from '~icons/feather/user';
	import ThumbsUpIcon from '~icons/feather/thumbs-up';

	const timeline = [
		{
			id: 1,
			content: 'Applied to',
			target: 'Front End Developer',
			href: '#',
			date: 'Sep 20',
			datetime: '2020-09-20',
			icon: UserIcon,
			iconBackground: 'bg-neutral-300 dark:bg-neutral-500',
		},
		{
			id: 2,
			content: 'Advanced to phone screening by',
			target: 'Bethany Blake',
			href: '#',
			date: 'Sep 22',
			datetime: '2020-09-22',
			icon: ThumbsUpIcon,
			iconBackground: 'bg-blue-500',
		},
		{
			id: 3,
			content: 'Completed phone screening with',
			target: 'Martha Gardner',
			href: '#',
			date: 'Sep 28',
			datetime: '2020-09-28',
			icon: CheckIcon,
			iconBackground: 'bg-green-500',
		},
		{
			id: 4,
			content: 'Advanced to interview by',
			target: 'Bethany Blake',
			href: '#',
			date: 'Sep 30',
			datetime: '2020-09-30',
			icon: ThumbsUpIcon,
			iconBackground: 'bg-blue-500',
		},
		{
			id: 5,
			content: 'Completed interview with',
			target: 'Katherine Snyder',
			href: '#',
			date: 'Oct 4',
			datetime: '2020-10-04',
			icon: CheckIcon,
			iconBackground: 'bg-green-500',
		},
	];

	function classNames(...classes: any) {
		return classes.filter(Boolean).join(' ');
	}
</script>

<div class="flow-root">
	<ul class="-mb-8">
		{#each timeline as event, eventIdx}
			<li>
				<div class="relative pb-8">
					{#if eventIdx !== timeline.length - 1}
						<span
							class="bg-neut-200 absolute top-4 left-4 -ml-px h-full w-0.5"
							aria-hidden="true"
						/>
					{/if}
					<div class="relative flex space-x-3">
						<div>
							<span
								class="{event.iconBackground} flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white dark:ring-neutral-700"
							>
								<svelte:component this={event.icon} class="h-5 w-5 text-white" aria-hidden="true" />
							</span>
						</div>
						<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
							<div>
								<p class="text-neut-500 text-sm">
									{event.content}{' '}
									<a href={event.href} class="text-neut-900 font-medium">
										{event.target}
									</a>
								</p>
							</div>
							<div class="text-neut-500 whitespace-nowrap text-right text-sm">
								<time dateTime={event.datetime}>{event.date}</time>
							</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
