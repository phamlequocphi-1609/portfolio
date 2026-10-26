"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme/theme-context";
import { Button } from "@base-ui/react";
import { Language } from "@/types/navbar";
import { FullscreenMenu } from "./fullscreen-menu";
import { LANGUAGES } from "@/constants/lan";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<Language>("EN");
  const { theme, toggleTheme, isMounted } = useTheme();
  const isTransitioningRef = useRef<boolean>(false);

  const handleThemeToggle = () => {
    if (isTransitioningRef.current) return;
    const next = theme === "dark" ? "light" : "dark";
    const isToLight = next === "light";
    if (typeof document === "undefined" || !document.startViewTransition) {
      toggleTheme();
      return;
    }
    isTransitioningRef.current = true;
    const transition = document.startViewTransition(() => {
      toggleTheme();
    });
    transition.ready
      .then(() => {
        const clipPath = isToLight
          ? ["circle(0% at 100% 0%)", "circle(150% at 100% 0%)"]
          : ["circle(0% at 0% 100%)", "circle(150% at 0% 100%)"];
        const animation = document.documentElement.animate(
          {
            clipPath,
          },
          {
            duration: 450,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
        animation.finished.finally(() => {
          isTransitioningRef.current = false;
        });
      })
      .catch(() => {
        isTransitioningRef.current = false;
      });
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 sm:px-8 md:px-12 md:py-8 pointer-events-none">
        <div className="mx-auto flex max-w-7xl items-center justify-end">
          <div className="pointer-events-auto flex items-center gap-3 sm:gap-3.5">
            <div
              role="group"
              aria-label="Language selection"
              className="relative flex items-center rounded-full border border-border bg-surface/90 p-1 backdrop-blur-md shadow-lg shadow-black/30"
            >
              {LANGUAGES.map((lang) => (
                <Button
                  key={lang}
                  type="button"
                  onClick={() => setCurrentLang(lang)}
                  className={`relative z-10 rounded-full px-2.5 sm:px-3 py-1 font-mono text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                    currentLang === lang
                      ? "text-main"
                      : "text-muted-foreground hover:text-head"
                  }`}
                >
                  {currentLang === lang && (
                    <motion.span
                      layoutId="homeActiveLangPill"
                      className="absolute inset-0 -z-10 rounded-full bg-mint shadow-[0_0_12px_var(--accent-mint)]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  {lang}
                </Button>
              ))}
            </div>
            <Button
              type="button"
              aria-label="Toggle theme"
              onClick={handleThemeToggle}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-border bg-surface/90 text-muted-foreground hover:text-head backdrop-blur-md shadow-lg shadow-black/30 select-none cursor-pointer transition-colors duration-300"
            >
              {!isMounted ? (
                <div className="h-4 w-4" />
              ) : (
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, scale: 0.3, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 15,
                  }}
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </motion.div>
              )}
            </Button>

            <motion.button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 sm:h-11 sm:w-11 flex-col items-center justify-center gap-1.5 rounded-2xl border border-border bg-surface shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 hover:border-mint/60 hover:shadow-[0_0_20px_var(--accent-mint)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer group"
            >
              <Menu className="h-5 w-5 text-head transition-colors duration-300 group-hover:text-mint" />
            </motion.button>
          </div>
        </div>
      </header>

      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        theme={theme}
      />
    </div>
  );
}
