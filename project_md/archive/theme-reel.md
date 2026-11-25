# Theme and Design Guide (v2: "The Reel")

This is the single design guide for the portfolio. Every page, component and style follows it. The previous rose/cartoon direction is retired and kept for reference in `archive/theme-roses.md`.

Status: decisions made 2026-11-24 (section 12). Sections 5, 7 and 8 describe the redefined scroll concept that is being built.

**Update 2026-11-24: page now stacks vertically.** The page is a vertical stack of full-width sections instead of a fixed side-by-side frame. Section 0 below describes the new hero; the work section underneath is being redefined next, and the reel described in sections 5 to 8 is in place until then. Palette, type and motion rules still apply.

## 0. Hero: "Welcome" becomes her name

1. Full screen height, content sitting at the bottom. Top bar: "Video editor & content creator" left, "Work, Contact" right.
2. **The title animation** (`src/components/HeroTitle.tsx`, built with Motion):
   - 0 to 0.7s: W E L C O M E rises in, letter by letter, in the display face, on the line where her name will sit.
   - 1.3s: each Welcome letter lifts off and glides along its own arc (1.1s, ease in-out) to a slot in JUDITH UREVBU, changing to that letter mid-flight. The seven letters are spread evenly across the name.
   - From 1.8s: the name's remaining letters rise into their slots.
   - About 2.8s: the real heading takes over and "Welcome, I'm" fades in above the name, so the finished sentence reads "Welcome, I'm / JUDITH UREVBU".
3. Then the intro sentence (what she does) and the "Partnered with" brand list rise in underneath.
4. Accessibility: the heading's real text is "Welcome, I'm Judith Urevbu" for screen readers; the flying letters are decorative. Without JavaScript the finished sentence shows straight away; with reduced motion the flight is skipped and the greeting simply fades in. A failsafe reveals the text after 6 seconds if anything stalls.

---

## 1. Why we changed direction

The rose/sticker theme stacked too many loud ideas at full volume: thick outlines, hard shadows, tilts, wobbly corners and a busy print, all at once. Each was defensible alone; together they read as a costume, and her videos (the actual product) became the least interesting thing on the page.

The new direction flips that: **the interface goes quiet and her work moves.** For a video editor, the most persuasive thing on the page should be her footage in motion.

**Design read** (Taste skill format): a portfolio for clients and collaborators hiring a video editor, with a calm editorial-grotesk language, leaning toward a fixed one-screen frame, a looping scroll reel of her work, and restrained, physical motion.

**Dials** (Taste, 1 to 10): design variance **6**, motion intensity **7**, visual density **2**.
**Impeccable mode:** Experience. The work leads; the interface recedes.

---

## 2. Reference study: segerman.dev (home page only)

Studied on 2026-11-24 by downloading the live page, its stylesheet and its JavaScript bundles, and by driving a real Chrome with wheel and mouse events to screenshot it scrolled, hovered and on a phone. Everything below was seen or read in the code, not guessed.

### 2.1 What the page is

1. **A fixed one-screen frame.** Desktop never scrolls the page. The body is locked (`position: fixed; overflow: hidden`), and only the project column moves.
2. **Layout on that frame** (1440px wide):
   - Top left: name, small. Under it a huge, heavy, uppercase two-line title ("CREATIVE / DEVELOPER") and a two-line intro.
   - Top right: "Info, Contact" links and a light/dark toggle.
   - Middle right: one column of project images, about 460px wide, with about 20px gaps.
   - Right edge, vertically centred: an "Index" list of project names.
   - Bottom: small labelled facts ("Contact: email", "Available: October 2026") and the copyright.
   - Everything else is empty white space. Margins are about 20px.
3. **Colours:** white background, near-black navy ink (`#00031F`) for text, grey for labels. Nothing else.
4. **Images** are shown as grainy two-tone pictures (duotone: navy shadows, white highlights), like a newspaper print. Colour only appears in the hover preview.
5. **Type:** two typefaces. A heavy display face (Newake) for the title only, and a clean grotesk (Aktiv Grotesk Medium, about 16px) for everything else. Both are paid fonts.

### 2.2 The scroll effect (the part we want)

Read from the site's own code (`Home` and `World` bundles, built with three.js, GSAP and Lenis):

