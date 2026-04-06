"use client";
import { useState, useEffect } from "react";
import { CONTACT_INFO, TERMINAL_MESSAGES, NAV_LINKS } from "../assets/Content";
import { motion } from "framer-motion";

export default function Footer() {
  const [eggClicks, setEggClicks] = useState(0);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showBackTop, setShowBackTop] = useState(false);
  const [backTopHover, setBackTopHover] = useState(false);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyClick = () => {
    const next = eggClicks + 1;
    setEggClicks(next);
    if (next >= 5) {
      setEggClicks(0);
      setTerminalLines([]);
      setTerminalOpen(true);
      TERMINAL_MESSAGES.forEach((line, i) => {
        setTimeout(() => {
          setTerminalLines((prev) => [...prev, line]);
        }, i * 700);
      });
    }
  };

  const scrollToTop = () => {
    setSpinning(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setSpinning(false), 700);
  };

  return (
    <>
      {/* Easter Egg Terminal */}
      {terminalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-5 backdrop-blur-md bg-[#060612]/85"
          onClick={() => setTerminalOpen(false)}
        >
          <div
            className="relative rounded-2xl overflow-hidden w-[min(520px,90vw)] bg-[#060612] border border-[#2A1F50] shadow-[0_0_60px_rgba(124,58,237,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0E0C1A] border-b border-[#2A1F50]">
              {["#EF4444", "#FBBF24", "#22C55E"].map((c) => (
                <div
                  key={c}
                  className="w-3 h-3 rounded-full"
                  style={{ background: c }}
                />
              ))}
              <span className="ml-2 text-[12px] text-[#5E5478] font-mono">
                jeyaprakash@portfolio ~ easter-egg
              </span>
              <button
                className="ml-auto text-[#5E5478] text-lg"
                onClick={() => setTerminalOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-3 min-h-[200px]">
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  className="terminal-line text-[14px] leading-[1.7] font-mono"
                  style={{
                    color:
                      i === 0
                        ? "#22C55E"
                        : i === terminalLines.length - 1
                          ? "#EC4899"
                          : "#06B6D4",
                  }}
                >
                  {line}
                </div>
              ))}

              {terminalLines.length < TERMINAL_MESSAGES.length && (
                <span className="cursor-blink text-[14px] text-[#7C3AED] font-mono">
                  █
                </span>
              )}

              {terminalLines.length === TERMINAL_MESSAGES.length && (
                <div className="terminal-line mt-2 text-[12px] text-[#5E5478] font-mono">
                  {"> [click anywhere to close]"}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showBackTop ? 1 : 0, scale: showBackTop ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-5 w-12 h-12 rounded-full flex items-center justify-center border border-[#2A1F50]"
        style={{
          background: backTopHover
            ? "linear-gradient(135deg, #7C3AED, #A855F7)"
            : "#0E0C1A",
          boxShadow: backTopHover
            ? "0 0 24px rgba(124,58,237,0.5)"
            : "0 4px 20px rgba(0,0,0,0.4)",
          pointerEvents: showBackTop ? "all" : "none",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className={spinning ? "spin-once" : "float-arrow"}
        >
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke={backTopHover ? "#fff" : "#A855F7"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Footer */}
      <motion.footer
        className="bg-[#060612] relative"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Top Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />

        <motion.div
          className="max-w-7xl mx-auto px-6 pt-16 pb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
            {/* Brand */}
            <div className="flex flex-col gap-6">
              <a
                href="#"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 self-start no-underline"
              >
                <span className="font-display font-extrabold text-[28px] bg-gradient-to-br from-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
                  JP
                </span>
                <span className="font-display font-bold text-[16px] text-[#F0EEFF]">
                  Jeyaprakash
                </span>
              </a>

              <p className="text-[15px] text-[#A89EC4] leading-[1.75] max-w-[260px] font-body">
                I Build Beautiful, Scalable Digital Products. Full-stack +
                design — double threat.
              </p>

              <div className="flex gap-3 flex-wrap">
                {CONTACT_INFO.socials.map(({ label, href, color, icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="flex items-center justify-center w-11 h-11 rounded-xl
                                           bg-[#0E0C1A] border border-[#2A1F50] text-[#A89EC4]"
                    whileHover={{
                      color,
                      borderColor: `${color}60`,
                      background: `${color}12`,
                      y: -3,
                      boxShadow: `0 8px 20px ${color}25`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5">
              <span className="text-[14px] text-[#F0EEFF] uppercase tracking-[0.06em] font-display font-bold">
                Quick Links
              </span>

              <div className="flex flex-col gap-3">
                {NAV_LINKS.map(({ label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 text-[#A89EC4] text-[15px] font-body"
                    whileHover={{ x: 6, color: "#fff" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899]" />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-5">
              <span className="text-[14px] text-[#F0EEFF] uppercase tracking-[0.06em] font-display font-bold">
                Let's Connect
              </span>

              <p className="text-[15px] text-[#A89EC4] leading-[1.7] font-body">
                Open to freelance projects, full-time roles, and interesting
                collaborations.
              </p>

              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border 
              border-green-500/30 self-start"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[12px] text-green-500 font-mono font-semibold">
                  Available for Work
                </span>
              </div>

              <motion.a
                href="#contact"
                className="px-5 h-[42px] w-fit flex items-center rounded-xl cursor-pointer text-white font-semibold"
                style={{
                  background: "linear-gradient(90deg, #7C3AED, #A855F7)",
                  boxShadow: "0 0 16px rgba(124,58,237,0.3)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 28px rgba(124,58,237,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Start a Project →
              </motion.a>
            </div>
          </div>

          {/* Bottom */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2A1F50] to-transparent mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-[#5E5478] font-body">
            <div className="flex items-center gap-1 flex-wrap justify-center sm:justify-start">
              <button
                onClick={handleCopyClick}
                className="transition-colors duration-200"
              >
                © 2025
              </button>
              <span>
                Jeyaprakash · Designed & built with React &{" "}
                <span className="text-[#EC4899]">❤</span> · Made in Chennai 🇮🇳
              </span>
            </div>

            <div className="flex gap-2">
              {["Next.js", "Tailwind", "Framer"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-[#0E0C1A] border border-[#2A1F50] text-[11px] font-mono text-[#5E5478]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.footer>
    </>
  );
}
