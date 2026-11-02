"use client";

import React, { useState } from "react";
import { BookOpen, Sparkles, Feather, X, ChevronRight } from "lucide-react";

interface Grimoire {
  id: string;
  title: string;
  subtitle: string;
  sigil: string;
  binding: string;
  summary: string;
  chant: string;
  author: string;
  chapters: string[];
}

export default function ArchiveSection() {
  const [selectedBook, setSelectedBook] = useState<Grimoire | null>(null);

  const grimoires: Grimoire[] = [
    {
      id: "CodexArcana",
      title: "The Infernal Codex of Arcana",
      subtitle: "Foundational Tenets & The Nine Precepts",
      sigil: "🜏",
      binding: "Abyssal Crimson Leather with Tarnished Gold Inlay",
      summary:
        "The primary theological text of the church. Emphasizes individual sovereignty, awakening the inner flame of intellect, and the solemn covenant of the 216 Hours of Vigil for spiritual ascension.",
      chant: "Ignis Aeternus, Veritas Tenebris",
      author: "The First Archon",
      chapters: [
        "I. The Dawn of the Church",
        "II. The Law of the Council",
        "III. The 216 Hours of Vigil",
      ],
    },
    {
      id: "LitanyPaimon",
      title: "Litany of Great King Paimon",
      subtitle: "Of the Western Throne & The Thousand Legions",
      sigil: "🜍",
      binding: "Obsidian Night Cloth with Solar Gilt Border",
      summary:
        "A ceremonial hymn dedicated to Great King Paimon, master of secret arts, earthly elements, and dignity. Directs worshippers to approach wisdom with courageous resolve rather than trembling fear.",
      chant: "Salve Paimon Rex Occidentalis",
      author: "Crowned Order of the West",
      chapters: [
        "I. The Herald of the West",
        "II. The Gift of Sciences",
      ],
    },
    {
      id: "RitesOfAltar",
      title: "Blood & Sulfur: Rites of the Altar",
      subtitle: "Ceremonial Protocols of the 102 Candelabras",
      sigil: "🝤",
      binding: "Coagulated Maroon Vellum with Sanguine Clasps",
      summary:
        "Detailed liturgical guidelines governing altar maintenance, the lighting of 102 skull wicks in dragon's blood tallow, and ceremonial protocols during the transit of the Blood Moon.",
      chant: "Flamma Nigra, Sanguis Animae Nostrae",
      author: "High Priest of the Altar",
      chapters: [
        "I. The Consecration of Skull Candles",
        "II. The Blood Moon Protocol",
      ],
    },
    {
      id: "SentinelVigil",
      title: "Vigilance of the Sentinels",
      subtitle: "The Martial Creed of the Protectors",
      sigil: "⚔",
      binding: "Cold Steel Plates over Dark Hide",
      summary:
        "The operational rules for church sentinels and moderation clergy. Mandates impartial defense of the sacred sanctuary, non-interference in peaceful contemplation, and banishment of trespassers.",
      chant: "Ferrum et Silentium — Custodes Aeterni",
      author: "Commander of the Sentinels",
      chapters: [
        "I. The Shield Against the False Light",
        "II. Rules of Engagement",
      ],
    },
    {
      id: "BurgerMystery",
      title: "The Salt of the Damned",
      subtitle: "Discovered Parchment from Villager III",
      sigil: "🍟",
      binding: "Oil-Stained Parchment with Charcoal Ink",
      summary:
        "A humorous in-universe diary discovered near the courtyard explaining why a fast-food counter exists beside the ancient gothic cathedral. Confesses that dark acolytes crave crispy fried potatoes after hours of deep chanting.",
      chant: "Benedictus Sit Fries in Saecula",
      author: "Villager 3 (The Fast-Food Fanatic)",
      chapters: [
        "I. A Strange Confession",
        "II. The Golden Crisp Precept",
      ],
    },
    {
      id: "SatanicBible",
      title: "The Satanic Bible & Demonology",
      subtitle: "The Books of Lucifer, Belial & The Goetia",
      sigil: "⛧",
      binding: "Iron-Cornered Dark Calfskin with Brimstone Red Thread",
      summary:
        "Fictionalized in-game compilation exploring classic philosophical tenets of reason (Lucifer), mastery of earthly reality (Belial), the primal subconscious ocean (Leviathan), and the Nine Infernal Statements.",
      chant: "Fiat Voluntas Nostra — Shemhamforash!",
      author: "The High Council of ASC",
      chapters: [
        "I. The Book of Lucifer (Reason)",
        "II. The Book of Belial (Earth)",
        "III. The Book of Leviathan (Tempest)",
        "IV. The 72 Sovereigns",
        "V. The Nine Infernal Statements",
      ],
    },
  ];

  return (
    <section id="archive" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-sanctum-900/40 border-b border-sanctum-border/40">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-[0.3em] text-sanctum-gold">
            <BookOpen className="w-4 h-4 text-sanctum-gold" />
            <span>The Great Occult Library</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-sanctum-bone uppercase tracking-wider">
            The Grimoire Collection
          </h2>
          <div className="w-16 h-0.5 bg-sanctum-crimson mx-auto my-4" />
          <p className="text-sm sm:text-base text-sanctum-parchment/80 font-sans font-light leading-relaxed">
            Preserved on podiums within the Great Library, these six authored tomes form the liturgical lore 
            of ASC. Congregants can interact with each book in-game via the custom Reader UI.
          </p>
        </div>

        {/* Grimoire Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grimoires.map((book) => (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="group cursor-pointer bg-sanctum-900 border border-sanctum-border/60 hover:border-sanctum-crimson/60 p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sanctum-crimson/10 to-transparent pointer-events-none" />

              <div className="space-y-4">
                {/* Book Sigil & Heading */}
                <div className="flex items-center justify-between border-b border-sanctum-border/40 pb-3">
                  <span className="text-2xl text-sanctum-crimson font-serif">{book.sigil}</span>
                  <span className="text-[10px] font-serif uppercase tracking-widest text-sanctum-gold">
                    Read Tome
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-sanctum-bone group-hover:text-sanctum-bone transition-colors leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-xs font-serif text-sanctum-gold/90 mt-1 italic">
                    {book.subtitle}
                  </p>
                </div>

                <p className="text-xs text-sanctum-parchment/70 font-sans leading-relaxed line-clamp-3">
                  {book.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sanctum-border/40 flex items-center justify-between text-[11px] font-serif uppercase tracking-wider text-sanctum-ash">
                <span>By {book.author}</span>
                <span className="inline-flex items-center text-sanctum-crimson group-hover:translate-x-1 transition-transform">
                  Inspect <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* In-Game Disclaimer */}
        <div className="text-center text-xs text-sanctum-ash font-sans max-w-2xl mx-auto">
          <p>
            * Note: All grimoires and liturgical texts are fictional in-game narrative works written exclusively 
            for roleplay atmosphere within the Roblox platform.
          </p>
        </div>
      </div>

      {/* Grimoire Reader Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-sanctum-900 border border-sanctum-crimson/60 max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 p-2 text-sanctum-ash hover:text-white transition-colors"
              aria-label="Close Grimoire"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 border-b border-sanctum-border pb-4">
              <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-widest text-sanctum-gold">
                <span>{selectedBook.sigil}</span>
                <span>The Forbidden Archives</span>
              </div>
              <h3 className="text-2xl font-serif text-sanctum-bone">{selectedBook.title}</h3>
              <p className="text-xs font-serif text-sanctum-parchment/80 italic">{selectedBook.subtitle}</p>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 text-sm text-sanctum-parchment font-sans leading-relaxed">
              <div>
                <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-ash">
                  Binding & Material
                </span>
                <p className="text-xs text-sanctum-bone mt-0.5">{selectedBook.binding}</p>
              </div>

              <div>
                <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-ash">
                  Doctrinal Summary
                </span>
                <p className="text-xs sm:text-sm text-sanctum-parchment/90 mt-1">{selectedBook.summary}</p>
              </div>

              {/* Liturgical Chant */}
              <div className="p-4 bg-sanctum-950 border border-sanctum-crimson/40 text-center space-y-1">
                <span className="text-[10px] font-serif uppercase tracking-widest text-sanctum-crimson">
                  Liturgical Latin Chant
                </span>
                <p className="font-serif italic text-sm text-sanctum-bone tracking-wide">
                  &ldquo;{selectedBook.chant}&rdquo;
                </p>
              </div>

              {/* Chapters */}
              <div>
                <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-ash mb-1">
                  Contents in Volume
                </span>
                <ul className="text-xs space-y-1 text-sanctum-parchment/80 list-disc list-inside">
                  {selectedBook.chapters.map((ch) => (
                    <li key={ch}>{ch}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-sanctum-border flex items-center justify-between text-xs font-serif text-sanctum-ash">
              <span>Attributed to {selectedBook.author}</span>
              <button
                onClick={() => setSelectedBook(null)}
                className="px-4 py-2 border border-sanctum-border hover:border-sanctum-crimson text-sanctum-bone text-xs uppercase tracking-wider transition-colors"
              >
                Close Volume
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
