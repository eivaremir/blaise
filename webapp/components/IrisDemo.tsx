"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Wraps a data panel and cycles its `.ir-row` children into view, one by one, on a loop. */
export function IrisDemo({
  children,
  delay = 0,
  style,
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    function wait(ms: number, fn: () => void) {
      const t = setTimeout(fn, ms);
      timers.push(t);
      return t;
    }

    panel.classList.add("ir-live");
    const startTimer = wait(400 + delay, () => runDemo(panel));

    function runDemo(panel: HTMLDivElement) {
      const cycle = 14000;
      const rows = Array.prototype.slice.call(panel.querySelectorAll(".ir-row")) as HTMLElement[];
      if (!rows.length) return;
      const gap = Math.max(520, (cycle * 0.5) / rows.length);
      let i = 0;
      const clear = () => {
        rows.forEach((r) => r.classList.remove("ir-shown"));
        wait(900, () => {
          i = 0;
          next();
        });
      };
      const next = () => {
        if (i >= rows.length) {
          wait(Math.max(2000, cycle * 0.25), clear);
          return;
        }
        rows[i].classList.add("ir-shown");
        i += 1;
        wait(gap, next);
      };
      next();
    }

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(startTimer);
    };
  }, [delay]);

  return (
    <div ref={ref} data-demo="1" style={style}>
      {children}
    </div>
  );
}
