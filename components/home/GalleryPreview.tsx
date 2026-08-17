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
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[230px] md:grid-cols-12">
          {homepageGalleryItems.map((item, index) => (
            <figure
              key={item.id}
              className={`relative overflow-hidden bg-bone ${
                index === 0
                  ? "col-span-2 row-span-2 md:col-span-6"
                  : index === 2
                    ? "row-span-2 md:col-span-3"
                    : index === 1 || index === 3
                      ? "md:col-span-3"
                      : index === 4
                        ? "md:col-span-5"
                        : "md:col-span-7"
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
