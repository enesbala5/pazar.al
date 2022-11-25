<script lang="ts">
	/**
	 * If removeState variable is True:
	 * -> Function changes from Add to Remove
	 */
	export let toggled: boolean = false;
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	let i = toggled ? 45 : 0;

	$: i = toggled ? 45 : 0;
</script>

<Motion let:motion whileHover={{ scale: 1.1 }} animate={{ rotate: i }}>
	<svg
		use:motion
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="h-6 w-6 "
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
	</svg>
</Motion>
