<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="mx-4 mb-12 mt-4 text-4xl font-medium">Admin</h1>

{#if $page.data.user.role === 'ADMIN'}
	<form action="/logout" method="POST">
		<button type="submit" class="buttonPrimary">Log out</button>
	</form>
{/if}
