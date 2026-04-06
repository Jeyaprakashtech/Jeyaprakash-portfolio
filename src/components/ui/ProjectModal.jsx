"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechPill from "./TechPill";
import ProjectScreenshot from "./ProjectScreenshot";

export default function ProjectModal({ project, onClose }) {
  const [slide, setSlide] = useState(0);

  const screenshots = project.screenshots?.length
    ? project.screenshots
    : [{ gradient: project.gradient, image: project.image }];

  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center  z-99999
                   bg-[rgba(6,6,18,0.88)] backdrop-blur-[10px]"
        style={{ WebkitBackdropFilter: "blur(10px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          className="relative w-full overflow-y-auto rounded-2xl
                     max-w-[720px] max-h-[calc(100vh-80px)] mt-[68px]
                     bg-[#0E0C1A] border border-[#2A1F50]
                     shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(124,58,237,0.1)]
                     z-[100000]"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
        >

          {/* Close */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full
                       flex items-center justify-center z-10
                       bg-white/[0.06] border border-[#2A1F50]"
            whileHover={{
              background: "rgba(124,58,237,0.25)",
              borderColor: "#7C3AED",
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            ✕
          </motion.button>

          {/* Carousel */}
          <div className="relative w-full h-[260px] rounded-t-2xl overflow-hidden flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <ProjectScreenshot
                  gradient={screenshots[slide]?.gradient || project.gradient}
                  title={project.title}
                  image={screenshots[slide]?.image}
                />
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            {screenshots.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {screenshots.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setSlide(i)}
                    className="h-[6px] rounded-full"
                    animate={{
                      width: i === slide ? "20px" : "6px",
                      background: i === slide
                        ? "#7C3AED"
                        : "rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Arrows */}
            {screenshots.length > 1 && (
              <>
                <motion.button
                  onClick={() =>
                    setSlide((s) => (s - 1 + screenshots.length) % screenshots.length)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2
                             w-8 h-8 rounded-full flex items-center justify-center
                             bg-[rgba(6,6,18,0.72)] border border-[#2A1F50]"
                  whileHover={{
                    background: "rgba(124,58,237,0.3)",
                    borderColor: "#7C3AED",
                    scale: 1.08,
                  }}
                >
                  {"<"}
                </motion.button>

                <motion.button
                  onClick={() =>
                    setSlide((s) => (s + 1) % screenshots.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2
                             w-8 h-8 rounded-full flex items-center justify-center
                             bg-[rgba(6,6,18,0.72)] border border-[#2A1F50]"
                  whileHover={{
                    background: "rgba(124,58,237,0.3)",
                    borderColor: "#7C3AED",
                    scale: 1.08,
                  }}
                >
                 {">"}
                  
                </motion.button>
              </>
            )}

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none
                            bg-[linear-gradient(to_top,#0E0C1A,[rgba(124, 58, 237, 0)])]" />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.featured && (
                <span className="px-3 py-1 rounded-full font-mono text-[11px]
                                 text-[#EC4899] bg-[rgba(236,72,153,0.12)]
                                 border border-[rgba(236,72,153,0.25)]">
                  ★ FEATURED
                </span>
              )}
              {project.category && (
                <span className="px-3 py-1 rounded-full font-mono text-[11px]
                                 text-[#A855F7] bg-[rgba(168,85,247,0.1)]
                                 border border-[rgba(168,85,247,0.25)]">
                  {project.category}
                </span>
              )}
              {project.year && (
                <div
              className=" px-3 py-1 rounded-full font-mono text-[11px]
                                 text-[#A855F7] bg-[rgba(168,85,247,0.1)]
                                 border border-[rgba(168,85,247,0.25)]"
            >
              {project.year}
            </div>
              )}
              
            </div>

            {/* Title */}
            <h3 className="font-display font-bold mb-3
                           text-[clamp(20px,3vw,26px)] leading-[1.2] text-[#F0EEFF]">
              {project.title}
            </h3>

            {/* Desc */}
            <p className="font-body text-[15px] text-[#A89EC4] leading-[1.8] mb-6">
              {project.fullDesc || project.desc}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <TechPill key={t.label} {...t} />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              {project.liveUrl ? (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-5 h-[42px] rounded-xl
                             font-body font-semibold text-[14px] text-white
                             bg-gradient-to-r from-[#7C3AED] to-[#A855F7]
                             shadow-[0_0_16px_rgba(124,58,237,0.35)]"
                >
                  Live Demo
                </motion.a>
              ):(
                <div
                  className="flex items-center gap-2 px-5 rounded-xl
                             font-body font-semibold text-[14px]"
                  style={{
                    height: "42px",
                    color: "#5E5478",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid #2A1F50",
                    cursor: "not-allowed",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10"
                      stroke="#5E5478" strokeWidth="1.8"/>
                    <path d="M12 8v4M12 16h.01"
                      stroke="#5E5478" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  Live Demo Unavailable
                </div>
              )}
              {/* GitHub */}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 h-[42px] text-[#C084FC] rounded-xl
                             font-body font-medium text-[14px] bg-[rgba(124, 58, 237, 0)]"
                  
                  whileHover={{
                    borderColor: "#7C3AED",
                    color: "#F0EEFF",
                    backgroundColor: "rgba(124,58,237,0.08)",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  GitHub →
                </motion.a>
              )}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}