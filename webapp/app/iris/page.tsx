import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { SubNav } from "@/components/SubNav";
import { Reveal } from "@/components/Reveal";
import { IrisDemo } from "@/components/IrisDemo";

export const metadata: Metadata = {
  title: "Iris — Inteligencia comercial y logística",
  description:
    "Iris monitorea precios, promociones, disponibilidad y embarques en múltiples retailers de América Latina y el Caribe, con histórico, dashboard y API.",
  openGraph: {
    title: "Iris — Inteligencia comercial y logística",
    description:
      "Iris monitorea precios, promociones, disponibilidad y embarques en múltiples retailers de América Latina y el Caribe, con histórico, dashboard y API.",
    url: "https://blaisetechnology.com/iris/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iris — Inteligencia comercial y logística",
    description:
      "Monitoreo de precios, promociones y disponibilidad en retailers de LATAM. Histórico de 3 años, dashboard y API.",
  },
  alternates: {
    canonical: "https://blaisetechnology.com/iris/",
  },
};

const featureCards = [
  { icon: "line-chart", title: "Histórico, no una foto", body: "Precios, ofertas, descuentos, disponibilidad y posición de exhibición guardados en el tiempo, por marca, categoría y SKU." },
  { icon: "store", title: "Exploración por tienda", body: "Captura temporal por retailer con métricas de exposición, inventario y descuentos, tienda por tienda." },
  { icon: "git-compare", title: "Tu marca frente a la competencia", body: "Vistas de comparación por marca, precio, SKU, categoría y fecha, configuradas para lo que tú necesitas seguir." },
  { icon: "sliders-horizontal", title: "Datos que tú puedes corregir", body: "Corrección manual de SKUs, agrupación de productos, especificaciones y ocultamiento de lo que no aplica." },
  { icon: "key", title: "API autenticada por clave", body: "Cada organización consulta únicamente las tiendas autorizadas. Lleva los datos a tu BI o tu propio sistema." },
  { icon: "bell", title: "Alertas y exportaciones", body: "Avisos de quiebres de inventario y cambios promocionales, con exportación a Excel cuando tu equipo lo pida." },
];

const flowSteps = [
  { n: "01", title: "Captura", body: "Recorremos los retailers y transportistas autorizados de tu organización en ciclos programados." },
  { n: "02", title: "Normalización", body: "Un mismo producto en cuatro tiendas se convierte en un solo SKU comparable, con marca y categoría." },
  { n: "03", title: "Histórico", body: "Cada captura queda guardada con su fecha, así puedes ver la tendencia y no solo el precio de hoy." },
  { n: "04", title: "Dashboard o API", body: "Tu equipo lo consulta en la plataforma; tus sistemas lo consumen por API con clave." },
];

const audiences = [
  { icon: "line-chart", text: "Pricing y revenue" },
  { icon: "store", text: "Trade marketing" },
  { icon: "shopping-cart", text: "E-commerce y category" },
  { icon: "factory", text: "Fabricantes regionales" },
  { icon: "ship", text: "Supply chain" },
  { icon: "bar-chart-3", text: "Analistas de mercado" },
];

