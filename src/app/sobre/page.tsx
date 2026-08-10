import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "ABC Fly Expeditions — braço de aventura da ABC FLY Viagens e Turismo. Explore Everything.",
};

export default function SobrePage() {
  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "46rem" }}>
          <span className="eyebrow">Quem somos</span>
          <h1 className="display" style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}>
            Uma comunidade de exploradores
          </h1>
          <p style={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
            A ABC FLY EXPEDITIONS é o braço de aventura da ABC FLY Viagens e
            Turismo, agência com mais de 21 anos de experiência no mercado de
            viagens de luxo. Criamos esta unidade para quem busca natureza,
            autenticidade e adrenalina — sem abrir mão de segurança, planejamento
            e credibilidade.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--stone)" }}>
            Nosso lema é simples e poderoso: Explore Everything. Queremos
            inspirar você a explorar não apenas lugares, mas também culturas,
            conexões e novas formas de ver o mundo.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/solicitar-orcamento" className="btn btn-primary">
              Planejar minha expedição
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
