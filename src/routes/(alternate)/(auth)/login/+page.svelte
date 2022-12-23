<script lang="ts">
	import type { ActionData } from './$types';
	import { nav } from '$lib/userState/nav';
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
	import GoogleButton from '$lib/components/UI/Buttons/GoogleButton.svelte';
	import FacebookButton from '$lib/components/UI/Buttons/FacebookButton.svelte';
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

<article class="flex h-full w-full grow items-center space-x-4 lg:p-4">
	<section
		aria-roledescription="wrapper"
		class="innerContainerSizing flex h-full w-full flex-col items-center  rounded-xl px-4 pt-4 pb-2  dark:bg-transparent lg:w-1/2 lg:bg-neutral-100 lg:px-6 lg:pt-6 dark:lg:border dark:lg:border-neutral-800"
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
					<div class="mt-4 flex items-center justify-between space-x-2">
						<button class="buttonLg buttonPrimary  w-1/2">Log In</button>

						<a href="forgotPassword" class=" link  labelText w-1/2 text-right">Forgot Password?</a>
					</div>
				</form>
				<!-- ? SOCIAL LOGIN -->
				<div class="relative my-4 flex items-center justify-center text-sm">
					<div class="z-10 bg-neutral-50 px-4 dark:bg-neutral-900 lg:bg-neutral-100">
						<p class="text-neutral-500">or</p>
					</div>
					<div
						class="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300 dark:bg-neutral-700"
					/>
				</div>
				<div
					class="mt-2 flex flex-col items-center justify-between space-y-2 md:flex-row md:space-x-2 md:space-y-0"
				>
					<GoogleButton />
					<FacebookButton />
				</div>
				<!-- END -->
			</section>
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
