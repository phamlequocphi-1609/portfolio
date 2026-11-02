"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, UserCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HIGHLIGHTS = [
  "Building accessible, fluid & responsive interfaces",
  "Optimizing Core Web Vitals and asset bundles",
  "Architecting modular, maintainable codebases",
  "Continuous experimentation with next-gen web standards",
];

export function AboutPreview() {
  return (
    <section className="py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left card: philosophy & intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-accent font-mono">
              {"// About Me"}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-head tracking-tight">
              Bridging the gap between engineering rigor and creative aesthetic.
            </h2>

            <p className="text-base sm:text-lg text-body leading-relaxed">
              I believe great software isn&apos;t just about functional code —
              it&apos;s about creating seamless, human-centric experiences that
              feel instantaneous, delightful, and effortless to use.
            </p>

            <div className="space-y-3 pt-2">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 text-sm sm:text-base text-body"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-mint shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button size="lg" className="gap-2 text-sm font-semibold">
                  Read Full Journey & Background{" "}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right card: Bento highlight box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 rounded-3xl border border-border bg-gradient-to-br from-surface to-elevated/40 backdrop-blur-md shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-head">
                    Pham Le Quoc Phi
                  </h3>
                  <p className="text-xs text-text-muted">Software Developer</p>
                </div>
              </div>

              <blockquote className="italic font-signature text-2xl text-accent leading-snug mb-6">
                &ldquo;Clean code is not just written for machines, but for the
                humans who maintain it and the users who experience it.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted font-mono">
                <span>Based in Vietnam</span>
                <span className="flex items-center gap-1 text-accent-mint">
                  <Sparkles className="w-3.5 h-3.5" /> High Standards
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
