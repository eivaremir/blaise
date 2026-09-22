import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { SubNav } from "@/components/SubNav";
import { Reveal } from "@/components/Reveal";
import { DotDemo } from "@/components/DotDemo";

export const metadata: Metadata = {
  title: "Dot — Agentes de servicio con IA",
  description:
    "Dot es un agente de servicio al cliente construido sobre modelos de lenguaje: responde 24/7, consulta tus sistemas y pasa a una persona cuando hace falta.",
  openGraph: {
    title: "Dot — Agentes de servicio con IA",
    description:
      "Dot es un agente de servicio al cliente construido sobre modelos de lenguaje: responde 24/7, consulta tus sistemas y pasa a una persona cuando hace falta.",
    url: "https://blaisetechnology.com/dot/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dot — Agentes de servicio con IA",
    description:
      "Agente de servicio al cliente con LLM: responde 24/7, consulta tus sistemas y pasa a una persona cuando hace falta.",
  },
  alternates: {
    canonical: "https://blaisetechnology.com/dot/",
  },
};

const DOT_MARK = (
  <path
    fill="currentColor"
    d="M36.5 573V223H151.5C188.833 223 221.167 230.5 248.5 245.5C275.833 260.5 297 281.167 312 307.5C327 333.833 334.5 364 334.5 398C334.5 432 327 462.167 312 488.5C297 514.833 275.833 535.5 248.5 550.5C221.167 565.5 188.833 573 151.5 573H36.5ZM96 520.5H152C175.667 520.5 196.667 515.667 215 506C233.667 496 248.333 481.833 259 463.5C269.667 444.833 275 423 275 398C275 372.667 269.667 350.833 259 332.5C248.333 314.167 233.667 300.167 215 290.5C196.667 280.5 175.667 275.5 152 275.5H96V520.5ZM508.539 579C482.206 579 458.872 573.167 438.539 561.5C418.206 549.5 402.039 533.5 390.039 513.5C378.372 493.167 372.539 470.5 372.539 445.5C372.539 420.5 378.372 398 390.039 378C402.039 357.667 418.206 341.667 438.539 330C458.872 318 482.206 312 508.539 312C534.539 312 557.706 318 578.039 330C598.372 341.667 614.372 357.5 626.039 377.5C638.039 397.5 644.039 420.167 644.039 445.5C644.039 470.5 638.039 493.167 626.039 513.5C614.372 533.5 598.372 549.5 578.039 561.5C557.706 573.167 534.539 579 508.539 579ZM508.539 530C524.206 530 537.872 526.333 549.539 519C561.206 511.333 570.206 501.167 576.539 488.5C582.872 475.833 586.039 461.5 586.039 445.5C586.039 429.833 582.872 415.667 576.539 403C570.206 390 561.206 379.833 549.539 372.5C537.872 364.833 524.206 361 508.539 361C492.539 361 478.706 364.833 467.039 372.5C455.706 379.833 446.706 389.833 440.039 402.5C433.706 415.167 430.539 429.5 430.539 445.5C430.539 461.167 433.706 475.5 440.039 488.5C446.706 501.167 455.706 511.333 467.039 519C478.706 526.333 492.539 530 508.539 530ZM776.797 573C754.13 573 736.297 566.5 723.297 553.5C710.63 540.5 704.297 522.833 704.297 500.5V254H761.297V498C761.297 505.667 763.63 512 768.297 517C772.964 521.667 779.13 524 786.797 524H840.297V573H776.797ZM660.297 367V318H840.797V367H660.297Z"
  />
);

