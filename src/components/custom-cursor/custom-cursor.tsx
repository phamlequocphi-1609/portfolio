"use client";
import { useEffect, useState, useRef, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const RING_SPRING = { damping: 30, stiffness: 400, mass: 0.4 };

export const CustomCursor = memo(function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, RING_SPRING);
  const smoothY = useSpring(cursorY, RING_SPRING);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const hasAppearedRef = useRef<boolean>(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!hasAppearedRef.current) {
        hasAppearedRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;
      const isClickable = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer",
      );
      setIsHovered(!!isClickable);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
          isHovered ? "border-mint/80 bg-mint/5" : "border-white/60"
        }`}
        style={{ x: smoothX, y: smoothY }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isClicked ? 0.5 : isHovered ? 0.3 : 1,
          opacity: isVisible ? (isHovered ? 0.4 : 1) : 0,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />
    </>
  );
});
