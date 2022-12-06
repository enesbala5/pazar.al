<script lang="ts">
	export let textAlign: 'left' | 'right' | 'center' = 'left';
</script>

<div
	class="buttonBase w-full rounded-md text-{textAlign} hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
>
	<slot />
</div>
