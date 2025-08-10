"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";

interface InstaPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  like_count?: number;
  comments_count?: number;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/instagram.json");
        const json = await res.json();
        if (mounted) setPosts(json.data ?? []);
      } catch (_e) {
        // handled by API fallback
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-dancing-script text-dark mb-3">
            Instagram Highlights
          </h2>
          <p className="text-dark/70">
            Latest posts from my journey. Follow along for daily inspiration.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-dark/50">Loading…</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {posts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block aspect-square rounded-lg overflow-hidden bg-sandy-beige/40"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img
                  src={post.media_url}
                  alt={post.caption ?? "Instagram post"}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-xs flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart size={14} /> {post.like_count ?? 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} /> {post.comments_count ?? 0}
                    </span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
