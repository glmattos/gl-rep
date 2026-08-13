/** Tabela de saídas — editável sem código no Sanity Studio. */
export const departure = {
  name: "departure",
  title: "Saída / Data",
  type: "document",
  fields: [
    {
      name: "expedition",
      title: "Expedição",
      type: "reference",
      to: [{ type: "expedition" }],
    },
    { name: "startDate", title: "Data início", type: "date" },
    { name: "endDate", title: "Data fim", type: "date" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Vagas abertas", value: "available" },
          { title: "Últimas vagas", value: "limited" },
          { title: "Lista de espera", value: "waitlist" },
          { title: "Esgotada", value: "soldout" },
          { title: "Sob consulta", value: "custom" },
        ],
      },
      initialValue: "available",
    },
    { name: "seatsLeft", title: "Vagas restantes", type: "number" },
    { name: "notes", title: "Observações", type: "string" },
  ],
};