1. **Smooth, inertial scroll.** The mouse wheel feeds Lenis (a smooth-scroll library) with `lerp: 0.2`, `smoothWheel: true`. Each frame the column moves 20% of the way to its target, so it glides and settles instead of jumping.
2. **Infinite loop.** Item positions are wrapped with a modulo of the total column height, so after the last project the first one comes round again. There is no end to scroll to.
3. **Speed bends the images.** The scroll speed is passed to each image's shader (a small GPU program that positions every pixel). Images stretch slightly wider the further they are from the screen centre, by an amount tied to the speed (`warp = 1 - distance² × speed × 0.2`). Fast scrolling visibly flexes the column; at rest it is flat.
4. **Curved, screen-like edges.** A fixed "CRT" bulge (like an old TV screen) and a curve that grows with distance from the centre (`uCurveX`, `uCurveZ`) make images near the top and bottom bend slightly away. The column feels like film running over a drum.
5. **Intro.** On load the images rise from below with a long `expo.out` ease (1.6s), and the project titles appear one after another, 70ms apart.

### 2.3 Hover (the second part we want)

1. Hovering an image (or its name in the index) **fades out the big title**, **highlights that project in the index** while the rest go faint, and **plays a short full-colour video preview** in a small frame under the index.
2. A soft **ink blob trails the cursor** (a fluid simulation, colour bleeding through the duotone). Decorative.
3. Clicking the image or name opens the project.

### 2.4 On phones

The whole effect is switched off. It becomes a normal scrolling page: title, intro, then a plain stacked list of images, each with its name underneath. Images reveal as they appear.

### 2.5 What we take, what we leave

| From segerman.dev | Our decision |
| --- | --- |
| Fixed one-screen frame on desktop, only the work moves | **Take** |
| Looping vertical column with inertia | **Take.** It is the "showcase" the brief asks for |
| Speed-based bend and curved edges | **Take, softer.** Built with CSS transforms, not WebGL (section 8) |
| Duotone, grainy stills that turn to colour | **Take.** Fits a film/editing world |
| Hover: title fades, index highlights, colour video preview | **Take.** Even stronger for a video editor: her clips actually play |
| Index list of project names | **Take**, with platform and length added |
| Huge heavy uppercase title | **Take**, different font |
| Navy-on-white palette, his fonts, his copy | **Leave.** Our own palette and free fonts |
| WebGL planet loader, fluid cursor blob | **Leave.** Heavy, and not about her work |
| Faint grey inactive list items (about 1.9:1 contrast) | **Leave.** Ours stay readable (5:1) |
| Locked scroll with no keyboard path | **Fix.** Ours works with keyboard and screen readers |

### 2.6 Our own additions (so it is hers, not his)

1. **Edit-suite details.** The active project shows a running **timecode** (`00:00:04:12`, counting while the preview plays) and a small red **REC dot**. Editors live in timecode; it signals her craft without saying it.
2. **Reel framing.** Thin frame-line ticks run down the column's edges, like the edge of a film strip. Very subtle.
3. **Platform tags in the index** (YouTube / Instagram, plus running time), because her work lives on those platforms.

---

## 3. Colour tokens

Light theme by default. One accent, used tiny.

| Token | Hex | Use | Contrast |
| --- | --- | --- | --- |
| `paper` | `#F3F2EE` | Page background | |
| `ink` | `#1E0B12` | All text, duotone shadows, rules | 16.9 on paper |
| `mute` | `#6F6569` | Labels ("Contact", "Available"), inactive index items during hover, meta | 5.0 on paper |
| `rec` | `#D3261C` | The single accent: REC dot, active timecode, focus ring | 4.6 on paper |
| `night` | `#140A0D` | Optional dark mode background (Decision 2) | |
| `night-ink` | `#EEE9E6` | Dark mode text | 16.2 on night |
| `night-mute` | `#A3989B` | Dark mode labels | 7.0 on night |

Notes:
1. `ink` is a very dark oxblood rather than black or navy. It keeps a faint warmth from the first direction, and it is not segerman's navy.
2. **Duotone:** every still is rendered `ink` (shadows) to `paper` (highlights), with a light grain. The hover preview is in full colour. That jump from two-tone to colour is the main visual reward on the page.
3. `rec` on `night` is 3.8, so in dark mode it is used only for the dot and large timecode, never small text.
4. None of the Taste skill's banned "beige + brass + espresso" values are used.

---

## 4. Typography

