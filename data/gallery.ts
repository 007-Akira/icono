export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  ratio: "portrait" | "square" | "tall" | "wide";
  focalPoint: string;
};

// Authentic Icono portfolio work. The first five are deliberately ordered for
// the homepage so the preview balances full looks, hair work and close detail.
export const galleryItems: GalleryItem[] = [
  {
    id: 9,
    src: "/images/work/bridal-coral-saree-look.webp",
    alt: "Icono bridal makeup and hair styling with a coral silk saree",
    ratio: "portrait",
    focalPoint: "50% 32%",
  },
  {
    id: 1,
    src: "/images/work/bridal-green-look.webp",
    alt: "Icono bridal styling with a green traditional outfit and detailed mehndi",
    ratio: "portrait",
    focalPoint: "50% 25%",
  },
  {
    id: 2,
    src: "/images/work/layered-hair-styling.webp",
    alt: "Layered haircut and smooth salon styling by Icono",
    ratio: "square",
    focalPoint: "50% 30%",
  },
  {
    id: 3,
    src: "/images/work/bridal-copper-look.webp",
    alt: "Icono bridal makeup and hair styling with a copper bridal outfit",
    ratio: "tall",
    focalPoint: "50% 25%",
  },
  {
    id: 4,
    src: "/images/work/bridal-jewellery-detail.webp",
    alt: "Close bridal makeup and jewellery detailing by Icono",
    ratio: "square",
    focalPoint: "50% 35%",
  },
  {
    id: 5,
    src: "/images/work/side-braid-hair-styling.webp",
    alt: "Side braid and long-hair styling by Icono",
    ratio: "square",
    focalPoint: "50% 30%",
  },
  {
    id: 6,
    src: "/images/work/bridal-red-saree-look.webp",
    alt: "Icono occasion makeup and styling with a red traditional saree",
    ratio: "tall",
    focalPoint: "50% 25%",
  },
  {
    id: 7,
    src: "/images/work/bridal-rose-look.webp",
    alt: "Icono bridal makeup with a rose outfit and bouquet",
    ratio: "portrait",
    focalPoint: "50% 30%",
  },
  {
    id: 8,
    src: "/images/work/bridal-silver-look.webp",
    alt: "Icono bridal makeup and styling with a silver embroidered outfit",
    ratio: "portrait",
    focalPoint: "50% 25%",
  },
];

export const homepageGalleryItems = galleryItems.slice(0, 6);

export type StudioItem = {
  id: number;
  src: string;
  alt: string;
  ratio: "portrait" | "wide" | "panorama";
};

// Authentic views of the Icono premises. These remain separate from client
// portfolio work so visitors can clearly understand what each gallery shows.
export const studioItems: StudioItem[] = [
  {
    id: 1,
    src: "/images/studio/studio-1.webp",
    alt: "Hair styling stations and mirrors inside Icono Beauty World",
    ratio: "wide",
  },
  {
    id: 2,
    src: "/images/studio/studio-2.webp",
    alt: "Illuminated mirrors and styling chairs inside the Icono studio",
    ratio: "portrait",
  },
  {
    id: 3,
    src: "/images/studio/studio-3.webp",
    alt: "A wide view of the hair styling area at Icono Beauty World",
    ratio: "wide",
  },
  {
    id: 4,
    src: "/images/studio/studio-4.webp",
    alt: "Private beauty treatment room inside the Icono studio",
    ratio: "portrait",
  },
  {
    id: 5,
    src: "/images/studio/studio-5.webp",
    alt: "Hair wash station and professional product display at Icono",
    ratio: "wide",
  },
  {
    id: 6,
    src: "/images/studio/studio-6.webp",
    alt: "Exterior of Icono Beauty World and Makeover Studio during the day",
    ratio: "panorama",
  },
  {
    id: 7,
    src: "/images/studio/studio-7.webp",
    alt: "Illuminated exterior of Icono Beauty World and Makeover Studio",
    ratio: "panorama",
  },
  {
    id: 8,
    src: "/images/studio/studio-8.webp",
    alt: "Reception and waiting area inside Icono Beauty World",
    ratio: "wide",
  },
];
