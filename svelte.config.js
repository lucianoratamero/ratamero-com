import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { dirname, join } from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFigure from 'rehype-figure';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import gfm from 'remark-gfm';
import hljs from 'highlight.js';
import parse from 'remark-parse';
import remarkToc from 'remark-toc';
import { sveltePreprocess } from 'svelte-preprocess';
import { fileURLToPath } from 'url';

function highlightSvelte(hljs) {
	return {
		subLanguage: 'xml',
		contains: [
			hljs.COMMENT('<!--', '-->', { relevance: 10 }),
			{
				begin: /^(\s*)(<script(\s*context="module")?>)/gm,
				end: /^(\s*)(<\/script>)/gm,
				subLanguage: 'javascript',
				excludeBegin: true,
				excludeEnd: true,
				contains: [{ begin: /^(\s*)(\$:)/gm, end: /(\s*)/gm, className: 'keyword' }]
			},
			{
				begin: /^(\s*)(<style.*>)/gm,
				end: /^(\s*)(<\/style>)/gm,
				subLanguage: 'css',
				excludeBegin: true,
				excludeEnd: true
			},
			{
				begin: /\{/gm,
				end: /\}/gm,
				subLanguage: 'javascript',
				contains: [
					{ begin: /[{]/, end: /[}]/, skip: true },
					{
						begin: /([#:/@])(if|else|each|await|then|catch|debug|html)/gm,
						className: 'keyword',
						relevance: 10
					}
				]
			}
		]
	};
}

hljs.registerLanguage('svelte', highlightSvelte);

const escapeSvelty = (str) =>
	str.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' })[c]);

function highlighter(code, lang) {
	let highlighted;
	try {
		highlighted =
			lang && hljs.getLanguage(lang)
				? hljs.highlight(code, { language: lang }).value
				: hljs.highlightAuto(code).value;
	} catch {
		highlighted = code;
	}
	const cls = lang ? ` class="language-${lang}"` : '';
	return `<pre${cls}>{@html \`<code${cls}>${escapeSvelty(highlighted)}</code>\`}</pre>`;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// mdsvex config
const mdsvexConfig = {
	highlight: { highlighter },
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
