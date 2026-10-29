import React from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Globe } from "lucide-react";
import { SocialLink } from "@/types/navbar";

export const SOCIAL_ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  website: Globe,
  globe: Globe,
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/phamlequocphi-1609",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pham-le-quoc-phi/",
    icon: LinkedinIcon,
  },
  {
    label: "Website",
    href: "https://phamlequocphi.is-a.dev",
    icon: Globe,
  },
];
