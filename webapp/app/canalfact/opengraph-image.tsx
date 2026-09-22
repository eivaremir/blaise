import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

const logoPng = readFileSync(join(process.cwd(), "public/assets/blaise-logo-og.png"));
const logoSrc = `data:image/png;base64,${logoPng.toString("base64")}`;

export const dynamic = "force-static";
export const alt = "canalfact — Facturación electrónica para Panamá";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#16203a",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div style={{ width: "100%", height: 5, background: "#5fd4b7", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "52px 72px 52px" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="Blaise" style={{ height: 18, width: "auto" }} />
            <span style={{ fontSize: 16, color: "#2c3757", display: "flex" }}>›</span>
            <span style={{ fontSize: 16, color: "#5fd4b7", fontWeight: 600, display: "flex" }}>canalfact</span>
          </div>

          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 40 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#5fd4b7",
                display: "flex",
              }}
            >
              Facturación electrónica · Panamá · DGI
            </div>
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.04,
                letterSpacing: "-0.028em",
                maxWidth: 860,
                display: "flex",
              }}
            >
              canalfact
            </div>
            <div
              style={{
                fontSize: 26,
                color: "#b3bdd1",
                lineHeight: 1.45,
                maxWidth: 780,
                display: "flex",
              }}
            >
              El puente entre tu negocio y los proveedores autorizados que reportan a la DGI.
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 40, marginTop: "auto", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 40 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", display: "flex" }}>40+</span>
                <span style={{ fontSize: 14, color: "#5b6a8c", display: "flex" }}>empresas activas</span>
              </div>
            </div>
            <span style={{ fontSize: 17, color: "#5fd4b7", fontWeight: 600, display: "flex" }}>
              blaisetechnology.com
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
