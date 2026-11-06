import { Variants } from "framer-motion";

export const TITLE_CAPABILITIES = ["What", "I", "Actually", "Do"];

export const titleContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const titleWorldVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -55,
    filter: "blur(8px)",
    scale: 1.15,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 140,
      mass: 0.8,
    },
  },
};
