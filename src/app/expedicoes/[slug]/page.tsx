import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeparturesTable } from "@/components/expedition/DeparturesTable";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ExpeditionCard } from "@/components/ui/ExpeditionCard";
import {
  getAllExpeditions,
  getDeparturesForExpedition,
  getExpeditionBySlug,
  getRelatedExpeditions,
} from "@/lib/content";
import { difficultyLabel, formatPrice } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllExpeditions().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const expedition = getExpeditionBySlug(slug);
  if (!expedition) return { title: "Expedição" };
  return {
    title: expedition.title,
    description: expedition.summary,
    openGraph: {
      title: expedition.title,
      description: expedition.summary,
      images: [expedition.heroImage],
    },
  };
}

export default async function ExpeditionPage({ params }: Props) {
  const { slug } = await params;
  const expedition = getExpeditionBySlug(slug);
  if (!expedition) notFound();

  const departures = getDeparturesForExpedition(expedition.slug);
  const related = getRelatedExpeditions(expedition);
  const pageUrl = `https://www.abcflyexpeditions.com/expedicoes/${expedition.slug}`;

  return (
    <div className="has-sticky-cta">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: expedition.title,
          description: expedition.summary,
          image: expedition.heroImage,
          touristType: expedition.activities.join(", "),
          itinerary: expedition.dayByDay.map((day) => ({
            "@type": "TouristAttraction",
            name: `Dia ${day.day}: ${day.title}`,
            description: day.body,
          })),
          offers: expedition.priceFrom
            ? {
                "@type": "Offer",
                priceCurrency: expedition.currency,
                price: expedition.priceFrom,
                url: pageUrl,
                availability: "https://schema.org/InStock",
              }
            : undefined,
          provider: {
            "@type": "TravelAgency",
            name: "ABC Fly Expeditions",
            url: "https://www.abcflyexpeditions.com",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: expedition.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <section className="hero-shell hero-shell--short">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-media"
            src={expedition.heroImage}
            alt={expedition.heroAlt}
          />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <p className="eyebrow" style={{ color: "var(--lime)" }}>
            {expedition.destinations.join(" · ")}
          </p>
          <h1 className="display hero-title" style={{ maxWidth: "16ch" }}>
            {expedition.title}
          </h1>
          <p className="hero-lead">{expedition.tagline}</p>
          <div className="btn-row">
            <a href="#orcamento" className="btn btn-primary">
              Solicite um orçamento
            </a>
            <a href="#roteiro" className="btn btn-secondary">
              Conheça a experiência
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="container">
          <div className="fact-bar">
            <div>
              <span>Duração</span>
              <strong>{expedition.durationDays} dias</strong>
            </div>
            <div>
              <span>Nível</span>
              <strong>{difficultyLabel(expedition.difficulty)}</strong>
            </div>
            <div>
              <span>Melhor época</span>
              <strong>{expedition.bestSeason}</strong>
            </div>
            <div>
              <span>Grupo</span>
              <strong>{expedition.groupSize}</strong>
            </div>
            <div>
              <span>A partir de</span>
              <strong>
                {expedition.priceFrom
                  ? formatPrice(expedition.priceFrom)
                  : "Sob consulta"}
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container expedition-layout">
          <div style={{ display: "grid", gap: "3rem" }}>
            <div>
              <span className="eyebrow">A essência</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Por que esta jornada
              </h2>
              <p style={{ lineHeight: 1.8, fontSize: "1.08rem" }}>{expedition.story}</p>
              <p style={{ lineHeight: 1.8, color: "var(--stone)" }}>{expedition.summary}</p>
            </div>

            <div>
              <span className="eyebrow">Galeria</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Atmosfera da expedição
              </h2>
              <div className="gallery-grid" style={{ marginTop: "1.2rem" }}>
                <div className="media-frame" style={{ minHeight: "360px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={expedition.gallery[0]?.src ?? expedition.heroImage}
                    alt={expedition.gallery[0]?.alt ?? expedition.heroAlt}
                  />
                </div>
                <div className="stack">
                  {expedition.gallery.slice(1, 3).map((image) => (
                    <div
                      key={image.src}
                      className="media-frame"
                      style={{ minHeight: "170px" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">Destaques</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                O que torna esta viagem memorável
              </h2>
              <ul style={{ paddingLeft: "1.1rem", lineHeight: 1.9 }}>
                {expedition.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div id="roteiro">
              <span className="eyebrow">Dia a dia</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Roteiro da expedição
              </h2>
              <div className="accordion" style={{ marginTop: "1rem" }}>
                {expedition.dayByDay.map((day) => (
                  <details key={day.day}>
                    <summary>
                      <span>
                        Dia {day.day} — {day.title}
                      </span>
                      <span aria-hidden>+</span>
                    </summary>
                    <div className="accordion-body">{day.body}</div>
                  </details>
                ))}
              </div>
            </div>

            {expedition.mapEmbedUrl ? (
              <div>
                <span className="eyebrow">Mapa</span>
                <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Percurso
                </h2>
                <div
                  className="media-frame"
                  style={{ marginTop: "1rem", minHeight: "320px" }}
                >
                  <iframe
                    title={`Mapa — ${expedition.title}`}
                    src={expedition.mapEmbedUrl}
                    style={{ width: "100%", height: "320px", border: 0 }}
                    loading="lazy"
                  />
                </div>
              </div>
            ) : null}

            <div className="includes-grid">
              <div className="panel" style={{ padding: "1.25rem" }}>
                <h3 style={{ marginTop: 0 }}>Inclui</h3>
                <ul style={{ paddingLeft: "1.1rem", lineHeight: 1.8 }}>
                  {expedition.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="panel" style={{ padding: "1.25rem" }}>
                <h3 style={{ marginTop: 0 }}>Não inclui</h3>
                <ul style={{ paddingLeft: "1.1rem", lineHeight: 1.8 }}>
                  {expedition.excludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="datas">
              <span className="eyebrow">Saídas</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Datas da expedição
              </h2>
              <DeparturesTable departures={departures} />
            </div>

            <div>
              <span className="eyebrow">Importante</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Antes de embarcar
              </h2>
              <ul style={{ paddingLeft: "1.1rem", lineHeight: 1.85 }}>
                {expedition.importantInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Perguntas frequentes
              </h2>
              <div className="accordion" style={{ marginTop: "1rem" }}>
                {expedition.faq.map((item) => (
                  <details key={item.question}>
                    <summary>
                      <span>{item.question}</span>
                      <span aria-hidden>+</span>
                    </summary>
                    <div className="accordion-body">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="expedition-aside" id="orcamento">
            <QuoteForm
              expedition={expedition}
              departures={departures}
              pageUrl={pageUrl}
            />
          </aside>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Continue explorando</span>
              <h2 className="display">Expedições relacionadas</h2>
            </div>
            <div className="card-grid">
              {related.map((item) => (
                <ExpeditionCard key={item.slug} expedition={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <div className="sticky-cta">
        <a href="#orcamento" className="btn btn-primary">
          Solicite um orçamento
        </a>
        <a
          href={`https://wa.me/5511915285462?text=${encodeURIComponent(
            `Olá! Quero falar sobre: ${expedition.title}`,
          )}`}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com especialista
        </a>
      </div>
    </div>
  );
}
