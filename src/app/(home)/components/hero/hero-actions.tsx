"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Typography } from "@/components/ui";
import { motion } from "framer-motion";
import {
  heroActionsContainerVariants,
  heroActionsItemVariants,
} from "@/constants/hero-variants";

export const HeroActions = () => {
  return (
    <motion.div
      variants={heroActionsContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-3 pt-2"
    >
      <motion.div
        variants={heroActionsItemVariants}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
        className="group relative"
      >
        <Link
          href="/projects"
          className="relative overflow-hidden px-5 py-2.5 rounded-xl bg-head text-main text-xs font-semibold tracking-wide flex items-center gap-2 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-head/20"
        >
          <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <Typography
            tag="span"
            variant="small"
            text="View Projects"
            className="text-main font-semibold relative z-10"
          />
          <div className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </motion.div>

      <motion.div
        variants={heroActionsItemVariants}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
        className="group relative"
      >
        <Link
          href="https://github.com/phamlequocphi-1609"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden px-4 py-2.5 rounded-xl bg-surface border border-border text-xs font-medium text-head hover:bg-elevated hover:border-border-glow hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/30 transition-all duration-300 flex items-center gap-2"
        >
          <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent" />
          <div className="relative z-10 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-rotate-8">
            <GithubIcon className="w-4 h-4" />
          </div>
          <Typography
            tag="span"
            variant="small"
            text="GitHub"
            className="relative z-10"
          />
        </Link>
      </motion.div>

      <motion.div
        variants={heroActionsItemVariants}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
        className="group relative"
      >
        <Link
          href="https://linkedin.com/in/pham-le-quoc-phi"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden px-4 py-2.5 rounded-xl bg-surface border border-border text-xs font-medium text-head hover:bg-elevated hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/15 transition-all duration-300 flex items-center gap-2"
        >
          <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-sky-400/10 to-transparent" />
          <div className="relative z-10 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-0.5">
            <LinkedinIcon className="w-4 h-4 text-sky-500 group-hover:brightness-110 transition-all duration-200" />
          </div>
          <Typography
            tag="span"
            variant="small"
            text="LinkedIn"
            className="relative z-10"
          />
        </Link>
      </motion.div>

      <motion.div
        variants={heroActionsItemVariants}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
        className="group relative"
      >
        <Link
          href="/contact"
          className="relative overflow-hidden px-4 py-2.5 rounded-xl bg-surface border border-border text-xs font-medium text-head hover:bg-elevated hover:border-accent-mint/40 hover:shadow-lg hover:shadow-accent-mint/15 transition-all duration-300 flex items-center gap-2"
        >
          <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-accent-mint/10 to-transparent" />
          <div className="relative z-10 transition-transform duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:rotate-6">
            <Mail className="w-4 h-4 text-text-muted group-hover:text-accent-mint transition-colors duration-200" />
          </div>
          <Typography
            tag="span"
            variant="small"
            text="Get in Touch"
            className="relative z-10"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};
