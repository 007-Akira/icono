import Image from "next/image";
import { ServicePageData } from "@/data/services";

export function ServiceHero({ service }: { service: ServicePageData }) {
  return (
    <section className="page-shell grid items-center gap-12 pb-20 pt-36 md:grid-cols-12 md:pb-28 md:pt-44">
      <div className="z-10 md:col-span-5 md:pr-8 lg:pr-12">
        <p className="eyebrow text-olive">{service.eyebrow}</p>
        <h1 className="display mt-5 text-[clamp(3.25rem,6vw,5.75rem)] font-semibold uppercase leading-[.95]">
          {service.title}
        </h1>
        <p className="display mt-6 text-2xl leading-snug text-olive">{service.subtitle}</p>
      </div>
      <div className="relative md:col-span-7">
        <div className="absolute inset-0 -z-10 -translate-x-4 translate-y-4 bg-bone md:-translate-x-8 md:translate-y-8" />
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
          <Image
            src={service.heroImage}
            alt={`${service.title} editorial service reference`}
            fill
            priority
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
