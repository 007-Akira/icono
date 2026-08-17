import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const production = Boolean(
    process.env.NODE_ENV === "production" &&
    configuredSiteUrl &&
    !/^https?:\/\/(localhost|127\.0\.0\.1)(?::\d+)?$/i.test(configuredSiteUrl),
  );
  return {
    rules: production ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${business.siteUrl}/sitemap.xml`,
    host: production ? business.siteUrl : undefined,
  };
}
