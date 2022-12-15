<script lang="ts">
	import { alerts, type AlertType } from '$lib/userState/alerts';
	import { quadOut, quartInOut } from 'svelte/easing';

	import { fade, fly } from 'svelte/transition';

	// CUSTOM ONLY
	export let useSlot: boolean = false;

	// EXPORTS
	export let title: string = '',
		message: string = '';
	export let type: AlertType = 'default';
	export let id: number = 0;

	let defineClassByType = () => {
		if (type === 'default') {
			return 'bg-neutral-100 border border-neutral-200 dark:border-neutral-600 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300';
		}
		if (type === 'success') {
			return 'bg-green-100 border border-green-200 dark:border-green-500 dark:bg-neutral-900 text-green-700 dark:text-green-500';
		}
		if (type === 'info') {
			return 'bg-blue-100 border border-blue-200 dark:border-blue-500 dark:bg-neutral-900 text-blue-700 dark:text-blue-500';
		}
		if (type === 'error' || type === 'danger') {
			return 'bg-red-100 border border-red-200 dark:border-red-500 dark:bg-neutral-900 text-red-700 dark:text-red-500';
		}
		if (type === 'warning') {
			return 'bg-yellow-100 border border-yellow-200 dark:border-yellow-500 dark:bg-neutral-900 text-yellow-700 dark:text-yellow-500';
		}
	};

	const classNames = defineClassByType();

	export let visible = true;

	export let index: number = 0;

	const dismissAlert = (alertId: number) => {
		const alertsWithoutDismissed = $alerts.filter((alert) => {
			return alert.id !== alertId;
		});
		$alerts = alertsWithoutDismissed;
	};
</script>

<!-- <input type="checkbox" name="" id="" bind:checked={visible} /> -->
{#if visible}
	<!-- bottom-${(index+1)+6} -->
	<div
		in:fly={{ duration: 100, delay: 25, x: 500, easing: quadOut }}
		out:fade={{ duration: 100, delay: 25, easing: quadOut }}
		class={`  ${classNames} shadowLight  flex w-80 items-center justify-between space-x-2 rounded-md p-4 text-sm`}
	>
		<div class="flex items-center space-x-2">
			{#if !useSlot}
				{#if type === 'default'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
						/>
					</svg>
				{/if}
				{#if type === 'success'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				{/if}
				{#if type === 'warning'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
						/>
					</svg>
				{/if}
				{#if type === 'error'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
						/>
					</svg>
				{/if}
				{#if type === 'danger'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
						/>
					</svg>
				{/if}
				{#if type === 'info'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
						/>
					</svg>
				{/if}
				<p class=" font-medium">
					{title} <span class="font-normal">{message}</span>
				</p>
			{/if}
			{#if useSlot}
				<slot />
			{/if}
		</div>
		<button on:click={() => dismissAlert(id)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
				/>
			</svg>
		</button>
	</div>
{/if}
