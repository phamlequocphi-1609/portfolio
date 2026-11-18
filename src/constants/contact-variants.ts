import type { Variants } from "framer-motion";

export const contactCtaContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const contactCtaBadgeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -16,
    scale: 0.9,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const kineticTitleContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const kineticTitleWordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "115%",
    rotateX: 35,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const contactCtaBioVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const contactSocialContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const contactSocialItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};

export const contactActionCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.95,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 22,
      mass: 0.9,
    },
  },
};

export const contactMapVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
