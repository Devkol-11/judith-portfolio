# Theme and Design Guide

This is the single design guide for the portfolio. Every page, component and style must follow it. If something here conflicts with a habit or a default, this file wins. If something here conflicts with the user's brief, the brief wins and this file gets updated.

Status: approved 2026-11-24. First build done; her real content is still placeholder (see section 12).

---

## 1. The brief in one paragraph

A 1–2 page portfolio for a video editor. The whole page background is a repeating pattern of cartoon roses. On top of the roses sit solid, warm-coloured panels, drawn like cartoon stickers (thick ink outlines, solid offset shadows, slightly wobbly edges). The first panel is the hero (who she is). Below it is a set of cards, one per video, each linking out to Instagram or YouTube with a short description underneath. It must not look like a regular SaaS website (no thin grey borders, no soft blurred shadows, no perfectly even rounded rectangles).

**Design read** (the format the Taste skill asks for):
Reading this as: a creative portfolio for clients and collaborators who want to hire a video editor, with a hand-drawn cartoon sticker language, leaning toward native CSS + Tailwind v4 + Motion, with a custom-drawn rose pattern.

**Design dials** (Taste skill, scale 1–10):

| Dial | Value | Why |
| --- | --- | --- |
| Design variance (1 = perfectly symmetric, 10 = artsy chaos) | 7 | Hand-made and slightly off-grid, but the work must stay easy to scan |
| Motion intensity (1 = static, 10 = cinematic) | 5 | Playful press and hover feedback, one entrance moment, nothing looping |
| Visual density (1 = airy gallery, 10 = packed cockpit) | 3 | The roses already fill the background; panels need room to breathe |

**Impeccable mode:** "Experience" (portfolios and showcases). Her videos lead; the interface steps back.

---

## 2. Research findings

### 2.1 What the inspiration images give us

The five images in `inspo/` are realistic flower photos and prints, not cartoons. They give us the **colours**. The cartoon drawing style comes from the research in 2.2.

Colours were measured from the actual pixels (dominant-colour extraction and spot sampling), not guessed.

| Image | What it shows | Colours measured |
| --- | --- | --- |
| `1_flower.jpeg` | Mauve-pink lily on a dusty pink background | Background `#DCD0D2`, petals `#B37071` `#A85865` `#954156`, deep wine `#6B273B` `#501129`, stamen tan `#936348` |
| `2_flower.jpeg` | Sepia, almost monochrome hibiscus | Very dark oxblood `#360B0A` `#521718`, faded rose-brown `#976460` `#BC9895` |
| `3_flower.jpeg` | Deep navy hibiscus with gold flecks | Navy `#0B1526` `#102E4F`, mid blue `#406995`, gold centre `#8E7554` |
| `4_flower.jpeg` | Orange and magenta dahlia on halftone paper | Coral `#CC6952`, rose `#BA6364`, marigold `#E5A963`, plum-brown `#6A494B` |
| `5_flower.jpeg` | White daisy against a blue sky | Sky `#23384D` to `#41617B`, stem olive `#4E5236`, centre ochre `#794C15` |

**What these colours have in common:**

