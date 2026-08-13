import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ABC Fly Expeditions | Explore Everything",
    template: "%s | ABC Fly Expeditions",
  },
  description:
    "Expedições de aventura autênticas. Explore destinos no Brasil e no mundo e solicite um orçamento personalizado com a ABC Fly Expeditions.",
  metadataBase: new URL("https://www.abcflyexpeditions.com"),
  openGraph: {
    title: "ABC Fly Expeditions",
    description: "Onde o mapa não grita, mas sussurra. Explore Everything.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
