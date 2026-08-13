import type { Metadata } from "next";
import Link from "next/link";
import { ExpeditionCard } from "@/components/ui/ExpeditionCard";
import { getAllExpeditions, getTaxonomy } from "@/lib/content";

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
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Experiências de viagem</span>
            <h1 className="display" style={{ fontSize: "var(--h1)", maxWidth: "12ch" }}>
              Expedições
            </h1>
            <p>
              Filtre por destino ou experiência. Cada roteiro conta a jornada
              completa — o próximo passo é solicitar orçamento.
            </p>
          </div>

          <div className="filter-row">
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
              Nenhuma expedição encontrada com esses filtros.{" "}
              <Link href="/solicitar-orcamento">Solicite um orçamento sob medida</Link>.
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
      className={`filter-chip link-focus ${active ? "is-active" : ""}`}
    >
      {children}
    </Link>
  );
}
