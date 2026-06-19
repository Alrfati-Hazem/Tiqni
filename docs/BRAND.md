# Tiqni — Brand & Design System

> The name **Tiqni** draws on the Arabic root for *certainty, confidence, and trust* (تِقْني / يقين). Every brand decision should radiate **trust, precision, and technical excellence**.

---

## 1. Brand personality

| Trait | How it shows up |
|---|---|
| Trust | Calm, steady palette; clear claims; no hype; founder transparency |
| Precision | Tight grid, exact spacing scale, mono accents for "engineering" cues |
| Innovation | Subtle motion, gradient accents, modern sans typography |
| Professionalism | Generous whitespace, restrained color, enterprise tone |
| Reliability | Consistent components, predictable layouts |

**Voice:** confident, plain, senior. We *explain*, we don't *sell*. Short sentences. No "cutting-edge synergy" filler.

---

## 2. Logo concept

- **Wordmark-first**: `Tiqni` set in the display typeface (Sora), medium weight, slightly tightened tracking.
- **Mark**: a geometric monogram from the letter **T** built as two precise strokes forming a checkmark/anchor — reads as *certainty confirmed* and *a stable point*. Keep it inside a rounded square or as a standalone glyph.
- Construction: 24×24 grid, 2px–3px stroke ratio, single accent color or the blue→cyan gradient on dark.
- Clearspace = height of the "T". Min size: 20px (mark), 80px (wordmark).
- Variants: full-color on light, white on dark, mono black, mono white.

> Implemented in code as `components/Logo.tsx` (inline SVG, no external asset).

---

## 3. Color system

Premium, minimal, enterprise. Deep ink base + one confident blue + a cyan lift for gradients. Neutrals do most of the work.

### Core
| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#070B16` | Page background (dark sections), deepest text |
| `ink-900` | `#0B1120` | Primary dark surface |
| `ink-800` | `#111A2E` | Cards on dark |
| `ink-700` | `#1C2740` | Borders on dark |
| `brand-600` | `#2563EB` | Primary brand blue (CTAs, links) |
| `brand-500` | `#3B82F6` | Hover / lighter brand |
| `cyan-400` | `#22D3EE` | Gradient lift, accents, focus glow |

### Neutrals (light UI)
| Token | Hex | Use |
|---|---|---|
| `paper` | `#FFFFFF` | Light background |
| `mist` | `#F6F8FB` | Section alt background |
| `slate-200` | `#E2E8F0` | Borders, dividers |
| `slate-500` | `#64748B` | Secondary text |
| `slate-700` | `#334155` | Body text on light |
| `slate-900` | `#0F172A` | Headings on light |

### Signals
- Success `#10B981` · Warning `#F59E0B` · Error `#EF4444`

### Gradients
- **Brand gradient**: `linear-gradient(135deg, #2563EB 0%, #22D3EE 100%)` — hero accents, mark, key CTAs only (use sparingly).
- **Glow**: radial `#3B82F6` at low opacity behind hero / cards on dark.

### Rules
- Default to neutrals. Blue = action & emphasis only.
- Gradient is a seasoning, never a sauce. Max one large gradient surface per viewport.
- AA contrast minimum everywhere; AAA for body text where possible.

---

## 4. Typography

Self-hosted via `next/font` (no layout shift, no external CDN at runtime).

- **Display / headings:** `Sora` — geometric, modern, confident. Weights 500/600/700.
- **Body / UI:** `Inter` — neutral, highly legible. Weights 400/500/600.
- **Mono accent:** `JetBrains Mono` — labels, code, "engineering" eyebrow tags, stats. Weight 400/500.

### Type scale (desktop / mobile)
| Role | Size | Weight | Tracking |
|---|---|---|---|
| Display XL (hero H1) | 60 / 38 | 700 | -0.02em |
| H1 | 48 / 32 | 700 | -0.02em |
| H2 | 36 / 26 | 600 | -0.01em |
| H3 | 24 / 20 | 600 | -0.01em |
| Lead | 20 / 18 | 400 | 0 |
| Body | 16 | 400 | 0 |
| Small | 14 | 400 | 0 |
| Eyebrow (mono) | 13 | 500 | 0.12em, uppercase |

Line-height: headings 1.1–1.2, body 1.6.

---

## 5. Icon style

- **Lucide** icon set — thin, geometric, 1.5–2px stroke, consistent with Sora.
- Size 20–24px inline, 32–40px in feature cards.
- Single-color (slate or brand); never multicolor. Optional gradient stroke for hero feature highlights only.

## 6. Illustration / imagery style

- **Avoid stock-photo clichés** (handshakes, generic offices).
- Prefer: abstract geometric compositions, subtle grid/dot fields, blueprint-style line art, soft gradient meshes, product UI mockups (dashboards, app frames).
- If photography: real, desaturated, cool-toned, high quality; founders' real headshots.
- Decorative layer: faint dot-grid, hairline borders, soft glows on dark.

## 7. UI style

- **Surfaces:** large radius `16px` cards, `12px` inputs/buttons, hairline `1px` borders, soft shadows (low spread, low opacity).
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **Container:** max-width 1200px, 24px gutters (16px mobile).
- **Buttons:** primary = brand-600 solid; secondary = ghost with border; tertiary = text link with arrow.
- **Sections** alternate `paper` ↔ `mist`; high-impact sections on `ink-900` with grid/glow.
- **States:** clear focus ring (cyan glow), hover lift on cards, smooth 150–250ms transitions.

## 8. Motion & interaction

- Entrance: fade + 8–16px rise on scroll (IntersectionObserver / Framer Motion), staggered ~60ms.
- Hover: cards lift 2–4px + border brighten; buttons subtle scale 1.02.
- Hero: slow gradient/grid drift, optional typed or counting stats.
- Respect `prefers-reduced-motion` — disable transforms, keep opacity only.
- Keep it subtle. Premium = restraint.

## 9. Accessibility

- Semantic HTML, one H1/page, logical heading order.
- AA contrast, visible focus, keyboard nav, skip-link, alt text, aria labels on icon buttons.
- Target sizes ≥ 44px. Forms: labels + error text, not placeholder-only.
