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

const ALIASES: Record<string, string[]> = {
  nepal: ["himalaia", "everest", "asia", "ásia", "trekking", "mochilao", "mochilão"],
  peru: ["amazonia", "amazônia", "andes", "america do sul", "américa do sul"],
  "costa rica": ["america central", "américa central", "pura vida", "selva"],
  tanzania: ["tanzânia", "kilimanjaro", "africa", "áfrica", "trekking"],
  tanzânia: ["tanzania", "kilimanjaro", "africa", "áfrica"],
  "africa do sul": ["áfrica do sul", "africa", "áfrica", "safari"],
  indonésia: ["indonesia", "bali", "lombok", "gili", "surf", "asia", "ásia"],
  indonesia: ["indonésia", "bali", "lombok", "gili", "surf"],
  portugal: ["europa", "surf", "europe"],
  africa: ["áfrica", "tanzânia", "tanzania", "kilimanjaro", "safari", "wildlife"],
  áfrica: ["africa", "tanzânia", "tanzania", "kilimanjaro", "safari"],
  surf: ["onda", "praia", "indonésia", "indonesia", "costa", "mar"],
  safari: ["wildlife", "natureza", "africa", "áfrica", "vida selvagem"],
  mochilao: ["mochilão", "backpacking", "trekking", "nepal", "aventura"],
  mochilão: ["mochilao", "backpacking", "trekking", "nepal", "aventura"],
  voluntariado: ["volunteer", "comunidade", "impacto"],
  expedicao: ["expedição", "expedicoes", "expedições", "viagem", "roteiro"],
  expedição: ["expedicao", "expedicoes", "expedições", "viagem", "roteiro"],
  antartica: ["antártica", "antarctica", "polar", "pinguim", "drake"],
  antártica: ["antartica", "antarctica", "polar", "pinguim", "drake"],
  patagonia: ["patagônia", "chile", "torres del paine", "america do sul"],
  patagônia: ["patagonia", "chile", "torres del paine"],
  alasca: ["alaska", "silversea", "america do norte", "glaciar"],
};

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function expandQuery(query: string): string[] {
  const base = normalize(query);
  if (!base) return [];
  const tokens = new Set<string>([base, ...base.split(/\s+/).filter(Boolean)]);
  for (const [key, values] of Object.entries(ALIASES)) {
    const keyNorm = normalize(key);
    if (base.includes(keyNorm) || keyNorm.includes(base)) {
      tokens.add(keyNorm);
      values.forEach((item) => tokens.add(normalize(item)));
    }
    for (const value of values) {
      const valueNorm = normalize(value);
      if (base.includes(valueNorm) || valueNorm.includes(base)) {
        tokens.add(keyNorm);
        tokens.add(valueNorm);
      }
    }
  }
  return [...tokens];
}

function scoreText(haystack: string, tokens: string[]): number {
  const text = normalize(haystack);
  let score = 0;
  for (const token of tokens) {
    if (!token) continue;
    if (text === token) score += 12;
    else if (text.startsWith(token)) score += 8;
    else if (text.includes(token)) score += 5;
  }
  return score;
}

export function searchSite(query: string, limit = 24): SearchResult[] {
  const tokens = expandQuery(query);
  if (!tokens.length) return [];

  const results: SearchResult[] = [];

  for (const hub of getAllDestinationHubs()) {
    const blob = [hub.name, hub.tagline, hub.summary, ...hub.matchLabels].join(" ");
    const score = scoreText(blob, tokens);
    if (score > 0) {
      results.push({
        kind: "destino",
        title: hub.name,
        subtitle: hub.tagline,
        href: `/destinos/${hub.slug}`,
        image: hub.heroImage,
        score: score + 2,
      });
    }
  }

  for (const expedition of getAllExpeditions()) {
    const blob = [
      expedition.title,
      expedition.tagline,
      expedition.summary,
      ...expedition.destinations,
      ...expedition.activities,
      ...expedition.highlights,
    ].join(" ");
    const score = scoreText(blob, tokens);
    if (score > 0) {
      results.push({
        kind: "expedicao",
        title: expedition.title,
        subtitle: `${expedition.destinations.join(" · ")} · ${expedition.durationDays} dias`,
        href: `/expedicoes/${expedition.slug}`,
        image: expedition.heroImage,
        score: score + 3,
      });
    }
  }

  for (const hub of getAllActivityHubs()) {
    const blob = [hub.name, hub.tagline, hub.summary, ...hub.matchLabels].join(" ");
    const score = scoreText(blob, tokens);
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
    const blob = [post.title, post.excerpt, ...post.tags, ...post.body].join(" ");
    const score = scoreText(blob, tokens);
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
