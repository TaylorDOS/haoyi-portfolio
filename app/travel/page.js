"use client";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";
import { useEffect, useState } from "react";

const images = [
  "/images/travel/hero-1.jpeg",
  "/images/travel/hero-2.jpeg",
  "/images/travel/hero-3.jpeg",
  "/images/travel/hero-4.jpeg",
  "/images/travel/hero-5.jpeg",
  "/images/travel/hero-6.jpeg",
  "/images/travel/hero-7.jpeg",
];

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage,
  tags
}`;

const options = { next: { revalidate: 30 } };

const urlFor = (source) => imageUrlBuilder(client).image(source);

export default function TravelPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts on mount
    client.fetch(POSTS_QUERY, {}, options).then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-blue-50">
      <div
        className="relative h-[70vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center text-center gap-4 max-w-6xl px-4">
            <h1 className="text-4xl font-bold text-white">
              Travel with Hao Yi
            </h1>
            <p className="font-playfair text-gray-200 italic leading-relaxed">
              To see the world,
              <br />things dangerous to come to,
              <br />to see behind walls, draw closer,
              <br />to find each other, and to feel.
              <br />That is the purpose of life.
            </p>
            <div className="text-gray-200 text-xs">
              Walter Mitty
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto min-h-screen max-w-6xl px-4">
        <h2 className="pt-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
          Travel Log
        </h2>
        <div className="mt-2 leading-snug tracking-tight">
          This is my travel log — not just of places, but of people, moments, and the quiet
          magic found between destinations. Whether on familiar streets or foreign soil, I
          travel to understand, to remember, and to grow.
        </div>
        <ul className="flex flex-col gap-6 mt-8">
          {posts.map((post) => {
            const coverImageUrl = post.coverImage
              ? urlFor(post.coverImage).width(1000).height(1000).url()
              : null;
            return (
              <li
                key={post._id}
                className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden transition-transform"
              >
                <Link href={`/travel/${post.slug.current}`} className="block h-full">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="relative w-full lg:w-1/4 aspect-video md:aspect-auto bg-gray-100 overflow-hidden">
                      {coverImageUrl ? (
                        <img
                          src={coverImageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col justify-between lg:w-3/4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary-500">{post.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {new Date(post.publishedAt).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        {post.excerpt && (
                          <p className="text-sm text-gray-700 mt-2 line-clamp-3">{post.excerpt}</p>
                        )}
                        {post.tags?.length > 0 && (
                          <p>
                            {post.tags.map((tag, i) => (
                              <span key={i} className="inline-block mt-2 bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded mr-2">
                                {tag}
                              </span>
                            ))}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}