<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let pageNumber: number, itemsAmount: number, itemsPerPage: number;
	let totalPages: number = itemsAmount / itemsPerPage;

	const dispatch = createEventDispatcher();

	const firstPage = () => {
		if (pageNumber !== 1) {
			pageNumber = 1;
		}
	};

	const previousPage = () => {
		if (pageNumber > 1) {
			pageNumber = pageNumber - 1;
		}
	};
	const nextPage = () => {
		if (pageNumber < totalPages) {
			pageNumber = pageNumber + 1;
		}
	};

	function updatePageNumber() {
		dispatch('updatePageNumber', {
			pageNumber: pageNumber,
		});
	}

	$: pageNumber, updatePageNumber();
</script>

{#if itemsAmount > 0}
	<!-- Pagination -->
	<section class="mt-6 ">
		<div class="flex w-full items-center justify-between rounded-md bg-indigo-400 bg-opacity-20">
			<div class="flex w-full items-center justify-around px-2">
				<!-- First Page -->
				<button class="" on:click={firstPage}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
						/>
					</svg>
				</button>
				<!-- Previous Page -->
				<button class="" on:click={previousPage}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>
				<div class="flex items-center">
					<p class="text-xs uppercase opacity-70">Faqja</p>
					<p class="mx-2 font-medium">{pageNumber}</p>
				</div>
				<!-- Next Page -->
				<button class="" on:click={nextPage}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			</div>

			<!-- Save search content -->
			<div class="border-l border-white border-opacity-20 py-3 px-3">
				<p class="whitespace-nowrap text-xs font-medium uppercase">Ruani Kerkimin</p>
			</div>
		</div>
	</section>
	<section class="mt-4 text-xs uppercase">
		<p class="text-sm ">
			Showing {`${pageNumber * itemsPerPage - itemsPerPage + 1} - ${
				pageNumber * itemsPerPage < itemsAmount ? pageNumber * itemsPerPage : itemsAmount
			}`} of {itemsAmount}
		</p>
	</section>
{/if}
