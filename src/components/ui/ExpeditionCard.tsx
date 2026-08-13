import Link from "next/link";
import type { Expedition } from "@/lib/types";
import { difficultyLabel, formatPrice } from "@/lib/format";

export function ExpeditionCard({ expedition }: { expedition: Expedition }) {
  return (
    <article style={{ minWidth: 0 }}>
      <Link
        href={`/expedicoes/${expedition.slug}`}
        className="link-focus"
        style={{ display: "grid", gap: "0.85rem" }}
      >
        <div className="media-frame" style={{ aspectRatio: "4 / 3" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={expedition.heroImage} alt={expedition.heroAlt} loading="lazy" />
        </div>
        <div>
          <div className="eyebrow">
            {expedition.destinations[0]} · {expedition.durationDays} dias ·{" "}
            {difficultyLabel(expedition.difficulty)}
          </div>
          <h3
            className="display"
            style={{
              margin: "0.45rem 0 0.55rem",
              fontSize: "var(--h3)",
            }}
          >
            {expedition.title}
          </h3>
          <p
            style={{
              margin: 0,
              color: "color-mix(in oklab, var(--ink) 72%, transparent)",
              lineHeight: 1.6,
            }}
          >
            {expedition.tagline}
          </p>
          {expedition.priceFrom ? (
            <p style={{ margin: "0.75rem 0 0", fontWeight: 700 }}>
              A partir de {formatPrice(expedition.priceFrom)}
            </p>
          ) : null}
          <p
            className="eyebrow"
            style={{ margin: "0.85rem 0 0", color: "var(--ocean)" }}
          >
            Explore a expedição →
          </p>
        </div>
      </Link>
    </article>
  );
}
