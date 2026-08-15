import { business, formattedAddress } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { SectionLabel } from "@/components/shared/SectionLabel";

export function VisitIcono() {
  return (
    <section className="bg-smoke py-section text-floral">
      <div className="page-shell grid gap-12 md:grid-cols-2">
        <div>
          <SectionLabel light>Visit Icono</SectionLabel>
          <h2 className="display mt-4 text-5xl">The studio</h2>
          <div className="mt-9 space-y-5 text-bone">
            <div>
              <p className="eyebrow">{business.name}</p>
              <p className="mt-2">{formattedAddress}</p>
            </div>
            <div>
              <p className="eyebrow">Opening hours</p>
              <p className="mt-2">
                {business.openingHours.length
                  ? business.openingHours.join(" · ")
                  : "Opening hours to be confirmed"}
              </p>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[.14em]">
            {business.googleMapsUrl ? (
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-floral px-5 py-3"
              >
                Get Directions
              </a>
            ) : null}
            <a href={`tel:${business.phonePrimary}`} className="border border-floral px-5 py-3">
              Call Icono
            </a>
            <a
              href={createGeneralWhatsAppUrl(business.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="border border-floral px-5 py-3"
            >
              Chat on WhatsApp
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-floral px-5 py-3"
            >
              Instagram
            </a>
          </div>
          {!business.googleMapsUrl ? (
            <p className="mt-5 text-sm text-bone">
              Directions link will be added after the official Google Maps listing is supplied.
            </p>
          ) : null}
        </div>
        <div className="min-h-[360px] overflow-hidden border border-floral/20 bg-olive/20">
          {business.googleMapsEmbedUrl ? (
            <iframe
              src={business.googleMapsEmbedUrl}
              title="Icono location on Google Maps"
              loading="lazy"
              className="h-full min-h-[360px] w-full border-0"
            />
          ) : (
            <div className="grid min-h-[360px] place-items-center p-8 text-center">
              <div>
                <p className="display text-3xl">Karicode, Kollam</p>
                <p className="mt-3 text-sm text-bone">
                  Map embed will be added once the exact Google Maps URL is confirmed.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
