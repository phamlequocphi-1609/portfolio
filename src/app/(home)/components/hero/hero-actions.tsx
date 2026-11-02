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

interface ActionItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isPrimary?: boolean;
  icon?: React.ReactNode;
  hoverBorder?: string;
  hoverGlow?: string;
  shimmerColor?: string;
}

const ACTION_BUTTONS: ActionItem[] = [
  {
    label: "View Projects",
    href: "/projects",
    isPrimary: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/phamlequocphi-1609",
    isExternal: true,
    hoverBorder: "hover:border-border-glow",
    hoverGlow: "hover:shadow-black/10 dark:hover:shadow-white/5",
    shimmerColor: "via-white/10 dark:via-white/5",
    icon: (
      <GithubIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-12" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pham-le-quoc-phi",
    isExternal: true,
    hoverBorder: "hover:border-sky-500/40",
    hoverGlow: "hover:shadow-sky-500/20",
    shimmerColor: "via-sky-400/15",
    icon: (
      <LinkedinIcon className="w-4 h-4 text-sky-500 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:brightness-110" />
    ),
  },
  {
    label: "Get in Touch",
    href: "/contact",
    hoverBorder: "hover:border-accent-mint/40",
    hoverGlow: "hover:shadow-accent-mint/20",
    shimmerColor: "via-accent-mint/15",
    icon: (
      <Mail className="w-4 h-4 text-text-muted transition-all duration-200 group-hover:text-accent-mint group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-0.5" />
    ),
  },
];

export const HeroActions = () => {
  return (
    <motion.div
      variants={heroActionsContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-3 pt-2"
    >
      {ACTION_BUTTONS.map((btn) => (
        <motion.div
          key={btn.label}
          variants={heroActionsItemVariants}
          whileHover={{ y: -2.5, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="group relative"
        >
          {btn.isPrimary ? (
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-head via-slate-700 to-head opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40"
              />

              <Link
                href={btn.href}
                className="relative overflow-hidden px-5 py-2.5 rounded-xl bg-head text-main text-xs font-semibold tracking-wide flex items-center gap-2 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-head/25"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[220%]"
                />

                <Typography
                  tag="span"
                  variant="small"
                  text={btn.label}
                  className="text-main font-semibold relative z-10"
                />

                <span className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          ) : (
            <Link
              href={btn.href}
              target={btn.isExternal ? "_blank" : undefined}
              rel={btn.isExternal ? "noopener noreferrer" : undefined}
              className={`relative overflow-hidden px-4 py-2.5 rounded-xl bg-surface border border-border text-xs font-medium text-head transition-all duration-200 flex items-center gap-2 hover:bg-elevated ${btn.hoverBorder} hover:shadow-lg ${btn.hoverGlow}`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-gradient-to-r from-transparent ${btn.shimmerColor} to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[220%]`}
              />
              <div className="relative z-10 flex items-center justify-center">
                {btn.icon}
              </div>

              <Typography
                tag="span"
                variant="small"
                text={btn.label}
                className="relative z-10"
              />
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
