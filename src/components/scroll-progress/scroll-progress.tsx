"use client";

import { useSyncExternalStore } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
}

const emptySubscribe = () => () => {};

export const ScrollProgress = ({ className }: ScrollProgressProps) => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn("fixed top-0 left-0 right-0 z-50 h-1 pointer-events-none")}
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
        }}
        className={cn(
          "h-full w-full bg-accent-mint shadow-[0_0_8px_rgba(244,63,94,0.6)]",
          className,
        )}
      />
    </div>
  );
};
