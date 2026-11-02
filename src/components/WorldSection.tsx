import React from "react";
import Image from "next/image";
import { Compass, BookOpen, Flame, Music, Church, Trees } from "lucide-react";

export default function WorldSection() {
  const architecturalFeatures = [
    {
      icon: <Church className="w-5 h-5 text-sanctum-crimson" />,
      title: "The Gothic Cathedral & Triple-Portal Narthex",
      area: "UltimateSingleHallGothic",
      description:
        "The centerpiece structure of ASC. Built with soaring ribbed stone vaulting, compound colonnade pillars, flying buttresses, and monumental double oak doors beneath a carved triple-portal archway.",
    },
    {
      icon: <Flame className="w-5 h-5 text-sanctum-ember" />,
      title: "The Altar Stage & 102 Skull Candelabras",
      area: "Sanctuary Altar",
      description:
        "An elevated ceremonial stage crowned with the Baphomet idol and flanked by 102 triple-wick skull candelabras, powered by an in-engine dynamic flicker simulation reproducing living candlelight.",
    },
    {
      icon: <Music className="w-5 h-5 text-sanctum-gold" />,
      title: "The Grand Pipe Organ",
      area: "Organ1 Loft",
      description:
        "A colossal gothic instrument composed of over 10,075 modeled parts. Positioned high in the choir gallery with an authentic multi-manual control console and ceremonial acoustic presets.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-sanctum-parchment" />,
      title: "The Great Occult Library",
      area: "The Forbidden Archives",
      description:
        "A multi-tiered gothic library overseen by the Grand Archivist. Features 100 interaction prompts: rotating globes, searchable drawers, live hint books, and concealment wardrobes.",
    },
    {
      icon: <Compass className="w-5 h-5 text-sanctum-ash" />,
      title: "The Whispering Graveyard",
      area: "Outer Grounds",
      description:
        "Surrounded by misty pine woodlands and weathered iron fences. Weathered tombstones and lanterns commemorate failed initiates, accompanied by localized spatial whisper acoustics.",
    },
    {
      icon: <Trees className="w-5 h-5 text-sanctum-crimson" />,
      title: "The Forest & Nature Enclave",
      area: "Outer Perimeter",
      description:
        "Dense pine forests and procedural grass fields surrounding the cathedral perimeter. Includes realistic rain precipitation, mist, and the historic Gothic stone bridge.",
    },
  ];

  return (
    <section id="world" className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-sanctum-border/40">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-[0.3em] text-sanctum-gold">
            <span>Spatial Map & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-sanctum-bone uppercase tracking-wider">
            The Sanctuary Grounds
          </h2>
          <div className="w-16 h-0.5 bg-sanctum-crimson mx-auto my-4" />
          <p className="text-sm sm:text-base text-sanctum-parchment/80 font-sans font-light leading-relaxed">
            Constructed with 164,153 individual components, the ASC cathedral stands as an ambitious work 
            of classical gothic architecture inside Roblox — from its rib-vaulted heights down to the 
            crypt-like silence of the library.
          </p>
        </div>

        {/* Authentic In-Game Screenshots Grid (Framed, Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Screenshot 1: Cathedral Nave */}
          <div className="bg-sanctum-900 border border-sanctum-border/60 p-3 sm:p-4 flex flex-col group hover:border-sanctum-crimson/50 transition-colors">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
              <Image
                src="/images/cathedral-nave.png"
                alt="ASC Cathedral Nave - Vaulted gothic arches, pews, and soaring altar"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              <span className="absolute top-3 left-3 text-[10px] font-serif uppercase tracking-widest bg-black/80 px-2.5 py-1 text-sanctum-gold border border-sanctum-gold/30">
                In-Game Render
              </span>
            </div>
            <div className="pt-4 pb-2 px-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg text-sanctum-bone tracking-wide">
                  The Cathedral Nave & Colonnade
                </h3>
                <p className="text-xs sm:text-sm text-sanctum-parchment/70 font-sans mt-1 leading-relaxed">
                  Looking down the central aisle toward the high altar. Featuring rows of dark carved pews, 
                  traceried gothic windows, and soaring compound pillars.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sanctum-border/40 flex items-center justify-between text-[11px] font-serif uppercase tracking-wider text-sanctum-ash">
                <span>Location: UltimateSingleHallGothic</span>
                <span>Seat Count: 638 Pews</span>
              </div>
            </div>
          </div>

          {/* Screenshot 2: Altar & Ceremonial Hall */}
          <div className="bg-sanctum-900 border border-sanctum-border/60 p-3 sm:p-4 flex flex-col group hover:border-sanctum-crimson/50 transition-colors">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
              <Image
                src="/images/cathedral-preview.jpg"
                alt="ASC Cathedral Interior - Altar chandeliers, candelabras, and pulpit"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              <span className="absolute top-3 left-3 text-[10px] font-serif uppercase tracking-widest bg-black/80 px-2.5 py-1 text-sanctum-crimson border border-sanctum-crimson/30">
                In-Game Capture
              </span>
            </div>
            <div className="pt-4 pb-2 px-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg text-sanctum-bone tracking-wide">
                  The High Altar & 102 Candelabras
                </h3>
                <p className="text-xs sm:text-sm text-sanctum-parchment/70 font-sans mt-1 leading-relaxed">
                  Ceremonial dais where the High Priests assemble. Equipped with hundreds of skull candles 
                  and the elevated platform reserved for congregation prayer.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sanctum-border/40 flex items-center justify-between text-[11px] font-serif uppercase tracking-wider text-sanctum-ash">
                <span>Feature: Dynamic Candle Lighting</span>
                <span>Status: Altar Sealed</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Photo Placeholder Slot: Honoring "i will give you photos" */}
        <div className="border border-dashed border-sanctum-gold/30 bg-sanctum-900/30 p-6 sm:p-8 rounded-none text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-widest text-sanctum-gold">
            <span>📷 Ready for Future In-Game Photographs</span>
          </div>
          <p className="max-w-xl mx-auto text-xs text-sanctum-parchment/60 font-sans">
            Have high-angle captures of the Organ loft, Graveyard mist, or Great Library? 
            This section is formatted to seamlessly embed your next collection of screenshots whenever you provide them.
          </p>
        </div>

        {/* Detailed Architecture Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architecturalFeatures.map((feat) => (
            <div
              key={feat.title}
              className="bg-sanctum-900/60 border border-sanctum-border/60 hover:border-sanctum-border p-6 space-y-4 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-sanctum-850 border border-sanctum-border/60">{feat.icon}</div>
                <span className="text-[10px] font-serif uppercase tracking-widest text-sanctum-ash">
                  {feat.area}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base text-sanctum-bone tracking-wide">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-sanctum-parchment/70 font-sans leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

