import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Fetch world atlas 110m
const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json');
const world = await res.json();

const countries = feature(world, world.objects.countries);

// European country numeric ISO codes (UN M49 / ISO 3166-1 numeric)
const europeanIds = new Set([
  8,20,40,56,70,100,112,191,196,203,208,233,246,250,276,300,
  348,352,372,380,428,438,440,442,470,498,492,528,578,616,620,642,
  703,705,724,752,756,804,826,807,688,756,499,31
]);

const europeFeatures = countries.features.filter(f => europeanIds.has(+f.id));

// Bounding box roughly: lon -25..45, lat 34..72
const width = 820;
const height = 600;

// Use fitSize to auto-fit Europe into the viewBox
const projection = geoMercator()
  .fitSize([width, height], { type: 'FeatureCollection', features: europeFeatures });

const path = geoPath().projection(projection);

// Build paths
let pathElems = '';
for (const f of europeFeatures) {
  const d = path(f);
  if (d) {
    pathElems += `<path d="${d}" fill="#dbe9f4" stroke="#a8c4d8" stroke-width="0.8"/>\n`;
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
<rect width="${width}" height="${height}" fill="#f0f4f8"/>
${pathElems}
</svg>`;

const outPath = join(__dirname, '../static/images/europe-map.svg');
const ws = createWriteStream(outPath);
ws.write(svg);
ws.end();
ws.on('finish', () => console.log('Map written to', outPath));
