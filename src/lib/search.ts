import {
  getAllActivityHubs,
  getAllDestinationHubs,
  getAllExpeditions,
  getAllPosts,
} from "@/lib/content";

export type SearchResultKind =
  | "destino"
  | "expedicao"
  | "experiencia"
  | "diario";

export type SearchResult = {
  kind: SearchResultKind;
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  score: number;
};

/** Sinônimos: chave = termo digitado, valores = expansões relacionadas */
const ALIASES: Record<string, string[]> = {
  nepal: ["himalaia", "everest", "khumbu"],
  peru: ["amazonia", "amazônia", "andes", "iquitos"],
  "costa rica": ["pura vida"],
  tanzania: ["tanzânia", "kilimanjaro"],
  tanzânia: ["tanzania", "kilimanjaro"],
  "africa do sul": ["áfrica do sul", "safari"],
  indonésia: ["indonesia", "bali", "lombok", "gili"],
  indonesia: ["indonésia", "bali", "lombok", "gili"],
  portugal: ["europa", "surf"],
  africa: ["áfrica", "tanzânia", "tanzania", "kilimanjaro", "safari"],
  áfrica: ["africa", "tanzânia", "tanzania", "kilimanjaro", "safari"],
  surf: ["onda", "praia", "bali", "indonésia", "indonesia"],
  safari: ["wildlife", "vida selvagem", "áfrica", "africa"],
  mochilao: ["mochilão", "backpacking"],
  mochilão: ["mochilao", "backpacking"],
  voluntariado: ["volunteer", "impacto"],
  expedicao: ["expedição", "expedicoes", "expedições"],
  expedição: ["expedicao", "expedicoes", "expedições"],
  antartica: ["antártica", "antarctica", "polar", "drake"],
  antártica: ["antartica", "antarctica", "polar", "drake"],
  patagonia: ["patagônia", "torres del paine", "chile"],
  patagônia: ["patagonia", "torres del paine", "chile"],
  alasca: ["alaska", "silversea", "glaciar"],
};

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function expandQuery(query: string): { primary: string[]; related: string[] } {
  const base = normalize(query);
  if (!base) return { primary: [], related: [] };

  const primary = new Set<string>([base, ...base.split(/\s+/).filter((t) => t.length > 1)]);
  const related = new Set<string>();

  for (const [key, values] of Object.entries(ALIASES)) {
    const keyNorm = normalize(key);
    const keyHit =
      base === keyNorm ||
      base.includes(keyNorm) ||
      keyNorm.includes(base) ||
      values.some((value) => {
        const valueNorm = normalize(value);
        return base === valueNorm || base.includes(valueNorm);
      });

    if (keyHit) {
      primary.add(keyNorm);
      values.forEach((item) => related.add(normalize(item)));
    }
  }

  return { primary: [...primary], related: [...related] };
}

function scoreFields(
  fields: { text: string; weight: number }[],
  primary: string[],
  related: string[],
): number {
  let score = 0;
  for (const field of fields) {
    const text = normalize(field.text);
    for (const token of primary) {
      if (!token) continue;
      if (text === token) score += 14 * field.weight;
      else if (text.startsWith(token)) score += 10 * field.weight;
      else if (text.includes(token)) score += 7 * field.weight;
    }
    for (const token of related) {
      if (!token || primary.includes(token)) continue;
      if (text.includes(token)) score += 3 * field.weight;
    }
  }
  return score;
}

export function searchSite(query: string, limit = 24): SearchResult[] {
  const { primary, related } = expandQuery(query);
  if (!primary.length) return [];

  const results: SearchResult[] = [];

  for (const hub of getAllDestinationHubs()) {
    const score = scoreFields(
      [
        { text: hub.name, weight: 3 },
        { text: hub.matchLabels.join(" "), weight: 2.4 },
        { text: hub.tagline, weight: 1.2 },
        { text: hub.summary, weight: 0.8 },
      ],
      primary,
      related,
    );
    if (score > 0) {
      results.push({
        kind: "destino",
        title: hub.name,
        subtitle: hub.tagline,
        href: `/destinos/${hub.slug}`,
        image: hub.heroImage,
        score: score + 4,
      });
    }
  }

  for (const expedition of getAllExpeditions()) {
    const score = scoreFields(
      [
        { text: expedition.title, weight: 3 },
        { text: expedition.destinations.join(" "), weight: 2.6 },
        { text: expedition.tagline, weight: 1.3 },
        { text: expedition.activities.join(" "), weight: 1.1 },
        { text: expedition.summary, weight: 0.9 },
        { text: expedition.highlights.join(" "), weight: 0.8 },
      ],
      primary,
      related,
    );
    if (score > 0) {
      results.push({
        kind: "expedicao",
        title: expedition.title,
        subtitle: `${expedition.destinations.join(" · ")} · ${expedition.durationDays} dias`,
        href: `/expedicoes/${expedition.slug}`,
        image: expedition.heroImage,
        score: score + 5,
      });
    }
  }

  for (const hub of getAllActivityHubs()) {
    const score = scoreFields(
      [
        { text: hub.name, weight: 3 },
        { text: hub.matchLabels.join(" "), weight: 2 },
        { text: hub.tagline, weight: 1.2 },
        { text: hub.summary, weight: 0.8 },
      ],
      primary,
      related,
    );
    if (score > 0) {
      results.push({
        kind: "experiencia",
        title: hub.name,
        subtitle: hub.tagline,
        href: `/atividades/${hub.slug}`,
        image: hub.heroImage,
        score,
      });
    }
  }

  for (const post of getAllPosts()) {
    const score = scoreFields(
      [
        { text: post.title, weight: 2.5 },
        { text: post.tags.join(" "), weight: 2 },
        { text: post.excerpt, weight: 1.2 },
        { text: post.body.join(" "), weight: 0.6 },
      ],
      primary,
      related,
    );
    if (score > 0) {
      results.push({
        kind: "diario",
        title: post.title,
        subtitle: post.excerpt,
        href: `/diario/${post.slug}`,
        image: post.heroImage,
        score,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

export function searchExpeditions(query: string) {
  return searchSite(query, 40).filter((item) => item.kind === "expedicao");
}

export const KIND_LABEL: Record<SearchResultKind, string> = {
  destino: "Destino",
  expedicao: "Expedição",
  experiencia: "Experiência",
  diario: "Diário",
};
