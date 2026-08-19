import Image from "next/image";
import { referenceImages } from "@/data/images";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionLabel } from "@/components/shared/SectionLabel";

const featuredServices = [
  {
    name: "Dermabrasion",
    description:
      "A precision exfoliation treatment that gently renews the skin’s surface, helping reveal a smoother, fresher and more polished complexion.",
  },
  {
    name: "Microneedling",
    description:
      "A targeted skin treatment designed to refine texture and promote a smoother, more even-looking complexion through controlled micro-stimulation.",
  },
  {
    name: "Hydrafacial",
    description:
      "A refreshing multi-step facial that deeply cleanses, exfoliates and hydrates for skin that feels fresh, smooth and visibly revitalised.",
  },
  {
    name: "BB Glow",
    description:
      "A skin-enhancing treatment designed to create a brighter, more even-looking complexion with a naturally polished finish.",
  },
  {
    name: "Airbrush Makeup",
    description:
      "A lightweight makeup application technique that uses an airbrush to create an even, polished finish for occasions where a refined makeup look is desired.",
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

          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Signature services
          </h2>

          <div className="mt-10 border-t border-olive/25">
            {featuredServices.map((service, index) => (
              <article
                key={service.name}
                className="grid gap-3 border-b border-olive/25 py-7 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <p className="eyebrow text-olive">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div>
                  <h3 className="display text-2xl sm:text-3xl">
                    {service.name}
                  </h3>

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