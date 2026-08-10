import type { ActivityHub } from "@/lib/types";

export const activities: ActivityHub[] = [
  {
    slug: "navegacoes",
    name: "Navegações",
    tagline: "Jornadas que seguem as marés.",
    summary:
      "Do convédio de um navio de expedição aos canais da Amazônia: navegar é mudar a perspectiva — e o tempo.",
    heroImage: "/images/gallery-ocean.jpg",
    matchLabels: ["Navegações"],
  },
  {
    slug: "trekking",
    name: "Trekking",
    tagline: "O mundo se revela passo a passo.",
    summary:
      "Trilhas com aclimatização, suporte e respeito ao terreno — do Cerrado ao Himalaia e ao Kilimanjaro.",
    heroImage: "/images/hero-trek.jpg",
    matchLabels: ["Trekking"],
  },
  {
    slug: "bike",
    name: "Bike",
    tagline: "Liberdade sobre duas rodas.",
    summary:
      "Cicloturismo com suporte, paisagem e ritmo de imersão — a bike como ritual, não só transporte.",
    heroImage: "/images/gallery-mountain.jpg",
    matchLabels: ["Bike"],
  },
  {
    slug: "natureza-e-vida-selvagem",
    name: "Natureza & Vida Selvagem",
    tagline: "Encontros com o selvagem.",
    summary:
      "Observação responsável, ecossistemas frágeis e o privilégio de estar onde a natureza ainda dita as regras.",
    heroImage: "/images/hero-africa.jpg",
    matchLabels: ["Natureza & Vida Selvagem"],
  },
];
