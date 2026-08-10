import Link from "next/link";
import { ExpeditionCard } from "@/components/ui/ExpeditionCard";
import {
  getAllDestinationHubs,
  getAllPosts,
  getFeaturedExpeditions,
  getTestimonials,
} from "@/lib/content";
import { formatDate } from "@/lib/format";

export default function HomePage() {
  const featured = getFeaturedExpeditions(3);
  const destinations = getAllDestinationHubs().slice(0, 6);
  const testimonials = getTestimonials().slice(0, 2);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "grid",
          alignItems: "end",
          color: "var(--snow)",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-media"
            src="/images/hero-home.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(6,20,29,0.28) 0%, rgba(6,20,29,0.18) 42%, rgba(6,20,29,0.82) 100%)",
            }}
          />
        </div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingBottom: "clamp(3.5rem, 8vw, 6rem)",
            paddingTop: "calc(var(--header-h) + 2rem)",
          }}
        >
          <p className="eyebrow reveal" style={{ color: "var(--lime)" }}>
            ABC Fly Expeditions
          </p>
          <h1
            className="display reveal reveal-delay"
            style={{
              margin: "0.7rem 0 1rem",
              maxWidth: "11ch",
              fontSize: "clamp(3.4rem, 9vw, 7rem)",
            }}
          >
            Explore Everything.
          </h1>
          <p
            className="reveal reveal-delay-2"
            style={{
              maxWidth: "34rem",
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: 1.65,
              margin: "0 0 1.8rem",
              color: "rgba(245,242,235,0.9)",
            }}
          >
            Expedições de aventura onde o mapa não grita — sussurra. Curadoria,
            segurança e sofisticação para quem quer ir além do óbvio.
          </p>
          <div
            className="reveal reveal-delay-2"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}
          >
            <Link href="/expedicoes" className="btn btn-primary">
              Ver expedições
            </Link>
            <Link href="/solicitar-orcamento" className="btn btn-secondary">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Próximas jornadas</span>
            <h2 className="display">Expedições em destaque</h2>
            <p>
              Cada roteiro é uma página de experiência — não um produto de loja.
              Escolha a jornada e solicite um orçamento sob medida.
            </p>
          </div>
          <div className="card-grid">
            {featured.map((expedition) => (
              <ExpeditionCard key={expedition.slug} expedition={expedition} />
            ))}
          </div>
          <div style={{ marginTop: "2.2rem" }}>
            <Link href="/expedicoes" className="btn btn-dark">
              Ver todas as expedições
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Escolha um horizonte</span>
            <h2 className="display">Destinos</h2>
            <p>Do gelo polar ao trópico — comece pelo mapa que mais te chama.</p>
          </div>
          <div className="card-grid">
            {destinations.map((hub) => (
              <Link
                key={hub.slug}
                href={`/destinos/${hub.slug}`}
                className="link-focus"
                style={{ display: "grid", gap: "0.7rem" }}
              >
                <div className="media-frame" style={{ aspectRatio: "4 / 3" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={hub.heroImage} alt={hub.name} />
                </div>
                <div>
                  <h3 className="display" style={{ margin: 0, fontSize: "1.7rem" }}>
                    {hub.name}
                  </h3>
                  <p style={{ margin: "0.35rem 0 0", color: "var(--stone)" }}>
                    {hub.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, var(--navy) 0%, var(--ocean) 55%, #234d3a 100%)",
          color: "var(--snow)",
        }}
      >
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <span className="eyebrow" style={{ color: "var(--lime)" }}>
            Como viajamos
          </span>
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
            Não vendemos pacotes. Criamos jornadas.
          </h2>
          <p style={{ margin: 0, lineHeight: 1.75, fontSize: "1.08rem", opacity: 0.9 }}>
            Somos o braço de aventura da ABC FLY Viagens e Turismo, com mais de
            21 anos de experiência. Planejamos cada detalhe para que você explore
            com liberdade — e volte com histórias.
          </p>
          <div>
            <Link href="/como-viajamos" className="btn btn-secondary">
              Nosso método
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Viajantes</span>
            <h2 className="display">Histórias de quem foi</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "1.25rem",
            }}
            className="testimonial-grid"
          >
            {testimonials.map((item) => (
              <blockquote key={item.id} className="panel" style={{ margin: 0, padding: "1.4rem" }}>
                <p className="display" style={{ fontSize: "1.45rem", lineHeight: 1.35 }}>
                  “{item.quote}”
                </p>
                <footer style={{ color: "var(--stone)" }}>
                  <strong style={{ color: "var(--ink)" }}>{item.name}</strong> · {item.trip}
                </footer>
              </blockquote>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/depoimentos" className="btn btn-dark">
              Ver depoimentos
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Diário</span>
            <h2 className="display">Inspiração para a próxima saída</h2>
          </div>
          <div className="card-grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/diario/${post.slug}`}
                className="link-focus"
                style={{ display: "grid", gap: "0.7rem" }}
              >
                <div className="media-frame" style={{ aspectRatio: "16 / 10" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.heroImage} alt={post.title} />
                </div>
                <div>
                  <span className="eyebrow">{formatDate(post.publishedAt)}</span>
                  <h3 className="display" style={{ margin: "0.35rem 0", fontSize: "1.6rem" }}>
                    {post.title}
                  </h3>
                  <p style={{ margin: 0, color: "var(--stone)" }}>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.2rem", maxWidth: "40rem" }}>
          <span className="eyebrow">Pronto para o próximo mapa?</span>
          <h2 className="display" style={{ margin: 0, fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
            Solicite um orçamento personalizado
          </h2>
          <p style={{ margin: 0, lineHeight: 1.7, color: "var(--stone)" }}>
            Conte a expedição, a data e o perfil do grupo. Nossa equipe retorna
            com uma proposta clara — sem checkout genérico.
          </p>
          <div>
            <Link href="/solicitar-orcamento" className="btn btn-primary">
              Começar orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
