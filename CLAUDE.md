@AGENTS.md

# Video Editor Portfolio

## Goal

A 1–2 page portfolio site for a video editor: who she is, her video work, and how to contact or hire her.

## Stack

- Next.js 16 (App Router, `src/` directory), React 19, TypeScript
- Tailwind CSS 4
- motion (animation), clsx + tailwind-merge (class names), lucide-react (icons)
- Prettier with prettier-plugin-tailwindcss (dev)

## Folders

- `src/app/`: pages
- `src/components/`: UI pieces
- `src/lib/`: helpers (e.g. a `cn()` class utility)
- `src/content/`: bio, project list, contact details
- `public/videos/`, `public/images/`: media

## Design skills

Installed globally in `~/.claude/skills/`:

- `emil-design-eng`: Emil Kowalski design engineering (motion, interaction polish)
- `apple-design`: Apple-style interface design and motion
- `design-taste-frontend`: Taste (anti-generic design choices)
- `impeccable`: design quality checks, critique and refinement

## Design guide

`project_md/theme.md` is the single design guide (palette, fonts, shapes, rose background, components, motion, checklist). Follow it for all UI work; update it when a design decision changes. Colour inspiration images live in `inspo/`.

## Status

Phase 1 (workspace setup) is done. Phase 2 (design) has a draft guide in `project_md/theme.md` with open decisions in its section 12. No UI built yet.
