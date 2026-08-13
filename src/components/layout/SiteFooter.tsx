import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--navy-deep)",
        color: "var(--snow)",
        padding: "4rem 0 2rem",
        marginTop: "4rem",
      }}
    >
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div className="footer-grid">
          <div>
            <div
              style={{
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
              }}
            >
              <Image
                src="/brand/logo-mark-sm.png"
                alt=""
                width={240}
                height={127}
                style={{ width: "3rem", height: "auto" }}
              />
              <div>
                <div style={{ fontWeight: 800, letterSpacing: "0.14em" }}>ABC FLY</div>
                <div
                  style={{
                    color: "var(--lime)",
                    letterSpacing: "0.2em",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                  }}
                >
                  EXPEDITIONS
                </div>
              </div>
            </div>
            <p style={{ maxWidth: "28rem", lineHeight: 1.7, opacity: 0.84 }}>
              Marca de exploração. Expedições autênticas com curadoria, segurança
              e liberdade — onde o mapa não grita, sussurra.
            </p>
            <p
              className="display"
              style={{
                marginTop: "1rem",
                fontSize: "1.35rem",
              }}
            >
              Explore Everything.
            </p>
          </div>

          <div>
            <div className="eyebrow" style={{ color: "var(--lime)", marginBottom: "0.9rem" }}>
              Explorar
            </div>
            <div style={{ display: "grid", gap: "0.55rem" }}>
              <Link href="/expedicoes">Expedições</Link>
              <Link href="/destinos">Destinos</Link>
              <Link href="/atividades">Experiências</Link>
              <Link href="/diario">Diário</Link>
              <Link href="/contato">Contato</Link>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ color: "var(--lime)", marginBottom: "0.9rem" }}>
              Empresa
            </div>
            <div style={{ display: "grid", gap: "0.55rem" }}>
              <Link href="/sobre">Sobre</Link>
              <Link href="/como-viajamos">Como viajamos</Link>
              <Link href="/depoimentos">Depoimentos</Link>
              <Link href="/solicitar-orcamento">Solicitar orçamento</Link>
              <Link href="/loja" style={{ opacity: 0.7 }}>
                Equipamentos (em breve)
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--line-light)",
            paddingTop: "1.25rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            fontSize: "0.85rem",
            opacity: 0.72,
          }}
        >
          <span>© {new Date().getFullYear()} ABC Fly Expeditions</span>
          <span style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/legal/privacidade">Privacidade</Link>
            <Link href="/legal/termos">Termos</Link>
            <span>Cadastur · ABC FLY Viagens e Turismo</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