function DotLogo({ height, color }: { height: number; color: string }) {
  return (
    <svg viewBox="33 219 978 364" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dot" style={{ height, width: "auto", color, display: "block" }}>
      {DOT_MARK}
      <path d="M955.367 324C942.709 324 931.316 318.987 921.19 308.962C911.063 298.937 906 287.658 906 275.127C906 260.924 911.063 249.228 921.19 240.038C931.316 230.013 942.709 225 955.367 225C969.713 225 981.527 230.013 990.81 240.038C1000.94 249.228 1006 260.924 1006 275.127C1006 283.481 1003.47 291.418 998.405 298.937C994.186 306.456 988.278 312.304 980.684 316.481C973.089 321.494 964.65 324 955.367 324Z" fill="#A9F413" />
      <path d="M955.367 448.5C942.709 448.5 931.316 443.487 921.19 433.462C911.063 423.437 906 412.158 906 399.627C906 385.424 911.063 373.728 921.19 364.538C931.316 354.513 942.709 349.5 955.367 349.5C969.713 349.5 981.527 354.513 990.81 364.538C1000.94 373.728 1006 385.424 1006 399.627C1006 407.981 1003.47 415.918 998.405 423.437C994.186 430.956 988.278 436.804 980.684 440.981C973.089 445.994 964.65 448.5 955.367 448.5Z" fill="#558CF0" />
      <path d="M955.367 573C942.709 573 931.316 567.987 921.19 557.962C911.063 547.937 906 536.658 906 524.127C906 509.924 911.063 498.228 921.19 489.038C931.316 479.013 942.709 474 955.367 474C969.713 474 981.527 479.013 990.81 489.038C1000.94 498.228 1006 509.924 1006 524.127C1006 532.481 1003.47 540.418 998.405 547.937C994.186 555.456 988.278 561.304 980.684 565.481C973.089 570.494 964.65 573 955.367 573Z" fill="#F62F2F" />
    </svg>
  );
}

const caseStudies = [
  {
    tag: "Caso 01 · Comercio y e-commerce",
    title: "Estado de pedidos, cambios y devoluciones",
    body: `El 70% de los mensajes de una tienda son "¿dónde está mi pedido?" y "¿tienen talla M?". El agente los resuelve consultando tu inventario y tu sistema de envíos.`,
    checks: ["Rastreo de pedidos en tiempo real", "Disponibilidad y precios desde tu catálogo", "Inicio de devoluciones sin tocar a tu equipo"],
    demo: { label: "Tienda · chat web", meta: "24/7", statusIcon: "plug", statusColor: "var(--status-success)", status: "Consultó inventario y política de devoluciones",
      msgs: [
        { agent: false, text: "tienen la chaqueta azul en talla M?" },
        { agent: true, text: "Sí, quedan 3 en talla M en la sucursal de Costa del Este y 8 en bodega. B/.89.00 con envío gratis." },
        { agent: false, text: "y si no me queda la puedo devolver?" },
        { agent: true, text: "Tienes 30 días para cambio o devolución. Te genero la etiqueta de retorno desde aquí cuando la necesites." },
      ] },
    demoFirst: false,
  },
  {
    tag: "Caso 02 · Citas y servicios profesionales",
    title: "Agendar, reprogramar y recordar citas",
    body: "Clínicas, talleres, salones y despachos pierden horas al teléfono coordinando agenda. El agente lo hace por WhatsApp, conectado a tu calendario real.",
    checks: ["Disponibilidad real, sin doble reserva", "Recordatorios automáticos que bajan ausencias", "Preparación previa de la cita y requisitos"],
    demo: { label: "Clínica · WhatsApp", meta: "Agenda", statusIcon: "check-circle", statusColor: "var(--status-success)", status: "Cita modificada en la agenda · sin llamadas",
      msgs: [
        { agent: false, text: "Buenas, necesito mover mi cita del jueves" },
        { agent: true, text: "Tienes cita el jueves 19 a las 10:30 con la Dra. Herrera. Hay espacio el viernes 20 a las 9:00 o el lunes 23 a las 15:00." },
        { agent: false, text: "el viernes a las 9 está bien" },
        { agent: true, text: "Listo, reagendada para el viernes 20 a las 9:00. Te envío un recordatorio el día anterior." },
      ] },
    demoFirst: true,
  },
  {
    tag: "Caso 03 · Logística y transporte",
    title: "Rastreo de envíos y coordinación de entregas",
    body: "Tus clientes preguntan por su guía a toda hora. El agente consulta el estado, explica retrasos y coordina la reprogramación de la entrega sin ocupar a tu equipo de operaciones.",
    checks: ["Estado por número de guía o de factura", "Reprogramación de entregas y ventanas horarias", "Escalamiento a operaciones cuando hay incidencia"],
    demo: { label: "Courier · WhatsApp", meta: "Tracking", statusIcon: "check-circle", statusColor: "var(--status-success)", status: "Entrega reprogramada en el sistema de rutas",
      msgs: [
        { agent: false, text: "mi guía PA-7741902 dice en tránsito desde el lunes" },
        { agent: true, text: "Tu paquete llegó al centro de distribución de Tocumen anoche. Está asignado a la ruta de hoy, entrega estimada entre 2pm y 6pm." },
        { agent: false, text: "hoy no hay nadie, puede ser mañana?" },
        { agent: true, text: "Reprogramada para mañana 9am–1pm. El conductor te escribe 30 minutos antes de llegar." },
      ] },
    demoFirst: false,
  },
];

