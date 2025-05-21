<script lang="ts">
	import { page } from '$app/state';
	import Comments from '$lib/components/Comments.svelte';
	import { DEFAULT_OG_IMAGE, MY_TWITTER_HANDLE } from '$lib/siteConfig';
	import dayjs from 'dayjs';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		title: string;
		description: string;
		image?: string;
		date: string;
	}

	let { children, title, description, image, date }: Props = $props();
</script>

<svelte:head>
	<title>{title} - luciano@ratamero.com</title>

	<link rel="canonical" href={page.url.toString()} />
	<meta property="og:url" content={page.url.toString()} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="Description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
		<meta name="twitter:image" content={image} />
	{:else}
		<meta property="og:image" content={DEFAULT_OG_IMAGE} />
		<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
	{/if}
</svelte:head>

<article
	id="skip"
	class="mx-auto mb-8 flex w-full max-w-3xl flex-col items-start justify-center sm:px-8 xl:max-w-5xl"
>
	<h1 class="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
		{title}
	</h1>
	<div
		class="bg mt-2 flex w-full justify-between sm:flex-col sm:items-start md:flex-row md:items-center"
	>
		<p class="flex items-center text-sm text-zinc-700 dark:text-zinc-300">Luciano Ratamero</p>
		<p class="min-w-32 text-right text-sm text-zinc-600 dark:text-zinc-400 md:mt-0">
			{dayjs(date).toISOString().slice(0, 10)}
		</p>
	</div>
	<div
		class="my-2 flex h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-pink-500 sm:mx-0 w-full"
	></div>

	<div class="prose mt-12 w-full max-w-none dark:prose-invert xl:prose-xl">
		{@render children()}
	</div>

	<Comments />
</article>
