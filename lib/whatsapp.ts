export type EnquiryData = { name: string; phone: string; service: string; date: string; time: string; message: string };

export function buildWhatsAppMessage(data: EnquiryData) {
  return [
    "Hello ICONO,",
    "",
    "I would like to enquire about an appointment.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Preferred Date: ${data.date || "Not specified"}`,
    `Preferred Time: ${data.time || "Not specified"}`,
    `Message: ${data.message || "None"}`,
  ].join("\n");
}

export function createWhatsAppUrl(number: string, data: EnquiryData) {
  const normalizedNumber = number.replace(/\D/g, "");
  if (!normalizedNumber) return null;
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
}

export function createGeneralWhatsAppUrl(number: string, message = "Hello Icono, I would like to enquire about your services.") {
  const normalizedNumber = number.replace(/\D/g, "");
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}
