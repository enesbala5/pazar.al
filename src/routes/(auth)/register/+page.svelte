<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;

	import { t } from '$lib/lang';
	import InputField from '$lib/components/UI/Input/InputField.svelte';
</script>

<p />
<h1 class="mx-4 mb-12 mt-4 text-4xl font-medium">{$t('register.register')}</h1>

<form action="?/register" method="POST" class="px-4" use:enhance>
	<InputField name="email" title={$t('generic.email')} />
	<InputField name="username" title={$t('generic.username')} classNames="mt-4" />
	<InputField name="password" title={$t('generic.password')} classNames="mt-4" />

	{#if form?.user}
		<p class=" mt-2 text-red-500">Username is taken.</p>
	{/if}

	<div class="mt-4">
		<button type="submit" class="buttonPrimary">Submit</button>
	</div>
</form>
