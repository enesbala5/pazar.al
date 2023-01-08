<script lang="ts">
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import Sidebar from '$lib/components/UI/Important/Sidebar.svelte';
	import NavAlternate from '$lib/components/UI/NavAlternate.svelte';
	import PopoverItem from '$lib/components/UI/UserPanel/PopoverItem.svelte';
	import { nav } from '$lib/userState/nav';

	import HomeIcon from '~icons/feather/home';
	import ImageIcon from '~icons/feather/image';
	import DatabaseIcon from '~icons/feather/database';
	import ChartIcon from '~icons/feather/bar-chart-2';
	import { page } from '$app/stores';
	import { closeSidebar, openSidebar } from '$lib/functions/sidebar';

	const menuList = [
		{ href: `${nav.dashboard}`, name: 'Home', icon: HomeIcon },
		{ href: `${nav.dashboardSubpages.posts}`, name: 'Posts', icon: DatabaseIcon },
		{ href: `${nav.dashboardSubpages.analytics}`, name: 'Analytics', icon: ChartIcon },
		{ href: `${nav.dashboardSubpages.posts}`, name: 'Posts', icon: ImageIcon },
	];

	import MenuIcon from '~icons/feather/menu';
	import { afterNavigate } from '$app/navigation';

	const getCurrentLocation = (text: string) => {
		let updatedText: string = text.replace('/', '');
		if (updatedText.includes('/post/')) {
			return updatedText.split('/post/')[0] + '/post';
		}
		return updatedText;
	};

	afterNavigate(() => {
		closeSidebar();
	});
	let currentLocation = getCurrentLocation($page.url.pathname);
	$: currentLocation = getCurrentLocation($page.url.pathname);
</script>

<div class="relative flex min-h-screen w-full flex-col items-start bg-neutral-50 lg:flex-row">
	<Sidebar>
		<div class="w-full ">
			<section class="buttonBase my-5 flex w-full bg-neutral-300">
				<Logo classNames=" fill-neutral-900 w-full max-h-6 max-w-6 h-full" />
			</section>
			{#each menuList as menuItem}
				<PopoverItem textAlign="left">
					<div class="flex w-full items-center space-x-4">
						<svelte:component this={menuItem.icon} class="h-5 w-5" />
						<a href={menuItem.href} class="text-base">{menuItem.name}</a>
					</div>
				</PopoverItem>
			{/each}
		</div>
		<hr class="mb-4 mt-8 border-neutral-300 dark:border-neutral-800" />
		<div class="flex flex-shrink-0 border-t border-neutral-200 p-4">
			<a href={`${nav.profile}`} class="group block flex-shrink-0">
				<div class="flex items-center">
					<div class="inline-block h-8 w-8 overflow-hidden rounded-full lg:h-10 lg:w-10">
						{#if $page.data.user?.profilePicture}
							<img
								src={$page.data.user?.profilePicture}
								alt="User's Profile"
								class="h-full w-full object-cover "
							/>
						{:else}
							<div
								class="relative flex h-full w-full items-center justify-center bg-neutral-400 text-3xl font-medium dark:bg-neutral-800"
							>
								{#if $page.data.user?.firstName === null}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="mt-[25%] fill-neutral-50"
									>
										<path
											fill-rule="evenodd"
											d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
											clip-rule="evenodd"
										/>
									</svg>
								{/if}
								{#if $page.data.user?.firstName !== null}
									<p>
										{$page.data.user?.firstName[0]}{$page.data.user?.lastName[0]}
									</p>
								{/if}
							</div>
						{/if}
					</div>
					<div class="ml-3 flex flex-col">
						<p class="headline text-base font-medium text-neutral-700 group-hover:text-neutral-900">
							Tom Cook
						</p>
						<p
							class="cursor-pointer text-sm  font-medium text-neutral-500 group-hover:text-neutral-700"
						>
							View profile
						</p>
					</div>
				</div>
			</a>
		</div>
	</Sidebar>
	<div class="lg:w-2/12" />
	<div class="px-4 lg:w-10/12 lg:px-6">
		<NavAlternate widthClasses={''} showDarkModeToggle={false}>
			<div slot="logoReplacement">
				<!-- ! DESKTOP -->
				<h6 class=" hidden text-sm font-medium uppercase tracking-wide opacity-75 lg:block">
					{currentLocation}
				</h6>
				<!-- ! MOBILE -->
				<button class="buttonSecondary rounded-full p-2 lg:hidden" on:click={openSidebar}>
					<MenuIcon class="h-5 w-5 " />
				</button>
			</div>
		</NavAlternate>
		<slot />
	</div>
</div>
