<script lang="ts">
	import type { ActionData } from './$types';
	import { nav } from '$lib/userPreferences/nav';
	import { enhance } from '$app/forms';
	import InputField from '$lib/components/UI/Input/InputField.svelte';

	export let form: ActionData;
	let business: boolean | undefined = undefined;
	let selectedType: boolean = false;
</script>

{#if !selectedType}
	<section
		aria-roledescription="wrapper"
		class="flex h-[80vh] flex-col items-center pt-12 md:justify-center md:pt-0"
	>
		<div class="flex w-full flex-col items-center px-4 md:px-0">
			<div class="mb-12 w-full max-w-md text-center">
				<h1 class=" text-4xl font-medium">Welcome</h1>
				<p class="mt-2 opacity-80">
					Already a memeber? <a href={nav.login} class="underlinedLink">Log in</a>
				</p>
			</div>
		</div>
		<section
			class="flex w-full max-w-lg flex-col space-y-4 px-4 md:flex-row md:space-x-4 md:space-y-0 md:px-0"
		>
			<div
				class="
				{!business ? 'bg-neutral-700' : 'bg-neutral-800'}
				flex w-full items-center justify-center rounded-md  p-4 md:aspect-[4/3]"
				on:click={() => (business = false)}
				on:keydown={() => (business = false)}
			>
				<div
					aria-roledescription="wrapper"
					class="flex w-full flex-row items-center justify-start md:flex-col md:space-y-2"
				>
					<!-- User Icon -->
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
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
					<p class="ml-4 md:ml-0">Personal</p>
				</div>
			</div>
			<div
				class="
				{business ? 'bg-neutral-700' : 'bg-neutral-800'}
				
				flex w-full items-center justify-center rounded-md p-4 md:aspect-[4/3]"
				on:click={() => (business = true)}
				on:keydown={() => (business = true)}
			>
				<div
					aria-roledescription="wrapper"
					class="flex w-full flex-row items-center justify-start md:flex-col md:space-y-2"
				>
					<!-- Business Icon -->
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
					<p class="ml-4 md:ml-0">Business</p>
				</div>
			</div>
		</section>
		<div class="mt-6 w-full max-w-lg p-4 md:p-0">
			<button
				type="submit"
				class="{business !== undefined ? 'buttonPrimary' : 'buttonSecondary'} w-full"
				on:click={() => (selectedType = true)}>Continue</button
			>
		</div>
	</section>
{/if}
{#if selectedType}
	<div class="flex h-[80vh] flex-col items-center pt-12 lg:justify-center lg:pt-0">
		<div class="flex w-full flex-col items-center px-4 lg:px-0">
			<div class="mb-12 w-full max-w-md text-center">
				<h1 class=" text-4xl font-medium">
					Create your<br />
					{`${business ? 'Business Account' : 'Personal Account'}`}
				</h1>
				<p class="mt-2 opacity-80">
					Already a member? <a href={nav.register} class="underlinedLink">Log in</a>
				</p>
			</div>

			<!-- use:enhance={() => {
					return async ({ result }) => {
						invalidateAll();
						await applyAction(result);
					};
				}} -->
			<form method="POST" class="w-full max-w-md">
				{#if business}
					<InputField
						classNames="w-full"
						name="businessName"
						type="text"
						title="Business Name"
						required
					/>
				{/if}
				{#if !business}
					<div class="mt-4  flex w-full space-x-4">
						<InputField
							classNames="w-full"
							name="firstName"
							type="text"
							title="First Name"
							required
						/>
						<InputField
							classNames="w-full"
							name="lastName"
							type="text"
							title="Last Name"
							required
						/>
					</div>
				{/if}

				<InputField classNames="mt-4" name="email" type="email" title="Email" required />
				<InputField classNames="mt-4" name="password" type="password" title="Password" required />
				<InputField
					classNames="mt-4"
					name="country"
					type="text"
					title="Country"
					disabled
					hidden
					value="Albania"
				/>

				{#if form?.invalid}
					<p class=" mt-2 text-red-500">Email and password is required.</p>
				{/if}

				{#if form?.credentials}
					<p class=" mt-2 text-red-500">You have entered the wrong credentials.</p>
				{/if}

				<div class="mt-6 flex items-center justify-between">
					<div class="flex items-center space-x-2">
						<input type="checkbox" value="rememberMe" class="checkbox" />
						<label for="rememberMe" class="labelText">Remember me</label>
					</div>
					<a href="forgotPassword" class="link labelText">Forgot Password?</a>
				</div>

				<div class="mt-6 space-y-2 md:flex md:space-x-4 md:space-y-0">
					<button type="submit" class="buttonPrimary w-full">Create Account</button>
					<button on:click={() => (selectedType = false)} class="buttonSecondary w-full"
						>Return</button
					>
				</div>
			</form>
		</div>
	</div>
{/if}

<div class="fixed bottom-0 w-full border-t py-2 text-center dark:border-neutral-800">
	<p class="tertiary">Copyright © 2022-2022 Pazar.al Shpk. All Rights Reserved.</p>
</div>
