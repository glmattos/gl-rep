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
  const destinations = getAllDestinationHubs().slice(0, 10);
  const activities = getAllActivityHubs().slice(0, 8);
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
          <div className="hero-brand reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-mark-sm.png" alt="" />
            <span>
              <span className="brand-top" style={{ display: "block" }}>
                ABC FLY
              </span>
              <span className="brand-bottom" style={{ display: "block" }}>
                EXPEDITIONS
              </span>
            </span>
          </div>
          <h1 className="display hero-title reveal reveal-delay">
            Explore Everything.
          </h1>
          <p className="hero-lead reveal reveal-delay-2">
            Uma marca de exploração. Expedições autênticas no Brasil e no mundo —
            com curadoria, segurança e liberdade para viver o remoto de verdade.
          </p>
          <div className="btn-row reveal reveal-delay-2">
            <Link href="/destinos" className="btn btn-primary">
              Para onde você quer ir?
            </Link>
            <Link href="/expedicoes" className="btn btn-secondary">
              Ver expedições
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container manifesto">
          <div className="manifesto-visual media-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-nepal.jpg" alt="Trilha no Himalaia" />
          </div>
          <div>
            <span className="eyebrow">Manifesto</span>
            <h2 className="display" style={{ fontSize: "var(--h2)", margin: "0.55rem 0 1rem" }}>
              Onde o mapa não grita — sussurra.
            </h2>
            <p style={{ margin: "0 0 1rem", fontSize: "var(--lead)", lineHeight: 1.7 }}>
              A ABC Fly Expeditions é o braço de aventura de uma agência com mais
              de 21 anos. Não vendemos pacotes. Desenhamos jornadas de exploração
              com equipe, ritmo humano e respeito ao território.
            </p>
            <div className="journey-grid" style={{ marginTop: "1.25rem" }}>
              <div>
                <span className="eyebrow">O que é</span>
                <strong>Exploração com curadoria</strong>
                <p style={{ margin: "0.35rem 0 0", color: "var(--stone)" }}>
                  Destinos reais, operação séria, narrativa própria.
                </p>
              </div>
              <div>
                <span className="eyebrow">O que oferece</span>
                <strong>Expedições e roteiros sob medida</strong>
                <p style={{ margin: "0.35rem 0 0", color: "var(--stone)" }}>
                  Trekking, navegações, natureza, cultura e liberdade.
                </p>
              </div>
              <div>
                <span className="eyebrow">Por que diferente</span>
                <strong>Experiência, não loja</strong>
                <p style={{ margin: "0.35rem 0 0", color: "var(--stone)" }}>
                  Orçamento personalizado. Atendimento humano. Sem checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Destinos</span>
            <h2 className="display">Para onde você quer me levar?</h2>
            <p>
              Deslize pelos horizontes. Do Himalaia à Antártica — comece pelo
              lugar que acende a curiosidade.
            </p>
          </div>
          <div className="dest-rail" aria-label="Destinos em destaque">
            {destinations.map((hub) => (
              <Link
                key={hub.slug}
                href={`/destinos/${hub.slug}`}
                className="link-focus"
                style={{ display: "grid", gap: "0.65rem" }}
              >
                <div className="media-frame" style={{ aspectRatio: "3 / 4" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={hub.heroImage} alt={hub.name} loading="lazy" />
                </div>
                <div>
                  <h3 className="display" style={{ margin: 0, fontSize: "var(--h3)" }}>
                    {hub.name}
                  </h3>
                  <p style={{ margin: "0.3rem 0 0", color: "var(--stone)" }}>
                    {hub.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "1.75rem" }}>
            <Link href="/destinos" className="btn btn-dark">
              Explorar todos os destinos
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Expedições</span>
            <h2 className="display">Jornadas em destaque</h2>
            <p>
              Cada expedição é uma experiência completa — história, itinerário,
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
              Ver todas as expedições
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, var(--navy-deep) 0%, var(--ocean) 58%, #1f4d3f 100%)",
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
            <p style={{ color: "rgba(247,250,251,0.82)" }}>
              Aventura, wildlife, surf, cultura, trekking — escolha o jeito de
              sentir a jornada.
            </p>
          </div>
          <div className="card-grid">
            {activities.map((hub) => (
              <Link
                key={hub.slug}
                href={`/atividades/${hub.slug}`}
                className="link-focus"
                style={{ display: "grid", gap: "0.65rem" }}
              >
                <div className="media-frame" style={{ aspectRatio: "16 / 11" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={hub.heroImage} alt={hub.name} loading="lazy" />
                </div>
                <strong className="display" style={{ fontSize: "1.25rem" }}>
                  {hub.name}
                </strong>
                <span style={{ opacity: 0.85 }}>{hub.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ABC Fly Way</span>
            <h2 className="display">Como viajamos</h2>
            <p>
              Curadoria, segurança e presença. O método por trás de cada
              expedição — do primeiro contato ao retorno para casa.
            </p>
          </div>
          <div className="story-steps">
            <div>
              <span className="eyebrow">01</span>
              <strong>Escuta</strong>
              <p>Entendemos perfil, ritmo, medo e desejo antes de propor.</p>
            </div>
            <div>
              <span className="eyebrow">02</span>
              <strong>Desenho</strong>
              <p>Roteiro, equipe local e janela climática com precisão.</p>
            </div>
            <div>
              <span className="eyebrow">03</span>
              <strong>Campo</strong>
              <p>Operação no terreno com protocolo e liberdade de explorar.</p>
            </div>
            <div>
              <span className="eyebrow">04</span>
              <strong>Retorno</strong>
              <p>Histórias que ficam — e o próximo horizonte já em mente.</p>
            </div>
          </div>
          <div style={{ marginTop: "1.75rem" }}>
            <Link href="/como-viajamos" className="btn btn-dark">
              Conhecer o ABC Fly Way
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Diário</span>
            <h2 className="display">Stories de exploração</h2>
            <p>
              Guias, relatos e inspirações — o universo editorial que aumenta o
              desejo de ir.
            </p>
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
                  <img src={post.heroImage} alt={post.title} loading="lazy" />
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
          <div style={{ marginTop: "1.75rem" }}>
            <Link href="/diario" className="btn btn-dark">
              Entrar no diário
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Comunidade</span>
            <h2 className="display">Quem já explorou conosco</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.id} className="panel" style={{ margin: 0, padding: "1.4rem" }}>
                <p className="display" style={{ fontSize: "1.35rem", lineHeight: 1.35 }}>
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
            <Link href="/sobre" className="btn btn-ghost">
              Sobre a ABC Fly
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{
          background: "var(--navy-deep)",
          color: "var(--snow)",
        }}
      >
        <div className="container" style={{ display: "grid", gap: "1.1rem", maxWidth: "44rem" }}>
          <span className="eyebrow" style={{ color: "var(--lime)" }}>
            Próximo passo
          </span>
          <h2 className="display" style={{ margin: 0, fontSize: "var(--h2)", color: "var(--snow)" }}>
            Pronto para explorar?
          </h2>
          <p style={{ margin: 0, lineHeight: 1.7, opacity: 0.88, fontSize: "var(--lead)" }}>
            Encontre uma expedição ou peça um roteiro personalizado. Nossa
            equipe monta a proposta — sem carrinho, sem pressa falsa.
          </p>
          <div className="btn-row">
            <Link href="/solicitar-orcamento" className="btn btn-primary">
              Solicitar orçamento
            </Link>
            <a
              href="https://wa.me/5511915285462?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20da%20ABC%20Fly."
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
