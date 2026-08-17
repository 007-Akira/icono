import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Explore Icono Beauty World & Makeover Studio",
  description:
    "Explore Icono Beauty World & Makeover Studio, salon services, gallery, contact information and website policies.",
  path: "/explore",
});

const mainLinks = [
  { href: "/", label: "Home", description: "Discover Icono and its signature services." },
  {
    href: "/about",
    label: "About",
    description: "Meet the founder and learn about the Icono approach.",
  },
  {
    href: "/gallery",
    label: "Gallery",
    description: "Browse the current editorial visual collection.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Find directions and send an appointment enquiry.",
  },
];

const informationLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/appointment-policy", label: "Appointment Policy" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function ExplorePage() {
  return (
    <>
      <header className="border-b border-olive/20 bg-bone/30 pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="page-shell">
          <p className="eyebrow text-olive">Website Directory</p>
          <h1 className="display mt-5 text-6xl leading-none sm:text-8xl">Explore Icono</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-olive">
            A considered guide to our salon, services and website information.
          </p>
        </div>
      </header>
      <div className="page-shell py-16 md:py-24">
        <section>
          <p className="eyebrow text-olive">Main</p>
          <div className="mt-7 grid border-t border-olive/25 md:grid-cols-2">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group border-b border-olive/25 py-8 md:odd:pr-10 md:even:border-l md:even:pl-10"
              >
                <h2 className="display text-3xl transition-colors group-hover:text-olive">
                  {link.label}{" "}
                  <span aria-hidden className="text-xl">
                    ↗
                  </span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-olive">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-20 md:mt-28">
          <p className="eyebrow text-olive">Services</p>
          <div className="mt-7 grid border-t border-olive/25 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group border-b border-olive/25 py-8 sm:px-7 sm:first:pl-0 ${index % 3 ? "lg:border-l" : "lg:pl-0"}`}
              >
                <p className="eyebrow text-olive">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="display mt-3 text-3xl transition-colors group-hover:text-olive">
                  {service.navName}
                </h2>
                <p className="mt-3 text-sm leading-6 text-olive">{service.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-20 md:mt-28">
          <p className="eyebrow text-olive">Information</p>
          <div className="mt-7 border-t border-olive/25">
            {informationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex min-h-16 items-center justify-between gap-6 border-b border-olive/25 py-4"
              >
                <span className="display text-2xl transition-colors group-hover:text-olive">
                  {link.label}
                </span>
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
