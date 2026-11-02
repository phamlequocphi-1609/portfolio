"use client";

import { Typography } from "@/components/ui";
import { motion } from "framer-motion";
import { TITLE_WORDS } from "@/constants/hero";
import {
  heroContentContainerVariants,
  heroContentItemVariants,
  heroTitleContainerVariants,
  heroWordVariants,
} from "@/constants/hero-variants";

const MotionTypography = motion(Typography);

export const HeroContent = () => {
  return (
    <motion.div
      variants={heroContentContainerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 text-left"
    >
      <motion.div variants={heroContentItemVariants}>
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-medium text-text-muted select-none cursor-default">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <motion.span
              animate={{
                scale: [1, 2.4, 2.8],
                opacity: [0.7, 0.25, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-accent-mint"
            />
            <motion.span
              className="relative inline-flex h-2 w-2 rounded-full bg-accent-mint"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(16, 185, 129, 0)",
                  "0 0 8px rgba(16, 185, 129, 0.8)",
                  "0 0 0px rgba(16, 185, 129, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>

          <Typography
            tag="span"
            variant="caption_12_500"
            text="Available For Opportunities"
            className="text-text-muted"
          />
        </div>
      </motion.div>

      <MotionTypography
        tag="h1"
        variant="h2_36_700"
        variants={heroTitleContainerVariants}
        className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-head leading-[1.2]"
      >
        {TITLE_WORDS.map((word, i) => (
          <motion.span
            key={i}
            variants={heroWordVariants}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </MotionTypography>

      <motion.div variants={heroContentItemVariants}>
        <Typography
          tag="p"
          variant="body_16_400"
          text="I am a Frontend-focused Software Developer with 2 years of experience building modern, scalable, and high-performance web applications. I specialize in frontend development, with experience in developing enterprise applications, manufacturing portals, real-time executive dashboards, and automation platforms."
          className="text-[15px] sm:text-base text-body leading-relaxed"
        />
      </motion.div>

      <motion.div variants={heroContentItemVariants}>
        <Typography
          tag="p"
          variant="body_16_400"
          text="My expertise includes building scalable frontend architectures, optimizing rendering performance, and managing complex data flows. I'm passionate about delivering user-friendly, high-quality web applications. I enjoy supporting my cross-functional teammates, learning new technologies when needed, and continuously improving my craft."
          className="text-[15px] sm:text-base text-text-muted leading-relaxed"
        />
      </motion.div>
    </motion.div>
  );
};

