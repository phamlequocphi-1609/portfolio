"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "./components";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-main text-head  overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <main className="relative z-10">
        <HeroSection key={isLoading ? "loading" : "ready"} />
      </main>
    </div>
  );
}
