import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições",
};

export default function TermosPage() {
  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "44rem" }}>
          <h1 className="display">Termos e Condições</h1>
          <p style={{ lineHeight: 1.8 }}>
            As informações publicadas neste site têm caráter informativo e de
            apresentação de experiências. Valores “a partir de”, datas e
            roteiros podem variar conforme disponibilidade, câmbio, temporada e
            condições operacionais.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--stone)" }}>
            A contratação efetiva ocorre mediante proposta personalizada e
            confirmação formal com a equipe ABC Fly Expeditions / ABC FLY
            Viagens e Turismo. Roteiros adaptáveis podem sofrer alterações por
            clima, segurança ou logística.
          </p>
        </div>
      </section>
    </div>
  );
}
