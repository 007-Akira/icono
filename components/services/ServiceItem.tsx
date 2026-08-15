import { ServiceItem as ServiceItemData } from "@/data/services";
import { business } from "@/data/business";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function ServiceItem({ item }: { item: ServiceItemData }) {
  const message = `Hello ICONO,\n\nI would like to enquire about the following service:\n\nService: ${item.name}\n\nPlease share more details and availability.`;
  return (
    <article className="group border-b border-olive/25 pb-6">
      <h3 className="display text-2xl">{item.name}</h3>
      <p className="mt-2 max-w-xl text-sm leading-6 text-olive">{item.description}</p>
      <a
        href={createGeneralWhatsAppUrl(business.whatsapp, message)}
        target="_blank"
        rel="noreferrer"
        className="eyebrow mt-4 inline-flex items-center gap-1 border-b border-transparent pb-1 transition-all hover:gap-2 hover:border-smoke"
      >
        Enquire <span aria-hidden>→</span>
      </a>
    </article>
  );
}