| Role | Font | Settings | Why |
| --- | --- | --- | --- |
| Display (title only) | **Archivo** (Google, variable) | width 62 (extra condensed), weight 900, uppercase | Free and close to the heavy condensed display look of the reference, but its own shape |
| Everything else | **Geist** (Google, variable) | weight 500, about 16px | Clean grotesk, close in feel to Aktiv Grotesk, very readable |
| Timecode | **Geist Mono** | weight 500, tabular numbers | Real timecode needs fixed-width digits so it does not jitter |

Both families are confirmed available in this Next.js version's font list. Load with `next/font/google`.

| Token | Size | Line height | Tracking |
| --- | --- | --- | --- |
| `display` | `clamp(3.5rem, 7.5vw, 8.5rem)` | 0.9 | -0.01em |
| `body` | `1rem` (16px) | 1.3 | 0.01em |
| `label` | `0.875rem` | 1.3 | 0.01em, colour `mute` |
| `timecode` | `0.875rem` | 1 | 0, tabular |

Rules: only these four sizes. No eyebrows, no section numbers, no em-dashes in copy. The title is two lines maximum (for example "VIDEO / EDITOR", or her name).

---

## 5. The concept: your scroll is the playhead

She cannot supply preview clips, and this is a one-page site, so the reference's locked, looping WebGL reel is **redefined**, not copied:

1. The page scrolls normally (no scroll hijacking, no infinite loop). This keeps it simple, fast, and natural on phones and keyboards.
2. A thin `rec`-red **playhead line** sits fixed across the middle of the screen over the reel, with a **timecode** beside it. Scrolling the page scrubs through the combined running time of all her videos, so the counter reads like an editing timeline (`HH:MM:SS:FF`, 25 frames per second).
3. The project crossing the playhead is **active**: its still turns from duotone to full colour, and its row lights up in the index.
4. Stills above and below the playhead **curve away** like film over a drum (CSS scroll timeline: up to 16 degrees of tilt and 0.9 scale at the screen edges, flat at the centre).
5. **Hover scrub** (desktop, mouse): moving across a YouTube still flips through four real frames from inside that video, which YouTube generates for every upload (the cover at 1280x720 plus frames at roughly 25, 50 and 75 percent at 480x360). A thin bar under the still shows the scrub position. This replaces the preview clips and needs nothing extra from her.
6. **Click to watch:** YouTube projects open a lightweight player on the page (`youtube-nocookie.com` embed, loaded only on click). Instagram projects open on Instagram in a new tab.

## 5b. Layout

### Desktop (1024px and wider)

```
+------------------------------+-------------------------------------+
| Her Name                     |            +-------------+          |
|                              |            |   still 1   |          |
| VIDEO                        |            +-------------+          |
| EDITOR                       | 00:01:12:04 *----------------------  | <- playhead (fixed)
| Two-line intro.              |            |   still 2   |  active  |
|                              |            +-------------+          |
| Index                        |            +-------------+          |
|   Project one   YT 2:14      |            |   still 3   |          |
| > Project two   IG 0:45      |            +-------------+          |
|   Project three YT 4:02      |                                     |
|                              |                                     |
| Contact        Available     |                                     |
| email          Month 2027    |                                     |
+------------------------------+-------------------------------------+
   sticky, full screen height      scrolls normally
```

1. Left column (about 40 percent): sticky, full screen height. Name, title, intro, the index, and the contact facts at the bottom.
2. Right column: the reel. A single column of stills (max about 30rem wide) with half a screen of space above the first and below the last, so every project can reach the playhead. Each still has its title and platform and running time under it in `label` size.
3. Stills keep the video's shape: 16:9 for YouTube, 4:5 for Instagram.
4. After the last still: a large email link as the closing line.

### Phone and tablet (under 1024px)

One column: name, title, intro, then the reel with titles under each still, then contact. The active-still colour change still works while scrolling; the playhead line and hover scrub are hidden.

## 6. Components

1. **Reel item:** the duotone still with no border, shadow or radius, a colour layer above it, and a caption (title, then platform, running time and year in `mute`).
2. **Index row:** title + platform and running time. Clicking a row scrolls its still to the playhead. The active row is `ink`; the others are `mute`.
3. **Playhead:** a 1px `rec` line plus a small pill on its left end holding the REC dot and timecode (Geist Mono, tabular digits).
4. **Player dialog:** native `<dialog>`, dark scrim, 16:9 frame, close button and Escape to close, "Open on YouTube" link.
5. **Links:** `ink`, no underline at rest, 1px underline on hover. Focus ring `2px solid rec`, offset `3px`.

