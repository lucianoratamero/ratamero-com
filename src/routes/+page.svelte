<script lang="ts">
	import BaseLayout from '$lib/BaseLayout.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import {
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
	import type { PageData } from './$types';

	let props: { data: PageData } = $props();

	const birthday = new Date('1989-06-15');
	const month_diff = Date.now() - birthday.getTime();
	const age_dt = new Date(month_diff);
	const year = age_dt.getUTCFullYear();
	const age = Math.abs(year - 1970);
</script>

<svelte:head>
	<title>welcome! - {SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/feed.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<BaseLayout noMargin>
	<article
		class="mx-auto flex flex-col items-start justify-between border-cyan-200 dark:border-cyan-700 w-full h-full"
	>
		<div
			class="flex flex-col-reverse items-start py-6 sm:flex-row mt-0 mb-8 w-full bg-cyan-200/50 dark:bg-cyan-800/50 text-black dark:text-white"
		>
			<div class="flex flex-col text-xl font-medium w-full max-w-3xl m-auto py-8 px-6">
				<div class="animate-slide-up animation-delay-500 opacity-0 mb-6">
					<h1
						class="fancy-text text-6xl font-bold -ml-[0.2rem] md:text-[8rem] inline-block leading-none"
					>
						hi :]
					</h1>
				</div>

				<div>
					<h2 class="animate-slide-up animation-delay-600 opacity-0 mb-2">
						I'm Luciano Ratamero (he/him), brazilian, JS/Python developer.
					</h2>
					<p class="animate-slide-up animation-delay-800 opacity-0 mb-2">
						I love researching all things tech, especially about frontend.
					</p>
					<p class="animate-slide-up animation-delay-1000 opacity-0 mb-2">
						here's where I share my posts and notes, both in english and brazilian languages.
					</p>
					<p
						class="animate-slide-up animation-delay-1200 opacity-0 text-cyan-600 dark:text-cyan-400"
					>
						welcome in!
					</p>
				</div>
			</div>
		</div>

		<section id="skip" class="w-full max-w-3xl px-6 m-auto">
			<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
				Featured Posts
			</h3>
			<div class="flex flex-col gap-6 md:flex-row">
				{#each props.data.items as item, i}
					{#if i < 3}
						<FeatureCard title={item.title} href={`/blog/${item.slug}`} stringData={item.date} />
					{/if}
				{/each}
			</div>
			<a
				class="mt-8 flex h-6 rounded-lg leading-7 text-zinc-800 transition-all dark:text-zinc-200 dark:hover:text-zinc-100"
				href="/blog"
				>See latest posts
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="ml-1 h-6 w-6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
					/>
				</svg>
			</a>
		</section>
	</article>
</BaseLayout>
