import React from "react";
import { Coffee, Trees, HelpCircle } from "lucide-react";

export default function EasterEggSection() {
  return (
    <section id="easter-egg" className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-sanctum-border/40">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-[0.3em] text-sanctum-ash">
            <HelpCircle className="w-3.5 h-3.5 text-sanctum-gold" />
            <span>Curiosities & Lore</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-sanctum-bone uppercase tracking-wider">
            Beyond the Nave
          </h2>
          <div className="w-12 h-0.5 bg-sanctum-border mx-auto my-3" />
        </div>

        {/* Easter Egg Feature Card */}
        <div className="bg-sanctum-900/60 border border-sanctum-border/60 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 text-[10px] font-serif uppercase tracking-widest px-2.5 py-1 bg-sanctum-850 border border-sanctum-gold/40 text-sanctum-gold">
              <span>Confirmed In-Game Easter Egg</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-sanctum-bone">
              The Courtyard McDonald&apos;s &amp; Tree House
            </h3>

            <p className="text-xs sm:text-sm text-sanctum-parchment/80 font-sans leading-relaxed">
              Tucked outside the cathedral courtyard beside the ancient trees rests a fully modeled fast-food counter. 
              Far from an accident, this playful developer surprise is celebrated in Book V of the library 
              (<span className="italic text-sanctum-bone font-serif">The Salt of the Damned</span>) and highlighted 
              by the Tour Lady:
            </p>

            <blockquote className="p-4 bg-sanctum-950 border-l-2 border-sanctum-gold text-xs font-serif italic text-sanctum-bone leading-relaxed">
              &ldquo;Even worshippers of the dark arts get hungry after a long ritual! 
              The developer added a burger sanctuary right beside the ancient cathedral so no warlock goes hungry.&rdquo;
              <footer className="text-[10px] font-sans not-italic text-sanctum-ash mt-2">
                — Tour Lady Guide (Stop 3)
              </footer>
            </blockquote>
          </div>

          <div className="md:col-span-4 bg-sanctum-950 border border-sanctum-border/60 p-5 space-y-4 text-center">
            <div className="p-3 bg-sanctum-850 w-fit mx-auto border border-sanctum-border/60">
              <Coffee className="w-6 h-6 text-sanctum-gold" />
            </div>

            <h4 className="font-serif text-sm text-sanctum-bone">Secret Refueling Stop</h4>

            <p className="text-[11px] text-sanctum-parchment/60 font-sans leading-relaxed">
              Surrounded by pine trees, the courtyard corner provides a lighthearted contrast to the solemn cathedral 
              vaults inside.
            </p>

            <div className="pt-2 border-t border-sanctum-border/40 text-[10px] font-serif uppercase tracking-wider text-sanctum-ash">
              <span>Nearby: Remastered Tree House</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

