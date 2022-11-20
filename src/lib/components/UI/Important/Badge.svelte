<script lang="ts">
	type AlertType = 'default' | 'info' | 'error' | 'danger' | 'success' | 'warning';

	export let type: AlertType = 'default';
	export let useSlot: boolean = false;

	export let title: string = '',
		message: string = '';
	
	export let margin: boolean = false;

	let defineClassByType = () => {
		if (type === 'default') {
			return 'bg-neutral-100 border border-neutral-200 dark:border-neutral-200 dark:bg-transparent text-neutral-700 dark:text-neutral-200';
		}
		if (type === 'success') {
			return 'bg-green-100 border border-green-200 dark:border-green-500 dark:bg-transparent text-green-700 dark:text-green-500';
		}
		if (type === 'info') {
			return 'bg-blue-100 border border-blue-200 dark:border-blue-500 dark:bg-transparent text-blue-700 dark:text-blue-500';
		}
		if (type === 'error' || type === 'danger') {
			return 'bg-red-100 border border-red-200 dark:border-red-500 dark:bg-transparent text-red-700 dark:text-red-500';
		}
		if (type === 'warning') {
			return 'bg-yellow-100 border border-yellow-200 dark:border-yellow-500 dark:bg-transparent text-yellow-700 dark:text-yellow-500';
		}
	};

	const classNames = defineClassByType();
</script>

<div
	class="
	{classNames} flex w-fit items-center space-x-2 rounded-full p-2 px-4 py-2 text-sm mr-2 "
>
	{#if !useSlot}
		<p class=" font-medium">
			{title} <span class="font-normal">{message}</span>
		</p>
	{/if}
	{#if useSlot}
		<slot />
	{/if}
</div>
