"use client";
import { motion } from "framer-motion";
import {
  TrendingUp,
  RefreshCw,
  Bot,
  LucideIcon,
  Gauge,
  Layers,
  UserGroup,
} from "lucide-react";
import { Typography } from "@/components/ui";
import { CapabilitiesBarrel } from "./capabilities-barrel";
import {
  TITLE_CAPABILITIES,
  titleContainerVariants,
  titleWorldVariants,
} from "@/constants/capabilities-varients";
import { Suspense } from "react";

export interface CapabilityItem {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Enterprise Dashboards & Portals",
    description:
      "Most of my day-to-day work involves turning complex business workflows—like multi-factory cement production, inventory monitoring, and operational reporting—into fast, intuitive, and high-performance web dashboards.",
    icon: TrendingUp,
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "Data Fetching & State Sync",
    description:
      "I care deeply about how data moves on the client. Using TanStack Query, Zustand. I clean up redundant API calls, handle live data streams, and ensure seamless caching with optimistic UI updates.",
    icon: RefreshCw,
    iconBg: "bg-sky-500/10 dark:bg-sky-500/15",
    iconColor: "text-sky-600 dark:text-sky-400",
    borderColor: "border-sky-500/20",
  },
  {
    title: "Performance & Optimization",
    description:
      "I focus on improving frontend performance through caching, lazy loading, code splitting and reducing unnecessary re-renders. I also optimize large data tables and pay attention to Code Web Vitals to improve page loading speed and overall user experience.",
    icon: Gauge,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    title: "Architecture Refactoring",
    description:
      "I help decouple tangled legacy components into clean, modular directory structures. By standardizing reusable hooks and service layers, I reduce technical dept and help the team move faster without fear of breaking existing features.",
    icon: Layers,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    title: "AI-Assisted Workflow & Tooling",
    description:
      "I use tools like Antigravity, Github Copilot, Claude to speed up daily development, from setting up project stuctures to writing tests and exploring technical solutions. I review the suggestions and make adjustments to ensure the code fits the project.",
    icon: Bot,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    title: "Cross-Functional & Agile Execution",
    description:
      "I work with Project Managers, Backend Developers, UI/UX Designers, and other team members to clarify requirements and break down tasks into smaller development steps. I keep communication open during the sprint, share progress, and discuss issues early to avoid delays.",
    icon: UserGroup,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20",
  },
];

const MotionTypography = motion(Typography);

export const CapabilitiesSection = () => {
  return (
    <section className="py-14 sm:py-18 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-x-clip">
      <div className="mb-1 sm:mb-2 text-center">
        <MotionTypography
          tag="h2"
          variant="h2_36_700"
          variants={titleContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tighter text-center"
        >
          {TITLE_CAPABILITIES.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={titleWorldVariants}
              className="inline-block mr-[0.28em] last:mr-0"
            >
              <Typography
                tag="span"
                variant="h2_36_700"
                text={word}
                className="font-black text-slate-950 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:text-white dark:drop-shadow-[0_0_32px_rgba(59,130,246,0.6)] inline-block"
              />
            </motion.span>
          ))}
        </MotionTypography>
      </div>

      <Suspense fallback={<div className="full min-h-[300px]" />}>
        <CapabilitiesBarrel items={CAPABILITIES} />
      </Suspense>
    </section>
  );
};
