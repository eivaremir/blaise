import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Dot — Agentes de servicio con IA";
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
        <div style={{ width: "100%", height: 5, background: "#a9f413", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "52px 72px 52px" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16, color: "#5b6a8c", display: "flex" }}>Blaise</span>
            <span style={{ fontSize: 16, color: "#2c3757", display: "flex" }}>›</span>
            <span style={{ fontSize: 16, color: "#a9f413", fontWeight: 600, display: "flex" }}>Dot</span>
          </div>

          {/* Chat bubble mockup */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 28 }}>
            <div
              style={{
                alignSelf: "flex-end",
                background: "#446bf4",
                borderRadius: "14px 14px 4px 14px",
                padding: "11px 18px",
                fontSize: 16,
                color: "#fff",
                maxWidth: 340,
                display: "flex",
              }}
            >
              ¿Cuándo llega mi pedido 48219?
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                background: "#26314f",
                border: "1px solid #2c3757",
                borderRadius: "14px 14px 14px 4px",
                padding: "11px 18px",
                fontSize: 16,
                color: "#e4eaf7",
                maxWidth: 420,
                display: "flex",
              }}
            >
              Tu pedido llega mañana. Guía: 77-4412-PA.
            </div>
          </div>

          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 28 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#a9f413",
                display: "flex",
              }}
            >
              Agente IA · Servicio al cliente · 24/7
            </div>
            <div
              style={{
                fontSize: 58,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.04,
                letterSpacing: "-0.028em",
                display: "flex",
              }}
            >
              Dot
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#b3bdd1",
                lineHeight: 1.45,
                maxWidth: 720,
                display: "flex",
              }}
            >
              Responde con tus datos de operación. Pasa a una persona cuando hace falta.
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
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
