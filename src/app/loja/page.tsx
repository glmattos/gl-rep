import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equipamentos",
  description:
    "Módulo futuro da loja de equipamentos ABC Fly — independente das expedições.",
};

export default function LojaPage() {
  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "40rem" }}>
          <span className="eyebrow">Módulo independente</span>
          <h1 className="display" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
            Equipamentos
          </h1>
          <p style={{ lineHeight: 1.75 }}>
            A futura loja de equipamentos existirá como módulo separado. Ela não
            interfere na experiência das expedições nem no funil de orçamento.
          </p>
          <Link href="/expedicoes" className="btn btn-primary">
            Voltar às expedições
          </Link>
        </div>
      </section>
    </div>
  );
}
