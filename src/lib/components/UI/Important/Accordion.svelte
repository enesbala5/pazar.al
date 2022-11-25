<script lang="ts">
	export let visible: boolean = false;
	import { slide } from 'svelte/transition';

	export let showChevron: boolean = true;

	export let title: string;

	export const makeNotVisible = () => {
		visible = false;
	};

	export const makeVisible = () => {
		visible = true;
	};

	export const toggleVisible = () => {
		visible = !visible;
	};
</script>

<div
	class=" my-4 rounded-xl border border-neutral-100 shadow-sm dark:border-neutral-800 dark:shadow-none"
>
	<!-- H1 and Chevron -->
	<div
		on:click={toggleVisible}
		on:keydown={toggleVisible}
		class="flex w-full cursor-pointer items-center justify-between rounded-xl p-4 hover:bg-neutral-100  dark:hover:bg-neutral-800"
	>
		<h1 class=" text-xl font-medium">
			{title}
		</h1>

		{#if showChevron}
			<div class=" p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="
							{visible ? 'rotate-180 ' : ''}
							h-3 w-3 fill-neutral-900 transition-transform ease-in-out dark:fill-neutral-100"
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
		<div class=" flex flex-col space-y-4 rounded-xl p-4 " transition:slide={{ duration: 150 }}>
			<slot />
		</div>
	{/if}
</div>
