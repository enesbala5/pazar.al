<script lang="ts">
	import Logo from '$lib/components/logos/companyLogos/Logo.svelte';
	import DarkModeToggle from '$lib/components/UI/UserPanel/DarkModeToggle.svelte';
	import { nav } from '$lib/userPreferences/nav';
</script>

<main
	class="min-h-screen bg-neutral-50 font-aeonik text-neutral-800 dark:bg-neutral-900 dark:text-neutral-50"
>
	<section>
		<nav class="flex w-full items-center justify-between py-5 px-6 lg:mx-auto lg:w-11/12 lg:px-0">
			<section class="flex items-center">
				<!-- ! LOGO -->
				<a href="/" class="h-8 w-8 ">
					<Logo classNames="dark:fill-neutral-50 fill-neutral-900 w-full h-full" />
				</a>
			</section>

			<div class="flex items-center ">
				<DarkModeToggle />

				<!-- ! LANG -->
				<div
					class="rounded-full bg-transparent px-4 py-2.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 "
				>
					<svg
						class="h-4 w-4 stroke-neutral-900 dark:stroke-neutral-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 22 22"
					>
						<g id="Group_274" data-name="Group 274" transform="translate(-1 -1)">
							<circle
								id="Ellipse_64"
								data-name="Ellipse 64"
								cx="10"
								cy="10"
								r="10"
								transform="translate(2 2)"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<line
								id="Line_43"
								data-name="Line 43"
								x2="20"
								transform="translate(2 12)"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<path
								id="Path_84"
								data-name="Path 84"
								d="M12,2a15.3,15.3,0,0,1,4,10,15.3,15.3,0,0,1-4,10A15.3,15.3,0,0,1,8,12,15.3,15.3,0,0,1,12,2Z"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</g>
					</svg>
				</div>
				<!-- ! Line -->
				<div class="mx-4 hidden h-5 w-0.5 rounded-full bg-neutral-300  lg:block" />
				<!-- ! Messages -->
				<a href={nav.index} class="buttonSmRounded buttonSecondary">Return Home</a>
			</div>
		</nav>
	</section>
	<slot />
</main>
