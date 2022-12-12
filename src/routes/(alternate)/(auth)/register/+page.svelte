<script lang="ts">
	import type { ActionData } from './$types';
	import { nav } from '$lib/userPreferences/nav';
	import InputField from '$lib/components/UI/Input/InputField.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { goto } from '$app/navigation';
	import DarkModeToggle from '$lib/components/UI/UserPanel/DarkModeToggle.svelte';

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

	import Globe from '~icons/feather/globe';
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
</script>

<article class="flex  h-full w-full grow items-center justify-between space-x-4 p-4">
	<section
		aria-roledescription="wrapper"
		class="flex h-full w-full flex-col items-center justify-between rounded-xl px-4 pt-4 pb-2 dark:bg-neutral-800 lg:w-1/2 lg:bg-neutral-100 lg:px-6 lg:pt-6"
	>
		<div class="flex w-full items-center">
			<nav class="flex w-full items-center justify-between">
				<section class="flex items-center">
					<!-- ! LOGO -->
					<a href="/" class="h-8 w-8 ">
						<Logo classNames="dark:fill-neutral-50 fill-neutral-900 w-full h-full" />
					</a>
				</section>

				<div class="flex items-center">
					<!-- ! LANG -->
					<div
						class="rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800  "
					>
						<Globe class={'h-5 w-5'} />
					</div>
					<DarkModeToggle />

					<!-- ! Line -->
					<div class="mr-6 ml-4 hidden h-5 w-0.5 rounded-full bg-neutral-300 lg:block" />
					<!-- ! Messages -->
					<a href={nav.index} class="buttonSmRounded buttonSecondary">Return Home</a>
				</div>
			</nav>
		</div>

		<!-- Main Actions -->
		<section class="h-full w-full md:max-w-lg">
			<div class="mt-20 flex w-full flex-col md:mt-24">
				<div class="mb-10 w-full max-w-lg">
					<h1 class="headline text-4xl font-medium">Welcome to Pazar.al</h1>
					<p class="mt-4 opacity-80">
						Already a member? <a href={nav.login} class="underlined">Log in to your account</a>
					</p>
				</div>
			</div>
			<section class="flex w-full flex-col space-y-4 md:max-w-lg ">
				<form class="">
					<InputField classNames="mt-4" name="email" type="email" title="Email" required />
					<InputField classNames="mt-4" name="password" type="password" title="Password" required />

					<button class="buttonLg buttonPrimary mt-4">Complete Sign Up</button>
				</form>
			</section>
			<p class="mt-12 text-sm">
				<span class="opacity-80">By clicking on Complete Signup, you agree to our</span>
				<a href={nav.terms}>Terms</a>
				<span class="opacity-80">and you acknowledge having read our</span>
				<a href={nav.privacy}>Privacy Notice</a>.
			</p>
			<p class="mt-4 text-xs opacity-60">
				*This includes periodic newsletters, emails about usage tips, and other communications. You
				can opt out anytime within the page.
			</p>
		</section>
		<div
			class="w-full border-t py-2 text-center selection:bg-neutral-800  selection:text-neutral-50 dark:border-neutral-800 dark:selection:bg-white dark:selection:text-neutral-900"
		>
			<p class="tertiary">Copyright © 2022 Pazar.al Shpk. All Rights Reserved.</p>
		</div>
	</section>

	<!-- ? IMAGE -->
	<div class="hidden h-full w-1/2 overflow-hidden rounded-xl lg:block">
		<img src="images/business/gradient.jpg" class="h-full w-full object-cover" alt="" />
	</div>
</article>
