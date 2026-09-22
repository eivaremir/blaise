import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { SubNav } from "@/components/SubNav";
import { Reveal } from "@/components/Reveal";
import { CfLogo } from "@/components/CfLogo";

export const metadata: Metadata = {
  title: "canalfact — Facturación electrónica para Panamá",
  description:
    "Conecta tu negocio con la facturación electrónica en Panamá. canalfact es el puente hacia los proveedores autorizados que reportan a la DGI.",
  openGraph: {
    title: "canalfact — Facturación electrónica para Panamá",
    description:
      "Conecta tu negocio con la facturación electrónica en Panamá. canalfact es el puente hacia los proveedores autorizados que reportan a la DGI.",
    url: "https://blaisetechnology.com/canalfact/",
  },
  twitter: {
    card: "summary_large_image",
    title: "canalfact — Facturación electrónica para Panamá",
    description:
      "Conecta tu negocio con la facturación electrónica en Panamá. El puente hacia los proveedores autorizados que reportan a la DGI.",
  },
  alternates: {
    canonical: "https://blaisetechnology.com/canalfact/",
  },
};

const featureCardsSecondary = [
  { icon: "coins", title: "Cuentas por cobrar bajo control", body: "Ve quién te debe y desde cuándo, y envía estados de cuenta sin armarlos a mano." },
  { icon: "bar-chart-3", title: "Reportes de impuestos, ingresos y gastos", body: "Retenciones de ITBMS, ITBMS acreditable y por pagar. Sube tus facturas históricas del facturador gratuito y las recibidas, digitales o físicas." },
  { icon: "printer", title: "Equipos compatibles", body: "Impresoras térmicas, escáneres de códigos de barra y equipos de punto de venta del mercado." },
  { icon: "smartphone", title: "Factura desde tu teléfono", body: "En la obra, en el consultorio o visitando a tu cliente. No necesitas estar en la oficina." },
  { icon: "image", title: "Tu logo en tus facturas", body: "Tu factura sale con tu marca, no con la de un sistema genérico.", tag: "Según el plan" },
  { icon: "shield-check", title: "Gestión de la firma electrónica", body: "Nos encargamos del trámite y la administramos por ti.", tag: "US$100 · 2 años" },
];

const offerCards = [
  { icon: "file-text", title: "Facturación rápida", body: "Envías los datos de tu factura; canalfact se encarga de enviarlos al proveedor autorizado y a DGI. Rápido y sencillo." },
  { icon: "check-circle", title: "Cumplimiento con la ley", body: "Trabajamos con proveedores autorizados por el gobierno. Tu facturación cumple sin que tengas que preocuparte por los detalles." },
  { icon: "plug", title: "Elige y cambia de proveedor", body: "Puedes elegir y cambiar de proveedor autorizado cuando quieras. Un solo lugar para gestionar todo, sin quedarte atado a uno solo." },
  { icon: "bar-chart-3", title: "Todo organizado para tu contador", body: "Impuestos, clientes, productos y reportes desde un solo lugar. La información que necesita tu contador, ordenada y a mano." },
  { icon: "search", title: "Historial y comprobantes", body: "Todo queda registrado. Puedes ver el historial de tus facturas y comprobar que fueron autorizadas correctamente por DGI." },
  { icon: "shield-check", title: "Tus datos protegidos", body: "Tu información está segura. Usamos las mejores prácticas para proteger tus datos y que puedas trabajar con tranquilidad." },
];

