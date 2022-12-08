<script lang="ts">
	export let classNames: string;
	export let innerClassNames: string;
</script>

<div class="{classNames} relative">
	<div class="{innerClassNames} h-[3px] w-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full rotate-45" />
	<div class="{innerClassNames} h-[3px] w-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full -rotate-45" />
</div>
