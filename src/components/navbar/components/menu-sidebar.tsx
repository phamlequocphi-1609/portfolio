import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Globe } from "lucide-react";
import { sidebarVariants } from "@/constants/fullscreen-menu-variants";
import { Typography } from "@/components/ui/typography";
import { LiveClock } from "../../live-clock";
import { SOCIAL_LINKS, SOCIAL_ICON_MAP } from "@/_mock/social-links";
import { useSocialLinks } from "../hooks";

export const MenuSidebar = () => {
  const { data: apiResponse } = useSocialLinks();
  const socialLinks = apiResponse?.data ?? SOCIAL_LINKS;
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8 border-t border-border/60 pt-6 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0 lg:pb-0 h-full"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center min-h-[2.25rem] sm:min-h-[2.75rem] lg:min-h-[3.75rem] py-3.5 sm:py-4 lg:py-4.5">
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-mint/25 bg-mint/[0.06] px-3.5 py-1.5 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <Typography
              tag="span"
              variant="code_11_500"
              className="font-semibold tracking-[0.2em] uppercase text-mint"
            >
              Available For Opportunities
            </Typography>
          </div>
        </div>

        <Typography
          tag="p"
          variant="body_14_400"
          className="sm:text-base leading-relaxed text-muted-foreground max-w-sm"
        >
          Frontend-focused developer building{" "}
          <span className="text-head font-medium">fast, scalable</span>, and
          SEO-friendly web applications. Open to{" "}
          <span className="text-head font-medium">impactful products</span> and
          meaningful collaborations.
        </Typography>
      </div>
      <div className="flex flex-col gap-3">
        <Typography
          tag="span"
          variant="code_11_500"
          className="font-semibold tracking-[0.25em] uppercase text-muted-foreground/70"
        >
          Find Me Online
        </Typography>
        <div className="flex flex-col divide-y divide-border/60 border-y border-border/60">
          {socialLinks.map((item) => {
            const IconComponent =
              typeof item.icon === "function"
                ? item.icon
                : (typeof item.icon === "string" ? SOCIAL_ICON_MAP[item.icon.toLowerCase()] : null) ||
                  SOCIAL_ICON_MAP[item.label.toLowerCase()] ||
                  Globe;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3.5 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="h-4 w-4 text-muted-foreground transition-colors duration-200 group-hover:text-mint" />
                  <Typography
                    tag="span"
                    variant="code_12_400"
                    className="sm:text-sm font-medium text-body transition-all duration-200 group-hover:text-head group-hover:translate-x-1"
                  >
                    {item.label}
                  </Typography>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-200 group-hover:text-mint group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex min-h-[2.25rem] sm:min-h-[2.75rem] lg:min-h-[3.75rem] items-center justify-between border-y border-border/60 py-3.5 sm:py-4 lg:py-4.5 font-mono text-xs text-muted-foreground">
        <Typography
          tag="span"
          variant="code_12_400"
          className="flex items-center gap-2 text-muted-foreground"
        >
          <MapPin className="h-3.5 w-3.5 text-mint" />
          Ho Chi Minh City, VN
        </Typography>
        <LiveClock />
      </div>
    </motion.aside>
  );
};
