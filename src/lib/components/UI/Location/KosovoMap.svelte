<script lang="ts">
	import type { Cities } from '@prisma/client';

	export let city: Cities;
	export let mapClassNames: string;

	let highlightedClasses =
		'fill-indigo-500 stroke-neutral-50 dark:fill-neutral-200 dark:stroke-neutral-800 z-50 hover:dark:fill-neutral-50 hover:dark:stroke-neutral-500 hover:fill-indigo-600';
	let defaultClasses =
		'fill-neutral-100 stroke-neutral-500 dark:fill-neutral-800 dark:stroke-neutral-500 hover:fill-neutral-200 hover:dark:fill-neutral-700 hover:stroke-neutral-800';
</script>
