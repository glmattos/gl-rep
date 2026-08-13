import type { MetadataRoute } from "next";
import {
  getAllActivityHubs,
  getAllDestinationHubs,
  getAllExpeditions,
  getAllPosts,
} from "@/lib/content";

const base = "https://www.abcflyexpeditions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/expedicoes",
    "/destinos",
    "/atividades",
    "/diario",
    "/sobre",
    "/como-viajamos",
    "/depoimentos",
    "/contato",
    "/solicitar-orcamento",
    "/loja",
    "/legal/privacidade",
    "/legal/termos",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const expeditions = getAllExpeditions().map((item) => ({
    url: `${base}/expedicoes/${item.slug}`,
    lastModified: new Date(),
  }));

  const destinations = getAllDestinationHubs().map((item) => ({
    url: `${base}/destinos/${item.slug}`,
    lastModified: new Date(),
  }));

  const activities = getAllActivityHubs().map((item) => ({
    url: `${base}/atividades/${item.slug}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((item) => ({
    url: `${base}/diario/${item.slug}`,
    lastModified: new Date(item.publishedAt),
  }));

  return [
    ...staticRoutes,
    ...expeditions,
    ...destinations,
    ...activities,
    ...posts,
  ];
}
