<script lang="ts">
	import SearchForm from '$lib/components/UI/SearchForm.svelte';
</script>

<!-- #################################################################################################### -->

<!-- SvelteKit Dynamic Header -->
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home Page" />
</svelte:head>

<!-- Page Content -->
<section class="w-full px-4 ">
	<div class="mb-8 mt-12">
		<h1 class="mb-4 text-3xl font-medium">Kerko ne Pazar.al</h1>
		<SearchForm />
	</div>
</section>

<!-- Category Highlights -->
