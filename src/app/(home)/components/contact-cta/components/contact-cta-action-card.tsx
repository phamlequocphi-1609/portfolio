"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Mail, ArrowRight, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui";
import { contactActionCardVariants } from "@/constants/contact-variants";

export const ContactCtaActionCard = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div variants={contactActionCardVariants} className="lg:col-span-5">
      <div
        onMouseMove={handleMouseMove}
        className="group relative rounded-2xl border border-border/80 bg-elevated/60 dark:bg-elevated/35 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-sm backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_12px_36px_-8px_rgba(124,58,237,0.18)]"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.16), transparent 75%)`,
          }}
        />

        <div className="relative z-10 space-y-3">
          <Typography variant="title_20_600" tag="h3" className="text-head">
            Let&apos;s build something great
          </Typography>
          <Typography
            variant="body_14_400"
            tag="p"
            className="text-text-muted leading-relaxed"
          >
            Have a project in mind, an engineering role, or technical challenge
            to solve? Let&apos;s connect and discuss how we can work together.
          </Typography>
        </div>

        <div className="relative z-10 rounded-xl border border-border/60 bg-surface/50 dark:bg-surface/30 p-3.5 flex items-center gap-3 text-xs text-text-muted transition-colors group-hover:border-accent/30">
          <div className="relative flex items-center justify-center shrink-0">
            <Typography
              tag="span"
              className="absolute inline-flex h-3.5 w-3.5 animate-ping rounded-full bg-accent-mint opacity-60"
            />
            <CircleDot className="relative w-4 h-4 text-accent-mint shrink-0" />
          </div>
          <Typography
            variant="caption_12_400"
            tag="span"
            className="text-text-muted"
          >
            Available for full-time roles and select engineering projects.
          </Typography>
        </div>

        <div className="relative z-10 space-y-3 pt-1">
          <Link href="/contact" className="w-full block group/btn">
            <Button
              size="lg"
              className="w-full h-12 rounded-xl bg-head text-main hover:bg-head/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 gap-2 text-sm justify-center cursor-pointer overflow-hidden relative"
            >
              <Mail className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
              <Typography
                variant="body_14_600"
                tag="span"
                className="text-inherit"
              >
                Get in touch
              </Typography>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
