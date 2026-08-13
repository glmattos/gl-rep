import type { DepartureStatus, Difficulty } from "@/lib/types";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}

export function formatDateRange(start: string, end: string): string {
  return `${formatDate(start)} — ${formatDate(end)}`;
}

export function formatPrice(value: number, currency: "BRL" = "BRL"): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function difficultyLabel(level: Difficulty): string {
  const labels: Record<Difficulty, string> = {
    1: "Suave",
    2: "Moderado",
    3: "Desafiador",
    4: "Exigente",
    5: "Extremo",
  };
  return labels[level];
}

export function departureStatusLabel(status: DepartureStatus): string {
  const labels: Record<DepartureStatus, string> = {
    available: "Vagas abertas",
    limited: "Últimas vagas",
    waitlist: "Lista de espera",
    soldout: "Esgotada",
    custom: "Sob consulta",
  };
  return labels[status];
}
