import { cpSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..');
const resourcesDir = join(rootDir, 'resources', 'partners');
const staticDownloadsDir = join(rootDir, 'static', 'downloads', 'partners');

console.log('Syncing downloads...');
console.log(`Source: ${resourcesDir}`);
console.log(`Destination: ${staticDownloadsDir}`);

// Create destination directory if it doesn't exist
if (!existsSync(staticDownloadsDir)) {
	mkdirSync(staticDownloadsDir, { recursive: true });
	console.log('Created destination directory');
}

// Check if source directory exists
if (!existsSync(resourcesDir)) {
	console.log('⚠️  Source directory does not exist yet. Skipping sync.');
	console.log('   Add files to resources/partners/ when ready.');
	process.exit(0);
}

// Copy files from resources/partners to static/downloads/partners
try {
	cpSync(resourcesDir, staticDownloadsDir, { recursive: true, force: true });
	console.log('✓ Downloads synced successfully!');
} catch (error) {
	console.error('Error syncing downloads:', error);
	process.exit(1);
}
