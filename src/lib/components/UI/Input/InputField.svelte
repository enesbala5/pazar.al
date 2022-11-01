<script lang="ts">
	export let title: string;
	export let name: string;
	export let classNames: string = '';
	export let type: string = 'text';

	export let required: boolean = false;
</script>

<!-- <div class="relative z-0 {classNames}">
	<input
		type="text"
		id={name}
		{name}
		class="peer block w-full appearance-none border-0 border-b-2 border-neutral-300 bg-transparent py-2.5 px-0 text-sm text-neutral-900 focus:border-indigo-600 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-white dark:focus:border-indigo-500"
		placeholder=" "
	/>
	<label
		for={name}
		class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 dark:text-neutral-400 peer-focus:dark:text-indigo-500"
		>{title}</label
	>
</div> -->
<div class={classNames}>
	<label for={name} />
	<input {type} {name} {required} id={name} placeholder={title} class="inputPrimary" />
</div>
