export type PortfolioCategory =
  | "Travel"
  | "Lifestyle"
  | "Wellness"
  | "Brand Work";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  src: string;
  alt: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Sunlit backyard moment",
    category: "Lifestyle",
    src: "/images/screenshot-2025-08-10-17-27-52.png",
    alt: "Smiling with a dog in the backyard",
  },
  {
    id: "p2",
    title: "Candid portrait",
    category: "Brand Work",
    src: "/images/screenshot-2025-08-10-17-28-12.png",
    alt: "Natural portrait outdoors",
  },
  {
    id: "p3",
    title: "Travel day details",
    category: "Travel",
    src: "/images/screenshot-2025-08-10-17-28-27.png",
    alt: "Close-up travel scene",
  },
  {
    id: "p4",
    title: "Golden hour walk",
    category: "Wellness",
    src: "/images/screenshot-2025-08-10-17-29-33.png",
    alt: "Walking during golden hour",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "All" as unknown as PortfolioCategory,
  "Travel",
  "Lifestyle",
  "Wellness",
  "Brand Work",
];
