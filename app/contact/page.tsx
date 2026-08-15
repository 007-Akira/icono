import type { Metadata } from "next";
import { AppointmentEnquiry } from "@/components/home/AppointmentEnquiry";
import { VisitIcono } from "@/components/home/VisitIcono";
import { business, formattedAddress } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

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
          <div className="flex flex-col gap-5 text-olive md:col-span-4 md:col-start-9">
            <a href={`tel:${business.phonePrimary}`}>{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={createGeneralWhatsAppUrl(business.whatsapp)} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a href={business.instagramUrl} target="_blank" rel="noreferrer">
              @{business.instagram}
            </a>
            <p>{formattedAddress}</p>
            <p>
              Usual hours:{" "}
              {business.openingHours.length
                ? business.openingHours.join(" · ")
                : "Opening hours to be confirmed"}
            </p>
          </div>
        </div>
      </section>
      <AppointmentEnquiry />
      <VisitIcono />
    </>
  );
}
