import departuresData from "../../content/departures.json";
import { expeditions } from "../../content/expeditions";
import type { Departure, Expedition } from "@/lib/types";

const departures = departuresData as Departure[];

export function getAllExpeditions(): Expedition[] {
  return expeditions;
}

export function getExpeditionBySlug(slug: string): Expedition | undefined {
  return expeditions.find((item) => item.slug === slug);
}

export function getDeparturesForExpedition(slug: string): Departure[] {
  return departures
    .filter((item) => item.expeditionSlug === slug)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getAllDepartures(): Departure[] {
  return [...departures].sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getRelatedExpeditions(expedition: Expedition): Expedition[] {
  return expedition.relatedSlugs
    .map((slug) => getExpeditionBySlug(slug))
    .filter((item): item is Expedition => Boolean(item));
}

export function getFeaturedExpeditions(limit = 3): Expedition[] {
  return expeditions.slice(0, limit);
}

export function filterExpeditions(params: {
  destination?: string;
  activity?: string;
}): Expedition[] {
  return expeditions.filter((item) => {
    const destinationOk = params.destination
      ? item.destinations.some(
          (destination) =>
            destination.toLowerCase() === params.destination?.toLowerCase(),
        )
      : true;
    const activityOk = params.activity
      ? item.activities.some(
          (activity) =>
            activity.toLowerCase() === params.activity?.toLowerCase(),
        )
      : true;
    return destinationOk && activityOk;
  });
}

export function getTaxonomy() {
  const destinations = new Set<string>();
  const activities = new Set<string>();
  for (const expedition of expeditions) {
    expedition.destinations.forEach((item) => destinations.add(item));
    expedition.activities.forEach((item) => activities.add(item));
  }
  return {
    destinations: [...destinations].sort(),
    activities: [...activities].sort(),
  };
}
