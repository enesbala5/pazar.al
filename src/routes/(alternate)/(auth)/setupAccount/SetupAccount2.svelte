<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import InputField from '$lib/components/UI/Input/InputField.svelte';
	import { nav } from '$lib/userState/nav';

	let form: ActionData;
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

<title>Account Type</title>

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
				<p class=" mt-2 text-red-500">There is already an account registered with email address.</p>
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
