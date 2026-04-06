"use client";
import { motion } from "framer-motion";

export default function AboutPhoto() {
  return (
    <motion.div
      className="relative flex-shrink-0 flex w-[clamp(260px,35vw,380px)] items-center justify-center mx-auto lg:mx-0"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    >
      {/* Purple glow aura */}
      <div
        className="absolute pointer-events-none rounded-full z-0 -inset-7.5 blur-xl bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_65%)]"
      />

      {/* Float animation wrapper */}
      <motion.div
        className="relative z-1"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotate: -3 }} // ⚠️ kept (animation-related)
      >
        {/* Gradient border frame */}
        <div className="p-[3px] rounded-[20px] bg-gradient-to-br from-[#7C3AED] to-[#EC4899] shadow-[0_0_40px_rgba(124,58,237,0.3)]">
          
          {/* Inner card */}
          <div className="relative overflow-hidden rounded-[18px] bg-[#0E0C1A] w-[clamp(240px,32vw,360px)] h-[clamp(300px,40vw,440px)]">
            <img
              src="/mypic.jpeg"
              alt="Jeyaprakash — Full-Stack Developer & UI/UX Designer"
              className="w-full h-fit block"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />

            {/* Fallback */}
            <div className="hidden absolute inset-0 items-center justify-center flex-col gap-2 bg-[linear-gradient(135deg,#181428,#0E0C1A)]">
              <span
                className="font-display font-extrabold text-[80px] leading-none bg-[linear-gradient(135deg,#EC4899,#A855F7)] bg-clip-text text-transparent"
              >
                JP
              </span>
              <span className="font-mono text-[12px] text-[#5E5478] tracking-[0.15em]">
                &lt;dev /&gt;
              </span>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none bg-[linear-gradient(to_top,rgba(14,12,26,0.7),transparent)]" />
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute -bottom-[10px] -right-[10px] w-5 h-5 rounded-full bg-[linear-gradient(135deg,#7C3AED,#EC4899)] shadow-[0_0_12px_rgba(124,58,237,0.6)]" />

        <div className="absolute -top-2 -left-2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
      </motion.div>
    </motion.div>
  );
}