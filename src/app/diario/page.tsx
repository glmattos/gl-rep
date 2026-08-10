import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diário",
  description:
    "Inspiração, planejamento e autoridade — o diário de viagens da ABC Fly Expeditions.",
};

const posts = [
  {
    title: "Peru em 10 dias: deserto, montanhas e aventura",
    excerpt:
      "Uma travessia entre Lima, Huacachina e Cusco com ritmo humano e descoberta.",
    related: "/expedicoes?destino=Am%C3%A9rica%20do%20Sul",
  },
  {
    title: "Roteiros de bike na Escócia",
    excerpt:
      "Highlands, lochs e a liberdade de explorar o país sobre duas rodas.",
    related: "/expedicoes/escocia-bike-lago-ness",
  },
  {
    title: "Como planejar uma aventura de luxo",
    excerpt:
      "Conforto e selvageria podem coexistir — com curadoria e segurança.",
    related: "/expedicoes",
  },
];

export default function DiarioPage() {
  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Inspiração integrada</span>
            <h1 className="display">Diário</h1>
            <p>
              Artigos que estimulam desejo, ajudam a planejar e conectam
              diretamente às expedições.
            </p>
          </div>
          <div className="card-grid">
            {posts.map((post) => (
              <article key={post.title} className="panel" style={{ padding: "1.4rem" }}>
                <h2 className="display" style={{ fontSize: "1.8rem", marginTop: 0 }}>
                  {post.title}
                </h2>
                <p style={{ color: "var(--stone)", lineHeight: 1.65 }}>{post.excerpt}</p>
                <Link href={post.related} className="btn btn-dark">
                  Ver expedições relacionadas
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
