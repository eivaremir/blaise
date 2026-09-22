import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

const logoPng = readFileSync(join(process.cwd(), "public/assets/blaise-logo-og.png"));
const logoSrc = `data:image/png;base64,${logoPng.toString("base64")}`;

export const dynamic = "force-static";
export const alt = "Iris — Inteligencia comercial y logística";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const rows = [
  { sku: "TV 55″ U6 Series · Retailer A", price: "B/.499", change: "−18%", color: "#5fd4b7" },
  { sku: "Aire 12k BTU Inverter · Retailer B", price: "B/.415", change: "−22%", color: "#5fd4b7" },
  { sku: "Monitor 27″ IPS 144Hz · Retailer C", price: "B/.289", change: "−9%", color: "#5fd4b7" },
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
          fontFamily: "ui-monospace, 'Menlo', monospace",
        }}
      >
        {/* Top accent bar */}
        <div style={{ width: "100%", height: 5, background: "#558cf0", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "52px 72px 52px" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "system-ui, sans-serif" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="Blaise" style={{ height: 18, width: "auto" }} />
            <span style={{ fontSize: 16, color: "#2c3757", display: "flex" }}>›</span>
            <span style={{ fontSize: 16, color: "#558cf0", fontWeight: 600, display: "flex" }}>Iris</span>
          </div>

          {/* Data table mockup */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 24,
              border: "1px solid #2c3757",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "9px 16px",
                borderBottom: "1px solid #2c3757",
                background: "#1b2540",
              }}
            >
              <span style={{ flex: 1, fontSize: 11, letterSpacing: "0.06em", color: "#5b6a8c", display: "flex" }}>SKU / TIENDA</span>
              <span style={{ width: 80, fontSize: 11, letterSpacing: "0.06em", color: "#5b6a8c", display: "flex", justifyContent: "flex-end" }}>PRECIO</span>
              <span style={{ width: 70, fontSize: 11, letterSpacing: "0.06em", color: "#5b6a8c", display: "flex", justifyContent: "flex-end" }}>CAMBIO</span>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.sku}
                style={{
                  display: "flex",
                  padding: "10px 16px",
                  borderTop: i > 0 ? "1px solid #2c3757" : "none",
                  alignItems: "center",
                }}
              >
                <span style={{ flex: 1, fontSize: 13, color: "#e4eaf7", display: "flex" }}>{r.sku}</span>
                <span style={{ width: 80, fontSize: 13, color: "#e4eaf7", display: "flex", justifyContent: "flex-end" }}>{r.price}</span>
                <span style={{ width: 70, fontSize: 13, color: r.color, display: "flex", justifyContent: "flex-end" }}>{r.change}</span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28, fontFamily: "system-ui, sans-serif" }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#558cf0",
                display: "flex",
              }}
            >
              Precios · Disponibilidad · LATAM
            </div>
            <div
              style={{
                fontSize: 54,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.04,
                letterSpacing: "-0.028em",
                display: "flex",
              }}
            >
              Iris
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#b3bdd1",
                lineHeight: 1.45,
                maxWidth: 680,
                display: "flex",
              }}
            >
              Monitoreo continuo de precios y disponibilidad. 3 años de histórico, dashboard y API.
            </div>
          </div>

          {/* Bottom */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
            <span style={{ fontSize: 17, color: "#5fd4b7", fontWeight: 600, fontFamily: "system-ui, sans-serif", display: "flex" }}>
              blaisetechnology.com
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
