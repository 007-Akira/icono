export const business = {
  name: "Icono Beauty World & Makeover Studio",
  shortName: "Icono",
  owner: "Latha S",
  email: "iconobeautyworld@gmail.com",
  phonePrimary: "+919447978174",
  phoneDisplay: "+91 94479 78174",
  phoneSecondary: "",
  whatsapp: "919447978174",
  instagram: "iconomakeoverstudio",
  instagramUrl: "https://instagram.com/iconomakeoverstudio",
  address: { line1: "Near TKM Arts College", area: "Karicode", city: "Kollam", state: "Kerala", country: "India" },
  googleMapsUrl: "",
  googleMapsEmbedUrl: "",
  openingHours: [] as string[],
  certifications: [] as string[],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const formattedAddress = [business.address.line1, business.address.area, business.address.city, business.address.state].join(", ");
