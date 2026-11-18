"use client";
import { useRef, useEffect, useCallback, useMemo, memo } from "react";

interface CustomCursorProps {
  trailColor?: string;
  trailLength?: number;
  trailWidth?: number;
  smoothness?: number;
  damping?: number;
  fadeOnLeave?: boolean;
}
export const CustomCursor = memo(function CustomCursor({
  trailColor = "#0057FF",
  trailLength = 30,
  trailWidth = 6,
  smoothness = 0.15,
  damping = 0.85,
  fadeOnLeave = true,
}: CustomCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const smoothMouseRef = useRef({ x: -9999, y: -9999 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const isInsideRef = useRef(false);
  const opacityRef = useRef(0);
  const rafRef = useRef(0);
  const initializedRef = useRef(false);

  const hexToRgb = useCallback((hex: string) => {
    if (hex.startsWith("rgba") || hex.startsWith("rgb")) {
      const match = hex.match(/[\d.]+/g);
      if (match) {
        return {
          r: parseInt(match[0]),
          g: parseInt(match[1]),
          b: parseInt(match[2]),
          a: match[3] ? parseFloat(match[3]) : 1,
        };
      }
    }
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          a: 1,
        }
      : { r: 0, g: 87, b: 255, a: 1 };
  }, []);

  const rgb = useMemo(() => hexToRgb(trailColor), [trailColor, hexToRgb]);
  const lerpFactor = Math.max(0.05, Math.min(1, smoothness));
  const dampFactor = Math.max(0, Math.min(0.99, damping));
  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!initializedRef.current) {
        smoothMouseRef.current = { ...mouseRef.current };
        initializedRef.current = true;
      }
      isInsideRef.current = true;
    };

    const handleMouseLeave = () => {
      isInsideRef.current = false;
    };

    const handleMouseEnter = () => {
      isInsideRef.current = true;
    };

    document.addEventListener("mousemove", handleMouseMove, true);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const dx = mouseRef.current.x - smoothMouseRef.current.x;
      const dy = mouseRef.current.y - smoothMouseRef.current.y;
      velocityRef.current.x =
        velocityRef.current.x * dampFactor + dx * lerpFactor;
      velocityRef.current.y =
        velocityRef.current.y * dampFactor + dy * lerpFactor;
      smoothMouseRef.current.x += velocityRef.current.x;
      smoothMouseRef.current.y += velocityRef.current.y;

      if (isInsideRef.current && initializedRef.current) {
        opacityRef.current = Math.min(1, opacityRef.current + 0.06);
      } else if (fadeOnLeave) {
        opacityRef.current = Math.max(0, opacityRef.current - 0.03);
      }

      if (
        initializedRef.current &&
        (isInsideRef.current || opacityRef.current > 0.01)
      ) {
        pointsRef.current.unshift({
          x: smoothMouseRef.current.x,
          y: smoothMouseRef.current.y,
        });
      }

      if (pointsRef.current.length > trailLength) {
        pointsRef.current.length = trailLength;
      }

      const pts = pointsRef.current;
      if (pts.length > 2 && opacityRef.current > 0.01) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = pts.length - 3; i >= 0; i--) {
          const t = i / (pts.length - 1);
          const width = trailWidth * (1 - t);
          const alpha = (1 - t) * opacityRef.current * rgb.a;
          if (width < 0.1) continue;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
          ctx.lineWidth = width;
          ctx.moveTo(pts[i].x, pts[i].y);

          const nextMidX = (pts[i + 1].x + pts[i + 2].x) / 2;
          const nextMidY = (pts[i + 1].y + pts[i + 2].y) / 2;
          ctx.quadraticCurveTo(pts[i + 1].x, pts[i + 1].y, nextMidX, nextMidY);
          ctx.stroke();
        }

        if (pts.length > 0) {
          const speed = Math.sqrt(
            velocityRef.current.x ** 2 + velocityRef.current.y ** 2,
          );
          const dotSize = Math.min(trailWidth * 1.4, trailWidth + speed * 0.08);
          ctx.beginPath();
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacityRef.current * rgb.a})`;
          ctx.arc(pts[0].x, pts[0].y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove, true);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      initializedRef.current = false;
    };
  }, [fadeOnLeave, trailLength, trailWidth, rgb, lerpFactor, dampFactor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99999,
      }}
    />
  );
});

CustomCursor.displayName = "CustomCursor";
