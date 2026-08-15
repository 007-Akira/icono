import { referenceImages } from "./images";

export const galleryItems = [
  { id: 1, src: referenceImages.hair, alt: "Editorial reference showing detailed hair styling", category: "Hair", isRealWork: false, ratio: "portrait" },
  { id: 2, src: referenceImages.skin, alt: "Editorial reference showing a facial-care service", category: "Skin & Facial", isRealWork: false, ratio: "square" },
  { id: 3, src: referenceImages.bridal, alt: "Editorial South Asian bridal beauty reference", category: "Bridal", isRealWork: false, ratio: "tall" },
  { id: 4, src: referenceImages.treatment, alt: "Abstract cosmetic treatment texture reference", category: "Editorial", isRealWork: false, ratio: "wide" },
  { id: 5, src: referenceImages.speciality, alt: "Editorial speciality-service reference", category: "Speciality", isRealWork: false, ratio: "square" },
] as const;
