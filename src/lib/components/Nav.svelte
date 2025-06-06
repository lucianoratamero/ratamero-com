<script lang="ts">
	import { REPO_URL } from '$lib/siteConfig';
	import Button from './Button.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import NavLink from './NavLink.svelte';

	let showGeocitiesWarningDialog = $state(false);
	let timer = $state(null);

	let isGeocities = $state(false);
	let isDark = $state(false);
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}

		isGeocities = localStorage.geocities === 'true';
	}

	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}

	function handleGeocitiesWarningDialog(e: MouseEvent) {
		e.preventDefault();
		showGeocitiesWarningDialog = !showGeocitiesWarningDialog;
	}

	function handleThemeMouseDown(e: MouseEvent) {
		timer = setTimeout(() => handleGeocitiesWarningDialog(e), 1000);
	}

	function handleThemeMouseUp() {
		clearTimeout(timer);
		if (!showGeocitiesWarningDialog) {
			toggleDarkMode();
		}
	}

	function setGeocities(value) {
		showGeocitiesWarningDialog = false;
		isGeocities = value;

		if (typeof localStorage !== 'undefined') {
			localStorage.geocities = value;
		}
	}

	$effect(() => {
		if (isGeocities) {
			document.documentElement.classList.add('geocities');
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		} else {
			document.documentElement.classList.remove('geocities');
		}
	});
</script>

<nav
	class="relative mx-auto flex w-full max-w-3xl items-center justify-between border-zinc-200
	bg-opacity-60 pt-8 px-4 mb-8 text-zinc-900 dark:border-zinc-700
	dark:text-zinc-100 sm:mb-16 sm:px-6"
>
	<a href="#skip" class="skip-nav text-black dark:text-white">Skip to content</a>
	<MobileMenu />
	<span class="grow md:grow-0">
		<a class="fancy-text text-4xl font-bold hover:no-underline" href="/">hi :]</a>
	</span>
	<ul class="flex items-center">
		<li>
			<NavLink href="/blog">blog</NavLink>
		</li>
		<li>
			<NavLink href="/notes">notes</NavLink>
		</li>
		<li>
			<NavLink href="/about">about me</NavLink>
		</li>
		<!--		<li>-->
		<!--			<NavLink href='/mastodon-feed'>@mastodon</NavLink>-->
		<!--		</li>-->
	</ul>
	<div class="flex items-center space-x-4">
		<!-- RSS -->
		<a
			class="rounded-lg text-zinc-700 hover:bg-cyan-200 dark:text-zinc-200 dark:hover:bg-cyan-800"
			rel="external"
			href="/feed.xml"
			aria-label="RSS"
		>
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				class="h-9 w-9 p-1"
				fill="currentColor"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
				/>
			</svg>
		</a>
		<!-- Github -->
		<a
			class="rounded-lg text-zinc-700 hover:bg-cyan-200 dark:text-zinc-200
			dark:hover:bg-cyan-800"
			href={REPO_URL}
			aria-label="GitHub source"
		>
			<svg aria-hidden="true" class="h-9 w-9 p-1" fill="currentColor" viewBox="0 0 24 24">
				<path
					fill-rule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
					0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
					1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
					2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988
					1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112
					6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202
					2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566
					4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019
					10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
		<button
			aria-label="Toggle Dark Mode"
			class="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 ring-cyan-400
			transition-all hover:ring-2 dark:bg-cyan-800"
			onmousedown={handleThemeMouseDown}
			onmouseup={handleThemeMouseUp}
		>
			{#if isDark}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					class="h-5 w-5 text-zinc-800 dark:text-cyan-100"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					class="w-5 h-5 text-zinc-800 dark:text-zinc-200"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			{/if}
		</button>

		{#if showGeocitiesWarningDialog}
			<div
				class="absolute top-full min-w-56 right-0 z-50 text-sm p-2 border rounded bg-white dark:bg-zinc-800 border-purple-400 flex flex-col gap-2"
			>
				<p>Psst, this will enable the geocities theme!</p>
				<p>It's not accessible at all, but it looks awesome.</p>
				<p>Are you sure you want to enable it?</p>

				<p class="text-xs">(You can always come here later and disable it!)</p>

				<Button size="sm" onclick={() => setGeocities(true)} label="YES :>"></Button>
				<Button size="sm" onclick={() => setGeocities(false)} label="No :("></Button>
			</div>
		{/if}
	</div>
</nav>

<style>
	.skip-nav {
		position: absolute;
		left: -25%;
		top: -3rem;
		--tw-translate-y: -3rem;
		padding: 0.75rem 1rem;
		transition-property: top;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.2s;
	}

	.skip-nav:focus {
		top: 1rem;
	}
</style>
