import type { Metadata } from "next";
import Link from "next/link";
import { getTaxonomy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Destinos",
  description: "Explore expedições ABC Fly por continente e país.",
};

export default function DestinosPage() {
  const { destinations } = getTaxonomy();

  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Mapa do desejo</span>
            <h1 className="display">Destinos</h1>
            <p>Escolha um destino e descubra as expedições disponíveis.</p>
          </div>
          <div className="card-grid">
            {destinations.map((destination) => (
              <Link
                key={destination}
                href={`/expedicoes?destino=${encodeURIComponent(destination)}`}
                className="panel link-focus"
                style={{ padding: "1.5rem", display: "grid", gap: "0.5rem" }}
              >
                <span className="eyebrow">Destino</span>
                <strong className="display" style={{ fontSize: "2rem" }}>
                  {destination}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
