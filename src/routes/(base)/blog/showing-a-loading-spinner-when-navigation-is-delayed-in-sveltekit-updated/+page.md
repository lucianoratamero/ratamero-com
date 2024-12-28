---
title: Showing a loading spinner when navigation is delayed in SvelteKit - Updated
slug: showing-a-loading-spinner-when-navigation-is-delayed-in-sveltekit-updated
date: 2024-12-28
updated_at: 2024-12-28
description: Sometimes, when the internet connection is not ideal, SvelteKit apps might look like they froze when navigating to another page. This is how I solved this issue. Again.
---
> This is an update to my 2022 post about this issue.
> Since we're now at the Svelte 5 era, stores are starting to be deprecated, so here's the update.

Sometimes, when the internet connection is not ideal, [SvelteKit](/notes/SvelteKit) apps might look like they froze when navigating to another page. This is how I solved this issue.

[SvelteKit](/notes/SvelteKit) provides [a lot of useful state objects](https://svelte.dev/docs/kit/$app-state) that may give you a better insight on how the app is behaving. One of them is the `navigating` state. Whenever the client-side routing is transitioning between pages, this state is updated with the paths of where you're coming `from`, and where you're going `to` (and some other useful data):

```js
{
   from: "/"
   to: "/blog"
}
```

When it's not transitioning between pages, the `from` and `to` keys just return `null`. That allows us to add an `{#if}` block that renders a loading overlay is there's any value on the store:

```svelte
<script>
  // ...
  import { fade } from "svelte/transition";
  import { Circle3 } from "svelte-loading-spinners";
  import { navigating } from "$app/state";
</script>

<!-- ... -->

{#if navigating.to}
<div class="fixed w-full h-full z-10" in:fade={{ duration: 150 }}>
  <div class="absolute w-full h-full bg-white dark:bg-cyan-800 opacity-50 z-10"></div>
  <div class="absolute w-full h-full flex justify-center items-center z-20">
    <Circle3 />
  </div>
</div>
{/if}
```

This implementation works fine, but there's a problem: since [SvelteKit](/notes/SvelteKit) is **really** fast, the user may see flashes of the loading overlay when navigating, since there's simply no time for the user to recognize that the flash *is* the loading overlay.

To fix that, I added a `navigationIsDelayed` state to my base `+layout.svelte` that listens to the `navigating.to` state and only changes it's value to true when the navigation is hanged for more than 500ms:

```js
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

	return () => {
		if (timer) {
			clearTimeout(timer);
		}
	};
});
```

Notice the `timer` is a plain JS variable, since we **don't** want the effect to be triggered when `timer`'s value changes. 

This way, the loading overlay only appears if the user's internet is **so bad** that can't load a couple of KBs in less than 500ms.

That's it for now! I hope this was useful to you, and see you next time :]