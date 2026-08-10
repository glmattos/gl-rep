import Link from "next/link";
import { ExpeditionCard } from "@/components/ui/ExpeditionCard";
import {
  getAllActivityHubs,
  getAllDestinationHubs,
  getAllPosts,
  getFeaturedExpeditions,
  getTestimonials,
} from "@/lib/content";
import { formatDate } from "@/lib/format";

export default function HomePage() {
  const featured = getFeaturedExpeditions(3);
  const destinations = getAllDestinationHubs().slice(0, 6);
  const activities = getAllActivityHubs();
  const testimonials = getTestimonials().slice(0, 2);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="hero-shell">
        <div className="hero-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-media" src="/images/hero-home.jpg" alt="" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <p className="eyebrow reveal" style={{ color: "var(--lime)" }}>
            ABC Fly Expeditions
          </p>
          <h1 className="display hero-title reveal reveal-delay">
            Explore Everything.
          </h1>
          <p className="hero-lead reveal reveal-delay-2">
            Expedições de aventura onde o mapa não grita — sussurra. Curadoria,
            segurança e sofisticação para quem quer viver o mundo de verdade.
          </p>
          <div className="btn-row reveal reveal-delay-2">
            <Link href="/expedicoes" className="btn btn-primary">
              Explore as expedições
            </Link>
            <Link href="/solicitar-orcamento" className="btn btn-secondary">
              Solicite um orçamento
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: "clamp(2rem, 4vw, 3rem)" }}>
        <div className="container">
          <div className="story-steps">
            <div>
              <span className="eyebrow">01</span>
              <strong>O que é a ABC Fly?</strong>
              <p>Braço de aventura de uma agência com 21+ anos de turismo de luxo.</p>
            </div>
            <div>
              <span className="eyebrow">02</span>
              <strong>O que você pode viver?</strong>
              <p>Trekking, navegações, bike e natureza em destinos no Brasil e no mundo.</p>
            </div>
            <div>
              <span className="eyebrow">03</span>
              <strong>Por que ir conosco?</strong>
              <p>Curadoria, segurança e atendimento humano — sem pacote genérico.</p>
            </div>
            <div>
              <span className="eyebrow">04</span>
              <strong>Como começar?</strong>
              <p>Escolha uma expedição e solicite um orçamento personalizado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem, 4vw, 3rem)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Descoberta</span>
            <h2 className="display">Expedições em destaque</h2>
            <p>
              Cada roteiro é uma experiência completa — imagens, itinerário,
              datas e orçamento. Nunca um produto de loja.
            </p>
          </div>
          <div className="card-grid">
            {featured.map((expedition) => (
              <ExpeditionCard key={expedition.slug} expedition={expedition} />
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/expedicoes" className="btn btn-dark">
              Conheça todas as experiências
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Destinos</span>
            <h2 className="display">Para onde você quer ir?</h2>
            <p>Do gelo polar ao trópico — comece pelo horizonte que mais te chama.</p>
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
                  <h3 className="display" style={{ margin: 0, fontSize: "var(--h3)" }}>
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
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--lime)" }}>
              Experiências
            </span>
            <h2 className="display" style={{ color: "var(--snow)" }}>
              Como você quer explorar?
            </h2>
            <p style={{ color: "rgba(245,242,235,0.82)" }}>
              Trekking, navegações, bike e natureza selvagem — escolha o jeito
              de sentir a jornada.
            </p>
          </div>
          <div className="card-grid">
            {activities.map((hub) => (
              <Link
                key={hub.slug}
                href={`/atividades/${hub.slug}`}
                className="link-focus"
                style={{
                  display: "grid",
                  gap: "0.55rem",
                  padding: "1.2rem",
                  border: "1px solid var(--line-light)",
                  background: "rgba(6,20,29,0.28)",
                }}
              >
                <span className="eyebrow" style={{ color: "var(--lime)" }}>
                  Experiência
                </span>
                <strong className="display" style={{ fontSize: "var(--h3)" }}>
                  {hub.name}
                </strong>
                <span style={{ opacity: 0.85 }}>{hub.tagline}</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "1.75rem" }}>
            <Link href="/como-viajamos" className="btn btn-secondary">
              Por que viajar com a ABC Fly
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Confiança</span>
            <h2 className="display">Histórias de quem foi</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.id} className="panel" style={{ margin: 0, padding: "1.4rem" }}>
                <p className="display" style={{ fontSize: "1.4rem", lineHeight: 1.35 }}>
                  “{item.quote}”
                </p>
                <footer style={{ color: "var(--stone)" }}>
                  <strong style={{ color: "var(--ink)" }}>{item.name}</strong> · {item.trip}
                </footer>
              </blockquote>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }} className="btn-row">
            <Link href="/depoimentos" className="btn btn-dark">
              Ver depoimentos
            </Link>
            <Link href="/sobre" className="btn btn-dark">
              Conhecer a ABC Fly
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
                  <h3 className="display" style={{ margin: "0.35rem 0", fontSize: "var(--h3)" }}>
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
        <div className="container" style={{ display: "grid", gap: "1.1rem", maxWidth: "42rem" }}>
          <span className="eyebrow">Ação</span>
          <h2 className="display" style={{ margin: 0, fontSize: "var(--h2)" }}>
            Pronto para a próxima expedição?
          </h2>
          <p style={{ margin: 0, lineHeight: 1.7, color: "var(--stone)", fontSize: "var(--lead)" }}>
            Conte a jornada, a data e o perfil do grupo. Um especialista monta
            sua proposta — sem checkout automático.
          </p>
          <div className="btn-row">
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
    </>
  );
}
