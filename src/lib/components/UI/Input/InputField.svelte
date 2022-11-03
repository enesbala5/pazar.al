<script lang="ts">
	export let title: string;
	export let name: string;
	export let classNames: string = '';
	export let type: string = 'text';
	export let placeholder: string = '';

	export let required: boolean = false;

	export let disabled = false;
</script>

<div class="relative {classNames}">
	{#if !disabled}
		<input
			{type}
			id={name}
			{name}
			class="border-1 peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-indigo-500"
			placeholder=" "
		/>
		<label
			for={name}
			class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-500 dark:bg-neutral-900 dark:text-neutral-400 peer-focus:dark:text-indigo-500"
			>{title}</label
		>
	{/if}
	{#if disabled}
		<input
			{type}
			id={name}
			{name}
			class="border-1 peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-indigo-500"
			placeholder=" "
			disabled
		/>
		<label
			for={name}
			class="text-neutral-400 absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-600 dark:bg-neutral-900 dark:text-neutral-500 peer-focus:dark:text-indigo-500"
			>{title}</label
		>
	{/if}
</div>
