import type { Metadata } from "next";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { CTAButton } from "@/components/shared/CTAButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Bridal, Hair & Makeover Gallery | Icono Kollam",
  description:
    "Explore selected bridal, hair, makeup and beauty work from Icono Beauty World & Makeover Studio in Kollam.",
  path: "/gallery",
  image: "/images/social/bridal-og.webp",
  imageAlt: "Bridal makeup and styling work by Icono in Kollam",
});
export default function GalleryPage() {
  return (
    <>
      <section className="pb-16 pt-40">
        <div className="page-shell">
          <p className="eyebrow text-olive">Portfolio</p>
          <h1 className="display mt-4 text-6xl sm:text-8xl">Selected Work</h1>
          <p className="mt-7 max-w-2xl leading-7 text-olive">
            A selection of bridal, occasion and hair styling work created at Icono.
          </p>
        </div>
      </section>
      <section className="pb-section">
        <div className="page-shell columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="relative mb-5 break-inside-avoid overflow-hidden bg-bone"
            >
              <div
                className={`relative ${
                  item.ratio === "tall"
                    ? "aspect-[3/5]"
                    : item.ratio === "wide"
                      ? "aspect-[4/3]"
                      : item.ratio === "square"
                        ? "aspect-square"
                        : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="editorial-image object-cover"
                  style={{ objectPosition: item.focalPoint }}
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
      <section className="bg-bone/40 py-section text-center">
        <h2 className="display text-5xl">Ready for your transformation?</h2>
        <CTAButton href="/contact#appointment" className="mt-8">
          Request an appointment
        </CTAButton>
      </section>
    </>
  );
}
