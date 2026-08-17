export type EnquiryData = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

function singleLine(value: string, limit: number) {
  return value
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);
}

function messageText(value: string) {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim()
    .slice(0, 500);
}

export function buildWhatsAppMessage(data: EnquiryData) {
  // Keep this message plain-text and price-free so it remains easy to review in
  // WhatsApp before the visitor chooses to send it.
  return [
    "Hello ICONO,",
    "",
    "I would like to enquire about an appointment.",
    "",
    `Name: ${singleLine(data.name, 80)}`,
    `Phone: ${singleLine(data.phone, 20)}`,
    `Service: ${singleLine(data.service, 80)}`,
    `Preferred Date: ${singleLine(data.date, 10) || "Not specified"}`,
    `Preferred Time: ${singleLine(data.time, 5) || "Not specified"}`,
    `Message: ${messageText(data.message) || "None"}`,
  ].join("\n");
}

export function createWhatsAppUrl(number: string, data: EnquiryData) {
  // Accept either a formatted phone number or the compact value from business.ts.
  const normalizedNumber = number.replace(/\D/g, "");
  if (!normalizedNumber) return null;
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
}

export function createGeneralWhatsAppUrl(
  number: string,
  message = "Hello Icono, I would like to enquire about your services.",
) {
  const normalizedNumber = number.replace(/\D/g, "");
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(messageText(message))}`;
}
