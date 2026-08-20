import type { Metadata } from "next";
import { galleryItems, studioItems } from "@/data/gallery";
import { GalleryViewer } from "@/components/gallery/GalleryViewer";
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
      <GalleryViewer workItems={galleryItems} studioItems={studioItems} />
      <section className="bg-floral py-section text-center text-smoke">
        <h2 className="display text-5xl">Ready for your transformation?</h2>
        <CTAButton href="/contact#appointment" className="mt-8">
          Request an appointment
        </CTAButton>
      </section>
    </>
  );
}
