import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "ABC Fly Expeditions — braço de aventura da ABC FLY Viagens e Turismo. Explore Everything.",
};

export default function SobrePage() {
  return (
    <>
      <section className="hero-shell hero-shell--short">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-media"
            src="/images/hero-trek.jpg"
            alt="Viajantes em expedição na natureza"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <p className="eyebrow" style={{ color: "var(--lime)" }}>
            Quem somos
          </p>
          <h1 className="display hero-title" style={{ maxWidth: "14ch" }}>
            Uma comunidade de exploradores
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "46rem" }}>
          <p style={{ lineHeight: 1.8, fontSize: "1.12rem" }}>
            A ABC FLY EXPEDITIONS é o braço de aventura da ABC FLY Viagens e
            Turismo, agência com mais de 21 anos de experiência no mercado de
            viagens de luxo. Criamos esta unidade para quem busca natureza,
            autenticidade e adrenalina — sem abrir mão de segurança, planejamento
            e credibilidade.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--stone)" }}>
            Com base em Santo André – SP, levamos você a destinos no Brasil e no
            mundo: surf trips, trekking, navegações, ecoturismo e experiências
            culturais. Trabalhamos com os melhores fornecedores e operadoras,
            nacionais e internacionais.
          </p>
          <p
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "2rem",
              marginTop: "2rem",
            }}
          >
            Explore Everything.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "1.5rem" }}>
            <Link href="/como-viajamos" className="btn btn-dark">
              Como viajamos
            </Link>
            <Link href="/solicitar-orcamento" className="btn btn-primary">
              Planejar minha expedição
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
