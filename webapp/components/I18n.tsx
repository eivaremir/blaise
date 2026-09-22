export function Es({ children, inline = false }: { children: React.ReactNode; inline?: boolean }) {
  return <span className={`i18n-es${inline ? " inline" : ""}`}>{children}</span>;
}

export function En({ children, inline = false }: { children: React.ReactNode; inline?: boolean }) {
  return <span className={`i18n-en${inline ? " inline" : ""}`}>{children}</span>;
}
