const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Single source of truth for contact details used by the footer, enquiry links,
// metadata, structured data, and contact pages. Update verified details here.
export const business = {
  name: "Icono Beauty World & Makeover Studio",
  shortName: "Icono",
  description:
    "Icono Beauty World & Makeover Studio in Karicode, Kollam offers hair, facial, bridal makeup, makeover, grooming and beauty services near TKM Arts College.",
  owner: "Ms. Revathy",
  email: "iconobeautyworld@gmail.com",
  phonePrimary: "+919447978174",
  phoneDisplay: "+91 94479 78174",
  phoneSecondary: "",
  // WhatsApp's wa.me links require the country code and number without symbols.
  whatsapp: "919447978174",
  instagram: "iconomakeoverstudio",
  instagramUrl: "https://www.instagram.com/iconomakeoverstudio/",
  facebookUrl: "https://www.facebook.com/Iconomakeoverstudiokaricode/",
  address: {
    line1: "Near TKM Arts College",
    area: "Karicode",
    locality: "Peroor",
    city: "Kollam",
    state: "Kerala",
    postalCode: "691005",
    country: "India",
    countryCode: "IN",
  },
  googleMapsUrl: "https://maps.app.goo.gl/rDkXMyZ7yvirpae67",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=8.9162274%2C76.6349356&z=17&output=embed",
  coordinates: { latitude: 8.9162274, longitude: 76.6349356 },
  // Days are not published until the weekly schedule is confirmed.
  openingHours: ["9:00 AM – 7:00 PM"],
  // Keep credentials empty until the client confirms publishable values.
  certifications: [] as string[],
  siteUrl: configuredSiteUrl.replace(/\/$/, ""),
} as const;

export const formattedAddress = [
  business.address.line1,
  business.address.area,
  business.address.city,
  business.address.state,
].join(", ");
