export type Review = {
  id: number;
  quote: string;
  author: string;
  rating: number;
  isPlaceholder: true;
};

export const reviews: Review[] = [
  {
    id: 1,
    quote: "Verified client reviews will appear here once supplied or approved by ICONO.",
    author: "Review content pending",
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: 2,
    quote: "This component is ready for genuine Google review content and attribution.",
    author: "Review content pending",
    rating: 5,
    isPlaceholder: true,
  },
];
