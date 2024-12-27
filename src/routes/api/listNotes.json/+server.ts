import { json } from '@sveltejs/kit';
import { processAll } from '$lib/markdown';

export async function GET() {
	const list = await processAll('src/routes/(base)/notes/');
	return json(list, {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${60}` // 1 minute.. for now
		}
	});
}
