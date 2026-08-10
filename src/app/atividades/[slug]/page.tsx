import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExpeditionCard } from "@/components/ui/ExpeditionCard";
import {
  getActivityHub,
  getAllActivityHubs,
  getExpeditionsForActivity,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllActivityHubs().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getActivityHub(slug);
  if (!hub) return { title: "Atividade" };
  return { title: hub.name, description: hub.summary };
}

export default async function ActivityDetailPage({ params }: Props) {
  const { slug } = await params;
  const hub = getActivityHub(slug);
  if (!hub) notFound();
  const expeditions = getExpeditionsForActivity(hub);

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
            Experiência
          </p>
          <h1 className="display hero-title">{hub.name}</h1>
          <p className="hero-lead">{hub.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">A experiência</span>
            <h2 className="display">Expedições de {hub.name}</h2>
            <p>{hub.summary}</p>
          </div>
          <div className="card-grid">
            {expeditions.map((expedition) => (
              <ExpeditionCard key={expedition.slug} expedition={expedition} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
