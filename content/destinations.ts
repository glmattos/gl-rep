import type { DestinationHub } from "@/lib/types";

/**
 * Destinos reais da ABC Fly — continentes + países com conteúdo/expedições.
 * Não inventamos destinos sem lastro; hubs sem expedição ficam como descoberta editorial.
 */
export const destinations: DestinationHub[] = [
  {
    slug: "nepal",
    name: "Nepal",
    tagline: "Himalaia, altitude e silêncio sagrado.",
    summary:
      "Trekkings com aclimatização e equipe local — do Campo Base do Everest aos vales que ensinam o ritmo da montanha.",
    heroImage: "/images/hero-nepal.jpg",
    matchLabels: ["Nepal", "Ásia"],
  },
  {
    slug: "peru",
    name: "Peru",
    tagline: "Amazônia, Andes e encontros com o remoto.",
    summary:
      "Navegações no Amazonas e roteiros andinos com curadoria — natureza densa, cultura viva e operação séria.",
    heroImage: "/images/hero-forest.jpg",
    matchLabels: ["Peru", "América do Sul"],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    tagline: "Pura vida: vulcão, selva e costa.",
    summary:
      "Biodiversidade concentrada, boa infraestrutura e aventura com espírito leve — natureza em estado puro.",
    heroImage: "/images/gallery-waterfall.jpg",
    matchLabels: ["Costa Rica", "América Central"],
  },
  {
    slug: "tanzania",
    name: "Tanzânia",
    tagline: "Kilimanjaro e o horizonte africano.",
    summary:
      "A subida pela Lemosho e a escala da savana — expedições com protocolo de altitude e equipe local experiente.",
    heroImage: "/images/hero-kilimanjaro.jpg",
    matchLabels: ["Tanzânia", "África"],
  },
  {
    slug: "indonesia",
    name: "Indonésia",
    tagline: "Ilhas, cultura e água cristalina.",
    summary:
      "Bali, Gili e Lombok: entre templos, vulcões e mar — ritmo de exploração com liberdade e presença.",
    heroImage: "/images/hero-surf.jpg",
    matchLabels: ["Indonésia", "Ásia"],
  },
  {
    slug: "antartica",
    name: "Antártica",
    tagline: "O continente que quase ninguém pisa.",
    summary:
      "Expedições polares com desembarques em zodiac, fauna intocada e a travessia do Drake.",
    heroImage: "/images/hero-antarctica.jpg",
    matchLabels: ["Antártica", "Argentina"],
  },
  {
    slug: "chile",
    name: "Chile / Patagônia",
    tagline: "Torres, ventos e gelo no fim do mundo.",
    summary:
      "Trekkings na Patagônia chilena com apoio, ritmo humano e paisagens que reescrevem a escala.",
    heroImage: "/images/hero-patagonia.jpg",
    matchLabels: ["Chile", "América do Sul"],
  },
  {
    slug: "brasil",
    name: "Brasil",
    tagline: "Cerrado, água e horizontes próximos.",
    summary:
      "Chapada dos Veadeiros e roteiros nacionais com a mesma curadoria das grandes expedições internacionais.",
    heroImage: "/images/gallery-waterfall.jpg",
    matchLabels: ["Brasil", "América do Sul"],
  },
  {
    slug: "alasca",
    name: "Alasca",
    tagline: "Fiordes, glaciares e Inside Passage.",
    summary:
      "Navegações de expedição entre Vancouver e Seward — natureza em escala continental.",
    heroImage: "/images/hero-alaska.jpg",
    matchLabels: ["Estados Unidos", "Canadá", "América do Norte"],
  },
  {
    slug: "finlandia",
    name: "Finlândia",
    tagline: "Aurora, floresta boreal e noite polar.",
    summary:
      "Lapônia com conforto inteligente: observação da aurora, natureza árica e ritmo de inverno.",
    heroImage: "/images/hero-ice.jpg",
    matchLabels: ["Finlândia", "Europa"],
  },
  {
    slug: "escocia",
    name: "Escócia",
    tagline: "Highlands, lochs e liberdade sobre duas rodas.",
    summary:
      "Cicloturismo com suporte e paisagem épica — a Escócia vivida no ritmo da bike.",
    heroImage: "/images/gallery-mountain.jpg",
    matchLabels: ["Escócia", "Europa"],
  },
  {
    slug: "america-do-sul",
    name: "América do Sul",
    tagline: "Patagônia, Amazônia, Andes e Cerrado.",
    summary:
      "Do gelo da Patagônia às águas da Amazônia e às cachoeiras do Brasil.",
    heroImage: "/images/hero-patagonia.jpg",
    matchLabels: ["América do Sul", "Brasil", "Argentina", "Chile", "Peru"],
  },
  {
    slug: "africa",
    name: "África",
    tagline: "Cumes, savanas e horizontes infinitos.",
    summary:
      "Kilimanjaro e paisagens que pedem presença — com equipe local e protocolo sério de segurança.",
    heroImage: "/images/hero-africa.jpg",
    matchLabels: ["África", "Tanzânia", "Quênia", "Namíbia", "África do Sul"],
  },
  {
    slug: "asia",
    name: "Ásia",
    tagline: "Himalaia, ilhas e caminhos ancestrais.",
    summary:
      "Do Campo Base do Everest às ilhas da Indonésia: altitude, cultura e água.",
    heroImage: "/images/hero-nepal.jpg",
    matchLabels: ["Ásia", "Nepal", "Indonésia", "Tailândia", "Butão"],
  },
  {
    slug: "europa",
    name: "Europa",
    tagline: "Highlands, auroras e estradas cênicas.",
    summary:
      "Escócia de bike, Lapônia finlandesa e roteiros onde a aventura encontra conforto europeu.",
    heroImage: "/images/hero-coast.jpg",
    matchLabels: ["Europa", "Escócia", "Finlândia", "Islândia", "Portugal"],
  },
];
