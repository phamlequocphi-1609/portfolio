"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Typography from "../ui/typography";
import { useTheme } from "@/context/theme/theme-context";
import { ThemeColor } from "@/types/navbar";

export interface NavItem {
  title: string;
  href: string;
  number: string;
  description?: string;
}

export interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items?: NavItem[];
  onItemClick?: (item: NavItem) => void;
  theme?: ThemeColor;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "#home",
    number: "01",
    description: "Overview & Introduction",
  },
  {
    title: "Projects",
    href: "#projects",
    number: "02",
    description: "Selected Digital Works",
  },
  {
    title: "About",
    href: "#about",
    number: "03",
    description: "Background & Tech Stack",
  },
  {
    title: "Blog",
    href: "#blog",
    number: "04",
    description: "Thoughts & Engineering",
  },
  {
    title: "Contact",
    href: "#contact",
    number: "05",
    description: "Start A Conversation",
  },
];

export function FullscreenMenu({
  isOpen,
  onClose,
  items = DEFAULT_NAV_ITEMS,
  onItemClick,
  theme: propTheme,
}: FullscreenMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme: contextTheme } = useTheme();
  const activeTheme = propTheme ?? contextTheme;
  const menuTheme: ThemeColor = activeTheme === "light" ? "dark" : "light";
  const isDarkMenu = menuTheme === "dark";

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleLinkClick = (item: NavItem) => {
    onItemClick?.(item);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            clipPath: "circle(0px at calc(100% - 48px) 48px)",
            opacity: 0.8,
          }}
          animate={{
            clipPath: "circle(160vmax at calc(100% - 48px) 48px)",
            opacity: 1,
          }}
          exit={{
            clipPath: "circle(0px at calc(100% - 48px) 48px)",
            opacity: 0.8,
          }}
          transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
          }}
          className={`fixed inset-0 z-50 flex flex-col justify-between overflow-x-hidden overflow-y-auto bg-main text-head selection:bg-mint/30 selection:text-mint ${
            isDarkMenu
              ? "dark shadow-[-25px_0_60px_rgba(0,0,0,0.7)] border-l border-white/10"
              : "light shadow-[-25px_0_60px_rgba(0,0,0,0.15)] border-l border-black/10"
          }`}
        >
          {/* Ambient Cosmic Background */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div
              className={`absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full blur-[140px] ${
                isDarkMenu ? "bg-mint/10" : "bg-mint/15"
              }`}
            />
            <div
              className={`absolute top-1/2 right-1/4 h-[450px] w-[450px] rounded-full blur-[150px] ${
                isDarkMenu ? "bg-accent/10" : "bg-accent/10"
              }`}
            />
            <div
              className={`absolute -bottom-32 left-1/3 h-80 w-80 rounded-full blur-[130px] ${
                isDarkMenu ? "bg-mint/10" : "bg-mint/15"
              }`}
            />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Menu Header */}
          <div className="relative z-10 flex w-full max-w-7xl items-center justify-end px-6 py-6 mx-auto sm:px-8 md:px-12 md:py-8">
            {/* Close Button */}
            <motion.button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-border bg-surface text-head backdrop-blur-md transition-all duration-300 hover:border-mint/60 hover:text-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer ${
                isDarkMenu
                  ? "shadow-lg shadow-black/40"
                  : "shadow-md shadow-slate-900/10"
              }`}
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Menu Body: Editorial Corner / Two-Column Layout */}
          <main className="relative z-10 mx-auto my-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-8 sm:px-8 md:px-12 lg:py-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Left / Corner Navigation Column */}
              <div className="lg:col-span-7">
                <nav
                  aria-label="Fullscreen Navigation"
                  className="flex flex-col space-y-2 sm:space-y-3"
                >
                  {items.map((item, index) => {
                    const isHovered = hoveredIndex === index;
                    return (
                      <div key={item.title} className="overflow-hidden">
                        <motion.div
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          exit={{ y: "80%", opacity: 0 }}
                          transition={{
                            duration: 0.55,
                            delay: 0.15 + index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <a
                            href={item.href}
                            onClick={() => handleLinkClick(item)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative flex items-baseline justify-between rounded-xl py-2 transition-all duration-300"
                          >
                            <div className="flex items-baseline gap-3 sm:gap-4 md:gap-6">
                              {/* Index number */}
                              <Typography
                                variant="muted"
                                className="font-mono text-xs sm:text-sm font-medium opacity-60 transition-colors duration-300 group-hover:text-mint group-hover:opacity-100"
                              >
                                {item.number}
                              </Typography>

                              {/* Title with left-to-right green underline */}
                              <div className="relative">
                                <span className="font-sans text-3xl font-extrabold tracking-tight text-muted-foreground transition-colors duration-300 group-hover:text-head sm:text-4xl md:text-5xl lg:text-6xl">
                                  {item.title}
                                </span>
                                {/* Expanding Underline */}
                                <span className="absolute -bottom-1 left-0 h-[2.5px] w-full origin-left scale-x-0 rounded-full bg-mint shadow-[0_0_12px_var(--accent-mint)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                              </div>
                            </div>

                            {/* Description and arrow */}
                            <div className="hidden items-center gap-2 sm:flex">
                              {item.description && (
                                <Typography
                                  variant="muted"
                                  className="font-mono text-xs opacity-70 transition-colors duration-300 group-hover:opacity-100"
                                >
                                  {item.description}
                                </Typography>
                              )}
                              <ArrowUpRight
                                className={`h-4 w-4 text-muted-foreground transition-all duration-300 ${
                                  isHovered
                                    ? "translate-x-0.5 -translate-y-0.5 text-mint"
                                    : "opacity-40"
                                }`}
                              />
                            </div>
                          </a>
                        </motion.div>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
