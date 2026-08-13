import { activities } from "../../content/activities";
import departuresData from "../../content/departures.json";
import { destinations } from "../../content/destinations";
import { expeditions } from "../../content/expeditions";
import { posts } from "../../content/posts";
import { testimonials } from "../../content/testimonials";
import type {
  ActivityHub,
  Departure,
  DestinationHub,
  DiaryPost,
  Expedition,
  Testimonial,
} from "@/lib/types";

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
  const destinationNames = new Set<string>();
  const activityNames = new Set<string>();
  for (const expedition of expeditions) {
    expedition.destinations.forEach((item) => destinationNames.add(item));
    expedition.activities.forEach((item) => activityNames.add(item));
  }
  return {
    destinations: [...destinationNames].sort(),
    activities: [...activityNames].sort(),
  };
}

export function getAllDestinationHubs(): DestinationHub[] {
  return destinations;
}

export function getDestinationHub(slug: string): DestinationHub | undefined {
  return destinations.find((item) => item.slug === slug);
}

export function getExpeditionsForDestination(hub: DestinationHub): Expedition[] {
  const labels = new Set(hub.matchLabels.map((item) => item.toLowerCase()));
  return expeditions.filter((expedition) =>
    expedition.destinations.some((destination) =>
      labels.has(destination.toLowerCase()),
    ),
  );
}

export function getAllActivityHubs(): ActivityHub[] {
  return activities;
}

export function getActivityHub(slug: string): ActivityHub | undefined {
  return activities.find((item) => item.slug === slug);
}

export function getExpeditionsForActivity(hub: ActivityHub): Expedition[] {
  const labels = new Set(hub.matchLabels.map((item) => item.toLowerCase()));
  return expeditions.filter((expedition) =>
    expedition.activities.some((activity) => labels.has(activity.toLowerCase())),
  );
}

export function getAllPosts(): DiaryPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string): DiaryPost | undefined {
  return posts.find((item) => item.slug === slug);
}

export function getRelatedExpeditionsForPost(post: DiaryPost): Expedition[] {
  return post.relatedExpeditionSlugs
    .map((slug) => getExpeditionBySlug(slug))
    .filter((item): item is Expedition => Boolean(item));
}

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
