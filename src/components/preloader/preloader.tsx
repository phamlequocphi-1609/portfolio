"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  containerStagger,
  slideDownScale,
  wordMaskReveal,
} from "@/constants/preloader-variants";

interface PreloaderProps {
  onComplete: () => void;
}
export function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState<number>(0);
  useEffect(() => {
    const duration = 1800;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentPercent = Math.floor((1 - Math.pow(1 - progress, 3)) * 100);
      setPercent(currentPercent);
      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(onComplete, 400);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      variants={slideDownScale}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090D16] text-white select-none "
    >
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-[#7C3AED]/20 to-[#10B981]/15 blur-[100px]"
        />
      </div>
      <motion.div
        exit={{
          opacity: 0,
          y: 30,
          transition: { duration: 0.4 },
        }}
        className="relative z-10 flex flex-col items-center justify-center px-4"
      >
        <motion.div
          variants={containerStagger}
          initial="initial"
          animate="animate"
          className="flex space-x-3 overflow-hidden py-2"
        >
          {["Pham", "Le", "Quoc", "Phi"].map((word, index) => (
            <motion.span
              key={index}
              variants={wordMaskReveal}
              className="font-signature text-5xl sm:text-6xl md:text-7xl text-white font-normal tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="mt-4 text-xs md:text-sm tracking-[0.35em] text-border-glow font-mono uppercase"
        >
          This is my portfolio
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-3 w-64 sm:w-80"
        >
          <div className="flex justify-between items-center w-full text-[11px] font-mono">
            <span className="text-[#7483A3] uppercase tracking-widest">
              {percent === 100 ? "Ready" : "Loading..."}
            </span>
            <motion.span
              key={percent}
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[#10B981] font-medium tabular-nums"
            >
              {percent}%
            </motion.span>
          </div>

          <div className="relative w-full h-1 bg-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-[#10B981] to-[#10B981]"
              style={{ width: `${percent}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
