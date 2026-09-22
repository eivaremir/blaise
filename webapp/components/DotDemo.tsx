"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Wraps a chat-demo panel and cycles its `.dot-msg` children into view, one by one, on a loop. */
export function DotDemo({
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

    panel.classList.add("dot-live");
    const startTimer = wait(400 + delay, () => runDemo(panel));

    function runDemo(panel: HTMLDivElement) {
      const cycle = 15000;
      const msgs = Array.prototype.slice.call(panel.querySelectorAll(".dot-msg")) as HTMLElement[];
      const typing = panel.querySelector(".dot-typing") as HTMLElement | null;
      if (!msgs.length) return;
      const gap = Math.max(900, (cycle * 0.62) / msgs.length);
      let i = 0;
      const clear = () => {
        msgs.forEach((m) => m.classList.remove("dot-shown"));
        if (typing) typing.classList.remove("dot-shown");
        wait(1100, () => {
          i = 0;
          next();
        });
      };
      const next = () => {
        if (i >= msgs.length) {
          wait(Math.max(1800, cycle * 0.2), clear);
          return;
        }
        const msg = msgs[i];
        const isAgent = msg.getAttribute("data-agent") === "1";
        const show = () => {
          if (typing) typing.classList.remove("dot-shown");
          msg.classList.add("dot-shown");
          i += 1;
          wait(gap, next);
        };
        if (isAgent && typing) {
          typing.classList.add("dot-shown");
          wait(780, show);
        } else {
          show();
        }
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
