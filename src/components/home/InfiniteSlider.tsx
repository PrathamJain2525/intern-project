// --------------------------------------------------
// components/home/InfiniteSlider.tsx
// --------------------------------------------------
"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

// 📝 Insight AI highlight cards – tweak freely
const items = [
  {
    quote:
      "Ship features faster with pre‑built security control landing pages—fully responsive and WCAG‑compliant.",
    name: "Security Control Landing",
    title: "Instant trust signals",
  },
  {
    quote:
      "Granular role‑based access baked in from day one. Map org charts to permissions with a single JSON file.",
    name: "Role‑Based Access (RBAC)",
    title: "Least‑privilege by default",
  },
  {
    quote:
      "Auto‑generate region‑aware privacy policies that update when regulations change—no more legal fire drills.",
    name: "Privacy Policy Showcase",
    title: "GDPR, CCPA & more",
  },
  {
    quote:
      "Real‑time audit trails with tamper‑proof hashing keep compliance teams—and auditors—happy.",
    name: "Audit Logging",
    title: "Click‑through transparency",
  },
  {
    quote:
      "Drop in our InsightAI SDK to get user fingerprinting and bot detection with two lines of code.",
    name: "Threat Intelligence",
    title: "Built‑in protection",
  },
] as const;

// --------------------------------------------------
// component
// --------------------------------------------------
export default function InfiniteSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [ready, setReady] = useState(false);

  // ---------- config ----------
  const direction: "left" | "right" = "left"; // change to "right" if needed
  const speed: "fast" | "normal" | "slow" = "normal";
  const pauseOnHover = true;

  const SPEED_MAP: Record<typeof speed, `${number}s`> = {
    
    normal: "40s",
    
  } as const;

  // ---------- effect ----------
  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Duplicate children once (creates seamless loop)
    const clones = Array.from(scrollerRef.current.children).map((node) =>
      node.cloneNode(true)
    );
    clones.forEach((clone) => scrollerRef.current!.appendChild(clone));

    // Set CSS custom properties consumed by Tailwind util
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty(
      "--animation-duration",
      SPEED_MAP[speed]
    );

    setReady(true);
  }, [direction, speed]);

  // ---------- render ----------
  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
    >
      <ul
        ref={scrollerRef}
        className={clsx(
          "flex w-max flex-nowrap gap-4 py-4",
          ready && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={`${item.name}-${item.title}`}
            className="relative w-[350px] shrink-0 rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 px-8 py-6 md:w-[450px]"
          >
            <blockquote>
              <span className="text-sm leading-relaxed text-gray-100">
                {item.quote}
              </span>
              <footer className="mt-6 flex flex-col text-sm text-gray-400">
                <span>{item.name}</span>
                <span>{item.title}</span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --------------------------------------------------
// 🔑 Add this Tailwind utility to styles/globals.css once:
// --------------------------------------------------
// @layer utilities {
//   @keyframes scroll {
//     from { transform: translateX(0); }
//     to   { transform: translateX(calc(-50%)); }
//   }
//   .animate-scroll {
//     animation: scroll var(--animation-duration) linear infinite var(--animation-direction);
//   }
// }
