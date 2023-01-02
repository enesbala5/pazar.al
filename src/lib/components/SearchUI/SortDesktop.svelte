<script lang="ts">
	import Popover from '../UI/Popover.svelte';
	import PopoverItem from '../UI/UserPanel/PopoverItem.svelte';

	export let sorting: string = '';
	let element: HTMLElement;

	let visible: boolean = false;

	const toggleVisible = () => {
		visible = !visible;
	};

	const notVisible = () => (visible = false);
</script>

<div
	bind:this={element}
	on:click={toggleVisible}
	on:keydown={toggleVisible}
	class=" flex w-fit items-center justify-between space-x-3 overflow-hidden rounded-full bg-indigo-100 bg-opacity-20
	p-0.5 py-1.5 px-4 pl-2.5 pr-3 text-sm dark:bg-indigo-600"
>
	<div class="flex items-center text-neutral-50 ">
		<p class="mr-1.5 opacity-70">Sort by:</p>
		<p class="font-medium">Featured</p>
	</div>
	<!-- ! Chevron Down -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="
						{visible ? 'rotate-180 ' : ''}
						h-3 w-3 fill-neutral-100 transition-transform ease-in-out dark:fill-neutral-100"
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
<Popover
	title="User Popover"
	description="Display User information and common actions"
	vertical={false}
	usePopoverHeight
	position={'bottom'}
	direction="rtl"
	anchor="right"
	{element}
	{visible}
	on:notVisible={notVisible}
	bgColor="bg-neutral-50 p-1 dark:bg-neutral-800"
	classNames="shadow-dark"
>
	<PopoverItem textAlign="right">
		<p class="text-sm">Least expensive</p>
	</PopoverItem>
</Popover>
