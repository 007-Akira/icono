import type { Metadata } from "next";
import { business } from "@/data/business";

export const defaultSocialImage = "/images/social/home-og.webp";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

/** Build consistent, server-rendered metadata without duplicating business data. */
export function createPageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
  imageAlt = business.name,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: business.name,
      title,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Prevent a closing script sequence from being interpreted inside JSON-LD. */
export function serializeJsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function absoluteUrl(path: string) {
  return new URL(path, `${business.siteUrl}/`).toString();
}

export function isProductionDeployment() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (
    !configuredSiteUrl ||
    /^https?:\/\/(localhost|127\.0\.0\.1)(?::\d+)?$/i.test(configuredSiteUrl)
  ) {
    return false;
  }

  const vercelEnvironment = process.env.VERCEL_ENV;
  return vercelEnvironment
    ? vercelEnvironment === "production"
    : process.env.NODE_ENV === "production";
}
