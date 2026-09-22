"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "es" | "en";
const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "es",
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("blaise-lang");
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {}
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    try {
      localStorage.setItem("blaise-lang", l);
    } catch {}
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div data-lang={lang}>{children}</div>
    </LangContext.Provider>
  );
}

export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switch">
      <button
        type="button"
        className={`lang-chip${lang === "es" ? " is-on" : ""}`}
        onClick={() => setLang("es")}
      >
        ES
      </button>
      <button
        type="button"
        className={`lang-chip${lang === "en" ? " is-on" : ""}`}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}
