import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { SubNav } from "@/components/SubNav";
import { LangProvider } from "@/components/LangProvider";
import { Es, En } from "@/components/I18n";

export const metadata: Metadata = {
  title: "Servicios de tecnología",
  description:
    "Consultoría 1:1 gratuita, facturación electrónica, servicio al cliente con IA, extracción de datos web y nube AWS. Software a medida, ya implementado.",
  openGraph: {
    title: "Servicios de tecnología | Blaise",
    description:
      "Consultoría 1:1 gratuita, facturación electrónica, servicio al cliente con IA, extracción de datos web y nube AWS. Software a medida, ya implementado.",
    url: "https://blaisetechnology.com/services/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de tecnología | Blaise",
    description:
      "Consultoría 1:1 gratuita, facturación electrónica, servicio al cliente con IA, extracción de datos web y nube AWS.",
  },
  alternates: {
    canonical: "https://blaisetechnology.com/services/",
  },
};

export default function ServicesPage() {
  return (
    <LangProvider>
      <div className="subnav">
        <SubNav
          active="services"
          withLang
          cta={
            <a href="mailto:contact@blaisetechnology.com?subject=Consulta%201:1%20gratuita" className="subnav-cta">
              <Es inline>Consulta 1:1 gratuita</Es>
              <En inline>Free 1:1 consultation</En>
            </a>
          }
        />
        <header className="pagehead">
          <div className="wrap pagehead-row">
            <div className="pagehead-brand">
              <img data-logo-light src="/assets/blaise-logo.svg" alt="Blaise" style={{ height: 32, width: "auto", display: "block" }} />
              <img data-logo-dark src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 32, width: "auto" }} />
            </div>
            <a href="#consulta" className="btn btn-secondary btn-sm">
              <Es inline>Reservar consulta</Es>
              <En inline>Book a call</En>
            </a>
          </div>
        </header>
      </div>

      <section style={{ position: "relative", background: "var(--surface-inverse)", overflow: "hidden" }}>
        <div className="wrap section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
          <div>
            <p className="eyebrow eyebrow-teal">
              <Es inline>Consultoría 1:1 gratuita</Es>
              <En inline>Free 1:1 consultation</En>
            </p>
            <h1 className="pretty" style={{ margin: "0 0 20px", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.028em", color: "var(--text-on-inverse)" }}>
              <Es>Hablemos 30 minutos de lo que tu negocio necesita construir.</Es>
              <En>Thirty minutes on what your business actually needs to build.</En>
            </h1>
            <p className="pretty" style={{ margin: "0 0 32px", maxWidth: 620, fontSize: "clamp(16px, 1.5vw, 18px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
              <Es>
                Somos Blaise: no damos recomendaciones y nos vamos, construimos y entregamos el software. Facturación
                electrónica para Panamá, agentes de servicio con IA, extracción de datos web y trabajo en AWS. Empieza con
                una llamada gratuita con nuestros expertos.
              </Es>
              <En>
                We are Blaise. We don&rsquo;t hand over a recommendation and leave — we build and ship the software.
                Electronic invoicing for Panama, LLM service agents, web data extraction and AWS work. Start with a free
                call with our experts.
              </En>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a href="#consulta" className="btn btn-gradient btn-lg">
                <Es inline>Reservar consulta gratuita</Es>
                <En inline>Book the free consultation</En>
              </a>
              <a href="#construimos" className="btn btn-inverse btn-lg">
                <Es inline>Ver qué construimos</Es>
                <En inline>See what we build</En>
              </a>
            </div>
            <p style={{ margin: "20px 0 0", fontSize: 15, color: "var(--brand-teal)" }}>
              <Es inline>30 minutos · sin costo · sin compromiso</Es>
              <En inline>30 minutes · no cost · no commitment</En>
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, background: "var(--surface-inverse-raised)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-xl)", padding: 28 }}>
            <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--text-on-inverse)" }}>
              <Es>Con qué llegan nuestros clientes</Es>
              <En>What clients arrive with</En>
            </p>
            {[
              { icon: "file-text", es: `"Tengo que cumplir con la DGI y no sé por dónde empezar."`, en: `"I have to comply with the DGI and don't know where to start."` },
              { icon: "message-circle", es: `"Mi equipo responde las mismas preguntas todo el día."`, en: `"My team answers the same questions all day."` },
              { icon: "database", es: `"Los datos que necesito viven en veinte sitios web distintos."`, en: `"The data I need lives on twenty different websites."` },
              { icon: "cloud", es: `"Nuestra infraestructura creció sin plan y ya cuesta demasiado."`, en: `"Our infrastructure grew without a plan and costs too much."` },
            ].map((row) => (
              <div key={row.icon} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Icon name={row.icon} size={20} color="var(--brand-teal)" />
                <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-on-inverse-muted)" }}>
                  <Es inline>{row.es}</Es>
                  <En inline>{row.en}</En>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consulta" className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
          <div>
            <p className="eyebrow">
              <Es inline>La llamada</Es>
              <En inline>The call</En>
            </p>
            <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
              <Es>Una consulta 1:1 de 30 minutos, con nuestros expertos, sin costo.</Es>
              <En>A 30-minute 1:1 consultation with our experts, at no cost.</En>
            </h2>
            <p className="pretty" style={{ margin: "0 0 28px", fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
              <Es>
                No es una demo comercial. Cuéntanos qué estás intentando resolver y te decimos con claridad qué se puede
                construir, en qué orden y qué implica. Si no somos la opción correcta, también te lo decimos.
              </Es>
              <En>
                It isn&rsquo;t a sales demo. Tell us what you&rsquo;re trying to solve and we&rsquo;ll tell you plainly what
                can be built, in what order, and what it involves. If we&rsquo;re not the right fit, we&rsquo;ll say that
                too.
              </En>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="mailto:contact@blaisetechnology.com?subject=Consulta%201:1%20gratuita" className="btn btn-primary btn-lg">
                <Es inline>Escribir para agendar</Es>
                <En inline>Email us to schedule</En>
              </a>
              <a href="#contacto" className="btn btn-secondary btn-lg">
                <Es inline>Otras formas de contacto</Es>
                <En inline>Other ways to reach us</En>
              </a>
            </div>
          </div>

          <div className="card card-accent" style={{ padding: 32 }}>
            <p style={{ margin: "0 0 24px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--text-strong)" }}>
              <Es>Cómo funciona</Es>
              <En>How it works</En>
            </p>
            <div style={{ display: "grid", gap: 22 }}>
              {[
                { n: "01", es: ["Escribes y agendamos", "Un correo con dos líneas sobre tu negocio es suficiente. Te respondemos con horarios disponibles."], en: ["You write, we schedule", "Two lines about your business is enough. We reply with available times."] },
                { n: "02", es: ["30 minutos en video", "Hablas directamente con quien construye: revisamos tu situación actual, las restricciones y lo que ya intentaste."], en: ["30 minutes on video", "You talk to the people who build: we go through your current setup, the constraints and what you've already tried."] },
                { n: "03", es: ["Te queda algo en la mano", "Un resumen escrito con los siguientes pasos concretos, úsalo con nosotros o con quien quieras."], en: ["You leave with something", "A written summary with concrete next steps — use it with us or with anyone else."] },
              ].map((row, i, arr) => (
                <div key={row.n}>
                  <div style={{ display: "grid", gridTemplateColumns: "34px minmax(0, 1fr)", gap: 16, alignItems: "start" }}>
                    <span style={{ width: 34, height: 34, borderRadius: 999, background: "var(--surface-accent-soft)", color: "var(--action-primary-active)", fontFamily: "var(--font-mono)", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {row.n}
                    </span>
                    <div>
                      <p style={{ margin: "0 0 4px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16.5, color: "var(--text-strong)" }}>
                        <Es>{row.es[0]}</Es>
                        <En>{row.en[0]}</En>
                      </p>
                      <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)" }}>
                        <Es>{row.es[1]}</Es>
                        <En>{row.en[1]}</En>
                      </p>
                    </div>
                  </div>
                  {i < arr.length - 1 && <div style={{ height: 1, background: "var(--line-subtle)", marginTop: 22 }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="construimos" style={{ background: "var(--surface-panel)", borderTop: "1px solid var(--line-default)", borderBottom: "1px solid var(--line-default)" }}>
        <div className="wrap section">
          <p className="eyebrow">
            <Es inline>Qué construimos</Es>
            <En inline>What we build</En>
          </p>
          <h2 style={{ margin: "0 0 12px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
            <Es>Software a medida, ya implementado.</Es>
            <En>Custom software, already implemented.</En>
          </h2>
          <p className="pretty" style={{ margin: "0 0 48px", maxWidth: 720, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
            <Es>Cada desarrollo empieza con la misma llamada gratuita. Estas son las áreas donde ya tenemos producto funcionando.</Es>
            <En>Every engagement starts with the same free call. These are the areas where we already have working product.</En>
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {[
              { icon: "file-text", es: ["Facturación electrónica", "Emites tus facturas y cumples con la ley. canalfact es el puente entre tu negocio y los proveedores autorizados (PAC) que reportan a la DGI."], en: ["Electronic invoicing", "Issue your invoices and stay compliant. canalfact is the bridge between your business and the DGI-authorised providers (PACs)."] },
              { icon: "message-circle", es: ["Servicio al cliente con IA", "Dot atiende las preguntas repetitivas con agentes basados en modelos de lenguaje, y pasa a una persona cuando hace falta."], en: ["AI customer service", "Dot handles the repetitive questions with LLM-powered agents, and hands off to a person when it matters."] },
              { icon: "database", es: ["Extracción de datos web", "Iris recoge datos de logística y comercio electrónico de forma continua y te los entrega estructurados y listos para usar."], en: ["Web data extraction", "Iris collects logistics and e-commerce data continuously and delivers it structured and ready to use."] },
              { icon: "cloud", es: ["Nube e infraestructura", "Diseñamos, migramos y ordenamos tu entorno en AWS, con costos y permisos bajo control."], en: ["Cloud and infrastructure", "We design, migrate and tidy up your AWS environment, with costs and permissions under control."] },
            ].map((row) => (
              <div key={row.icon} className="card" style={{ padding: 24 }}>
                <Icon name={row.icon} size={24} color="var(--sky-400)" />
                <p style={{ margin: "16px 0 6px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17.5, color: "var(--text-strong)" }}>
                  <Es>{row.es[0]}</Es>
                  <En>{row.en[0]}</En>
                </p>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)" }}>
                  <Es>{row.es[1]}</Es>
                  <En>{row.en[1]}</En>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "center" }}>
          <div>
            <p className="eyebrow">
              <Es inline>Cómo trabajamos</Es>
              <En inline>How we work</En>
            </p>
            <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(24px, 2.9vw, 34px)", lineHeight: 1.16, letterSpacing: "-0.026em" }}>
              <Es>No entregamos recomendaciones: entregamos software funcionando.</Es>
              <En>We don&rsquo;t deliver recommendations. We deliver working software.</En>
            </h2>
            <p className="pretty" style={{ margin: 0, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
              <Es>
                Todo lo que vendemos lo implementamos nosotros primero. Por eso la conversación técnica es directa: puedes
                preguntar por decisiones de arquitectura, plazos reales y qué se rompe cuando algo crece.
              </Es>
              <En>
                Everything we sell, we implemented ourselves first. That makes the technical conversation direct: ask about
                architecture decisions, real timelines, and what breaks as things grow.
              </En>
            </p>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {[
              { icon: "code", es: ["Alcance corto y visible", "Primero una pieza que puedas usar, luego la siguiente."], en: ["Short, visible scope", "One usable piece first, then the next."] },
              { icon: "users", es: ["Un equipo pequeño, sin intermediarios", "Hablas con las mismas personas que escriben el código."], en: ["A small team, no middle layer", "You talk to the same people who write the code."] },
              { icon: "shield-check", es: ["Claridad sobre lo que no controlamos", "Te explicamos qué depende de la DGI, del PAC o de tu proveedor, y qué depende de nosotros."], en: ["Clear about what we don't control", "We spell out what depends on the DGI, the PAC or your provider — and what depends on us."] },
            ].map((row) => (
              <div key={row.icon} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: "20px 22px" }}>
                <Icon name={row.icon} size={22} color="var(--sky-400)" />
                <div>
                  <p style={{ margin: "0 0 4px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16.5, color: "var(--text-strong)" }}>
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

      <section id="contacto" style={{ position: "relative", background: "var(--surface-inverse)" }}>
        <div className="wrap section">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
            <div>
              <h2 className="pretty" style={{ margin: "0 0 16px", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.028em", color: "var(--text-on-inverse)" }}>
                <Es>Reserva tus 30 minutos.</Es>
                <En>Claim your 30 minutes.</En>
              </h2>
              <p className="pretty" style={{ margin: "0 0 28px", maxWidth: 520, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
                <Es>Escríbenos con una línea sobre tu negocio y te enviamos horarios el mismo día hábil.</Es>
                <En>Send us a line about your business and we&rsquo;ll reply with times the same business day.</En>
              </p>
              <a href="mailto:contact@blaisetechnology.com?subject=Consulta%201:1%20gratuita" className="btn btn-inverse btn-lg">
                contact@blaisetechnology.com
              </a>
              <p style={{ margin: "16px 0 0", fontSize: 15, color: "var(--text-on-inverse-muted)" }}>
                <Es inline>Enlace de agenda en línea: próximamente.</Es>
                <En inline>Online booking link: coming soon.</En>
              </p>
            </div>
            <div style={{ borderLeft: "4px solid transparent", borderImage: "var(--brand-gradient) 1", paddingLeft: 24 }}>
              <p className="eyebrow eyebrow-teal">Blaise Technology LLC</p>
              <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 15, lineHeight: 1.7, color: "var(--text-on-inverse-muted)" }}>
                1603 Capitol Ave Ste 413G-814
                <br />
                Cheyenne, WY 82001
              </p>
            </div>
          </div>
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--line-inverse)", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
            <img src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 28, width: "auto", display: "block" }} />
            <p style={{ margin: 0, fontSize: 13.5, color: "var(--text-on-inverse-muted)" }}>canalfact · Dot · Iris · Techub · Cloud &amp; Innovation</p>
          </div>
        </div>
      </section>
    </LangProvider>
  );
}
