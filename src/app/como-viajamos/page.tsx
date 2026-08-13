import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como viajamos",
  description:
    "Método ABC Fly: curadoria, segurança, sustentabilidade e orçamento personalizado.",
};

const pillars = [
  {
    title: "Curadoria",
    body: "Cada roteiro é escolhido por relevância, época e parceiros confiáveis — não por volume de catálogo.",
  },
  {
    title: "Segurança",
    body: "Operação com fornecedores experientes, protocolos de altitude/mar e orientação clara antes do embarque.",
  },
  {
    title: "Personalização",
    body: "O site não vende no carrinho. Montamos proposta com data, perfil do grupo e nível da experiência.",
  },
  {
    title: "Sustentabilidade",
    body: "Respeito a ecossistemas frágeis, normas locais e turismo com propósito — do polar ao cerrado.",
  },
];

export default function ComoViajamosPage() {
  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "48rem" }}>
          <span className="eyebrow">Método</span>
          <h1
            className="display"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)", marginBottom: "1rem" }}
          >
            Como viajamos
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.75 }}>
            Somos o braço de aventura da ABC FLY Viagens e Turismo. Mais de 21
            anos de mercado de luxo sustentam uma operação que une emoção e
            precisão — com Cadastur e parceiros nacionais e internacionais.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="panel" style={{ padding: "1.5rem" }}>
                <h2 className="display" style={{ fontSize: "2rem", marginTop: 0 }}>
                  {pillar.title}
                </h2>
                <p style={{ margin: 0, lineHeight: 1.7, color: "var(--stone)" }}>
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/solicitar-orcamento" className="btn btn-primary">
              Começar meu orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
