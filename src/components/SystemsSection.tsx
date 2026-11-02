"use client";

import React, { useState } from "react";
import { ShieldCheck, Flame, Cpu, Award, Scroll, Calculator } from "lucide-react";

export default function SystemsSection() {
  const [inputHours, setInputHours] = useState<number>(15);

  const decrees = [
    { num: "I", text: "Trespass not against the sacred Roblox Terms of Service." },
    { num: "II", text: "Silence your idle chatter; let quiet reverence fill the halls." },
    { num: "III", text: "No profane spamming nor mockery during prayer or sermon." },
    { num: "IV", text: "The forbidden altar stage is sealed. Keep your distance, mortal." },
    { num: "V", text: "Maintain solemn dignity. No frivolous hopping or 'W+Sing'." },
    { num: "VI", text: "Speak only in English or Spanish within these accursed walls." },
    { num: "VII", text: "Show respect to all clergy and fellow congregants. Harassment invites exile." },
    { num: "VIII", text: "Do not exploit, glitch, or defile the sanctuary through illicit means." },
    { num: "IX", text: "Your presence here is a covenant. Break it, and the abyss claims you." },
  ];

  const ranks = [
    { name: "Lost Soul", hours: 0, color: "text-neutral-400", border: "border-neutral-700" },
    { name: "Acolyte", hours: 10, color: "text-red-800", border: "border-red-900" },
    { name: "Disciple", hours: 20, color: "text-red-600", border: "border-red-800" },
    { name: "Devotee", hours: 30, color: "text-red-500", border: "border-red-700" },
    { name: "Zealot", hours: 40, color: "text-crimson", border: "border-red-600" },
    { name: "Dark Congregant", hours: 50, color: "text-purple-400", border: "border-purple-800" },
    { name: "Shadow Initiate", hours: 60, color: "text-indigo-400", border: "border-indigo-800" },
    { name: "Infernal Disciple", hours: 70, color: "text-orange-500", border: "border-orange-800" },
    { name: "Blood Covenant", hours: 80, color: "text-amber-400", border: "border-amber-600" },
  ];

  // Calculate current rank based on input
  const currentRankIndex = ranks.reduce((acc, rank, idx) => {
    return inputHours >= rank.hours ? idx : acc;
  }, 0);

  const currentRank = ranks[currentRankIndex];
  const nextRank = currentRankIndex < ranks.length - 1 ? ranks[currentRankIndex + 1] : null;
  const hoursRemaining = nextRank ? Math.max(0, nextRank.hours - inputHours) : 0;

  return (
    <section id="systems" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-sanctum-900/40 border-b border-sanctum-border/40">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-[0.3em] text-sanctum-gold">
            <ShieldCheck className="w-4 h-4 text-sanctum-gold" />
            <span>Liturgical Order & Progression</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-sanctum-bone uppercase tracking-wider">
            Decrees & Progression
          </h2>
          <div className="w-16 h-0.5 bg-sanctum-crimson mx-auto my-4" />
          <p className="text-sm sm:text-base text-sanctum-parchment/80 font-sans font-light leading-relaxed">
            The sanctuary operates under nine formal decrees and an authored tier progression system 
            rewarding continuous vigil and dedication inside the church.
          </p>
        </div>

        {/* The 9 Decrees Grid */}
        <div className="bg-sanctum-900 border border-sanctum-border/60 p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-2 border-b border-sanctum-border/40 pb-6">
            <span className="text-xl text-sanctum-crimson font-serif">†</span>
            <h3 className="font-serif text-2xl text-sanctum-bone tracking-wide uppercase">
              The Nine Decrees of the Sanctuary
            </h3>
            <p className="text-xs font-serif text-sanctum-gold italic tracking-wider">
              Enforced at the narthex upon every soul entering the cathedral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decrees.map((dec) => (
              <div
                key={dec.num}
                className="p-4 bg-sanctum-950/60 border border-sanctum-border/40 space-y-2 hover:border-sanctum-crimson/40 transition-colors"
              >
                <span className="text-xs font-serif font-bold text-sanctum-crimson">
                  Decree {dec.num}
                </span>
                <p className="text-xs text-sanctum-parchment/80 font-sans leading-relaxed">
                  {dec.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4 text-xs font-serif italic text-sanctum-ash">
            &ldquo;May the shadows watch over your soul.&rdquo;
          </div>
        </div>

        {/* Rank Progression Hierarchy & Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Progression Ranks List */}
          <div className="lg:col-span-7 bg-sanctum-900 border border-sanctum-border/60 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-sanctum-border/40 pb-4">
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-sanctum-gold" />
                <h3 className="font-serif text-xl text-sanctum-bone">Rank Hierarchy</h3>
              </div>
              <span className="text-[10px] font-serif uppercase tracking-widest text-sanctum-ash">
                10 Hours / Rank
              </span>
            </div>

            <div className="space-y-3">
              {ranks.map((r, i) => (
                <div
                  key={r.name}
                  className={`p-3 bg-sanctum-950/80 border ${r.border} flex items-center justify-between text-xs font-serif`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-sanctum-ash font-mono w-4">0{i + 1}</span>
                    <span className={`font-semibold tracking-wide ${r.color}`}>{r.name}</span>
                  </div>
                  <span className="text-sanctum-ash tracking-wider font-mono">{r.hours} Hours Required</span>
                </div>
              ))}

              {/* Admin Rank */}
              <div className="p-3 bg-sanctum-950 border border-red-600/80 flex items-center justify-between text-xs font-serif mt-4">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 font-bold">★</span>
                  <span className="font-bold tracking-widest text-red-500 uppercase">DEMON (Admin Rank)</span>
                </div>
                <span className="text-red-400/80 tracking-wider">Reserved for kingpaimon2</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Rank Calculator */}
          <div className="lg:col-span-5 bg-sanctum-900 border border-sanctum-crimson/50 p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-3 border-b border-sanctum-border/40 pb-4">
              <Calculator className="w-5 h-5 text-sanctum-crimson" />
              <h3 className="font-serif text-xl text-sanctum-bone">Vigil Calculator</h3>
            </div>

            <p className="text-xs text-sanctum-parchment/70 font-sans leading-relaxed">
              Enter the total hours you have spent in contemplation within the sanctuary to calculate your spiritual rank:
            </p>

            <div className="space-y-2">
              <label htmlFor="hours-input" className="block text-[11px] font-serif uppercase tracking-widest text-sanctum-ash">
                Hours In-Game
              </label>
              <input
                id="hours-input"
                type="number"
                min="0"
                max="500"
                value={inputHours}
                onChange={(e) => setInputHours(Math.max(0, Number(e.target.value) || 0))}
                className="w-full bg-sanctum-950 border border-sanctum-border p-3 text-sm text-sanctum-bone font-mono focus:border-sanctum-crimson focus:outline-none"
              />
            </div>

            {/* Calculated Result Card */}
            <div className="p-5 bg-sanctum-950 border border-sanctum-border/60 space-y-3">
              <div>
                <span className="block text-[10px] font-serif uppercase tracking-widest text-sanctum-ash">
                  Earned Spiritual Rank
                </span>
                <span className={`text-2xl font-serif font-bold tracking-wide ${currentRank.color}`}>
                  {currentRank.name}
                </span>
              </div>

              {nextRank ? (
                <div className="pt-2 border-t border-sanctum-border/40 text-xs font-sans text-sanctum-parchment/80">
                  <span>Next Rank: </span>
                  <span className="font-serif text-sanctum-bone font-semibold">{nextRank.name}</span>
                  <span className="block text-[11px] text-sanctum-gold mt-0.5">
                    ({hoursRemaining} {hoursRemaining === 1 ? "hour" : "hours"} remaining)
                  </span>
                </div>
              ) : (
                <div className="pt-2 border-t border-sanctum-border/40 text-xs font-serif text-sanctum-gold">
                  Highest mortal rank attained!
                </div>
              )}
            </div>

            <p className="text-[11px] text-sanctum-ash italic font-sans">
              * Ranks are automatically tracked and awarded in-game via the server RankProgression engine.
            </p>
          </div>
        </div>

        {/* Technical Systems Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-sanctum-900/60 border border-sanctum-border/60 p-6 space-y-3">
            <div className="p-2.5 bg-sanctum-850 w-fit border border-sanctum-border/60">
              <Flame className="w-5 h-5 text-sanctum-ember" />
            </div>
            <h4 className="font-serif text-base text-sanctum-bone">1,485-Light Flicker Engine</h4>
            <p className="text-xs text-sanctum-parchment/70 font-sans leading-relaxed">
              Custom server script (<span className="font-mono text-sanctum-bone text-[11px]">flickers.server.luau</span>) 
              modulates point lights and skull candles in real time to simulate realistic wind drafts and eerie shadows.
            </p>
          </div>

          <div className="bg-sanctum-900/60 border border-sanctum-border/60 p-6 space-y-3">
            <div className="p-2.5 bg-sanctum-850 w-fit border border-sanctum-border/60">
              <Scroll className="w-5 h-5 text-sanctum-gold" />
            </div>
            <h4 className="font-serif text-base text-sanctum-bone">Cathedral Acoustics Engine</h4>
            <p className="text-xs text-sanctum-parchment/70 font-sans leading-relaxed">
              Over 342 spatial sounds integrated with SoundService equalizers and reverbs, creating deep stone echoes 
              and localized whispering zones across the graveyard.
            </p>
          </div>

          <div className="bg-sanctum-900/60 border border-sanctum-border/60 p-6 space-y-3">
            <div className="p-2.5 bg-sanctum-850 w-fit border border-sanctum-border/60">
              <Cpu className="w-5 h-5 text-sanctum-ash" />
            </div>
            <h4 className="font-serif text-base text-sanctum-bone">Smart Performance Optimizer</h4>
            <p className="text-xs text-sanctum-parchment/70 font-sans leading-relaxed">
              Client-side distance culling maintains fluid framerates across the 164,153 scene instances, smoothly 
              throttling particle emitters and non-critical lights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

