import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Blaise — Consultoría tecnológica y desarrollo a medida";
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
          padding: "0",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div style={{ width: "100%", height: 5, background: "#5fd4b7", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "52px 72px 52px" }}>
          {/* Logo / wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "auto" }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "#446bf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 14, height: 14, borderRadius: 3, background: "#fff", display: "flex" }} />
            </div>
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Blaise
            </span>
          </div>

          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 48 }}>
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
              Consultoría tecnológica · Desarrollo a medida
            </div>
            <div
              style={{
                fontSize: 62,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.04,
                letterSpacing: "-0.028em",
                maxWidth: 900,
                display: "flex",
              }}
            >
              Consultoría tecnológica que termina en software funcionando.
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#b3bdd1",
                lineHeight: 1.5,
                maxWidth: 780,
                display: "flex",
              }}
            >
              Panamá · IA · AWS · Facturación electrónica
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
            <div
              style={{
                display: "flex",
                gap: 24,
                alignItems: "center",
              }}
            >
              {["canalfact", "Dot", "Iris"].map((p) => (
                <span key={p} style={{ fontSize: 15, color: "#5b6a8c", display: "flex" }}>
                  {p}
                </span>
              ))}
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
