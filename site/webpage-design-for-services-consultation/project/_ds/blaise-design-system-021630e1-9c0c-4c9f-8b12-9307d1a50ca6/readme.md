# Blaise Design System

Design system for **Blaise Technology LLC** ("Blaise") — a technology consultancy based in the Republic of Panama that builds and ships applied-AI, cloud and compliance software for Latin American businesses.

---

## 1. Company & product context

Blaise positions itself as a builder, not an advisor: it sells working software it has implemented itself. Five surfaces make up the portfolio.

| Product | What it is | Status / URL |
|---|---|---|
| **Dot** | Customer-service agents powered by LLMs | Not public yet — preview lambda URL supplied by the client |
| **canalfact** | Electronic invoicing for Panama (DGI compliance); a *bridge* to the government-authorised providers (PACs), not a PAC itself | https://canalfact.blaisetechnology.com |
| **Iris** | Web data extraction (logistics and e-commerce data) | http://iris.blaisetechnology.com |
| **Techub** | Technology store (Shopify) | https://techubpa.myshopify.com |
| **Cloud & Innovation** | AWS cloud work, software development, 1:1 consulting calls | Sold via direct conversation |

Capability statement given by the client: *AI solutions (LLMs, computer vision), AWS cloud, custom software development, and electronic invoicing for tax reporting in Panama.*

### Sources used to build this system
- **Brand colour sheet** pasted by the client (roles in Spanish: Teal marca, Azul medio, Azul marca, Acento, Fondo, Panel, Texto, Texto suave, Borde, Éxito, Error + the brand gradient).
- **Two logo screenshots** uploaded by the client (`uploads/logo_files-*.png`, copied to `assets/`). Low-resolution PNG; **no vector master was supplied**.
- **canalfact marketing site** — https://canalfact.blaisetechnology.com — read in full and used as the ground truth for voice, tone, terminology and product copy. All Spanish sample copy in this system comes from or is modelled on that page.
- No codebase, Figma file or deck was attached. No component inventory existed, so the component set below is an authored standard set (see §7).

**Known gaps — please supply if you have them:** vector logo, brand font files, the Dot / Iris / Techub interfaces (only canalfact was publicly readable), and any existing sales deck.

---

## 2. Content fundamentals

The voice is set by canalfact and should carry across everything Blaise writes.

**Language.** Spanish first (es-PA), English second. Product names stay lowercase or as-trademarked: `canalfact` (always lowercase, even sentence-initial), **Dot**, **Iris**, **Techub**, **Blaise**.

**Person.** Second-person singular **tú**, never *usted*, never *ustedes*. Blaise speaks as **nosotros**.
> "Emite tus facturas electrónicas de forma sencilla y cumple con la ley."
> "Tú eliges con quién trabajar; nosotros hacemos la conexión."

**Register.** Plain, reassuring, jargon-free. Technical terms appear only when they are legally required (DGI, PAC, ITBMS, CUFE, RUC) and are explained the first time. Complexity is named and then dismissed: *"sin complicaciones"*, *"sin que tengas que preocuparte por los detalles"*, *"Así de simple"*.

**Sentence shape.** Short declaratives, often two clauses joined by a semicolon or colon that reframes:
> "canalfact no es un proveedor de facturación: es el puente que conecta tu negocio con los proveedores autorizados."

**Headings.** Sentence case, never Title Case, never ALL CAPS. Often a question: *"¿Cómo funciona la factura electrónica?"*. Eyebrows above headings are 2–3 words, uppercase with 0.14em tracking: *"Qué te ofrece"*, *"En 4 pasos"*, *"Garantías"*.

**Benefit before mechanism.** Every feature card leads with what the reader gets, then how it works.

**Numbers & currency.** Balboa as `B/.4,285.00`. Percentages inline (`ITBMS 7%`). Dates `20/02/2026`. Invoice IDs and RUC in mono: `FE-001-2026-000412`, `8-NT-2-0048192`.

**Legal claims are hedged precisely.** Blaise never claims to be a DGI provider. Compliance sentences always name the actual chain: negocio → canalfact → proveedor autorizado → DGI.

**CTAs.** Verb-first, two or three words: *Registrar gratis · Solicitar información · Ver planes · Acceder a la plataforma · Contáctanos*.

**Emoji.** The live canalfact site uses emoji as category glyphs (🧾 ✅ 🔌 📊 🛡️ ⚠️). **This design system does not carry that forward** — every glyph here is a Lucide icon via the `Icon` component, which keeps colour, stroke weight and size consistent and prints reliably in decks and PDFs. If you want the emoji look preserved on canalfact marketing pages, say so and I will add an emoji-glyph variant. Never mix emoji and `Icon` in one list.

