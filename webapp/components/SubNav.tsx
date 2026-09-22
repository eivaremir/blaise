import Link from "next/link";
import type { ReactNode } from "react";
import { LangSwitch } from "./LangProvider";

type Active = "home" | "services" | "canalfact" | "dot" | "iris";

const LINKS: { href: string; key: Active; label: ReactNode }[] = [
  { href: "/", key: "home", label: "Inicio" },
  { href: "/services", key: "services", label: "Servicios" },
  { href: "/canalfact", key: "canalfact", label: "canalfact" },
  { href: "/dot", key: "dot", label: "Dot" },
  { href: "/iris", key: "iris", label: "Iris" },
];

export function SubNav({
  active,
  cta,
  withLang = false,
}: {
  active: Active;
  cta: ReactNode;
  withLang?: boolean;
}) {
  return (
    <nav className="subnav-bar" aria-label="Productos Blaise">
      <div className="wrap subnav-row">
        <div className="subnav-left">
          <Link href="/" className="subnav-logo">
            <img data-logo-light src="/assets/blaise-logo.svg" alt="Blaise" />
            <img data-logo-dark src="/assets/blaise-logo-white.svg" alt="Blaise" />
          </Link>
          <span className="subnav-sep" />
          <div className="subnav-links">
            {LINKS.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className={`subnav-link${active === l.key ? " is-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="subnav-right">
          {cta}
          {withLang && <LangSwitch />}
        </div>
      </div>
    </nav>
  );
}
