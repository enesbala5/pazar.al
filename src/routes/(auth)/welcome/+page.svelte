<script lang="ts">
	import { nav } from '$lib/userPreferences/nav';
	import { page } from '$app/stores';
	import type { PageUser } from '$lib/types/page';

	const user: PageUser | undefined = $page.data.user ?? undefined;
</script>

<div class="mt-12 flex flex-col items-center pt-12 lg:justify-center lg:pt-0">
	<div class="flex w-full flex-col items-center px-4 lg:px-0">
		<div class="mb-12 w-full max-w-md text-center">
			<h1 class=" text-4xl font-medium">Account created successfully</h1>

			{#if user?.account_type === 'Personal'}
				<button class="buttonPrimary">Start browsing</button>
			{/if}
			{#if user?.account_type === 'Seller'}
				<button class="buttonPrimary">Set up account</button>
				<button class="buttonSecondary">Start browsing</button>
			{/if}
		</div>
	</div>
</div>
