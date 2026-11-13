"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Send, CircleDot, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui";
import { Map } from "@/components/map";
import { LOCATION_TEXT, SOCIAL_ITEMS } from "@/constants/contact";

export function ContactCta() {
  return (
    <section className="py-20 sm:py-24 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-border/80 bg-surface/75 dark:bg-surface/40 backdrop-blur-xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col gap-10 lg:gap-12"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 dark:via-accent/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-border-glow)_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-15 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_30%,transparent_90%)] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
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
                AI-augemented workflows, from architecture to coding and
                testing. Open to impactful opportunities.
              </Typography>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2.5">
                  {SOCIAL_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="w-10 h-10 rounded-full border border-border/80 bg-elevated/50 hover:bg-elevated hover:border-border-glow hover:text-head text-text-muted flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
                <div className="h-4 w-px bg-border/80 hidden sm:block" />
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/70 bg-elevated/40 text-text-muted">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <Typography variant="caption_12_500" tag="span">
                    {LOCATION_TEXT}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-border/80 bg-elevated/60 dark:bg-elevated/35 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-sm backdrop-blur-md">
                <div className="space-y-3">
                  <Typography
                    variant="title_20_600"
                    tag="h3"
                    className="text-head"
                  >
                    Let&apos;s build something great
                  </Typography>
                  <Typography
                    variant="body_14_400"
                    tag="p"
                    className="text-text-muted leading-relaxed"
                  >
                    Have a project in mind, an engineering role, or technical
                    challenge to solve? Let&apos;s connect and discuss how we can
                    work together.
                  </Typography>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/50 dark:bg-surface/30 p-3.5 flex items-center gap-3 text-xs text-text-muted">
                  <CircleDot className="w-4 h-4 text-accent-mint shrink-0" />
                  <Typography
                    variant="caption_12_400"
                    tag="span"
                    className="text-text-muted"
                  >
                    Available for full-time roles and select engineering
                    projects.
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
          </div>
          <div className="relative z-10 h-px w-full bg-border/60" />
          <Map />
        </motion.div>
      </div>
    </section>
  );
}
