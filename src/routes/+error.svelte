<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/state';

	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;

	let message = $state(offline ? 'Find the internet and try again' : page.error?.message);

	let title = $state(offline ? 'Offline' : page.status);
	if (page.status === 404) {
		title = 'Page not found :(';
		message = 'Sorry! If you think this URL is broken, please let me know!';
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="container prose mx-auto py-12 dark:prose-invert 2xl:prose-xl">
	<h1>{page.status}: {title}</h1>

	{#if page.status === 404}
		<p class="">There is no post at the slug <code>{page.url.pathname}</code>.</p>
		<p class="">
			If you believe this was a bug, please let me know! Email luciano [at] ratamero.com
		</p>
	{:else}
		<p class="font-mono">{message}</p>
	{/if}
	{#if dev && page.error.message}
		<pre class="mono overflow-scroll bg-zinc-800 p-8">{page.error.message}</pre>
	{/if}
</section>

<style>
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
