/** Schema Sanity — conectar quando o projeto Studio for criado. */
export const expedition = {
  name: "expedition",
  title: "Expedição",
  type: "document",
  fields: [
    { name: "title", title: "Título", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "summary", title: "Resumo", type: "text" },
    { name: "story", title: "História", type: "text" },
    { name: "heroImage", title: "Imagem de capa", type: "image" },
    { name: "gallery", title: "Galeria", type: "array", of: [{ type: "image" }] },
    { name: "destinations", title: "Destinos", type: "array", of: [{ type: "string" }] },
    { name: "activities", title: "Atividades", type: "array", of: [{ type: "string" }] },
    { name: "durationDays", title: "Duração (dias)", type: "number" },
    { name: "difficulty", title: "Nível", type: "number" },
    { name: "bestSeason", title: "Melhor época", type: "string" },
    { name: "groupSize", title: "Tamanho do grupo", type: "string" },
    { name: "priceFrom", title: "Preço a partir de", type: "number" },
    { name: "highlights", title: "Destaques", type: "array", of: [{ type: "string" }] },
    {
      name: "dayByDay",
      title: "Roteiro dia a dia",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "number", title: "Dia" },
            { name: "title", type: "string", title: "Título" },
            { name: "body", type: "text", title: "Descrição" },
          ],
        },
      ],
    },
    { name: "includes", title: "Inclui", type: "array", of: [{ type: "string" }] },
    { name: "excludes", title: "Não inclui", type: "array", of: [{ type: "string" }] },
    {
      name: "importantInfo",
      title: "Informações importantes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string", title: "Pergunta" },
            { name: "answer", type: "text", title: "Resposta" },
          ],
        },
      ],
    },
  ],
};
