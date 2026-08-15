import { ServiceCategory as ServiceCategoryData } from "@/data/services";
import { ServiceItem } from "./ServiceItem";

export function ServiceCategory({ category, number }: { category: ServiceCategoryData; number: string }) {
  return <section className="border-t border-olive/25 pt-10 md:pt-12"><div className="mb-10 grid gap-3 md:grid-cols-12"><p className="eyebrow text-olive md:col-span-1">{number}</p><div className="md:col-span-8"><h2 className="display text-4xl md:text-5xl">{category.title}</h2>{category.description ? <p className="mt-4 max-w-2xl text-sm leading-6 text-olive">{category.description}</p> : null}</div></div><div className="grid gap-x-12 gap-y-8 md:grid-cols-2">{category.items.map((service) => <ServiceItem key={service.name} item={service} />)}</div></section>;
}
