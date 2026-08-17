import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/gallery",
    "/contact",
    "/explore",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/appointment-policy",
    "/accessibility",
  ];
  return [...staticRoutes, ...services.map((s) => `/services/${s.slug}`)].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
