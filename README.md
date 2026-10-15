# @anqer/tokens

anqer's design tokens — colours, fonts and sizes — in one place, published
three ways from a single source file:

| File | For |
| --- | --- |
| `dist/tailwind.cjs` / `dist/tailwind.mjs` | a Tailwind CSS 3.4 preset |
| `dist/tokens.css` | CSS custom properties on `:root`, prefixed `--anqer-` |
| `dist/tokens.json` | everything else (`flat` and `nested` values) |

The source of truth is [`tokens.mjs`](tokens.mjs). `dist/` is generated from
it and committed, so the package installs without a build step.

## Install

Install a tagged version straight from GitHub:

```json
{
  "dependencies": {
    "@anqer/tokens": "github:ANQER-AI/anqer-tokens#v0.1.0"
  }
}
```

## Use

### Tailwind CSS 3.4 preset

ESM config (`tailwind.config.js` with `export default`, or `.mjs` / `.ts`):

```js
import anqer from '@anqer/tokens/tailwind';

export default {
  presets: [anqer],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};
```

CommonJS config:

```js
module.exports = {
  presets: [require('@anqer/tokens/tailwind')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

The preset only uses `theme.extend`, so Tailwind's default palette and type
scale stay available. It carries no `content` and no plugins.

```html
<button class="bg-brand hover:bg-brand-hover text-white">Start</button>
<p class="text-2xs text-ink-muted">Label</p>
```

### CSS custom properties

```css
@import '@anqer/tokens/tokens.css';

.badge {
  color: var(--anqer-color-brand);
  background: rgb(var(--anqer-color-brand-rgb) / 0.08);
  font-family: var(--anqer-font-sans);
}
```

### JSON

```js
import tokens from '@anqer/tokens/tokens.json' with { type: 'json' };

tokens.flat['color-brand']; // '#e41e06'
tokens.nested.color.accent.ink; // '#2f6f92'
```

## Tokens

Every colour is a Tailwind colour (`bg-<name>`, `text-<name>`, `border-<name>`,
…) and a custom property `--anqer-color-<name>`. A nested `DEFAULT` drops its
own name, as in Tailwind: `ok.DEFAULT` is `ok`, `ok.ink` is `ok-ink`.

### Colour — core

| Name | Value | Use |
| --- | --- | --- |
| `navy` | `#09101b` | dark chrome only (sidebars, login background) |
| `navy-ink` | `#1e2a3a` | content navy: body text, primary buttons, tabs |
| `navy-hover` | `#2a3a4d` | hover on `navy-ink` |
| `brand` | `#e41e06` | brand red |
| `brand-hover` | `#c91a05` | hover on `brand` |
| `brand-mark` | `#ed3500` | logo orange — the logo only, never UI |
| `accent` | `#3d8eb9` | **deprecated name**, see below |
| `accent-ink` | `#2f6f92` | **deprecated name**, see below |
| `action` | `#3d8eb9` | links, focus rings, selected and informational states |
| `action-ink` | `#2f6f92` | readable text on an `action` tint |
| `info` | `#2563EB` | solid-blue secondary button |
| `info-hover` | `#1d4ed8` | hover on `info` |
| `spark` | `#f59e0b` | AI mark on dark surfaces |

> **`accent` is the app's BLUE.** In the app `accent` has always been the
> interactive blue; on the website the same word has meant the brand red. To
> end the ambiguity, `action` is the clear name for this blue and `accent` is
> **deprecated**. It stays in the preset, with an unchanged value, so every
> existing `*-accent` class keeps working; it will be removed in a future major
> version. Use `action` in new code.

### Colour — surfaces, rules and ink

| Name | Value | Use |
| --- | --- | --- |
| `canvas` | `#f9fafb` | page background |
| `surface-chrome` | `#ffffff` | cards |
| `surface-wash` | `#f4f6f9` | the wash a card sits on |
| `surface-well` | `#f1f3f7` | wells, tracks, flat hover |
| `surface-2` | `#f2f3f0` | outline-button hover |
| `th-bg` | `#f6f7f9` | table header |
| `row-hover` | `#fbfcfd` | table row hover |
| `line` | `#ebedf0` | table hairline |
| `rule-strong` | `#c9d0d9` | strong border |
| `rule-hairline` | `#e4e7ec` | card border |
| `rule-soft` | `#e2e6eb` | soft border |
| `rule-hairline-soft` | `#ebedf0` | divider inside a card (same as `line`) |
| `ink` | `#09101b` | headings and figures (same as `navy`) |
| `ink-chrome` | `#1e2a3a` | everyday text, control navy (same as `navy-ink`) |
| `ink-body` | `#39424f` | body copy |
| `ink-muted` | `#5b6673` | secondary text |
| `ink-faint` | `#8b93a1` | faint text (same as `muted`) |
| `ink-dim` | `#8a939f` | dim text |
| `ink-fainter` | `#9aa3ae` | fainter text |
| `ink-dimmer` | `#b3b8c0` | faintest text |
| `muted` | `#8b93a1` | table headers, secondary labels |