**Avoid.** Hype ("revolucionario", "de clase mundial"), exclamation marks, English filler in Spanish copy ("nuestro stack"), and promising DGI outcomes Blaise does not control.

---

## 3. Visual foundations

**Palette.** Cool, corporate, navy-based. Three brand hues run teal → sky → blue (#5FD4B7 → #50A0D5 → #446BF4) with #3F62E0 as the pressed/accent step. Every neutral is navy-tinted (#f4f7fb page, #ffffff panel, #dfe6f3 border, #16203a text) — there are no pure greys in the system. Semantics: éxito #10996F, error #DC3F4A, plus an added amber #E0A01F for warnings and #50A0D5 reused for info.

**Colour temperature of imagery.** Cool and clean: daylight, blue-grey interiors, screen glow. No warm filters, no heavy grain, no duotone. Product screenshots sit on `--surface-page` inside a panel with `--shadow-lg`.

**Type.** Manrope (display/UI, 600–800, tight negative tracking to −0.028em) over Source Sans 3 (body, 400/600, generous 1.62 line-height). JetBrains Mono for identifiers and money. **Both are Google Fonts substitutes — no brand font files were supplied.** Manrope was chosen because the Blaise wordmark is a geometric humanist sans with a single-storey `a` and tight spacing; if you have the real face, send it and I will swap it in one file (`tokens/fonts.css`).

**Layout.** 1160px max content width, 32px page gutter, 80px between sections, 24px inside cards. 4px spacing base; the used steps are 4/8/12/16/24/32/48/64/80. Nothing is fixed-position except the top nav and toasts (bottom-right). Slides are a fixed 1280×720 with 72px side margins.

**Backgrounds.** Flat colour only — `--surface-page` for pages, `--surface-panel` for cards, `--surface-inverse` (#16203a) for section dividers, footers and deck openers. No repeating patterns, no textures, no hand-drawn illustration, no full-bleed photography as a default. The gradient is **never** a page background.

**The gradient is an accent, not a surface.** Permitted: a 3–6px rail on a card top edge or slide top edge; a 4px vertical rail on a navy divider; one gradient button per screen; a soft off-canvas glow at 16% opacity behind a dark hero. Forbidden: full-bleed gradient backgrounds, gradient text, gradient behind body copy, two gradient elements in one view.

**Borders.** 1px, `--line-default` (#dfe6f3) on light, `--line-inverse` (#2c3757) on navy. Dividers inside panels drop to `--line-subtle`. No 2px borders anywhere except the 2px active tab rule.

**Corner radii.** 4 (checkbox) · 6 (tag, small control) · 10 (button, input, select) · 14 (card, toast) · 20 (modal, slide panel) · 28 (large marketing panel) · pill (badges only).

**Cards.** White, 14px radius, 1px `--line-default`, `--shadow-sm`. That is the default everywhere. Optional 3px gradient rail on the top edge for one hero card. **Never a coloured left border.**

**Shadows.** Five navy-tinted steps (never black): xs hairline, sm resting cards, md raised panels, lg hover and toasts, xl modals. `--shadow-brand` (blue, 22% alpha) exists only to sit under a gradient button. Inner shadows are used once — `--shadow-inset-line` for a sticky header's bottom edge.

**Transparency & blur.** Rare and purposeful: the modal scrim (`rgba(13,21,38,.42)` + 3px blur), inverse buttons (white at 8%/16%), and the hero glow. No frosted-glass panels, no translucent cards.

**Motion.** Short and flat. 80ms press, 140ms hover/colour, 220ms toggles and elevation, 380ms modals. Default easing `cubic-bezier(.2,.6,.25,1)` — **no bounce, no overshoot, no spring**. Entrances fade + 8px rise, never scale-up. Respect `prefers-reduced-motion`.

**Hover states.** Solid buttons darken one step (#446BF4 → #3F62E0). Secondary buttons keep their fill and darken the *border* to `--line-strong`. Ghost controls fill with `--surface-sunken`. Cards marked `interactive` lift 2px and go from `--shadow-sm` to `--shadow-lg`. Links darken to `--text-link-hover` and underline. Never opacity-fade on hover — it drops contrast.

**Press states.** 1px downward translate plus the darkest step (#2F4BB4). No scale-down.

**Focus.** Always visible: 3px `rgba(125,146,247,.45)` ring, never removed.

**Protection.** Text over imagery uses a solid navy panel or a card, not a gradient scrim — Blaise does not layer type directly on photos.

**Contrast floor.** Body text 4.5:1 minimum. `--text-faint` (#8492ae, 3.1:1) is for 17px+ or non-essential metadata only. `--action-primary` on navy is 2.9:1 and is **banned as text on dark**; use `--brand-teal` (8.9:1) or white there.

---

## 4. Iconography

- **No proprietary icon set, icon font or SVG sprite was supplied.** Substitute in use: **Lucide** (2px stroke, rounded caps, 24px grid), loaded per-glyph from `unpkg.com/lucide-static@0.544.0` and rendered as a CSS mask by the `Icon` component so glyphs inherit `currentColor`. **Flagged for your review** — if Blaise has a real icon set, send it and `components/brand/Icon.jsx` is the only file that changes.
- **Sizes:** 16px inside buttons, 20px inline with body text, 22–24px for feature/slide glyphs, 28px maximum. Never scale a glyph past 32px — use an illustration instead (none exist yet).
- **Colour:** `currentColor` by default. Feature glyphs take `--sky-400` on light grounds and `--brand-teal` on navy. Status glyphs take their semantic colour.
- **Emoji:** used on the live canalfact site as category markers; excluded from this system (see §2). Do not mix the two.
- **Unicode as icons:** only `×` for dismiss affordances (Tag, Toast) and `·` as a metadata separator. No arrows, checkmarks or bullets drawn from Unicode — those are Lucide glyphs.
- **Logo files:** `assets/blaise-logo-lockup.png` and `assets/blaise-mark.png`, both low-resolution client screenshots. **No logo was drawn or reconstructed.** Where the PNG would look soft (small sizes, navy grounds, print), `Logo variant="wordmark"` renders "Blaise" in Manrope 800 instead. The mark's teal in the supplied PNG reads ≈ #00C4A7, noticeably more saturated than the #5FD4B7 "Teal marca" on the brand sheet — worth reconciling.

---

## 5. Index

```
styles.css              global entry — @import list only
tokens/                 fonts · colors · typography · spacing · radius · shadow · motion · base
components/             reusable primitives (see §7)
guidelines/             17 foundation specimen cards (Colors · Type · Spacing · Brand)
slides/                 sample deck slides (see §8)
templates/sales-deck/   copyable three-slide deck template
assets/                 blaise-logo-lockup.png · blaise-mark.png
readme.md               this file
SKILL.md                Agent Skills front-matter for use in Claude Code
thumbnail.html          homepage tile
```

---

## 6. Tokens

All CSS custom properties live on `:root` and are reachable from `styles.css`. Base ramps (`--teal-*`, `--sky-*`, `--blue-*`, `--navy-*`) plus semantic aliases (`--surface-panel`, `--text-muted`, `--action-primary`, `--status-success`, `--line-default`, `--radius-lg`, `--shadow-md`, `--dur-base`, `--ease-standard`). **Use the semantic alias in product code**; reach for a ramp value only when defining a new semantic token.

---

## 7. Components

No source defined a component inventory, so this is an authored standard set sized to Blaise's needs.

**Actions** — `Button`, `IconButton`
**Forms** — `Field`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
**Surfaces** — `Card`, `Dialog`
**Data display** — `Badge`, `Tag`
**Navigation** — `Tabs`
**Feedback** — `Toast`, `Tooltip`
**Brand** — `Logo`, `Icon`

Each lives in `components/<group>/` with `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (what & when, usage example, variants). Every directory has one `@dsCard` HTML showing its states.

**Intentional additions**
- `Icon` — a wrapper around the substituted Lucide set, so a future icon swap touches one file.
- `Logo` — encapsulates the low-res-PNG caveat and the type-only wordmark fallback.
- `Field` — label/hint/error wrapper, so the five form controls stay presentational.

---

## 8. Slides

`slides/` holds `SlideFrame` (1280×720 canvas, gradient rail, Blaise signature, footer row) plus the three slide types requested: `TitleSlide` (Portada), `ProblemSolutionSlide` (Problema → solución) and `ClosingSlide` (Cierre / contacto). Decks mix dark openers/dividers with light content slides. `templates/sales-deck/` is the copyable starting point.

Slide type floor: 24px minimum text at 1280×720 (this deck's smallest is 13px footer metadata, which scales to 19.5px at 1920 — keep body copy at 14.5px+).
