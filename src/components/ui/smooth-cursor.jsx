"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "motion/react";

const DESKTOP_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)";

function isTrackablePointer(pointerType) {
  return pointerType !== "touch";
}

// ── Default arrow — styled with portfolio colors ──
const DefaultCursor = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={54}
    viewBox="0 0 50 54"
    fill="none"
    style={{ scale: 0.55, filter: "drop-shadow(0 0 6px rgba(124,58,237,0.7))" }}
  >
    <defs>
      <linearGradient id="arrow-fill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
      <linearGradient id="arrow-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
      <filter id="arrow-glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#filter0_d_91_7928)">
      <path
        d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
        fill="url(#arrow-fill)"
      />
      <path
        d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
        stroke="url(#arrow-stroke)"
        strokeWidth={2.25825}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_91_7928"
        x={0.602397}
        y={0.952444}
        width={49.0584}
        height={52.428}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.25825} />
        <feGaussianBlur stdDeviation={2.25825} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.486 0 0 0 0 0.227 0 0 0 0 0.929 0 0 0 0.4 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_91_7928"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_91_7928"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

// ── Pointer arrow — pink accent, slightly larger ──
const PointerCursor = () => (
  <div style={{ position: "relative" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
      style={{
        scale: 0.62,
        filter: "drop-shadow(0 0 8px rgba(236,72,153,0.8))",
      }}
    >
      <defs>
        <linearGradient id="ptr-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="ptr-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
      <g filter="url(#filter_ptr)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="url(#ptr-fill)"
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="url(#ptr-stroke)"
          strokeWidth={2.25825}
        />
      </g>
      <defs>
        <filter
          id="filter_ptr"
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.929 0 0 0 0 0.286 0 0 0 0 0.6 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_91_7928"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_91_7928"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    {/* Small dot below tip — pointer indicator */}
    <div
      style={{
        position: "absolute",
        top: "2px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #EC4899, #A855F7)",
        boxShadow: "0 0 6px rgba(236,72,153,0.9)",
      }}
    />
  </div>
);

export function SmoothCursor({
  cursor,
  pointerCursor,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}) {
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRot = useRef(0);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  });
  const scale = useSpring(1, { ...springConfig, stiffness: 500, damping: 35 });

  // ── Enable only on desktop pointer ──
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_POINTER_QUERY);
    const update = () => {
      setIsEnabled(mq.matches);
      if (!mq.matches) setIsVisible(false);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // ── Detect pointer vs default ──
  useEffect(() => {
    if (!isEnabled) return;

    const POINTER_SELECTORS = [
      "a",
      "button",
      "[role='button']",
      "label[for]",
      "select",
      "summary",
      "[data-cursor='pointer']",
      ".cursor-pointer",
    ].join(",");

    const onOver = (e) => {
      if (e.target.closest(POINTER_SELECTORS)) {
        setCursorVariant("pointer");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mouseover", onOver);
    return () => window.removeEventListener("mouseover", onOver);
  }, [isEnabled]);

  // ── Mouse tracking ──
  useEffect(() => {
    if (!isEnabled) return;

    let timeout = null;

    const updateVelocity = (pos) => {
      const now = Date.now();
      const dt = now - lastUpdateTime.current;
      if (dt > 0) {
        velocity.current = {
          x: (pos.x - lastMousePos.current.x) / dt,
          y: (pos.y - lastMousePos.current.y) / dt,
        };
      }
      lastUpdateTime.current = now;
      lastMousePos.current = pos;
    };

    const onMove = (e) => {
      if (!isTrackablePointer(e.pointerType)) return;
      setIsVisible(true);

      const pos = { x: e.clientX, y: e.clientY };
      updateVelocity(pos);
      cursorX.set(pos.x);
      cursorY.set(pos.y);

      const speed = Math.sqrt(
        velocity.current.x ** 2 + velocity.current.y ** 2,
      );

      if (speed > 0.1) {
        const angle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let diff = angle - previousAngle.current;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        accumulatedRot.current += diff;
        rotation.set(accumulatedRot.current);
        previousAngle.current = angle;

        scale.set(0.9);
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => scale.set(1), 150);
      }
    };

    let rafId = 0;
    const throttled = (e) => {
      if (!isTrackablePointer(e.pointerType)) return;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        onMove(e);
        rafId = 0;
      });
    };

    document.body.style.cursor = "none";
    window.addEventListener("pointermove", throttled, { passive: true });

    return () => {
      window.removeEventListener("pointermove", throttled);
      document.body.style.cursor = "auto";
      if (rafId) cancelAnimationFrame(rafId);
      if (timeout) clearTimeout(timeout);
    };
  }, [cursorX, cursorY, rotation, scale, isEnabled]);

  if (!isEnabled) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale,
        zIndex: 999999,
        pointerEvents: "none",
        willChange: "transform",
      }}
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        key={cursorVariant}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {cursorVariant === "pointer"
    ? pointerCursor ?? <PointerCursor />   // custom or fallback to styled arrow
    : cursor        ?? <DefaultCursor />   // custom or fallback to styled arrow
  }
      </motion.div>
    </motion.div>
  );
}
