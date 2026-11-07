import { CapabilityApi } from "@/_mock/capabilities-items";
import { LucideIcon } from "lucide-react";

export interface CapabilityConfig {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

export interface CapabilityItem extends CapabilityApi, CapabilityConfig {}
