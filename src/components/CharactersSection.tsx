import React from "react";
import Image from "next/image";
import { UserCheck, Compass, Bot, Eye, Sparkles } from "lucide-react";

export default function CharactersSection() {
  const characters = [
    {
      name: "The Grand Archivist",
      role: "Keeper of the Forbidden Grimoires",
      location: "The Great Occult Library",
      icon: <UserCheck className="w-5 h-5 text-sanctum-gold" />,
      description:
        "The scholarly master of the Great Library. Interacts with congregants through a custom dialogue interface, granting access to forbidden tomes and historical archives.",
      features: [
        "In-Engine Dialogue Interface",
        "Grimoire Access Dispatcher",
        "Multi-lingual Dialogue Support",
      ],
    },
    {
      name: "The Tour Lady",
      role: "Sanctuary Pathfinding Guide",
      location: "Sanctuary Entrance & Courtyard",
      icon: <Compass className="w-5 h-5 text-sanctum-crimson" />,
      description:
        "An autonomous guide powered by PathfindingService. Leads newly arrived congregants on a 4-stop tour (Dark Lord Statue, Cemetery, McDonald's, and the Great Library), speaking through custom whisper acoustics.",
      features: [
        "Dynamic NavMesh Pathfinding",
        "Gesture Animations (Point, Wave, Talk)",
        "Whisper Audio Acoustics (rbxassetid://6008327311)",
      ],
    },
    {
      name: "ik you",
      role: "Sentient Animated Hall Entity",
      location: "UltimateSingleHallGothic",
      icon: <Bot className="w-5 h-5 text-sanctum-ember" />,
      description:
        "An autonomous entity equipped with inverse kinematics and studio-quality English voice tracks. Roams the main hall, performs prayer routines at the altar stage, and speaks with passing players.",
      features: [
        "Direct Studio Voice Playback",
        "Altar Kneel & Pray Routine",
        "Anti-Stuck & Auto-Unseat Watchdog",
      ],
    },
    {
      name: "Father Pucci & The Corrupted Priest",
      role: "Sanctuary Sentinels",
      location: "Nave & Sanctuary Dais",
      icon: <Eye className="w-5 h-5 text-sanctum-bone" />,
      description:
        "Gothic clergy models equipped with client-side head-tracking scripts. Their gaze smoothly pivots to track players as they walk through the nave colonnades.",
      features: [
        "Real-Time CFrame Neck Rotation",
        "Player Distance Responsiveness",
        "Sanctuary Guard Demeanor",
      ],
    },
  ];

  return (
    <section id="characters" className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-sanctum-border/40">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-[0.3em] text-sanctum-gold">
            <Sparkles className="w-4 h-4 text-sanctum-gold" />
            <span>Autonomous In-Game Entities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-sanctum-bone uppercase tracking-wider">
            Clergy & Sanctuary Entities
          </h2>
          <div className="w-16 h-0.5 bg-sanctum-crimson mx-auto my-4" />
          <p className="text-sm sm:text-base text-sanctum-parchment/80 font-sans font-light leading-relaxed">
            ASC is inhabited by authored NPCs, pathfinding guides, and intelligent AI entities that give 
            the cathedral a living, interactive presence.
          </p>
        </div>

        {/* Highlight Showcase: The Grand Archivist & AI System with Authentic Captures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-sanctum-900 border border-sanctum-border/60 p-6 sm:p-8">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-widest text-sanctum-crimson">
              <span>Primary Feature</span>
              <span>•</span>
              <span>AI Archivist System</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-sanctum-bone leading-tight">
              The Grand Archivist & Dialog Interface
            </h3>

            <p className="text-xs sm:text-sm text-sanctum-parchment/80 font-sans leading-relaxed">
              Inside the Great Library, players encounter the Grand Archivist. Unlike static statues, 
              the Archivist is paired with an authored conversational interface (<span className="text-sanctum-bone font-mono text-[11px]">ArchivistUI</span>) 
              that introduces players to the history of the cathedral, occult doctrine, and the 6 sacred tomes.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-sanctum-border/40 text-xs font-serif text-sanctum-parchment">
              <div>
                <span className="block text-sanctum-ash text-[10px] uppercase tracking-wider">Interface</span>
                <span>Custom ScreenGui</span>
              </div>
              <div>
                <span className="block text-sanctum-ash text-[10px] uppercase tracking-wider">Location</span>
                <span>Library Desks</span>
              </div>
            </div>
          </div>

          {/* Framed authentic screenshots of the Archivist UI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-video w-full overflow-hidden bg-black/60 border border-sanctum-border/60">
              <Image
                src="/images/archivist-dialog.jpg"
                alt="In-Game capture of Grand Archivist dialogue"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 text-[9px] font-serif uppercase tracking-widest bg-black/80 px-2 py-0.5 text-sanctum-gold border border-sanctum-gold/30">
                Dialog Interface
              </span>
            </div>

            <div className="relative aspect-video w-full overflow-hidden bg-black/60 border border-sanctum-border/60">
              <Image
                src="/images/archivist-educator.jpg"
                alt="In-Game capture of AI Educator interaction"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 text-[9px] font-serif uppercase tracking-widest bg-black/80 px-2 py-0.5 text-sanctum-gold border border-sanctum-gold/30">
                Educator Module
              </span>
            </div>
          </div>
        </div>

        {/* Entity Dossiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {characters.map((char) => (
            <div
              key={char.name}
              className="bg-sanctum-900/60 border border-sanctum-border/60 p-6 space-y-4 hover:border-sanctum-crimson/50 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-sanctum-border/40 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-sanctum-850 border border-sanctum-border/60">{char.icon}</div>
                  <div>
                    <h4 className="font-serif text-lg text-sanctum-bone">{char.name}</h4>
                    <p className="text-xs font-serif text-sanctum-gold/90">{char.role}</p>
                  </div>
                </div>
                <span className="text-[10px] font-serif uppercase tracking-wider text-sanctum-ash bg-sanctum-850 px-2.5 py-1 border border-sanctum-border/40">
                  {char.location}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-sanctum-parchment/70 font-sans leading-relaxed">
                {char.description}
              </p>

              <div className="pt-2">
                <span className="block text-[10px] font-serif uppercase tracking-widest text-sanctum-ash mb-1.5">
                  Confirmed Systems
                </span>
                <ul className="text-xs space-y-1 text-sanctum-parchment/80 font-sans">
                  {char.features.map((feat) => (
                    <li key={feat} className="flex items-center space-x-1.5">
                      <span className="text-sanctum-crimson">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Ambient Environmental Fauna Note */}
        <div className="p-4 bg-sanctum-900/30 border border-sanctum-border/40 text-center text-xs text-sanctum-parchment/70 font-sans">
          <p>
            <span className="text-sanctum-bone font-serif uppercase tracking-widest text-[11px]">Environmental Wildlife: </span>
            The stone floors and cemetery perimeter are populated by animated <span className="text-sanctum-bone">Rat</span> and <span className="text-sanctum-bone">Rabbit</span> models scurrying through the shadows to enhance ambient gothic immersion.
          </p>
        </div>
      </div>
    </section>
  );
}

