<script lang="ts">
	import type { Category, CategoryId } from '$lib/data/categories';
	import { filterCategory, getSearchUrl } from '$lib/functions/navigation';
	// Types
	import type { Size } from '$lib/types/size';
	import Badge from '$lib/components/UI/Important/Badge.svelte';

	// Props
	// Image - Will probably get included in category array later so might have to refactor and change this part
	export let imgLink: string = '';
	export let minWidth: string = '';
	export let categoryTileVersion: boolean = false;
	export let imgAlt: string | undefined = undefined;

	export let imageIndex: number = 0;

	export let categoryId: CategoryId;
	export let size: Size = 'base';

	const c: Category | undefined = filterCategory(categoryId);

	const getCategoryUrl = () => {
		const response = getSearchUrl(
			{
				id: '',
				isCategory: true,
			},
			15,
			categoryId ?? '',
			true
		);
		return response;
	};

	let categoryLink: any = getCategoryUrl();

	$: categoryId, (categoryLink = getCategoryUrl());

	import ReturnIcon from '~icons/feather/corner-up-left';
</script>

{#if c !== undefined}
	{#if size === 'xs'}
		<!-- <Badge margin link={categoryLink} type="link" title={c.name} /> -->
		{#if categoryTileVersion}
			<div class="flex w-full items-center justify-between">
				<a href={categoryLink} class="buttonXs buttonPrimary rounded-full px-4">{c.name}</a>
				<a
					href={categoryLink}
					class="buttonSecondary buttonXs flex items-center rounded-full text-sm"
				>
					<ReturnIcon class="h-4 w-4" />
				</a>
			</div>
		{/if}
	{/if}
	{#if size !== 'xs'}
		<div
			class="
	{size === 'xs'
				? 'flex h-16 w-fit items-center'
				: size === 'sm'
				? `${minWidth} flex h-24 w-full items-center space-x-2 rounded-md border-neutral-700 bg-neutral-50 p-1.5 transition-shadow hover:shadow-light dark:border dark:bg-neutral-800 dark:hover:border-neutral-700 dark:hover:shadow-none`
				: 'flex w-full min-w-[8rem] flex-col items-center space-y-4 text-center md:min-w-0'}
				group
	"
		>
			<div
				class="
			{size === 'xs'
					? 'rounded-md'
					: size === 'sm'
					? 'w-full max-w-[50%] rounded-md bg-neutral-200 dark:bg-neutral-900 dark:group-hover:bg-opacity-75'
					: 'w-full rounded-full bg-neutral-200 dark:bg-neutral-800'}
			flex aspect-square h-full  items-center justify-center overflow-hidden "
			>
				<a href={categoryLink} class="flex items-center justify-center">
					<img
						src={imgLink !== '' ? imgLink : c.images !== undefined ? c.images[imageIndex].link : ''}
						alt={imgAlt !== undefined ? imgAlt : c.label}
						class="
			{size === 'xs'
							? ''
							: size === 'sm'
							? 'h-full max-h-[70%] w-full max-w-[70%] object-contain'
							: 'max-h-[80%] max-w-[90%] object-contain'} "
					/>
				</a>
			</div>
			<a
				href={categoryLink}
				class="
			{size === 'xs'
					? ''
					: size === 'sm'
					? 'flex w-full max-w-[50%] items-center justify-center whitespace-nowrap text-sm font-medium'
					: ''}
"
			>
				<p>
					{c.label}
				</p>
			</a>
		</div>
	{/if}
{/if}
{#if c === undefined}
	<!-- LOADING OR ERROR MAYBE -->
{/if}
