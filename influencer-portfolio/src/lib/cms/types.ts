export type PortfolioCategory = "travel" | "lifestyle" | "wellness";

export interface SiteSettings {
  siteTitle: string;
  tagline: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  location: string;
  imageUrl: string;
  featured: boolean;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  tags: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
}

export interface CmsProvider {
  getSiteSettings(): Promise<SiteSettings>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getFeaturedPosts(): Promise<BlogPost[]>;
  getAllPosts(): Promise<BlogPost[]>;
  getTestimonials(): Promise<Testimonial[]>;
}
