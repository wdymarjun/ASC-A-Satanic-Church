"use client";

import { useEffect } from "react";

const revealSelector = [
  ".intro-band",
  ".section-heading",
  ".cathedral-opening",
  ".cathedral-threshold",
  ".cathedral-nave-story",
  ".cathedral-detail-card",
  ".baphomet-feature",
  ".baphomet-detail-card",
  ".sanctuary-rules-story",
  ".cemetery-feature",
  ".education-hero",
  ".education-feature-row",
  ".education-library",
  ".council-teaching",
  ".educators-text",
  ".archive-banner",
  ".library-feature-row",
  ".library-books-story",
  ".archivist-feature",
  ".library-visitor-feature",
  ".character-feature",
  ".character-row",
  ".system-row",
  ".curiosity-inner",
  ".mcdonalds-image",
  ".site-footer",
].join(", ");

export default function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(revealSelector);
    if (elements.length === 0) {
      return;
    }

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -9% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add("has-scroll-effects");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-effects");
    };
  }, []);

  return null;
}
