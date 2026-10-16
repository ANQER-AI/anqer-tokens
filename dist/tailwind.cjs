// @anqer/tokens 0.4.0 — GENERATED from tokens.mjs by scripts/build.mjs. Do not edit.
// Tailwind CSS 3.4 preset: presets: [require('@anqer/tokens/tailwind')]
'use strict';

module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "navy": "#09101b",
        "navy-ink": "#1e2a3a",
        "navy-hover": "#2a3a4d",
        "brand": "#e41e06",
        "brand-hover": "#c91a05",
        "accent": {
          "DEFAULT": "#3d8eb9",
          "ink": "#2f6f92"
        },
        "spark": "#f59e0b",
        "canvas": "#f9fafb",
        "th-bg": "#f6f7f9",
        "line": "#ebedf0",
        "row-hover": "#fbfcfd",
        "muted": "#8b93a1",
        "surface-2": "#f2f3f0",
        "info": "#2563EB",
        "info-hover": "#1d4ed8",
        "ok": {
          "DEFAULT": "#22c55e",
          "ink": "#166534"
        },
        "warn": {
          "DEFAULT": "#eab308",
          "ink": "#854d0e"
        },
        "danger": {
          "DEFAULT": "#ef4444",
          "ink": "#991b1b"
        },
        "fit": {
          "yes": {
            "DEFAULT": "#22c55e",
            "ink": "#166534",
            "ink-strong": "#14532d",
            "on-navy": "#bbf7d0"
          },
          "no": {
            "DEFAULT": "#ef4444",
            "ink": "#991b1b",
            "ink-strong": "#7f1d1d",
            "on-navy": "#fecaca"
          }
        },
        "setup": {
          "done": "#16a34a",
          "done-ink": "#15803d",
          "next": "#1f6f9c",
          "next-line": "#6cb6e4",
          "next-bg": "#f2f8fd",
          "next-ink": "#55748a",
          "open": "#c3c8d0",
          "short": "#b4761a",
          "short-line": "#e0a92b",
          "short-ink": "#8a5a08",
          "short-bg": "#fffbeb"
        },
        "brand-mark": "#ed3500",
        "cherry": "#9b1b3b",
        "action": {
          "DEFAULT": "#3d8eb9",
          "ink": "#2f6f92"
        },
        "surface": {
          "chrome": "#ffffff",
          "wash": "#f4f6f9",
          "well": "#f1f3f7"
        },
        "rule": {
          "strong": "#c9d0d9",
          "hairline": "#e4e7ec",
          "soft": "#e2e6eb",
          "hairline-soft": "#ebedf0"
        },
        "ink": {
          "DEFAULT": "#09101b",
          "chrome": "#1e2a3a",
          "body": "#39424f",
          "muted": "#5b6673",
          "secondary": "#6e6e73",
          "faint": "#8b93a1",
          "dim": "#8a939f",
          "fainter": "#9aa3ae",
          "dimmer": "#b3b8c0"
        },
        "ok-strong": "#16a34a"
      },
      "fontFamily": {
        "sans": [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        "body": [
          "Fira Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        "display": [
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      },
      "fontSize": {
        "2xs": [
          "0.6875rem",
          {
            "lineHeight": "1.45"
          }
        ]
      },
      "borderRadius": {
        "button": "0.5rem"
      },
      "keyframes": {
        "setup-pop": {
          "0%": {
            "transform": "scale(0.6) rotate(-12deg)"
          },
          "60%": {
            "transform": "scale(1.18) rotate(6deg)"
          },
          "100%": {
            "transform": "scale(1) rotate(0)"
          }
        },
        "notice-me": {
          "0%, 100%": {
            "transform": "rotate(0deg)",
            "boxShadow": "0 0 0 0 rgba(228, 30, 6, 0)"
          },
          "15%": {
            "transform": "rotate(-2.5deg)",
            "boxShadow": "0 0 0 4px rgba(228, 30, 6, 0.25)"
          },
          "40%": {
            "transform": "rotate(2.5deg)",
            "boxShadow": "0 0 16px 5px rgba(228, 30, 6, 0.35)"
          },
          "65%": {
            "transform": "rotate(-1.5deg)",
            "boxShadow": "0 0 0 4px rgba(228, 30, 6, 0.25)"
          },
          "85%": {
            "transform": "rotate(1deg)"
          }
        }
      },
      "animation": {
        "setup-pop": "setup-pop 0.35s ease",
        "notice-me": "notice-me 0.9s ease-in-out 2"
      },
      "spacing": {
        "safe-t": "env(safe-area-inset-top)",
        "safe-b": "env(safe-area-inset-bottom)",
        "safe-l": "env(safe-area-inset-left)",
        "safe-r": "env(safe-area-inset-right)"
      },
      "zIndex": {
        "bar": "60",
        "rail": "70",
        "drawer": "80",
        "modal": "90",
        "viewer": "100"
      }
    }
  }
};
