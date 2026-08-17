import Image from "next/image";
import Link from "next/link";
import { homepageGalleryItems } from "@/data/gallery";

export function GalleryPreview() {
  const mosaicItems = homepageGalleryItems.slice(0, 4);
  const fullFrameItems = homepageGalleryItems.slice(4);

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
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[230px] md:grid-cols-12">
          {mosaicItems.map((item, index) => (
            <figure
              key={item.id}
              className={`relative overflow-hidden bg-bone ${
                index === 0
                  ? "col-span-2 row-span-2 md:col-span-6"
                  : index === 2
                    ? "row-span-2 md:col-span-3"
                    : "md:col-span-3"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 50vw, 50vw"
                className="editorial-image object-cover"
                style={{ objectPosition: item.focalPoint }}
              />
            </figure>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {fullFrameItems.map((item) => (
            <figure key={item.id} className="relative aspect-[3/4] overflow-hidden bg-bone">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="editorial-image object-cover"
              />
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
