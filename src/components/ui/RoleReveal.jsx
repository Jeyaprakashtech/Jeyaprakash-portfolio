"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TYPING_ROLES } from "../../assets/Content";


const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&!?";

export default function RoleReveal() {
  const [display,   setDisplay]   = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const frameRef  = useRef(null);
  const iterRef   = useRef(0);

  const scrambleTo = (target) => {
    cancelAnimationFrame(frameRef.current);
    iterRef.current = 0;

    // How many rAF frames before each char locks
    // Lower = faster lock. 3 = snappy, 6 = slower
    const LOCK_EVERY = 3;
    const totalFrames = target.length * LOCK_EVERY + 8;

    const run = () => {
      const iter = iterRef.current;
      const lockedCount = Math.floor(iter / LOCK_EVERY);

      setDisplay(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return "\u00A0"; // non-breaking space
            if (i < lockedCount)  return char;  // locked
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iterRef.current++;

      if (iterRef.current <= totalFrames) {
        frameRef.current = requestAnimationFrame(run);
      } else {
        setDisplay(target); // guarantee clean end
      }
    };

    frameRef.current = requestAnimationFrame(run);
  };

  // Mount — scramble first role in
  useEffect(() => {
    scrambleTo(TYPING_ROLES[0]);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  // Cycle every 3.2s
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => {
        const next = (prev + 1) % TYPING_ROLES.length;
        scrambleTo(TYPING_ROLES[next]);
        return next;
      });
    }, 3200);
    return () => {
      clearInterval(id);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center gap-3 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
    >
      {/* Left deco */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <motion.span
          style={{ color: "#7C3AED", fontSize: "13px" }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >✦</motion.span>
        <motion.div
          style={{
            height: "1px",
            width: "clamp(28px, 5vw, 72px)",
            background: "linear-gradient(90deg, transparent, #7C3AED)",
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scramble text */}
      <span
        className="font-mono font-semibold text-center bg-gradient-to-br from-purple-600 to-pink-500
                       bg-clip-text text-transparent md:text-4xl text-2xl inline-block min-w-[160px]"
       
      >
        {display}
      </span>

      {/* Right deco */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <motion.div
          style={{
            height: "1px",
            width: "clamp(28px, 5vw, 72px)",
            background: "linear-gradient(90deg, #EC4899, transparent)",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
        <motion.span
          style={{ color: "#EC4899", fontSize: "13px" }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >✦</motion.span>
      </div>
    </motion.div>
  );
}