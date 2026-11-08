"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui";
import { CapabilitiesSkeleton } from "./components/capabilities-skeleton";
import {
  TITLE_CAPABILITIES,
  titleContainerVariants,
  titleWorldVariants,
} from "@/constants/capabilities-variants";
import {
  CAPABILITIES_CONFIG,
  isCapabilityTitle,
} from "@/constants/capabilities";
import { CAPABILITIES_ITEMS } from "@/_mock/capabilities-items";
import { useCapabilities } from "./hooks/use-capabilities";
import { CapabilityItem } from "@/types/capability";

const CapabilitiesBarrel = dynamic(
  () =>
    import("./components/capabilities-barrel").then(
      (mod) => mod.CapabilitiesBarrel,
    ),
  {
    ssr: false,
    loading: () => <CapabilitiesSkeleton />,
  },
);

const MotionTypography = motion(Typography);

export const CapabilitiesSection = () => {
  const { data: apiResponse } = useCapabilities();

  const capabilities: CapabilityItem[] = useMemo(() => {
    const rawItems = apiResponse?.data ?? CAPABILITIES_ITEMS;
    const configValues = Object.values(CAPABILITIES_CONFIG);
    return rawItems.map((item, index) => {
      const config = isCapabilityTitle(item.title)
        ? CAPABILITIES_CONFIG[item.title]
        : (configValues[index % configValues.length] ?? configValues[0]);

      return {
        id: item.id,
        title: item.title,
        description: item.description,
        ...config,
      };
    });
  }, [apiResponse?.data]);

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

      <CapabilitiesBarrel items={capabilities} />
    </section>
  );
};
