import { Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, GmailIcon } from "@/components/icons";
import type { SocialItem } from "@/types/contact";

export const EMAIL_ADDRESS =
  process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "phamlequocphi16092001@gmail.com";
export const SITE_DOMAIN =
  process.env.NEXT_PUBLIC_SITE_DOMAIN || "phamlequocphi.is-a.dev";
export const LOCATION_TEXT = "Ho Chi Minh City, Vietnam";
export const DETAILED_ADDRESS =
  "145 Alley, Le Duc Tho Street, Go Vap Ward, Ho Chi Minh City, VietNam";
export const MAP_EMBED_URL =
  process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.684100008055!2d106.67782577355293!3d10.835469358105037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752855bc721b47%3A0x1e673af69862241f!2zSOG6u20gMTQ1IEzDqiDEkOG7qWMgVGjhu40sIEfDsiBW4bqlcCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1794473146749!5m2!1sen!2s";

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/phamlequocphi-1609",
    icon: GithubIcon,
    className: "text-head bg-head/5 hover:bg-head/15 hover:border-head/40",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pham-le-quoc-phi/",
    icon: LinkedinIcon,
    className:
      "text-linkedin bg-linkedin/10 hover:bg-linkedin/20 hover:border-linkedin/50",
  },
  {
    label: "Gmail",
    href: `mailto:${EMAIL_ADDRESS}`,
    icon: GmailIcon,
    className:
      "text-destructive bg-destructive/10 hover:bg-destructive/20 hover:border-destructive/50",
  },
  {
    label: "Website",
    href: `https://${SITE_DOMAIN}`,
    icon: Globe,
    className:
      "text-accent-mint bg-accent-mint/10 hover:bg-accent-mint/20 hover:border-accent-mint/50",
  },
];

export const CONTACT_CTA_TITLE_WORDS = [
  "Let's",
  "engineer",
  "something",
  "exceptional.",
];
