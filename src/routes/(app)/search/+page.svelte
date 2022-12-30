<script lang="ts">
	import SearchSection from '$lib/components/UI/Sections/SearchSection.svelte';
	import type { PageData } from './$types';

	// let paramsCache: searchQuery = {};

	let searchId: string | undefined = undefined;

	function updateSearchId(event: any) {
		searchId = event.detail.searchId;
	}

	export let data: PageData;
</script>

<title>Pazar{searchId ? ' - ' + searchId : ''}</title>
<SearchSection on:searchIdUpdate={updateSearchId} category={data.category} />
