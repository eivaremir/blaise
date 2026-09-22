"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Es, En } from "./I18n";

type Product = "cf" | "dot" | "iris";
const TabsContext = createContext<{ pick: Product; setPick: (p: Product) => void }>({
  pick: "cf",
  setPick: () => {},
});

const TITLES: Record<Product, ReactNode> = {
  cf: (
    <>
      <Es inline>canalfact · factura emitida y autorizada</Es>
      <En inline>canalfact · invoice issued and authorised</En>
    </>
  ),
  dot: (
    <>
      <Es inline>Dot · conversación resuelta por el agente</Es>
      <En inline>Dot · conversation resolved by the agent</En>
    </>
  ),
  iris: (
    <>
      <Es inline>Iris · monitoreo de precios de hoy</Es>
      <En inline>Iris · today&rsquo;s price monitoring</En>
    </>
  ),
};

const METAS: Record<Product, string> = {
  cf: "20/02/2026",
  dot: "respondido en 4 s",
  iris: "4 retailers",
};

export function ProductTabsProvider({ children }: { children: ReactNode }) {
  const [pick, setPick] = useState<Product>("cf");
  return <TabsContext.Provider value={{ pick, setPick }}>{children}</TabsContext.Provider>;
}

export function TabChips() {
  const { pick, setPick } = useContext(TabsContext);
  const items: { key: Product; label: string }[] = [
    { key: "cf", label: "canalfact" },
    { key: "dot", label: "Dot" },
    { key: "iris", label: "Iris" },
  ];
  return (
    <>
      {items.map((it) => (
        <button
          key={it.key}
          type="button"
          className={`tab-chip${pick === it.key ? " is-on" : ""}`}
          onClick={() => setPick(it.key)}
        >
          {it.label}
        </button>
      ))}
    </>
  );
}

export function TabTitle() {
  const { pick } = useContext(TabsContext);
  return (
    <p
      style={{
        margin: 0,
        marginRight: "auto",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 14.5,
        color: "var(--text-on-inverse)",
      }}
    >
      {TITLES[pick]}
    </p>
  );
}

export function TabMeta() {
  const { pick } = useContext(TabsContext);
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)" }}>
      {METAS[pick]}
    </span>
  );
}

export function TabPanel({ product, className, children }: { product: Product; className?: string; children: ReactNode }) {
  const { pick } = useContext(TabsContext);
  const cls = ["tab-panel", pick === product ? "is-on" : "", className || ""].filter(Boolean).join(" ");
  return <div className={cls}>{children}</div>;
}
