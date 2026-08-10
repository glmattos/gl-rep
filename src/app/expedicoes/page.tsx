import type { Metadata } from "next";
import { ExpeditionCard } from "@/components/ui/ExpeditionCard";
import { getAllExpeditions, getTaxonomy } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expedições",
  description:
    "Explore roteiros de aventura da ABC Fly Expeditions e solicite um orçamento personalizado.",
};

export default async function ExpeditionsPage({
  searchParams,
}: {
  searchParams: Promise<{ destino?: string; atividade?: string }>;
}) {
  const params = await searchParams;
  const all = getAllExpeditions();
  const taxonomy = getTaxonomy();

  const expeditions = all.filter((item) => {
    const destinationOk = params.destino
      ? item.destinations.some(
          (destination) =>
            destination.toLowerCase() === params.destino?.toLowerCase(),
        )
      : true;
    const activityOk = params.atividade
      ? item.activities.some(
          (activity) =>
            activity.toLowerCase() === params.atividade?.toLowerCase(),
        )
      : true;
    return destinationOk && activityOk;
  });

  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Catálogo de experiências</span>
            <h1 className="display">Expedições</h1>
            <p>
              Filtre por destino ou atividade. Cada roteiro é uma página rica de
              apresentação — o próximo passo é solicitar orçamento.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.55rem",
              marginBottom: "2rem",
            }}
          >
            <FilterChip href="/expedicoes" active={!params.destino && !params.atividade}>
              Todas
            </FilterChip>
            {taxonomy.activities.map((activity) => (
              <FilterChip
                key={activity}
                href={`/expedicoes?atividade=${encodeURIComponent(activity)}`}
                active={params.atividade === activity}
              >
                {activity}
              </FilterChip>
            ))}
            {taxonomy.destinations.slice(0, 8).map((destination) => (
              <FilterChip
                key={destination}
                href={`/expedicoes?destino=${encodeURIComponent(destination)}`}
                active={params.destino === destination}
              >
                {destination}
              </FilterChip>
            ))}
          </div>

          <div className="card-grid">
            {expeditions.map((expedition) => (
              <ExpeditionCard key={expedition.slug} expedition={expedition} />
            ))}
          </div>

          {expeditions.length === 0 ? (
            <p style={{ color: "var(--stone)" }}>
              Nenhuma expedição encontrada com esses filtros.
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="link-focus"
      style={{
        padding: "0.55rem 0.85rem",
        border: "1px solid var(--line)",
        background: active ? "var(--navy)" : "transparent",
        color: active ? "var(--snow)" : "var(--ink)",
        fontSize: "0.78rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        fontWeight: 700,
      }}
    >
      {children}
    </Link>
  );
}
