import { referenceImages } from "./images";

export type Service = {
  slug: "hair" | "skin" | "bridal" | "nails";
  name: string;
  navName: string;
  eyebrow: string;
  intro: string;
  image: string;
  sections: ServiceGroup[];
};

export type ServiceItem = {
  name: string;
  description?: string;
};

export type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

export const services: Service[] = [
  { slug: "hair", name: "Hair", navName: "Hair", eyebrow: "CUT · COLOUR · CARE", intro: "A considered approach to hair, shaped around individual texture, condition, and personal style.", image: referenceImages.hair, sections: [
    { title: "Cutting & Styling", items: ["U Cut", "V Cut", "Straight Cut", "Layer Cut", "Step Cut", "Feather Cut", "Butterfly Cut", "Bob / Mushroom Cut", "Baby Cut / Trim", "Front Bangs / Fringe"].map(name => ({ name })) },
    { title: "Hair Colouring", items: ["Black / Dark Brown", "Root Touch-Up", "Global Colour", "Highlights"].map(name => ({ name })) },
    { title: "Hair Treatments", items: ["Smoothening / Straightening", "Hair Plastia", "Volumizing", "Keratin", "Hair Botox", "Hair Polishing", "Henna Treatment", "Hot Oil Massage"].map(name => ({ name })) },
  ]},
  { slug: "skin", name: "Skin", navName: "Skin", eyebrow: "CARE · RITUAL · DETAIL", intro: "Personalised skin services presented with care, restraint, and attention to individual needs.", image: referenceImages.skin, sections: [
    { title: "Skin Services", items: [{ name: "Skin Consultation", description: "A considered starting point for selecting an appropriate service." }, { name: "Facial Treatments", description: "The confirmed treatment selection will be added after client approval." }] },
  ]},
  { slug: "bridal", name: "Bridal & Makeover", navName: "Bridal", eyebrow: "BRIDAL · MAKEUP · STYLING", intro: "A thoughtful beauty experience for weddings and significant occasions, developed around each client.", image: referenceImages.bridal, sections: [
    { title: "Bridal & Occasion", items: [{ name: "Bridal Consultation" }, { name: "Bridal Makeup" }, { name: "Occasion Makeup" }] },
  ]},
  { slug: "nails", name: "Nails", navName: "Nails", eyebrow: "SHAPE · COLOUR · FINISH", intro: "Careful nail services with a clean, polished finish. The confirmed treatment menu will be added soon.", image: referenceImages.tools, sections: [
    { title: "Nail Services", items: [{ name: "Nail Care" }, { name: "Nail Styling", description: "The confirmed nail service selection will be added after client approval." }] },
  ]},
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
