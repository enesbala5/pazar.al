<script lang="ts">
	import type { ActionData } from './$types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { nav } from '$lib/userPreferences/nav';
	import InputField from '$lib/components/UI/Input/InputField.svelte';

	export let form: ActionData;
</script>

<div class="flex h-[80vh] flex-col items-center pt-12 lg:justify-center lg:pt-0">
	<div class="flex w-full flex-col items-center px-4 lg:px-0">
		<div class="mb-12 w-full max-w-md text-center">
			<h1 class=" text-4xl font-medium">Hello</h1>
			<p class="mt-2 opacity-80">
				Sign in to Pazar.al or <a href={nav.register} class="underlinedLink">create an account</a>
			</p>
		</div>

		<form
			method="POST"
			class="w-full max-w-md"
			use:enhance={() => {
				return async ({ result }) => {
					invalidateAll();
					await applyAction(result);
				};
			}}
		>
			<InputField classNames="mt-4" name="email" type="email" title="Email" required />
			<InputField classNames="mt-4" name="password" type="password" title="Password" required />

			{#if form?.invalid}
				<p class=" mt-2 text-red-500">Email and password is required.</p>
			{/if}

			{#if form?.credentials}
				<p class=" mt-2 text-red-500">You have entered the wrong credentials.</p>
			{/if}

			<div class="mt-6 flex items-center justify-between">
				<div class="flex items-center space-x-2">
					<input type="checkbox" value="rememberMe" class="checkbox" />
					<label for="rememberMe" class="labelText">Remember me</label>
				</div>
				<a href="forgotPassword" class="link labelText">Forgot Password?</a>
			</div>

			<div class="mt-6">
				<button type="submit" class="buttonPrimary w-full">Log in</button>
			</div>
		</form>
	</div>
</div>
<div class="fixed bottom-0 w-full border-t py-2 text-center dark:border-neutral-800">
	<p class="tertiary">Copyright © 2022-2022 Pazar.al Shpk. All Rights Reserved.</p>
</div>
