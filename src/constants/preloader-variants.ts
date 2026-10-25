import type { Variants } from "framer-motion";

export const slideDownScale: Variants = {
  initial: {
    top: 0,
    scale: 1,
    borderRadius: "0px",
  },
  exit: {
    top: "100vh",
    scale: 0.9,
    opacity: 0,
    borderRadius: "40px",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const containerStagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const wordMaskReveal: Variants = {
  initial: {
    y: "120%",
    rotateZ: 5,
    opacity: 0,
  },
  animate: {
    y: "0%",
    rotateZ: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
