"use client";
import { useState } from "react";

export default function ProjectScreenshot({ gradient, title, image }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: gradient }} // keep dynamic gradient
    >

      {/* Image */}
      {image && !imgError && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={() => setImgError(true)}
        />
      )}

      {/* Placeholder */}
      {(!image || imgError) && (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-extrabold text-center px-4
                              text-[clamp(14px,2.5vw,22px)]
                              text-white/15 tracking-[0.06em]">
              {title}
            </span>
          </div>
        </>
      )}
    </div>
  );
}