"use client";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    const animId = requestAnimationFrame(handleResize);
    window.addEventListener("resize", handleResize);

    const duration = 1400;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentPercent = Math.floor((1 - Math.pow(1 - progress, 2)) * 100);
      setPercent(currentPercent);

      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 220);
      }
    }, 20);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [onComplete]);
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curveVariants: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const slideUp: Variants = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
    },
  };

  const contentFade: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.96,
      transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090D16] text-[#FFFFFF] overflow-hidden select-none"
    >
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-96 h-96 rounded-full bg-gradient-to-tr from-[#7C3AED]/25 via-[#6366F1]/20 to-[#10B981]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 0.95, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#1E2842]/30 via-[#10B981]/10 to-transparent blur-3xl"
        />
      </div>
      <motion.div
        variants={contentFade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 flex flex-col items-center justify-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center text-center"
        >
          <span
            className="font-signature text-5xl sm:text-6xl md:text-7xl text-white font-normal px-2 tracking-wide"
            style={{
              textShadow:
                "0 0 25px rgba(255,255,255,0.45), 0 0 60px rgba(124,58,237,0.35)",
            }}
          >
            Pham Le Quoc Phi
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-3 text-xs md:text-sm tracking-[0.35em] text-[#7483A3] font-mono uppercase"
        >
          This is my portfolio
        </motion.p>

        <div className="mt-8 flex flex-col items-center gap-2.5 w-64 sm:w-72">
          <div className="flex justify-between items-center w-full text-xs font-mono">
            <span className="text-[#7483A3] uppercase tracking-widest text-[11px]">
              {percent < 40
                ? "Loading System"
                : percent < 85
                  ? "Syncing Assets"
                  : "Welcome"}
            </span>
            <span className="text-[#10B981] font-semibold tabular-nums">
              {percent}%
            </span>
          </div>

          <div className="relative w-full h-[3px] bg-[#101626] rounded-full overflow-hidden border border-[#1E2842]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#10B981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.7)]"
              style={{ width: `${percent}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
      {dimension.width > 0 && (
        <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#090D16]">
          <motion.path variants={curveVariants} initial="initial" exit="exit" />
        </svg>
      )}
    </motion.div>
  );
}
