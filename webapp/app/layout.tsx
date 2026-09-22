import type { Metadata } from "next";
import { Manrope, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blaisetechnology.com"),
  title: {
    default: "Blaise — Consultoría tecnológica y desarrollo a medida",
    template: "%s | Blaise",
  },
  description:
    "Blaise es una empresa de tecnología en Panamá: consultoría, IA, nube AWS y facturación electrónica, con el software entregado por el mismo equipo que lo construye.",
  icons: { icon: "/assets/blaise-mark.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
