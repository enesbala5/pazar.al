<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	$: $page.params, console.log('search...');
	let param: any = '';

	function updateParams() {
		if (browser) {
			param = $page.url.searchParams;
		}
	}

	function insertParams() {
		if (browser) {
			let faqja = 1;
			const queryParams = {
				faqja: faqja.toString(),
			};
			const url = new URLSearchParams(queryParams).toString();

			let newPath = $page.url.pathname + '?' + url;
			goto(newPath);
		}
	}

	setTimeout(() => {
		insertParams();
	}, 5000);

	afterNavigate(() => {
		updateParams();
	});
</script>

<p>{param}</p>
