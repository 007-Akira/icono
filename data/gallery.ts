export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: "Bridal" | "Hair";
};

// Authentic Icono portfolio work. The first five are deliberately ordered for
// the homepage so the preview balances full looks, hair work and close detail.
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/work/bridal-green-look.webp",
    alt: "Icono bridal styling with a green traditional outfit and detailed mehndi",
    category: "Bridal",
  },
  {
    id: 2,
    src: "/images/work/layered-hair-styling.webp",
    alt: "Layered haircut and smooth salon styling by Icono",
    category: "Hair",
  },
  {
    id: 3,
    src: "/images/work/bridal-copper-look.webp",
    alt: "Icono bridal makeup and hair styling with a copper bridal outfit",
    category: "Bridal",
  },
  {
    id: 4,
    src: "/images/work/bridal-jewellery-detail.webp",
    alt: "Close bridal makeup and jewellery detailing by Icono",
    category: "Bridal",
  },
  {
    id: 5,
    src: "/images/work/side-braid-hair-styling.webp",
    alt: "Side braid and long-hair styling by Icono",
    category: "Hair",
  },
  {
    id: 6,
    src: "/images/work/bridal-red-saree-look.webp",
    alt: "Icono occasion makeup and styling with a red traditional saree",
    category: "Bridal",
  },
  {
    id: 7,
    src: "/images/work/bridal-rose-look.webp",
    alt: "Icono bridal makeup with a rose outfit and bouquet",
    category: "Bridal",
  },
  {
    id: 8,
    src: "/images/work/bridal-silver-look.webp",
    alt: "Icono bridal makeup and styling with a silver embroidered outfit",
    category: "Bridal",
  },
];

export const homepageGalleryItems = galleryItems.slice(0, 5);
