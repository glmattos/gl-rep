import type { Metadata } from "next";
import Link from "next/link";
import { getAllDestinationHubs, getExpeditionsForDestination } from "@/lib/content";

export const metadata: Metadata = {
  title: "Destinos",
  description:
    "Explore destinos ABC Fly — Nepal, Peru, Costa Rica, Tanzânia, Antártica e mais.",
};

export default function DestinosPage() {
  const hubs = getAllDestinationHubs();

  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Descoberta</span>
            <h1 className="display">Destinos</h1>
            <p>
              Países e continentes com expedições reais. Busque Nepal, Peru,
              Costa Rica, Tanzânia — e entre na jornada daquele lugar.
            </p>
          </div>
          <div className="card-grid">
            {hubs.map((hub) => {
              const count = getExpeditionsForDestination(hub).length;
              return (
                <Link
                  key={hub.slug}
                  href={`/destinos/${hub.slug}`}
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
