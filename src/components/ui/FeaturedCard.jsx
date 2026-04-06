"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TechPill from "./TechPill";
import ProjectScreenshot from "./ProjectScreenshot";
import ProjectModal from "./ProjectModal";

export default function FeaturedCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative w-full overflow-hidden cursor-pointer bg-[#0E0C1A] rounded-[20px] border border-[#2A1F50] min-h-80"
        whileHover={{
          boxShadow: "0 24px 80px rgba(124,58,237,0.25)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-[20px] pointer-events-none p-1 z-0"
          animate={{
            background: hovered
              ? "linear-gradient(135deg, #7C3AED, #EC4899, #3B82F6)"
              : "linear-gradient(135deg, #2A1F50, #2A1F50)",
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full rounded-[19px] bg-[#0E0C1A]" />
        </motion.div>

        {/* Background number */}
        <div
          className="absolute pointer-events-none select-none -top-5 -right-2.5 
          font-extrabold font-display text-[180px] leading-none 
          bg-[linear-gradient(135deg,#7c3aed14,#ec48990a)] bg-clip-text text-transparent z-[1]"
        >
          01
          
        </div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row z-[2] min-h-[320px]">

          {/* LEFT */}
          <div className="flex flex-col justify-between p-7 sm:p-8 lg:w-[52%]">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <motion.span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                           font-mono font-semibold text-[11px] tracking-[0.08em]
                           text-[#EC4899] bg-[rgba(236,72,153,0.12)] border border-[rgba(236,72,153,0.3)]"
                animate={{
                  borderColor: hovered
                    ? "rgba(236,72,153,0.6)"
                    : "rgba(236,72,153,0.3)",
                }}
              >
                <motion.span
                  animate={{ rotate: hovered ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  ✦
                </motion.span>
                FEATURED
              </motion.span>

              {project.category && (
                <span
                  className="px-3 py-1.5 rounded-full font-mono font-semibold text-[11px]
                  text-[#06B6D4] bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.25)]"
                >
                  {project.category}
                </span>
              )}
            </div>

            {/* Title */}
            <div className="mb-4">
              <motion.h3
                className="font-display font-bold mb-3 text-[clamp(22px,3vw,32px)] leading-[1.15] text-[#F0EEFF]"
                animate={{ color: hovered ? "#FFFFFF" : "#F0EEFF" }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>

              <p
                className="font-body text-[14px] leading-[1.8] text-[#A89EC4] overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {project.desc}
              </p>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <TechPill key={t.label} {...t} />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-wrap">

              <motion.button
                onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                className="flex items-center gap-2 px-5 h-[40px] rounded-xl
                           font-body font-semibold text-[13px] text-white
                           bg-gradient-to-r from-[#7C3AED] to-[#A855F7]
                           shadow-[0_0_16px_rgba(124,58,237,0.35)]"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 28px rgba(124,58,237,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* icon */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="#fff" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                View Details
              </motion.button>

              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-5 h-[40px] rounded-xl
                             font-body font-semibold text-[13px]
                             text-[#C084FC]
                             border border-[rgba(124,58,237,0.35)]
                             bg-[rgba(124,58,237,0.08)]"
                  whileHover={{
                    scale: 1.04,
                    borderColor: "#A855F7",
                    color: "#F0EEFF",
                    background: "rgba(124,58,237,0.18)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Live Demo ↗
                </motion.a>
              )}

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 h-[40px] rounded-xl
                             font-body font-semibold text-[13px]
                             text-[#A89EC4]
                             border border-[#2A1F50]"
                  whileHover={{
                    borderColor: "#7C3AED",
                    color: "#F0EEFF",
                    background: "rgba(124,58,237,0.08)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  GitHub
                </motion.a>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="relative flex-1 overflow-hidden min-h-[260px] hidden sm:block"
            style={{
              clipPath: "polygon(32px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <ProjectScreenshot {...project} overlay={false} />

            <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-[linear-gradient(90deg,#0E0C1A,transparent)]" />

            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: hovered
                  ? "rgba(124,58,237,0.08)"
                  : "rgba(0,0,0,0)",
              }}
            />

            <div
              className="absolute top-4 right-4 px-3 py-1.5 rounded-lg
                         font-mono font-semibold text-[11px]
                         bg-[rgba(6,6,18,0.75)]
                         border border-[rgba(124,58,237,0.3)]
                         text-[#A855F7]
                         backdrop-blur-[8px]"
            >
              {project.year || "2024"}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none z-[3]"
          animate={{
            background: hovered
              ? "linear-gradient(90deg, #7C3AED, #EC4899, #3B82F6)"
              : "linear-gradient(90deg, #2A1F50, #2A1F50)",
            opacity: hovered ? 1 : 0.4,
          }}
        />
      </motion.div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}