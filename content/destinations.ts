import type { DestinationHub } from "@/lib/types";

export const destinations: DestinationHub[] = [
  {
    slug: "antartica",
    name: "Antártica",
    tagline: "O continente que quase ninguém pisa.",
    summary:
      "Expedições polares com desembarques em zodiac, fauna intocada e a travessia do Drake — para quem busca o remoto com segurança e curadoria.",
    heroImage: "/images/hero-antarctica.jpg",
    matchLabels: ["Antártica", "Argentina"],
  },
  {
    slug: "america-do-sul",
    name: "América do Sul",
    tagline: "Patagônia, Amazônia, Andes e Cerrado.",
    summary:
      "Do gelo da Patagônia às águas da Amazônia e às cachoeiras do Brasil: roteiros próximos e transformadores no nosso continente.",
    heroImage: "/images/hero-nature.jpg",
    matchLabels: ["América do Sul", "Brasil", "Argentina", "Chile", "Peru"],
  },
  {
    slug: "america-central",
    name: "América Central",
    tagline: "Selva, vulcões e pura vida.",
    summary:
      "Costa Rica e vizinhos: biodiversidade concentrada, boa infraestrutura e aventura com espírito leve.",
    heroImage: "/images/gallery-waterfall.jpg",
    matchLabels: ["América Central", "Costa Rica"],
  },
  {
    slug: "america-do-norte",
    name: "América do Norte",
    tagline: "Fiordes, parques e fronteiras selvagens.",
    summary:
      "Alasca, Canadá e os grandes parques americanos — navegações e travessias onde a escala da natureza redefine a viagem.",
    heroImage: "/images/hero-alaska.jpg",
    matchLabels: ["América do Norte", "Canadá", "Estados Unidos"],
  },
  {
    slug: "africa",
    name: "África",
    tagline: "Cumes, savanas e horizontes infinitos.",
    summary:
      "Kilimanjaro, safáris e paisagens que pedem presença. Expedições com equipe local e protocolo sério de segurança.",
    heroImage: "/images/hero-africa.jpg",
    matchLabels: ["África", "Tanzânia", "Quênia", "Namíbia", "África do Sul"],
  },
  {
    slug: "asia",
    name: "Ásia",
    tagline: "Himalaia, ilhas e caminhos ancestrais.",
    summary:
      "Do Campo Base do Everest às ilhas da Indonésia: jornadas de altitude, cultura e água cristalina.",
    heroImage: "/images/hero-trek.jpg",
    matchLabels: ["Ásia", "Nepal", "Indonésia", "Tailândia", "Butão"],
  },
  {
    slug: "europa",
    name: "Europa",
    tagline: "Highlands, auroras e estradas cênicas.",
    summary:
      "Escócia de bike, Lapônia finlandesa e roteiros onde a aventura encontra conforto europeu bem curado.",
    heroImage: "/images/gallery-mountain.jpg",
    matchLabels: ["Europa", "Escócia", "Finlândia", "Islândia"],
  },
];
