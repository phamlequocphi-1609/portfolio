"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactCta() {
  return (
    <section className="py-24 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-border bg-gradient-to-b from-surface/90 to-surface/40 p-8 sm:p-12 lg:p-16 text-center overflow-hidden backdrop-blur-md shadow-2xl"
        >
          {/* Ambient lighting */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-accent-mint/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-mint/30 bg-accent-mint/10 text-xs font-medium text-accent-mint mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
            <span>Open for new opportunities & collaborations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-head tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to build something exceptional?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-body max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re looking to develop a new web application, revamp
            your frontend architecture, or simply connect, I&apos;d love to hear
            from you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 text-sm font-semibold shadow-xl shadow-accent/25"
              >
                <Mail className="w-4 h-4" /> Get In Touch{" "}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a
              href="https://github.com/phamlequocphi-1609"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2 text-sm">
                <GithubIcon className="w-4 h-4" /> GitHub Profile
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
