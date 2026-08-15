import Link from "next/link";
import { ServicePageData } from "@/data/services";
import { ServiceHero } from "./ServiceHero";
import { ServiceIntro } from "./ServiceIntro";
import { ServiceCategory } from "./ServiceCategory";
import { ServiceVisualBreak } from "./ServiceVisualBreak";
import { ServiceGuidanceCTA } from "./ServiceGuidanceCTA";
import { BrowseOtherServices } from "./BrowseOtherServices";

export function ServicePage({ service }: { service: ServicePageData }) {
  return (
    <>
      <ServiceHero service={service} />
      <ServiceIntro>{service.intro}</ServiceIntro>
      <div className="page-shell space-y-20 pb-20 md:space-y-28 md:pb-28">
        {service.categories.map((category, index) => (
          <div key={category.title} className="space-y-20 md:space-y-28">
            <ServiceCategory category={category} number={String(index + 1).padStart(2, "0")} />
            {service.visualBreaks[index] && index < 2 ? (
              <ServiceVisualBreak {...service.visualBreaks[index]} />
            ) : null}
          </div>
        ))}
      </div>
      <ServiceGuidanceCTA category={service.title} />
      <BrowseOtherServices current={service} />
      <div className="page-shell flex flex-wrap justify-center gap-8 pb-20">
        <Link href="/gallery" className="eyebrow border-b border-smoke pb-1">
          View Gallery
        </Link>
        <Link href="/contact" className="eyebrow border-b border-smoke pb-1">
          Contact Icono
        </Link>
      </div>
    </>
  );
}
