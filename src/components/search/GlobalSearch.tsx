"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { KIND_LABEL, searchSite, type SearchResult } from "@/lib/search";

type Props = {
  open: boolean;
  onClose: () => void;
  initialQuery?: string;
};

export function GlobalSearch({ open, onClose, initialQuery = "" }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQuery(initialQuery);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    document.body.classList.add("search-open");
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("search-open");
    };
  }, [open, initialQuery]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [] as SearchResult[];
    return searchSite(query, 20);
  }, [query]);

  if (!open) return null;

  const grouped = {
    destino: results.filter((item) => item.kind === "destino"),
    expedicao: results.filter((item) => item.kind === "expedicao"),
    experiencia: results.filter((item) => item.kind === "experiencia"),
    diario: results.filter((item) => item.kind === "diario"),
  };

  return (
    <div
      className="search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Busca inteligente"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="search-panel">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "0.75rem",
            alignItems: "center",
            marginBottom: "0.75rem",
          }}
        >
          <p className="eyebrow" style={{ margin: 0 }}>
            Busca inteligente
          </p>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Fechar
          </button>
        </div>
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Nepal, surf, safari, África, mochilão..."
          aria-label="Pesquisar no site"
        />
        <p style={{ margin: "0.7rem 0 0", color: "var(--stone)", fontSize: "0.9rem" }}>
          Destinos, expedições, experiências e diário em um só lugar.
        </p>

        {query.trim().length >= 2 && results.length === 0 ? (
          <p style={{ marginTop: "1rem" }}>
            Nenhum resultado para “{query}”. Tente um destino ou interesse.
          </p>
        ) : null}

        <div className="search-results">
          {(Object.keys(grouped) as Array<keyof typeof grouped>).map((kind) => {
            const items = grouped[kind];
            if (!items.length) return null;
            return (
              <div key={kind} style={{ display: "grid", gap: "0.35rem" }}>
                <div className="kind-tag" style={{ marginTop: "0.4rem" }}>
                  {KIND_LABEL[kind]}
                </div>
                {items.map((item) => (
                  <Link
                    key={`${item.kind}-${item.href}`}
                    href={item.href}
                    className="search-result link-focus"
                    onClick={onClose}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image || "/images/hero-home.jpg"} alt="" />
                    <span>
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </span>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
