"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type GalleryCategory = "Cathedral" | "Library" | "Grounds";

type GalleryPhoto = {
  src: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  alt: string;
};

const photos: GalleryPhoto[] = [
  {
    src: "/images/gameplay/cathedral-exterior.webp",
    title: "The cathedral, after dark",
    caption: "Gothic spires and a red-lit entrance",
    category: "Cathedral",
    alt: "Low-angle Roblox screenshot of the ASC cathedral exterior at night, framed by trees.",
  },
  {
    src: "/images/gameplay/cathedral-and-rotunda.webp",
    title: "A city of stone",
    caption: "The cathedral and a domed pavilion",
    category: "Grounds",
    alt: "Wide Roblox screenshot showing the ASC cathedral, surrounding grounds, and a domed rotunda.",
  },
  {
    src: "/images/gameplay/central-nave.webp",
    title: "Toward the altar",
    caption: "A view down the candlelit nave",
    category: "Cathedral",
    alt: "Roblox screenshot looking along the dark cathedral nave toward the illuminated altar.",
  },
  {
    src: "/images/gameplay/cathedral-wide-view.webp",
    title: "The long view",
    caption: "Pews, columns, and the central aisle",
    category: "Cathedral",
    alt: "Elevated Roblox view across rows of red pews and the central aisle inside the cathedral.",
  },
  {
    src: "/images/gameplay/organ-and-sanctuary.webp",
    title: "The sanctuary organ",
    caption: "Pipework rising above the stage",
    category: "Cathedral",
    alt: "Roblox screenshot of the cathedral organ, altar, candles, and framed art.",
  },
  {
    src: "/images/gameplay/organ-apse.webp",
    title: "At the apse",
    caption: "The organ framed by stone and firelight",
    category: "Cathedral",
    alt: "Low-angle Roblox screenshot of the pipe organ and decorated cathedral apse.",
  },
  {
    src: "/images/gameplay/organ-console.webp",
    title: "At the console",
    caption: "A closer look at the organ controls",
    category: "Cathedral",
    alt: "Roblox screenshot of a pipe-organ control console set into a warm red-lit wooden wall.",
  },
  {
    src: "/images/gameplay/nave-overlook.webp",
    title: "From above",
    caption: "The congregation floor and candle rows",
    category: "Cathedral",
    alt: "Elevated Roblox screenshot surveying pews, columns, and candlelight in the cathedral.",
  },
  {
    src: "/images/gameplay/winged-statue-nave.webp",
    title: "A winged figure",
    caption: "Sculpture and candlelight in the hall",
    category: "Cathedral",
    alt: "Roblox screenshot of a large winged statue among candles in a cathedral hall.",
  },
  {
    src: "/images/gameplay/confession-booth.webp",
    title: "A private alcove",
    caption: "The confessional beside the nave",
    category: "Cathedral",
    alt: "Roblox screenshot of a wooden confessional with curtained booths and candle stands.",
  },
  {
    src: "/images/gameplay/sanctuary-rules.webp",
    title: "Rules of ASC",
    caption: "A notice displayed within the church",
    category: "Cathedral",
    alt: "Roblox screenshot of a framed Rules of ASC notice inside the cathedral.",
  },
  {
    src: "/images/gameplay/library-arcade.webp",
    title: "The library arcade",
    caption: "A warm passage between the shelves",
    category: "Library",
    alt: "Roblox screenshot of a long wooden library aisle framed by repeating arches and bookshelves.",
  },
  {
    src: "/images/gameplay/library-reading-room.webp",
    title: "Between the shelves",
    caption: "A quiet reading room",
    category: "Library",
    alt: "Roblox screenshot down a dark wood-paneled library aisle with lamps and shelves.",
  },
  {
    src: "/images/gameplay/archivist-library-desk.webp",
    title: "The archivist's desk",
    caption: "A guide waits in the library",
    category: "Library",
    alt: "Roblox screenshot of a character seated at the wooden library help desk.",
  },
  {
    src: "/images/gameplay/archivist-in-library.webp",
    title: "A visitor arrives",
    caption: "An in-game character among the books",
    category: "Library",
    alt: "Roblox screenshot of a small character in the library beneath in-game dialogue.",
  },
  {
    src: "/images/gameplay/library-hidden-corner.webp",
    title: "A corner out of place",
    caption: "Unexpected finds among the stacks",
    category: "Library",
    alt: "Roblox screenshot of books, a fallen ASC sign, and a hidden corner of the library.",
  },
  {
    src: "/images/gameplay/library-visitor.webp",
    title: "In the stacks",
    caption: "A character and a fallen sign",
    category: "Library",
    alt: "Roblox screenshot of a visitor standing between library shelves beside a fallen ASC sign.",
  },
  {
    src: "/images/gameplay/archive-floor-detail.webp",
    title: "An object in the archive",
    caption: "A small detail set into the floor",
    category: "Library",
    alt: "Overhead Roblox screenshot of a small dark object on a wooden library floor.",
  },
  {
    src: "/images/gameplay/courtyard-fountain.webp",
    title: "The courtyard fountain",
    caption: "A statue ringed by light",
    category: "Grounds",
    alt: "Roblox screenshot of a statue fountain surrounded by bright columns and trees.",
  },
  {
    src: "/images/gameplay/graveyard-statue.webp",
    title: "The graveyard",
    caption: "Lanterns and a statue in the rain",
    category: "Grounds",
    alt: "Rainy Roblox screenshot of a graveyard with headstones, trees, and a lit statue.",
  },
  {
    src: "/images/gameplay/graveyard-marker.webp",
    title: "A grave marker",
    caption: "Stone and candlelight on the grounds",
    category: "Grounds",
    alt: "Close Roblox screenshot of a grave marker and candles beside a cobbled path.",
  },
  {
    src: "/images/gameplay/woodland-entrance.webp",
    title: "Through the trees",
    caption: "The grounds beneath a grey sky",
    category: "Grounds",
    alt: "Roblox screenshot of the church grounds viewed through dark woodland and trees.",
  },
  {
    src: "/images/gameplay/exterior-approach.webp",
    title: "A light in the distance",
    caption: "The approach through the woods",
    category: "Grounds",
    alt: "Roblox screenshot of a distant illuminated ASC building seen through dark trees.",
  },
  {
    src: "/images/gameplay/ritual-floor-detail.webp",
    title: "A small hidden detail",
    caption: "An object beneath the candlelight",
    category: "Cathedral",
    alt: "Overhead Roblox screenshot of a small object on a dark tiled floor in red light.",
  },
  {
    src: "/images/gameplay/courtyard-mcdonalds.webp",
    title: "A very different stop",
    caption: "The McDonald's build among the grounds",
    category: "Grounds",
    alt: "Roblox screenshot of a McDonald's restaurant build among trees on the ASC grounds.",
  },
  {
    src: "/images/gameplay/organ-detail.webp",
    title: "The organ loft",
    caption: "Pipework, console, and sculpture",
    category: "Cathedral",
    alt: "Roblox screenshot of organ pipes, controls, and a small statue in the choir loft.",
  },
];

