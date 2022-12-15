<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { modalOpen } from '$lib/userState/preferences';
</script>

<form
	action="/logout"
	method="post"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}}
	on:submit={() => {
		modalOpen.set(false);
	}}
>
	<slot />
</form>
