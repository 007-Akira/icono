import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { ServicePage } from "@/components/services/ServicePage";
import { business } from "@/data/business";
import { absoluteUrl, createPageMetadata, serializeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
type ServicePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const path = `/services/${service.slug}`;
  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path,
    image: service.slug === "bridal-makeup" ? "/images/social/bridal-og.webp" : undefined,
    imageAlt: `${service.title} services at ${business.shortName}`,
  });
}
export default async function Page({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const servicePath = `/services/${service.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${service.title} Services`,
      description: service.metaDescription,
      url: absoluteUrl(servicePath),
      provider: {
        "@type": "BeautySalon",
        "@id": `${business.siteUrl}/#business`,
        name: business.name,
      },
      areaServed: { "@type": "City", name: business.address.city },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        { "@type": "ListItem", position: 2, name: "Services" },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: absoluteUrl(servicePath),
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
      <ServicePage service={service} />
    </>
  );
}