## 7. Motion

1. **Drum curve** (CSS scroll timeline, `animation-timeline: view()`): stills tilt back up to 16 degrees and scale to 0.9 at the screen edges, flat at the centre. Browsers without support show them flat.
2. **Active colour:** colour layer fades in over 400ms with `cubic-bezier(0.23, 1, 0.32, 1)` when a still becomes active, out over 250ms (exit faster than enter).
3. **Index highlight:** 200ms colour change.
4. **Timecode:** updated every animation frame straight into the element (no React re-render per frame).
5. **Hover scrub:** frames switch instantly with the pointer (scrubbing must feel 1:1, per Apple's direct-manipulation rule); the bar follows the pointer.
6. **Load:** stills rise 24px into place, 700ms ease-out, 80ms apart; the title rises first.
7. **Reduced motion:** no drum curve and no load rise. Colour change and timecode stay (they are information, not movement).
8. Only `transform`, `opacity` and the playhead text change per frame.

## 8. How it is built

1. One client component (`Showreel`) owns the active project, the timecode and the index; one (`ReelItem`) owns hover scrub; one (`VideoDialog`) owns the player. The rest is server-rendered.
2. **Active detection:** on scroll (throttled to animation frames), the still whose box contains the playhead line (screen middle) is active; React state changes only when the active project changes.
3. **Duotone:** pure CSS. The still is greyscaled and multiplied onto `paper`, and an `ink` layer is blended with `lighten`, mapping black to `ink` and white to `paper`. A grain tile sits on top at low opacity.
4. **Stills:** YouTube stills and scrub frames come from `i.ytimg.com` using the video ID taken from her link, so a YouTube project needs only its URL. Instagram projects need a still image file in `public/images/`.
5. **Placeholders:** until her links arrive, projects use `picsum.photos` placeholder photos (seeded, so they stay the same) for both stills and scrub frames. These are clearly marked in `site.ts` and must be replaced.
6. Content fields in `src/content/site.ts`: `title`, `platform`, `url`, `duration` ("2:14"), `year`, optional `still` (required for Instagram), optional `client`.

## 9. What stays from the current build

1. The stack, folders, `site.ts` content file and placeholders.
2. `simple-icons` and `motion` stay installed but are unused for now (platform names are words; all motion is CSS).
3. Everything rose-related (pattern, stickers, wobble radii, Caprasimo, Nunito, Caveat) is removed.

---

## 10. Pre-ship checklist

1. Desktop: the left column stays put while the reel scrolls; the playhead stays at the screen middle.
2. Exactly one project is active at a time, and it is the one on the playhead; the index row matches.
3. Timecode reads 00:00:00:00 at the first project and the total running time at the last.
4. Hover scrub moves 1:1 with the pointer and resets on leave; scrub frames load only on hover.
5. YouTube click opens the on-page player; Escape, the Close button and a click on the scrim all close it, and the video stops.
6. Instagram click opens Instagram in a new tab.
7. Keyboard: Tab reaches every index row and every still; focus ring visible; index rows scroll their still to the playhead.
8. Reduced motion: no drum curve, no rise, no smooth scrolling, REC dot does not blink.
9. Phone at 375px, tablet at 768px, desktop at 1280 and 1440px.
10. Contrast: nothing below 4.5:1 for text; `rec` only for dot, playhead, scrub bar and focus.
11. Every placeholder in `site.ts` replaced before launch (no picsum images left).

## 11. Content needed from her

1. Her name and a two-line intro (about 20 words).
2. For each video: title, platform, link, running time and year. YouTube videos need nothing else; each Instagram video needs one still image.
3. Email, Instagram and YouTube links, and an "available from" month.

---

## 12. Decisions

1. **Title:** "VIDEO / EDITOR", her name small top left. (Decided.)
2. **Dark mode:** light only for launch. The `night` tokens stay documented for later. (Decided.)
3. **Preview clips:** she cannot provide them. Replaced by the playhead concept, YouTube frame scrubbing and click-to-watch (section 5). (Decided.)
4. **Fidelity:** CSS, no WebGL. (Decided.)
