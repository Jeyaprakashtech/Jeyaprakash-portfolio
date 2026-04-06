"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ---------------- SHAPES ---------------- */

const SHAPES = [
  // LEFT (keep subtle for text readability)
  { size: 100, x: "12%", y: "25%", blur: 50, color: "purple" },
  { size: 70, x: "25%", y: "75%", blur: 40, color: "pink" },

  // RIGHT (avatar energy cluster)
  { size: 200, x: "78%", y: "40%", blur: 80, color: "cyan" },
  { size: 140, x: "85%", y: "65%", blur: 70, color: "purple" },
  { size: 120, x: "70%", y: "55%", blur: 60, color: "pink" },
];

const colorMap = {
  purple: "rgba(124,58,237,0.35)",
  pink: "rgba(236,72,153,0.30)",
  cyan: "rgba(6,182,212,0.28)",
};

/* ---------------- SHAPE ---------------- */

function GlowShape({ size, x, y, blur, color }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        background: colorMap[color],
        filter: `blur(${blur}px)`,
      }}
      animate={{
        y: [0, -25, 0],
        x: [0, 15, 0],
        scale: [1, 1.12, 1],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ---------------- MAIN ---------------- */

export default function HeroBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animId;

    const resize = () => {
      const DPR = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    /* ---------------- AURORA BLOBS ---------------- */

    const blobs = [
      // RIGHT SIDE FLOW (main aurora stream)
      { x: 0.75, y: 0.35, r: 0.5, color: "6,182,212", phase: 0 },
      { x: 0.85, y: 0.55, r: 0.45, color: "124,58,237", phase: 2 },
      { x: 0.70, y: 0.70, r: 0.4, color: "236,72,153", phase: 4 },

      // subtle center blend
      { x: 0.55, y: 0.4, r: 0.35, color: "124,58,237", phase: 1 },
    ];

    let t = 0;

    const draw = () => {
      t++;

      const transform = ctx.getTransform();
      const width = canvas.width / transform.a;
      const height = canvas.height / transform.d;

      ctx.clearRect(0, 0, width, height);

      blobs.forEach((b) => {
        // ✨ circular / orbit-style motion
        const px =
          (b.x +
            Math.sin(t * 0.00025 + b.phase) * 0.08 +
            Math.cos(t * 0.00018 + b.phase) * 0.04) *
          width;

        const py =
          (b.y +
            Math.cos(t * 0.00022 + b.phase) * 0.08 +
            Math.sin(t * 0.00015 + b.phase) * 0.04) *
          height;

        const r = b.r * Math.max(width, height) * 1.2;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, r);

        grad.addColorStop(0, `rgba(${b.color},0.38)`);
        grad.addColorStop(0.3, `rgba(${b.color},0.16)`);
        grad.addColorStop(0.6, `rgba(${b.color},0.08)`);
        grad.addColorStop(1, `rgba(${b.color},0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Canvas Aurora */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      
      {/* LEFT DARK FADE (text clarity) */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#060612] via-[#060612]/80 to-transparent" />

      {/* RADIAL FOCUS (around avatar) */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_75%_45%,transparent,rgba(6,6,18,0.6)_60%)]" />

      {/* BOTTOM FADE */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#060612] via-transparent to-transparent" />
    </>
  );
}