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
  keywords: [
    "consultoría tecnológica Panamá",
    "desarrollo de software a medida",
    "inteligencia artificial",
    "facturación electrónica Panamá",
    "AWS Panamá",
    "agente IA servicio al cliente",
    "web scraping",
    "Blaise Technology",
  ],
  icons: {
    icon: [
      { url: "/assets/blaise-mark.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    siteName: "Blaise",
    url: "https://blaisetechnology.com",
    title: "Blaise — Consultoría tecnológica y desarrollo a medida",
    description:
      "Blaise es una empresa de tecnología en Panamá: consultoría, IA, nube AWS y facturación electrónica, con el software entregado por el mismo equipo que lo construye.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blaise — Consultoría tecnológica y desarrollo a medida",
    description:
      "Blaise es una empresa de tecnología en Panamá: consultoría, IA, nube AWS y facturación electrónica.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://blaisetechnology.com",
  },
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
