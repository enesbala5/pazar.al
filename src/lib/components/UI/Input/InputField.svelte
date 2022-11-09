<script lang="ts">
	export let hidden: boolean = false;

	export let title: string;
	export let name: string;
	export let classNames: string = '';
	export let type: string = 'text';
	export let placeholder: string = '';

	export let required: boolean = false;
	export let value: string = '';

	export let disabled = false;

	export let visible: boolean = false;

	let passwordValue: string;
</script>

{#if hidden}
	<input {type} {name} id={name} {value} disabled hidden aria-hidden="true" />
{:else}
	<div class="relative {classNames}">
		{#if type === 'password'}
			{#if visible}
				<input
					type="text"
					id={name}
					{name}
					bind:value={passwordValue}
					class="border-1 peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-indigo-500"
					placeholder=" "
				/>
				<label
					for={name}
					class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-500 dark:bg-neutral-900 dark:text-neutral-400 peer-focus:dark:text-indigo-500"
					>{title}
				</label>
			{/if}
			{#if !visible}
				<input
					type="password"
					id={name}
					{name}
					bind:value={passwordValue}
					class="border-1 peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-indigo-500"
					placeholder=" "
				/>
				<label
					for={name}
					class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-500 dark:bg-neutral-900 dark:text-neutral-400 peer-focus:dark:text-indigo-500"
					>{title}
				</label>
			{/if}

			<div class="absolute right-4 top-1/2 -translate-y-1/2 ">
				{#if visible}
					<svg
						on:click={() => (visible = false)}
						on:keydown={() => (visible = false)}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5 stroke-neutral-300"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				{/if}
				{#if !visible}
					<svg
						on:click={() => (visible = true)}
						on:keydown={() => (visible = true)}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5 stroke-neutral-300"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
						/>
					</svg>
				{/if}
			</div>
		{/if}

		{#if type !== 'password'}
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
					{value}
					class="border-1 peer block w-full appearance-none rounded-lg border-neutral-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-neutral-100 dark:focus:border-indigo-500"
					placeholder=" "
					disabled
				/>
				<label
					for={name}
					class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-neutral-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-indigo-600 dark:bg-neutral-900 dark:text-neutral-500 peer-focus:dark:text-indigo-500"
					>{title}</label
				>
			{/if}
		{/if}
	</div>
{/if}
