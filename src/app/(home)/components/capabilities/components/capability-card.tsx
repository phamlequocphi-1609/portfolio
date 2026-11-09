"use client";
import { memo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui";
import { CapabilityItem } from "@/types/capability";
import { motion } from "framer-motion";
interface CapabilityCardProps {
  item: CapabilityItem;
  index?: number;
  isActive?: boolean;
}

export const CapabilityCard = memo(
  ({ item, isActive = false }: CapabilityCardProps) => {
    const Icon = item.icon;

    return (
      <div className="relative w-full h-full [transform-style:preserve-3d]">
        <Card
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
          className={`absolute inset-0 overflow-visible rounded-2xl p-4 sm:p-4.5 bg-surface/95 dark:bg-surface/90 backdrop-blur-md border ring-0 transition-all duration-500 flex flex-col justify-between select-none ${
            isActive
              ? "border-accent/60 border-2 shadow-[0_10px_30px_rgba(59,130,246,0.25)] dark:shadow-[0_10px_35px_rgba(124,58,237,0.3)]"
              : "border-border/80 shadow-md hover:border-border-glow"
          }`}
        >
          <div>
            <CardHeader className="p-0 gap-2 mb-2 flex flex-col items-center text-center">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center border ${item.iconBg} ${item.borderColor} ${item.iconColor}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <CardTitle className="p-0 text-center w-full min-h-[2.5rem] flex items-center justify-center">
                <motion.div
                  initial={false}
                  animate={
                    isActive
                      ? {
                          y: 0,
                          opacity: 1,
                          scale: 1,
                          filter: "blur(0px)",
                        }
                      : {
                          y: 5,
                          opacity: 0.65,
                          scale: 0.96,
                          filter: "blur(0.3px)",
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 26,
                    mass: 0.7,
                  }}
                  className="w-full flex flex-col items-center justify-center gap-1.5"
                >
                  <Typography
                    tag="h3"
                    variant="title_16_600"
                    text={item.title}
                    className={`text-xs sm:text-[13px] font-bold tracking-tight text-center text-balance leading-snug transition-colors duration-300 ${
                      isActive
                        ? "text-head dark:text-white"
                        : "text-head/65 dark:text-head/60"
                    }`}
                  />
                  <motion.div
                    initial={false}
                    animate={{
                      width: isActive ? 20 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="h-0.5 rounded-full bg-accent/60"
                  />
                </motion.div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Typography
                tag="p"
                variant="body_14_400"
                text={item.description}
                className="text-body/90 text-[10.5px] sm:text-[11.5px] leading-relaxed"
              />
            </CardContent>
          </div>
        </Card>

        <div
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className={`absolute inset-0 rounded-2xl p-4 bg-surface/85 dark:bg-surface/75 backdrop-blur-xl border border-border/80 flex flex-col items-center justify-center gap-3 select-none ${
            isActive ? "border-accent/40" : ""
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.iconBg} ${item.borderColor} ${item.iconColor} shadow-xs`}
          >
            <Icon className="w-5 h-5 opacity-80" />
          </div>
          <div className="w-8 h-0.5 rounded-full bg-border/60" />
        </div>
      </div>
    );
  },
);

CapabilityCard.displayName = "CapabilityCard";
