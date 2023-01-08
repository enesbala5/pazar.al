<script>
	import { nav } from '$lib/userState/nav';
	import { darkMode } from '$lib/userState/preferences';
</script>

<div
	class="primaryGradient overflow-hidden rounded-lg shadow-xl dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-900 lg:grid lg:grid-cols-2 lg:gap-4"
>
	<div class="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
		<div class="lg:self-center">
			<h2 class="text-3xl font-medium tracking-tight text-white sm:text-4xl">
				<span class="block">Ready to dive in?</span>
				<span class="block">Start your free trial today.</span>
			</h2>
			<p class="mt-4 text-lg leading-6 text-indigo-200">
				Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
				sagittis vel nulla nec.
			</p>
			<a
				href={nav.register}
				class="
			{$darkMode ? 'buttonPrimary' : 'buttonSecondary'}
			buttonLg  mt-8  inline-flex items-center">Sign up for free</a
			>
		</div>
	</div>
	<div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6">
		<img
			class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
			src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
			alt="App screenshot"
		/>
	</div>
</div>
