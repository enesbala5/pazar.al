<script lang="ts">
	import AddRemove from '$lib/components/logos/user/AddRemove.svelte';
	import { createEventDispatcher } from 'svelte';
	type BadgeType =
		| 'default'
		| 'info'
		| 'error'
		| 'danger'
		| 'success'
		| 'warning'
		| 'toggle'
		| 'link';

	export let type: BadgeType = 'default';
	export let useSlot: boolean = false;

	export let title: string = '',
		message: string = '';

	export let margin: boolean = false;

	export let rounded: 'full' | 'lg' | 'md' = 'full';

	let defineClassByType = (inputType: BadgeType) => {
		if (inputType === 'default') {
			return 'bg-neutral-100 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300';
		}
		if (inputType === 'link') {
			return 'bg-neutral-100 hover:border-neutral-300 dark:hover-neutral-100 hover:bg-neutral-200 border border-neutral-200 dark:border-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200';
		}
		if (inputType === 'success') {
			return 'bg-green-100 border border-green-200 dark:border-green-500 dark:bg-green-900 text-green-700 dark:text-green-500';
		}
		if (inputType === 'info') {
			return 'bg-blue-100 border border-blue-200 dark:border-blue-500 dark:bg-blue-900 text-blue-700 dark:text-blue-500';
		}
		if (inputType === 'error' || inputType === 'danger') {
			return 'bg-red-100 border border-red-200 dark:border-red-500 dark:bg-red-900 text-red-700 dark:text-red-200';
		}
		if (inputType === 'warning') {
			return 'bg-yellow-200 border border-yellow-400 dark:border-yellow-500 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-500';
		} else {
			return '';
		}
	};

	export let link: string = '';
	export let useAction: boolean = false;
	export let toggled: boolean = false;

	export let sm: boolean = false;

	const dispatch = createEventDispatcher();

	const dispatchAction = () => {
		toggled = !toggled;
		if (useAction !== false) {
			dispatch('badgeAction');
		}
	};

	let classNames: string;
	let hovering: boolean = false;

	const toggleTypeClassManagement = (toggled: boolean, hovering: boolean) => {
		if (type === 'toggle') {
			if (hovering) {
				classNames = toggled ? defineClassByType('info') : defineClassByType('link');
				return;
			} else {
				classNames = toggled ? defineClassByType('info') : defineClassByType('link');
				return;
			}
		} else {
			classNames = defineClassByType(type);
		}
	};

	$: toggleTypeClassManagement(toggled, hovering);
</script>

<a
	href={link !== '' ? link : '#'}
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	on:click={dispatchAction}
	on:keydown={dispatchAction}
	class="
	{classNames}
	{margin ? 'mb-2 mr-2' : ''}
	{sm ? ' px-3 py-1 text-xs md:text-sm' : ' p-2 px-4 py-2 text-sm'}
	{link || useAction ? 'cursor-pointer' : 'isDisabled'}
		flex w-fit items-center  rounded-{rounded}  "
>
	{#if !useSlot}
		<div class="flex items-center justify-center space-x-2">
			<p class=" font-medium">
				{title} <span class="font-normal">{message}</span>
			</p>
			{#if useAction}
				<!-- Plus -->
				<div>
					<AddRemove {toggled} />
				</div>
			{/if}
		</div>
	{/if}
	{#if useSlot}
		<slot />
	{/if}
</a>

<style>
	.isDisabled {
		color: currentColor;
		pointer-events: none;
		text-decoration: none;
	}
</style>
