import { Service } from "@/data/services";
import { ServiceHero } from "./ServiceHero";
import { ServiceMenuSection } from "./ServiceMenuSection";
import { BrowseOtherServices } from "./BrowseOtherServices";
import { ServiceCTA } from "./ServiceCTA";

export function ServicePage({ service }: { service: Service }) { return <><ServiceHero service={service} /><section className="py-section"><div className="page-shell grid gap-8 md:grid-cols-12"><p className="eyebrow text-olive md:col-span-3">A considered approach</p><p className="display text-3xl leading-snug md:col-span-7 md:col-start-5 sm:text-4xl">{service.intro}</p></div></section><ServiceMenuSection service={service} /><BrowseOtherServices current={service.slug} /><ServiceCTA serviceName={service.name} /></>; }
