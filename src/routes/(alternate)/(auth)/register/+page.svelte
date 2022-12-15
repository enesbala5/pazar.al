<script lang="ts">
	// Data
	import { nav } from '$lib/userState/nav';
	import type { ActionData } from './$types';
	// Functions
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	// UI
	import Globe from '~icons/feather/globe';
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import Alert from '$lib/components/UI/Important/Alert.svelte';
	import InputField from '$lib/components/UI/Input/InputField.svelte';
	// Buttons
	import DarkModeToggle from '$lib/components/UI/UserPanel/DarkModeToggle.svelte';
	import GoogleButton from '$lib/components/UI/Buttons/GoogleButton.svelte';
	import FacebookButton from '$lib/components/UI/Buttons/FacebookButton.svelte';

	export let form: ActionData;
	let loginForm: HTMLFormElement | undefined = undefined;

	const login = () => {
		if (loginForm !== undefined) {
			loginForm.submit();
		}
	};

	$: loginForm, login();
</script>

<article class="flex h-full w-full grow items-center space-x-4 lg:p-4">
	<section
		aria-roledescription="wrapper"
		class="innerContainerSizing flex h-full w-full flex-col items-center rounded-xl px-4 pt-4 pb-2 dark:bg-transparent lg:w-1/2 lg:bg-neutral-100 lg:px-6 lg:pt-6 dark:lg:border dark:lg:border-neutral-800"
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
				<form
					method="POST"
					action="?/register"
					class="w-full "
					use:enhance={() => {
						return async ({ result }) => {
							invalidateAll();
							await applyAction(result);
						};
					}}
				>
					<InputField classNames="mt-4" name="email" type="email" title="Email" required />
					<InputField classNames="mt-4" name="password" type="password" title="Password" required />

					{#if form?.user}
						<div class="mt-4">
							<Alert
								type="error"
								message="There is already an account registered with email address."
							/>
						</div>
					{/if}
					<div class="mt-4 flex items-center justify-between space-x-2">
						<button class="buttonLg buttonPrimary  w-full md:w-1/2">Complete Sign Up</button>
						<div class="invisible hidden w-1/2 md:block" />
					</div>
					{#if form?.email && form?.password}
						<form
							id="loginForm"
							bind:this={loginForm}
							action={nav.login}
							method="POST"
							class="hidden w-full max-w-md"
						>
							<input type="text" name="emailOrUsername" value={form?.email} />
							<input type="text" name="password" value={form?.password} />
							<input type="text" name="fromRegister" value="true" />
						</form>
					{/if}
				</form>
				<!-- ? SOCIAL LOGIN -->
				<div class="relative my-4 flex items-center justify-center text-sm">
					<div class="z-10 bg-neutral-100 px-4 dark:bg-neutral-900">
						<p class="text-neutral-500">or</p>
					</div>
					<div
						class="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300 dark:bg-neutral-700"
					/>
				</div>
				<div
					class="mt-2 flex flex-col items-center justify-between space-y-2 md:flex-row md:space-x-2 md:space-y-0"
				>
					<GoogleButton signUp />
					<FacebookButton signUp />
				</div>

				<!-- END -->
			</section>
			<p class="mt-12 text-sm">
				<span class="opacity-80">By clicking on Complete Signup, you agree to our</span>
				<a href={nav.terms}>Terms</a>
				<span class="opacity-80">and you acknowledge having read our</span>
				<a href={nav.privacy}>Privacy Notice</a>.
			</p>
			<p class="mt-4 mb-8 text-xs opacity-60">
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
	<div class="innerContainerSizing hidden h-full w-1/2 overflow-hidden rounded-xl lg:block ">
		<img src="images/business/gradient.jpg" class="h-full w-full object-cover" alt="" />
	</div>
</article>

<style>
	.innerContainerSizing {
		height: calc(100vh - 2rem);
	}
</style>
