<script lang="ts">
	import type { ActionData } from './$types';
	import { nav } from '$lib/userPreferences/nav';
	import InputField from '$lib/components/UI/Input/InputField.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { goto } from '$app/navigation';

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
		<section class="flex w-full max-w-lg flex-col space-y-4 px-4 md:px-0">
			<div
				class="
				group relative flex w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 p-4 shadow-sm hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900"
				on:click={() => {
					business = false;
					selectedType = true;
				}}
				on:keydown={() => {
					business = false;
					selectedType = true;
				}}
			>
				<div aria-roledescription="wrapper" class="flex w-full flex-row items-center justify-start">
					<!-- User Icon -->
					<div
						class="mr-4 rounded-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 dark:bg-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-12 w-12 "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
					</div>
					<div>
						<p class="text-lg font-medium">Create a Personal Account</p>
						<p class="opacity-80">View products you're interested in</p>
					</div>
					<!-- Chivron Right -->
					<div
						class="transition-bezier absolute right-4 top-1/2 -translate-y-1/2 transition-all group-hover:-translate-x-1 "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-6 w-6 group-hover:stroke-indigo-500"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</div>
				</div>
			</div>
			<div
				class="
				group relative flex w-full cursor-pointer items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 p-4 shadow-sm hover:border-indigo-100 dark:border-neutral-800 dark:bg-neutral-900"
				on:click={() => {
					business = true;
					selectedType = true;
				}}
				on:keydown={() => {
					business = true;
					selectedType = true;
				}}
			>
				<div
					aria-roledescription="wrapper"
					class="flex w-full flex-row items-center justify-start "
				>
					<!-- Business Icon -->
					<div
						class="mr-4 rounded-full bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 dark:bg-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-12 w-12"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
							/>
						</svg>
					</div>
					<div>
						<p class="text-lg font-medium ">Create a Seller Account</p>
						<p class="opacity-80">Sell products with 0% Commission</p>
					</div>

					<!-- Chivron Right -->
					<div
						class="transition-bezier absolute right-4 top-1/2 -translate-y-1/2 transition-all group-hover:-translate-x-1"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-6 w-6 group-hover:stroke-indigo-500"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</div>
				</div>
			</div>
		</section>
	</section>
{/if}
{#if selectedType}
	<div class="mt-12 flex flex-col items-center pt-12 lg:justify-center lg:pt-0">
		<div class="flex w-full flex-col items-center px-4 lg:px-0">
			<div class="mb-12 w-full max-w-md text-center">
				<h1 class="headline text-4xl font-medium">
					Create your<br />
					{`${business ? 'Seller Account' : 'Personal Account'}`}
				</h1>
				<p class="mt-2 opacity-80">
					Already a member? <a href={nav.login} class="underlined">Log in</a>
				</p>
			</div>

			<form
				method="POST"
				action="?/register"
				class="w-full max-w-md"
				use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}}
			>
				<input type="hidden" value={business} name="business" />
				<div class="mt-4 flex w-full space-x-4">
					<InputField
						classNames="w-full"
						name="firstName"
						type="text"
						title={business ? 'Business Name' : 'First Name'}
						required
					/>
					<InputField
						classNames="w-full {business ? 'hidden' : ''}"
						name="lastName"
						type="text"
						title="Last Name"
						required
						value={''}
					/>
				</div>

				<InputField classNames="mt-4" name="email" type="email" title="Email" required />
				<InputField classNames="mt-4" name="password" type="password" title="Password" required />

				{#if form?.user}
					<p class=" mt-2 text-red-500">
						There is already an account registered with email address.
					</p>
				{/if}

				{#if form?.email && form?.password}
					<form
						id="loginForm"
						bind:this={loginForm}
						action={nav.login}
						method="POST"
						class="hidden w-full max-w-md"
					>
						<input type="text" name="email" value={form?.email} />
						<input type="text" name="password" value={form?.password} />
						<input type="text" name="fromRegister" value="true" />
					</form>
				{/if}
				<!-- Additional Actions -->
				<div class="mt-6 flex items-center justify-between">
					<div class="flex items-center space-x-2">
						<input type="checkbox" value="rememberMe" class="checkbox" />
						<label for="rememberMe" class="labelText">Remember me</label>
					</div>
					<a href="forgotPassword" class="link labelText">Forgot Password?</a>
				</div>

				<div class="mt-6 space-y-2 md:flex md:space-x-4 md:space-y-0">
					<button type="submit" class="buttonPrimary buttonBase w-full">Create Account</button>
					<button on:click={() => (selectedType = false)} class="buttonSecondary buttonBase w-full"
						>Return</button
					>
				</div>
			</form>
		</div>
	</div>
{/if}

<div
	class="fixed bottom-0 w-full border-t py-2 text-center selection:bg-neutral-800  selection:text-neutral-50 dark:border-neutral-800 dark:selection:bg-white dark:selection:text-neutral-900"
>
	<p class="tertiary">Copyright © 2022-2022 Pazar.al Shpk. All Rights Reserved.</p>
</div>
