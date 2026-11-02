# ASC — A Satanic Church

An editorial showcase for the Roblox experience **ASC — A Satanic Church**.
The site introduces the cathedral, surrounding environments, in-game archive,
named characters, and selected systems documented in a scan of the place.

Play the experience:
https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church

## About the site

The landing page is built with Next.js App Router, React, TypeScript, and
Tailwind CSS. Its visual direction uses original ASC imagery and a restrained
Gothic palette with wine, blood-red, and gold accents. Subtle scroll reveals
respect reduced-motion preferences.

The `public/images/gameplay/` directory contains optimized WebP versions of
creator-supplied Roblox screenshots. The homepage uses a dramatic cathedral
hero and a small set of large editorial scene features rather than leading
with a screenshot grid. The cathedral section follows the new screenshots
from the torch-lit courtyard and exterior through the nave, overlook,
sanctuary, and posted conduct rules. The education hall includes its
council-only teaching stage and the Bible used by educators and priests. The
Grand Library section features its aisle, pavilion, librarian, book display,
and visitor. An unusable 2×1 image and exact duplicates were excluded.

Content is intentionally limited to details supported by the scanned place.
Instance totals, unverified gameplay promises, and private moderation logic
are not presented as website facts. The page links to the Roblox experience
and the supplied ASC Discord invite.

## Run locally

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Create and run a production build:

```bash
npm run build
npm run start
```

## Project structure

```text
src/
  app/
    globals.css       Design system and responsive layout
    layout.tsx        Root layout and metadata
    page.tsx          Landing page route
  components/
    GameGallery.tsx   Optional filterable in-game photo gallery
    Showcase.tsx      Navigation and editorial showcase sections
public/
  images/
    gameplay/         Optimized Roblox screenshots
```

The site is an independent fan-made showcase and is not affiliated with or
endorsed by Roblox or any real-world religious or political organization.
