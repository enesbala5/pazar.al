<script lang="ts">
	import { nav } from '$lib/userState/nav';
	import { page } from '$app/stores';
	import type { PageUser } from '$lib/types/page';

	const user: PageUser | undefined = $page.data.user ?? undefined;
</script>

<div class="flex h-[80vh] flex-col items-center justify-center lg:pt-0">
	<div class="flex w-full flex-col items-center px-4 lg:px-0">
		<div class="mb-12 w-full max-w-md text-center">
			<h1 class="headline text-4xl font-medium">Account created successfully</h1>

			<div class="mt-12 space-x-2">
				{#if user?.account_type === 'Personal'}
					<a href={nav.profile} class="buttonPrimary buttonBase">Complete setting up Account</a>
					<a href={nav.index} class="buttonSecondary buttonBase">Start browsing</a>
				{/if}
				{#if user?.account_type === 'Seller'}
					<a href={nav.profile} class="buttonPrimary buttonBase">Set up Seller Account</a>
					<a href={nav.index} class="buttonSecondary buttonBase">Start browsing</a>
				{/if}
			</div>
		</div>
	</div>
</div>
