import type { Metadata } from "next";
import Link from "next/link";
import { getAllActivityHubs, getExpeditionsForActivity } from "@/lib/content";

export const metadata: Metadata = {
  title: "Atividades",
  description:
    "Trekking, bike, navegações e natureza — filtre expedições ABC Fly por atividade.",
};

export default function AtividadesPage() {
  const hubs = getAllActivityHubs();

  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Como você quer explorar</span>
            <h1 className="display">Atividades</h1>
            <p>
              Uma linguagem clara de descoberta. Sem categorias de loja — só o
              jeito como você quer sentir o mundo.
            </p>
          </div>
          <div className="card-grid">
            {hubs.map((hub) => {
              const count = getExpeditionsForActivity(hub).length;
              return (
                <Link
                  key={hub.slug}
                  href={`/atividades/${hub.slug}`}
                  className="link-focus"
                  style={{ display: "grid", gap: "0.85rem" }}
                >
                  <div className="media-frame" style={{ aspectRatio: "4 / 3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={hub.heroImage} alt={hub.name} />
                  </div>
                  <div>
                    <span className="eyebrow">
                      {count} {count === 1 ? "expedição" : "expedições"}
                    </span>
                    <h2
                      className="display"
                      style={{ margin: "0.35rem 0", fontSize: "2rem" }}
                    >
                      {hub.name}
                    </h2>
                    <p style={{ margin: 0, color: "var(--stone)", lineHeight: 1.6 }}>
                      {hub.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
