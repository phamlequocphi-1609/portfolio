"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroAvatarContainerVariants } from "@/constants/hero-variants";

export const HeroAvatar = () => {
  return (
    <motion.div
      variants={heroAvatarContainerVariants}
      initial="hidden"
      animate="visible"
      className="group relative w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[335px] mx-auto select-none"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-1 rounded-[28px] blur-md opacity-30 group-hover:opacity-65 transition-opacity duration-500 overflow-hidden pointer-events-none"
      >
        <motion.span
          style={{ x: "-50%", y: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 w-[240%] aspect-square [background:conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,var(--accent)_360deg)]"
        />
      </div>

      <motion.div
        whileHover={{ y: -4, scale: 1.015 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative rounded-[26px] p-[1.5px] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <motion.span
            style={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 w-[240%] aspect-square [background:conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,var(--accent)_360deg)] opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <div className="relative rounded-3xl p-2 sm:p-2.5 bg-surface/95 dark:bg-surface/90 backdrop-blur-md border border-border/60 group-hover:border-border-glow shadow-lg group-hover:shadow-2xl transition-all duration-300">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-elevated">
            <Image
              src="/avt_phi.jpg"
              alt="Pham Le Quoc Phi - Frontend Developer"
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover scale-[1.65] origin-[50%_72%] transition-transform duration-700 ease-out group-hover:scale-[1.72]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
