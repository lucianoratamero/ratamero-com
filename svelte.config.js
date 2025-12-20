import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { dirname, join } from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFigure from 'rehype-figure';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import remarkToc from 'remark-toc';
import { sveltePreprocess } from 'svelte-preprocess';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// mdsvex config
const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		plain: join(__dirname, '/src/lib/PlainLayout.svelte'),
		_: join(__dirname, '/src/lib/BlogLayout.svelte') // default mdsvex layout
	},
	remarkPlugins: [
		[
			remarkToc,
			{
				heading: 'Table of Contents|Resumo|toc|summary',
				tight: true
			}
		]
	],
	rehypePlugins: [
		parse,
		gfm,
		rehypeSlug,
		rehypeFigure,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		],
		rehypeStringify
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.html', '.svx', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		sveltePreprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
