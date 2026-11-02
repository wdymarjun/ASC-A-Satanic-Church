import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorldSection from "@/components/WorldSection";
import ArchiveSection from "@/components/ArchiveSection";
import CharactersSection from "@/components/CharactersSection";
import SystemsSection from "@/components/SystemsSection";
import EasterEggSection from "@/components/EasterEggSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-sanctum-950 text-sanctum-bone selection:bg-sanctum-crimson selection:text-white">
      <Navbar />
      <Hero />
      <WorldSection />
      <ArchiveSection />
      <CharactersSection />
      <SystemsSection />
      <EasterEggSection />
      <Footer />
    </main>
  );
}
