import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { business, formattedAddress } from "@/data/business";
import { defaultSocialImage, isProductionDeployment, serializeJsonLd } from "@/lib/seo";

const homeTitle = "Icono Beauty World & Makeover Studio | Beauty Salon in Kollam";
const homeDescription =
  "Icono Beauty World & Makeover Studio in Karicode, Kollam offers hair, facial, bridal makeup, makeover, grooming and beauty services near TKM Arts College. Enquire via WhatsApp.";
const productionDeployment = isProductionDeployment();

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: homeTitle,
    template: "%s | Icono",
  },
  description: homeDescription,
  alternates: { canonical: "/" },
  applicationName: business.name,
  manifest: "/manifest.webmanifest",
  robots: { index: productionDeployment, follow: productionDeployment },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    siteName: business.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: defaultSocialImage,
        width: 1200,
        height: 630,
        alt: `${business.name} in Kollam`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [defaultSocialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Keep search-engine business data synchronized with the visible contact data.
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    url: business.siteUrl,
    telephone: business.phonePrimary,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.line1}, ${business.address.area}, ${business.address.locality}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.countryCode,
    },
    hasMap: business.googleMapsUrl,
    sameAs: [business.instagramUrl, business.facebookUrl],
    description: `Professional beauty, hair and makeover services at ${formattedAddress}.`,
  };
  return (
    <html lang="en">
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(localBusiness) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
