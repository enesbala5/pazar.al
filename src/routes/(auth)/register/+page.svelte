<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<h1 class="mx-4 mb-12 mt-4 text-4xl font-medium">Register</h1>

<form action="?/register" method="POST" class="px-4" use:enhance>
	<div>
		<label for="username">Username</label>
		<input class="inputPrimary mt-2" type="text" id="username" name="username" required />
	</div>
	<div class="mt-4">
		<label for="password">Password</label>
		<input class="inputPrimary mt-2" type="password" id="password" name="password" required />
	</div>

	{#if form?.user}
		<p class=" mt-2 text-red-500">Username is taken.</p>
	{/if}

	<div class="mt-4">
		<button type="submit" class="buttonPrimary">Submit</button>
	</div>
</form>
