import { business } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-floral/20 bg-smoke text-floral lg:hidden">
      <a href={`tel:${business.phonePrimary}`} className="eyebrow py-4 text-center">
        Call Icono
      </a>
      <a
        href={createGeneralWhatsAppUrl(business.whatsapp)}
        target="_blank"
        rel="noreferrer"
        className="eyebrow border-l border-floral/20 py-4 text-center"
      >
        WhatsApp
      </a>
    </div>
  );
}
