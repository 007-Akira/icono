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

export const homepageGalleryItems = galleryItems.slice(0, 5);
