"use client";
import { useState, useEffect } from "react";
import { TYPING_ROLES } from "../../assets/Content";


export default function TypingText() {
  const [typedText, setTypedText]     = useState("");
  const [roleIndex, setRoleIndex]     = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [deleting, setDeleting]       = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing logic
  useEffect(() => {
    const current = TYPING_ROLES[roleIndex];
    let t;

    if (!deleting && charIndex <= current.length) {
      t = setTimeout(() => {
        setTypedText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > current.length) {
      t = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && charIndex >= 0) {
      t = setTimeout(() => {
        setTypedText(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % TYPING_ROLES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1 mb-6 h-11">
      {/* Role text */}
      <span
        className="font-mono font-semibold bg-gradient-to-br from-purple-600 to-pink-500
                       bg-clip-text text-transparent md:text-4xl text-2xl"
        
      >
        {typedText}
      </span>
      
      {/* Blinking cursor */}
      <span
        className="inline-block w-1 rounded-full bg-gradient-to-br from-[#EC4899] to-[#A855F7]
                        transition-opacity duration-75"
        style={{
          height: "clamp(18px, 2.2vw, 28px)",
          opacity: cursorVisible ? 1 : 0,
        }}
      />
    </div>
  );
}
