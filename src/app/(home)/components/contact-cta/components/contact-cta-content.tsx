import { Send, MapPin } from "lucide-react";
import { Typography } from "@/components/ui";
import { LOCATION_TEXT } from "@/constants/contact";
import { ContactCtaSocialLinks } from "./contact-cta-social-links";

export const ContactCtaContent = () => {
  return (
    <div className="lg:col-span-7 flex flex-col gap-6 text-left">
      <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-elevated/60 dark:bg-elevated/40 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-accent/40 group select-none">
        <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
          <Send className="w-2.5 h-2.5" />
        </div>
        <Typography
          variant="caption_12_500"
          tag="span"
          className="text-text-muted group-hover:text-head transition-colors"
        >
          Let&apos;s build the future together
        </Typography>
      </div>

      <Typography
        variant="h2_36_700"
        tag="h2"
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-head tracking-tight leading-[1.15]"
      >
        Let&apos;s engineer something exceptional.
      </Typography>

      <Typography
        variant="body_16_400"
        tag="p"
        className="text-base sm:text-lg text-body max-w-xl leading-relaxed"
      >
        Software Developer specializing in scalable web applications and
        AI-augemented workflows, from architecture to coding and testing. Open
        to impactful opportunities.
      </Typography>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <ContactCtaSocialLinks />
        <div className="h-4 w-px bg-border/80 hidden sm:block" />
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/70 bg-elevated/40 text-text-muted">
          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
          <Typography variant="caption_12_500" tag="span">
            {LOCATION_TEXT}
          </Typography>
        </div>
      </div>
    </div>
  );
};
