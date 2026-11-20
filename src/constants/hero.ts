import type { HeroActionItem } from "@/types/hero";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Download, Mail } from "lucide-react";
import { GITHUB_URL, LINKED_URL } from "./contact";

export const TITLE_WORDS = ["Hi,", "I'm", "Pham", "Le", "Quoc", "Phi"];

export const HERO_ACTION_BUTTONS: HeroActionItem[] = [
  {
    label: "My Resume",
    href: "/cv.pdf",
    isPrimary: true,
    download: "Pham-Le-Quoc-Phi-CV.pdf",
    icon: Download,
  },
  {
    label: "GitHub",
    href: GITHUB_URL,
    isExternal: true,
    hoverBorder: "hover:border-border-glow",
    hoverGlow: "hover:shadow-black/10 dark:hover:shadow-white/5",
    shimmerColor: "via-white/10 dark:via-white/5",
    icon: GithubIcon,
    iconClassName:
      "w-4 h-4 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-12",
  },
  {
    label: "LinkedIn",
    href: LINKED_URL,
    isExternal: true,
    hoverBorder: "hover:border-sky-500/40",
    hoverGlow: "hover:shadow-sky-500/20",
    shimmerColor: "via-sky-400/15",
    icon: LinkedinIcon,
    iconClassName:
      "w-4 h-4 text-sky-500 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:brightness-110",
  },
  {
    label: "Get in Touch",
    href: "/contact",
    hoverBorder: "hover:border-accent-mint/40",
    hoverGlow: "hover:shadow-accent-mint/20",
    shimmerColor: "via-accent-mint/15",
    icon: Mail,
    iconClassName:
      "w-4 h-4 text-text-muted transition-all duration-200 group-hover:text-accent-mint group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-0.5",
  },
];
