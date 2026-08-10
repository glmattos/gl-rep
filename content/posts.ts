import type { DiaryPost } from "@/lib/types";

export const posts: DiaryPost[] = [
  {
    slug: "onde-o-mapa-nao-grita",
    title: "Onde o mapa não grita, mas sussurra",
    excerpt:
      "Por que a ABC Fly Expeditions existe — e o que muda quando a viagem deixa de ser pacote.",
    body: [
      "Há destinos que gritam nos feeds. E há lugares que pedem silêncio, atenção e coragem para ir além do óbvio.",
      "A ABC Fly Expeditions nasceu como braço de aventura de uma agência com mais de 21 anos — para conectar exploradores a jornadas reais, com segurança e curadoria.",
      "Não vendemos checkout. Criamos propostas personalizadas, porque cada grupo tem um ritmo, um medo e um sonho diferentes.",
      "Se você sente que o próximo capítulo da sua vida precisa de horizonte — comece por uma expedição. O resto a gente desenha juntos.",
    ],
    heroImage: "/images/hero-antarctica.jpg",
    publishedAt: "2026-07-30",
    relatedExpeditionSlugs: [
      "cruzeiro-antartica-mv-ushuaia",
      "nepal-everest-base-camp",
    ],
    tags: ["marca", "filosofia"],
  },
  {
    slug: "peru-em-10-dias",
    title: "Peru em 10 dias: deserto, montanhas e aventura",
    excerpt:
      "Lima, Huacachina e Cusco em um ritmo humano — gastronomia, cultura e adrenalina sem corrida turística.",
    body: [
      "O Peru sempre esteve na lista. A diferença está no ritmo: menos checklist, mais presença.",
      "Entre a costa, o deserto e os Andes, a viagem vira encontro — com a comida, com a altitude e com pessoas do mundo inteiro.",
      "Se o seu desejo é América do Sul com camada cultural e natureza, há expedições e roteiros sob medida esperando o seu perfil.",
    ],
    heroImage: "/images/hero-nature.jpg",
    publishedAt: "2026-07-30",
    relatedExpeditionSlugs: [
      "chapada-dos-veadeiros-essencial",
      "torres-del-paine-eco-camp",
    ],
    tags: ["américa do sul", "inspiração"],
  },
  {
    slug: "bike-na-escocia",
    title: "Explore os roteiros de bike mais incríveis na Escócia",
    excerpt:
      "Lochs, Highlands e a sensação de pedalar dentro de um filme épico — com suporte e curadoria.",
    body: [
      "Pedalar pela Escócia é sentir o relevo e ouvir o vento mudar a cada vale.",
      "Não se trata de performance. É imersão: vilarejos, água escura dos lochs e o prazer de chegar pelo próprio esforço.",
      "Nossa expedição na região do Lago Ness foi desenhada para quem quer aventura com logística inteligente.",
    ],
    heroImage: "/images/gallery-mountain.jpg",
    publishedAt: "2026-07-30",
    relatedExpeditionSlugs: ["escocia-bike-lago-ness"],
    tags: ["bike", "europa"],
  },
  {
    slug: "planeje-aventura-de-luxo",
    title: "Como planejar uma aventura de luxo de verdade",
    excerpt:
      "Conforto e selvageria podem coexistir — quando a curadoria vem antes do Instagram.",
    body: [
      "Luxo, para nós, não é excesso. É precisão: o guia certo, a janela climática, o transfer que não falha, o silêncio quando importa.",
      "Uma boa expedição de alto padrão começa com perguntas honestas sobre nível físico, expectativas e medo.",
      "Por isso o orçamento personalizado é o coração do site — ele traduz desejo em operação.",
    ],
    heroImage: "/images/hero-alaska.jpg",
    publishedAt: "2026-07-30",
    relatedExpeditionSlugs: [
      "silversea-alasca-vancouver-seward",
      "aria-amazon-aqua-expeditions",
      "finlandia-aurora-rovaniemi",
    ],
    tags: ["planejamento", "luxo"],
  },
];
