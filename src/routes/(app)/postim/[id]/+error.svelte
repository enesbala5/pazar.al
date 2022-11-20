<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="w-full rounded-md text-center text-7xl font-medium">{$page.status}</div>
<p>{$page.error?.message}</p>
