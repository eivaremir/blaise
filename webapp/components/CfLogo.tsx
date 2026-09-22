"use client";

const CF_LOGO_URL = "https://blaise-public-files.s3.us-east-1.amazonaws.com/canalfact/assets/logo_canal_fact_dark_bg.svg";

export function CfLogo({ height, style }: { height: number; style?: React.CSSProperties }) {
  return (
    <img
      src={CF_LOGO_URL}
      alt="canalfact"
      style={{ height, ...style }}
      onError={(e) => {
        const span = document.createElement("span");
        span.textContent = "canalfact";
        span.style.cssText = `font-family:var(--font-display);font-weight:800;font-size:${height}px;letter-spacing:-0.02em;color:var(--text-strong)`;
        e.currentTarget.replaceWith(span);
      }}
    />
  );
}
