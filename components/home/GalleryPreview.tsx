import Image from "next/image";
import Link from "next/link";
import { homepageGalleryItems } from "@/data/gallery";

export function GalleryPreview() {
  return (
    <section className="py-section">
      <div className="page-shell">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-olive">Our Portfolio</p>
            <h2 className="display mt-3 text-5xl">Selected Work</h2>
          </div>
          <Link href="/gallery" className="eyebrow hidden border-b border-smoke pb-1 sm:block">
            View the gallery
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {homepageGalleryItems.map((item) => (
            <figure key={item.id} className="relative aspect-[3/4] overflow-hidden bg-bone">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 20vw, 50vw"
                className="editorial-image object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-smoke/70 to-transparent px-3 pb-3 pt-10 text-[10px] uppercase tracking-[0.18em] text-floral">
                {item.category}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link
          href="/gallery"
          className="eyebrow mt-8 inline-block border-b border-smoke pb-1 sm:hidden"
        >
          View the gallery
        </Link>
      </div>
    </section>
  );
}
