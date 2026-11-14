"use client";
import { motion } from "framer-motion";
import { Map } from "@/components/map";
import { ContactCtaContent, ContactCtaActionCard } from "./components";

export function ContactCta() {
  return (
    <section className="py-20 sm:py-24 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-border/80 bg-surface/75 dark:bg-surface/40 backdrop-blur-xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col gap-10 lg:gap-12"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 dark:via-accent/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-border-glow)_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-15 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_30%,transparent_90%)] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <ContactCtaContent />
            <ContactCtaActionCard />
          </div>
          <div className="relative z-10 h-px w-full bg-border/60" />
          <Map />
        </motion.div>
      </div>
    </section>
  );
}
