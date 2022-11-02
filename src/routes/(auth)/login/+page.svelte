<script lang="ts">
	import type { ActionData } from './$types';
	import { nav } from '$lib/userPreferences/nav';
	// import { invalidateAll } from '$app/navigation';
	// import { applyAction, enhance } from '$app/forms';

	export let form: ActionData;
</script>

<!-- use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}} -->

<h1 class="mx-4 mb-12 mt-4 text-4xl font-medium">Login</h1>
<!-- action="?/login" -->
<form method="POST" class="px-4">
	<div>
		<label for="email">Email</label>
		<input class="inputPrimary mt-2" type="text" id="email" name="email" required />
	</div>
	<div class="mt-4">
		<label for="password">Password</label>
		<input class="inputPrimary mt-2" type="password" id="password" name="password" required />
	</div>

	{#if form?.invalid}
		<p class=" mt-2 text-red-500">Email and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class=" mt-2 text-red-500">You have entered the wrong credentials.</p>
	{/if}

	<div class="mt-4">
		<button type="submit" class="buttonPrimary">Submit</button>
	</div>
</form>
<a href={nav.register}>Register</a>
