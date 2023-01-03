<script>
	import { card } from '$lib/userState/preferences';
	import Grid from '../logos/user/filters/Grid.svelte';
	import List from '../logos/user/filters/List.svelte';
</script>

<div class="flex w-fit overflow-hidden rounded-full bg-indigo-100 bg-opacity-20 dark:bg-indigo-600">
	<button
		on:click={() => {
			card.set('card');
		}}
		class="
					{$card === 'card' ? 'bg-neutral-50' : 'bg-transparent'}
					flex h-full w-1/2 grow items-center justify-center rounded-full px-4 py-1.5"
	>
		<div class="mx-2">
			<Grid
				classNames="
							{$card === 'card' ? 'stroke-indigo-700' : 'stroke-white'}
							fill-transparent w-4 h-4 bg-transparent"
			/>
		</div>
	</button>
	<button
		on:click={() => {
			card.set('list');
		}}
		class="
					{$card === 'list' ? 'bg-neutral-50' : 'bg-transparent'}
					flex h-full w-1/2 grow items-center justify-center rounded-full  px-4 py-1.5"
	>
		<div class="mx-2">
			<List classNames="{$card === 'list' ? 'fill-indigo-700' : 'fill-white'} w-4 h-4" />
		</div>
	</button>
</div>
