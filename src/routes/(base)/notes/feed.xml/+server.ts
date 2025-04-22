export const prerender = true;

import { processAllWithContent } from '$lib/markdown';
import { SITE_TITLE, SITE_URL } from '$lib/siteConfig';
import RSS from 'rss';

if (typeof String.prototype.replaceAll === 'undefined') {
	String.prototype.replaceAll = function (match, replace) {
		return this.replace(new RegExp(match, 'g'), () => replace);
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const feed = new RSS({
		title: SITE_TITLE + ' Notes - RSS Feed',
		site_url: SITE_URL,
		feed_url: SITE_URL + '/feed.xml'
	});

	const allBlogs = await processAllWithContent('notes');
	allBlogs.forEach((post) => {
		feed.item({
			title: post.metadata.title,
			url: SITE_URL + `/notes/${post.metadata.slug}`,
			date: post.metadata.date,
			description: post.content.replaceAll('/notes', 'https://ratamero.com/notes')
		});
	});

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${600}`, // 10 minutes
			'Content-Type': 'application/rss+xml'
		}
	});
}
