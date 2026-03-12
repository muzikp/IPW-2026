// Prints pixel coords for university cities using same projection as generate-europe-map.mjs
import { geoMercator } from 'd3-geo';
import { feature } from 'topojson-client';

const width = 820, height = 600;

// Same European IDs as generate-europe-map.mjs
const europeanIds = new Set([
  8,20,40,56,70,100,112,191,196,203,208,233,246,250,276,300,
  348,352,372,380,428,438,440,442,470,498,492,528,578,616,620,642,
  703,705,724,752,756,804,826,807,688,756,499,31
]);

const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json');
const world = await res.json();
const countries = feature(world, world.objects.countries);
const europeFeatures = countries.features.filter(f => europeanIds.has(+f.id));

const projection = geoMercator()
  .fitSize([width, height], { type: 'FeatureCollection', features: europeFeatures });

const cities = [
  { name: 'Prague / CTU MIAS', lon: 14.42, lat: 50.08 },
  { name: 'Görlitz', lon: 14.99, lat: 51.15 },
  { name: 'Heilbronn', lon: 9.22, lat: 49.14 },
  { name: 'Rome / LUMSA', lon: 12.50, lat: 41.90 },
  { name: 'Lyon / La Mache', lon: 4.83, lat: 45.75 },
  { name: 'Lille', lon: 3.06, lat: 50.63 },
  { name: 'Vilnius / MRU', lon: 25.28, lat: 54.69 },
];

for (const c of cities) {
  const [x, y] = projection([c.lon, c.lat]);
  console.log(`${c.name}: x=${Math.round(x)}, y=${Math.round(y)}`);
}
