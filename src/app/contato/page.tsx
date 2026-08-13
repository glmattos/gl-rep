import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a ABC Fly Expeditions para dúvidas e orçamentos.",
};

export default function ContatoPage() {
  return (
    <div className="page-pad">
      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container" style={{ maxWidth: "42rem" }}>
          <span className="eyebrow">Fale conosco</span>
          <h1 className="display" style={{ fontSize: "var(--h1)", maxWidth: "10ch" }}>
            Contato
          </h1>
          <p style={{ lineHeight: 1.75, fontSize: "var(--lead)" }}>
            Para orçamentos de expedições, use o formulário inteligente — assim
            nossa equipe já recebe o roteiro e a data escolhidos.
          </p>
          <div style={{ display: "grid", gap: "0.8rem", marginTop: "1.2rem" }}>
            <p style={{ margin: 0 }}>
              WhatsApp:{" "}
              <a href="https://wa.me/5511915285462" className="link-focus">
                (11) 91528-5462
              </a>
            </p>
            <p style={{ margin: 0 }}>Base: Santo André — SP</p>
            <p style={{ margin: 0 }}>
              Cadastur · Braço de aventura da ABC FLY Viagens e Turismo
            </p>
          </div>
          <div className="btn-row" style={{ marginTop: "1.6rem" }}>
            <Link href="/solicitar-orcamento" className="btn btn-primary">
              Solicite um orçamento
            </Link>
            <a
              href="https://wa.me/5511915285462?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20da%20ABC%20Fly."
              className="btn btn-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com um especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
