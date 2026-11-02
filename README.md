# ASC — A Satanic Church

ASC — A Satanic Church is a Gothic Roblox experience by **kingpaimon2**. Its
world is presented through a monumental cathedral, candlelit rooms, a
surrounding cemetery, an education hall, and a Grand Library. Architecture,
firelight, and unexpected details—including a McDonald's—give the setting its
distinctive atmosphere.

This repository contains the source for ASC's companion portfolio and
showcase website. The website introduces the experience through original
in-game captures and editorial descriptions; it is not the Roblox game source
or a replacement for playing the experience.

## Visit ASC

- **Play on Roblox:** [ASC — A Satanic Church](https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church)
- **Join the community:** [ASC Discord](https://discord.gg/TqtEXcves)
- **Creator:** [kingpaimon2](https://github.com/wdymarjun)
- **Portfolio:** [kingpaimon's portfolio](https://portfolio-nine-pi-rzvxowcqb1.vercel.app/)

## About the experience

ASC is designed as a place to explore rather than a single room or scene. The
website follows the visual landmarks and named features represented in the
game captures and place scan.

### The cathedral

The cathedral is the visual center of ASC. Visitors approach through a
torch-lit courtyard and enter a Gothic interior with a long nave, crimson
seating, chandeliers, an organ, and a sanctuary. A winged Baphomet figure is
depicted inside the cathedral. The website presents these as scenes from the
fictional Roblox world.

### ASC's Education Hall

The Education Hall is a separate landmark with Gothic stonework, an interior
hall, a rose window, a library, and a teaching stage. The stage is described
as reserved for Church Council members. The space also includes a Satanic
Bible intended for educators and priests.

### The Grand Library

The Grand Library combines a lantern-lit pavilion, long timber shelving, a
reading area, a librarian, and a table displaying in-game books. The website
mentions selected catalog titles as fictional elements of the experience; it
does not reproduce the books' text.

### The old cemetery and surrounding grounds

The grounds extend into a rain-dark woodland cemetery with headstones and a
winged statue. The website also shows related outdoor scenes and the
unexpected McDonald's location as a deliberately lighthearted detour.

### Characters and interactive features

The experience includes named characters and NPCs represented in the place
scan, including the Grand Archivist, the Tour Lady, PriestChair / Litottie,
and Rabbit & Rat NPCs. The site also describes selected systems shown by the
scan:

- The Archivist's AI educator dialogue feature, described in-game as available
  24/7.
- Tour-related NPC logic.
- Rank and progression configuration.
- A parchment-style, two-page book reader.
- Protector and moderation tools.

These descriptions summarize features found in the scan and are not a
guarantee that every feature is currently available or works identically in
every live server. Private moderation logic and implementation details are
intentionally not documented.

### Community rules

The site summarizes the conduct expectations displayed in ASC: respect other
players, protect personal information, do not harass or threaten others, keep
appropriate boundaries, follow directions from priests and priestesses, and
do not exploit or disrupt the experience. The in-game rules are authoritative;
read them before participating.

## About the website

The site is a responsive, single-page editorial showcase. Its presentation
uses:

- A full-bleed cathedral hero with the ASC identity and a red Baphomet sigil.
- A wine, blood-red, gold, and near-black color palette.
- Large scene-led features instead of a gallery-first landing page.
- In-game Roblox imagery, with descriptive alternative text and scene
  captions.
- Responsive navigation, a compact menu for narrower screens, and footer
  links to Roblox, Discord, GitHub, and the portfolio.
- Smooth anchor navigation and subtle scroll-reveal effects. Reveal animation
  respects the user's reduced-motion preference.
- A visually hidden scrollbar while preserving regular page scrolling.
- Keyboard-visible focus styling and a skip-to-content link.
- Page metadata, social-preview metadata, and the ASC favicon.

The screenshot assets in `public/images/gameplay/` are optimized WebP captures
supplied for this project. The site uses selected captures in its editorial
sections. `GameGallery.tsx` contains an optional filterable gallery and
keyboard-operable lightbox component; it is not currently mounted on the
homepage.

## Technology

- [Next.js](https://nextjs.org/) 15 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) and project-specific CSS
- [Lucide](https://lucide.dev/) icons

## Run locally

Install **Node.js 18.18 or newer**, then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site does not require
environment variables for local development.

### Production build

```bash
npm run build
npm run start
```

The build command compiles the site, checks TypeScript, and prerenders the
homepage. Run the production server after building to inspect the optimized
version locally.

### Available npm scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server. |
| `npm run build` | Create and validate a production build. |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run the lint command configured in `package.json`. |

## Project structure

```text
.
├── public/
│   ├── asc-main-icon.png       ASC brand icon
│   ├── baphomet-sigil.svg      Red hero sigil
│   ├── brands/                 Local Roblox, Discord, and GitHub marks
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/
│       └── gameplay/           Optimized WebP captures from ASC
├── src/
│   ├── app/
│   │   ├── globals.css         Theme, layout, responsive rules, and effects
│   │   ├── layout.tsx          Root layout and page metadata
│   │   └── page.tsx            Homepage route
│   └── components/
│       ├── GameGallery.tsx     Optional filterable gallery and lightbox
│       ├── ScrollEffects.tsx   Reduced-motion-aware reveal effects
│       └── Showcase.tsx        Navigation and homepage content
├── next.config.mjs
├── package.json
└── README.md
```

## Updating the site

### Change written content or links

Edit the relevant section in `src/components/Showcase.tsx`. The Roblox,
Discord, GitHub, and portfolio destinations are defined near the top of that
file. Keep external links opening in a new tab protected with
`rel="noopener noreferrer"`.

### Add or replace an image

1. Put the optimized image in `public/images/gameplay/`.
2. Reference it from a component using a path beginning with `/images/`.
3. Give it meaningful alternative text; use an empty `alt` only for
   decorative images.
4. For `next/image`, provide a suitable `sizes` value when the image fills a
   responsive container.
5. Run `npm run build` to catch missing assets and implementation errors.

Brand assets are stored locally in `public/brands/` so the page does not
depend on a third-party icon CDN at runtime.

### Adjust appearance and responsive behavior

The global design tokens, typography, spacing, breakpoints, animations, and
component styles live in `src/app/globals.css`. When changing motion effects,
preserve the `prefers-reduced-motion` rules. Test both narrow mobile layouts
and wider tablet and desktop layouts after changing breakpoints.

## Content and affiliation notes

Descriptions are limited to details supported by the supplied screenshots
and scanned place. The experience may change; verify current features and
rules in Roblox before relying on website descriptions.

This is an independent fan-made showcase. It is not affiliated with or
endorsed by Roblox or any real-world religious or political organization.
Roblox and Discord names and marks belong to their respective owners. Game
imagery and the ASC identity are presented as assets supplied for this
project; this repository does not grant rights to reuse them elsewhere.
