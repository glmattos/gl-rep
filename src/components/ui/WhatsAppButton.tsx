"use client";

import { usePathname } from "next/navigation";

const PHONE = "5511915285462";

export function WhatsAppButton() {
  const pathname = usePathname();
  const text = encodeURIComponent(
    `Olá! Vim pelo site da ABC Fly Expeditions (${pathname}) e quero conversar sobre uma expedição.`,
  );

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${text}`}
      className="whatsapp-float link-focus"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      WhatsApp
    </a>
  );
}
