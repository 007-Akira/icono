import type { Metadata } from "next";
import { AppointmentEnquiry } from "@/components/home/AppointmentEnquiry";
import { VisitIcono } from "@/components/home/VisitIcono";
import { business, formattedAddress } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

const labelClass = "display text-lg font-semibold text-smoke";
const actionClass =
  "group inline-flex items-center gap-2 border-b border-olive/40 pb-1 font-medium text-smoke transition-all hover:gap-3 hover:border-smoke";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Icono Beauty World & Makeover Studio in Karicode, Kollam by phone, WhatsApp, email or Instagram.",
};
export default function ContactPage() {
  return (
    <>
      <section className="bg-bone/35 pb-20 pt-40">
        <div className="page-shell grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-olive">Contact</p>
            <h1 className="display mt-4 text-6xl sm:text-8xl">Let&apos;s talk beauty.</h1>
          </div>
          <dl className="border-t border-olive/25 text-olive md:col-span-5 md:col-start-8">
            <div className="grid gap-2 border-b border-olive/25 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className={labelClass}>Phone</dt>
              <dd>
                <a href={`tel:${business.phonePrimary}`} className={actionClass}>
                  {business.phoneDisplay} <span aria-hidden>→</span>
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-olive/25 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className={labelClass}>Email us at</dt>
              <dd className="break-all">
                <a href={`mailto:${business.email}`} className={actionClass}>
                  {business.email} <span aria-hidden>→</span>
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-olive/25 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className={labelClass}>WhatsApp</dt>
              <dd>
                <a
                  href={createGeneralWhatsAppUrl(business.whatsapp)}
                  target="_blank"
                  rel="noreferrer"
                  className={actionClass}
                >
                  Start a conversation <span aria-hidden>→</span>
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-olive/25 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className={labelClass}>Instagram</dt>
              <dd>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={actionClass}
                >
                  @{business.instagram} <span aria-hidden>→</span>
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-olive/25 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className={labelClass}>Find us</dt>
              <dd>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={actionClass}
                >
                  {formattedAddress} <span aria-hidden>→</span>
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-olive/25 py-5 sm:grid-cols-[9rem_1fr]">
              <dt className={labelClass}>Usual hours</dt>
              <dd>
                {business.openingHours.length
                  ? business.openingHours.join(" · ")
                  : "Opening hours to be confirmed"}
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <AppointmentEnquiry />
      <VisitIcono />
    </>
  );
}
