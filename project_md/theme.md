# Theme and Design Guide (v4: minimalist, Apple-style)

The single design guide for the site. Earlier directions are archived for reference only in `archive/`.

Status: built 2026-11-25. Content still needed is listed in section 6.

## 1. Principle

Minimalism. White space does the work: generous margins, centred type, one accent colour, no decoration. Her videos are the only strong visual on the page.

## 2. Page structure (top to bottom)

1. **Top bar**: thin (48px), white and translucent, her name left, "Work" and "Contact" right.
2. **Hero** (exactly one screen tall, centred): "Welcome, I'm" in grey, her name large, a one-line intro in grey (balanced over two lines), two blue text links with chevrons ("See the work ›", "Get in touch ›"). Pinned to the bottom of the first screen: a frosted white strip with "Brands I've worked with" and the brand logos (greyscale, 60% opacity, full on hover).
   - **Text flow-in:** every word rises from behind its own baseline (1.1s, 110ms apart in reading order), then the links and brand strip fade up.
   - **Water background:** `WaterBackground.tsx`, a small WebGL shader drawing soft pale-blue pool caustics across the whole hero at half resolution. It pauses when off screen or in a background tab, shows one still frame for reduced-motion visitors, and falls back to a pale blue-to-white CSS gradient without WebGL.
3. **Work** (light grey `mist` band): centred "Selected work." heading and one line, then a 2-column grid of square-cornered cards (1 column on phones).
4. **Contact** (white, centred): "Let's work together.", one grey line, her email as a large blue link, Instagram link.
5. **Footer**: hairline border, small grey text.

## 3. Reel card

Square corners, no border, no shadow; white card on the grey band.

1. Video area (4:5, dark) with a single white play button; pressing it loads Instagram's official player into the card.
2. Text area with generous padding: brand name (small grey), title (large, semibold), description (grey), and "Watch on Instagram ›" (blue).

## 4. Tokens

| Token | Hex | Use | Contrast |
| --- | --- | --- | --- |
| white | `#FFFFFF` | Page background, cards | |
| `ink` | `#1D1D1F` | Text, video area | 16.8 on white |
| `mute` | `#6E6E73` | Secondary text | 5.1 on white, 4.7 on mist |
| `mist` | `#F5F5F7` | Work section band | |
| `pop` | `#FF5FA2` | Bubblegum pink fills: "Contact" and "See the work" pills, play buttons (ink text on it, 5.9:1) | |
| `accent` | `#C81E66` | Deeper raspberry pink for text links | 5.5 on white, 5.0 on the water |

Top bar: fixed and fully transparent over the hero's water; it frosts to white (blur + hairline) as the hero scrolls away (CSS scroll timeline; frosted from the start where unsupported).

Brands: 14 logo files in `public/images/brands/` (normalised to 256px squares from `assets/`, shown as circles) appear in the hero row. Each reel card names its partner brand, read from the reel's Instagram collaborators and caption: Anker (01), Nestlé NANKID (02 to 04), Ayoola Foods (05), Judith The Brand (06, 08), Addme (07).

- Font: Geist throughout. Headings semibold with tight tracking (-0.035 to -0.04em); body 17px.
- Corners: square on cards and video areas. Only the play button is round.
- Motion:
  - **Smooth scrolling** with Lenis 1.3.27 (`SmoothScroll.tsx`, `lerp 0.085`): the page glides with soft inertia; in-page links ("See the work", "Contact") glide to their section over 1.4s and land just under the top bar.
  - **Section transitions** (CSS scroll timelines, in step with the smooth scroll): the hero content drifts up, shrinks slightly and fades as you scroll past it; the grey work band opens out from 92% to full width as it arrives; cards rise 56px into place, right column a beat after the left; contact rises in.
  - Hero words flow up from their baselines in reading order; small hover feedback (chevrons nudge, play button grows).
  - Reduced motion: no smooth scrolling, no movement, plain fades.

## 5. Files

- Content: `src/content/site.ts` (profile, brands, contact, reels with brand and description).
- Logos: `public/images/brands/`, referenced by each brand's `logo` field. Without a logo, the brand name is shown.
- Page: `src/app/page.tsx`. Components: `ReelCard.tsx`, `BrandMark.tsx`. Styles: `src/app/globals.css`.

## 6. Content still needed

1. Confirmed brand list and logo files (provisional now: Anker and NAN Kid, seen as collaborators on reels 01 and 04).
2. Brand for each remaining reel (02, 03, 05 to 08).
3. A short description for every reel (currently "Description coming soon.").
4. Reel titles (currently "Reel 01" to "Reel 08").

## 7. Hero name and brands (2026-11-25)

- **Name** (`HeroName.tsx`): "Judith" in Geist semibold, each letter springing up with a soft overshoot; "Urevbu" in Playfair Display italic, rose pink `#E0307D` (3.9:1 on the water, large text), letters twirling in, then a slow light shimmer sweeps across every ~5.5s. A pink flourish draws itself under the surname and small pink sparkles twinkle around the name. Screen readers get the plain name; reduced motion shows it still.
- **Top bar**: no name, just "Work" and the pink "Contact" pill on the right.
- **Hero bottom**: a "Scroll" hint with a pink bead sliding down a thin line.
- **Brands** (`BrandMarquee.tsx`): its own white section after the hero: "✦ 14 brands and counting ✦", heading "Brands I've created with.", then two rows of 88px logo circles with names, gliding in opposite directions (50s loop), edges fading out, paused on hover, pink ring on the hovered logo. Reduced motion: a still, centred grid.

## 8. Selected work (2026-11-25)

- **Covers**: each reel's real cover frame (540x960), saved from Instagram's public embed page into `public/images/reels/<reel id>.jpg`; `reelCover()` in `src/lib/video.ts` finds it from the reel link. A new reel needs its cover saved the same way.
- **Header**: "08 reels, 5 brands" in pink, "Selected *work.*" (Playfair italic pink on "work."), one line, and brand filter chips (All work + one per brand, with counts; the active chip is ink with a pink count).
- **Grid** (`WorkSection.tsx`): 9:16 square-cornered posters, 4 columns on desktop with every other column dropped 3.5rem for an editorial rhythm, 3 on tablets, 2 on phones. Cards rise in one after another (and again after a filter change).
- **Card** (`ReelCard.tsx`): full-bleed cover, brand logo badge and year on top, a bottom gradient with the brand name (pink), title, and on hover the description sliding up; the cover zooms 6% and a pink play button springs in.
- **Player** (`ReelPlayer.tsx`): native dialog with a blurred backdrop: Instagram's embed on the left, the brand badge, title, description, year and a pink "Open on Instagram" button on the right. Focus starts on Close, so Escape closes it.
## 9. Final pass (2026-11-25)

- **Hero**: no buttons (Work and Contact live in the top bar). Under her name, a large ink headline that flows in word by word, "I turn brands and everyday moments into stories people *stop scrolling for.*", with the last phrase in pink Playfair italic; a smaller grey supporting line below. Both texts live in `profile.headline` / `profile.intro` in `site.ts`.
- **Selected work**: centred "Selected *work.*" heading and one line; no filters, no counts. Each card shows only the brand logo (top left) and the description over the bottom gradient; hover zooms the cover and shows the pink play button.
- **Contact**: pink email pill and the Instagram card; no copy button.
- **Accent placement**: pink is reserved for one word or phrase per section (Urevbu, stop scrolling for., created with., work., beautiful.), the Contact pill, the email pill, play buttons and the sparkles. Everything else stays ink, grey and white.
