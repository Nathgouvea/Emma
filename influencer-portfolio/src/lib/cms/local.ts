import { CmsProvider, SiteSettings, PortfolioItem, BlogPost, Testimonial } from "./types";

const localProvider: CmsProvider = {
  async getSiteSettings(): Promise<SiteSettings> {
    return {
      siteTitle: "Emma",
      tagline: "Manifesting adventures, one moment at a time",
    };
  },

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return [
      {
        id: "1",
        title: "Puerto Rican Sunset",
        category: "travel",
        description: "Golden hour during a yoga retreat in Puerto Rico",
        location: "Puerto Rico",
        imageUrl: "/api/placeholder/600/400",
        featured: true,
        tags: ["Travel", "Sunset", "Yoga"],
      },
    ];
  },

  async getFeaturedPosts(): Promise<BlogPost[]> {
    return [
      {
        id: "post-1",
        title: "Manifesting My Dream Life",
        slug: "manifesting-my-dream-life",
        excerpt: "Lessons from Bob Proctor that shaped my mindset.",
        category: "manifestation",
        date: new Date().toISOString().slice(0, 10),
        readTime: "8 min read",
        imageUrl: "/api/placeholder/600/400",
        tags: ["Mindset", "Law of Attraction"],
        featured: true,
      },
    ];
  },

  async getAllPosts(): Promise<BlogPost[]> {
    return [];
  },

  async getTestimonials(): Promise<Testimonial[]> {
    return [
      {
        id: "t-1",
        author: "Sarah Chen",
        role: "Marketing Director",
        company: "Wellness Collective",
        quote: "Emma brought our brand story to life with authenticity.",
        rating: 5,
      },
    ];
  },
};

export default localProvider;