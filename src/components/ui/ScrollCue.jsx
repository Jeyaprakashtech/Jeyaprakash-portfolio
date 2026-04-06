"use client";
import { motion } from "framer-motion";

export default function ScrollCue() {
  return (
    <div
      className="absolute lg:bottom-20 bottom-8 left-1/2 -translate-x-1/2
                 flex flex-col items-center gap-2
                 select-none pointer-events-none"
      aria-hidden
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-500/60">
        scroll
      </span>

      <div className="flex flex-col items-center gap-[3px]">
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            className={`opacity-${[100, 70, 40][i]}`}
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.18,
            }}
          >
            <path
              d="M1 1L8 8L15 1"
              stroke="#7C3AED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        ))}
      </div>
    </div>
  );
}