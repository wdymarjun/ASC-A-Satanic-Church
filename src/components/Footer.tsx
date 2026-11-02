import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sanctum-950 border-t border-sanctum-border/60 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Final CTA Banner */}
        <div className="bg-sanctum-900 border border-sanctum-border p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-2xl text-sanctum-crimson font-serif">⛧</span>
            <h3 className="text-2xl sm:text-4xl font-serif text-sanctum-bone uppercase tracking-wider">
              Enter the Sanctuary
            </h3>
            <p className="text-xs sm:text-sm text-sanctum-parchment/80 font-sans font-light leading-relaxed">
              Step across the stone narthex into ASC on Roblox. Experience the vaulted cathedral nave, 
              the Great Occult Library, and the living ceremonial roleplay firsthand.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-sanctum-crimson hover:bg-sanctum-crimson-glow text-white text-xs font-serif uppercase tracking-[0.25em] transition-all duration-300 shadow-xl group"
            >
              <span>Play ASC on Roblox</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-sanctum-border/40">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-sanctum-crimson text-xl font-serif">⛧</span>
              <span className="font-serif text-base tracking-[0.2em] text-sanctum-bone uppercase">
                ASC — A Satanic Church
              </span>
            </div>
            <p className="text-xs text-sanctum-ash font-sans max-w-sm leading-relaxed">
              A fictional gothic architectural and ceremonial roleplay experience on Roblox. 
              Created and directed by <span className="text-sanctum-parchment">kingpaimon2</span>.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-gold">
              Navigation
            </span>
            <ul className="text-xs space-y-1.5 font-serif uppercase tracking-wider text-sanctum-ash">
              <li>
                <a href="#world" className="hover:text-sanctum-bone transition-colors">
                  Sanctuary Grounds
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-sanctum-bone transition-colors">
                  Occult Grimoires
                </a>
              </li>
              <li>
                <a href="#characters" className="hover:text-sanctum-bone transition-colors">
                  Clergy &amp; Entities
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-sanctum-bone transition-colors">
                  Decrees &amp; Ranks
                </a>
              </li>
              <li>
                <a href="#easter-egg" className="hover:text-sanctum-bone transition-colors">
                  Beyond the Nave
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-gold">
              Experience Details
            </span>
            <p className="text-xs text-sanctum-ash font-sans leading-relaxed">
              Place ID: <span className="font-mono text-sanctum-parchment">91131584470075</span>
              <br />
              Platform: <span className="text-sanctum-parchment">Roblox</span>
              <br />
              Tooling: <span className="text-sanctum-parchment">Rojo 7.7.0 Sync Pipeline</span>
            </p>
          </div>
        </div>

        {/* Legal & Creative Independence Disclaimer */}
        <div className="pt-8 border-t border-sanctum-border/40 text-[11px] text-sanctum-ash/80 font-sans leading-relaxed space-y-2">
          <p>
            &copy; {new Date().getFullYear()} ASC — A Satanic Church. All rights reserved. Created by kingpaimon2 for the Roblox platform. 
            All in-game doctrines, grimoires, rituals, and characters are entirely fictional creative works designed exclusively for atmospheric roleplay and architecture exploration.
          </p>
          <p>
            This experience and website are an independent Roblox creative project and are not affiliated with, endorsed by, or associated with any real-world religious, political, or external organizations.
          </p>
        </div>
      </div>
    </footer>
  );
}