1. **Dusty rose and wine** appear in three of the five images (1, 2, 4). This is the strongest thread, and it fits a rose theme. It becomes the core of the palette.
2. **Marigold and gold** appear in four of the five (the lily's stamens, the dahlia, the gold flecks on the navy flower, the daisy centre). It is the one warm highlight that ties all the images together, so it becomes the **single accent colour**.
3. **Olive green** from the daisy stem gives the rose leaves a natural, earthy green.
4. **Navy and sky blue** (images 3 and 5) are strong in the images but are not earth tones. They are left out of the core palette (see Decision 3 in section 12).
5. **Image 4's halftone paper texture** (the visible print dots) is the clearest hint at a hand-made, printed feel. It supports adding a faint paper grain to the panels.

### 2.2 Websites with this style

A research pass looked for real, live sites in a hand-drawn or cartoon style. No single site combines everything we want (rose pattern + earth tones + sticker cards), so our style combines what each does best. "Verified" means the site's real stylesheet was downloaded and read; the rest were confirmed through articles or the page text.

1. **Gumroad** (gumroad.com). Verified. The best live example of the sticker card. Hard shadows with no blur (`4px 4px 0 #000`), and on hover the button moves up and left by `0.25rem` while its shadow grows, so it looks lifted off the page. Its colours are bright pinks and yellows, so we borrow the technique only.
2. **PaperCSS** (getpapercss.com). Verified. A free, open-source "hand-drawn" stylesheet. Its wobbly corners come from uneven `border-radius` values: `255px 15px 225px 15px / 15px 225px 15px 255px`. Borders are `2px solid`.
3. **Oatly** (oatly.com). Fonts verified. A brand known for crude hand-drawn doodles and chunky, friendly type (custom fonts Girdo and Margo).
4. **Hermès** (hermes.com). Its January 2026 relaunch used pen-and-ink illustrations by Linda Merad, with real scanned ink texture in the animation (reported by Fast Company and Creative Boom). Lesson: real texture is what makes "hand-made" believable. The live artwork may have changed since.
5. **Fishwife** (eatfishwife.com). Illustrated packaging-led site (drawings by Daniel Miller). Each section gets its own bold colour band. Lesson: solid colour blocks carry the illustration style.
6. **Rifle Paper Co.** (riflepaperco.com). Warm, painted floral patterns from original gouache paintings. Reference for how florals can feel warm rather than sweet.
7. **Rough.js** (roughjs.com) and **WobblyBox** (daverupert.com/2024/01/wobblybox). Code tools that draw sketchy, slightly bent lines and box frames. Useful if CSS wobble is not enough.
8. **Mentimeter rebrand** (Creative Boom). Wobbly black-line stick figures plus one colour, animated on hover. Lesson: line + one colour is enough.

**Techniques that repeat across these sites:**

1. One dark "ink" colour for every outline and shadow, never pure black.
2. Thick outlines: about 3px on big panels, 2px on small elements.
3. Solid offset shadows with no blur ("sticker" shadows).
4. Uneven corner radii, varied slightly per element so no two look stamped from the same mould.
5. A tiny tilt (about 1 degree) on cards that straightens on hover.
6. A faint paper or print texture on panels.
7. Text always sits on solid panels, never directly on a pattern.

### 2.3 What the four design skills require

| Skill | What it contributes to this guide |
| --- | --- |
| **Emil Kowalski** (`emil-design-eng`) | Motion rules: animate only `transform` and `opacity`; UI animations under 300ms; strong custom ease-out curves, never `ease-in`; pressed buttons shrink to about `scale(0.97)`; never animate from `scale(0)`; hover effects only on devices with a mouse; short stagger (30–80ms) between cards; reduced motion means gentler, not none |
| **Apple design** (`apple-design`) | Typography and restraint: big headings get tighter letter spacing, body text stays near 0; line height tight on big text, loose on body; sizes in `rem` so they follow the visitor's text-size setting; feedback on press, not on release; springs with no bounce by default; respect reduced motion and higher-contrast settings |
| **Taste** (`design-taste-frontend`) | Anti-generic rules: one accent colour locked for the whole page; one corner-shape system; no small uppercase label above every heading; no three identical cards as the page structure; hero fits in the first screen with max 4 text elements; hero needs a real visual (her photo or a video still), not just text; one label per action (do not say "Contact", "Get in touch" and "Hire me" on the same page); no em-dashes in visible copy |
| **Impeccable** (`impeccable`) | Quality checks: body text contrast at least 4.5:1, large text at least 3:1; real hover, focus, loading and empty states; theme the browser bits too (text selection colour, focus rings, scrollbar); one authored motion moment instead of scattered effects; "the brief wins", which is what allows sticker shadows here (it normally refuses them outside a deliberately cartoon world) |

**Two places where the skills' defaults are overridden by the brief, on purpose:**

1. **Warm earth-tone palette.** Taste normally bans the "cream + clay + espresso" palette as a lazy default. Here the user asked for warm earth tones and supplied the images, so it is allowed. To stay honest to the rule, none of the exact hex values Taste lists as banned are used; every colour below traces back to a measured image colour.
2. **Hard offset shadows.** Impeccable normally refuses `4px 4px 0` shadows unless the whole world is deliberately built that way. A cartoon sticker world is exactly that case.

---

## 3. Colour tokens

A **token** is a named colour (or size, or timing) that every component uses instead of typing the raw value. Change the token once and the whole site updates.

| Token | Hex | Role | Comes from |
| --- | --- | --- | --- |
| `blush` | `#EBDCD8` | Page background behind the roses | Lily background `#DCD0D2`, warmed slightly |
| `petal` | `#C98C88` | Rose petal fill in the background pattern | Lily petals `#B37071`, lightened |
| `petal-deep` | `#A85865` | Rose petal shading and pattern outlines | Lily petal `#A85865` (exact) |
| `leaf` | `#7A7650` | Rose leaves in the pattern | Daisy stem `#4E5236`, lightened |
| `paper` | `#F8EDE6` | Work card surface | Lightest rose tint of the lily background |
| `clay` | `#DDA594` | Hero panel surface | Between the dahlia coral `#CC6952` and rose-brown `#BC9895`, softened |
| `wine` | `#6B273B` | Headings, contact panel surface | Lily deep wine `#6B273B` (exact) |
| `sepia` | `#7A4A45` | Secondary text on `paper` only | Hibiscus rose-brown `#834947`, darkened |
| `ink` | `#3A1418` | All outlines, shadows and body text | Hibiscus oxblood `#360B0A`, nudged toward wine |
| `marigold` | `#E5A963` | The single accent: highlights, primary button, focus ring | Dahlia marigold `#E5A963` (exact) |
| `navy` | `#1F3E63` | Small detail only: the play badge on thumbnails and the handwritten note in the hero. Never a surface, never on `wine` (1.0:1) | Navy hibiscus `#214975`, darkened |

**Theme:** light only, locked for the whole page (Taste "theme lock"). See Decision 4 in section 12 about dark mode.

### 3.1 Approved text and background pairs

Contrast ratio measures how readable text is against what is behind it. The minimum is 4.5:1 for normal text and 3:1 for large text (24px and up, or 19px bold and up). All ratios below were calculated, not estimated.

| Text | On | Ratio | Use |
| --- | --- | --- | --- |
| `ink` | `paper` | 14.1 | Card body text |
| `ink` | `clay` | 7.6 | Hero text |
| `ink` | `marigold` | 7.9 | Primary button label |
| `ink` | `blush` | 12.2 | Any text that has to sit near the page edge (on a solid `blush` strip, never on roses) |
| `wine` | `paper` | 9.2 | Headings on cards |
| `wine` | `clay` | 5.0 | Headings in the hero |
| `sepia` | `paper` | 6.3 | Secondary text on cards (dates, platform name) |
| `paper` | `wine` | 9.2 | Text on the contact panel |
| `marigold` | `wine` | 5.2 | Accent text or links on the contact panel |
| `navy` | `clay` | 5.1 | Handwritten note in the hero |
| `paper` | `navy` | 9.5 | Play icon on the navy badge |

### 3.2 Banned pairs (fail contrast)

| Text | On | Ratio | Rule |
| --- | --- | --- | --- |
| `sepia` | `clay` | 3.4 | No secondary text in `sepia` on the hero; use `wine` |
| `ink` | `petal-deep` | 3.3 | Never put text on `petal-deep` |
| Any text | the rose pattern | varies | Never. All text sits on a solid panel |

The pattern colours are deliberately low contrast with each other (`petal` on `blush` is 2.1) so the roses read as texture and never compete with the panels.

---

## 4. Typography

All three fonts are on Google Fonts and were checked against the font list that ships with this Next.js version. Load them with `next/font/google` (self-hosted at build time, no external request), never a `<link>` tag.

| Role | Font | Weights | Why |
| --- | --- | --- | --- |
| Display (headings, her name) | **Caprasimo** | 400 (only weight) | Chunky, rounded, in the style of the classic Cooper font. Reads as cartoon and warm without looking childish |
| Body (descriptions, paragraphs) | **Nunito** | 400, 600, 800 (variable) | Rounded letter ends match the cartoon world; very readable at small sizes |
| Hand-written accent | **Caveat** | 500, 700 | Small captions and annotations only (for example a note next to her photo). Never paragraphs, never buttons |

Rejected and why: Fraunces (Taste bans it as an overused default), DynaPuff (too childish for a professional portfolio), Inter (Taste discourages it as the generic default).

### 4.1 Type scale

Sizes use `clamp()` so they grow smoothly between phone and desktop. All in `rem` (Apple: follows the visitor's text-size setting).

| Token | Size | Line height | Letter spacing | Font |
| --- | --- | --- | --- | --- |
| `display` | `clamp(2.75rem, 7vw, 5rem)` | 1.05 | -0.015em | Caprasimo |
| `h2` | `clamp(1.75rem, 3.5vw, 2.5rem)` | 1.1 | -0.01em | Caprasimo |
| `h3` (card title) | `1.375rem` | 1.2 | 0 | Caprasimo |
| `body-lg` (hero intro) | `1.1875rem` | 1.55 | 0 | Nunito 400 |
| `body` | `1.0625rem` | 1.6 | 0 | Nunito 400 |
| `small` (meta: platform, length) | `0.875rem` | 1.4 | 0.01em | Nunito 600 |
| `hand` | `1.5rem` | 1.2 | 0 | Caveat 600 |

**Rules:**

1. Body text lines stay between 45 and 70 characters wide (`max-width: 65ch`).
2. Hero headline: maximum 2 lines on desktop.
3. Emphasis inside a heading uses the same font (Caprasimo has no italic, so emphasise with `marigold` underline, not a second font).
4. No em-dashes in visible copy (Taste rule).

---

## 5. Shape: outlines, corners, shadows

### 5.1 Outlines

| Token | Value | Use |
| --- | --- | --- |
| `border-thick` | `3px solid ink` | Hero panel, contact panel, work cards |
| `border-thin` | `2px solid ink` | Buttons, tags, thumbnails inside cards |

No grey borders anywhere. No `1px` hairlines. No coloured left-border strips.

### 5.2 Corners (one system for the whole page)

Every outlined element uses a **wobbly radius**: uneven corner values that make a box look hand-drawn (technique from PaperCSS). Three variants, assigned in rotation, so neighbouring cards never share the same shape.

```css
--radius-wobble-a: 255px 15px 225px 15px / 15px 225px 15px 255px;
--radius-wobble-b: 15px 225px 15px 255px / 255px 15px 225px 15px;
--radius-wobble-c: 225px 20px 240px 15px / 20px 240px 15px 225px;
--radius-wobble-pill: 999px 60px 999px 70px / 70px 999px 60px 999px; /* buttons, tags */
```

The rule (Taste "shape consistency lock"): **panels and cards use a, b, c in rotation; buttons and tags use the pill.** Nothing on the page has a plain even radius or sharp square corners.

### 5.3 Sticker shadows

Solid, offset, zero blur, always in `ink` (never black, never grey).

| Token | Value | Use |
| --- | --- | --- |
| `shadow-sticker-sm` | `3px 3px 0 var(--ink)` | Buttons, tags |
| `shadow-sticker-md` | `5px 5px 0 var(--ink)` | Work cards at rest |
| `shadow-sticker-lg` | `8px 8px 0 var(--ink)` | Hero panel, cards on hover |

### 5.4 Paper grain

A faint noise texture over every panel, echoing the halftone print in `4_flower.jpeg`. Implemented as one small SVG noise image (`feTurbulence`, `baseFrequency ≈ 0.8`) laid over the panel at **5% opacity** with `mix-blend-mode: multiply`. It sits on a `::before` layer behind the content, so text is never filtered.

### 5.5 Tilt

Cards get a resting tilt between -1.2° and +1.2° (alternating), which straightens to 0° on hover. The hero panel tilts -0.6°. Text inside is never separately rotated.

---

## 6. The rose background

1. **Style:** a scattered "ditsy" print of small cartoon roses, buds and leaf sprigs at random angles. Flat `petal` fill, `petal-deep` outlines and swirl, `leaf` leaves. No `ink` in the pattern, so it stays quieter than the panels.
2. **Tile:** a seamless **360px** square holding about 35 motifs (18 roses), each roughly 35 to 45px across. Positions use Poisson-disc spacing (random, but never crowded) on a wrap-around grid, so the tile edges join invisibly.
3. **Background colour:** `blush` fills the gaps between roses.
4. **Delivery:** `public/images/rose-pattern.svg` (about 6 KB), set as the `body` background at `360px`. It scrolls with the page. Never use `background-attachment: fixed` (it causes slow scrolling on phones).
5. **Readability:** no text ever sits directly on the pattern. Panels have solid fills and enough padding.
6. **More contrast setting:** under `prefers-contrast: more`, the pattern is replaced by plain `blush`.
7. **Regenerating it:** the tile was generated by a small Python script (seed 11). Changing the seed or spacing gives a new arrangement in the same style.

## 7. Spacing and layout

1. Tailwind's default 4px spacing scale. Panel padding: `2rem` on phones, `3rem` on desktop.
2. Page width: content contained to `max-width: 72rem`, centred, with `1rem` side gutters on phones.
3. Gaps between panels: `3rem` phone, `5rem` desktop, so plenty of rose background shows between them.
4. More space above a heading than below it (Impeccable).
5. Breakpoints: Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280).
6. Full-height hero uses `min-height: 100dvh` (never `100vh`, which jumps on phones).

---

## 8. Components

### 8.1 Hero panel

1. **Surface:** `clay`, `border-thick`, `radius-wobble-a`, `shadow-sticker-lg`, paper grain, -0.6° tilt.
2. **Layout:** not centred (Taste anti-centre rule). Text on the left, her photo on the right on desktop; photo above text on phones.
3. **Her photo:** cut out as a "sticker": `border-thin`, `radius-wobble-b`, `shadow-sticker-md`, tilted +2°. A short Caveat note beside it is allowed (this is the hero's one small extra element).
4. **Text, maximum 4 elements:** her name (`display`, `wine`), one line on what she does (`body-lg`, `ink`, max 20 words), one primary button, optionally one secondary link.
5. **Primary button:** `marigold` fill, `ink` label, `border-thin`, `radius-wobble-pill`, `shadow-sticker-sm`.
6. Hero must fit within the first screen on a laptop.

### 8.2 Work card

One card per video. The whole card is a single link that opens Instagram or YouTube in a new tab.

1. **Surface:** `paper`, `border-thick`, wobble radius in rotation (a, b, c), `shadow-sticker-md`, paper grain, alternating tilt.
2. **Thumbnail:** a still image from the video, `border-thin`, inner wobble radius. Aspect ratio matches the platform: **16:9 for YouTube, 4:5 for Instagram** (Instagram's feed shape). The mixed shapes make the grid feel hand-arranged instead of templated.
3. **Platform tag:** a small pill on the thumbnail corner: platform icon + name (`small`, `ink` on `marigold`, `border-thin`, `shadow-sticker-sm`).
4. **Below the thumbnail:** title (`h3`, `wine`), description (`body`, `ink`, maximum 2–3 lines, about 25 words), optional meta line (`small`, `sepia`, for example the client or video length).
5. **No embedded players.** Instagram and YouTube embeds are heavy and load third-party tracking. Use a lazy-loaded still image that links out.
6. Link attributes: `target="_blank"` and `rel="noopener noreferrer"`, plus visible text or an `aria-label` that says where it goes ("Watch on YouTube: <title>").

### 8.3 Work grid

1. Not three identical cards in a row (Taste and Impeccable). Use a **masonry-style grid**: 1 column on phones, 2 on tablets, 3 on desktop, with cards keeping their natural height (YouTube cards shorter, Instagram cards taller).
2. Exactly as many cells as there are videos. No empty placeholder cells.
3. Section heading above the grid in `h2` on a small solid `paper` label panel (never on the roses). No small uppercase label above it.

### 8.4 Contact panel

1. **Surface:** `wine`, `border-thick`, `radius-wobble-c`, `shadow-sticker-lg`. Text in `paper`, links in `marigold`.
2. Contents: one heading, one sentence on how to hire her, email link, social links.
3. **One label per action.** Whatever word the hero button uses for contact ("Hire me", "Contact", ...) is used everywhere on the page, including here.

### 8.5 Icons

1. `lucide-react` (already installed) for general icons: `Mail`, `ArrowUpRight`, `Play`. Stroke width `2` everywhere, colour `currentColor`.
2. **Lucide no longer includes brand logos.** Version 1.79 has no Instagram or YouTube icon. Those two logos come from **Simple Icons** (`simple-icons` npm package, version 16.38.1, CC0 licence), rendered by `src/components/BrandIcon.tsx` in `currentColor`.
3. Never use emoji or text symbols as icons.

### 8.6 Browser details (Impeccable "browser surfaces")

| Thing | Style |
| --- | --- |
| Text selection | `marigold` background, `ink` text |
| Focus ring (keyboard) | `3px dashed ink` outline, offset `4px`, follows the wobble radius |
| Links in text | `wine`, underline `2px` `marigold`, offset `3px` |
| Scrollbar (where supported) | thumb `petal-deep`, track `blush` |
| Favicon | a single rose from the pattern (replace the Next.js default) |

---

## 9. Motion

Library: **Motion** (`motion/react`), already installed. Plain CSS transitions for hover and press (they run smoothly even while the page is busy).

### 9.1 Timing tokens (Emil Kowalski)

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);      /* strong ease-out for hover, press, entrances */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);  /* things moving across the screen */
--duration-press: 100ms;
--duration-hover: 180ms;
--duration-enter: 450ms;  /* entrance is a one-time moment, so it may exceed 300ms */
```

Never `ease-in`. Never `transition: all`; always list the properties.

### 9.2 Interactions

| Interaction | Behaviour |
| --- | --- |
| Card hover (mouse only) | `translate(-3px, -3px)`, tilt goes to 0°, shadow grows from `md` to `lg`. 180ms ease-out |
| Card or button press | `translate(3px, 3px)` and shadow shrinks to `1px 1px 0`, so it looks pressed flat onto the page. 100ms. Feedback happens on press, not release (Apple) |
| Button hover | `translate(-2px, -2px)`, shadow grows by 2px |
| Release | returns to rest at hover speed |

Hover effects are wrapped in `@media (hover: hover) and (pointer: fine)` so phones do not get stuck hover states.

### 9.3 Load and scroll motion

1. **On load:** the hero panel drops in like a sticker being placed, from `scale(0.96)` and `opacity 0.6`, 500ms with a slight overshoot (`cubic-bezier(0.34, 1.4, 0.64, 1)`).
2. **On scroll** (tied to scroll position with CSS scroll timelines, `animation-timeline: view()`, no JavaScript):
   - Work cards "peel" into place: rise 48px, untilt from 4 degrees and grow from 0.94 as they enter the screen. Neighbouring cards tilt in opposite directions.
   - The "Her work" label wiggles in from -8 degrees.
   - The contact panel rises 64px into place.
   - The hero lifts away and fades as it scrolls off the top.
3. All of these are plain CSS in `globals.css`. Browsers without scroll-timeline support (Firefox today) simply show everything in place, and nothing is ever hidden waiting for a script. Motion stays installed for later interactive work.

### 9.3b Hover details

Cards and the hero photo lift and straighten; the play badge on a card grows and tips; thumbnails zoom 4%; the "See her work" arrow nudges down; social icons tip; text links thicken their underline. All only on devices with a mouse.

### 9.4 Reduced motion

Under `prefers-reduced-motion: reduce`: no movement, tilt changes or spring. The entrance becomes a 200ms fade. Hover keeps only the shadow change. Resting tilts stay (they are static, not motion).

---

## 10. Tailwind v4 token block

Live in `src/app/globals.css` (the copy there is the source of truth; `navy` was added there too).

```css
@theme {
  --color-blush: #EBDCD8;
  --color-petal: #C98C88;
  --color-petal-deep: #A85865;
  --color-leaf: #7A7650;
  --color-paper: #F8EDE6;
  --color-clay: #DDA594;
  --color-wine: #6B273B;
  --color-sepia: #7A4A45;
  --color-ink: #3A1418;
  --color-marigold: #E5A963;

  --shadow-sticker-sm: 3px 3px 0 var(--color-ink);
  --shadow-sticker-md: 5px 5px 0 var(--color-ink);
  --shadow-sticker-lg: 8px 8px 0 var(--color-ink);

  --radius-wobble-a: 255px 15px 225px 15px / 15px 225px 15px 255px;
  --radius-wobble-b: 15px 225px 15px 255px / 255px 15px 225px 15px;
  --radius-wobble-c: 225px 20px 240px 15px / 20px 240px 15px 225px;
  --radius-wobble-pill: 999px 60px 999px 70px / 70px 999px 60px 999px;

  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
}
```

Fonts are registered from `next/font` CSS variables as `--font-display`, `--font-body` and `--font-hand`.

---

## 11. Pre-ship checklist

Run before calling any page done.

1. Every text/background pair is in table 3.1. Nothing from table 3.2.
2. No text sits directly on the rose pattern.
3. Only one accent colour (`marigold`) on the whole page. No new colours introduced.
4. Every outlined element uses a wobble radius; buttons and tags use the pill.
5. Every shadow is a zero-blur `ink` sticker shadow. No soft grey shadows.
6. No small uppercase label above any heading. No section numbers (01 / 02 / 03).
7. Hero fits in the first screen, max 4 text elements, has a real image.
8. Work grid has exactly as many cards as videos; Instagram and YouTube cards keep their own aspect ratios.
9. Every card link opens in a new tab with `rel="noopener noreferrer"` and a clear label.
10. Keyboard: tab through the page; every link and button shows the dashed focus ring.
11. Hover effects only on mouse devices; reduced-motion mode tested.
12. Selection colour, focus ring, scrollbar and favicon are themed.
13. Checked at phone (375px), tablet (768px) and desktop (1280px) widths.
14. No em-dashes in visible copy; one label per action.
15. Impeccable `audit` and `polish` passes run once at the end; Emil Kowalski review table for the motion.

---

## 12. Decisions (answered 2026-11-24)

1. **Rose pattern:** Claude draws it. Done: `public/images/rose-pattern.svg`.
2. **`simple-icons`:** approved and installed.
3. **Navy:** kept as a small detail colour only (play badge, hero note). See the `navy` token.
4. **Dark mode:** no. Light only.
5. **Her content:** not ready. Every field in `src/content/site.ts` is a placeholder; empty values show a "coming soon" state on the page. Still needed: her name, bio, hero photo, video list (link, title, description, platform, still image), email, Instagram and YouTube links.
