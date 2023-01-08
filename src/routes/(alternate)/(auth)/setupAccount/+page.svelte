<script lang="ts">
	import type { ActionData } from './$types';
	import { nav } from '$lib/userState/nav';

	import SetupAccount1 from './SetupAccount1.svelte';
	import SetupAccount2 from './SetupAccount2.svelte';

	export let form: ActionData;
	let business: boolean | undefined = undefined;
	let selectedType: boolean = false;

	let loginForm: HTMLFormElement | undefined = undefined;

	const login = () => {
		if (loginForm !== undefined) {
			loginForm.submit();
		}
	};

	$: loginForm, login();
</script>

{#if !selectedType}
	<section
		aria-roledescription="wrapper"
		class="mt-12 flex flex-col items-center pt-12 md:justify-center md:pt-0"
	>
		<div class="flex w-full flex-col items-center px-4 md:px-0">
			<div class="mb-12 w-full max-w-md text-center">
				<h1 class="headline text-4xl font-medium">Welcome to Pazar.al</h1>
				<p class="mt-2 opacity-80">
					Already a member? <a href={nav.login} class="underlined">Log in to your account</a>
				</p>
			</div>
		</div>
		<section class="flex w-full max-w-lg flex-col space-y-4 px-4 md:px-0" />
	</section>
	<SetupAccount1 />
{/if}
{#if selectedType}
	<SetupAccount2 />
{/if}

<div
	class="fixed bottom-0 w-full border-t py-2 text-center selection:bg-neutral-800  selection:text-neutral-50 dark:border-neutral-800 dark:selection:bg-white dark:selection:text-neutral-900"
>
	<p class="tertiary">Copyright © 2022-2022 Pazar.al Shpk. All Rights Reserved.</p>
</div>
