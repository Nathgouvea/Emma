"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type InstaPost = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  like_count?: number;
  comments_count?: number;
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstaPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setError(false);
        const res = await fetch("/instagram.json", { 
          cache: "no-store",
          headers: {
            'Accept': 'application/json',
          }
        });
        
        if (!res.ok) throw new Error('Failed to fetch');
        
        const json = await res.json();
        if (mounted) {
          setPosts(json.data ?? []);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(true);
          setLoading(false);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Instagram Highlights
            </h2>
            <p className="text-neutral-600">
              Latest posts from my journey. Follow along for daily inspiration.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square animate-pulse rounded-lg bg-neutral-200"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
              Instagram Highlights
            </h2>
            <p className="text-neutral-600">
              Latest posts from my journey. Follow along for daily inspiration.
            </p>
          </div>
          
          <div className="text-center py-12">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
              <svg
                className="h-8 w-8 text-neutral-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.649-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-neutral-900">
              {error ? "Unable to load posts" : "No posts available"}
            </h3>
            <p className="text-neutral-500">
              {error 
                ? "Check back later for the latest updates." 
                : "Posts will appear here soon."
              }
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
            Instagram Highlights
          </h2>
          <p className="text-neutral-600">
            Latest posts from my journey. Follow along for daily inspiration.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.permalink || "#"}
              target={post.permalink ? "_blank" : undefined}
              rel={post.permalink ? "noopener noreferrer" : undefined}
              className="group relative block aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:border-ocean hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
              aria-label={post.caption || `Instagram post ${index + 1}`}
            >
              <Image
                src={post.media_url}
                alt={post.caption || `Instagram post ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 3}
                quality={75}
              />
              
              {/* Hover overlay with engagement info */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center text-white">
                    {post.like_count && (
                      <div className="mb-1 flex items-center justify-center space-x-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span className="text-sm font-medium">{post.like_count}</span>
                      </div>
                    )}
                    {post.comments_count && (
                      <div className="flex items-center justify-center space-x-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
                        </svg>
                        <span className="text-sm font-medium">{post.comments_count}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Follow CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border-2 border-ocean bg-white px-6 py-3 text-sm font-medium text-ocean transition-all duration-300 hover:bg-ocean hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
          >
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.649-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
