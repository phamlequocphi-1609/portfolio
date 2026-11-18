"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Map } from "@/components/map";
import {
  contactCtaContainerVariants,
  contactMapVariants,
} from "@/constants/contact-variants";
import { ContactCtaContent, ContactCtaActionCard } from "./components";

export function ContactCta() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isContentInView, setIsContentInView] = useState(false);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContentInView(entry.isIntersecting);
      },
      {
        rootMargin: "-80px 0px -20px 0px",
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="border-t border-border/60">
      <div className="max-w-7xl mx-auto pt-5 px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border/80 bg-surface/75 dark:bg-surface/40 backdrop-blur-xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col gap-10 lg:gap-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 dark:via-accent/50 to-transparent pointer-events-none" />
          <motion.div
            initial={{ x: "-100%" }}
            animate={isContentInView ? { x: "200%" } : { x: "-100%" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent pointer-events-none"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-border-glow)_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-15 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_30%,transparent_90%)] pointer-events-none" />

          <motion.div
            ref={contentRef}
            variants={contactCtaContainerVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            <ContactCtaContent />
            <ContactCtaActionCard />
          </motion.div>

          <div className="relative z-10 h-px w-full bg-border/60" />

          <motion.div
            variants={contactMapVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Map />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