export default function IrisPage() {
  return (
    <>
      <div className="subnav">
        <SubNav active="iris" cta={<a href="mailto:contact@blaisetechnology.com?subject=Consulta%201:1%20gratuita" className="subnav-cta">Consulta 1:1 gratuita</a>} />
        <header className="pagehead">
          <div className="wrap pagehead-row">
            <div className="pagehead-brand">
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Iris</span>
              <span className="byline">
                un producto de
                <img data-logo-light src="/assets/blaise-logo.svg" alt="Blaise" style={{ height: 18, width: "auto", display: "inline-block" }} />
                <img data-logo-dark src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 18, width: "auto" }} />
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <a href="#modulos" className="textlink">Módulos</a>
              <a href="#cobertura" className="textlink">Cobertura</a>
              <a href="#flujo" className="textlink">Flujo de datos</a>
              <a href="#agendar" className="btn btn-primary btn-sm">Agendar llamada</a>
            </div>
          </div>
        </header>
      </div>

      <section style={{ position: "relative", background: "var(--surface-inverse)", overflow: "hidden" }}>
        <span style={{ position: "absolute", insetInline: 0, top: 0, height: 4, background: "var(--brand-gradient)" }} />
        <div className="wrap section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
          <div>
            <p className="eyebrow eyebrow-teal">Iris · Inteligencia comercial y logística</p>
            <h1 className="pretty" style={{ margin: "0 0 20px", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.028em", color: "var(--text-on-inverse)" }}>
              Visibilidad competitiva para cada decisión de pricing
            </h1>
            <p className="pretty" style={{ margin: "0 0 32px", maxWidth: 620, fontSize: "clamp(16px, 1.5vw, 18px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
              Iris monitorea precios, promociones, disponibilidad y exposición digital de tus productos en múltiples
              retailers, y los entrega normalizados e históricos por dashboard o API. En la misma plataforma sigues la
              disponibilidad web de tus productos y tus embarques.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a href="#agendar" className="btn btn-gradient btn-lg">Agendar llamada</a>
              <a href="#modulos" className="btn btn-inverse btn-lg">Ver los módulos</a>
            </div>
            <p style={{ margin: "20px 0 0", fontSize: 14, color: "var(--text-on-inverse-muted)" }}>
              Plataforma B2B multiempresa · acceso segregado por organización
            </p>
          </div>

          <div style={{ background: "var(--surface-inverse-raised)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "13px 18px", borderBottom: "1px solid var(--line-inverse)" }}>
              <p style={{ margin: 0, marginRight: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--text-on-inverse)" }}>Monitoreo de precios · hoy</p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--brand-teal)" }}>4 retailers</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) 74px 66px 58px", gap: 8, padding: "10px 18px", borderBottom: "1px solid var(--line-inverse)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)" }}>SKU / TIENDA</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)", textAlign: "right" }}>PRECIO</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)", textAlign: "right" }}>DESC.</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)", textAlign: "right" }}>DISP.</span>
            </div>
            <IrisDemo style={{ display: "flex", flexDirection: "column", padding: "6px 0", minHeight: 268 }}>
              {[
                { name: "TV 55\" U6 Series", store: "Retailer A", price: "B/.499", desc: "−18%", descColor: "var(--brand-teal)", disp: "Sí", dispColor: "var(--brand-teal)" },
                { name: "TV 55\" U6 Series", store: "Retailer B", price: "B/.529", desc: "−9%", descColor: "var(--text-on-inverse-muted)", disp: "Sí", dispColor: "var(--brand-teal)" },
                { name: "Lavadora 18kg", store: "Retailer C", price: "B/.689", desc: "—", descColor: "var(--text-on-inverse-muted)", disp: "No", dispColor: "var(--status-error)" },
                { name: "Aire 12k BTU Inverter", store: "Retailer A", price: "B/.415", desc: "−22%", descColor: "var(--brand-teal)", disp: "Sí", dispColor: "var(--brand-teal)" },
              ].map((row, i) => (
                <div key={i} className="ir-row" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) 74px 66px 58px", gap: 8, alignItems: "center", padding: "11px 18px", borderTop: i > 0 ? "1px solid var(--line-inverse)" : undefined }}>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 13.5, color: "var(--text-on-inverse)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.name}</p>
                    <p style={{ margin: 0, fontSize: 11.5, color: "var(--text-on-inverse-muted)" }}>{row.store}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-on-inverse)", textAlign: "right" }}>{row.price}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: row.descColor, textAlign: "right" }}>{row.desc}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: row.dispColor, textAlign: "right" }}>{row.disp}</span>
                </div>
              ))}
              <div className="ir-row" style={{ display: "flex", alignItems: "center", gap: 8, padding: "13px 18px", borderTop: "1px solid var(--line-inverse)" }}>
                <Icon name="bell" size={15} color="var(--brand-teal)" />
                <span style={{ fontSize: 12.5, color: "var(--brand-teal)" }}>Alerta: quiebre de inventario en Retailer C</span>
              </div>
            </IrisDemo>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <Reveal mode="single">
          <p className="eyebrow">Qué es Iris</p>
          <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
            De la captura automática al insight
          </h2>
          <p className="pretty" style={{ margin: "0 0 40px", maxWidth: 760, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
            Los datos de retailers y transportistas viven dispersos, cambian a diario y nadie los guarda. Iris los
            recopila, los normaliza y los convierte en una fuente histórica y accionable, con acceso segregado por
            cliente, dashboards y API.
          </p>
        </Reveal>

        <Reveal mode="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {featureCards.map((f) => (
            <div key={f.icon} className="card card-interactive" style={{ padding: 28 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--surface-accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={f.icon} size={22} color="var(--sky-400)" />
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17.5, color: "var(--text-strong)" }}>{f.title}</p>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)" }}>{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="modulos" style={{ background: "var(--surface-panel)", borderTop: "1px solid var(--line-default)", borderBottom: "1px solid var(--line-default)" }}>
        <div className="wrap section">
          <Reveal mode="single">
            <p className="eyebrow">Módulos</p>
            <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
              Inteligencia comercial y operación en una sola vista
            </h2>
            <p className="pretty" style={{ margin: "0 0 56px", maxWidth: 760, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
              Tres módulos que comparten la misma base de datos y el mismo control de acceso por organización.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px,6vw,72px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(28px,4vw,48px)", alignItems: "center" }}>
              <div>
                <p style={{ margin: "0 0 12px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--sky-400)" }}>Módulo 01 · Inteligencia de precios</p>
                <h3 className="pretty" style={{ margin: "0 0 14px", fontWeight: 700, fontSize: "clamp(21px, 2.2vw, 26px)", lineHeight: 1.22, letterSpacing: "-0.02em" }}>Precio, promoción, stock y exposición</h3>
                <p className="pretty" style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.62, color: "var(--text-muted)" }}>
                  Detecta quiebres de inventario, cambios promocionales y oportunidades de mercado antes que tu
                  competencia, con el histórico para sustentar la decisión.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Serie histórica por SKU, tienda y fecha", "Posición de exhibición y participación en vitrina", "Alertas configurables por marca o categoría"].map((chk) => (
                    <div key={chk} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <Icon name="check" size={18} color="var(--sky-400)" />
                      <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-muted)" }}>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderBottom: "1px solid var(--line-default)", background: "var(--surface-sunken)" }}>
                  <p style={{ margin: 0, marginRight: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)" }}>Comparación de marcas · categoría TV</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>7 días</span>
                </div>
                <IrisDemo style={{ display: "flex", flexDirection: "column", gap: 14, padding: "18px 16px", minHeight: 290, background: "var(--surface-page)" }}>
                  {[
                    { label: "Tu marca", meta: "B/.499 · 38% exposición", pct: 38, color: "var(--action-primary)" },
                    { label: "Competidor A", meta: "B/.529 · 31% exposición", pct: 31, color: "var(--sky-400)" },
                    { label: "Competidor B", meta: "B/.474 · 19% exposición", pct: 19, color: "var(--brand-teal)" },
                    { label: "Competidor C", meta: "B/.559 · 12% exposición", pct: 12, color: "var(--line-strong)" },
                  ].map((row) => (
                    <div key={row.label} className="ir-row">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                        <span style={{ fontSize: 14, color: "var(--text-strong)" }}>{row.label}</span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>{row.meta}</span>
                      </div>
                      <div style={{ height: 8, borderRadius: 999, background: "var(--surface-sunken)", overflow: "hidden" }}>
                        <span style={{ display: "block", width: `${row.pct}%`, height: "100%", background: row.color }} />
                      </div>
                    </div>
                  ))}
                  <div className="ir-row" style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 4 }}>
                    <Icon name="trending-down" size={15} color="var(--status-success)" />
                    <span style={{ fontSize: 12.5, color: "var(--status-success)" }}>Competidor B bajó 6% su precio promedio esta semana</span>
                  </div>
                </IrisDemo>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(28px,4vw,48px)", alignItems: "center" }}>
              <div style={{ background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderBottom: "1px solid var(--line-default)", background: "var(--surface-sunken)" }}>
                  <p style={{ margin: 0, marginRight: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)" }}>Embarque · BL MSCU7741902</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>ETA 24/09</span>
                </div>
                <IrisDemo style={{ display: "flex", flexDirection: "column", padding: "14px 16px", minHeight: 290, background: "var(--surface-page)" }}>
                  {[
                    { title: "Salida de puerto · Ningbo", meta: "02/09 · buque MSC Aurora, viaje 214W", dot: "var(--status-success)", strong: true },
                    { title: "Transbordo · Singapur", meta: "09/09 · 2 contenedores, 40HC", dot: "var(--status-success)", strong: true },
                    { title: "ETA actualizada · Balboa", meta: "24/09 · +2 días vs. plan original", dot: "var(--status-warning)", strong: true },
                    { title: "Descarga y liberación", meta: "pendiente", dot: "var(--line-strong)", strong: false },
                  ].map((row, i) => (
                    <div key={row.title} className="ir-row" style={{ display: "grid", gridTemplateColumns: "22px minmax(0, 1fr)", gap: 12, padding: "10px 0", borderTop: i > 0 ? "1px solid var(--line-subtle)" : undefined }}>
                      <span style={{ width: 10, height: 10, margin: "5px 6px", borderRadius: 999, background: row.dot }} />
                      <div>
                        <p style={{ margin: 0, fontSize: 14, color: row.strong ? "var(--text-strong)" : "var(--text-muted)" }}>{row.title}</p>
                        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 12, color: row.strong ? "var(--text-muted)" : "var(--text-faint)" }}>{row.meta}</p>
                      </div>
                    </div>
                  ))}
                  <div className="ir-row" style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 0 0" }}>
                    <Icon name="bell" size={15} color="var(--status-warning)" />
                    <span style={{ fontSize: 12.5, color: "var(--status-warning)" }}>Alerta enviada a operaciones · exportable a Excel</span>
                  </div>
                </IrisDemo>
              </div>

              <div>
                <p style={{ margin: "0 0 12px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--sky-400)" }}>Módulo 02 · Seguimiento logístico</p>
                <h3 className="pretty" style={{ margin: "0 0 14px", fontWeight: 700, fontSize: "clamp(21px, 2.2vw, 26px)", lineHeight: 1.22, letterSpacing: "-0.02em" }}>Tus embarques por BL o booking</h3>
                <p className="pretty" style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.62, color: "var(--text-muted)" }}>
                  Puertos, contenedores, buques, viajes, transbordos y ETA/ATA en una vista que se actualiza sola. Conecta
                  la inteligencia comercial con la operación real de tu inventario.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Actualización automatizada de embarques", "Alertas por cambio de ETA o transbordo", "Exportación a Excel para tu equipo"].map((chk) => (
                    <div key={chk} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <Icon name="check" size={18} color="var(--sky-400)" />
                      <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-muted)" }}>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(28px,4vw,48px)", alignItems: "center" }}>
              <div>
                <p style={{ margin: "0 0 12px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--sky-400)" }}>Módulo 03 · Disponibilidad web</p>
                <h3 className="pretty" style={{ margin: "0 0 14px", fontWeight: 700, fontSize: "clamp(21px, 2.2vw, 26px)", lineHeight: 1.22, letterSpacing: "-0.02em" }}>
                  Si tu producto está disponible en la web, tienda por tienda
                </h3>
                <p className="pretty" style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.62, color: "var(--text-muted)" }}>
                  Un SKU agotado o despublicado en la web de un retailer es venta que no ocurre y nadie te avisa. Iris
                  revisa la disponibilidad publicada de cada producto en cada tienda, todos los días, y guarda cuánto
                  tiempo estuvo fuera.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Disponible, agotado o despublicado por SKU y tienda",
                    "Días fuera de stock acumulados en el período",
                    "Alerta cuando un SKU clave deja de estar disponible",
                    "Cobertura de catálogo: qué porcentaje de tus SKUs está publicado",
                  ].map((chk) => (
                    <div key={chk} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <Icon name="check" size={18} color="var(--sky-400)" />
                      <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-muted)" }}>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderBottom: "1px solid var(--line-default)", background: "var(--surface-sunken)" }}>
                  <p style={{ margin: 0, marginRight: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)" }}>Disponibilidad web · hoy</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>18 SKUs</span>
                </div>
                <IrisDemo style={{ display: "flex", flexDirection: "column", padding: "14px 16px", minHeight: 290, background: "var(--surface-page)" }}>
                  <div className="ir-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 12 }}>
                    <span style={{ fontSize: 14.5, color: "var(--text-muted)" }}>Cobertura de catálogo</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 700, color: "var(--text-strong)" }}>83%</span>
                  </div>
                  {[
                    { name: "TV 55\" U6 Series", meta: "Retailer A · stock 42", status: "Disponible", color: "var(--status-success)", bg: "var(--status-success-soft)" },
                    { name: "Lavadora 18kg", meta: "Retailer C · 3 días fuera", status: "Agotado", color: "var(--status-error)", bg: "var(--status-error-soft)" },
                    { name: "Aire 12k BTU Inverter", meta: "Retailer B · desde 11/09", status: "No publicado", color: "var(--status-warning)", bg: "var(--status-warning-soft)" },
                    { name: "Refrigeradora 17 pies", meta: "Retailer D · stock 8", status: "Disponible", color: "var(--status-success)", bg: "var(--status-success-soft)" },
                  ].map((row) => (
                    <div key={row.name} className="ir-row" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 10, alignItems: "center", padding: "11px 0", borderTop: "1px solid var(--line-subtle)" }}>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ margin: 0, fontSize: 14, color: "var(--text-strong)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.name}</p>
                        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-muted)" }}>{row.meta}</p>
                      </div>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.04em", textTransform: "uppercase", color: row.color, background: row.bg, borderRadius: "var(--radius-sm)", padding: "4px 9px", whiteSpace: "nowrap" }}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                  <div className="ir-row" style={{ display: "flex", alignItems: "center", gap: 8, padding: "13px 0 0", borderTop: "1px solid var(--line-subtle)" }}>
                    <Icon name="bell" size={15} color="var(--status-error)" />
                    <span style={{ fontSize: 12.5, color: "var(--status-error)" }}>2 SKUs clave sin disponibilidad web</span>
                  </div>
                </IrisDemo>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cobertura" className="wrap section">
        <Reveal mode="single">
          <p className="eyebrow">Cobertura</p>
          <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
            Retailers monitoreados en América Latina y el Caribe
          </h2>
          <p className="pretty" style={{ margin: "0 0 32px", maxWidth: 760, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
            Monitoreamos retailers en 16 países. Tu organización ve únicamente las tiendas autorizadas para ella.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16, marginBottom: 28 }}>
          {[
            { value: "16", label: "países con integración", color: "var(--text-strong)" },
            { value: "93", label: "tiendas monitoreadas", color: "var(--text-strong)" },
            { value: "Diaria", label: "frecuencia de captura", color: "var(--action-primary-active)" },
            { value: "1 día", label: "para sumar una tienda nueva", color: "var(--status-success)" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: "20px 22px" }}>
              <p style={{ margin: "0 0 4px", fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 700, color: stat.color }}>{stat.value}</p>
              <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted)" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
          <iframe src="/iris-map.html" title="Mapa de cobertura de tiendas monitoreadas" loading="lazy" style={{ display: "block", width: "100%", height: 560, border: 0, background: "transparent" }} />
        </div>
        <p style={{ margin: "14px 0 0", fontSize: 13.5, color: "var(--text-faint)" }}>
          Las cifras indican tiendas monitoreadas por país. Pasa el cursor por un país para ver su detalle.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", marginTop: 28, background: "var(--surface-accent-soft)", borderRadius: "var(--radius-lg)", padding: "22px 24px" }}>
          <div style={{ minWidth: 0 }}>
            <p style={{ margin: "0 0 4px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--text-strong)" }}>¿No está el retailer que te interesa?</p>
            <p className="pretty" style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)" }}>Si la tienda no está en la lista, la agregamos en un día. Dinos la URL y el país en la llamada.</p>
          </div>
          <a href="#agendar" className="btn btn-primary btn-md">Pedir una tienda nueva</a>
        </div>
      </section>

      <section id="flujo" className="wrap section">
        <Reveal mode="single">
          <p className="eyebrow">Flujo de datos</p>
          <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
            Cómo llega el dato a tu decisión
          </h2>
          <p className="pretty" style={{ margin: "0 0 40px", maxWidth: 760, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
            Cuatro pasos que corren todos los días, sin que tu equipo tenga que tocar nada.
          </p>
        </Reveal>

        <Reveal mode="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
          {flowSteps.map((s) => (
            <div key={s.n} className="card" style={{ padding: 26 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--action-primary-active)" }}>{s.n}</span>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--text-strong)" }}>{s.title}</p>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section style={{ background: "var(--surface-panel)", borderTop: "1px solid var(--line-default)", borderBottom: "1px solid var(--line-default)" }}>
        <div className="wrap section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
          <Reveal mode="single">
            <p className="eyebrow">Para quién</p>
            <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
              Equipos que deciden con precio y disponibilidad
            </h2>
            <p className="pretty" style={{ margin: 0, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
              Iris está pensado para fabricantes y distribuidores regionales que venden a través de varios retailers y
              necesitan la misma verdad para pricing, trade marketing y operaciones.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {audiences.map((a) => (
              <div key={a.text} style={{ display: "flex", gap: 10, alignItems: "center", background: "var(--surface-page)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-md)", padding: "14px 16px" }}>
                <Icon name={a.icon} size={18} color="var(--sky-400)" />
                <span style={{ fontSize: 14.5, color: "var(--text-body)" }}>{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <Reveal
          mode="single"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(28px,4vw,40px)",
            alignItems: "center",
            background: "var(--surface-inverse)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(28px,4vw,40px)",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14, background: "rgba(95,212,183,0.12)", borderRadius: "var(--radius-sm)", padding: "5px 10px" }}>
              <Icon name="flask-conical" size={15} color="var(--brand-teal)" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--brand-teal)" }}>Capacidad experimental</span>
            </div>
            <h3 className="pretty" style={{ margin: "0 0 14px", fontWeight: 700, fontSize: "clamp(21px, 2.4vw, 28px)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--text-on-inverse)" }}>
              Inteligencia de banners y homepages
            </h3>
            <p className="pretty" style={{ margin: 0, fontSize: 16, lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
              Estamos desarrollando un pipeline que captura homepages de retailers, segmenta banners, reconoce el texto de
              la promoción y detecta cambios semánticos en la comunicación comercial. El pipeline ya está implementado;
              aún no forma parte del producto web principal.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "scan-text", text: "Segmentación de banners y lectura de texto promocional" },
              { icon: "git-compare", text: "Detección de cambios semánticos entre capturas" },
              { icon: "message-circle", text: "Pregúntanos por el acceso temprano en la llamada" },
            ].map((row) => (
              <div key={row.icon} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "var(--surface-inverse-raised)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-md)", padding: "14px 16px" }}>
                <Icon name={row.icon} size={18} color="var(--brand-teal)" />
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--text-on-inverse-muted)" }}>{row.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="agendar" style={{ background: "var(--surface-inverse)" }}>
        <div className="wrap section">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
            <div>
              <p className="eyebrow eyebrow-teal">Agenda tu llamada</p>
              <h2 className="pretty" style={{ margin: "0 0 16px", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.028em", color: "var(--text-on-inverse)" }}>
                Definamos qué tiendas y qué SKUs monitorear
              </h2>
              <p className="pretty" style={{ margin: "0 0 28px", maxWidth: 560, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
                Cuéntanos tu categoría y en qué retailers compites. En 30 minutos salimos con el alcance del monitoreo y
                cómo se vería tu tablero.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="mailto:contact@blaisetechnology.com?subject=Agendar%20llamada%20Iris" className="btn btn-gradient btn-lg">Agendar llamada</a>
                <a href="mailto:contact@blaisetechnology.com?subject=Solicitud%20de%20informaci%C3%B3n%20Iris" className="btn btn-inverse btn-lg">Solicitar información</a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, background: "var(--surface-inverse-raised)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-xl)", padding: 28 }}>
              <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--text-on-inverse)" }}>Lleva esto a la llamada</p>
              {[
                { icon: "store", text: "Los retailers donde se vende tu producto" },
                { icon: "tag", text: "Las categorías y marcas que quieres seguir" },
                { icon: "plug", text: "Si necesitas API, BI o solo el dashboard" },
                { icon: "ship", text: "Si también sigues embarques por BL o booking" },
              ].map((row) => (
                <div key={row.icon} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Icon name={row.icon} size={20} color="var(--brand-teal)" />
                  <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-on-inverse-muted)" }}>{row.text}</span>
                </div>
              ))}
              <div style={{ height: 1, background: "var(--line-inverse)", margin: "4px 0" }} />
              <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--brand-teal)" }}>contact@blaisetechnology.com</p>
            </div>
          </div>
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--line-inverse)", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em", color: "var(--text-on-inverse)" }}>Iris</span>
              <span style={{ fontSize: 12.5, color: "var(--text-on-inverse-muted)" }}>un producto de</span>
              <img src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 22, width: "auto", display: "block" }} />
            </div>
            <p style={{ margin: 0, fontSize: 13, color: "var(--text-on-inverse-muted)" }}>Blaise Technology LLC · Inteligencia de precios y logística</p>
          </div>
        </div>
      </section>
    </>
  );
}
