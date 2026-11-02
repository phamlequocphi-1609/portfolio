"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Sparkles, ShieldCheck } from "lucide-react";

const TECH_ITEMS = [
  {
    title: "Next.js & React 19",
    category: "Framework & Architecture",
    description:
      "Server components, fluid routing, nested layouts, and cutting-edge streaming rendering for supreme performance.",
    icon: Code2,
    tags: ["Next.js 15+", "React 19", "Server Actions", "App Router"],
    highlight: true,
  },
  {
    title: "TypeScript Precision",
    category: "Language & Quality",
    description:
      "Strict type safety and robust API contracts preventing runtime defects and enabling self-documenting codebases.",
    icon: ShieldCheck,
    tags: ["Strict Typing", "Generics", "Type Inference", "Interfaces"],
    highlight: false,
  },
  {
    title: "Tailwind CSS & Motion",
    category: "Design & Micro-interactions",
    description:
      "Fluid, responsive UI systems built with modern tokens, dark/light view transitions, and tactile physics animations.",
    icon: Sparkles,
    tags: ["Tailwind v4", "Framer Motion", "View Transitions", "CSS Grid"],
    highlight: false,
  },
  {
    title: "State & Data Fetching",
    category: "Ecosystem & Async Layer",
    description:
      "Reliable async synchronization, intelligent cache invalidation, and lightweight global stores.",
    icon: Layers,
    tags: ["TanStack Query v5", "Zustand", "Axios", "Optimistic UI"],
    highlight: false,
  },
];

export function TechBento() {
  return (
    <section className="py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-accent font-mono mb-2">
              {"// Core Competencies"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-head tracking-tight">
              Modern Tech Stack
            </h2>
          </div>
          <p className="text-text-muted text-sm sm:text-base max-w-md">
            Built on top of industry-standard tools and architectures designed
            for speed, scale, and polish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-7 sm:p-8 rounded-2xl border transition-all duration-300 group overflow-hidden ${
                  item.highlight
                    ? "border-accent/40 bg-gradient-to-br from-surface via-surface/60 to-accent/5 hover:border-accent"
                    : "border-border bg-surface/40 hover:bg-surface/80 hover:border-border-glow"
                }`}
              >
                {/* Background glow orb */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-colors pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase text-text-muted px-2.5 py-1 rounded-full bg-elevated border border-border">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-head mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-body leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-elevated text-text-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
