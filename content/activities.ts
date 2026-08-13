import type { ActivityHub } from "@/lib/types";

/**
 * Experiências organizadas por categoria.
 * Categorias sem expedição vinculada permanecem como estrutura editorial pronta.
 */
export const activities: ActivityHub[] = [
  {
    slug: "aventura",
    name: "Aventura",
    tagline: "O corpo em movimento, a mente acordada.",
    summary:
      "Expedições onde o desafio físico faz parte da narrativa — com segurança, ritmo e propósito.",
    heroImage: "/images/gallery-adventure.jpg",
    matchLabels: ["Trekking", "Bike", "Aventura"],
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
    slug: "natureza-e-vida-selvagem",
    name: "Natureza & Wildlife",
    tagline: "Encontros com o selvagem.",
    summary:
      "Observação responsável, ecossistemas frágeis e o privilégio de estar onde a natureza ainda dita as regras.",
    heroImage: "/images/hero-africa.jpg",
    matchLabels: ["Natureza & Vida Selvagem"],
  },
  {
    slug: "surf",
    name: "Surf",
    tagline: "O oceano como território de exploração.",
    summary:
      "Viagens onde a onda, a cultura costeira e o ritmo do mar guiam a jornada. Conteúdo e roteiros em expansão.",
    heroImage: "/images/hero-surf.jpg",
    matchLabels: ["Surf"],
  },
  {
    slug: "navegacoes",
    name: "Navegações",
    tagline: "Jornadas que seguem as marés.",
    summary:
      "Do convés de um navio de expedição aos canais da Amazônia: navegar é mudar a perspectiva — e o tempo.",
    heroImage: "/images/hero-ocean.jpg",
    matchLabels: ["Navegações"],
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
    slug: "cultura",
    name: "Cultura",
    tagline: "Lugares que se entendem pelas pessoas.",
    summary:
      "Roteiros em que templos, vilarejos e histórias locais entram no itinerário com o mesmo peso da paisagem.",
    heroImage: "/images/hero-desert.jpg",
    matchLabels: ["Cultura"],
  },
  {
    slug: "gastronomia",
    name: "Gastronomia",
    tagline: "Sabor como mapa.",
    summary:
      "Experiências em que a mesa revela o território. Estrutura pronta para roteiros gastronômicos da ABC Fly.",
    heroImage: "/images/hero-coast.jpg",
    matchLabels: ["Gastronomia"],
  },
  {
    slug: "backpacking",
    name: "Backpacking",
    tagline: "Mochila leve, horizonte largo.",
    summary:
      "Jornadas com autonomia, ritmo de trilha e espírito mochileiro — sem abrir mão de operação segura.",
    heroImage: "/images/hero-nepal.jpg",
    matchLabels: ["Trekking", "Backpacking"],
  },
  {
    slug: "voluntariado",
    name: "Voluntariado",
    tagline: "Viajar e deixar algo melhor.",
    summary:
      "Espaço editorial para experiências de impacto e voluntariado responsáveis — conteúdo em curadoria.",
    heroImage: "/images/hero-forest.jpg",
    matchLabels: ["Voluntariado"],
  },
  {
    slug: "expedicoes",
    name: "Expedições",
    tagline: "Quando a viagem vira exploração.",
    summary:
      "O núcleo da ABC Fly: roteiros com narrativa, equipe e logística para ir além do turismo comum.",
    heroImage: "/images/hero-home.jpg",
    matchLabels: [
      "Trekking",
      "Navegações",
      "Bike",
      "Natureza & Vida Selvagem",
    ],
  },
];
