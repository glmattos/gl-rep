import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a ABC Fly Expeditions para dúvidas e orçamentos.",
};

export default function ContatoPage() {
  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "40rem" }}>
          <span className="eyebrow">Fale conosco</span>
          <h1 className="display" style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
            Contato
          </h1>
          <p style={{ lineHeight: 1.75 }}>
            Para orçamentos de expedições, use o formulário inteligente — assim
            nossa equipe já recebe o roteiro e a data escolhidos.
          </p>
          <div style={{ display: "grid", gap: "0.8rem", marginTop: "1.2rem" }}>
            <p style={{ margin: 0 }}>
              WhatsApp:{" "}
              <a href="tel:+5511915285462" className="link-focus">
                (11) 91528-5462
              </a>
            </p>
            <p style={{ margin: 0 }}>Base: Santo André — SP</p>
          </div>
          <div style={{ marginTop: "1.6rem" }}>
            <Link href="/solicitar-orcamento" className="btn btn-primary">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
