import Link from "next/link";
import { SOCIAL_ITEMS } from "@/constants/contact";

export const ContactCtaSocialLinks = () => {
  return (
    <div className="flex items-center gap-2.5">
      {SOCIAL_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="w-10 h-10 rounded-full border border-border/80 bg-elevated/50 hover:bg-elevated hover:border-border-glow hover:text-head text-text-muted flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          >
            <Icon className="w-4 h-4" />
          </Link>
        );
      })}
    </div>
  );
};
