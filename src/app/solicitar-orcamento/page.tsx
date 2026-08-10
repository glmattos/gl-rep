import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { getAllDepartures, getAllExpeditions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solicitar orçamento",
  description:
    "Peça um orçamento personalizado para expedições ABC Fly. A equipe recebe expedição, data e perfil do grupo automaticamente.",
};

export default function QuotePage() {
  const expeditions = getAllExpeditions();
  const departures = getAllDepartures();

  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container quote-page-grid">
          <div>
            <span className="eyebrow">Conversão principal</span>
            <h1 className="display" style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)" }}>
              Solicitar orçamento
            </h1>
            <p style={{ lineHeight: 1.75, maxWidth: "36rem", fontSize: "1.08rem" }}>
              A ABC Fly não vende expedições por carrinho. Cada proposta é
              montada com base na jornada, na data e no perfil do grupo. Ao
              enviar, nossa equipe já recebe o contexto completo — sem precisar
              descobrir manualmente a origem do contato.
            </p>
            <ul style={{ lineHeight: 1.9, paddingLeft: "1.1rem", color: "var(--stone)" }}>
              <li>Nome da expedição incluso automaticamente</li>
              <li>Data escolhida ou datas flexíveis</li>
              <li>Número de viajantes e perfil do grupo</li>
              <li>Retorno humano em até 1 dia útil</li>
            </ul>
          </div>
          <QuoteForm expeditions={expeditions} departures={departures} />
        </div>
      </section>
    </div>
  );
}
