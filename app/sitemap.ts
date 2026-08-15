import type { MetadataRoute } from "next";
import { services } from "@/data/services";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://iconobeauty.example"; return ["", "/about", "/gallery", "/contact", ...services.map(s => `/services/${s.slug}`)].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 })); }
