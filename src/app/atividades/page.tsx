import type { Metadata } from "next";
import Link from "next/link";
import { getTaxonomy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Atividades",
  description: "Trekking, bike, navegações e mais — filtre expedições por atividade.",
};

export default function AtividadesPage() {
  const { activities } = getTaxonomy();

  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Como você quer explorar</span>
            <h1 className="display">Atividades</h1>
            <p>Uma linguagem clara de descoberta — sem categorias de loja.</p>
          </div>
          <div className="card-grid">
            {activities.map((activity) => (
              <Link
                key={activity}
                href={`/expedicoes?atividade=${encodeURIComponent(activity)}`}
                className="panel link-focus"
                style={{ padding: "1.5rem", display: "grid", gap: "0.5rem" }}
              >
                <span className="eyebrow">Atividade</span>
                <strong className="display" style={{ fontSize: "2rem" }}>
                  {activity}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
