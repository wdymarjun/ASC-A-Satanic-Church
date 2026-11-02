"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, PanelsTopLeft, X } from "lucide-react";
import ScrollEffects from "@/components/ScrollEffects";

const robloxUrl =
  "https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church";
const discordUrl = "https://discord.gg/TqtEXcves";
const githubUrl = "https://github.com/wdymarjun";
const portfolioUrl = "https://portfolio-nine-pi-rzvxowcqb1.vercel.app/";

const navigation = [
  { label: "The world", href: "#world" },
  { label: "Old cemetery", href: "#old-cemetery" },
  { label: "ASC's Education Hall", href: "#education-hall" },
  { label: "Grand library", href: "#archive" },
  { label: "Those within", href: "#characters" },
  { label: "Under the surface", href: "#systems" },
];

const books = [
  "The Infernal Codex of Arcana",
  "Litany of Great King Paimon",
  "Blood & Sulfur: Rites of the Altar",
  "Vigilance of the Sentinels",
  "The Salt of the Damned",
  "The Satanic Bible",
];

const systems = [
  {
    number: "01",
    title: "The Archivist",
    description:
      "An AI educator and a dedicated dialogue interface appear among the place's archive features.",
  },
  {
    number: "02",
    title: "A guided passage",
    description:
      "Tour-related NPC logic is present in the scanned place, alongside a named Tour Lady character.",
  },
  {
    number: "03",
    title: "Ranks & progression",
    description:
      "Rank configuration and progression systems are part of the game's underlying structure.",
  },
  {
    number: "04",
    title: "Reading the archive",
    description:
      "A parchment-style, two-page reader UI accompanies a catalog of in-game books.",
  },
  {
    number: "05",
    title: "Keeping the space",
    description:
      "Protector and moderation tools are present. Their internal controls are intentionally not detailed here.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

export default function Showcase() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <ScrollEffects />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-nav">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="ASC home">
            <Image
              className="brand-logo"
              src="/asc-main-icon.png"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
            />
            <span className="brand-copy">
              <span className="brand-name">ASC</span>
              <span className="brand-caption">A Satanic Church</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="nav-cta"
            href={robloxUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="service-logo"
              src="/brands/roblox.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
              unoptimized
            />
            <span>Enter ASC</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <nav
          className={`mobile-nav${menuOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          inert={!menuOpen}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
          <a
            className="mobile-play"
            href={robloxUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <Image
              className="service-logo"
              src="/brands/roblox.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
              unoptimized
            />
            Play on Roblox <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero">
          <Image
            className="hero-image"
            src="/images/gameplay/cathedral-hero.webp"
            alt="ASC's towering Gothic cathedral framed by glowing columns beneath a dark sky"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="hero-grain" />
          <div className="hero-frame" aria-hidden="true" />

          <div className="hero-content">
            <div className="hero-kicker">
              <Image
                className="hero-sigil"
                src="/baphomet-sigil.svg"
                alt="Baphomet sigil"
                width={54}
                height={54}
                priority
                unoptimized
              />
            </div>
            <h1>
              ASC
              <span className="hero-title-sub">A Satanic Church</span>
            </h1>
            <p className="hero-description">
              Step into a monumental Gothic world shaped by shadow, firelight,
              and the unexpected.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={robloxUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="service-logo"
                  src="/brands/roblox.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                  unoptimized
                />
                Play on Roblox <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-quiet" href="#world">
                Discover the world <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-caption">
            <span>ASC · A Satanic Church</span>
            <span>Created by kingpaimon2 · Roblox</span>
          </div>
          <a className="hero-scroll" href="#world" aria-label="Scroll to explore the world">
            <span />
            Scroll to explore
          </a>
        </section>

        <section className="intro-band" aria-label="About ASC">
          <p className="eyebrow">Enter another world</p>
          <p className="intro-statement">
            A cathedral at the center. <span>A world beyond its walls.</span>
          </p>
          <p className="intro-detail">
            Explore the halls, find the library, meet its characters, and
            discover what waits across the grounds.
          </p>
        </section>

        <section className="world-section page-section" id="world">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="The cathedral · 01"
              title="A cathedral in firelight."
            >
              From the torch-lit courtyard to the high sanctuary, the church
              unfolds as a sequence of deliberate thresholds.
            </SectionHeading>

            <figure className="cathedral-opening">
              <Image
                src="/images/gameplay/cathedral-courtyard-approach.webp"
                alt="A torch-lit cobblestone courtyard and staircase leading to the cathedral entrance"
                fill
                sizes="(max-width: 1260px) 100vw, 1260px"
              />
              <div className="cathedral-photo-shade" />
              <figcaption className="cathedral-opening-caption">
                <span className="eyebrow">01 / The approach</span>
                <span className="cathedral-photo-title">Follow the lights.</span>
                <span className="cathedral-photo-description">
                  A dark cobbled courtyard, bare branches, and a stairway
                  drawing the eye toward the entrance.
                </span>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </figcaption>
            </figure>

            <div className="cathedral-threshold">
              <figure className="cathedral-threshold-image">
                <Image
                  src="/images/gameplay/cathedral-exterior-approach.webp"
                  alt="The cathedral facade and its illuminated columns viewed through the surrounding trees"
                  fill
                  sizes="(max-width: 800px) 100vw, 58vw"
                />
                <figcaption className="cathedral-image-label">
                  02 / The outer facade
                </figcaption>
              </figure>
              <div className="cathedral-threshold-copy">
                <p className="eyebrow">02 / The threshold</p>
                <h3>Beyond the courtyard.</h3>
                <p>
                  The Gothic facade rises behind a canopy of branches. Warm
                  columns and the open stair mark the way into the church.
                </p>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </div>
            </div>

            <div className="cathedral-nave-story">
              <div className="cathedral-nave-copy">
                <p className="eyebrow">03 / The great nave</p>
                <h3>A room built around the altar.</h3>
                <p>
                  Inside, a long patterned aisle leads past rows of crimson
                  pews and candlelight toward the pipe organ and sanctuary.
                  Chandeliers draw the eye upward through the dark hall.
                </p>
              </div>
              <figure className="cathedral-nave-image">
                <Image
                  src="/images/gameplay/cathedral-nave-altar.webp"
                  alt="View down the cathedral's patterned aisle toward the pipe organ, with red pews and chandeliers"
                  fill
                  sizes="(max-width: 800px) 100vw, 62vw"
                />
                <figcaption className="cathedral-image-label">
                  Captured in ASC · Roblox
                </figcaption>
              </figure>
            </div>

            <div className="cathedral-details">
              <figure className="cathedral-detail-card">
                <div className="cathedral-detail-image">
                  <Image
                    src="/images/gameplay/cathedral-nave-overlook.webp"
                    alt="Elevated view across the cathedral's rows of red pews and central aisle"
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <span className="eyebrow">04 / A view from above</span>
                  <span className="cathedral-detail-title">The nave in full.</span>
                  <span>
                    A broad look across the seating, aisle, and layered
                    candlelight.
                  </span>
                </figcaption>
              </figure>
              <figure className="cathedral-detail-card">
                <div className="cathedral-detail-image">
                  <Image
                    src="/images/gameplay/cathedral-sanctuary-organ.webp"
                    alt="The cathedral's pipe organ and illuminated sanctuary wall, framed by sculpted figures"
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <span className="eyebrow">05 / The sanctuary</span>
                  <span className="cathedral-detail-title">A final focal point.</span>
                  <span>
                    Pipes, stonework, firelight, and sculpted details gather
                    around the altar.
                  </span>
                </figcaption>
              </figure>
            </div>

            <figure className="baphomet-feature">
              <Image
                src="/images/gameplay/cathedral-baphomet.webp"
                alt="The winged Baphomet statue seated on a raised platform inside ASC's candle-lit cathedral"
                fill
                sizes="(max-width: 1260px) 100vw, 1260px"
              />
              <div className="baphomet-feature-shade" />
              <figcaption className="baphomet-feature-caption">
                <span className="eyebrow">06 / The central figure</span>
                <span className="baphomet-feature-title">Baphomet.</span>
                <span className="baphomet-feature-description">
                  A winged, horned figure sits at the center of the cathedral,
                  ringed by flame and candlelight.
                </span>
                <span className="scene-credit">The deity depicted in ASC · Roblox</span>
              </figcaption>
            </figure>

            <div className="baphomet-detail-grid">
              <figure className="baphomet-detail-card">
                <div className="baphomet-detail-image">
                  <Image
                    src="/images/gameplay/cathedral-sanctuary-organ.webp"
                    alt="The cathedral organ and sanctuary, with a framed Baphomet image above the altar"
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <span className="eyebrow">Above the organ</span>
                  <span>A portrait in the sanctuary.</span>
                </figcaption>
              </figure>
              <figure className="baphomet-detail-card">
                <div className="baphomet-detail-image">
                  <Image
                    src="/images/gameplay/education-council-stage.webp"
                    alt="The education hall stage, with a framed Baphomet portrait above the pipe organ"
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <span className="eyebrow">Within the education hall</span>
                  <span>The image returns above the stage.</span>
                </figcaption>
              </figure>
            </div>

            <div className="sanctuary-rules-story">
              <figure className="sanctuary-rules-image">
                <Image
                  src="/images/gameplay/sanctuary-rules-display.webp"
                  alt="A prominently displayed Rules of ASC sign inside the cathedral, outlining strict conduct and safety warnings"
                  fill
                  sizes="(max-width: 760px) 100vw, 58vw"
                />
                <figcaption className="cathedral-image-label">
                  Rules of ASC · Displayed in the cathedral · Roblox
                </figcaption>
              </figure>
              <div className="sanctuary-rules-copy">
                <p className="eyebrow">The rules of ASC</p>
                <h3>Respect the space. Respect one another.</h3>
                <p>
                  ASC sets clear expectations for everyone who enters. The
                  rules call for respectful conduct, protection of personal
                  information, and no harassment, threats, or disruptive
                  behavior.
                </p>
                <p>
                  Follow directions from priests and priestesses, keep
                  appropriate boundaries, and do not exploit or interfere with
                  the experience. Violations may lead to removal or a ban.
                </p>
                <span className="rules-warning">
                  Read and follow the posted rules before participating.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="cemetery-section page-section" id="old-cemetery">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Beyond the cathedral · 03"
              title="The old cemetery."
            >
              Follow the grounds into a rain-dark woodland, where worn
              headstones gather beneath the trees around a solitary winged
              statue.
            </SectionHeading>

            <figure className="cemetery-feature">
              <Image
                src="/images/gameplay/old-cemetery.webp"
                alt="The old cemetery at night, with scattered headstones, dark woodland, and a winged statue lit by fire"
                fill
                sizes="(max-width: 1260px) 100vw, 1260px"
              />
              <div className="cemetery-image-shade" />
              <figcaption className="cemetery-caption">
                <span className="eyebrow">01 / The old cemetery</span>
                <span className="cemetery-title">
                  A quiet place beneath the trees.
                </span>
                <span className="cemetery-description">
                  Rain falls through the forest canopy as candlelight catches
                  the stones and the statue above them.
                </span>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="education-section page-section" id="education-hall">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="ASC's Education Hall · 02"
              title="A hall for education and discovery."
            >
              Beyond the main cathedral, ASC&apos;s Education Hall brings
              together soaring stonework, an intimate library, and spaces for
              learning and teaching.
            </SectionHeading>

            <figure className="education-hero">
              <Image
                src="/images/gameplay/education-hall-nave.webp"
                alt="The vaulted education hall interior, with a red-lit apse, rose window, and Gothic arches"
                fill
                sizes="(max-width: 1260px) 100vw, 1260px"
              />
              <div className="education-image-shade" />
              <figcaption className="education-hero-caption">
                <span className="eyebrow">01 / Within the hall</span>
                <span className="education-photo-title">
                  A space for discovery.
                </span>
                <span className="education-photo-description">
                  Gothic arches frame the hall, leading toward a rose window
                  and a deep-red sanctuary.
                </span>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </figcaption>
            </figure>

            <div className="education-feature-row">
              <figure className="education-feature-image">
                <Image
                  src="/images/gameplay/education-hall-exterior.webp"
                  alt="The education hall's tall Gothic towers rising above the grounds, lit by fire and lanterns"
                  fill
                  sizes="(max-width: 760px) 100vw, 55vw"
                />
                <figcaption className="cathedral-image-label">
                  02 / The towers · Captured in ASC · Roblox
                </figcaption>
              </figure>
              <div className="education-feature-copy">
                <p className="eyebrow">A landmark of its own</p>
                <h3>Gothic stone against the night.</h3>
                <p>
                  Tall spires, a glowing rose window, and a domed pavilion
                  create a striking silhouette across the surrounding grounds.
                </p>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </div>
            </div>

            <figure className="education-library">
              <Image
                src="/images/gameplay/education-hall-library.webp"
                alt="The education hall library, with towering wooden bookshelves beneath carved Gothic arches"
                fill
                sizes="(max-width: 1260px) 100vw, 1260px"
              />
              <div className="education-image-shade" />
              <figcaption className="education-library-caption">
                <span className="eyebrow">03 / The library</span>
                <span className="education-photo-title">
                  Knowledge in the arches.
                </span>
                <span className="education-photo-description">
                  Shelves of books sit beneath carved timber and stonework,
                  opening into another quiet aisle.
                </span>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </figcaption>
            </figure>

            <div className="council-teaching">
              <figure className="council-stage-image">
                <Image
                  src="/images/gameplay/education-council-stage.webp"
                  alt="The raised education stage between the cathedral's pipe organ, reserved for Church Council members"
                  fill
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
                <figcaption className="cathedral-image-label">
                  The council stage · Captured in ASC · Roblox
                </figcaption>
              </figure>
              <div className="council-teaching-copy">
                <p className="eyebrow">04 / The council stage</p>
                <h3>A place to teach, not to wander onto.</h3>
                <p>
                  The raised stage is reserved for Church Council members.
                  They are the ones who may step up to lead education in the
                  hall; it isn&apos;t an open platform for everyone.
                </p>
                <span className="council-access-note">
                  Access · Church Council only
                </span>
              </div>
            </div>

            <div className="educators-text">
              <div className="educators-text-copy">
                <p className="eyebrow">05 / The educators&apos; text</p>
                <h3>The Satanic Bible, for educators and priests.</h3>
                <p>
                  The in-game Bible is a teaching resource for ASC&apos;s
                  educators and priests, supporting the lessons they lead in
                  the hall.
                </p>
                <span className="scene-credit">The book as shown in ASC · Roblox</span>
              </div>
              <figure className="educators-text-image">
                <Image
                  src="/images/gameplay/educators-satanic-bible.webp"
                  alt="The Satanic Bible resting on a small table inside ASC"
                  fill
                  sizes="(max-width: 760px) 100vw, 58vw"
                />
                <figcaption className="cathedral-image-label">
                  Educators&apos; and priests&apos; text · Captured in ASC · Roblox
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="archive-section page-section" id="archive">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="ASC's Grand Library"
              title="A library built for wandering."
            >
              Follow the warm light beneath a sequence of timber arches. Find
              the librarian, browse the shelves, and choose a book to read.
            </SectionHeading>

            <figure className="archive-banner">
              <Image
                src="/images/gameplay/grand-library-aisle.webp"
                alt="A long aisle through the Grand Library, lined with tall wooden shelves and glowing lamps"
                fill
                sizes="(max-width: 900px) 100vw, 1260px"
              />
              <div className="archive-banner-shade" />
              <figcaption>
                <span className="eyebrow">01 / The main aisle</span>
                <span>Let the shelves lead the way.</span>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </figcaption>
            </figure>

            <div className="library-feature-row">
              <figure className="library-feature-image">
                <Image
                  src="/images/gameplay/grand-library-exterior.webp"
                  alt="A lantern-lit library pavilion beside ASC's Gothic cathedral"
                  fill
                  sizes="(max-width: 760px) 100vw, 55vw"
                />
                <figcaption className="cathedral-image-label">
                  02 / The library outside · Captured in ASC · Roblox
                </figcaption>
              </figure>
              <div className="library-feature-copy">
                <p className="eyebrow">A world beyond the shelves</p>
                <h3>A library with its own place in ASC.</h3>
                <p>
                  Outside, the pavilion sits beneath a lantern and looks back
                  toward the cathedral towers. Inside, warm timber and long
                  aisles make room to pause and explore.
                </p>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </div>
            </div>

            <div className="library-books-story">
              <div className="library-books-copy">
                <p className="eyebrow">03 / Choose a volume</p>
                <h3>Books on the table. Stories on the shelves.</h3>
                <p>
                  Select a displayed book to open its in-game reader. These
                  catalog titles are part of the fictional world of ASC.
                </p>
                <ul className="library-book-list">
                  {books.map((book) => (
                    <li key={book}>{book}</li>
                  ))}
                </ul>
              </div>
              <figure className="library-books-image">
                <Image
                  src="/images/gameplay/grand-library-books.webp"
                  alt="A display table with illuminated in-game book titles ready to read"
                  fill
                  sizes="(max-width: 760px) 100vw, 58vw"
                />
                <figcaption className="cathedral-image-label">
                  Displayed volumes · Captured in ASC · Roblox
                </figcaption>
              </figure>
            </div>

            <figure className="archivist-feature">
              <Image
                src="/images/gameplay/ai-educator-archivist.webp"
                alt="The AI-powered Archivist educator waiting in the candlelit cathedral, beside a sign noting 24/7 responses"
                fill
                sizes="(max-width: 1260px) 100vw, 1260px"
              />
              <div className="archivist-feature-shade" />
              <figcaption className="archivist-feature-caption">
                <span className="eyebrow">The Archivist · AI educator</span>
                <span className="archivist-feature-title">
                  Curious at any hour.
                </span>
                <span className="archivist-feature-description">
                  Ask a question, explore an idea, or start a conversation.
                  The AI-powered educator is there to respond 24/7.
                </span>
                <span className="scene-credit">Available in ASC · Roblox</span>
              </figcaption>
            </figure>

            <figure className="library-visitor-feature">
              <Image
                src="/images/gameplay/grand-library-visitor.webp"
                alt="A visitor among the Grand Library's bookshelves, with a welcoming message"
                fill
                sizes="(max-width: 1260px) 100vw, 1260px"
              />
              <div className="archive-banner-shade" />
              <figcaption>
                <span className="eyebrow">04 / A welcome from the stacks</span>
                <span>Another seeker of knowledge.</span>
                <span className="scene-credit">Captured in ASC · Roblox</span>
              </figcaption>
            </figure>

            <p className="archive-note">
              The Grand Library and its displayed books are part of the Roblox
              experience. This page presents catalog titles without
              reproducing the books' text.
            </p>
          </div>
        </section>

        <section className="characters-section page-section" id="characters">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Those within · 03"
              title="A presence in every hall."
            >
              Named characters and NPCs appear throughout the scanned place.
              Their roles here are described only where supported by the game
              files.
            </SectionHeading>

            <div className="character-feature">
              <figure className="character-image image-frame">
                <Image
                  src="/images/gameplay/archivist-in-library.webp"
                  alt="A character stands beside an illuminated structure on the ASC grounds"
                  fill
                  sizes="(max-width: 800px) 100vw, 52vw"
                />
                <figcaption className="image-label">Captured in Roblox</figcaption>
              </figure>
              <div className="character-copy">
                <p className="eyebrow">The library</p>
                <h3>The Grand Archivist</h3>
                <p>
                  An AI educator feature and a player-facing archive interface
                  are present in the scanned game. The Archivist is one of the
                  named figures associated with that space.
                </p>
                <div className="character-tags">
                  <span>AI educator</span>
                  <span>Archive UI</span>
                  <span>In-game character</span>
                </div>
              </div>
            </div>

            <div className="character-list">
              {[
                {
                  name: "The Tour Lady",
                  detail: "A named tour character with related tour logic in the place.",
                },
                {
                  name: "PriestChair / Litottie",
                  detail: "A character name found in the scanned place hierarchy.",
                },
                {
                  name: "Rabbit & Rat NPCs",
                  detail: "Two additional NPC names present in the game export.",
                },
              ].map((character, index) => (
                <article className="character-row" key={character.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{character.name}</h3>
                  <p>{character.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="systems-section page-section" id="systems">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Under the surface · 04"
              title="More than architecture."
            >
              The place includes interactive systems as well as detailed
              environments. These are features found in the scan, not promises
              about current availability.
            </SectionHeading>

            <div className="systems-list">
              {systems.map((system) => (
                <article className="system-row" key={system.number}>
                  <span className="system-number">{system.number}</span>
                  <h3>{system.title}</h3>
                  <p>{system.description}</p>
                  <ArrowUpRight className="system-arrow" size={18} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="curiosity-section">
          <div className="curiosity-inner">
            <div>
              <p className="eyebrow">A curious detour</p>
              <h2>Not every corner is solemn.</h2>
              <p>
                After the Gothic nave, the candlelit library, and the old
                cemetery, naturally the next stop is McDonald&apos;s. Because
                even the damned deserve fries.
              </p>
            </div>
            <a
              className="button button-outline"
              href={robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
            Respect the McMenu <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <figure className="mcdonalds-image">
            <Image
            src="/images/gameplay/asc-mcdonalds.webp"
            alt="A brightly lit McDonald's restaurant unexpectedly standing in the dark ASC grounds, with a burning car nearby"
            fill
            sizes="(max-width: 1260px) 100vw, 1260px"
            />
            <div className="mcdonalds-image-shade" />
            <figcaption className="mcdonalds-caption">
            <span className="eyebrow">A completely normal detour</span>
            <span>Darkness. Damnation. Drive-thru.</span>
            <span className="scene-credit">Captured in ASC · Roblox</span>
            </figcaption>
          </figure>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#top">
            <Image
              className="brand-logo"
              src="/asc-main-icon.png"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
            />
            <span className="brand-copy">
              <span className="brand-name">ASC</span>
              <span className="brand-caption">A Satanic Church</span>
            </span>
          </a>
          <p>
            A Gothic Roblox experience by kingpaimon2. Independent and
            unaffiliated with any real-world religious or political
            organizations.
          </p>
          <div className="footer-links">
            <a
              className="footer-play"
              href={robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="service-logo"
                src="/brands/roblox.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                unoptimized
              />
              Play on Roblox <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              className="footer-play"
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="service-logo"
                src="/brands/discord.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                unoptimized
              />
              Join our Discord <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              className="footer-play"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="service-logo"
                src="/brands/github.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                unoptimized
              />
              GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              className="footer-play"
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PanelsTopLeft
                className="service-logo"
                size={16}
                aria-hidden="true"
              />
              Portfolio <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 kingpaimon&apos;s ASC (A SATANIC CHURCH) All rights reserved !!</span>
          <span>
            A collection of in-game Roblox captures from ASC.
          </span>
        </div>
      </footer>
    </div>
  );
}
