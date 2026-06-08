/// <reference types="@sveltejs/kit" />

interface String {
	replaceAll(search: string, replace: string): string;
}

declare module 'highlight.js/lib/languages/*' {
	import type { LanguageFn } from 'highlight.js';
	const lang: LanguageFn;
	export default lang;
}

declare module 'js-yaml' {
	export function load(str: string): unknown;
}

declare module 'lodash-es' {
	import lodash from 'lodash';
	export = lodash;
}
