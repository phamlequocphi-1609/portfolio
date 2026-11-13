"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { ContactCta, HeroSection } from "./components";
import { CapabilitiesSection } from "./components/capabilities";
import { ScrollProgress } from "@/components/scroll-progress";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-main text-head  overflow-x-hidden">
      <ScrollProgress />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <main className="relative z-10">
        <HeroSection key={isLoading ? "loading" : "ready"} />
        <CapabilitiesSection />
        <ContactCta />
      </main>
    </div>
  );
}
