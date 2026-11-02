"use client";
import { HeroContent } from "./hero-content";
import { HeroActions } from "./hero-actions";
import { HeroAvatar } from "./hero-avatar";
import { motion } from "framer-motion";
import { heroSectionContainerVariants } from "@/constants/hero-variants";
export function HeroSection() {
  return (
    <motion.section
      variants={heroSectionContainerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-6">
          <HeroContent />
          <HeroActions />
        </div>
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroAvatar />
        </div>
      </div>
    </motion.section>
  );
}
