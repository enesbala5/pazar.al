<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let hidden: boolean = false;

	export let title: string;
	export let name: string;
	export let classNames: string = '';
	export let type: string = 'text';
	export let placeholder: string = '';

	export let required: boolean = false;
	export let value: string = '';
	let valueCache: string = '';

	export let disabled = false;

	export let visible: boolean = false;

	function typeAction(node: any) {
		node.type = type;
	}

	let passwordValue: string;

	export const focus = () => {
		el.focus();
	};
	export const blur = () => {
		el.blur();
	};

	let el: HTMLInputElement;

	const checkIfChanged = () => {
		if (value !== valueCache)
			dispatch('change', {
				value,
			});
	};

	const checkIfClear = () => {
		if (value === '' || value === undefined) dispatch('clear');
	};

	$: value, checkIfChanged();
	$: value, checkIfClear();

	import Eye from '~icons/feather/eye';
	import EyeOff from '~icons/feather/eye-off';
</script>

{#if hidden}
	<input bind:this={el} {type} {name} id={name} {value} disabled hidden aria-hidden="true" />
{:else}
	<div class="relative {classNames}">
		{#if type === 'password'}
			{#if visible}
				<input
					bind:this={el}
					type="text"
					id={name}
					{name}
					bind:value={passwordValue}
					class="border-1 inputElement dark:inputElementDark peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-indigo-500"
					placeholder=" "
				/>
				<label
					for={name}
					class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-neutral-50 px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-500 dark:bg-neutral-900 dark:text-neutral-400 peer-focus:dark:text-indigo-500"
					>{title}
				</label>
			{/if}
			{#if !visible}
				<input
					bind:this={el}
					type="password"
					id={name}
					{name}
					bind:value={passwordValue}
					class="border-1 inputElement dark:inputElementDark peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-indigo-500"
					placeholder=" "
				/>
				<label
					for={name}
					class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-neutral-50 px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-500 dark:bg-neutral-900 dark:text-neutral-400 peer-focus:dark:text-indigo-500"
					>{title}
				</label>
			{/if}

			<div class="absolute right-4 top-1/2 -translate-y-1/2 ">
				{#if visible}
					<button on:click={() => (visible = false)} class="flex items-center justify-center">
						<Eye class="h-5 w-5 text-neutral-700" />
					</button>
				{/if}
				{#if !visible}
					<button on:click={() => (visible = true)} class="flex items-center justify-center">
						<EyeOff class="h-5 w-5 text-neutral-400" />
					</button>
				{/if}
			</div>
		{/if}

		{#if type !== 'password'}
			{#if !disabled}
				<input
					bind:this={el}
					use:typeAction
					id={name}
					{name}
					bind:value
					class="border-1 inputElement dark:inputElementDark peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:autofill:text-white dark:focus:border-indigo-500"
					placeholder=" "
				/>
				<label
					for={name}
					class="absolute top-2 left-1  z-10 origin-[0] -translate-y-4 scale-75 transform bg-neutral-50 px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-500 dark:bg-neutral-900 dark:text-neutral-400 peer-focus:dark:text-indigo-500"
					>{title}</label
				>
			{/if}
			{#if disabled}
				<input
					bind:this={el}
					use:typeAction
					id={name}
					{name}
					{value}
					class="border-1 peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-neutral-100 dark:focus:border-indigo-500"
					placeholder=" "
					disabled
				/>
				<label
					for={name}
					class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-neutral-50 px-2 text-sm text-neutral-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-600 dark:bg-neutral-900 dark:text-neutral-500 peer-focus:dark:text-indigo-500"
					>{title}</label
				>
			{/if}
		{/if}
	</div>
{/if}
