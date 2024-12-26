import chokidar from 'chokidar';
import { promises as fs } from 'fs';
import { homedir } from 'os';
import path from 'path';

const SOURCE_DIR = path.join(
	homedir(),
	'Library/Mobile Documents/iCloud~md~obsidian/Documents/root/blog'
);
const DEST_DIR = path.join(
	path.dirname(new URL(import.meta.url).pathname),
	'src/routes/(base)/blog'
);
const NOTES_DIR = path.join(
	path.dirname(new URL(import.meta.url).pathname),
	'src/routes/(base)/notes'
);
const STATIC_ASSETS_DIR = path.join(
	path.dirname(new URL(import.meta.url).pathname),
	'static/assets'
);

async function copyMarkdownFiles(sourceDir, destBaseDir) {
	const entries = await fs.readdir(sourceDir, { withFileTypes: true });
	const files = entries.filter((entry) => entry.isFile()).map((entry) => entry.name);

	const mdFiles = files.filter((file) => file.endsWith('.md') && file !== 'Index.md');

	for (const file of mdFiles) {
		const basename = path.basename(file, '.md');
		const newDir = path.join(destBaseDir, basename);
		const sourcePath = path.join(sourceDir, file);
		const destPath = path.join(newDir, '+page.md');

		await fs.mkdir(newDir, { recursive: true });
		await fs.copyFile(sourcePath, destPath);
		// console.log(`Copied file ${file} to ${destPath}`);
	}
}

async function cleanDirectory(dir) {
	try {
		const entries = await fs.readdir(dir, { withFileTypes: true });
		const preserveExtensions = ['.svelte', '.js', '.ts'];

		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);

			if (entry.isDirectory()) {
				await cleanDirectory(fullPath);
				// Remove directory if empty
				const remainingFiles = await fs.readdir(fullPath);
				if (remainingFiles.length === 0) {
					await fs.rmdir(fullPath);
				}
			} else if (!preserveExtensions.some((ext) => entry.name.endsWith(ext))) {
				await fs.unlink(fullPath);
			}
		}

		// console.log(`Cleaned directory: ${dir}`);
	} catch (error) {
		if (error.code !== 'ENOENT') {
			console.error(`Error cleaning directory ${dir}:`, error);
		}
	}
}

async function processMarkdownFiles(directory) {
	const entries = await fs.readdir(directory, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(directory, entry.name);

		if (entry.isDirectory()) {
			await processMarkdownFiles(fullPath);
		} else if (entry.name.endsWith('.md')) {
			let content = await fs.readFile(fullPath, 'utf-8');

			// Replace .md) with )
			content = content.replace(/\.md\)/g, ')');
			// Replace image paths (ensure leading slash)
			content = content.replace(/\((?:\.\.\/)?assets\//g, '(/assets/');
			content = content.replace(/\(assets\//g, '(/assets/');
			// Replace Obsidian image embeds with linked images
			content = content.replace(
				/!\[\[(?:assets\/)?([^\]]+)\]\]/g,
				(match, filename) =>
					`<a href="/assets/${filename}" target="_blank"><img src="/assets/${filename}" alt="${filename}" /></a>`
			);
			// Wrap existing markdown images with links
			content = content.replace(
				/!\[(.*?)\]\(([^)]+)\)/g,
				(match, alt, src) =>
					`<a href="${src}" target="_blank"><img src="${src}" alt="${alt}" /></a>`
			);
			// Replace (./ with (/blog/)
			content = content.replace(/\(\.\/\)/g, '(/blog/)');
			// Replace Obsidian-style links (excluding images)
			content = content.replace(/(?<!!)\[\[(.*?)\]\]/g, (match, noteName) => {
				const [name, display] = noteName.split('|');
				const slug = name.trim();
				return `[${display || name}](/notes/${slug})`;
			});

			await fs.writeFile(fullPath, content, 'utf-8');
			// console.log(`Processed markdown file: ${fullPath}`);
		}
	}
}

async function copyPosts() {
	try {
		// Clean up destination directories first
		await cleanDirectory(DEST_DIR);
		await cleanDirectory(NOTES_DIR);
		await cleanDirectory(STATIC_ASSETS_DIR);

		// Recreate empty directories
		await fs.mkdir(DEST_DIR, { recursive: true });
		await fs.mkdir(NOTES_DIR, { recursive: true });
		await fs.mkdir(STATIC_ASSETS_DIR, { recursive: true });

		// Copy markdown files from root
		await copyMarkdownFiles(SOURCE_DIR, DEST_DIR);

		// Read directories
		const entries = await fs.readdir(SOURCE_DIR, { withFileTypes: true });
		const directories = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

		// Handle directories
		for (const dir of directories) {
			const sourceDir = path.join(SOURCE_DIR, dir);

			if (dir === 'notes') {
				// For 'notes' directory, copy markdown files to NOTES_DIR
				await copyMarkdownFiles(sourceDir, NOTES_DIR);
				// console.log(`Processed notes directory to ${NOTES_DIR}`);
			} else if (dir === 'assets') {
				// For 'assets' directory, copy to static/assets with force overwrite
				await fs.cp(sourceDir, STATIC_ASSETS_DIR, { recursive: true, force: true });
				// console.log(`Copied assets to ${STATIC_ASSETS_DIR}`);
			} else {
				// For other directories, copy everything as before
				const destDir = path.join(DEST_DIR, dir);
				await fs.cp(sourceDir, destDir, { recursive: true });
				// console.log(`Copied directory ${dir} to ${destDir}`);
			}
		}

		// Process markdown files after copying everything
		await processMarkdownFiles(DEST_DIR);
		await processMarkdownFiles(NOTES_DIR);

		// console.log('All posts and directories copied and processed successfully!');
	} catch (error) {
		console.error('Error copying posts:', error);
	}
}

chokidar.watch(SOURCE_DIR).on('all', (event, path) => {
	copyPosts();
});
