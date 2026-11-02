"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Sanctuary", href: "#world" },
    { name: "The Archive", href: "#archive" },
    { name: "Entities", href: "#characters" },
    { name: "Decrees & Ranks", href: "#systems" },
    { name: "Beyond the Nave", href: "#easter-egg" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sanctum-950/90 backdrop-blur-md border-b border-sanctum-border/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="group flex items-center space-x-3">
          <span className="text-sanctum-crimson text-2xl font-serif tracking-widest group-hover:text-sanctum-ember transition-colors">
            ⛧
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.25em] text-sanctum-bone group-hover:text-white transition-colors">
              ASC
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-sanctum-ash -mt-1 font-sans">
              A Satanic Church
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-serif tracking-[0.18em] uppercase text-sanctum-parchment/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sanctum-bone hover:border-b hover:border-sanctum-crimson pb-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-widest px-4 py-2 bg-sanctum-crimson/20 border border-sanctum-crimson hover:bg-sanctum-crimson hover:text-white text-sanctum-bone transition-all duration-300"
          >
            <span>Play on Roblox</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-sanctum-bone hover:text-sanctum-crimson transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sanctum-900 border-b border-sanctum-border px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-4 text-sm font-serif tracking-[0.2em] uppercase text-sanctum-parchment">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sanctum-crimson transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-sanctum-border/60">
            <a
              href="https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-sanctum-crimson text-white text-xs font-serif tracking-widest uppercase"
            >
              <span>Play on Roblox</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

