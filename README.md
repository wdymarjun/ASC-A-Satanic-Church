# ASC — A Satanic Church (Website)

Official informational and architectural showcase website for **ASC — A Satanic Church**, an immersive Gothic cathedral and occult roleplay experience built on Roblox by **kingpaimon2**.

---

## 🏛️ About the Experience

**ASC — A Satanic Church** is a monumental gothic simulation featuring over **164,153 individual instances** meticulously designed and managed via the Rojo 7.7.0 development pipeline.

Key in-game highlights:
- **The Gothic Cathedral (`UltimateSingleHallGothic`):** Soaring rib-vaulted ceiling, compound colonnades, flying buttresses, triple-portal narthex, and the great rose window.
- **The High Altar Stage:** 102 skull candelabras powered by a real-time candle flame flickering engine (`flickers.server.luau`).
- **The Grand Pipe Organ (`Organ1`):** A massive gothic instrument modeled with over 10,075 individual parts.
- **The Great Occult Library:** Multi-tiered archive with 100 interaction prompts, stealth concealment wardrobes, and 6 authored grimoires (*The Infernal Codex of Arcana*, *Litany of Great King Paimon*, *Blood & Sulfur: Rites of the Altar*, *Vigilance of the Sentinels*, *The Salt of the Damned*, and *The Satanic Bible*).
- **Autonomous In-Game Entities:** Guided tours led by the pathfinding **Tour Lady**, conversational knowledge from the **Grand Archivist**, and autonomous prayer cycles from **ik you** with studio-quality voice clips.
- **Rank Progression Hierarchy:** Formal 10-hour advancement from *Lost Soul* to *Blood Covenant*, with the exclusive *DEMON* admin rank.

Experience Link: [Play ASC on Roblox](https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church)

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom gothic obsidian, crimson, and gold design system)
- **Typography:** Cinzel (Serif display) & Inter (Sans-serif body) via `next/font/google`
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.18.0 or newer)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/wdymarjun/ASC-A-Satanic-Church.git

# Enter the project directory
cd ASC-A-Satanic-Church

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Production Build
```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

---

## 📁 Project Architecture

```
ASC-A-Satanic-Church/
├── public/
│   └── images/               # Authentic in-game screenshots and renders
│       ├── cathedral-nave.png
│       ├── cathedral-preview.jpg
│       ├── archivist-dialog.jpg
│       └── archivist-educator.jpg
├── src/
│   ├── app/
│   │   ├── globals.css       # Theme variables, gothic styles, no background photos
│   │   ├── layout.tsx        # Fonts and metadata
│   │   └── page.tsx          # Main landing page
│   └── components/
│       ├── Navbar.tsx        # Wordmark, section links, Roblox CTA
│       ├── Hero.tsx          # Editorial title, verified scan statistics
│       ├── WorldSection.tsx  # Cathedral architecture and spatial map
│       ├── ArchiveSection.tsx# Interactive grimoire reader (6 tomes)
│       ├── CharactersSection.tsx # Archivist, Tour Lady, ik you, Sentinels
│       ├── SystemsSection.tsx# 9 Sanctuary Decrees & Rank calculator
│       ├── EasterEggSection.tsx # Courtyard McDonald's & Treehouse lore
│       └── Footer.tsx        # Roblox button, legal, independent disclaimer
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 📜 Disclaimer

All doctrines, tomes, rituals, and characters featured on this website and in the game are fictional works created solely for roleplay, storytelling, and architectural exploration within the Roblox platform.

This project is an independent creative endeavor and is not affiliated with, endorsed by, or associated with any real-world religious, political, or external organizations.
