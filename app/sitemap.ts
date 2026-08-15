import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { business } from "@/data/business";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/about", "/gallery", "/contact", ...services.map(s => `/services/${s.slug}`)].map(path => ({ url: `${business.siteUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 })); }
