<script lang="ts">
	import { nav } from '$lib/userPreferences/nav';
	import { page } from '$app/stores';
	import type { PageUser } from '$lib/types/page';

	const user: PageUser | undefined = $page.data.user ?? undefined;
</script>

<div class="flex h-[80vh] flex-col items-center justify-center lg:pt-0">
	<div class="flex w-full flex-col items-center px-4 lg:px-0">
		<div class="mb-12 w-full max-w-md text-center">
			<h1 class=" text-4xl font-medium">Account created successfully</h1>

			{#if user?.account_type === 'Personal'}
				<div class="mt-8 space-x-2">
					<a href={nav.index} class="buttonPrimary">Start browsing</a>
				</div>
			{/if}
			{#if user?.account_type === 'Seller'}
				<div class="mt-8 space-x-2">
					<a href={nav.profile} class="buttonPrimary">Set up account</a>
					<a href={nav.index} class="buttonSecondary">Start browsing</a>
				</div>
			{/if}
		</div>
	</div>
</div>
