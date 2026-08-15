import Link from "next/link";
import { Service } from "@/data/services";

export function ServiceMenuSection({ service }: { service: Service }) {
  return (
    <section className="bg-bone/35 py-section">
      <div className="page-shell">
        <p className="eyebrow text-olive">Service Menu</p>
        {service.sections.map((group) => (
          <section key={group.title} className="mt-12 grid gap-8 border-t border-olive/30 pt-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="display text-4xl">{group.title}</h2>
              <Link href="/contact#appointment" className="eyebrow mt-7 inline-block border-b border-smoke pb-1">
                Ask about this service
              </Link>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {group.items.map((item) => (
                <article key={item.name} className="border-b border-olive/25 py-6 first:pt-0">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  {item.description ? <p className="mt-2 max-w-xl text-sm leading-6 text-olive">{item.description}</p> : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
