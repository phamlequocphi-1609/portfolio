import type { LucideIcon } from "lucide-react";
import type React from "react";

export interface HeroActionItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isPrimary?: boolean;
  download?: boolean | string;
  icon?: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  hoverBorder?: string;
  hoverGlow?: string;
  shimmerColor?: string;
}
