"use client";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/theme/theme-context";
import { ThemeColor } from "@/types/navbar";
import {
  MenuNavBackground,
  MenuHeader,
  MenuNav,
  MenuSidebar,
} from "./components";
import { useNavbarItems } from "./hooks";
import { NavItem } from "@/types/navbar";
import { DEFAULT_NAV_ITEMS } from "@/_mock/navbar-items";

export interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items?: NavItem[];
  onItemClick?: (item: NavItem) => void;
  theme?: ThemeColor;
}

export function FullscreenMenu({
  isOpen,
  onClose,
  items: propItems,
  onItemClick,
  theme: propTheme,
}: FullscreenMenuProps) {
  const { data: apiResponse } = useNavbarItems();
  const navItems = propItems ?? apiResponse?.data ?? DEFAULT_NAV_ITEMS;

  const { theme: contextTheme } = useTheme();
  const activeTheme = propTheme ?? contextTheme;
  const menuTheme: ThemeColor = activeTheme === "light" ? "dark" : "light";
  const isDarkMenu = menuTheme === "dark";

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = useCallback(
    (item: NavItem) => {
      onItemClick?.(item);
      onClose();
    },
    [onItemClick, onClose],
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial={{ clipPath: "circle(0px at calc(100% - 48px) 48px)" }}
          animate={{ clipPath: "circle(160vmax at calc(100% - 48px) 48px)" }}
          exit={{ clipPath: "circle(0px at calc(100% - 48px) 48px)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{ willChange: "clip-path" }}
          className={`fixed inset-0 z-50 overflow-y-auto overflow-x-hidden selection:bg-mint/30 selection:text-mint ${
            isDarkMenu ? "dark bg-main text-head" : "light bg-main text-head"
          }`}
        >
          <MenuNavBackground isDarkMenu={isDarkMenu} />
          <div className="relative z-10 flex min-h-screen flex-col">
            <MenuHeader onClose={onClose} />
            <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-12 sm:px-8 md:px-12 lg:py-12">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 lg:items-stretch">
                <MenuNav items={navItems} onItemClick={handleLinkClick} />
                <MenuSidebar />
              </div>
            </main>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
