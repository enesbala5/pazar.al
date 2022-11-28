<script lang="ts">
	export let visible: boolean = false;
	import { slide } from 'svelte/transition';

	export let showChevron: boolean = true;
	export let disabled: boolean = false;

	type AccordionSize = 'normal' | 'compressed';
	export let size: AccordionSize = 'normal';

	export let title: string;

	export const makeNotVisible = () => {
		visible = false;
	};

	export const makeVisible = () => {
		if (!disabled) visible = true;
	};

	export const toggleVisible = () => {
		if (!disabled) visible = !visible;
	};

	let hovering: boolean = false;
</script>

<div
	class="
	{size === 'normal' ? `defaultBg rounded-xl ${hovering ? 'shadowDark' : 'shadowLight'}` : ''}
	my-4 transition-all ease-in-out"
>
	<!-- H1 and Chevron -->
	<div
		on:click={toggleVisible}
		on:keydown={toggleVisible}
		on:mouseenter={() => (hovering = true)}
		on:mouseleave={() => (hovering = false)}
		on:focus={() => (hovering = true)}
		on:blur={() => (hovering = false)}
		class="
		{disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
		{size === 'normal'
			? 'group rounded-xl p-4'
			: ' border-b-2 border-neutral-200 pb-0.5 hover:border-neutral-300 dark:border-neutral-600 dark:hover:border-neutral-500'}
		group flex w-full items-center justify-between"
	>
		<h6
			class="
		{disabled
				? 'text-neutral-500 dark:text-neutral-400'
				: 'text-neutral-800 group-hover:text-neutral-900 dark:text-neutral-100 dark:group-hover:text-neutral-50'}
		{size == 'normal' ? 'text-lg' : 'text-base'} font-medium"
		>
			{title}
		</h6>

		{#if showChevron}
			<div class="p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="
							{visible ? 'rotate-180 ' : ''}
							{disabled
						? 'fill-neutral-500  dark:fill-neutral-400'
						: 'fill-neutral-800  group-hover:fill-neutral-900 dark:fill-neutral-200 dark:group-hover:fill-neutral-50'}
						 h-3 w-3 transition-transform ease-in-out "
					viewBox="0 0 320 191.9"
				>
					<path
						id="Path_89"
						data-name="Path 89"
						d="M98.9,184.7l1.8,2.1,136,156.5a25.3,25.3,0,0,0,19.2,8.6,25.649,25.649,0,0,0,19.2-8.6L411,187.1l2.3-2.6a15.446,15.446,0,0,0,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2,0-16.6,7.1-16.6,15.8A15.27,15.27,0,0,0,98.9,184.7Z"
						transform="translate(-96 -160)"
					/>
				</svg>
			</div>
		{/if}
	</div>

	{#if visible}
		<div
			class=" 
		{size === 'normal' ? 'p-4' : ''}
		flex flex-col space-y-4 rounded-xl  "
			transition:slide={{ duration: 150 }}
		>
			<slot />
		</div>
	{/if}
</div>
