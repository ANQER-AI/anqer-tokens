// @anqer/tokens — the ONE source of truth for anqer's colours, fonts and sizes.
//
// Edit values here, then run `npm run build` and commit the regenerated dist/.
// Never edit dist/ by hand: CI rebuilds it and fails when it differs.
//
// Shape rules
//   - Every key below `color` becomes a Tailwind colour (`bg-brand`,
//     `text-accent-ink`) and a CSS custom property (`--anqer-color-brand`,
//     `--anqer-color-accent-ink`). A nested `DEFAULT` drops its own name:
//     `accent.DEFAULT` is `accent`, exactly as Tailwind treats it.
//   - A value that is the same colour as another token is written as a
//     reference to it, never as a second hex: a value written twice is a value
//     that will drift.

// ── Base palette ─────────────────────────────────────────────────────────────

const NAVY = '#09101b';
const NAVY_INK = '#1e2a3a';
const BRAND = '#e41e06';
const BRAND_HOVER = '#c91a05';
const ACCENT = { DEFAULT: '#3d8eb9', ink: '#2f6f92' };
const LINE = '#ebedf0';
const MUTED = '#8b93a1';
const OK = { DEFAULT: '#22c55e', ink: '#166534' };
const WARN = { DEFAULT: '#eab308', ink: '#854d0e' };
const DANGER = { DEFAULT: '#ef4444', ink: '#991b1b' };

export const color = {
  // Two navies — do not conflate.
  //   navy      dark chrome only: sidebars, login background, admin chrome
  //   navy-ink  content: body text, primary buttons, tabs, avatars
  navy: NAVY,
  'navy-ink': NAVY_INK,
  'navy-hover': '#2a3a4d',

  // The brand red, and the darker red its hover uses.
  brand: BRAND,
  'brand-hover': BRAND_HOVER,

  // DEPRECATED NAME — this is a BLUE in the app (links, focus rings, selected
  // and informational states). Use `action` below for new code. Kept so every
  // existing `*-accent` class keeps working unchanged.
  accent: ACCENT,

  // The AI mark on dark surfaces; amber reads as a spark, not a warning.
  spark: '#f59e0b',

  // Page and table surfaces.
  canvas: '#f9fafb',
  'th-bg': '#f6f7f9',
  line: LINE,
  'row-hover': '#fbfcfd',
  muted: MUTED,
  'surface-2': '#f2f3f0',

  // Solid-blue informational action (secondary button).
  info: '#2563EB',
  'info-hover': '#1d4ed8',

  // Status tones: DEFAULT tints a chip's background and border, `ink` is the
  // readable (WCAG AA) text colour on that tint.
  ok: OK,
  warn: WARN,
  danger: DANGER,

  // Affinity — how well something fits the reader. Same hues as ok/danger,
  // plus an intensity axis:
  //   ink         readable text on a light tint of the direction
  //   ink-strong  one step darker, for the outer band of a five-step scale
  //   on-navy     a light tint of the hue for use on the dark chrome
  fit: {
    yes: {
      DEFAULT: OK.DEFAULT,
      ink: OK.ink,
      'ink-strong': '#14532d',
      'on-navy': '#bbf7d0',
    },
    no: {
      DEFAULT: DANGER.DEFAULT,
      ink: DANGER.ink,
      'ink-strong': '#7f1d1d',
      'on-navy': '#fecaca',
    },
  },

  // Checklist states. Deliberately no red: "short" is amber, it asks for more
  // rather than reporting a fault.
  setup: {
    done: '#16a34a',
    'done-ink': '#15803d',
    next: '#1f6f9c',
    'next-line': '#6cb6e4',
    'next-bg': '#f2f8fd',
    'next-ink': '#55748a',
    open: '#c3c8d0',
    short: '#b4761a',
    'short-line': '#e0a92b',
    'short-ink': '#8a5a08',
    'short-bg': '#fffbeb',
  },

  // ── Semantic names (added in @anqer/tokens) ────────────────────────────────

  // The orange of the logo. For the logo only — never for UI.
  'brand-mark': '#ed3500',

  // Cherry: the deep red that accompanies `brand` — a complementary accent,
  // not a second brand red and not an error colour.
  cherry: '#9b1b3b',

  // The clear name for `accent`: the interactive blue of links, focus rings
  // and selected states.
  action: { DEFAULT: ACCENT.DEFAULT, ink: ACCENT.ink },

  // Surfaces: the card, the wash it sits on, and the well a bar or track cuts
  // into it.
  surface: {
    chrome: '#ffffff',
    wash: '#f4f6f9',
    well: '#f1f3f7',
  },

  // Rules (borders and dividers), heaviest first.
  rule: {
    strong: '#c9d0d9',
    hairline: '#e4e7ec',
    soft: '#e2e6eb',
    'hairline-soft': LINE,
  },

  // Ink (text), heaviest to faintest. `ink` is for headings and figures that
  // sit forward of the body copy; `ink-chrome` is the everyday text colour and
  // the navy that dresses controls.
  ink: {
    DEFAULT: NAVY,
    chrome: NAVY_INK,
    body: '#39424f',
    muted: '#5b6673',
    // Secondary text: the step between `muted` and `faint` (captions, meta lines).
    secondary: '#6e6e73',
    faint: MUTED,
    dim: '#8a939f',
    fainter: '#9aa3ae',
    dimmer: '#b3b8c0',
  },

  // The solid status green used for glyphs and icons (a step darker than the
  // `ok` chip tint).
  'ok-strong': '#16a34a',
};

