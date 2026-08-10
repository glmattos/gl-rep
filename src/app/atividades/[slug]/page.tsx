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
      <section
        style={{
          position: "relative",
          minHeight: "70svh",
          display: "grid",
          alignItems: "end",
          color: "var(--snow)",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-media"
            src={hub.heroImage}
            alt={hub.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(6,20,29,0.2), rgba(6,20,29,0.85))",
            }}
          />
        </div>
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingBottom: "3rem",
            paddingTop: "calc(var(--header-h) + 2rem)",
          }}
        >
          <p className="eyebrow" style={{ color: "var(--lime)" }}>
            Atividade
          </p>
          <h1 className="display" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
            {hub.name}
          </h1>
          <p style={{ maxWidth: "36rem", fontSize: "1.15rem", lineHeight: 1.65 }}>
            {hub.tagline}
          </p>
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
