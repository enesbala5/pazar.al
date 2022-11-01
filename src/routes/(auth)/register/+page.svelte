<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;

	import InputField from '$lib/components/UI/Input/InputField.svelte';
	import { nav } from '$lib/userPreferences/nav';
</script>

<section aria-roledescription="wrapper" class="flex items-center justify-center">
	<div class="">
		<h1 class="mx-4 mb-12 mt-4 text-4xl font-medium lg:text-5xl xl:text-6xl">Register</h1>

		<form action="?/register" method="POST" class="px-4" use:enhance>
			<InputField name="name" title="First Name" classNames="mt-4" />
			<InputField name="surname" title="Last Name" classNames="mt-4" />
			<InputField name="email" title="Email" />
			<InputField name="password" title="Password" classNames="mt-4" />

			{#if form?.user}
				<p class=" mt-2 text-red-500">Email Address is already registered.</p>
			{/if}

			<div class="mt-4">
				<button type="submit" class="buttonPrimary">Submit</button>
			</div>
		</form>
		<a href={nav.login}>Login</a>
	</div>
</section>
