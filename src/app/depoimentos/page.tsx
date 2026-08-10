import type { Metadata } from "next";
import Link from "next/link";
import { getTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Depoimentos",
  description: "O que dizem os viajantes da ABC Fly Expeditions.",
};

export default function DepoimentosPage() {
  const testimonials = getTestimonials();

  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Prova social</span>
            <h1 className="display">A opinião dos viajantes</h1>
            <p>
              Histórias reais de quem embarcou — e voltou querendo a próxima
              expedição.
            </p>
          </div>
          <div className="card-grid">
            {testimonials.map((item) => (
              <blockquote
                key={item.id}
                className="panel"
                style={{ margin: 0, padding: "1.6rem" }}
              >
                <p
                  className="display"
                  style={{ fontSize: "1.55rem", lineHeight: 1.35, marginTop: 0 }}
                >
                  “{item.quote}”
                </p>
                <footer style={{ color: "var(--stone)" }}>
                  <strong style={{ color: "var(--ink)" }}>{item.name}</strong>
                  <br />
                  {item.trip}
                  {item.location ? ` · ${item.location}` : ""}
                </footer>
              </blockquote>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/expedicoes" className="btn btn-dark">
              Ver expedições
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
