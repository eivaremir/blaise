import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

const logoPng = readFileSync(join(process.cwd(), "public/assets/blaise-logo-og.png"));
const logoSrc = `data:image/png;base64,${logoPng.toString("base64")}`;

export const dynamic = "force-static";
export const alt = "Servicios de tecnología — Blaise";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const services = [
  { label: "Consultoría y desarrollo a medida" },
  { label: "Soluciones con IA" },
  { label: "Nube AWS" },
  { label: "Facturación electrónica en Panamá" },
];

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
        <div style={{ width: "100%", height: 5, background: "#446bf4", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "52px 72px 52px" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="Blaise" style={{ height: 18, width: "auto" }} />
            <span style={{ fontSize: 16, color: "#2c3757", display: "flex" }}>›</span>
            <span style={{ fontSize: 16, color: "#7d92f7", fontWeight: 600, display: "flex" }}>Servicios</span>
          </div>

          <div style={{ display: "flex", gap: 80, marginTop: 36, alignItems: "flex-start" }}>
            {/* Left: heading */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#7d92f7",
                  display: "flex",
                }}
              >
                Software a medida · Panamá
              </div>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.06,
                  letterSpacing: "-0.028em",
                  display: "flex",
                }}
              >
                No entregamos recomendaciones.
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: "#b3bdd1",
                  lineHeight: 1.45,
                  display: "flex",
                }}
              >
                Entregamos software funcionando.
              </div>
            </div>

            {/* Right: service list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0, width: 360 }}>
              {services.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "18px 0",
                    borderTop: i === 0 ? "1px solid #2c3757" : "1px solid #2c3757",
                    borderBottom: i === services.length - 1 ? "1px solid #2c3757" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#446bf4",
                      flexShrink: 0,
                      display: "flex",
                    }}
                  />
                  <span style={{ fontSize: 15, color: "#e4eaf7", lineHeight: 1.4, display: "flex" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
            <span style={{ fontSize: 15, color: "#5b6a8c", display: "flex" }}>
              Consulta 1:1 gratuita · 30 minutos · sin compromiso
            </span>
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
