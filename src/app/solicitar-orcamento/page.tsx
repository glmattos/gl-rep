import type { Metadata } from "next";
import { QuoteExperience } from "@/components/quote/QuoteExperience";
import { getAllDepartures, getAllExpeditions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solicitar orçamento",
  description:
    "Encontre uma expedição ou peça uma viagem personalizada. A ABC Fly registra seu lead e retorna com proposta humana.",
};

type Props = {
  searchParams?: Promise<{ expedicao?: string }>;
};

export default async function QuotePage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const expeditions = getAllExpeditions();
  const departures = getAllDepartures();

  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container quote-page-grid">
          <div>
            <span className="eyebrow">Comece por aqui</span>
            <h1
              className="display"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", margin: "0.4rem 0 1rem" }}
            >
              Solicitar orçamento
            </h1>
            <p style={{ lineHeight: 1.75, maxWidth: "36rem", fontSize: "1.05rem" }}>
              A ABC Fly não vende expedições por carrinho. Você encontra uma
              jornada existente ou pede um roteiro do zero — e a equipe recebe o
              contexto completo para responder.
            </p>
            <ul style={{ lineHeight: 1.9, paddingLeft: "1.1rem", color: "var(--stone)" }}>
              <li>Busca inteligente por destino ou interesse</li>
              <li>Ou viagem 100% personalizada</li>
              <li>Lead registrado com expedição/interesse e contato</li>
              <li>Retorno humano em até 1 dia útil</li>
            </ul>
            <div
              className="panel"
              style={{ marginTop: "1.5rem", padding: "1.1rem 1.2rem", maxWidth: "36rem" }}
            >
              <p className="eyebrow" style={{ margin: 0 }}>
                Para onde vai o lead?
              </p>
              <p style={{ margin: "0.55rem 0 0", lineHeight: 1.65, color: "var(--stone)" }}>
                Cada solicitação é gravada em registro estruturado no servidor
                (`content/leads`), com tipo (expedição ou personalizada), interesse,
                dados de contato e mensagem. A equipe acompanha por e-mail/WhatsApp
                operacional e pode conectar CRM depois — sem inventar integração.
              </p>
            </div>
          </div>
          <QuoteExperience
            expeditions={expeditions}
            departures={departures}
            initialSlug={params.expedicao}
          />
        </div>
      </section>
    </div>
  );
}
