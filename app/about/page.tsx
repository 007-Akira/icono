import type { Metadata } from "next";
import Image from "next/image";
import { referenceImages } from "@/data/images";
import { founder } from "@/data/founder";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Icono | Beauty World & Makeover Studio in Kollam",
  description:
    "Meet Ms. Revathy and discover the founder-led journey behind Icono Beauty World & Makeover Studio in Karicode, Kollam, including her confirmed professional training.",
  path: "/about",
  image: "/images/social/founder-og.webp",
  imageAlt: "Ms. Revathy, founder of Icono Beauty World & Makeover Studio",
});

export default function AboutPage() {
  const openingStatement = founder.story[0];
  const trainingStory = founder.story.slice(1, 3);
  const buildingStory = founder.story.slice(3, 7);
  const closingStory = founder.story.slice(7);

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
        <div className="page-shell grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-4">
            <SectionLabel>Meet the Founder</SectionLabel>
            <h2 className="display mt-5 text-5xl sm:text-6xl">{founder.name}</h2>
            <p className="eyebrow mt-5 text-olive">{founder.role}</p>
          </div>
          <p className="display text-3xl leading-snug text-smoke sm:text-4xl md:col-span-7 md:col-start-6 md:text-5xl">
            {openingStatement}
          </p>
        </div>
      </section>

      <section className="bg-smoke py-section text-floral">
        <div className="page-shell grid gap-16 md:grid-cols-12 md:items-center">
          <div className="grid grid-cols-12 items-end gap-4 md:col-span-7">
            <figure className="col-span-8">
              <div className="relative aspect-[3/4] overflow-hidden bg-olive">
                <Image
                  src={referenceImages.founderTraining}
                  alt="Ms. Revathy with her professional cosmetology training certificate in Germany"
                  fill
                  sizes="(min-width: 768px) 38vw, 66vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <figure className="col-span-7 col-start-6 -mt-16 border-[6px] border-smoke sm:-mt-24 md:-ml-8 md:mt-0">
              <div className="relative aspect-[3/4] overflow-hidden bg-olive">
                <Image
                  src={referenceImages.founderGermanyCertificate}
                  alt="Ms. Revathy receiving a professional training certificate in Germany"
                  fill
                  sizes="(min-width: 768px) 32vw, 58vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <p className="eyebrow col-span-12 mt-2 text-floral/65">
              Professional training in Germany
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="eyebrow text-floral/65">Chapter 01 · Learning</p>
            <h2 className="display mt-5 text-5xl leading-tight sm:text-6xl">
              Learning without limits.
            </h2>
            <div className="mt-9 space-y-7 text-lg leading-8 text-floral/75">
              {trainingStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-olive/20 bg-bone/35">
        <div className="page-shell grid divide-y divide-olive/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-10 md:pr-10">
            <p className="display text-5xl">25+</p>
            <p className="eyebrow mt-2 text-olive">Years of experience</p>
          </div>
          <div className="py-10 md:px-10">
            <p className="display text-5xl">Germany</p>
            <p className="eyebrow mt-2 text-olive">Professional training</p>
          </div>
          <div className="py-10 md:pl-10">
            <p className="display text-5xl">18+</p>
            <p className="eyebrow mt-2 text-olive">Years of teaching</p>
          </div>
        </div>
      </section>

      <section className="bg-floral py-section">
      <div className="page-shell grid gap-12 md:grid-cols-12">

        {/* LEFT: heading + image */}
        <div className="md:col-span-5">
          <p className="eyebrow text-olive">
            Chapter 02 · Building Icono
          </p>

          <h2 className="display mt-5 max-w-sm text-5xl leading-tight sm:text-6xl">
            Built step by step.
          </h2>

          <figure className="mt-14">
            <div className="relative aspect-[4/3] w-[85%] overflow-hidden bg-bone">
              <Image
                src={referenceImages.founderTrainerRecognition}
                alt="Ms. Revathy receiving recognition during a professional skill trainers programme"
                fill
                sizes="(min-width: 768px) 38vw, 85vw"
                className="object-cover"
              />
            </div>

            <figcaption className="mt-4 w-[85%]">
              <span className="eyebrow text-olive">
                A continuing commitment to teaching and professional development
              </span>
            </figcaption>
          </figure>
        </div>

        {/* RIGHT: story */}
        <div className="space-y-7 text-lg leading-8 text-olive md:col-span-6 md:col-start-7">
          {buildingStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

      </div>

      {/* KEEP THIS PART */}
      <div className="page-shell mt-20 md:mt-28">
        <div className="border-y border-olive/30 py-12 text-center sm:py-16">
          <p className="display mx-auto max-w-4xl text-4xl leading-tight text-smoke sm:text-6xl">
            {closingStory[0]}
          </p>
          <p className="eyebrow mt-8 text-olive">{closingStory[1]}</p>
        </div>
      </div>
    </section>

    </>
  );
}
