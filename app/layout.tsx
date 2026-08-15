import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroOverlay } from "@/components/shared/IntroOverlay";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { business, formattedAddress } from "@/data/business";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Icono Beauty World & Makeover Studio | Salon in Kollam",
    template: "%s | Icono",
  },
  description:
    "Icono Beauty World & Makeover Studio in Karicode, Kollam offers professional hair, beauty, facial, bridal and makeover services. Enquire directly through WhatsApp.",
  openGraph: {
    title: "Icono Beauty World & Makeover Studio | Salon in Kollam",
    description:
      "Professional hair, beauty, facial, bridal and makeover services in Karicode, Kollam.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Keep search-engine business data synchronized with the visible contact data.
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    telephone: business.phonePrimary,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.line1}, ${business.address.area}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude,
    },
    hasMap: business.googleMapsUrl,
    sameAs: [business.instagramUrl],
    description: `Professional beauty, hair and makeover services at ${formattedAddress}.`,
  };
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <IntroOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
