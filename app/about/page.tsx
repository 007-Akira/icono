import type { Metadata } from "next";
import Image from "next/image";
import { referenceImages } from "@/data/images";
import { founder } from "@/data/founder";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ms. Revathy, founder of Icono Beauty World & Makeover Studio in Karicode, Kollam.",
};

export default function AboutPage() {
  const openingStory = founder.story.slice(0, 3);
  const continuingStory = founder.story.slice(3);

  return (
    <>
      <section className="grid min-h-[82svh] items-end bg-bone/35 pt-20 md:grid-cols-2">
        <div className="order-2 p-8 sm:p-14 md:order-1 md:p-16">
          <SectionLabel>About Icono</SectionLabel>
          <h1 className="display mt-6 text-6xl leading-none sm:text-7xl">
            A story rooted in care.
          </h1>
          <p className="mt-7 max-w-lg leading-7 text-olive">
            Professional beauty, hair and makeover services in Karicode, Kollam.
          </p>
        </div>
        <div className="relative order-1 min-h-[52svh] md:order-2 md:h-full">
          <Image
            src={referenceImages.founder}
            alt="Ms. Revathy, founder of Icono Beauty World"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-right grayscale"
          />
        </div>
      </section>
      <section className="bg-floral py-section">
        <div className="page-shell">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <SectionLabel>Founder</SectionLabel>
                <h2 className="display mt-5 text-5xl">{founder.name}</h2>
                <p className="eyebrow mt-5 text-olive">{founder.role}</p>
              </div>
            </div>
            <div className="space-y-7 text-lg leading-8 text-olive md:col-span-6 md:col-start-7">
              {openingStory.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? "display text-3xl leading-snug text-smoke sm:text-4xl" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-20 grid items-end gap-10 md:mt-28 md:grid-cols-12">
            <div className="border-y border-olive/30 py-8 md:col-span-4 md:col-start-2">
              <p className="display text-6xl leading-none">25+</p>
              <p className="eyebrow mt-3 text-olive">Years of experience</p>
              <div className="mt-8 border-t border-olive/20 pt-8">
                <p className="display text-6xl leading-none">18+</p>
                <p className="eyebrow mt-3 text-olive">Years of teaching</p>
              </div>
            </div>
            <figure className="md:col-span-6 md:col-start-7">
              <div className="relative aspect-[3/4] overflow-hidden bg-bone">
                <Image
                  src={referenceImages.founderTraining}
                  alt="Ms. Revathy receiving a professional training certificate in Germany"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="eyebrow mt-4 text-olive">
                Professional training in Germany
              </figcaption>
            </figure>
          </div>

          <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="display max-w-xs text-4xl leading-tight sm:text-5xl">
                Built step by step.
              </p>
            </div>
            <div className="space-y-7 text-lg leading-8 text-olive md:col-span-6 md:col-start-7">
              {continuingStory.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === continuingStory.length - 2
                      ? "display border-l border-olive/40 py-2 pl-6 text-2xl leading-snug text-smoke"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-smoke py-section text-center text-floral">
        <SectionLabel light>The Icono Standard</SectionLabel>
        <h2 className="display mx-auto mt-5 max-w-4xl px-6 text-5xl sm:text-7xl">
          Thoughtful care. Considered detail. A calm atmosphere.
        </h2>
        <CTAButton href="/contact#appointment" variant="light" className="mt-10">
          Enquire with Icono
        </CTAButton>
      </section>
    </>
  );
}
