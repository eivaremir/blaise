"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  mode = "single",
  style,
  className,
  children,
}: {
  mode?: "single" | "stagger";
  style?: React.CSSProperties;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("cf-in");
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add("cf-in");
      return;
    }
    el.classList.add("cf-armed");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cf-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal={mode} className={className} style={style}>
      {children}
    </div>
  );
}
