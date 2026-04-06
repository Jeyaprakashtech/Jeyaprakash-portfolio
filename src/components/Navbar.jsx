"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../assets/Content";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollY = window.scrollY;
        setScrolled(scrollY > 20);

        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

        const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-10
        h-[72px] px-1 sm:px-8 lg:px-16 transition-all duration-300
        ${scrolled ? "bg-[rgba(6,6,18,0.85)] backdrop-blur-lg" : "bg-transparent"}`}
      >
        {/* Progress */}
        <div
          className="absolute bottom-0 left-0 h-[2px]
                     bg-gradient-to-r from-[#7C3AED] to-[#EC4899]
                     transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span
              className="font-bold text-xl leading-none
                         bg-gradient-to-br from-[#EC4899] to-[#A855F7]
                         bg-clip-text text-transparent"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              JP
            </span>

            <span
              className="hidden sm:block text-xl font-semibold tracking-wide text-[#F0EEFF]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Portfolio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`relative flex items-center group px-4 py-1.5 text-sm font-medium rounded
                  ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
                >
                  {/* Brackets */}
                  <span className={`absolute left-1 top-1/2 -translate-y-1/2 text-xs font-mono transition
                    ${isActive
                      ? "opacity-100 text-purple-500"
                      : "opacity-0 group-hover:opacity-100 text-cyan-400"}`}>
                    [
                  </span>

                  <span className="mx-1">{label}</span>

                  <span className={`absolute right-1 top-1/2 -translate-y-1/2 text-xs font-mono transition
                    ${isActive
                      ? "opacity-100 text-purple-500"
                      : "opacity-0 group-hover:opacity-100 text-cyan-400"}`}>
                    ]
                  </span>

                  {/* Hover wash */}
                  <span
                    className={`absolute bottom-0 left-0 right-0
                    bg-gradient-to-b from-transparent to-purple-900/20
                    transition-all duration-300
                    ${isActive ? "h-full" : "h-0 group-hover:h-full"}`}
                  />

                  {/* Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px]
                    bg-gradient-to-r from-purple-600 to-pink-500
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <motion.a
              href="#contact"
              className="inline-flex items-center px-5 h-9
                         text-sm text-white font-medium
                         bg-gradient-to-r from-[#7C3AED] to-[#A855F7]
                         rounded-md shadow-[0_0_24px_rgba(124,58,237,0.4)]"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 24px rgba(124,58,237,0.6)",
              }}
            >
              Contact
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`w-6 h-[2px] bg-[#C084FC] transition ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`w-6 h-[2px] bg-[#C084FC] transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-[#C084FC] transition ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9998] flex flex-col items-center justify-center
        md:hidden transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
        style={{
          background: "rgba(6,6,18,0.97)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-bold text-[#F0EEFF]
                         hover:bg-gradient-to-br hover:from-[#EC4899] hover:to-[#A855F7]
                         hover:bg-clip-text hover:text-transparent transition"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}