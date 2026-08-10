"use client";

import { useMemo, useState } from "react";
import type { Departure, Expedition } from "@/lib/types";
import { searchExpeditions } from "@/lib/search";
import { CustomTripForm } from "@/components/quote/CustomTripForm";
import { QuoteForm } from "@/components/quote/QuoteForm";

type Props = {
  expeditions: Expedition[];
  departures: Departure[];
  initialSlug?: string;
};

type Path = "choose" | "expedition" | "custom";

export function QuoteExperience({
  expeditions,
  departures,
  initialSlug,
}: Props) {
  const initialExpedition = expeditions.find((item) => item.slug === initialSlug);
  const [path, setPath] = useState<Path>(initialExpedition ? "expedition" : "choose");
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState(initialExpedition?.slug ?? "");

  const searchResults = useMemo(() => {
    if (query.trim().length < 2) {
      return expeditions.slice(0, 6).map((item) => ({
        kind: "expedicao" as const,
        title: item.title,
        subtitle: item.destinations.join(" · "),
        href: item.slug,
        image: item.heroImage,
        score: 0,
      }));
    }
    return searchExpeditions(query).map((item) => ({
      ...item,
      href: item.href.replace("/expedicoes/", ""),
    }));
  }, [expeditions, query]);

  const selectedExpedition = expeditions.find((item) => item.slug === selectedSlug);
  const selectedDepartures = departures.filter(
    (item) => item.expeditionSlug === selectedSlug,
  );

  return (
    <div style={{ display: "grid", gap: "1.25rem" }}>
      {path === "choose" ? (
        <div className="quote-paths">
          <button
            type="button"
            className="quote-path"
            onClick={() => setPath("expedition")}
          >
            <span className="eyebrow">Opção 1</span>
            <strong
              className="display"
              style={{ display: "block", fontSize: "1.55rem", margin: "0.45rem 0" }}
            >
              Encontre sua expedição
            </strong>
            <p style={{ margin: 0, color: "var(--stone)", lineHeight: 1.6 }}>
              Digite um destino ou interesse — Nepal, safari, trekking — e escolha
              a jornada para solicitar orçamento.
            </p>
          </button>
          <button
            type="button"
            className="quote-path"
            onClick={() => setPath("custom")}
          >
            <span className="eyebrow">Opção 2</span>
            <strong
              className="display"
              style={{ display: "block", fontSize: "1.55rem", margin: "0.45rem 0" }}
            >
              Quero criar minha própria viagem
            </strong>
            <p style={{ margin: 0, color: "var(--stone)", lineHeight: 1.6 }}>
              Sem expedição pronta? Conte o destino, período e interesses — a
              equipe desenha um roteiro sob medida.
            </p>
          </button>
        </div>
      ) : null}

      {path !== "choose" ? (
        <button
          type="button"
          className="btn btn-ghost"
          style={{ width: "fit-content" }}
          onClick={() => {
            setPath("choose");
            setSelectedSlug("");
            setQuery("");
          }}
        >
          ← Voltar às opções
        </button>
      ) : null}

      {path === "expedition" && !selectedExpedition ? (
        <div className="quote-panel" style={{ padding: "1.5rem" }}>
          <p className="eyebrow">Busca inteligente</p>
          <h3 className="display" style={{ fontSize: "1.85rem", margin: "0.35rem 0 0.8rem" }}>
            Encontre sua expedição
          </h3>
          <div className="quote-picker">
            <div className="field">
              <label htmlFor="expedition-search">Para onde ou o que você busca?</label>
              <input
                id="expedition-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Nepal, Antártica, Kilimanjaro, bike..."
              />
            </div>
            <div className="quote-picker-results">
              {searchResults.map((item) => {
                const slug = item.href;
                const expedition = expeditions.find((entry) => entry.slug === slug);
                if (!expedition) return null;
                return (
                  <button
                    key={slug}
                    type="button"
                    className="quote-picker-item"
                    onClick={() => setSelectedSlug(slug)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={expedition.heroImage} alt="" />
                    <span>
                      <strong style={{ display: "block" }}>{expedition.title}</strong>
                      <span style={{ color: "var(--stone)", fontSize: "0.88rem" }}>
                        {expedition.destinations.join(" · ")} · {expedition.durationDays} dias
                      </span>
                    </span>
                  </button>
                );
              })}
              {query.trim().length >= 2 && searchResults.length === 0 ? (
                <p style={{ margin: 0, color: "var(--stone)" }}>
                  Nenhuma expedição encontrada. Tente outro termo ou crie uma
                  viagem personalizada.
                </p>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setPath("custom")}
          >
            Prefiro criar minha própria viagem
          </button>
        </div>
      ) : null}

      {path === "expedition" && selectedExpedition ? (
        <div style={{ display: "grid", gap: "0.85rem" }}>
          <button
            type="button"
            className="btn btn-ghost"
            style={{ width: "fit-content" }}
            onClick={() => setSelectedSlug("")}
          >
            ← Escolher outra expedição
          </button>
          <QuoteForm
            expedition={selectedExpedition}
            departures={selectedDepartures}
            hideExpeditionSelect
          />
        </div>
      ) : null}

      {path === "custom" ? <CustomTripForm /> : null}
    </div>
  );
}
