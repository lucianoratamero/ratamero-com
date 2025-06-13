<script module>
	import { MY_YOUTUBE, REPO_URL, SITE_TITLE } from '$lib/siteConfig';
</script>

<script lang="ts">
	import { navigating } from '$app/state';
	import Nav from '$lib/components/Nav.svelte';
	import { Circle3 } from 'svelte-loading-spinners';
	import { fade } from 'svelte/transition';

	import highlightSvelte from '$lib/highlightSvelte';
	import hljs from 'highlight.js/lib/core';
	import bash from 'highlight.js/lib/languages/bash';
	import elixir from 'highlight.js/lib/languages/elixir';
	import javascript from 'highlight.js/lib/languages/javascript';
	import json from 'highlight.js/lib/languages/json';
	import python from 'highlight.js/lib/languages/python';
	import typescript from 'highlight.js/lib/languages/typescript';
	import type { Snippet } from 'svelte';

	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('bash', bash);
	hljs.registerLanguage('svelte', highlightSvelte);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('elixir', elixir);

	interface Props {
		children?: Snippet;
		noMargin?: boolean;
	}

	let { children, noMargin }: Props = $props();

	let timer = null;
	let navigationIsDelayed = $state(false);

	$effect(() => {
		if (timer) {
			clearTimeout(timer);
		}
		if (navigating.to) {
			timer = setTimeout(() => {
				navigationIsDelayed = true;
			}, 500);
		}
		navigationIsDelayed = false;
		hljs.highlightAll();

		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	});
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/feed.xml"
	/>
</svelte:head>

{#if navigationIsDelayed}
	<div class="fixed w-full h-full z-10" in:fade={{ duration: 150 }}>
		<div class="absolute w-full h-full bg-white dark:bg-cyan-900 opacity-50 z-10"></div>
		<div class="absolute w-full h-full flex justify-center items-center z-20">
			<Circle3 />
		</div>
	</div>
{/if}

<div class="flex flex-col justify-center">
	<Nav />
</div>
<main class={['flex flex-col grow justify-between', { 'px-4 sm:px-6': !noMargin }]}>
	{@render children()}
</main>

<footer class="mx-auto my-8 flex w-full max-w-3xl px-6 flex-col items-start justify-center">
	<hr class="border-1 mb-8 w-full border-cyan-800 dark:border-cyan-200" />
	<div class="grid w-full max-w-3xl grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-2">
		<div class="flex flex-col space-y-4">
			<a class="text-cyan-900 hover:text-cyan-800 dark:text-zinc-200 transition dark:hover:text-zinc-100" href="/">Home</a>
			<a class="text-cyan-900 hover:text-cyan-800 dark:text-zinc-200 transition dark:hover:text-zinc-100" href="/about">About me</a>
			<span>
				<a class="text-cyan-900 hover:text-cyan-800 dark:text-zinc-200 transition dark:hover:text-zinc-100" href="/feed.xml" rel="external">
					Blog RSS
				</a>
				-
				<a
					class="text-cyan-900 hover:text-cyan-800 dark:text-zinc-200 transition dark:hover:text-zinc-100"
					href="/notes/feed.xml"
					rel="external"
				>
					Notes RSS
				</a>
			</span>
		</div>
		<div class="flex flex-col space-y-4">
			<a
				class="text-cyan-900 hover:text-cyan-800 dark:text-zinc-200 transition dark:hover:text-zinc-100"
				target="_blank"
				rel="noopener noreferrer"
				href="https://bsky.app/profile/lucianoratamero.bsky.social"
			>
				Bluesky
			</a>
			<a
				class="text-cyan-900 hover:text-cyan-800 dark:text-zinc-200 transition dark:hover:text-zinc-100"
				target="_blank"
				rel="noopener noreferrer"
				href={REPO_URL}
			>
				GitHub
			</a>
			<a
				class="text-cyan-900 hover:text-cyan-800 dark:text-zinc-200 transition dark:hover:text-zinc-100"
				target="_blank"
				rel="noopener noreferrer"
				href={MY_YOUTUBE}
			>
				YouTube
			</a>
		</div>
	</div>

	<p class="px-4 prose text-xs dark:prose-invert">
		Click and hold the theme switcher for a surprise!
	</p>
</footer>
