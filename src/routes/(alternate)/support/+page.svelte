<script>
	import PhoneIcon from '~icons/feather/phone';
	import LifebuoyIcon from '~icons/feather/life-buoy';
	import BookIcon from '~icons/feather/book';

	const supportLinks = [
		{
			name: 'Sales',
			href: '#',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
			icon: PhoneIcon,
		},
		{
			name: 'Technical Support',
			href: '#',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
			icon: LifebuoyIcon,
		},
		{
			name: 'Media Inquiries',
			href: '#',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
			icon: BookIcon,
		},
	];

	import Img from '@zerodevx/svelte-img';
	// Import original full-sized image with `?run` query param.
	import hero from '$lib/assets/support/hero.avif?run';
</script>

<!-- header -->
<div class="relative overflow-hidden  bg-neutral-800 pb-32 ">
	<div class="absolute inset-0">
		<Img class="h-full w-full object-cover" src={hero} alt="Support team of Pazar.al" />
		<div class="absolute inset-0 bg-neutral-800 mix-blend-multiply" aria-hidden="true" />
	</div>
	<div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">Support</h1>
		<p class="mt-6 max-w-3xl text-neutral-300 lg:text-lg">
			Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras
			aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
		</p>
	</div>
</div>

<!-- Overlapping cards -->
<section
	class="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
	aria-labelledby="contact-heading"
>
	<h2 class="sr-only" id="contact-heading">Contact us</h2>
	<div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
		{#each supportLinks as link}
			<div class="flex flex-col rounded-2xl bg-white  shadow-xl">
				<div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
					<div
						class="primaryGradient absolute top-0 inline-block -translate-y-1/2 transform rounded-xl p-5 shadow-lg"
					>
						<svelte:component this={link.icon} class="h-6 w-6 text-white" aria-hidden="true" />
					</div>
					<h3 class="text-xl font-medium text-neutral-900">{link.name}</h3>
					<p class="mt-4 text-base text-neutral-500">{link.description}</p>
				</div>
				<div class=" rounded-bl-2xl rounded-br-2xl bg-neutral-50 p-6 md:px-8">
					<a
						href={link.href}
						class=" group text-base font-medium text-indigo-700 hover:text-indigo-600"
					>
						Contact us<span
							aria-hidden="true"
							class="transition-bezier ml-2 transition-all group-hover:ml-3"
						>
							&rarr;</span
						>
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>
