import type { Metadata } from "next";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Gallery layout for Icono Beauty World & Makeover Studio in Kollam. Approved salon work will be added here.",
};
export default function GalleryPage() {
  return (
    <>
      <section className="pb-16 pt-40">
        <div className="page-shell">
          <p className="eyebrow text-olive">Portfolio</p>
          <h1 className="display mt-4 text-6xl sm:text-8xl">Selected Work</h1>
          <p className="mt-7 max-w-2xl leading-7 text-olive">
            This temporary gallery contains editorial visual references only. Authentic, approved
            ICONO work will replace these images.
          </p>
        </div>
      </section>
      <section className="pb-section">
        <div className="page-shell columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <figure key={item.id} className="relative mb-5 break-inside-avoid overflow-hidden">
              <div
                className={`relative ${item.ratio === "tall" ? "aspect-[3/5]" : item.ratio === "wide" ? "aspect-[4/3]" : item.ratio === "square" ? "aspect-square" : "aspect-[3/4]"}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="editorial-image object-cover"
                />
              </div>
              <figcaption className="absolute bottom-0 inset-x-0 bg-smoke/75 p-3 text-xs uppercase tracking-wider text-floral">
                Editorial reference · Not ICONO work
              </figcaption>
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
