<script lang="ts">
	let business = false;
	let selectedType = false;
</script>

<title>Account Type</title>

<div
	class="
				group relative flex w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 p-4 shadow-sm hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900"
	on:click={() => {
		business = false;
		selectedType = true;
	}}
	on:keydown={() => {
		business = false;
		selectedType = true;
	}}
>
	<div aria-roledescription="wrapper" class="flex w-full flex-row items-center justify-start">
		<!-- User Icon -->
		<div
			class="mr-4 rounded-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 dark:bg-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-12 w-12 "
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
				/>
			</svg>
		</div>
		<div>
			<p class="text-lg font-medium">Create a Personal Account</p>
			<p class="opacity-80">View products you're interested in</p>
		</div>
		<!-- Chivron Right -->
		<div
			class="transition-bezier absolute right-4 top-1/2 -translate-y-1/2 transition-all group-hover:-translate-x-1 "
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="h-6 w-6 group-hover:stroke-indigo-500"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
		</div>
	</div>
</div>
<div
	class="
				group relative flex w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 p-4 shadow-sm hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900"
	on:click={() => {
		business = true;
		selectedType = true;
	}}
	on:keydown={() => {
		business = true;
		selectedType = true;
	}}
>
	<div aria-roledescription="wrapper" class="flex w-full flex-row items-center justify-start ">
		<!-- Business Icon -->
		<div
			class="mr-4 rounded-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 dark:bg-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-12 w-12"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
				/>
			</svg>
		</div>
		<div>
			<p class="text-lg font-medium ">Create a Seller Account</p>
			<p class="opacity-80">Sell products with 0% Commission</p>
		</div>

		<!-- Chivron Right -->
		<div
			class="transition-bezier absolute right-4 top-1/2 -translate-y-1/2 transition-all group-hover:-translate-x-1"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="h-6 w-6 group-hover:stroke-indigo-500"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
		</div>
	</div>
</div>
