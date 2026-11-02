import React from "react";
import { ArrowDown, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-sanctum-border/40">
      {/* 
        NO BACKGROUND PHOTOS PER USER INSTRUCTION:
        "dont add any photos in background, i will give you photos"
        We rely entirely on pure CSS dark gothic stone tones, radial ember lighting, and editorial framing.
      */}
      <div className="absolute inset-0 pointer-events-none gothic-bg" />

      {/* Decorative hairline frames */}
      <div className="absolute inset-x-8 top-28 bottom-12 border border-sanctum-border/20 pointer-events-none hidden lg:block" />
      <div className="absolute top-28 left-8 w-4 h-4 border-t-2 border-l-2 border-sanctum-crimson/50 hidden lg:block" />
      <div className="absolute top-28 right-8 w-4 h-4 border-t-2 border-r-2 border-sanctum-crimson/50 hidden lg:block" />
      <div className="absolute bottom-12 left-8 w-4 h-4 border-b-2 border-l-2 border-sanctum-crimson/50 hidden lg:block" />
      <div className="absolute bottom-12 right-8 w-4 h-4 border-b-2 border-r-2 border-sanctum-crimson/50 hidden lg:block" />

      <div className="relative max-w-4xl mx-auto text-center z-10 space-y-8">
        {/* Solemn Sigil & Overline */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-3 text-sanctum-crimson">
            <span className="h-px w-8 bg-sanctum-crimson/60" />
            <span className="text-xl">⛧</span>
            <span className="h-px w-8 bg-sanctum-crimson/60" />
          </div>
          <p className="text-xs sm:text-sm font-serif tracking-[0.35em] uppercase text-sanctum-gold/90">
            A Roblox Gothic Cathedral Experience
          </p>
        </div>

        {/* Editorial Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-[0.06em] text-sanctum-bone leading-[1.1] uppercase">
          ASC — A Satanic <span className="text-sanctum-crimson font-semibold">Church</span>
        </h1>

        {/* Authentic Game Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-sanctum-parchment/80 font-sans font-light leading-relaxed tracking-wide">
          A fictional gothic roleplay and architectural sanctuary created by <span className="text-sanctum-bone font-medium">kingpaimon2</span>. 
          Step into a monumental stone cathedral featuring vaulted ribbed ceilings, autonomous clergy AI, 
          the Great Occult Library, and living ceremonial lore.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-sanctum-crimson hover:bg-sanctum-crimson-glow text-white text-xs font-serif uppercase tracking-[0.25em] transition-all duration-300 shadow-lg shadow-sanctum-crimson/20 group"
          >
            <span>Enter the Sanctuary</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#world"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 border border-sanctum-border hover:border-sanctum-bone/60 text-sanctum-parchment hover:text-white text-xs font-serif uppercase tracking-[0.25em] transition-all duration-300 bg-sanctum-900/60"
          >
            <span>Explore Architecture</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Verified Scan Statistics Bar */}
        <div className="pt-12 sm:pt-16 border-t border-sanctum-border/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block font-serif text-2xl sm:text-3xl text-sanctum-bone font-normal tracking-wider">
              164,153
            </span>
            <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-ash">
              Scanned Instances
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-serif text-2xl sm:text-3xl text-sanctum-crimson font-normal tracking-wider">
              102
            </span>
            <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-ash">
              Skull Candelabras
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-serif text-2xl sm:text-3xl text-sanctum-gold font-normal tracking-wider">
              638
            </span>
            <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-ash">
              Hand-Carved Pews
            </span>
          </div>

          <div className="space-y-1">
            <span className="block font-serif text-2xl sm:text-3xl text-sanctum-bone font-normal tracking-wider">
              6
            </span>
            <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-ash">
              Forbidden Grimoires
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
