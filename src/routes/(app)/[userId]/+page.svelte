<script lang="ts">
	import { nav } from '$lib/userPreferences/nav';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<pre>{JSON.stringify(data.user)}</pre>
