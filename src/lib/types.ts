export type DepartureStatus =
  | "available"
  | "limited"
  | "waitlist"
  | "soldout"
  | "custom";

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export interface DayByDay {
  day: number;
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Expedition {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  story: string;
  heroImage: string;
  heroAlt: string;
  gallery: { src: string; alt: string }[];
  videoUrl?: string;
  destinations: string[];
  activities: string[];
  durationDays: number;
  difficulty: Difficulty;
  bestSeason: string;
  groupSize: string;
  priceFrom?: number;
  currency: "BRL";
  highlights: string[];
  dayByDay: DayByDay[];
  mapEmbedUrl?: string;
  includes: string[];
  excludes: string[];
  importantInfo: string[];
  faq: FaqItem[];
  relatedSlugs: string[];
}

export interface Departure {
  id: string;
  expeditionSlug: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;
  status: DepartureStatus;
  notes?: string;
  seatsLeft?: number;
}

export interface QuoteRequestPayload {
  name: string;
  email: string;
  phone: string;
  expeditionSlug: string;
  expeditionTitle: string;
  departureId?: string;
  departureLabel?: string;
  flexibleDates: boolean;
  travelers: number;
  profile: "solo" | "casal" | "familia" | "grupo";
  message: string;
  pageUrl: string;
  consent: boolean;
}
