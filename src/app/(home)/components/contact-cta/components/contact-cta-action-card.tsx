import Link from "next/link";
import { Mail, ArrowRight, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui";

export const ContactCtaActionCard = () => {
  return (
    <div className="lg:col-span-5">
      <div className="relative rounded-2xl border border-border/80 bg-elevated/60 dark:bg-elevated/35 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-sm backdrop-blur-md">
        <div className="space-y-3">
          <Typography variant="title_20_600" tag="h3" className="text-head">
            Let&apos;s build something great
          </Typography>
          <Typography
            variant="body_14_400"
            tag="p"
            className="text-text-muted leading-relaxed"
          >
            Have a project in mind, an engineering role, or technical challenge
            to solve? Let&apos;s connect and discuss how we can work together.
          </Typography>
        </div>

        <div className="rounded-xl border border-border/60 bg-surface/50 dark:bg-surface/30 p-3.5 flex items-center gap-3 text-xs text-text-muted">
          <CircleDot className="w-4 h-4 text-accent-mint shrink-0" />
          <Typography
            variant="caption_12_400"
            tag="span"
            className="text-text-muted"
          >
            Available for full-time roles and select engineering projects.
          </Typography>
        </div>

        <div className="space-y-3 pt-1">
          <Link href="/contact" className="w-full block">
            <Button
              size="lg"
              className="w-full h-12 rounded-xl bg-head text-main hover:bg-head/90 dark:bg-white dark:text-black dark:hover:bg-white/90 font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 gap-2 text-sm justify-center"
            >
              <Mail className="w-4 h-4" />
              <Typography
                variant="body_14_600"
                tag="span"
                className="text-inherit"
              >
                Get in touch
              </Typography>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