const categories = ["All scenes", "Cathedral", "Library", "Grounds"] as const;
type FilterCategory = (typeof categories)[number];

export default function GameGallery() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All scenes");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const visiblePhotos =
    activeCategory === "All scenes"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);
  const selectedPhoto =
    selectedIndex === null ? null : visiblePhotos[selectedIndex] ?? null;
  const isLightboxOpen = selectedIndex !== null && selectedPhoto !== null;

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? 0 : (current + 1) % visiblePhotos.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? 0
            : (current - 1 + visiblePhotos.length) % visiblePhotos.length,
        );
      }
      if (event.key === "Tab") {
        const dialog = document.querySelector<HTMLElement>(".lightbox");
        const controls = dialog?.querySelectorAll<HTMLElement>("button");
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [isLightboxOpen, visiblePhotos.length]);

  const openPhoto = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <section className="photo-gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <div>
          <p className="eyebrow">From inside ASC</p>
          <h3 id="gallery-title">The world, as it is.</h3>
          <p>
            Original Roblox captures across the cathedral, library, and grounds.
            Select any image to see the full frame.
          </p>
        </div>
        <span className="gallery-count">26 photographs</span>
      </div>

      <div className="gallery-filters" aria-label="Filter photographs">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "is-active" : ""}
            type="button"
            key={category}
            aria-pressed={activeCategory === category}
            onClick={() => {
              setActiveCategory(category);
              setSelectedIndex(null);
            }}
          >
            {category}
            {category === "All scenes" && <span>{photos.length}</span>}
          </button>
        ))}
      </div>

      <div className="game-gallery-grid" aria-live="polite">
        {visiblePhotos.map((photo, index) => (
          <button
            className="game-photo"
            type="button"
            key={photo.src}
            aria-label={`View ${photo.title}: ${photo.caption}`}
            onClick={(event) => openPhoto(index, event.currentTarget)}
          >
            <span className="game-photo-image">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <span className="game-photo-zoom" aria-hidden="true">
                View photograph
              </span>
            </span>
            <span className="game-photo-meta">
              <span>
                <span className="game-photo-title">{photo.title}</span>
                <span className="game-photo-caption">{photo.caption}</span>
              </span>
              <span className="game-photo-category">{photo.category}</span>
            </span>
          </button>
        ))}
      </div>

      {selectedPhoto && selectedIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="lightbox-panel">
            <div className="lightbox-topline">
              <span>ASC · {selectedPhoto.category}</span>
              <button
                className="lightbox-close"
                type="button"
                aria-label="Close photograph"
                ref={closeButtonRef}
                onClick={closeLightbox}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="lightbox-image">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="92vw"
                priority
              />
            </div>
            <div className="lightbox-bottomline">
              <button
                type="button"
                className="lightbox-arrow"
                aria-label="Previous photograph"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + visiblePhotos.length) %
                      visiblePhotos.length,
                  )
                }
              >
                <ArrowLeft size={17} aria-hidden="true" />
                <span>Previous</span>
              </button>
              <div className="lightbox-caption">
                <h4 id="lightbox-title">{selectedPhoto.title}</h4>
                <p>{selectedPhoto.caption}</p>
                <span>
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(visiblePhotos.length).padStart(2, "0")}
                </span>
              </div>
              <button
                type="button"
                className="lightbox-arrow"
                aria-label="Next photograph"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % visiblePhotos.length)
                }
              >
                <span>Next</span>
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
            <p className="lightbox-keyboard-hint">
              Use ← and → to browse · Esc to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
