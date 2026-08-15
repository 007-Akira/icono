import { referenceImages } from "./images";

export type ServiceItem = { name: string; description?: string; pendingConfirmation?: boolean };
export type ServiceGroup = { title: string; items: ServiceItem[] };
export type Service = {
  slug: "hair" | "skin" | "bridal" | "beauty-essentials" | "spa-grooming" | "speciality-services";
  name: string; navName: string; eyebrow: string; intro: string; image: string; sections: ServiceGroup[];
};

const items = (...names: string[]): ServiceItem[] => names.map((name) => ({ name }));

export const services: Service[] = [
  { slug: "hair", name: "Hair", navName: "Hair", eyebrow: "CUT · COLOUR · CARE", intro: "Hair cutting, colouring, styling and care services shaped around your preferred look.", image: referenceImages.hair, sections: [
    { title: "Hair Cutting & Styling", items: items("U Cut", "V Cut", "Straight Cut", "Mushroom / Bob Cut", "Layer Cut", "Step Cut", "Feather Cut", "Butterfly Cut", "Baby Cut", "Baby Trim", "Front Bangs / Fringe") },
    { title: "Hair Colouring", items: items("Black / Dark Brown", "Root Touch-Up", "Global Colour", "Highlights") },
    { title: "Hair Treatments", items: items("Smoothening / Straightening", "Hair Plastia", "Volumizing", "Keratin", "Hair Botox", "Hair Polishing", "Henna Treatment", "Hot Oil Massage") },
  ]},
  { slug: "skin", name: "Skin & Facial Care", navName: "Skin & Facial", eyebrow: "SKIN · FACIAL · CARE", intro: "A broad selection of facial and skin-care services, with the right option discussed during your visit.", image: referenceImages.skin, sections: [
    { title: "Facial Care", items: items("Clean Up", "Ordinary Facial", "Mixed Fruit Facial", "Papaya Facial", "Skin Whitening Facial", "Skin Brightening Facial", "Skin Tightening Facial", "Vitamin C Facial", "Cherry Blossom Facial", "Anti-Aging Facial", "Bridal Glow Facial", "Gold Facial", "Diamond Facial", "BB Glow", "Silver Facial") },
    { title: "Targeted Care", items: items("Pimples Treatment", "Pigmentation Treatment", "Wrinkle Treatment") },
  ]},
  { slug: "bridal", name: "Bridal & Makeup", navName: "Bridal & Makeup", eyebrow: "BRIDAL · MAKEUP · OCCASION", intro: "Makeup services for weddings, celebrations and occasions, tailored to the look you have in mind.", image: referenceImages.bridal, sections: [
    { title: "Bridal & Occasion Makeup", items: items("Bridal Makeup", "Party Makeup", "HD Makeup", "HD Skin Glass", "Skin Glow Makeup", "Waterproof Makeup", "Basic Makeup", "Soft Look", "Brazilian Look", "Nude Makeup") },
  ]},
  { slug: "beauty-essentials", name: "Beauty Essentials", navName: "Beauty Essentials", eyebrow: "THREADING · WAXING · CARE", intro: "Everyday grooming and beauty essentials, presented in a simple, considered service menu.", image: referenceImages.tools, sections: [
    { title: "Threading", items: items("Eyebrow", "Upper Lip", "Lower Lip", "Chin", "Forehead", "Side Lock", "Full Face") },
    { title: "Bleaching & D-Tan", items: [{ name: "Service selection pending confirmation", pendingConfirmation: true }] },
    { title: "Waxing", items: items("Legs", "Hands / Arms", "Underarm", "Full Body") },
  ]},
  { slug: "spa-grooming", name: "Spa & Grooming", navName: "Spa & Grooming", eyebrow: "SPA · HANDS · FEET", intro: "Hair spa and grooming services for routine care and special occasions.", image: referenceImages.treatment, sections: [
    { title: "Hair Spa", items: items("Normal Hair Spa", "L'Oréal Hair Spa", "Dandruff Spa", "Protein Spa", "Matrix Spa") },
    { title: "Hands, Feet & Body", items: items("Pedicure", "Manicure", "Foot Spa", "Aroma Foot Spa", "Body Polishing") },
  ]},
  { slug: "speciality-services", name: "Speciality Services", navName: "Speciality Services", eyebrow: "DETAIL · STYLE · FINISH", intro: "Additional beauty and styling services available through direct enquiry.", image: referenceImages.bridal, sections: [
    { title: "Speciality Services", items: items("Hair Extensions", "Ear Piercing", "Ear Lobe Piercing", "Eyebrow Filling", "Tattoo Designing") },
  ]},
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
