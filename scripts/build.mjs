// Generates dist/ from tokens.mjs. Zero dependencies, Node >= 20.
//
//   node scripts/build.mjs           write dist/
//
// Output is deterministic: the same tokens.mjs always produces byte-identical
// files, so CI can rebuild and `git diff --exit-code dist`.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import tokens from '../tokens.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

const HEADER = `@anqer/tokens ${pkg.version} — GENERATED from tokens.mjs by scripts/build.mjs. Do not edit.`;

// ── helpers ──────────────────────────────────────────────────────────────────

/** Flattens a Tailwind-style colour tree: {a: {DEFAULT: x, b: y}} → {a: x, 'a-b': y}. */
function flattenColors(tree, prefix = '') {
  const out = {};
  for (const [key, value] of Object.entries(tree)) {
    const name = key === 'DEFAULT' ? prefix : prefix ? `${prefix}-${key}` : key;
    if (typeof value === 'string') {
      if (!name) throw new Error('top-level DEFAULT is not allowed');
      if (name in out) throw new Error(`duplicate colour name: ${name}`);
      out[name] = value;
    } else {
      for (const [k, v] of Object.entries(flattenColors(value, name))) {
        if (k in out) throw new Error(`duplicate colour name: ${k}`);
        out[k] = v;
      }
    }
  }
  return out;
}

function hexToTriplet(hex) {
  const m = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!m) throw new Error(`not a 6-digit hex colour: ${hex}`);
  const n = parseInt(m[1], 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

/** CSS font-family list: quote names that contain a space. */
function cssFontStack(stack) {
  return stack.map((f) => (/\s/.test(f) ? `"${f}"` : f)).join(', ');
}

// ── validate ─────────────────────────────────────────────────────────────────

const colors = flattenColors(tokens.color);
for (const [name, value] of Object.entries(colors)) {
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)) {
    throw new Error(`colour ${name} is not a hex value: ${value}`);
  }
}
for (const name of tokens.rgbTriplets) {
  if (!(name in colors)) throw new Error(`rgbTriplets: unknown colour ${name}`);
}

// ── flat map (shared by tokens.css and tokens.json) ──────────────────────────

const flat = {};
for (const [name, value] of Object.entries(colors)) flat[`color-${name}`] = value;
for (const name of tokens.rgbTriplets) flat[`color-${name}-rgb`] = hexToTriplet(colors[name]);
for (const [name, stack] of Object.entries(tokens.fontFamily)) flat[`font-${name}`] = cssFontStack(stack);
for (const [name, { size, lineHeight }] of Object.entries(tokens.fontSize)) {
  flat[`font-size-${name}`] = size;
  flat[`line-height-${name}`] = lineHeight;
}
for (const [name, value] of Object.entries(tokens.borderRadius)) flat[`radius-${name}`] = value;
for (const [name, value] of Object.entries(tokens.zIndex)) flat[`z-${name}`] = value;
for (const [name, value] of Object.entries(tokens.spacing)) flat[`spacing-${name}`] = value;
// keyframes/animation are Tailwind-only: a custom property cannot carry @keyframes.

// ── Tailwind 3.4 preset ──────────────────────────────────────────────────────

const preset = {
  theme: {
    extend: {
      colors: tokens.color,
      fontFamily: tokens.fontFamily,
      fontSize: Object.fromEntries(
        Object.entries(tokens.fontSize).map(([name, { size, lineHeight }]) => [
          name,
          [size, { lineHeight }],
        ]),
      ),
      borderRadius: tokens.borderRadius,
      keyframes: tokens.keyframes,
      animation: tokens.animation,
      spacing: tokens.spacing,
      zIndex: tokens.zIndex,
    },
  },
};
const presetJson = JSON.stringify(preset, null, 2);

// ── write ────────────────────────────────────────────────────────────────────

mkdirSync(dist, { recursive: true });

const css = [
  `/* ${HEADER} */`,
  ':root {',
  ...Object.entries(flat).map(([name, value]) => `  --anqer-${name}: ${value};`),
  '}',
  '',
].join('\n');
writeFileSync(join(dist, 'tokens.css'), css);

writeFileSync(
  join(dist, 'tailwind.cjs'),
  `// ${HEADER}\n// Tailwind CSS 3.4 preset: presets: [require('@anqer/tokens/tailwind')]\n'use strict';\n\nmodule.exports = ${presetJson};\n`,
);
writeFileSync(
  join(dist, 'tailwind.mjs'),
  `// ${HEADER}\n// Tailwind CSS 3.4 preset: import anqer from '@anqer/tokens/tailwind'; presets: [anqer]\n\nexport default ${presetJson};\n`,
);

const json = {
  version: pkg.version,
  flat,
  nested: {
    color: tokens.color,
    fontFamily: tokens.fontFamily,
    fontSize: tokens.fontSize,
    borderRadius: tokens.borderRadius,
    zIndex: tokens.zIndex,
    spacing: tokens.spacing,
    keyframes: tokens.keyframes,
    animation: tokens.animation,
  },
};
writeFileSync(join(dist, 'tokens.json'), `${JSON.stringify(json, null, 2)}\n`);

console.log(`dist/ written: ${Object.keys(flat).length} tokens (${Object.keys(colors).length} colours)`);
