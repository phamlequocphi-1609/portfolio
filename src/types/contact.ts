import type { LucideIcon } from "lucide-react";
import type React from "react";

export interface SocialItem {
  label: string;
  href: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}
