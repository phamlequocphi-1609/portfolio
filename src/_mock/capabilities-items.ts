import { CAPABILITY_TITLES } from "@/constants/capabilities";

export interface CapabilityApi {
  id: number;
  title: string;
  description: string;
}

export const CAPABILITIES_ITEMS: CapabilityApi[] = [
  {
    id: 1,
    title: CAPABILITY_TITLES.ENTERPRISE_DASHBOARDS,
    description:
      "Most of my day-to-day work involves turning complex business workflows—like multi-factory cement production, inventory monitoring, and operational reporting—into fast, intuitive, and high-performance web dashboards.",
  },
  {
    id: 2,
    title: CAPABILITY_TITLES.DATA_FETCHING,
    description:
      "I care deeply about how data moves on the client. Using TanStack Query, Zustand. I clean up redundant API calls, handle live data streams, and ensure seamless caching with optimistic UI updates.",
  },
  {
    id: 3,
    title: CAPABILITY_TITLES.PERFORMANCE_OPTIMIZATION,
    description:
      "I focus on improving frontend performance through caching, lazy loading, code splitting and reducing unnecessary re-renders. I also optimize large data tables and pay attention to Code Web Vitals to improve page loading speed and overall user experience.",
  },
  {
    id: 4,
    title: CAPABILITY_TITLES.ARCHITECTURE_REFACTORING,
    description:
      "I help decouple tangled legacy components into clean, modular directory structures. By standardizing reusable hooks and service layers, I reduce technical dept and help the team move faster without fear of breaking existing features.",
  },
  {
    id: 5,
    title: CAPABILITY_TITLES.AI_TOOLING,
    description:
      "I use tools like Antigravity, Github Copilot, Claude to speed up daily development, from setting up project stuctures to writing tests and exploring technical solutions. I review the suggestions and make adjustments to ensure the code fits the project.",
  },
  {
    id: 6,
    title: CAPABILITY_TITLES.AGILE_EXECUTION,
    description:
      "I work with Project Managers, Backend Developers, UI/UX Designers, and other team members to clarify requirements and break down tasks into smaller development steps. I keep communication open during the sprint, share progress, and discuss issues early to avoid delays.",
  },
];
