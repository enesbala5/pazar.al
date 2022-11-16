<script lang="ts">
	export let name: string;
</script>

<div class="flex items-center justify-center rounded-md bg-neutral-200 py-3 group">
	<img
		src="images/partners/{name}"
		alt=""
		class="h-6 opacity-50 mix-blend-luminosity transition-all ease-in-out group-hover:opacity-100 group-hover:mix-blend-multiply"
	/>
</div>
