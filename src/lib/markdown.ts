/* eslint-disable */
import highlightSvelte from '$lib/highlightSvelte';
import dayjs from 'dayjs';
import yaml from 'js-yaml';
import _ from 'lodash';
import fs from 'node:fs';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import highlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import frontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { readSync } from 'to-vfile';
import { unified } from 'unified';
import type { ContentFromFile, ContentItem } from './types';

let parser = unified().use(parse).use(gfm).use(frontmatter, ['yaml']);

let runner = unified()
	.use(remarkToc, {
		heading: 'Table of Contents|Resumo|toc',
		tight: true
	})
	.use(remark2rehype)
	.use(highlight, { aliases: { markdown: 'ad-info' }, languages: { svelte: highlightSvelte } })
	.use(rehypeSlug)
	.use(rehypeAutolinkHeadings, {
		behavior: 'wrap'
	})
	.use(rehypeStringify);

export function process(filename) {
	let tree = parser.parse(readSync(filename));
	let metadata = null;
	if (tree.children.length > 0 && tree.children[0].type == 'yaml') {
		metadata = yaml.load(tree.children[0].value);
		tree.children = tree.children.slice(1, tree.children.length);
		metadata.date.setUTCHours(23, 59, 59, 999);
		metadata.date = dayjs(metadata.date).format('YYYY-MM-DD');
	}
	let content = runner.stringify(runner.runSync(tree));
	if (!metadata) {
		metadata = {
			title: 'Error!',
			date: '?',
			excerpt: 'Missing Frontmatter! Expected at least a title and a date!'
		};
		content = 'Missing Frontmatter! Expected at least a title and a date!';
	}
	return { metadata, content };
}

export async function processAll(processedPath = null): Promise<ContentItem[]> {
	const files = fs
		.readdirSync(processedPath || `src/routes/(base)/blog/`)
		.filter((file) => !file.endsWith('.svelte') && !file.startsWith('+'));

	const postsMetadata: ContentItem[] = files
		.map((file) => {
			try {
				if (
					fs.lstatSync(`${processedPath || 'src/routes/(base)/blog/'}${file}/+page.md`).isFile()
				) {
					return process(`${processedPath || 'src/routes/(base)/blog/'}${file}/+page.md`);
				}
			} catch (e) {
				return;
			}
		})
		.filter((post) => Boolean(post))
		.map((post) => {
			return post && post.metadata;
		});

	return _.sortBy(postsMetadata, ['date']).reverse();
}

export async function processAllWithContent(prefix='blog'): Promise<ContentFromFile[]> {
	const files = fs
		.readdirSync(`src/routes/(base)/${prefix}/`)
		.filter((file) => !file.endsWith('.svelte') && !file.startsWith('+'));
	const posts: ContentFromFile[] = files
		.map((file) => {
			try {
				if (fs.lstatSync(`src/routes/(base)/${prefix}/${file}/+page.md`).isFile()) {
					return process(`src/routes/(base)/${prefix}/${file}/+page.md`);
				}
			} catch (e) {
				return;
			}
		})
		.filter((post) => Boolean(post));

	const dateComparator = (post) => _.get(post, 'metadata.date');
	return _.orderBy(posts, dateComparator, ['desc']);
}
