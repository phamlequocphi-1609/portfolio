"use client";
import Link from "next/link";
import { SOCIAL_ITEMS } from "@/constants/contact";
import { motion } from "framer-motion";
import {
  contactSocialContainerVariants,
  contactSocialItemVariants,
} from "@/constants/contact-variants";
import { cn } from "cn";

const MotionLink = motion.create(Link);

export const ContactCtaSocialLinks = () => {
  return (
    <motion.div
      variants={contactSocialContainerVariants}
      className="flex items-center gap-2.5"
    >
      {SOCIAL_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <MotionLink
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            variants={contactSocialItemVariants}
            whileHover={{
              y: -4,
              scale: 1.14,
              rotate: -3,
              boxShadow: "0 10px 24px -6px rgba(124, 58, 237, 0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className={cn(
              "w-10 h-10 rounded-full border border-border/80 flex items-center justify-center transition-colors duration-200",
              item.className,
            )}
          >
            <Icon className="w-4 h-4" />
          </MotionLink>
        );
      })}
    </motion.div>
  );
};
