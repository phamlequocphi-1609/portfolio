import { useState } from "react";
import {
  containerVariants,
  itemVariants,
} from "@/constants/fullscreen-menu-variants";
import { NavItem } from "@/types/navbar";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MenuNavProps {
  items?: NavItem[];
  onItemClick: (item: NavItem) => void;
}

export const MenuNav = ({ items = [], onItemClick }: MenuNavProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="lg:col-span-7 flex flex-col justify-between">
      <motion.nav
        aria-label="Fullscreen Navigation Links"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="group/nav flex flex-col"
      >
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;
          return (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative border-b border-border/60 transition-colors duration-300 hover:border-border"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={item.href}
                onClick={() => onItemClick(item)}
                className="group relative flex w-full items-center justify-between py-3.5 sm:py-4 lg:py-4.5 cursor-pointer select-none"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <Typography
                    tag="span"
                    variant="code_12_400"
                    className={`font-semibold tabular-nums sm:text-sm transition-colors duration-300 ${
                      isHovered ? "text-mint" : "text-muted-foreground/40"
                    }`}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    tag="span"
                    className={`font-sans text-4xl sm:text-5xl lg:text-[3.75rem] font-medium tracking-tight leading-none transition-all duration-300 ease-out ${
                      isHovered
                        ? "text-head translate-x-3"
                        : isAnyHovered
                          ? "text-head/40 translate-x-0"
                          : "text-head/75 translate-x-0"
                    }`}
                  >
                    {item.title}
                  </Typography>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 shrink-0 pl-4">
                  {item.description && (
                    <Typography
                      tag="span"
                      variant="code_12_400"
                      className={`hidden md:inline-block transition-all duration-300 ${
                        isHovered
                          ? "text-muted-foreground opacity-100 translate-x-0"
                          : "text-muted-foreground/40 opacity-0 translate-x-2"
                      }`}
                    >
                      {item.description}
                    </Typography>
                  )}
                  <div
                    className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      isHovered
                        ? "border-mint/50 bg-mint/10 text-mint scale-100 opacity-100 shadow-[0_0_15px_var(--accent-mint)]"
                        : "border-border/60 bg-transparent text-muted-foreground/30 scale-90 opacity-0 sm:opacity-40"
                    }`}
                  >
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isHovered
                          ? "translate-x-0.5 -translate-y-0.5 scale-110"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          );
        })}
      </motion.nav>
    </div>
  );
};
