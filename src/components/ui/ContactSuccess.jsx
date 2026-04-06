"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

const CONFETTI = [
  { top: "20%", left: "20%", color: "#7C3AED", delay: 0,    size: 8  },
  { top: "15%", left: "70%", color: "#EC4899", delay: 0.1,  size: 6  },
  { top: "25%", left: "50%", color: "#06B6D4", delay: 0.2,  size: 10 },
  { top: "10%", left: "35%", color: "#A855F7", delay: 0.15, size: 7  },
  { top: "20%", left: "80%", color: "#3B82F6", delay: 0.05, size: 9  },
  { top: "12%", left: "55%", color: "#EC4899", delay: 0.25, size: 5  },
];

const RECEIPT_ROWS = [
  { label: "Status",   color: "#22C55E" },
  { label: "To",       color: "#C084FC" },
  { label: "Response", color: "#06B6D4" },
];

const RECEIPT_VALUES = {
  Status:   "Delivered ✓",
  To:       "Jeyaprakash",
  Response: "Within 24hrs",
};

export default function ContactSuccess({ show, onReset }) {
  const ref = useMemo(
    () => Math.random().toString(36).slice(2, 10).toUpperCase(),
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-2xl z-5 bg-[#0E0C1A]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Confetti */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {CONFETTI.map((d, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: d.top,
                  left: d.left,
                  width: d.size,
                  height: d.size,
                  background: d.color,
                }}
                initial={{ y: -10, opacity: 1, rotate: 0 }}
                animate={{ y: 60, opacity: 0, rotate: 360 }}
                transition={{
                  duration: 0.8,
                  delay: d.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Card */}
          <motion.div
            className="flex flex-col items-center gap-6 p-10 text-center"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Check circle */}
            <div className="relative flex items-center justify-center">
              {/* Ripples */}
              {[0.3, 0.6].map((delay, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full w-[80px] h-[80px]"
                  style={{
                    border: `2px solid rgba(124,58,237,${0.4 - i * 0.15})`,
                  }}
                  animate={{ scale: [0.8, 2.2], opacity: [0.6, 0] }}
                  transition={{
                    duration: 1.2,
                    delay,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Circle */}
              <div
                className="relative flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#7C3AED] shadow-[0_0_32px_rgba(124,58,237,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))",
                }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <motion.path
                    d="M8 18l7 7 13-13"
                    stroke="#A855F7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                  />
                </svg>
              </div>
            </div>

            {/* Text */}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="font-display font-bold text-[24px] text-[#F0EEFF]">
                Message Sent! ✦
              </span>
              <span className="font-body text-[15px] text-[#A89EC4] leading-[1.6]">
                Thanks for reaching out.
                <br />
                I'll get back to you soon.
              </span>
            </motion.div>

            {/* Receipt card */}
            <motion.div
              className="w-full max-w-[320px] rounded-xl px-6 py-4 flex flex-col gap-2 bg-[#060612] border border-[#2A1F50]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              {RECEIPT_ROWS.map(({ label, color }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="font-mono text-[12px] text-[#5E5478]">
                    {label}
                  </span>
                  <span
                    className="font-mono font-semibold text-[12px]"
                    style={{ color }}
                  >
                    {RECEIPT_VALUES[label]}
                  </span>
                </div>
              ))}

              <div className="border-t border-dashed border-[#2A1F50] my-1" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-[#5E5478]">
                  Ref
                </span>
                <span className="font-mono text-[11px] text-[#5E5478]">
                  #{ref}
                </span>
              </div>
            </motion.div>

            {/* Reset button */}
            <motion.button
              onClick={onReset}
              className="px-6 h-10 rounded-xl font-body font-medium text-[14px]
                         text-[#C084FC] border border-[#2A1F50] bg-transparent
                         hover:border-[#7C3AED] hover:text-[#F0EEFF]
                         hover:bg-[rgba(124,58,237,0.08)] transition"
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Send another →
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}