export default function DotPage() {
  return (
    <>
      <div className="subnav">
        <SubNav active="dot" cta={<a href="mailto:contact@blaisetechnology.com?subject=Consulta%201:1%20gratuita" className="subnav-cta">Consulta 1:1 gratuita</a>} />
        <header className="pagehead">
          <div className="wrap pagehead-row">
            <div className="pagehead-brand">
              <DotLogo height={21} color="var(--text-strong)" />
              <span className="byline">
                un producto de
                <img data-logo-light src="/assets/blaise-logo.svg" alt="Blaise" style={{ height: 18, width: "auto", display: "inline-block" }} />
                <img data-logo-dark src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 18, width: "auto" }} />
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <a href="#casos" className="textlink">Casos de uso</a>
              <a href="#como" className="textlink">Cómo lo construimos</a>
              <a href="#agendar" className="btn btn-primary btn-sm">Agendar llamada</a>
            </div>
          </div>
        </header>
      </div>

      <section style={{ position: "relative", background: "var(--surface-inverse)", overflow: "hidden" }}>
        <span style={{ position: "absolute", insetInline: 0, top: 0, height: 4, background: "var(--brand-gradient)" }} />
        <div className="wrap section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
          <div>
            <p className="eyebrow eyebrow-teal">Dot · Agentes de servicio con IA</p>
            <h1 className="pretty" style={{ margin: "0 0 20px", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.028em", color: "var(--text-on-inverse)" }}>
              Atiende a tus clientes 24/7 con un agente que conoce tu negocio
            </h1>
            <p className="pretty" style={{ margin: "0 0 32px", maxWidth: 620, fontSize: "clamp(16px, 1.5vw, 18px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
              Diseñamos, construimos y conectamos tu agente de servicio al cliente con modelos de lenguaje. Responde las
              preguntas repetitivas al instante, consulta tus sistemas y pasa la conversación a una persona cuando hace
              falta.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a href="#agendar" className="btn btn-gradient btn-lg">Agendar llamada de diseño</a>
              <a href="#casos" className="btn btn-inverse btn-lg">Ver casos de uso</a>
            </div>
            <p style={{ margin: "20px 0 0", fontSize: 14, color: "var(--text-on-inverse-muted)" }}>
              30 minutos · sin costo · salimos con el alcance de tu agente definido
            </p>
          </div>

          <div style={{ background: "var(--surface-inverse-raised)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", borderBottom: "1px solid var(--line-inverse)" }}>
              <span style={{ width: 30, height: 30, borderRadius: 999, background: "var(--action-primary)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>D</span>
              <div style={{ marginRight: "auto" }}>
                <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "var(--text-on-inverse)" }}>Dot · Agente de soporte</p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--brand-teal)" }}>En línea · responde en segundos</p>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-inverse-muted)" }}>WhatsApp</span>
            </div>
            <DotDemo style={{ display: "flex", flexDirection: "column", gap: 12, padding: "20px 18px", minHeight: 360, justifyContent: "flex-start" }}>
              <div className="dot-msg" style={{ alignSelf: "flex-end", maxWidth: "78%", background: "rgba(255,255,255,0.10)", borderRadius: "14px 14px 4px 14px", padding: "11px 14px" }}>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "var(--text-on-inverse)" }}>Hola, compré ayer y quiero saber cuándo llega mi pedido</p>
              </div>
              <div className="dot-typing" style={{ alignSelf: "flex-start", gap: 5, alignItems: "center", background: "var(--action-primary)", borderRadius: "14px 14px 14px 4px", padding: "13px 14px" }}>
                <span className="dot-dot" style={{ width: 6, height: 6, borderRadius: 999, background: "#fff" }} />
                <span className="dot-dot" style={{ width: 6, height: 6, borderRadius: 999, background: "#fff" }} />
                <span className="dot-dot" style={{ width: 6, height: 6, borderRadius: 999, background: "#fff" }} />
              </div>
              <div className="dot-msg" data-agent="1" style={{ alignSelf: "flex-start", maxWidth: "82%", background: "var(--action-primary)", borderRadius: "14px 14px 14px 4px", padding: "11px 14px" }}>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "#fff" }}>
                  ¡Claro! Tu pedido <span style={{ fontFamily: "var(--font-mono)", fontSize: 13.5 }}>#48192</span> salió del almacén esta mañana y llega mañana entre 9am y 1pm.
                </p>
              </div>
              <div className="dot-msg" style={{ alignSelf: "flex-end", maxWidth: "78%", background: "rgba(255,255,255,0.10)", borderRadius: "14px 14px 4px 14px", padding: "11px 14px" }}>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "var(--text-on-inverse)" }}>¿Puedo cambiar la dirección de entrega?</p>
              </div>
              <div className="dot-msg" data-agent="1" style={{ alignSelf: "flex-start", maxWidth: "82%", background: "var(--action-primary)", borderRadius: "14px 14px 14px 4px", padding: "11px 14px" }}>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "#fff" }}>Sí, hasta las 6pm de hoy. Escríbeme la nueva dirección y la actualizo en el sistema.</p>
              </div>
              <div className="dot-msg" style={{ alignSelf: "center", display: "flex", alignItems: "center", gap: 8 }}>
                <Icon name="check-circle" size={15} color="var(--brand-teal)" />
                <span style={{ fontSize: 12.5, color: "var(--brand-teal)" }}>Resuelto sin agente humano · 41 segundos</span>
              </div>
            </DotDemo>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <Reveal mode="single">
          <p className="eyebrow">Qué es Dot</p>
          <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
            No es un chatbot de árbol de opciones
          </h2>
          <p className="pretty" style={{ margin: "0 0 40px", maxWidth: 760, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
            Dot es un agente construido sobre modelos de lenguaje que entiende cómo escriben tus clientes, consulta tus
            sistemas antes de responder y sabe cuándo pasar la conversación a tu equipo. Lo diseñamos con tu información,
            tu tono y tus reglas de negocio.
          </p>
        </Reveal>

        <Reveal mode="stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {[
            { icon: "message-circle", title: "Conversa como tu equipo", body: "Entiende mensajes con errores, audios transcritos y preguntas sueltas. Responde en el tono que defines tú." },
            { icon: "plug", title: "Consulta tus sistemas", body: "Lo conectamos a tu inventario, tu CRM, tu sistema de envíos o tu agenda para que responda con datos reales." },
            { icon: "users", title: "Sabe cuándo pasar a un humano", body: "Reclamos, casos sensibles o cualquier tema que definas se transfieren con todo el contexto de la conversación." },
            { icon: "bar-chart-3", title: "Aprende de lo que preguntan", body: "Cada mes revisamos las conversaciones reales y ajustamos el agente con lo que tus clientes realmente preguntan." },
          ].map((f) => (
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

      <section id="casos" style={{ background: "var(--surface-panel)", borderTop: "1px solid var(--line-default)", borderBottom: "1px solid var(--line-default)" }}>
        <div className="wrap section">
          <Reveal mode="single">
            <p className="eyebrow">Casos de uso</p>
            <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
              Cuatro agentes que ya sabemos construir
            </h2>
            <p className="pretty" style={{ margin: "0 0 56px", maxWidth: 760, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
              Cada demo muestra una conversación real del tipo que atiende el agente. El tuyo se diseña con tus reglas, tus
              sistemas y tu catálogo.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px,6vw,72px)" }}>
            {caseStudies.map((c, idx) => {
              const textBlock = (
                <div>
                  <p style={{ margin: "0 0 12px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--sky-400)" }}>{c.tag}</p>
                  <h3 className="pretty" style={{ margin: "0 0 14px", fontWeight: 700, fontSize: "clamp(21px, 2.2vw, 26px)", lineHeight: 1.22, letterSpacing: "-0.02em" }}>{c.title}</h3>
                  <p className="pretty" style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.62, color: "var(--text-muted)" }}>{c.body}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {c.checks.map((chk) => (
                      <div key={chk} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <Icon name="check" size={18} color="var(--sky-400)" />
                        <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-muted)" }}>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
              const demoBlock = (
                <div style={{ background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderBottom: "1px solid var(--line-default)", background: "var(--surface-sunken)" }}>
                    <span style={{ width: 26, height: 26, borderRadius: 999, background: "var(--action-primary)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>D</span>
                    <p style={{ margin: 0, marginRight: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)" }}>{c.demo.label}</p>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>{c.demo.meta}</span>
                  </div>
                  <DotDemo delay={idx * 260} style={{ display: "flex", flexDirection: "column", gap: 11, padding: "18px 16px", minHeight: 320, justifyContent: "flex-start", background: "var(--surface-page)" }}>
                    {c.demo.msgs.map((m, i) => (
                      <div
                        key={i}
                        className="dot-msg"
                        data-agent={m.agent ? "1" : undefined}
                        style={{
                          alignSelf: m.agent ? "flex-start" : "flex-end",
                          maxWidth: m.agent ? "84%" : "80%",
                          background: m.agent ? "var(--action-primary)" : "var(--surface-sunken)",
                          border: m.agent ? undefined : "1px solid var(--line-subtle)",
                          borderRadius: m.agent ? "14px 14px 14px 4px" : "14px 14px 4px 14px",
                          padding: "10px 13px",
                        }}
                      >
                        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: m.agent ? "#fff" : "var(--text-body)" }}>{m.text}</p>
                      </div>
                    ))}
                    <div className="dot-msg" style={{ alignSelf: "center", display: "flex", alignItems: "center", gap: 8 }}>
                      <Icon name={c.demo.statusIcon} size={15} color={c.demo.statusColor} />
                      <span style={{ fontSize: 12.5, color: c.demo.statusColor }}>{c.demo.status}</span>
                    </div>
                  </DotDemo>
                </div>
              );
              return (
                <div key={c.tag} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(28px,4vw,48px)", alignItems: "center" }}>
                  {c.demoFirst ? (
                    <>
                      {demoBlock}
                      {textBlock}
                    </>
                  ) : (
                    <>
                      {textBlock}
                      {demoBlock}
                    </>
                  )}
                </div>
              );
            })}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(28px,4vw,48px)", alignItems: "center" }}>
              <div style={{ background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderBottom: "1px solid var(--line-default)", background: "var(--surface-sunken)" }}>
                  <span style={{ width: 26, height: 26, borderRadius: 999, background: "var(--action-primary)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>D</span>
                  <p style={{ margin: 0, marginRight: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)" }}>Servicios · chat web</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>Cobros</span>
                </div>
                <DotDemo delay={780} style={{ display: "flex", flexDirection: "column", gap: 11, padding: "18px 16px", minHeight: 320, justifyContent: "flex-start", background: "var(--surface-page)" }}>
                  <div className="dot-msg" style={{ alignSelf: "flex-end", maxWidth: "80%", background: "var(--surface-sunken)", border: "1px solid var(--line-subtle)", borderRadius: "14px 14px 4px 14px", padding: "10px 13px" }}>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "var(--text-body)" }}>me cobraron dos veces este mes y quiero que me devuelvan</p>
                  </div>
                  <div className="dot-msg" data-agent="1" style={{ alignSelf: "flex-start", maxWidth: "84%", background: "var(--action-primary)", borderRadius: "14px 14px 14px 4px", padding: "10px 13px" }}>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "#fff" }}>Veo dos cargos de B/.42.00 el 03/09. Es un caso de facturación, te paso con Ana del equipo de cobros con todo el detalle.</p>
                  </div>
                  <div className="dot-msg" style={{ alignSelf: "center", maxWidth: "92%", background: "var(--surface-accent-soft)", borderRadius: "var(--radius-md)", padding: "9px 13px" }}>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "var(--action-primary-active)", textAlign: "center" }}>Transferido a Ana Quintero · Cobros · con historial adjunto</p>
                  </div>
                  <div className="dot-msg" data-agent="1" style={{ alignSelf: "flex-start", maxWidth: "84%", background: "var(--surface-panel)", border: "1px solid var(--line-default)", borderRadius: "14px 14px 14px 4px", padding: "10px 13px" }}>
                    <p style={{ margin: "0 0 4px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, color: "var(--sky-400)" }}>Ana · Cobros</p>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, color: "var(--text-body)" }}>Ya vi el duplicado, proceso el reembolso hoy mismo. Llega en 3 días hábiles.</p>
                  </div>
                  <div className="dot-msg" style={{ alignSelf: "center", display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon name="users" size={15} color="var(--status-success)" />
                    <span style={{ fontSize: 12.5, color: "var(--status-success)" }}>Escalado a humano con contexto completo</span>
                  </div>
                </DotDemo>
              </div>
              <div>
                <p style={{ margin: "0 0 12px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--sky-400)" }}>Caso 04 · Facturación y cobros</p>
                <h3 className="pretty" style={{ margin: "0 0 14px", fontWeight: 700, fontSize: "clamp(21px, 2.2vw, 26px)", lineHeight: 1.22, letterSpacing: "-0.02em" }}>
                  Consultas de cuenta y escalamiento con contexto
                </h3>
                <p className="pretty" style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.62, color: "var(--text-muted)" }}>
                  Los temas de dinero no se dejan a un bot solo. El agente identifica el caso, reúne la evidencia y
                  transfiere a la persona correcta con el historial listo — nadie repite su problema dos veces.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Estado de cuenta, cargos y comprobantes", "Reglas claras de qué nunca resuelve solo", "Transferencia con resumen para tu equipo"].map((chk) => (
                    <div key={chk} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <Icon name="check" size={18} color="var(--sky-400)" />
                      <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--text-muted)" }}>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como" className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
          <Reveal mode="single">
            <p className="eyebrow">Cómo lo construimos</p>
            <h2 className="pretty" style={{ margin: "0 0 18px", fontWeight: 800, fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.14, letterSpacing: "-0.026em" }}>
              De la llamada al agente en producción
            </h2>
            <p className="pretty" style={{ margin: 0, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-muted)" }}>
              Todo empieza con una llamada de 30 minutos sin costo. Salimos de ahí con el alcance definido: qué debe
              resolver el agente, con qué sistemas habla y qué nunca decide solo.
            </p>
          </Reveal>

          <div className="card card-accent" style={{ padding: 32 }}>
            <div style={{ display: "grid", gap: 22 }}>
              {[
                { n: "01", title: "Llamada de diseño", body: "Revisamos tus conversaciones actuales y elegimos los casos que valen la pena automatizar primero." },
                { n: "02", title: "Entrenamiento con tu información", body: "Catálogo, políticas, preguntas frecuentes y tono de tu marca. El agente responde con lo tuyo, no con generalidades." },
                { n: "03", title: "Integración y pruebas", body: "Lo conectamos a WhatsApp, tu web o tu canal actual, y a los sistemas que debe consultar. Probamos con casos reales antes de abrirlo." },
                { n: "04", title: "Ajuste continuo", body: "Revisamos qué preguntó la gente, qué resolvió el agente y qué se escaló. Con eso lo mejoramos mes a mes." },
              ].map((row, i, arr) => (
                <div key={row.n}>
                  <div style={{ display: "grid", gridTemplateColumns: "34px minmax(0, 1fr)", gap: 16, alignItems: "start" }}>
                    <span style={{ width: 34, height: 34, borderRadius: 999, background: "var(--surface-accent-soft)", color: "var(--action-primary-active)", fontFamily: "var(--font-mono)", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {row.n}
                    </span>
                    <div>
                      <p style={{ margin: "0 0 4px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16.5, color: "var(--text-strong)" }}>{row.title}</p>
                      <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-muted)" }}>{row.body}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && <div style={{ height: 1, background: "var(--line-subtle)", marginTop: 22 }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="agendar" style={{ background: "var(--surface-inverse)" }}>
        <div className="wrap section">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px,4vw,48px)", alignItems: "start" }}>
            <div>
              <p className="eyebrow eyebrow-teal">Agenda tu llamada</p>
              <h2 className="pretty" style={{ margin: "0 0 16px", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.12, letterSpacing: "-0.028em", color: "var(--text-on-inverse)" }}>
                Diseñemos tu agente en 30 minutos
              </h2>
              <p className="pretty" style={{ margin: "0 0 28px", maxWidth: 560, fontSize: "clamp(15.5px, 1.4vw, 17px)", lineHeight: 1.62, color: "var(--text-on-inverse-muted)" }}>
                Escríbenos con una línea sobre tu negocio y por dónde te escriben tus clientes hoy. Te respondemos con
                horarios el mismo día hábil.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="mailto:contact@blaisetechnology.com?subject=Agendar%20llamada%20Dot%20%C2%B7%20agente%20de%20servicio%20con%20IA" className="btn btn-gradient btn-lg">Agendar llamada gratuita</a>
                <a href="mailto:contact@blaisetechnology.com?subject=Informaci%C3%B3n%20sobre%20Dot" className="btn btn-inverse btn-lg">Solicitar información</a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, background: "var(--surface-inverse-raised)", border: "1px solid var(--line-inverse)", borderRadius: "var(--radius-xl)", padding: 28 }}>
              <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--text-on-inverse)" }}>Lleva esto a la llamada</p>
              {[
                { icon: "message-circle", text: "Por dónde te escriben tus clientes hoy" },
                { icon: "file-text", text: "Las 5 preguntas que más repiten" },
                { icon: "plug", text: "Qué sistemas usas (inventario, agenda, CRM)" },
                { icon: "users", text: "Quién debe recibir los casos escalados" },
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
              <DotLogo height={20} color="var(--text-on-inverse)" />
              <span style={{ fontSize: 12.5, color: "var(--text-on-inverse-muted)" }}>un producto de</span>
              <img src="/assets/blaise-logo-white.svg" alt="Blaise" style={{ height: 22, width: "auto", display: "block" }} />
            </div>
            <p style={{ margin: 0, fontSize: 13, color: "var(--text-on-inverse-muted)" }}>Blaise Technology LLC · Agentes de servicio con IA</p>
          </div>
        </div>
      </section>
    </>
  );
}
