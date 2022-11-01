<script lang="ts">
	import { page } from '$app/stores';
	import type { PageUser } from '$lib/types/page';

	const user: PageUser | undefined = $page.data.user ?? undefined;
</script>

<h1 class="mx-4 mb-12 mt-4 text-4xl font-medium">Profile</h1>

<div class="px-4">
	<p>Should be content below:</p>
	{#if user?.role}
		<form action="/logout" method="POST">
			<button type="submit" class="buttonPrimary">Log out</button>
		</form>
	{/if}
</div>
