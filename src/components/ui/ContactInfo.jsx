"use client";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../../assets/Content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

export default function ContactInfo({ onCopyEmail, onCopyPhone }) {
  return (
    <div className="flex flex-col gap-8 flex-[0_0_38%]">

      {/* Availability badge */}
      <motion.div
        className="flex items-center gap-3 px-5 py-3 rounded-xl self-start
                   bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.2)]"
        {...fadeUp(0.1)}
      >
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#22C55E]" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
        </span>
        <span className="font-mono font-semibold text-[13px] text-[#22C55E]">
          Currently Available for Projects
        </span>
      </motion.div>

      {/* Email — click to copy */}
      <motion.div {...fadeUp(0.18)}>
        <motion.div
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer
                     bg-[#0E0C1A] border border-[#2A1F50]"
          onClick={onCopyEmail}
          whileHover={{
            borderColor: "#7C3AED",
            boxShadow: "0 4px 20px rgba(124,58,237,0.12)",
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0
                       bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.2)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="#A855F7"
                strokeWidth="1.8"
              />
              <path
                d="M22 6l-10 7L2 6"
                stroke="#A855F7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <span className="font-body text-[12px] text-[#5E5478]">
              Email — click to copy
            </span>
            <span className="font-mono font-semibold truncate text-[14px] text-[#C084FC]">
              {CONTACT_INFO.email}
            </span>
          </div>

          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="flex-shrink-0 text-[#5E5478]"
          >
            <path
              d="M8 4v12h12V4H8zM4 8H2v14h14v-2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mobile Number — click to copy */}
      <motion.div {...fadeUp(0.18)}>
        <motion.div
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer
                     bg-[#0E0C1A] border border-[#2A1F50]"
          onClick={onCopyPhone}
          whileHover={{
            borderColor: "#7C3AED",
            boxShadow: "0 4px 20px rgba(124,58,237,0.12)",
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0
                       bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.2)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="#A855F7"
                strokeWidth="1.8"
              />
              <path
                d="M22 6l-10 7L2 6"
                stroke="#A855F7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <span className="font-body text-[12px] text-[#5E5478]">
              Mobile Number — click to copy
            </span>
            <span className="font-mono font-semibold truncate text-[14px] text-[#C084FC]">
              {CONTACT_INFO.phone}
            </span>
          </div>

          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="flex-shrink-0 text-[#5E5478]"
          >
            <path
              d="M8 4v12h12V4H8zM4 8H2v14h14v-2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Social links */}
      <motion.div className="flex flex-col gap-3" {...fadeUp(0.26)}>
        <span className="font-body font-medium text-[13px] text-[#5E5478] uppercase tracking-[0.1em]">
          Find me on
        </span>
        <div className="flex flex-wrap gap-3">
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
      </motion.div>

      {/* Response card */}
      <motion.div
        className="p-5 rounded-xl bg-[#0E0C1A] border border-[#2A1F50]"
        {...fadeUp(0.34)}
      >
        <div className="flex flex-col gap-3">
          {[
            { label: "Response time", value: "Within 24 hours" },
            { label: "Availability", value: "Mon – Sat" },
            { label: "Timezone", value: "IST (UTC+5:30)" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="font-body text-[13px] text-[#5E5478]">
                {label}
              </span>
              <span className="font-mono font-semibold text-[12px] text-[#A89EC4]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}