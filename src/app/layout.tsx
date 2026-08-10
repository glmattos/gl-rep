import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ABC Fly Expeditions | Expedições de aventura",
    template: "%s | ABC Fly Expeditions",
  },
  description:
    "Expedições de aventura com curadoria, segurança e sofisticação. Solicite um orçamento personalizado — sem e-commerce de pacotes.",
  metadataBase: new URL("https://www.abcflyexpeditions.com"),
  openGraph: {
    title: "ABC Fly Expeditions",
    description:
      "Onde o mapa não grita, mas sussurra. Explore Everything.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
