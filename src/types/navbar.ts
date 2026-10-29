import type { LucideIcon } from "lucide-react";
import type React from "react";

export type Language = "VI" | "EN";
export type ThemeColor = "dark" | "light";

export interface NavItem {
  title: string;
  href: string;
  number: string;
  description?: string;
}

export type IconType =
  | LucideIcon
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | string;

export interface SocialLink {
  label: string;
  href: string;
  icon?: IconType;
}
