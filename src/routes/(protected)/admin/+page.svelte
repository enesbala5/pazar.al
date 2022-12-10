<script lang="ts">
	import { page } from '$app/stores';
	import type { PageUser } from '$lib/types/page';

	const user: PageUser = $page.data.user;
</script>

<h1 class="headline mx-4 mb-12 mt-4 text-4xl font-medium">Admin</h1>

<div class="px-4">
	<p>Should be content below:</p>
	{#if user.role === 'ADMIN'}
		<form action="/logout" method="POST">
			<button type="submit" class="buttonPrimary buttonBase">Log out</button>
		</form>
	{/if}
</div>
