// Shared WhatsApp integration for quotation requests.
// Reuses the KONNR contact number already listed on the Contact section.

const WHATSAPP_NUMBER = "918610048200";

export const DEFAULT_QUOTATION_MESSAGE =
  "Hello KONNR Enterprises,\n\n" +
  "I would like to request a quotation for your precast concrete products.\n\n" +
  "Please contact me regarding pricing, specifications and availability.\n\n" +
  "Thank you.";

export function getWhatsAppLink(message = DEFAULT_QUOTATION_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppQuotation(message) {
  window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
}