### Colour — status

`DEFAULT` tints a chip's background and border; `-ink` is the readable (WCAG
AA) text colour on that tint.

| Name | Value |
| --- | --- |
| `ok` / `ok-ink` | `#22c55e` / `#166534` |
| `ok-strong` | `#16a34a` (solid status green for glyphs and icons) |
| `warn` / `warn-ink` | `#eab308` / `#854d0e` |
| `danger` / `danger-ink` | `#ef4444` / `#991b1b` |
| `fit-yes` / `fit-yes-ink` | `#22c55e` / `#166534` |
| `fit-yes-ink-strong` / `fit-yes-on-navy` | `#14532d` / `#bbf7d0` |
| `fit-no` / `fit-no-ink` | `#ef4444` / `#991b1b` |
| `fit-no-ink-strong` / `fit-no-on-navy` | `#7f1d1d` / `#fecaca` |
| `setup-done` / `setup-done-ink` | `#16a34a` / `#15803d` |
| `setup-next` / `setup-next-ink` | `#1f6f9c` / `#55748a` |
| `setup-next-line` / `setup-next-bg` | `#6cb6e4` / `#f2f8fd` |
| `setup-open` | `#c3c8d0` |
| `setup-short` / `setup-short-ink` | `#b4761a` / `#8a5a08` |
| `setup-short-line` / `setup-short-bg` | `#e0a92b` / `#fffbeb` |

### RGB triplets (CSS only)

For alpha: `rgb(var(--anqer-color-brand-rgb) / 0.08)`.

| Property | Value |
| --- | --- |
| `--anqer-color-brand-rgb` | `228 30 6` |
| `--anqer-color-ink-rgb` | `9 16 27` |

### Typography

| Tailwind | CSS | Value |
| --- | --- | --- |
| `font-sans` | `--anqer-font-sans` | Helvetica Neue, Helvetica, Arial |
| `text-2xs` | `--anqer-font-size-2xs` | `0.6875rem` (11 px) |
| `text-2xs` | `--anqer-line-height-2xs` | `1.45` |

The full `font-sans` stack is
`"Helvetica Neue", Helvetica, Arial, sans-serif`.

The rest of the type scale is Tailwind's default (`text-xs` 12 px, `text-sm`
14 px, `text-base` 16 px, …).

### Layout

| Tailwind | CSS | Value |
| --- | --- | --- |
| `z-bar` | `--anqer-z-bar` | `60` |
| `z-rail` | `--anqer-z-rail` | `70` |
| `z-drawer` | `--anqer-z-drawer` | `80` |
| `z-modal` | `--anqer-z-modal` | `90` |
| `z-viewer` | `--anqer-z-viewer` | `100` |
| `pt-safe-t` | `--anqer-spacing-safe-t` | `env(safe-area-inset-top)` |

`safe-b`, `safe-l` and `safe-r` follow the same pattern for bottom, left and
right.

### Motion (Tailwind only)

| Tailwind | Value |
| --- | --- |
| `animate-setup-pop` | `setup-pop 0.35s ease` |
| `animate-notice-me` | `notice-me 0.9s ease-in-out 2` |

The keyframes are in the preset and in `tokens.json`; a custom property cannot
carry `@keyframes`, so they are not in `tokens.css`.

## How to change a value

1. Edit [`tokens.mjs`](tokens.mjs). If the new value equals another token,
   reference that token's constant instead of writing the hex twice.
2. `npm run build` — regenerates `dist/`.
3. Commit `tokens.mjs` and `dist/` together. CI rebuilds `dist/` and fails when
   it differs from what is committed (`npm run check` runs the same locally).
4. Bump `version` in `package.json`, rebuild, commit, then tag:
   `git tag v0.2.0 && git push --tags`.
5. Consumers move to the new tag in their `package.json`.

## Versioning

[Semantic versioning](https://semver.org/), applied to tokens:

| Change | Version |
| --- | --- |
| a token's **value** changes | minor (`0.1.0` → `0.2.0`) |
| a token is **added** | minor |
| a token is **renamed or removed** | major (`0.x` → `1.0.0`) |
| docs, build, CI only — `dist/` unchanged | patch |

A value change is visible on every consumer that moves to the new tag, so read
the release notes before bumping.

## Licence

Proprietary — see [LICENSE](LICENSE). This repository is public to read; no
licence to reuse it is granted.
