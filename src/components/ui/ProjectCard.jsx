"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TechPill from "./TechPill";
import ProjectScreenshot from "./ProjectScreenshot";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project, delay = 0, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const indexNum = String(index + 1).padStart(2, "0");

  return (
    <>
      <motion.div
        className="flex overflow-hidden cursor-pointer 
                   bg-[#0E0C1A] border border-[#2A1F50] 
                   rounded-[14px] min-h-[200px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: "easeOut", delay }}
        animate={{
          borderColor: hovered ? "#7C3AED" : "#2A1F50",
          boxShadow: hovered
            ? "0 16px 48px rgba(124,58,237,0.22)"
            : "0 0 0 rgba(0,0,0,0)",
          y: hovered ? -4 : 0,
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* LEFT */}
        <div className="relative flex-shrink-0 self-stretch w-[100px]">
          <div className="absolute inset-0 bg-[#0D0B1E]" />

          <motion.div
            className="absolute inset-0"
            animate={{
              background: hovered
                ? "linear-gradient(180deg, rgba(124,58,237,0.55), rgba(236,72,153,0.3))"
                : "linear-gradient(180deg, rgba(124,58,237,0.32), rgba(236,72,153,0.16))",
            }}
          />

          <div
            className="absolute inset-0 
            bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
                linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:14px_14px]"
          />

          <div className="absolute inset-0 opacity-20">
            <ProjectScreenshot {...project} title="" />
          </div>

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       font-display font-extrabold select-none
                       text-[48px] leading-none"
            animate={{
              color: hovered
                ? "rgba(255,255,255,0.22)"
                : "rgba(255,255,255,0.12)",
            }}
          >
            {indexNum}
          </motion.div>

          <motion.div
            className="absolute bottom-3 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
          >
            <span className="font-mono font-semibold tracking-[0.12em] text-[9px] text-white/45">
              VIEW →
            </span>
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 bottom-0 w-[2px]"
            animate={{
              background: hovered
                ? "linear-gradient(180deg,#7C3AED,#EC4899)"
                : "linear-gradient(180deg,#3D2E6B,#3D2E6B)",
              opacity: hovered ? 1 : 0.5,
            }}
          />

          <div className="absolute top-0 right-[2px] bottom-0 w-[22px] pointer-events-none bg-[linear-gradient(90deg,transparent,#0E0C1A)]" />
        </div>

        {/* RIGHT */}
        <div className=" relative flex flex-col justify-between flex-1 min-w-0 p-4">
          <div className="min-w-0">
            <motion.h3
              className="font-display font-bold mb-1.5 truncate text-[15px] leading-[1.3] text-[#F0EEFF]"
              animate={{ color: hovered ? "#FFFFFF" : "#F0EEFF" }}
            >
              {project.title}
            </motion.h3>

            <p
              className="font-body text-[12px] text-[#A89EC4] leading-[1.65] overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.desc}
            </p>
          </div>
                {project.category && (
                <motion.span
                  className=" absolute top-2 right-2 inline-block mb-2 px-2 py-1 rounded-full 
                              font-mono font-semibold text-[10px]
                              text-[#A855F7] bg-[rgba(168,85,247,0.1)]
                              border border-[rgba(168,85,247,0.2)]"
                  animate={{
                    borderColor: hovered
                      ? "rgba(168,85,247,0.4)"
                      : "rgba(168,85,247,0.2)",
                  }}
                >
                  {project.category}
                </motion.span>
              )}
          <div className="flex flex-nowrap  gap-1.5 my-2 overflow-hidden">
            {project.tech.slice(0, 2).map((t) => (
              <TechPill key={t.label} {...t} />
            ))}
            {project.tech.length > 2 && (
              <span className="px-2 py-1 rounded-full text-center font-mono text-[10px] flex-shrink-0 text-[#A89EC4] bg-white/[0.05] border border-[#2A1F50]">
                +{project.tech.length - 2}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 pt-2.5 border-t border-[#2A1F50]/80">
            {project.liveUrl ? (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                           font-body font-semibold text-[12px] text-white
                           bg-gradient-to-r from-[#7C3AED] to-[#A855F7]
                           shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 18px rgba(124,58,237,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Live Demo
              </motion.a>
            ) : (
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                               font-body font-semibold text-[12px]
                               text-[#5E5478] bg-white/[0.03] border border-[#2A1F50] cursor-not-allowed"
              >
                No Live Demo
              </span>
            )}

            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                           font-body font-semibold text-[12px]
                           text-[#C084FC]
                           border border-[rgba(124,58,237,0.3)]
                           bg-[rgba(124,58,237,0.08)]"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#A855F7",
                  color: "#F0EEFF",
                  background: "rgba(124,58,237,0.18)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                GitHub
              </motion.a>
            )}
            
          </div>
          
        </div>
      </motion.div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
