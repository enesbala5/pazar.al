<script lang="ts">
	export let pageNumber: number, itemsAmount: number, itemsPerPage: number;
	let totalPages: number = itemsAmount / itemsPerPage;
</script>

<section class=" py-3 text-xs uppercase text-white">
	<p class="text-sm">
		<span class="text-xs opacity-80">Showing</span>
		{`${pageNumber * itemsPerPage - itemsPerPage + 1} - ${
			pageNumber * itemsPerPage < itemsAmount ? pageNumber * itemsPerPage : itemsAmount
		}`} <span class="text-xs opacity-80">of</span>
		{itemsAmount}
	</p>
</section>
