<script lang="ts">
	import SearchSection from '$lib/components/UI/Sections/SearchSection.svelte';

	// let paramsCache: searchQuery = {};

	let searchId: string | undefined = undefined;

	function updateSearchId(event: any) {
		searchId = event.detail.searchId;
	}
</script>

<title>Pazar{searchId ? ' - ' + searchId : ''}</title>
<SearchSection on:searchIdUpdate={updateSearchId} />
