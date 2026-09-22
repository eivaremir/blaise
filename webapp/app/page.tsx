import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SubNav } from "@/components/SubNav";
import { LangProvider } from "@/components/LangProvider";
import { Es, En } from "@/components/I18n";
import { ProductTabsProvider, TabChips, TabTitle, TabMeta, TabPanel } from "@/components/ProductTabs";

export default function HomePage() {
  return (
    <LangProvider>
      <div className="subnav">
        <SubNav
          active="home"
          withLang
          cta={
            <a href="#consulta" className="btn btn-primary btn-sm">
              <Es inline>Reservar consulta</Es>
              <En inline>Book a call</En>
            </a>
          }
        />
      </div>

      <section style={{ background: "var(--surface-inverse)" }}>
        <div className="wrap section">
          <div style={{ maxWidth: 860 }}>
            <p className="eyebrow eyebrow-teal">
              <Es inline>Consultoría tecnológica · Desarrollo a medida</Es>
              <En inline>Technology consulting · Custom development</En>
            </p>
            <h1
              className="pretty"
              style={{
                margin: "0 0 22px",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 58px)",
                lineHeight: 1.04,
                letterSpacing: "-0.028em",
                color: "var(--text-on-inverse)",
              }}
            >
              <Es>Consultoría tecnológica que termina en software funcionando.</Es>
              <En>Technology consulting that ends in working software.</En>
            </h1>
            <p
              className="pretty"
              style={{ margin: "0 0 30px", maxWidth: 660, fontSize: "clamp(16px, 1.5vw, 18px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}
            >
              <Es>
                Somos Blaise, una empresa de tecnología en Panamá. Analizamos tu operación, definimos qué construir y lo
                desarrollamos a medida: modelos de lenguaje, visión por computadora, AWS e integraciones. No entregamos
                recomendaciones, entregamos el sistema funcionando.
              </Es>
              <En>
                We are Blaise, a technology company in Panama. We study your operation, define what to build, and develop
                it for you: language models, computer vision, AWS and integrations. We don&rsquo;t hand over recommendations
                — we hand over the working system.
              </En>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a href="#consulta" className="btn btn-gradient btn-lg">
                <Es inline>Reservar consulta gratuita</Es>
                <En inline>Book the free consultation</En>
              </a>
              <span style={{ fontSize: 15, color: "var(--brand-teal)" }}>
                <Es inline>30 minutos · sin costo · sin compromiso</Es>
                <En inline>30 minutes · no cost · no commitment</En>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "clamp(32px, 4vw, 56px)", alignItems: "start" }}>
          <div>
            <p className="eyebrow">
              <Es inline>Servicio principal</Es>
              <En inline>Core service</En>
            </p>
            <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
              <Es>Desarrollo de software a medida, con la consultoría incluida.</Es>
              <En>Custom software development, with the consulting built in.</En>
            </h2>
            <p className="pretty" style={{ margin: "0 0 26px", fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
              <Es>
                Empezamos entendiendo tu operación y terminamos entregando el sistema. Estas son las capacidades con las que
                lo construimos; cada desarrollo arranca con la misma llamada gratuita.
              </Es>
              <En>
                We start by understanding your operation and finish by delivering the system. These are the capabilities we
                build it with; every engagement starts with the same free call.
              </En>
            </p>
            <Link href="/services" className="btn btn-secondary btn-lg">
              <Es inline>Ver servicios en detalle</Es>
              <En inline>See services in detail</En>
            </Link>
          </div>
          <div>
            {[
              {
                icon: "code",
                es: ["Consultoría y desarrollo a medida", "Revisamos el proceso, decidimos contigo qué vale la pena automatizar y construimos el software para tu operación, entregado por partes que puedes usar desde el primer mes."],
                en: ["Consulting and custom development", "We review the process, decide with you what is worth automating, and build the software for your operation — delivered in pieces you can use from month one."],
              },
              {
                icon: "sparkles",
                es: ["Soluciones con IA", "Modelos de lenguaje y visión por computadora aplicados a un proceso concreto: atención, clasificación, lectura de documentos."],
                en: ["AI solutions", "Language models and computer vision applied to one concrete process: support, classification, document reading."],
              },
              {
                icon: "cloud",
                es: ["Nube AWS", "Arquitectura, migración y orden en tu entorno, con costos y permisos bajo control."],
                en: ["AWS cloud", "Architecture, migration and cleanup, with costs and permissions under control."],
              },
              {
                icon: "shield-check",
                es: ["Facturación electrónica en Panamá", "Integramos tu sistema con los proveedores autorizados que reportan a la DGI: negocio → canalfact → PAC → DGI."],
                en: ["Electronic invoicing in Panama", "We integrate your system with the authorised providers that report to the DGI: business → canalfact → PAC → DGI."],
              },
            ].map((row, i, arr) => (
              <div
                key={row.icon}
                style={{
                  display: "grid",
                  gridTemplateColumns: "24px minmax(0,1fr)",
                  gap: 18,
                  alignItems: "start",
                  padding: "24px 0",
                  borderTop: "1px solid var(--line-default)",
                  borderBottom: i === arr.length - 1 ? "1px solid var(--line-default)" : undefined,
                }}
              >
                <Icon name={row.icon} size={24} color="var(--sky-400)" />
                <div>
                  <p style={{ margin: "0 0 6px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>
                    <Es>{row.es[0]}</Es>
                    <En>{row.en[0]}</En>
                  </p>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)" }}>
                    <Es>{row.es[1]}</Es>
                    <En>{row.en[1]}</En>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" style={{ background: "var(--surface-inverse)", borderTop: "1px solid var(--line-inverse)" }}>
        <div className="wrap section">
          <p className="eyebrow eyebrow-teal">
            <Es inline>Nuestra propia evidencia</Es>
            <En inline>Our own evidence</En>
          </p>
          <h2 className="pretty" style={{ margin: "0 0 12px", maxWidth: 780, fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em", color: "var(--text-on-inverse)" }}>
            <Es>Productos que construimos con el mismo equipo que te atiende.</Es>
            <En>Products built by the same team that will work with you.</En>
          </h2>
          <p className="pretty" style={{ margin: "0 0 32px", maxWidth: 700, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
            <Es>
              No son productos que revendemos: son desarrollos nuestros, en producción, con clientes reales. Esa es la prueba
              de cómo trabajamos, y también están disponibles si te sirven tal como están.
            </Es>
            <En>
              These are not products we resell: they are our own builds, in production, with real clients. They are the
              proof of how we work — and they&rsquo;re available as-is if they fit you.
            </En>
          </p>

          <ProductTabsProvider>
            <div style={{ marginTop: "clamp(36px,4.5vw,56px)", display: "flex", gap: 8, flexWrap: "wrap" }}>
              <TabChips />
            </div>

            <div style={{ marginTop: 16, background: "var(--surface-inverse-raised)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 20px", borderBottom: "1px solid var(--line-inverse)" }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--brand-teal)" }} />
                <TabTitle />
                <TabMeta />
              </div>

              <TabPanel product="cf">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 1, background: "var(--line-inverse)" }}>
                  <div style={{ background: "var(--surface-inverse-raised)", padding: 20 }}>
                    <p style={{ margin: "0 0 6px", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "var(--text-on-inverse-muted)" }}>FACTURA</p>
                    <p style={{ margin: "0 0 4px", fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-on-inverse)" }}>FE-001-2026-000412</p>
                    <p style={{ margin: 0, fontSize: 13, color: "var(--brand-teal)" }}>
                      <Es inline>Autorizada por el PAC</Es>
                      <En inline>Authorised by the PAC</En>
                    </p>
                  </div>
                  <div style={{ background: "var(--surface-inverse-raised)", padding: 20 }}>
                    <p style={{ margin: "0 0 6px", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "var(--text-on-inverse-muted)" }}>TOTAL</p>
                    <p style={{ margin: "0 0 4px", fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-on-inverse)" }}>B/.4,285.00</p>
                    <p style={{ margin: 0, fontSize: 13, color: "var(--text-on-inverse-muted)" }}>ITBMS 7%</p>
                  </div>
                  <div style={{ background: "var(--surface-inverse-raised)", padding: 20 }}>
                    <p style={{ margin: "0 0 6px", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "var(--text-on-inverse-muted)" }}>RUC</p>
                    <p style={{ margin: "0 0 4px", fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-on-inverse)" }}>8-NT-2-0048192</p>
                    <p style={{ margin: 0, fontSize: 13, color: "var(--text-on-inverse-muted)" }}>20/02/2026</p>
                  </div>
                </div>
                <div style={{ padding: 20, borderTop: "1px solid var(--line-inverse)", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ margin: 0, maxWidth: 620, fontSize: 14.5, lineHeight: 1.6, color: "var(--text-on-inverse-muted)" }}>
                    <Es>canalfact no es un proveedor de facturación: es el puente que conecta tu negocio con los proveedores autorizados que reportan a la DGI.</Es>
                    <En>canalfact is not an invoicing provider: it is the bridge connecting your business to the authorised providers that report to the DGI.</En>
                  </p>
                  <Link href="/canalfact" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "var(--brand-teal)", whiteSpace: "nowrap" }}>
                    <Es inline>Ver canalfact</Es>
                    <En inline>See canalfact</En>
                  </Link>
                </div>
              </TabPanel>

              <TabPanel product="dot" className="flexcol">
                <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ alignSelf: "flex-end", maxWidth: "78%", background: "var(--action-primary)", borderRadius: "14px 14px 4px 14px", padding: "12px 16px" }}>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--text-on-inverse)" }}>
                      <Es>¿Cuándo llega mi pedido 48219?</Es>
                      <En>When does order 48219 arrive?</En>
                    </p>
                  </div>
                  <div style={{ alignSelf: "flex-start", maxWidth: "78%", background: "var(--surface-inverse)", border: "1px solid var(--line-inverse)", borderRadius: "14px 14px 14px 4px", padding: "12px 16px" }}>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--text-on-inverse)" }}>
                      <Es>Tu pedido salió del centro de distribución hoy y llega el 22/02. Te paso el número de guía: 77-4412-PA.</Es>
                      <En>Your order left the distribution centre today and arrives on 22/02. Tracking number: 77-4412-PA.</En>
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: "auto", padding: 20, borderTop: "1px solid var(--line-inverse)", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ margin: 0, maxWidth: 620, fontSize: 14.5, lineHeight: 1.6, color: "var(--text-on-inverse-muted)" }}>
                    <Es>Dot responde con los datos de tu operación, no con respuestas genéricas, y pasa a una persona cuando hace falta.</Es>
                    <En>Dot answers from your own operational data, not with canned replies, and hands off to a person when needed.</En>
                  </p>
                  <Link href="/dot" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "var(--brand-teal)", whiteSpace: "nowrap" }}>
                    <Es inline>Ver Dot</Es>
                    <En inline>See Dot</En>
                  </Link>
                </div>
              </TabPanel>

              <TabPanel product="iris" className="flexcol">
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) 80px 70px", gap: 8, padding: "12px 20px", borderBottom: "1px solid var(--line-inverse)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)" }}>SKU / TIENDA</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)", textAlign: "right" }}>PRECIO</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)", textAlign: "right" }}>CAMBIO</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) 80px 70px", gap: 8, padding: "12px 20px", alignItems: "center" }}>
                  <p style={{ margin: 0, fontSize: 13.5, color: "var(--text-on-inverse)" }}>TV 55&quot; U6 Series · Retailer A</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-on-inverse)", textAlign: "right" }}>B/.499</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--brand-teal)", textAlign: "right" }}>−18%</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) 80px 70px", gap: 8, padding: "12px 20px", alignItems: "center", borderTop: "1px solid var(--line-inverse)" }}>
                  <p style={{ margin: 0, fontSize: 13.5, color: "var(--text-on-inverse)" }}>Aire 12k BTU Inverter · Retailer B</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-on-inverse)", textAlign: "right" }}>B/.415</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--brand-teal)", textAlign: "right" }}>−22%</span>
                </div>
                <div style={{ marginTop: "auto", padding: 20, borderTop: "1px solid var(--line-inverse)", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ margin: 0, maxWidth: 620, fontSize: 14.5, lineHeight: 1.6, color: "var(--text-on-inverse-muted)" }}>
                    <Es>Iris monitorea precios, promociones y disponibilidad de forma continua: tres años de páginas capturadas y datos entregados estructurados.</Es>
                    <En>Iris monitors prices, promotions and availability continuously: three years of captured pages and structured data delivered.</En>
                  </p>
                  <Link href="/iris" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "var(--brand-teal)", whiteSpace: "nowrap" }}>
                    <Es inline>Ver Iris</Es>
                    <En inline>See Iris</En>
                  </Link>
                </div>
              </TabPanel>
            </div>
          </ProductTabsProvider>
        </div>
      </section>

      <section style={{ background: "var(--surface-panel)", borderBottom: "1px solid var(--line-default)" }}>
        <div className="wrap" style={{ paddingTop: 30, paddingBottom: 30, display: "flex", flexWrap: "wrap", gap: 32, alignItems: "baseline", justifyContent: "space-between" }}>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)", maxWidth: 300 }}>
            <Es>Lo que ya está funcionando</Es>
            <En>What is already running</En>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
            <div>
              <p style={{ margin: "0 0 2px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, letterSpacing: "-0.028em", color: "var(--text-strong)" }}>40+</p>
              <p style={{ margin: 0, fontSize: 14.5, color: "var(--text-muted)" }}>
                <Es inline>empresas con canalfact</Es>
                <En inline>businesses on canalfact</En>
              </p>
            </div>
            <div>
              <p style={{ margin: "0 0 2px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, letterSpacing: "-0.028em", color: "var(--text-strong)" }}>
                3 <span style={{ fontSize: 18, fontWeight: 700 }}>
                  <Es inline>años</Es>
                  <En inline>years</En>
                </span>
              </p>
              <p style={{ margin: 0, fontSize: 14.5, color: "var(--text-muted)" }}>
                <Es inline>de datos extraídos con Iris</Es>
                <En inline>of data extracted with Iris</En>
              </p>
            </div>
            <div>
              <p style={{ margin: "0 0 2px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, letterSpacing: "-0.028em", color: "var(--text-strong)" }}>10+</p>
              <p style={{ margin: 0, fontSize: 14.5, color: "var(--text-muted)" }}>
                <Es inline>sistemas implementados</Es>
                <En inline>systems implemented</En>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-panel)", borderTop: "1px solid var(--line-default)", borderBottom: "1px solid var(--line-default)" }}>
        <div className="wrap section">
          <p className="eyebrow">
            <Es inline>Cómo trabajamos</Es>
            <En inline>How we work</En>
          </p>
          <h2 className="pretty" style={{ margin: "0 0 40px", maxWidth: 780, fontWeight: 800, fontSize: "clamp(24px, 2.9vw, 34px)", lineHeight: 1.16, letterSpacing: "-0.026em" }}>
            <Es>No entregamos recomendaciones: entregamos software funcionando.</Es>
            <En>We don&rsquo;t deliver recommendations. We deliver working software.</En>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
            {[
              { n: "01", bg: "var(--surface-accent-soft)", fg: "var(--action-primary)", es: ["Escribes y agendamos", "Dos líneas sobre tu negocio bastan. Te respondemos con horarios el mismo día hábil."], en: ["You write, we schedule", "Two lines about your business is enough. We reply with times the same business day."] },
              { n: "02", bg: "var(--surface-accent-soft)", fg: "var(--action-primary)", es: ["30 minutos con quien construye", "Revisamos tu situación, las restricciones y lo que ya intentaste. No es una demo comercial."], en: ["30 minutes with the builders", "We review your setup, the constraints and what you've already tried. Not a sales demo."] },
              { n: "03", bg: "var(--surface-accent-soft)", fg: "var(--action-primary)", es: ["Te queda algo en la mano", "Un resumen escrito con los siguientes pasos concretos, úsalo con nosotros o con quien quieras."], en: ["You leave with something", "A written summary with concrete next steps — use it with us or with anyone else."] },
              { n: "04", bg: "var(--surface-teal-soft)", fg: "var(--status-success)", es: ["Construimos por partes", "Primero una pieza que puedas usar, luego la siguiente, con las mismas personas hasta el final."], en: ["We build in pieces", "One usable piece first, then the next — with the same people all the way through."] },
            ].map((step) => (
              <div key={step.n}>
                <span style={{ display: "flex", width: 34, height: 34, borderRadius: 999, background: step.bg, color: step.fg, fontFamily: "var(--font-mono)", fontSize: 14, alignItems: "center", justifyContent: "center" }}>
                  {step.n}
                </span>
                <p style={{ margin: "16px 0 6px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17.5, color: "var(--text-strong)" }}>
                  <Es>{step.es[0]}</Es>
                  <En>{step.en[0]}</En>
                </p>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)" }}>
                  <Es>{step.es[1]}</Es>
                  <En>{step.en[1]}</En>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consulta" className="wrap section">
        <div className="card card-accent" style={{ padding: 32 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(28px,4vw,48px)", alignItems: "start" }}>
            <div>
              <p className="eyebrow">
                <Es inline>Consulta 1:1 gratuita</Es>
                <En inline>Free 1:1 consultation</En>
              </p>
              <h2 className="pretty" style={{ margin: "0 0 16px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
                <Es>Reserva tus 30 minutos.</Es>
                <En>Claim your 30 minutes.</En>
              </h2>
              <p className="pretty" style={{ margin: "0 0 26px", maxWidth: 520, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
                <Es>
                  Cuéntanos qué estás intentando resolver y te decimos con claridad qué se puede construir, en qué orden y
                  qué implica. Si no somos la opción correcta, también te lo decimos.
                </Es>
                <En>
                  Tell us what you&rsquo;re trying to solve and we&rsquo;ll tell you plainly what can be built, in what order,
                  and what it involves. If we&rsquo;re not the right fit, we&rsquo;ll say that too.
                </En>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                <a href="mailto:contact@blaisetechnology.com?subject=Consulta%201:1%20gratuita" className="btn btn-primary btn-lg">
                  <Es inline>Escribir para agendar</Es>
                  <En inline>Email us to schedule</En>
                </a>
                <a href="mailto:contact@blaisetechnology.com?subject=Consulta%201:1%20gratuita" style={{ fontFamily: "var(--font-mono)", fontSize: 14.5 }}>
                  contact@blaisetechnology.com
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                { icon: "clock", es: "30 minutos por video, sin costo y sin compromiso.", en: "30 minutes on video, free and with no commitment." },
                { icon: "users", es: "Hablas con las mismas personas que escriben el código.", en: "You talk to the same people who write the code." },
                { icon: "file-text", es: "Sales con un resumen escrito y los siguientes pasos.", en: "You leave with a written summary and next steps." },
                { icon: "map-pin", es: "Operamos desde Panamá para clientes de toda Latinoamérica.", en: "We operate from Panama for clients across Latin America." },
              ].map((row) => (
                <div key={row.icon} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Icon name={row.icon} size={20} color="var(--sky-400)" />
                  <span style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)" }}>
                    <Es inline>{row.es}</Es>
                    <En inline>{row.en}</En>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap">
          <div>
            <img src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 28, width: "auto", display: "block" }} />
            <p style={{ margin: "14px 0 0", fontFamily: "var(--font-mono)", fontSize: 14, lineHeight: 1.7, color: "var(--text-on-inverse-muted)" }}>
              Blaise Technology LLC
              <br />
              1603 Capitol Ave Ste 413G-814
              <br />
              Cheyenne, WY 82001
            </p>
          </div>
          <div className="footer-links">
            <Link href="/canalfact">canalfact</Link>
            <Link href="/dot">Dot</Link>
            <Link href="/iris">Iris</Link>
            <Link href="/services">
              <Es inline>Servicios</Es>
              <En inline>Services</En>
            </Link>
          </div>
        </div>
      </footer>
    </LangProvider>
  );
}
