<script lang="ts">
	let isOpen = $state(false);
	let isMenuRendered = $state();

	$effect(() => {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	});
</script>

<div class="ml-[-0.60rem] md:hidden">
	<button
		class="burger visible cursor-pointer"
		aria-label="Toggle menu"
		type="button"
		onclick={() => (isOpen = !isOpen)}
	>
		{#if !isOpen}
			<svg
				class="absolute h-6 w-6 text-zinc-900 dark:text-zinc-100"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
			>
				<path
					d="M2.5 7.5H17.5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M2.5 12.5H17.5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{:else}
			<svg
				class="h-5 w-5 absolute text-zinc-900 dark:text-zinc-100"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
				shape-rendering="geometricPrecision"
				data-hide="true"
			>
				<path d="M18 6L6 18" />
				<path d="M6 6l12 12" />
			</svg>
		{/if}
	</button>
	{#if isOpen}
		<ul
			class="menu absolute flex flex-col text-2xl px-4 bg-gradient-to-br from-white to-zinc-100 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900"
			class:menuRendered={isMenuRendered}
		>
			<li
				class="border-b border-zinc-300 font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100"
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto pb-4"
					data-sveltekit-prefetch
					onclick={() => setTimeout(() => (isOpen = false), 300)}
					href="/"
				>
					home
				</a>
			</li>
			<li
				class="border-b border-zinc-300 font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100"
				style="transition-delay: 250ms;"
			>
				<a
					class="flex w-auto pb-4"
					data-sveltekit-prefetch
					onclick={() => setTimeout(() => (isOpen = false), 300)}
					href="/blog"
				>
					blog
				</a>
			</li>
			<li
				class="border-b border-zinc-300 font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100"
				style="transition-delay: 350ms;"
			>
				<a
					class="flex w-auto pb-4"
					data-sveltekit-prefetch
					onclick={() => setTimeout(() => (isOpen = false), 300)}
					href="/about"
				>
					about
				</a>
			</li>
		</ul>
	{/if}
</div>

<style lang="postcss">
	@reference '../../tailwind.css';

	.burger {
		transition: opacity 300ms ease;
		border: 0;
		background: transparent;
		width: 40px;
		height: 40px;
		position: relative;
	}

	.burger svg {
		transform: translate(-50%, -50%) scale(1);
		top: 50%;
		left: 50%;
		opacity: 1;
		transition:
			opacity 300ms ease,
			transform 300ms ease;
	}

	.menu {
		margin: 0;
		padding-top: 24px;
		width: 100%;
		height: 100vh;
		z-index: 1000;
		opacity: 0;
		left: 0;
		transition:
			opacity 300ms ease,
			transform 300ms ease;
	}

	.menu li {
		transform: translateX(-16px);
		opacity: 0;
		transition:
			opacity 300ms ease,
			transform 300ms ease,
			width 300ms ease,
			border-color 300ms ease;
		width: 0px;
		white-space: nowrap;
	}

	.menuRendered {
		opacity: 1;
	}

	.menuRendered li {
		@apply w-full border-zinc-200 dark:border-zinc-600;
		transform: translateX(0);
		opacity: 1;
	}

	.menu > * + * {
		margin-top: 24px;
	}

	@keyframes grow {
		0% {
			height: 0px;
		}
		100% {
			height: 24px;
		}
	}
</style>
