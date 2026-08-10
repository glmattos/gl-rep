import type { Expedition } from "@/lib/types";

/**
 * Conteúdo editorial das expedições.
 * Em produção, este arquivo é substituído pelo Sanity CMS.
 * As datas/saídas ficam em content/departures.json (tabela editável).
 */
export const expeditions: Expedition[] = [
  {
    slug: "cruzeiro-antartica-mv-ushuaia",
    title: "Cruzeiro na Antártica — Navio MV Ushuaia",
    tagline: "Cruzar o Drake e pisar no sétimo continente.",
    summary:
      "Expedição polar a bordo do MV Ushuaia: Passagem de Drake, Península Antártica, colônias de pinguins e desembarques diários em zodiac.",
    story:
      "A Antártica é o continente mais frio, isolado e selvagem do planeta — um paraíso quase intocado de gelo, montanhas e vida silvestre. Esta jornada começa em Ushuaia e cruza a lendária Passagem de Drake até a Península Antártica, no ritmo dos antigos exploradores, com equipe especializada em áreas polares.",
    heroImage:
      "/images/hero-antarctica.jpg",
    heroAlt: "Pinguins e paisagem glacial na Antártica",
    gallery: [
      {
        src: "/images/gallery-ice.jpg",
        alt: "Icebergs sob céu azul",
      },
      {
        src: "/images/gallery-ocean.jpg",
        alt: "Navio de expedição em águas polares",
      },
      {
        src: "/images/hero-antarctica.jpg",
        alt: "Colônia de pinguins na costa",
      },
    ],
    destinations: ["Antártica", "Argentina"],
    activities: ["Navegações", "Natureza & Vida Selvagem"],
    durationDays: 10,
    difficulty: 2,
    bestSeason: "Novembro a março",
    groupSize: "Até 90 passageiros",
    priceFrom: 32450,
    currency: "BRL",
    highlights: [
      "Travessia da Passagem de Drake",
      "Desembarques diários em zodiac",
      "Fauna: pinguins, focas e baleias",
      "Palestras com especialistas polares",
      "Navio intimista com serviço personalizado",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Ushuaia — Embarque",
        body: "Apresentação no porto de Ushuaia às 16h. Reunião de expedição a bordo e navegação pelo Canal de Beagle em direção à Passagem de Drake. Jantar incluso. Recomenda-se chegar a Ushuaia no dia anterior.",
      },
      {
        day: 2,
        title: "Cruzando a Passagem de Drake",
        body: "Travessia oceânica com cenários de outro planeta. Possível avistamento dos primeiros icebergs. Pensão completa a bordo.",
      },
      {
        day: 3,
        title: "Drake e Ilhas Shetland",
        body: "Aproximação das Ilhas Shetland do Sul. Se o clima permitir, primeiro desembarque para observar pinguins e focas.",
      },
      {
        day: 4,
        title: "Península Antártica",
        body: "Desembarques diários (em geral dois por dia, sujeitos ao clima). Colônias de pinguins, focas e paisagens glaciais.",
      },
      {
        day: 5,
        title: "Exploração costeira",
        body: "Navegação pela região, incluindo possíveis visitas a Deception Island e bases científicas, conforme condições.",
      },
      {
        day: 6,
        title: "Vida selvagem polar",
        body: "Continuidade dos desembarques e observação de fauna. Palestras a bordo com a equipe de expedição.",
      },
      {
        day: 7,
        title: "Últimos desembarques",
        body: "Encerramento das atividades em terra na Península Antártica, sempre respeitando o protocolo ambiental.",
      },
      {
        day: 8,
        title: "Retorno pelo Drake",
        body: "Navegação de regresso a Ushuaia. Tempo para processar a experiência e compartilhar histórias a bordo.",
      },
      {
        day: 9,
        title: "Drake — navegação",
        body: "Continuação da travessia com pensão completa inclusa.",
      },
      {
        day: 10,
        title: "Ushuaia — Desembarque",
        body: "Desembarque pela manhã (~8h). Fim dos serviços. Café da manhã incluso.",
      },
    ],
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-70%2C-66%2C-50%2C-54&layer=mapnik",
    includes: [
      "Hospedagem a bordo no MV Ushuaia",
      "Pensão completa conforme roteiro",
      "Desembarques em zodiac",
      "Equipe de expedição e palestras",
      "Taxas portuárias do navio",
    ],
    excludes: [
      "Trechos aéreos até Ushuaia",
      "Hospedagem pré/pós embarque",
      "Bebidas alcoólicas e extras",
      "Seguro viagem (obrigatório)",
      "Gorjetas e despesas pessoais",
    ],
    importantInfo: [
      "É necessário boa mobilidade para subir/descer escadas e embarcar em zodiacs.",
      "Idiomas a bordo: espanhol e inglês.",
      "Viajante solo pode compartilhar cabine com pessoa do mesmo gênero.",
      "Condições climáticas podem alterar a ordem dos desembarques.",
    ],
    faq: [
      {
        question: "Preciso de experiência prévia em cruzeiros de expedição?",
        answer:
          "Não. O essencial é saúde compatível com desembarques em zodiac e disposição para condições polares variáveis.",
      },
      {
        question: "O roteiro é fixo?",
        answer:
          "É um roteiro adaptável: a natureza dita o ritmo. A equipe ajusta desembarques conforme clima e segurança.",
      },
      {
        question: "Como funciona o orçamento?",
        answer:
          "Você escolhe uma saída (ou datas flexíveis) e nossa equipe monta a proposta com cabine, condições e próximos passos.",
      },
    ],
    relatedSlugs: [
      "silversea-alasca-vancouver-seward",
      "nepal-everest-base-camp",
    ],
  },
  {
    slug: "silversea-alasca-vancouver-seward",
    title: "Silversea Alasca: Vancouver a Seward",
    tagline: "Fiordes, glaciares e o selvagem Inside Passage.",
    summary:
      "Oito dias entre Vancouver e Seward a bordo da Silversea: Ketchikan, Juneau, Skagway, Sitka e o Glaciar Hubbard.",
    story:
      "Esta viagem leva você ao coração do Alasca — das montanhas de Vancouver às paisagens grandiosas de Seward. Navegue pelo Inside Passage, explore cidades fronteiriças e contemple glaciares que ainda moldam a costa.",
    heroImage:
      "/images/hero-alaska.jpg",
    heroAlt: "Glaciar e montanhas no Alasca",
    gallery: [
      {
        src: "/images/gallery-mountain.jpg",
        alt: "Cordilheira nevada",
      },
      {
        src: "/images/hero-nature.jpg",
        alt: "Lago e montanhas ao amanhecer",
      },
    ],
    destinations: ["América do Norte", "Canadá", "Estados Unidos"],
    activities: ["Navegações", "Natureza & Vida Selvagem"],
    durationDays: 8,
    difficulty: 1,
    bestSeason: "Junho a agosto",
    groupSize: "Cruzeiro boutique",
    priceFrom: 18800,
    currency: "BRL",
    highlights: [
      "Inside Passage do Alasca",
      "Glaciar Mendenhall e Hubbard",
      "Ketchikan, Juneau, Skagway e Sitka",
      "Experiência Silversea all-inclusive",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Vancouver",
        body: "Chegada à cidade cercada por montanhas e oceano. Tempo livre para Stanley Park, galerias ou o Seawall.",
      },
      {
        day: 2,
        title: "Inside Passage",
        body: "Navegação por 800 km de ilhas, fiordes e possíveis avistamentos de baleias. Pensão completa a bordo.",
      },
      {
        day: 3,
        title: "Ketchikan",
        body: "Totems, Creek Street e a floresta temperada do sudeste do Alasca.",
      },
      {
        day: 4,
        title: "Juneau",
        body: "Capital do Alasca e porta de entrada para o Glaciar Mendenhall.",
      },
      {
        day: 5,
        title: "Skagway",
        body: "Cidade da corrida do ouro, cercada por montanhas e história.",
      },
      {
        day: 6,
        title: "Sitka",
        body: "Encontro de culturas Tlingit e russa, com natureza exuberante.",
      },
      {
        day: 7,
        title: "Glaciar Hubbard",
        body: "Cruzeiro frente a um dos glaciares de maré mais impressionantes do Alasca.",
      },
      {
        day: 8,
        title: "Seward",
        body: "Desembarque em Seward, porta de entrada para a Península de Kenai.",
      },
    ],
    includes: [
      "Cruzeiro Silversea conforme categoria orçada",
      "Refeições a bordo",
      "Seleção de bebidas (conforme política do navio)",
      "Taxas portuárias",
    ],
    excludes: [
      "Aéreos internacionais e domésticos",
      "Seguro viagem",
      "Excursões opcionais em terra",
      "Despesas pessoais",
    ],
    importantInfo: [
      "Roteiro adaptável conforme operação da armadora.",
      "Documentação americana/canadense e visto quando aplicável.",
      "Indicado para quem busca conforto com paisagem selvagem.",
    ],
    faq: [
      {
        question: "É um cruzeiro convencional?",
        answer:
          "É uma experiência de navegação de luxo com foco em natureza e destinos remotos — mais íntima que um mega cruzeiro.",
      },
    ],
    relatedSlugs: [
      "cruzeiro-antartica-mv-ushuaia",
      "chapada-dos-veadeiros-essencial",
    ],
  },
  {
    slug: "nepal-everest-base-camp",
    title: "Nepal — Trekking ao Campo Base do Everest",
    tagline: "Dezesseis dias até o teto do mundo.",
    summary:
      "Trekking clássico ao Everest Base Camp com aclimatização, vilarejos sherpa, mosteiros e o cenário do Khumbu.",
    story:
      "Mais do que chegar ao acampamento base, esta jornada é um encontro com a cultura sherpa, a altitude e a escala do Himalaia. Roteiro adaptável, pensado para segurança e presença — não para corrida.",
    heroImage: "/images/hero-nepal.jpg",
    heroAlt: "Picos do Himalaia no Nepal",
    gallery: [
      {
        src: "/images/hero-trek.jpg",
        alt: "Trilha de montanha no Nepal",
      },
      {
        src: "/images/originals/everest-1.jpg",
        alt: "Paisagem do Everest",
      },
      {
        src: "/images/gallery-mountain.jpg",
        alt: "Bandeiras de oração no Himalaia",
      },
    ],
    destinations: ["Ásia", "Nepal"],
    activities: ["Trekking"],
    durationDays: 16,
    difficulty: 4,
    bestSeason: "Março–maio e setembro–novembro",
    groupSize: "Grupos reduzidos",
    priceFrom: 20660,
    currency: "BRL",
    highlights: [
      "Campo Base do Everest (EBC)",
      "Voo para Lukla",
      "Namche Bazaar e cultura sherpa",
      "Mosteiro de Tengboche",
      "Amanhecer em Kala Patthar",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Kathmandu",
        body: "Chegada, briefing da expedição e preparação de equipamentos.",
      },
      {
        day: 2,
        title: "Voo para Lukla — Phakding",
        body: "Voo cênico para Lukla e início da trilha pelo vale do Dudh Koshi.",
      },
      {
        day: 3,
        title: "Namche Bazaar",
        body: "Subida até o centro sherpa, com primeiras vistas do Everest em dias claros.",
      },
      {
        day: 4,
        title: "Aclimatização em Namche",
        body: "Dia de aclimatização com caminhada leve e descanso ativo.",
      },
      {
        day: 5,
        title: "Tengboche",
        body: "Trilha até o mosteiro de Tengboche, um dos pontos espirituais do Khumbu.",
      },
      {
        day: 6,
        title: "Dingboche",
        body: "Ganho de altitude gradual com paisagens cada vez mais minerais.",
      },
      {
        day: 7,
        title: "Aclimatização",
        body: "Dia de aclimatização para reduzir risco de mal de altitude.",
      },
      {
        day: 8,
        title: "Lobuche",
        body: "Continuação em direção ao alto Khumbu.",
      },
      {
        day: 9,
        title: "Everest Base Camp — Gorak Shep",
        body: "Chegada ao EBC e retorno para pernoite em Gorak Shep.",
      },
      {
        day: 10,
        title: "Kala Patthar — descida",
        body: "Amanhecer em Kala Patthar (se condições permitirem) e início da descida.",
      },
      {
        day: 11,
        title: "Descida pelo vale",
        body: "Retorno gradual pelos vilarejos da trilha.",
      },
      {
        day: 12,
        title: "Namche",
        body: "Chegada novamente a Namche Bazaar.",
      },
      {
        day: 13,
        title: "Lukla",
        body: "Última etapa de trekking até Lukla.",
      },
      {
        day: 14,
        title: "Retorno a Kathmandu",
        body: "Voo de regresso (sujeito a clima).",
      },
      {
        day: 15,
        title: "Kathmandu",
        body: "Dia reserva / exploração cultural da capital.",
      },
      {
        day: 16,
        title: "Partida",
        body: "Transfer e encerramento dos serviços.",
      },
    ],
    includes: [
      "Guias e equipe de apoio",
      "Permissões de trekking",
      "Hospedagem em lodges conforme roteiro",
      "Refeições durante o trekking",
    ],
    excludes: [
      "Aéreos internacionais",
      "Seguro com cobertura de altitude/resgate",
      "Equipamentos pessoais",
      "Gorjetas",
    ],
    importantInfo: [
      "Nível exigente: preparação física prévia é essencial.",
      "Mal de altitude é risco real — aclimatização não é negociável.",
      "Voos Lukla podem atrasar por clima; dia reserva é importante.",
    ],
    faq: [
      {
        question: "Qual o nível físico necessário?",
        answer:
          "Alto. Recomendamos treino específico de caminhada com elevação por pelo menos 8–12 semanas.",
      },
    ],
    relatedSlugs: [
      "tanzania-kilimanjaro-lemosho",
      "cruzeiro-antartica-mv-ushuaia",
    ],
  },
  {
    slug: "chapada-dos-veadeiros-essencial",
    title: "Chapada dos Veadeiros Essencial",
    tagline: "Cerrado, cachoeiras e o Vale da Lua.",
    summary:
      "Quatro noites em Alto Paraíso com os clássicos da Chapada: Vale da Lua, Saltos do Rio Preto e cachoeiras de águas cristalinas.",
    story:
      "Patrimônio Natural da Humanidade pela UNESCO, a Chapada dos Veadeiros é um refúgio de biodiversidade do Cerrado. Formações milenares, águas transparentes e trilhas que reconectam sem exigir expedição extrema.",
    heroImage:
      "/images/hero-nature.jpg",
    heroAlt: "Paisagem natural brasileira ao entardecer",
    gallery: [
      {
        src: "/images/hero-nature.jpg",
        alt: "Floresta e luz filtrada",
      },
      {
        src: "/images/gallery-waterfall.jpg",
        alt: "Cachoeira em meio à natureza",
      },
    ],
    destinations: ["América do Sul", "Brasil"],
    activities: ["Trekking", "Natureza & Vida Selvagem"],
    durationDays: 5,
    difficulty: 2,
    bestSeason: "Abril a setembro",
    groupSize: "Privativo ou pequeno grupo",
    priceFrom: 4796,
    currency: "BRL",
    highlights: [
      "Vale da Lua e Cânion Raizama",
      "Parque Nacional e Saltos do Rio Preto",
      "Cachoeiras de águas cristalinas",
      "Base em Alto Paraíso",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Brasília — Alto Paraíso",
        body: "Transfer do aeroporto com almoço de boas-vindas e check-in.",
      },
      {
        day: 2,
        title: "Cânion Raizama e Vale da Lua",
        body: "Dia completo de passeio com almoço, entre formações rochosas e águas esverdeadas.",
      },
      {
        day: 3,
        title: "Cachoeira do Segredo",
        body: "Trilha e banho de cachoeira em ritmo contemplativo.",
      },
      {
        day: 4,
        title: "Parque Nacional",
        body: "Saltos do Rio Preto e mirantes do cerrado alto.",
      },
      {
        day: 5,
        title: "Almécegas e retorno",
        body: "Cachoeira Almécegas I e transfer de retorno a Brasília.",
      },
    ],
    includes: [
      "4 noites em Alto Paraíso com café da manhã",
      "Transfers Brasília ↔ Alto Paraíso",
      "Passeios com almoço conforme roteiro",
    ],
    excludes: [
      "Aéreos até Brasília",
      "Jantares",
      "Seguro viagem",
      "Despesas pessoais",
    ],
    importantInfo: [
      "Trilhas de nível moderado; informe condições físicas relevantes.",
      "Época de chuvas pode alterar acessos a algumas cachoeiras.",
    ],
    faq: [
      {
        question: "Serve para quem viaja em família?",
        answer:
          "Sim, com ajustes de ritmo. Conte no orçamento a idade e o perfil do grupo.",
      },
    ],
    relatedSlugs: ["escocia-bike-lago-ness", "nepal-everest-base-camp"],
  },
  {
    slug: "escocia-bike-lago-ness",
    title: "Escócia de Bike — Encantos do Lago Ness",
    tagline: "Pedalar entre lochs, castelos e Highlands.",
    summary:
      "Sete dias de cicloturismo na Escócia com suporte, paisagens épicas e a região do Lago Ness.",
    story:
      "Pedalar pela Escócia é atravessar um cenário de filme: montanhas, lagos cristalinos e vilarejos. A bike deixa de ser transporte e vira presença — você sente o relevo e respira o caminho.",
    heroImage:
      "/images/hero-alaska.jpg",
    heroAlt: "Colinas verdes e lago na Escócia",
    gallery: [
      {
        src: "/images/gallery-mountain.jpg",
        alt: "Montanhas e vale",
      },
    ],
    destinations: ["Europa", "Escócia"],
    activities: ["Bike"],
    durationDays: 7,
    difficulty: 3,
    bestSeason: "Maio a setembro",
    groupSize: "Pequeno grupo com suporte",
    priceFrom: 16280,
    currency: "BRL",
    highlights: [
      "Região do Lago Ness",
      "Highlands cênicas",
      "Suporte de van e mecânica",
      "Ritmo de imersão, não de corrida",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Chegada e briefing",
        body: "Recepção, ajuste de bikes e primeiros quilômetros de ambientação.",
      },
      {
        day: 2,
        title: "Rotas dos lochs",
        body: "Pedal ao longo de lagos e vilarejos históricos.",
      },
      {
        day: 3,
        title: "Highlands",
        body: "Trechos com mais altimetria e vistas amplas.",
      },
      {
        day: 4,
        title: "Lago Ness",
        body: "Circuito na região do Loch Ness, com paradas fotográficas e culturais.",
      },
      {
        day: 5,
        title: "Castelos e estradas cênicas",
        body: "Dia de pedal entre patrimônio e natureza.",
      },
      {
        day: 6,
        title: "Grande volta",
        body: "Percurso mais longo do roteiro, com suporte completo.",
      },
      {
        day: 7,
        title: "Encerramento",
        body: "Pedal leve de fechamento e despedida do grupo.",
      },
    ],
    includes: [
      "Bike (ou transporte da sua, sob consulta)",
      "Suporte de rota",
      "Hospedagem conforme categoria orçada",
      "Alguns café da manhã / refeições conforme proposta",
    ],
    excludes: [
      "Aéreos",
      "Seguro viagem",
      "Aluguéis extras de equipamento",
      "Refeições não descritas",
    ],
    importantInfo: [
      "Experiência prévia em bike de estrada/gravel é recomendada.",
      "Clima escocês muda rápido — capas impermeáveis são obrigatórias.",
    ],
    faq: [
      {
        question: "Posso levar minha própria bike?",
        answer:
          "Sim, sob consulta. Incluímos orientação de transporte no orçamento.",
      },
    ],
    relatedSlugs: [
      "chapada-dos-veadeiros-essencial",
      "silversea-alasca-vancouver-seward",
    ],
  },
  {
    slug: "tanzania-kilimanjaro-lemosho",
    title: "Tanzânia — Kilimanjaro pela Rota Lemosho",
    tagline: "A subida mais bela ao teto da África.",
    summary:
      "Expedição ao Uhuru Peak pela Lemosho: melhor aclimatização, floresta equatorial, moorland e geleiras remanescentes.",
    story:
      "O Kilimanjaro não é só altitude — é uma travessia de ecossistemas. A Lemosho oferece ritmo mais humano e paisagens amplas, com equipe local experiente e protocolo de segurança rigoroso.",
    heroImage: "/images/hero-kilimanjaro.jpg",
    heroAlt: "Amanhecer no Kilimanjaro",
    gallery: [
      {
        src: "/images/hero-africa.jpg",
        alt: "Horizonte africano",
      },
      {
        src: "/images/hero-kilimanjaro.jpg",
        alt: "Kilimanjaro",
      },
    ],
    destinations: ["África", "Tanzânia"],
    activities: ["Trekking"],
    durationDays: 11,
    difficulty: 5,
    bestSeason: "Janeiro–março e junho–outubro",
    groupSize: "Equipe de apoio completa",
    priceFrom: 18938,
    currency: "BRL",
    highlights: [
      "Rota Lemosho com boa aclimatização",
      "Uhuru Peak (5.895 m)",
      "Equipe local especializada",
      "Protocolo de altitude e resgate",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Chegada em Moshi/Arusha",
        body: "Recepção, briefing e checagem de equipamentos.",
      },
      {
        day: 2,
        title: "Início Lemosho",
        body: "Entrada pela floresta e primeiro acampamento.",
      },
      {
        day: 3,
        title: "Shira Plateau",
        body: "Abertura das vistas do platô de Shira.",
      },
      {
        day: 4,
        title: "Aclimatização",
        body: "Dia de caminhada alta e pernoite mais baixo — regra de ouro da altitude.",
      },
      {
        day: 5,
        title: "Barranco",
        body: "Travessia cênica até o acampamento do Barranco.",
      },
      {
        day: 6,
        title: "Karanga",
        body: "Superação do Barranco Wall e avanço gradual.",
      },
      {
        day: 7,
        title: "Barafu",
        body: "Preparação para a madrugada de cume.",
      },
      {
        day: 8,
        title: "Cume — Uhuru Peak",
        body: "Partida noturna, nascer do sol no alto e descida controlada.",
      },
      {
        day: 9,
        title: "Descida",
        body: "Retorno aos acampamentos inferiores.",
      },
      {
        day: 10,
        title: "Portão e celebração",
        body: "Chegada ao portão, certificados e regresso à cidade.",
      },
      {
        day: 11,
        title: "Partida",
        body: "Transfer ao aeroporto e encerramento.",
      },
    ],
    includes: [
      "Permissões de parque",
      "Guias, porteiros e cozinha de montanha",
      "Equipamento coletivo de acampamento",
      "Refeições na montanha",
    ],
    excludes: [
      "Aéreos",
      "Seguro com resgate em altitude",
      "Equipamento pessoal",
      "Gorjetas da equipe (costume local importante)",
    ],
    importantInfo: [
      "Expedição de alto comprometimento físico e mental.",
      "Consulta médica prévia recomendada.",
      "Não é técnica de escalada, mas a altitude exige respeito absoluto.",
    ],
    faq: [
      {
        question: "Por que a Lemosho?",
        answer:
          "Oferece melhor curva de aclimatização e paisagens mais variadas que rotas mais curtas e agressivas.",
      },
    ],
    relatedSlugs: [
      "nepal-everest-base-camp",
      "cruzeiro-antartica-mv-ushuaia",
    ],
  },
  {
    slug: "torres-del-paine-eco-camp",
    title: "Trekking em Torres del Paine — EcoCamp",
    tagline: "O Circuito W em cinco dias de Patagônia pura.",
    summary:
      "Caminhadas inspiradas no Circuito W com base no EcoCamp Patagonia: Vale Ascencio, Vale do Francês e Mirante Grey.",
    story:
      "Torres del Paine é uma das trilhas mais deslumbrantes do planeta. Este roteiro curto concentra os três setores mais impressionantes do parque, com hospedagem sustentável e ritmo exigente — sem técnica de escalada, mas com bom condicionamento.",
    heroImage: "/images/hero-patagonia.jpg",
    heroAlt: "Montanhas da Patagônia chilena",
    gallery: [
      {
        src: "/images/hero-alaska.jpg",
        alt: "Cordilheira e céu aberto",
      },
      {
        src: "/images/hero-nature.jpg",
        alt: "Paisagem natural remota",
      },
    ],
    destinations: ["América do Sul", "Chile"],
    activities: ["Trekking", "Natureza & Vida Selvagem"],
    durationDays: 5,
    difficulty: 3,
    bestSeason: "Outubro a abril",
    groupSize: "Pequeno grupo",
    priceFrom: 12500,
    currency: "BRL",
    highlights: [
      "Inspirado no Circuito W",
      "EcoCamp Patagonia",
      "Vale Ascencio, Francês e Grey",
      "Base sustentável no parque",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Chegada à Patagônia",
        body: "Recepção e transferência para o EcoCamp. Briefing da trilha e primeira caminhada de ambientação.",
      },
      {
        day: 2,
        title: "Vale Ascencio",
        body: "Trekking em direção às Torres, com 5–6 horas de caminhada em terreno variável.",
      },
      {
        day: 3,
        title: "Vale do Francês",
        body: "Exploração de um dos setores mais dramáticos do parque, com vistas de glaciares e paredões.",
      },
      {
        day: 4,
        title: "Mirante Grey",
        body: "Caminhada até o mirante do Glaciar Grey e retorno à base.",
      },
      {
        day: 5,
        title: "Despedida",
        body: "Manhã livre ou trecho curto e transfer de saída.",
      },
    ],
    includes: [
      "Hospedagem no EcoCamp conforme categoria orçada",
      "Guias de trekking",
      "Refeições conforme proposta",
      "Entradas do parque (quando aplicável à operação)",
    ],
    excludes: [
      "Aéreos até Punta Arenas/Puerto Natales",
      "Seguro viagem",
      "Equipamento pessoal de trekking",
      "Despesas pessoais",
    ],
    importantInfo: [
      "Caminhadas diárias de 5–6 horas — condicionamento prévio é essencial.",
      "Clima patagônico muda rápido: camadas e capa impermeável são obrigatórias.",
    ],
    faq: [
      {
        question: "É o Circuito W completo?",
        answer:
          "É um roteiro curto inspirado nos setores clássicos do W, ideal para quem tem poucos dias e bom preparo físico.",
      },
    ],
    relatedSlugs: [
      "chapada-dos-veadeiros-essencial",
      "cruzeiro-antartica-mv-ushuaia",
    ],
  },
  {
    slug: "aria-amazon-aqua-expeditions",
    title: "Aqua Expeditions — Aria Amazon",
    tagline: "Quatro dias no maior rio do mundo.",
    summary:
      "Cruzeiro boutique pela Amazônia peruana a partir de Iquitos: amanheceres no rio, exploracões em ignição e selva em ritmo intimista.",
    story:
      "Iquitos é a porta de entrada para o Rio Amazonas. A bordo do Aria, a navegação pelos afluentes revela uma floresta que se escuta antes de se ver — com conforto de expedição e curadoria de natureza.",
    heroImage: "/images/hero-forest.jpg",
    heroAlt: "Águas e floresta em clima de expedição",
    gallery: [
      {
        src: "/images/hero-nature.jpg",
        alt: "Floresta densa",
      },
      {
        src: "/images/gallery-waterfall.jpg",
        alt: "Água em meio à vegetação",
      },
    ],
    destinations: ["América do Sul", "Peru"],
    activities: ["Navegações", "Natureza & Vida Selvagem"],
    durationDays: 4,
    difficulty: 1,
    bestSeason: "Ano todo (experiência varia com o nível do rio)",
    groupSize: "Cruzeiro boutique",
    priceFrom: 23380,
    currency: "BRL",
    highlights: [
      "Embarque em Iquitos",
      "Navegação pelo Amazonas e afluentes",
      "Saídas de exploração diárias",
      "Conforto Aqua Expeditions",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Iquitos — Embarque",
        body: "Recepção em Iquitos, traslado ao navio e início da navegação. Jantar a bordo.",
      },
      {
        day: 2,
        title: "Amanhecer no Amazonas",
        body: "Explorações pela manhã e à tarde em ignições, com observação de fauna e comunidades ribeirinhas conforme operação.",
      },
      {
        day: 3,
        title: "Afluentes e selva",
        body: "Navegação por braços do rio e caminhadas ou passeios interpretativos na floresta.",
      },
      {
        day: 4,
        title: "Desembarque",
        body: "Últimas atividades e retorno a Iquitos.",
      },
    ],
    includes: [
      "Cruzeiro Aria conforme categoria",
      "Refeições a bordo",
      "Explorações com guia",
      "Transfers locais do roteiro",
    ],
    excludes: [
      "Aéreos até Iquitos",
      "Seguro viagem",
      "Bebidas especiais e extras",
      "Gorjetas",
    ],
    importantInfo: [
      "Roteiro adaptável conforme nível do rio e condições da selva.",
      "Repelente, roupas leves de manga longa e calçado fechado são recomendados.",
    ],
    faq: [
      {
        question: "Serve para quem viaja a dois?",
        answer:
          "Sim. É uma das melhores opções para casais que querem Amazônia com conforto e pouco deslocamento terrestre.",
      },
    ],
    relatedSlugs: [
      "silversea-alasca-vancouver-seward",
      "costa-rica-natureza-selvagem",
    ],
  },
  {
    slug: "finlandia-aurora-rovaniemi",
    title: "Finlândia — Aurora Boreal em Rovaniemi",
    tagline: "Lapônia, neve e o céu em movimento.",
    summary:
      "Rovaniemi na Lapônia finlandesa: natureza branca, iglus de vidro e a busca pela aurora boreal.",
    story:
      "A Finlândia no inverno é um convite à quietude. Entre paisagens cobertas de neve e a possibilidade de dormir sob o céu polar, Rovaniemi oferece uma aventura sofisticada — mais contemplativa, igualmente inesquecível.",
    heroImage: "/images/hero-ice.jpg",
    heroAlt: "Céu polar e paisagem nevada",
    gallery: [
      {
        src: "/images/gallery-ice.jpg",
        alt: "Paisagem gelada",
      },
      {
        src: "/images/hero-alaska.jpg",
        alt: "Montanhas sob luz fria",
      },
    ],
    destinations: ["Europa", "Finlândia"],
    activities: ["Natureza & Vida Selvagem"],
    durationDays: 6,
    difficulty: 1,
    bestSeason: "Setembro a março",
    groupSize: "Privativo ou pequeno grupo",
    priceFrom: 18900,
    currency: "BRL",
    highlights: [
      "Rovaniemi e Lapônia",
      "Busca pela aurora boreal",
      "Hospedagem em iglu de vidro (conforme orçamento)",
      "Atividades nórdicas sob consulta",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Chegada a Rovaniemi",
        body: "Recepção e transferência à hospedagem. Primeira noite sob o céu da Lapônia.",
      },
      {
        day: 2,
        title: "Floresta boreal",
        body: "Caminhada ou atividade leve na neve e preparação para caça à aurora.",
      },
      {
        day: 3,
        title: "Experiências árticas",
        body: "Atividades opcionais como trenó, snowshoes ou spa — conforme proposta.",
      },
      {
        day: 4,
        title: "Iglu de vidro",
        body: "Noite especial para maximizar a chance de ver a aurora (sujeito a clima).",
      },
      {
        day: 5,
        title: "Lapônia profunda",
        body: "Dia livre ou tour cultural na região.",
      },
      {
        day: 6,
        title: "Partida",
        body: "Transfer ao aeroporto e encerramento.",
      },
    ],
    includes: [
      "Hospedagens conforme categoria orçada",
      "Transfers descritos na proposta",
      "Seleção de atividades principais",
    ],
    excludes: [
      "Aéreos internacionais",
      "Seguro viagem",
      "Atividades opcionais",
      "Refeições não descritas",
    ],
    importantInfo: [
      "Aurora boreal é fenômeno natural — nunca garantida, sempre perseguida com inteligência climática.",
      "Temperatura pode ser extrema: kit térmico adequado é obrigatório.",
    ],
    faq: [
      {
        question: "Qual a melhor época para aurora?",
        answer:
          "Noites longas entre setembro e março oferecem as melhores condições, com pico no inverno.",
      },
    ],
    relatedSlugs: [
      "silversea-alasca-vancouver-seward",
      "escocia-bike-lago-ness",
    ],
  },
  {
    slug: "costa-rica-natureza-selvagem",
    title: "Costa Rica — Natureza, Vulcão e Praias",
    tagline: "Selva, calor e o pura vida em estado bruto.",
    summary:
      "De San José às florestas e praias: um roteiro adaptável pela biodiversidade costarriquenha.",
    story:
      "A Costa Rica concentra vulcões, florestas úmidas e costa em um país compacto. Ideal para quem quer natureza intensa com boa infraestrutura e espírito leve — o famosa pura vida.",
    heroImage: "/images/gallery-waterfall.jpg",
    heroAlt: "Cachoeira em floresta tropical",
    gallery: [
      {
        src: "/images/hero-nature.jpg",
        alt: "Floresta tropical",
      },
      {
        src: "/images/gallery-ocean.jpg",
        alt: "Costa e águas quentes",
      },
    ],
    destinations: ["América Central", "Costa Rica"],
    activities: ["Natureza & Vida Selvagem", "Trekking"],
    durationDays: 8,
    difficulty: 2,
    bestSeason: "Dezembro a abril",
    groupSize: "Privativo ou pequeno grupo",
    priceFrom: 12900,
    currency: "BRL",
    highlights: [
      "San José como porta de entrada",
      "Florestas e biodiversidade",
      "Vulcão e mirantes",
      "Praias para desacelerar",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Chegada a San José",
        body: "Recepção no aeroporto e traslado ao hotel. Vale Central como base estratégica.",
      },
      {
        day: 2,
        title: "Vulcão e mirantes",
        body: "Exploração de área vulcânica e primeiras trilhas leves.",
      },
      {
        day: 3,
        title: "Floresta úmida",
        body: "Caminhadas interpretativas e observação de fauna.",
      },
      {
        day: 4,
        title: "Travessia para a costa",
        body: "Deslocamento cênico em direção às praias.",
      },
      {
        day: 5,
        title: "Praia e mar",
        body: "Dia livre para descanso, snorkel ou caminhada litorânea.",
      },
      {
        day: 6,
        title: "Aventura leve",
        body: "Atividade opcional (rafting, canopy etc.) conforme perfil do grupo.",
      },
      {
        day: 7,
        title: "Último dia na natureza",
        body: "Ritmo livre com possibilidade de passeio local.",
      },
      {
        day: 8,
        title: "Retorno",
        body: "Transfer ao aeroporto e fim dos serviços.",
      },
    ],
    includes: [
      "Hospedagens com café da manhã (conforme proposta)",
      "Transfers terrestres do roteiro",
      "Passeios principais descritos",
    ],
    excludes: [
      "Aéreos internacionais",
      "Seguro viagem",
      "Almoços e jantares não descritos",
      "Atividades opcionais",
    ],
    importantInfo: [
      "Roteiro adaptável conforme clima e conexões.",
      "Leve roupas leve + capa de chuva — o trópico muda rápido.",
    ],
    faq: [
      {
        question: "É bom para primeira viagem de aventura?",
        answer:
          "Sim. A Costa Rica combina natureza forte com logística amigável — ótima porta de entrada.",
      },
    ],
    relatedSlugs: [
      "aria-amazon-aqua-expeditions",
      "chapada-dos-veadeiros-essencial",
    ],
  },
  {
    slug: "indonesia-bali-gili-lombok",
    title: "Indonésia — Bali, Gili e Lombok",
    tagline: "Cultura balinesa e o azul das ilhas.",
    summary:
      "Oito dias entre tradições de Bali, rafting, vilarejos e dias de praia em Gili/Lombok.",
    story:
      "Bali não é só praia — é ritual, arrozal e vulcão. Somada a Gili e Lombok, a travessia equilibra cultura, água e tempo lento no arquipélago indonésio.",
    heroImage: "/images/hero-surf.jpg",
    heroAlt: "Mar turquesa e costa tropical",
    gallery: [
      {
        src: "/images/hero-home.jpg",
        alt: "Ondas e costa",
      },
      {
        src: "/images/hero-nature.jpg",
        alt: "Verde tropical",
      },
    ],
    destinations: ["Ásia", "Indonésia"],
    activities: ["Natureza & Vida Selvagem"],
    durationDays: 8,
    difficulty: 2,
    bestSeason: "Abril a outubro",
    groupSize: "Privativo ou pequeno grupo",
    priceFrom: 14200,
    currency: "BRL",
    highlights: [
      "Cultura e templos em Bali",
      "Rafting e natureza interiorana",
      "Ilhas Gili / Lombok",
      "Equilíbrio entre imersão e praia",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Chegada a Bali",
        body: "Recepção e transferência à região escolhida (Ubud ou sul, conforme proposta).",
      },
      {
        day: 2,
        title: "Cultura balinesa",
        body: "Templos, artesanato e possível espetáculo tradicional.",
      },
      {
        day: 3,
        title: "Natureza interior",
        body: "Rafting ou caminhada entre arrozais e florestas.",
      },
      {
        day: 4,
        title: "Travessia às ilhas",
        body: "Deslocamento para Gili ou Lombok.",
      },
      {
        day: 5,
        title: "Mar e descanso",
        body: "Praia, snorkel e ritmo lento.",
      },
      {
        day: 6,
        title: "Exploração costeira",
        body: "Passeio de barco ou bike pela ilha.",
      },
      {
        day: 7,
        title: "Último pôr do sol",
        body: "Dia livre para ritual final de água e silêncio.",
      },
      {
        day: 8,
        title: "Partida",
        body: "Retorno ao aeroporto e encerramento.",
      },
    ],
    includes: [
      "Hospedagens conforme categoria",
      "Transfers e travessias descritas",
      "Seleção de passeios principais",
    ],
    excludes: [
      "Aéreos internacionais",
      "Seguro viagem",
      "Visto/VOA quando aplicável",
      "Refeições não descritas",
    ],
    importantInfo: [
      "Respeito cultural em templos (vestimenta adequada).",
      "Roteiro adaptável a feriados locais e clima de monção.",
    ],
    faq: [
      {
        question: "Dá para incluir surf?",
        answer:
          "Sim. Avise no orçamento o nível e a região preferida — montamos a variante.",
      },
    ],
    relatedSlugs: [
      "costa-rica-natureza-selvagem",
      "nepal-everest-base-camp",
    ],
  },
];
