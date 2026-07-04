# Brand Identity — Pablo Gamero

> Canonical source of truth for the visual and verbal identity used across
> pablogamero.com and Pablo's own products (Limero, Dibs, Submoney, Pubmefy…).
>
> **Pointing an AI/agent here?** Read this whole file before generating any UI,
> copy, or design for a Pablo Gamero property. The tokens and rules below are
> binding; when in doubt, prefer the calmer, quieter option.

---

## 1. Who this is

Pablo Gamero — a builder who **learns by building**. Runs Limero (reducing
friction in real businesses with technology) and ships small, problem-specific
products on the side. The website is not a pitch or a portfolio; it's an honest,
dated snapshot of what he's working on, changing, and learning.

**One line:** *I build problem-specific products, and I document the process.*

**Audience:** other builders, potential collaborators, curious visitors, and the
occasional client — but the site is written for a peer, never a lead.

---

## 2. Voice & tone

**Calm · considered · minimal.** Quiet confidence, no hype.

- First person, present tense, active voice.
- Short sentences. Say the true thing plainly.
- No buzzwords, no growth-hacky language, no exclamation marks (save them for
  genuine surprise, roughly never).
- Honest about state: "shipped", "paused", "discontinued" — not "coming soon"
  theater. Dated snapshots beat evergreen claims.
- Show, don't sell. Describe what a thing *is* and what he *learned*, not why
  you should buy it.

**Do**
- "A simple debt tracker."
- "Not a portfolio or a pitch — just an honest snapshot over time."
- "Things I've built, am building, or discontinued."

**Don't**
- "Revolutionize the way you track debt!"
- "The #1 tool trusted by thousands."
- "Unlock your productivity today 🚀"

---

## 3. Color

The brand lives in a **dark teal world**. Teal is the signature; a **warm coral
is the single accent, used rarely** — it's a spark, not a system color. If coral
appears more than once or twice on a screen, remove some.

### Core tokens

| Token              | Hex        | Role |
|--------------------|------------|------|
| `--ink`            | `#001414`  | Primary background (deep teal-black) |
| `--surface`        | `#0C2624`  | Raised surfaces, cards |
| `--border`         | `#1C3B38`  | Hairlines, dividers (teal-tinted, never pure grey) |
| `--teal`           | `#61CCBA`  | **Signature.** Links, brand marks, primary accent |
| `--teal-deep`      | `#3E9E8E`  | Hover/pressed teal, quieter teal fills |
| `--blue`           | `#4B98CA`  | Cool support accent, used sparingly |
| `--coral`          | `#FF7A5C`  | **Warm spark.** Rare emphasis only |
| `--coral-soft`     | `#FFA98F`  | Coral on dark where full coral is too hot |
| `--text`           | `#F1F1F1`  | Primary text |
| `--text-muted`     | `#8CA3A0`  | Secondary text (teal-biased grey — chosen, not default) |
| `--text-faint`     | `#5A716E`  | Captions, metadata, disabled |

### Light ground (for products that need it)

| Token              | Hex        | Role |
|--------------------|------------|------|
| `--paper`          | `#EFF3F2`  | Light background (cool near-white, teal-biased) |
| `--paper-text`     | `#0A1F1D`  | Text on light |
| `--paper-muted`    | `#4A5F5C`  | Secondary text on light |

Teal `#61CCBA` and coral `#FF7A5C` are the accents on **both** grounds; deepen
teal toward `--teal-deep` on light backgrounds for enough contrast on text/links.

### Status colors (a separate, functional layer)

The live status pill uses semantic colors that are **not** part of the brand
accent palette — don't reuse them decoratively:

`building`/`shipping` → green · `debugging` → red · `planning`/`researching`/
`learning`/`experimenting` → blue · `writing` → purple · `client work`/
`client meeting` → orange · `admin` → yellow · `recharging` → grey.

---

## 4. Typography

Two roles, wired properly (both must be **self-hosted** — see note).

- **Display — Fraunces** (variable serif). Headings, big statements. Warm and
  writerly with quiet character; keep its `wonk`/soft axes low for calm.
  Approved alternates: Instrument Serif, Newsreader.
- **Body — Satoshi** (geometric sans). All running text, UI, labels.
- **Data — system monospace** (`ui-monospace, "SF Mono", monospace`). Hex codes,
  code, tabular figures. Use `font-variant-numeric: tabular-nums` for aligned digits.

### Scale

| Role        | Face     | Size / line-height | Weight | Notes |
|-------------|----------|--------------------|--------|-------|
| Display     | Fraunces | 3rem / 1.1         | 400–500| Hero only; `text-wrap: balance`, tracking `-0.02em` |
| H1          | Fraunces | 2.25rem / 1.15     | 500    | `text-wrap: balance` |
| H2          | Fraunces | 1.6rem / 1.2       | 500    | |
| H3          | Satoshi  | 1.15rem / 1.5      | 600    | |
| Body        | Satoshi  | 1rem / 1.65        | 400    | Keep measure ≤ ~65ch |
| Small       | Satoshi  | 0.875rem / 1.5     | 400    | |
| Eyebrow/label | Satoshi| 0.75rem / 1        | 600    | UPPERCASE, tracking `0.12em`, `--text-muted` |
| Data        | mono     | 0.85rem            | 400    | tabular-nums |

> **Self-hosting note:** `MainLayout.astro` references `"Satoshi"` with no
> `@font-face` and no font file, so today the site falls back to the system
> sans. Both faces need a subset `.woff2` in `/public/fonts` with `@font-face`
> and `font-display: swap` to actually render as designed.

---

## 5. Shape & motion

**Radius:** `--r-sm: 8px` · `--r-md: 12px` · `--r-lg: 16px` · `--r-pill: 9999px`.
Icons/thumbnails use `--r-md`; cards `--r-lg`; tags/status `--r-pill`.

**Borders:** 1px, teal-tinted — `1px solid rgba(97, 204, 186, 0.15)`. Never pure
grey or pure white hairlines.

**Motion:** subtle and purposeful.
- Durations: `150ms` (micro), `300ms` (standard), `500ms` (deliberate).
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Signature moment:** the homepage project-icon fan (icons rotate/spread on
  hover). One delight per view — don't add competing animations.
- Always honor `prefers-reduced-motion: reduce`.

---

## 6. Applying this

- Accent discipline: teal carries structure and interaction; coral appears once
  per view at most; blue is a rare cool second.
- Neutrals are teal-biased greys, never `#808080`.
- Prefer whitespace over dividers; prefer a hairline over a box.
- Copy passes the "peer, not lead" test before it ships.

When generating anything for a Pablo Gamero property, load this file and follow
sections 2–5 exactly.