const plans = [
  {
    name: "Micro",
    sub: "Hasta 17 facturas mensuales",
    priceBox: (
      <>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: "var(--text-strong)" }}>
          US$ 35.99<span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 400, color: "var(--text-muted)" }}> /año</span>
        </p>
        <p style={{ margin: "10px 0 0", fontSize: 12.5, color: "var(--text-faint)" }}>Solo pago anual</p>
      </>
    ),
    boxBg: "var(--surface-sunken)",
    features: ["Automatizaciones", "Soporte personalizado", "Reportes de ventas semanales y mensuales"],
    cta: { label: "Seleccionar plan", href: "https://canalfact.blaisetechnology.com/configuracion/plan/elegir/?utm_source=blaise&utm_medium=website&utm_campaign=canalfact_subpage&utm_content=plan_micro", variant: "btn-secondary" },
  },
  {
    name: "Starter",
    sub: "80 facturas mensuales · 960 al año",
    priceBox: (
      <>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: "var(--text-strong)" }}>
          US$ 7.99<span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 400, color: "var(--text-muted)" }}> /mes</span>
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap", marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--line-default)" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, color: "var(--text-strong)" }}>
            US$ 91.99<span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 400, color: "var(--text-muted)" }}> /año</span>
          </p>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--status-success)", background: "var(--status-success-soft)", borderRadius: "var(--radius-sm)", padding: "3px 8px" }}>Ahorra 4%</span>
        </div>
      </>
    ),
    boxBg: "var(--surface-sunken)",
    features: ["Automatizaciones Pro", "Recordatorios de pago automáticos", "Plantillas de factura", "Reportes fiscales para CPAs"],
    cta: { label: "Seleccionar plan", href: "https://canalfact.blaisetechnology.com/configuracion/plan/elegir/?utm_source=blaise&utm_medium=website&utm_campaign=canalfact_subpage&utm_content=plan_starter", variant: "btn-secondary" },
  },
  {
    name: "Pro",
    badge: "Mejor valor",
    sub: "200 facturas mensuales · 2,400 al año",
    priceBox: (
      <>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: "var(--action-primary-active)" }}>
          US$ 15.99<span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 400, color: "var(--text-muted)" }}> /mes</span>
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap", marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--line-default)" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, color: "var(--text-strong)" }}>
            US$ 117.99<span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 400, color: "var(--text-muted)" }}> /año</span>
          </p>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--status-success)", background: "var(--status-success-soft)", borderRadius: "var(--radius-sm)", padding: "3px 8px" }}>Ahorra 39%</span>
        </div>
      </>
    ),
    boxBg: "var(--surface-accent-soft)",
    accent: true,
    features: ["Todo lo de Starter", "Customización de reportes", "Dominio personalizado", "Tu logo en el CAFE"],
    cta: { label: "Seleccionar plan", href: "https://canalfact.blaisetechnology.com/configuracion/plan/elegir/?utm_source=blaise&utm_medium=website&utm_campaign=canalfact_subpage&utm_content=plan_pro", variant: "btn-primary" },
  },
  {
    name: "Business",
    sub: "550 facturas mensuales · 6,600 al año",
    priceBox: (
      <>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: "var(--text-strong)" }}>
          US$ 35.99<span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 400, color: "var(--text-muted)" }}> /mes</span>
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap", marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--line-default)" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, color: "var(--text-strong)" }}>
            US$ 388.99<span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 400, color: "var(--text-muted)" }}> /año</span>
          </p>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--status-success)", background: "var(--status-success-soft)", borderRadius: "var(--radius-sm)", padding: "3px 8px" }}>Ahorra 10%</span>
        </div>
      </>
    ),
    boxBg: "var(--surface-sunken)",
    features: ["Todo lo de Pro", "Soporte prioritario", "Formulario de datos de cliente", "Exportaciones y reportes ampliados"],
    cta: { label: "Seleccionar plan", href: "https://canalfact.blaisetechnology.com/configuracion/plan/elegir/?utm_source=blaise&utm_medium=website&utm_campaign=canalfact_subpage&utm_content=plan_business", variant: "btn-secondary" },
  },
  {
    name: "A medida",
    sub: "Más de 550 facturas mensuales",
    priceBox: <p style={{ margin: "10px 0 0", fontSize: 12.5, color: "var(--text-faint)" }}>Precio por factura on demand</p>,
    boxBg: "var(--surface-sunken)",
    features: ["Integraciones con sistemas contables", "Planes y soporte a la medida", "Volumen sin límite definido"],
    cta: { label: "Contáctanos", href: "mailto:contact@blaisetechnology.com?subject=Plan%20a%20medida%20canalfact", variant: "btn-secondary" },
  },
];

