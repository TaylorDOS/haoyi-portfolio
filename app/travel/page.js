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
        className="relative h-[100vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="max-w-6xl mx-auto absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-center p-8 gap-10 text-white">
          <div className="w-full lg:w-2/3 max-w-2xl text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Travel</h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Not just for the places, but for the people, the fleeting moments, and the quiet magic that lives between destinations. Whether wandering familiar streets or stepping onto foreign soil, I travel to understand, to remember, and to keep growing — one journey at a time.
            </p>
          </div>
          <div className="w-full lg:w-1/3 text-center font-playfair italic space-y-4 px-4">
            <p className="text-sm text-gray-300">
              To see the world,<br />
              things dangerous to come to,<br />
              to see behind walls, draw closer,<br />
              to find each other, and to feel.<br />
              That is the purpose of life.
            </p>
            <div className="text-xs tracking-wide text-gray-300">
              Walter Mitty
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mt-4 mx-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
          Chapter
        </h2>
        <p className="mx-4 mt-2 text-base">
          Each journey is a story and every destination, a chapter.
        </p>
        <ul className="flex flex-col gap-6 mt-4 mx-4">
          {posts.map((post) => {
            const coverImageUrl = post.coverImage
              ? urlFor(post.coverImage).width(1000).height(1000).url()
              : null;
            return (
              <li
                key={post._id}
                className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden transition-transform hover:scale-105"
              >
                <Link href={`/travel/${post.slug.current}`} className="block h-full">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/4 bg-gray-100 overflow-hidden">
                      {coverImageUrl ? (
                        <img
                          src={coverImageUrl}
                          alt={post.title}
                          className="object-cover h-full w-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col justify-between md:w-3/4">
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