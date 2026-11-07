import {
  TrendingUp,
  RefreshCw,
  Gauge,
  Layers,
  Bot,
  UserGroup,
} from "lucide-react";
import { CapabilityConfig } from "@/types/capability";

export const CAPABILITY_TITLES = {
  ENTERPRISE_DASHBOARDS: "Enterprise Dashboards & Portals",
  DATA_FETCHING: "Data Fetching & State Sync",
  PERFORMANCE_OPTIMIZATION: "Performance & Optimization",
  ARCHITECTURE_REFACTORING: "Architecture Refactoring",
  AI_TOOLING: "AI-Assisted Workflow & Tooling",
  AGILE_EXECUTION: "Cross-Functional & Agile Execution",
} as const;

export type CapabilityTitle =
  (typeof CAPABILITY_TITLES)[keyof typeof CAPABILITY_TITLES];

export const CAPABILITIES_CONFIG: Record<CapabilityTitle, CapabilityConfig> = {
  [CAPABILITY_TITLES.ENTERPRISE_DASHBOARDS]: {
    icon: TrendingUp,
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  [CAPABILITY_TITLES.DATA_FETCHING]: {
    icon: RefreshCw,
    iconBg: "bg-sky-500/10 dark:bg-sky-500/15",
    iconColor: "text-sky-600 dark:text-sky-400",
    borderColor: "border-sky-500/20",
  },
  [CAPABILITY_TITLES.PERFORMANCE_OPTIMIZATION]: {
    icon: Gauge,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20",
  },
  [CAPABILITY_TITLES.ARCHITECTURE_REFACTORING]: {
    icon: Layers,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20",
  },
  [CAPABILITY_TITLES.AI_TOOLING]: {
    icon: Bot,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20",
  },
  [CAPABILITY_TITLES.AGILE_EXECUTION]: {
    icon: UserGroup,
    iconBg: "bg-purple-500/10 dark:bg-purple-500/15",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20",
  },
};

export const isCapabilityTitle = (title: string): title is CapabilityTitle => {
  return title in CAPABILITIES_CONFIG;
};
