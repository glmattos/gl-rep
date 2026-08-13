import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpeditionCard } from "@/components/ui/ExpeditionCard";
import {
  getAllDestinationHubs,
  getDestinationHub,
  getExpeditionsForDestination,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllDestinationHubs().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getDestinationHub(slug);
  if (!hub) return { title: "Destino" };
  return { title: hub.name, description: hub.summary };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const hub = getDestinationHub(slug);
  if (!hub) notFound();
  const expeditions = getExpeditionsForDestination(hub);

  return (
    <>
      <section className="hero-shell hero-shell--short">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-media" src={hub.heroImage} alt={hub.name} />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <p className="eyebrow" style={{ color: "var(--lime)" }}>
            Destino
          </p>
          <h1 className="display hero-title">{hub.name}</h1>
          <p className="hero-lead">{hub.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Por que ir</span>
            <h2 className="display">Expedições em {hub.name}</h2>
            <p>{hub.summary}</p>
          </div>
          <div className="card-grid">
            {expeditions.map((expedition) => (
              <ExpeditionCard key={expedition.slug} expedition={expedition} />
            ))}
          </div>
          {expeditions.length === 0 ? (
            <p style={{ color: "var(--stone)" }}>
              Em breve novas saídas neste destino.{" "}
              <Link href="/solicitar-orcamento">Solicite um orçamento sob medida</Link>.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