// Colours additionally published as bare `R G B` triplets in tokens.css
// (`--anqer-color-brand-rgb: 228 30 6`), for `rgb(var(--…-rgb) / 0.08)`.
export const rgbTriplets = ['brand', 'ink'];

// ── Typography ───────────────────────────────────────────────────────────────

export const fontFamily = {
  sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
};

// Tailwind's default type scale (sm 14, base 16, xl 20, 2xl 24, …) plus ONE
// step below `xs`. The line-height travels with the size.
export const fontSize = {
  '2xs': { size: '0.6875rem', lineHeight: '1.45' },
};

// ── Layout ───────────────────────────────────────────────────────────────────

// Stacking order of the app's layers, lowest first.
export const zIndex = {
  bar: '60',
  rail: '70',
  drawer: '80',
  modal: '90',
  viewer: '100',
};

// iOS safe-area insets (with `viewport-fit=cover`). Zero on desktop.
export const spacing = {
  'safe-t': 'env(safe-area-inset-top)',
  'safe-b': 'env(safe-area-inset-bottom)',
  'safe-l': 'env(safe-area-inset-left)',
  'safe-r': 'env(safe-area-inset-right)',
};

// ── Motion ───────────────────────────────────────────────────────────────────
// Tailwind-only (keyframes cannot be expressed as custom properties).

export const keyframes = {
  // A short hop on progress — 350 ms, then quiet again.
  'setup-pop': {
    '0%': { transform: 'scale(0.6) rotate(-12deg)' },
    '60%': { transform: 'scale(1.18) rotate(6deg)' },
    '100%': { transform: 'scale(1) rotate(0)' },
  },
  // Wobble and brand-red glow in ONE keyframe set, because one `animate-*`
  // utility carries one animation.
  'notice-me': {
    '0%, 100%': {
      transform: 'rotate(0deg)',
      boxShadow: '0 0 0 0 rgba(228, 30, 6, 0)',
    },
    '15%': {
      transform: 'rotate(-2.5deg)',
      boxShadow: '0 0 0 4px rgba(228, 30, 6, 0.25)',
    },
    '40%': {
      transform: 'rotate(2.5deg)',
      boxShadow: '0 0 16px 5px rgba(228, 30, 6, 0.35)',
    },
    '65%': {
      transform: 'rotate(-1.5deg)',
      boxShadow: '0 0 0 4px rgba(228, 30, 6, 0.25)',
    },
    '85%': { transform: 'rotate(1deg)' },
  },
};

export const animation = {
  'setup-pop': 'setup-pop 0.35s ease',
  'notice-me': 'notice-me 0.9s ease-in-out 2',
};

export default {
  color,
  rgbTriplets,
  fontFamily,
  fontSize,
  zIndex,
  spacing,
  keyframes,
  animation,
};
