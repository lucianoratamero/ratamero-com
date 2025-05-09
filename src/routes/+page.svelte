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

<BaseLayout>
	<article
		class="mx-auto flex max-w-3xl flex-col items-start justify-center border-zinc-200 px-4 pb-16 dark:border-zinc-700 sm:px-8"
	>
		<div class="flex flex-col-reverse items-start sm:flex-row mb-8">
			<div class="flex flex-col pr-8">
				<h1
					class="mb-8 text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl"
				>
					This is
					<br />
					<span
						class="relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-sky-900"
					>
						<span class="relative skew-y-3 text-cyan-400">{SITE_TITLE}</span>
					</span>
					!
				</h1>
				<h2 class="mb-4 text-zinc-700 dark:text-zinc-200">
					Welcome to my site! What you'll see here are some of my notes, opinions and findings about
					technology, frontend development and... mostly anything.
				</h2>
				<p class="text-black dark:text-white">
					Thanks for your attention, and I hope to see you again soon!
				</p>
			</div>
		</div>

		<section id="skip" class="mb-16 w-full">
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
				class="mt-8 flex h-6 rounded-lg leading-7 text-zinc-600 transition-all dark:text-zinc-400 dark:hover:text-zinc-200"
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
