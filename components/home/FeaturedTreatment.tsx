import Image from "next/image";
import { referenceImages } from "@/data/images";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionLabel } from "@/components/shared/SectionLabel";

const featuredServices = [
  {
    name: "Pigmentation Treatment",
    description:
      "A cosmetic salon-care option for clients concerned about uneven-looking tone or visible pigmentation. The Icono team can discuss your concerns first and guide you toward an appropriate care routine and refreshed-looking finish.",
  },
  {
    name: "Pimples Treatment",
    description:
      "A consultation-led salon-care service for clients concerned about blemish-prone-looking skin. The focus remains on careful cosmetic skin care, with suitability discussed before the service rather than promising a medical outcome.",
  },
  {
    name: "Anti-Aging Facial",
    description:
      "A salon facial for clients seeking moisturised, refreshed and cared-for-looking skin. It is selected around individual preferences and focuses on the cosmetic appearance of tired-looking skin without guaranteeing a specific result.",
  },
] as const;

export function FeaturedTreatment() {
  return (
    <section className="relative py-24 md:py-32">
      <Image
        src={referenceImages.treatment}
        alt="Abstract editorial facial-care texture"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-smoke/25" />
      <div className="page-shell relative">
        <div className="ml-auto max-w-3xl bg-floral p-8 sm:p-14 md:p-16">
          <SectionLabel>Featured Services</SectionLabel>
          <h2 className="display mt-4 text-4xl sm:text-5xl">Signature skin care</h2>
          <p className="mt-5 max-w-2xl leading-7 text-olive">
            Three considered services from Icono&apos;s advanced facial-care selection. Speak with
            the team to choose an option suited to your preferences.
          </p>
          <div className="mt-10 border-t border-olive/25">
            {featuredServices.map((service, index) => (
              <article
                key={service.name}
                className="grid gap-3 border-b border-olive/25 py-7 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <p className="eyebrow text-olive">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="display text-2xl sm:text-3xl">{service.name}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-olive">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <CTAButton href="/services/skin-facial" className="mt-9">
            Explore Skin &amp; Facial
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
