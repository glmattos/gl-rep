import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeparturesTable } from "@/components/expedition/DeparturesTable";
import { QuoteForm } from "@/components/quote/QuoteForm";
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

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "88svh",
          display: "grid",
          alignItems: "end",
          color: "var(--snow)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-media"
            src={expedition.heroImage}
            alt={expedition.heroAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(6,20,29,0.25) 0%, rgba(6,20,29,0.2) 40%, rgba(6,20,29,0.88) 100%)",
            }}
          />
        </div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingBottom: "clamp(2.5rem, 6vw, 4.5rem)",
            paddingTop: "calc(var(--header-h) + 2rem)",
          }}
        >
          <p className="eyebrow" style={{ color: "var(--lime)" }}>
            {expedition.destinations.join(" · ")}
          </p>
          <h1
            className="display"
            style={{
              margin: "0.55rem 0 0.8rem",
              maxWidth: "16ch",
              fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
            }}
          >
            {expedition.title}
          </h1>
          <p
            style={{
              maxWidth: "36rem",
              margin: "0 0 1.4rem",
              fontSize: "1.15rem",
              lineHeight: 1.65,
              opacity: 0.92,
            }}
          >
            {expedition.tagline}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="#orcamento" className="btn btn-primary">
              Solicitar orçamento
            </a>
            <a href="#roteiro" className="btn btn-secondary">
              Ver roteiro
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
              pageUrl={`https://www.abcflyexpeditions.com/expedicoes/${expedition.slug}`}
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
          Solicitar orçamento
        </a>
        <Link href="/expedicoes" className="btn btn-secondary">
          Outras expedições
        </Link>
      </div>

      </>
  );
}
