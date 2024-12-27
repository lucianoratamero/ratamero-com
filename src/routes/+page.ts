import type { ContentItem } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export const prerender = true; // index page is most visited, lets prerender

export async function load({ fetch }) {
	const res = await fetch(`/api/listContent.json`);
	if (res.status > 400) {
		throw error(res.status, await res.text());
	}

	const items: ContentItem[] = await res.json();
	return {
		items
	};
}
