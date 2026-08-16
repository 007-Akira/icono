"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { ServicePageData } from "@/data/services";
import { services } from "@/data/services";

export function BrowseOtherServices({ current }: { current: ServicePageData }) {
  const scroller = useRef<HTMLDivElement>(null);
  const alternatives = services.filter((service) => service.slug !== current.slug);

  function browse(direction: -1 | 1) {
    const container = scroller.current;
    if (!container) return;

    container.scrollBy({
      left: direction * Math.max(280, container.clientWidth * 0.82),
      behavior: "smooth",
    });
  }

  return (
    <section className="page-shell py-20 md:py-28">
      <div className="flex items-end justify-between gap-6 border-b border-olive/25 pb-5">
        <h2 className="display text-3xl">Explore More Services</h2>
        <div className="flex gap-2" aria-label="Browse services">
          <button
            type="button"
            onClick={() => browse(-1)}
            aria-label="View previous services"
            className="grid size-11 place-items-center border border-olive/30 text-xl transition-colors hover:border-smoke hover:bg-smoke hover:text-floral"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            onClick={() => browse(1)}
            aria-label="View next services"
            className="grid size-11 place-items-center border border-olive/30 text-xl transition-colors hover:border-smoke hover:bg-smoke hover:text-floral"
          >
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="service-browser mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto"
      >
        {alternatives.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group relative block basis-[86%] shrink-0 snap-start overflow-hidden bg-bone sm:basis-[48%] lg:basis-[31.5%]"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={service.heroImage}
                alt={`${service.title} editorial reference`}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 86vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-smoke/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-floral">
                <h3 className="display text-3xl">{service.title}</h3>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-bone">
                  Discover services
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
