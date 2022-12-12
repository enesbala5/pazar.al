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
	import Alert from '$lib/components/UI/Important/Alert.svelte';
</script>

<!-- <div class="relative mt-12 flex min-h-[85vh] pt-12 lg:pt-0">
	<div class="flex w-full flex-col items-center px-4 lg:px-0">
		<div class="mb-12 w-full max-w-md text-center">
			<h1 class="headline text-4xl font-medium">Welcome back!</h1>
			
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
			<InputField
				classNames="mt-4"
				name="emailOrUsername"
				type="text"
				title="Email or Username"
				required
			/>
			<InputField classNames="mt-4" name="password" type="password" title="Password" required />

			{#if form?.invalid}
				<div class="mt-4">
					<Alert type="error" message="Email and password is required." />
				</div>
			{/if}

			{#if form?.credentials}
				<div class="mt-4">
					<Alert type="error" message="You have entered the wrong credentials" />
				</div>
			{/if}

			

			
		</form>
	</div>
	
</div> -->

<article class="flex h-full w-full grow items-center space-x-4 p-4">
	<section
		aria-roledescription="wrapper"
		class="innerContainerSizing flex h-full w-full flex-col items-center  rounded-xl px-4 pt-4 pb-2 dark:bg-neutral-900 dark:border dark:border-neutral-800 lg:w-1/2 lg:bg-neutral-100 lg:px-6 lg:pt-6"
	>
		<div class="flex w-full  items-center">
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
		<section class="h-full w-full md:max-w-lg ">
			<div class="mt-20 flex w-full flex-col md:mt-24">
				<div class="mb-10 w-full max-w-lg">
					<h1 class="headline text-4xl font-medium">Welcome back!</h1>
					<p class="mt-4 opacity-80">
						Sign in to Pazar.al or <a href={nav.register} class="underlined">create an account</a>
					</p>
				</div>
			</div>
			<section class="flex w-full flex-col space-y-4 md:max-w-lg ">
				<form
					method="POST"
					class="w-full"
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
						<div class="mt-4">
							<Alert type="error" message="Email and password is required." />
						</div>
					{/if}

					{#if form?.credentials}
						<div class="mt-4">
							<Alert type="error" message="You have entered the wrong credentials" />
						</div>
					{/if}
					<div class="mt-4 flex items-center justify-between">
						<button class="buttonLg buttonPrimary  w-1/2">Log In</button>
						<a href="forgotPassword" class="link labelText">Forgot Password?</a>
					</div>
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
			class="mt-auto w-full place-self-end border-t pt-2 text-center selection:bg-neutral-800  selection:text-neutral-50 dark:border-neutral-800 dark:selection:bg-white dark:selection:text-neutral-900"
		>
			<p class="tertiary">Copyright © 2022 Pazar.al Shpk. All Rights Reserved.</p>
		</div>
	</section>

	<!-- ? IMAGE -->
	<div
		class="innerContainerSizing hidden w-1/2 items-center justify-center overflow-hidden rounded-xl lg:flex"
	>
		<img src="images/business/gradient2.jpg" class="h-full w-full object-cover" alt="" />
	</div>
</article>

<style>
	.innerContainerSizing {
		height: calc(100vh - 2rem);
	}
</style>
