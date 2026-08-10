import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacidadePage() {
  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ maxWidth: "44rem" }}>
          <h1 className="display">Política de Privacidade</h1>
          <p style={{ lineHeight: 1.8 }}>
            A ABC Fly Expeditions trata dados pessoais com finalidade de retorno
            comercial e operacional sobre solicitações de orçamento, contato e
            melhoria da experiência digital, em conformidade com a LGPD.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--stone)" }}>
            Ao enviar um formulário, você consente o uso de nome, e-mail,
            telefone e preferências de viagem para elaborarmos propostas e
            manter comunicação relacionada ao seu interesse. Para solicitações
            sobre seus dados, fale conosco pelo WhatsApp ou formulário de
            contato.
          </p>
        </div>
      </section>
    </div>
  );
}