export default function CanalfactPage() {
  return (
    <>
      <div className="subnav">
        <SubNav active="canalfact" cta={<a href="mailto:contact@blaisetechnology.com?subject=Consulta%201:1%20gratuita" className="subnav-cta">Consulta 1:1 gratuita</a>} />
        <header className="pagehead">
          <div className="wrap pagehead-row">
            <div className="pagehead-brand">
              <CfLogo height={26} style={{ filter: "invert(1) brightness(0.25)" }} />
              <span className="byline">
                un producto de
                <img data-logo-light src="/assets/blaise-logo.svg" alt="Blaise" style={{ height: 18, width: "auto", display: "inline-block" }} />
                <img data-logo-dark src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 18, width: "auto" }} />
              </span>
            </div>
            <a href="#funcionalidades" className="textlink" style={{ marginRight: 4 }}>Funcionalidades</a>
            <a
              href="https://canalfact.blaisetechnology.com/accounts/signup/?utm_source=blaise&utm_medium=website&utm_campaign=canalfact_subpage&utm_content=header_cta"
              className="btn btn-primary btn-sm"
            >
              Registrar gratis
            </a>
          </div>
        </header>
      </div>

      <section style={{ position: "relative", background: "var(--surface-inverse)", overflow: "hidden" }}>
        <span style={{ position: "absolute", insetInline: 0, top: 0, height: 4, background: "var(--brand-gradient)" }} />
        <div className="wrap section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
          <div>
            <p className="eyebrow eyebrow-teal">Facturación electrónica</p>
            <h1 className="pretty" style={{ margin: "0 0 20px", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.028em", color: "var(--text-on-inverse)" }}>
              Conecta tu negocio con la facturación electrónica en Panamá
            </h1>
            <p className="pretty" style={{ margin: "0 0 32px", maxWidth: 620, fontSize: "clamp(16px, 1.5vw, 18px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
              Emite tus facturas electrónicas de forma sencilla y cumple con la ley. Con canalfact te conectas a los
              proveedores autorizados por el gobierno desde un solo lugar, sin complicaciones.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a href="https://canalfact.blaisetechnology.com/accounts/signup/?utm_source=blaise&utm_medium=website&utm_campaign=canalfact_subpage&utm_content=hero_cta" className="btn btn-gradient btn-lg">
                Registrar gratis
              </a>
              <a href="#planes" className="btn btn-inverse btn-lg">Ver planes</a>
            </div>
            <p style={{ margin: "20px 0 0", fontSize: 14, color: "var(--text-on-inverse-muted)" }}>
              canalfact es un producto de Blaise Technology, construido y operado por el mismo equipo.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, background: "var(--surface-inverse-raised)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-xl)", padding: 28, boxShadow: "var(--shadow-lg)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <CfLogo height={22} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--brand-teal)", background: "rgba(95,212,183,0.12)", padding: "3px 8px", borderRadius: "var(--radius-sm)" }}>TLS 1.3</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, margin: "4px 0" }}>
              <div style={{ background: "var(--surface-inverse)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-md)", padding: 14 }}>
                <p style={{ margin: "0 0 4px", fontSize: 12, color: "var(--text-on-inverse-muted)" }}>Emitidas hoy</p>
                <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 700, color: "var(--text-on-inverse)" }}>127</p>
              </div>
              <div style={{ background: "var(--surface-inverse)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-md)", padding: 14 }}>
                <p style={{ margin: "0 0 4px", fontSize: 12, color: "var(--text-on-inverse-muted)" }}>Total mes</p>
                <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 700, color: "var(--text-on-inverse)" }}>B/.94k</p>
              </div>
              <div style={{ background: "var(--surface-inverse)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-md)", padding: 14 }}>
                <p style={{ margin: "0 0 4px", fontSize: 12, color: "var(--text-on-inverse-muted)" }}>DGI auth.</p>
                <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 700, color: "var(--brand-teal)" }}>99.8%</p>
              </div>
            </div>
            <div style={{ height: 1, background: "var(--line-inverse)" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div>
                <p style={{ margin: "0 0 2px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-on-inverse)" }}>FE-001-2026-000412</p>
                <p style={{ margin: 0, fontSize: 12.5, color: "var(--text-on-inverse-muted)" }}>Corp. Miramar S.A.</p>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "var(--brand-teal)", background: "rgba(95,212,183,0.12)", padding: "4px 10px", borderRadius: "var(--radius-sm)" }}>
                <Icon name="check-circle" size={14} color="var(--brand-teal)" />
                Autorizada DGI
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <Reveal mode="single">
          <p className="eyebrow">Qué es canalfact</p>
          <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
            La forma sencilla de facturar electrónicamente
          </h2>
          <p className="pretty" style={{ margin: "0 0 20px", maxWidth: 720, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
            canalfact no es un proveedor de facturación: es el puente que conecta tu negocio con los proveedores
            autorizados por el gobierno. Tú eliges con quién trabajar; nosotros hacemos la conexión. Si más adelante
            quieres cambiar de proveedor, lo haces desde un solo lugar sin tener que cambiar todo tu sistema.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-md)", maxWidth: "fit-content" }}>
            <CfLogo height={15} style={{ filter: "invert(1) brightness(0.25)" }} />
            <span style={{ fontSize: 13.5, color: "var(--text-faint)" }}>·</span>
            <span style={{ fontSize: 13.5, color: "var(--text-muted)" }}>desarrollado por Blaise Technology</span>
          </div>
        </Reveal>
      </section>

      <section id="funcionalidades" style={{ background: "var(--surface-panel)", borderTop: "1px solid var(--line-default)", borderBottom: "1px solid var(--line-default)" }}>
        <div className="wrap section">
          <Reveal mode="single">
            <p className="eyebrow">Para empresas y profesionales independientes</p>
            <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
              Mucho más que emitir la factura
            </h2>
            <p className="pretty" style={{ margin: "0 0 44px", maxWidth: 760, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
              canalfact se encarga también de lo que viene después de facturar: cobrar, registrar, reportar y vender en tu
              local.
            </p>
          </Reveal>

          <Reveal mode="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 24 }}>
            <div className="card card-interactive card-accent" style={{ padding: 32 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ flex: "0 0 auto", width: 52, height: 52, borderRadius: "var(--radius-lg)", background: "var(--surface-accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="bell" size={26} color="var(--action-primary)" />
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
                  <p className="pretty" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, lineHeight: 1.25, letterSpacing: "-0.015em", color: "var(--text-strong)" }}>Recordatorios de pago automáticos</p>
                  <p className="pretty" style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)" }}>Tus facturas a crédito le recuerdan solas a tu cliente cuando toca pagar. Tú dejas de perseguir pagos por WhatsApp.</p>
                  <div><span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--action-primary-active)", background: "var(--surface-accent-soft)", borderRadius: "var(--radius-sm)", padding: "4px 9px" }}>Ventas a crédito</span></div>
                </div>
              </div>
            </div>
            <div className="card card-interactive" style={{ padding: 32 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ flex: "0 0 auto", width: 52, height: 52, borderRadius: "var(--radius-lg)", background: "var(--surface-accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="store" size={26} color="var(--action-primary)" />
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
                  <p className="pretty" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, lineHeight: 1.25, letterSpacing: "-0.015em", color: "var(--text-strong)" }}>Punto de venta e inventario</p>
                  <p className="pretty" style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)" }}>Vendes, facturas y descuentas stock en un solo movimiento. Pensado para locales comerciales con mostrador.</p>
                  <div><span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--action-primary-active)", background: "var(--surface-accent-soft)", borderRadius: "var(--radius-sm)", padding: "4px 9px" }}>Locales comerciales</span></div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal mode="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))", gap: 24 }}>
            {featureCardsSecondary.map((f) => (
              <div key={f.icon} className="card card-interactive" style={{ padding: 26 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 13, height: "100%" }}>
                  <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--surface-sunken)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={f.icon} size={20} color="var(--sky-400)" />
                  </span>
                  <p className="pretty" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, lineHeight: 1.3, color: "var(--text-strong)" }}>{f.title}</p>
                  <p className="pretty" style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)" }}>{f.body}</p>
                  {f.tag && (
                    <div style={{ marginTop: "auto", paddingTop: 6 }}>
                      <span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--action-primary-active)", background: "var(--surface-accent-soft)", borderRadius: "var(--radius-sm)", padding: "4px 9px" }}>{f.tag}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--surface-page)", borderBottom: "1px solid var(--line-default)" }}>
        <div className="wrap section">
          <p className="eyebrow">Qué te ofrece</p>
          <h2 style={{ margin: "0 0 12px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>Todo tu tema de facturas en un solo lugar</h2>
          <p className="pretty" style={{ margin: "0 0 48px", maxWidth: 720, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
            Todo organizado para que puedas facturar con tranquilidad y cumplir con la ley sin complicaciones.
          </p>

          <Reveal mode="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {offerCards.map((f) => (
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
        </div>
      </section>

      <section id="planes" className="wrap section">
        <p className="eyebrow">Planes</p>
        <h2 style={{ margin: "0 0 24px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>Elige tu plan</h2>
        <p className="pretty" style={{ margin: "0 0 48px", maxWidth: 720, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
          Todos los planes incluyen facturación electrónica con proveedor autorizado. El pago anual sale más barato que
          el mensual y puedes cambiar de plan cuando quieras.
        </p>

        <Reveal mode="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(268px, 1fr))", gap: 24, alignItems: "stretch" }}>
          {plans.map((plan) => (
            <div key={plan.name} className={`card card-interactive${plan.accent ? " card-accent" : ""}`} style={{ padding: 28 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, height: "100%" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--text-strong)" }}>{plan.name}</p>
                    {plan.badge && (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "#ffffff", background: "var(--status-success)", borderRadius: "var(--radius-sm)", padding: "3px 8px" }}>
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ margin: "6px 0 0", fontSize: 14.5, lineHeight: 1.5, color: "var(--text-muted)" }}>{plan.sub}</p>
                </div>
                <div style={{ background: plan.boxBg, borderRadius: "var(--radius-md)", padding: 16 }}>{plan.priceBox}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <Icon name="check" size={18} color="var(--sky-400)" />
                      <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--text-muted)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto" }}>
                  <a href={plan.cta.href} className={`btn ${plan.cta.variant} btn-md btn-full`}>{plan.cta.label}</a>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section style={{ background: "var(--surface-inverse)" }}>
        <div className="wrap section">
          <Reveal mode="single">
            <p className="eyebrow eyebrow-teal">Empieza ahora</p>
            <h2 className="pretty" style={{ margin: "0 0 16px", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.028em", color: "var(--text-on-inverse)" }}>
              Conecta tu negocio. Simplifica con canalfact.
            </h2>
            <p className="pretty" style={{ margin: "0 0 28px", maxWidth: 620, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
              Desde la web, conectando tu programa o con soporte en Panamá. Para empresas, pymes y emprendedores.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="https://canalfact.blaisetechnology.com/accounts/signup/?utm_source=blaise&utm_medium=website&utm_campaign=canalfact_subpage&utm_content=closing_cta" className="btn btn-gradient btn-lg">
                Registrar gratis
              </a>
              <a href="mailto:contact@blaisetechnology.com?subject=Solicitud%20de%20informaci%C3%B3n%20canalfact" className="btn btn-inverse btn-lg">
                Solicitar información
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ background: "var(--surface-panel)", borderTop: "1px solid var(--line-default)" }}>
        <div className="wrap" style={{ paddingTop: "clamp(32px,4vw,48px)", paddingBottom: "clamp(32px,4vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, marginBottom: 32 }}>
            <div>
              <p style={{ margin: "0 0 12px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-strong)" }}>Producto</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                <li style={{ marginBottom: 8 }}><a href="https://canalfact.blaisetechnology.com/" style={{ fontSize: 15, color: "var(--text-muted)" }}>Sitio web</a></li>
                <li style={{ marginBottom: 8 }}><a href="https://canalfact.blaisetechnology.com/dashboard/" style={{ fontSize: 15, color: "var(--text-muted)" }}>Plataforma</a></li>
                <li><a href="https://canalfact.blaisetechnology.com/docs/" style={{ fontSize: 15, color: "var(--text-muted)" }}>Documentación</a></li>
              </ul>
            </div>
            <div>
              <p style={{ margin: "0 0 12px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-strong)" }}>Legal</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                <li style={{ marginBottom: 8 }}><a href="https://canalfact.blaisetechnology.com/terms/" style={{ fontSize: 15, color: "var(--text-muted)" }}>Términos y Condiciones</a></li>
                <li style={{ marginBottom: 8 }}><a href="https://canalfact.blaisetechnology.com/privacy/" style={{ fontSize: 15, color: "var(--text-muted)" }}>Política de Privacidad</a></li>
                <li><a href="https://canalfact.blaisetechnology.com/security/" style={{ fontSize: 15, color: "var(--text-muted)" }}>Política de Seguridad</a></li>
              </ul>
            </div>
            <div>
              <p style={{ margin: "0 0 12px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-strong)" }}>Contacto</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                <li style={{ marginBottom: 8 }}><a href="mailto:support@canalfact.blaisetechnology.com" style={{ fontSize: 15, color: "var(--text-muted)" }}>Soporte Técnico</a></li>
                <li style={{ marginBottom: 8 }}><a href="mailto:contact@blaisetechnology.com" style={{ fontSize: 15, color: "var(--text-muted)" }}>Contacto Comercial</a></li>
                <li><a href="https://canalfact.blaisetechnology.com/faq/" style={{ fontSize: 15, color: "var(--text-muted)" }}>Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </div>
          <div style={{ paddingTop: 24, borderTop: "1px solid var(--line-default)", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <CfLogo height={15} style={{ filter: "invert(1) brightness(0.25)" }} />
              <span style={{ fontSize: 12.5, color: "var(--text-faint)" }}>un producto de</span>
              <img data-logo-light src="/assets/blaise-logo.svg" alt="Blaise" style={{ height: 22, width: "auto", display: "block" }} />
              <img data-logo-dark src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 22, width: "auto" }} />
            </div>
            <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted)" }}>© 2026 canalfact — Facturación electrónica para Panamá.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
