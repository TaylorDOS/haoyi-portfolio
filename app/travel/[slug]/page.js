import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/client";
import Link from "next/link";
import Itinerary from '../../components/Itinerary';

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const revalidate = 30;

export default async function PostPage({ params }) {
  const param = await params;
  const slug = await param.slug;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    excerpt,
    location,
    days,
    tags,
    mapUrl,
    coverImage{
      asset->{
        _id,
        url
      }
    },
    itinerary[]{
      day,
      title,
      description,
      images[]{
        asset->{
          _id,
          url
        }
      }
    },
    body
  }`,
    { slug }
  );

  if (!post) {
    return (
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Back
        </Link>
      </main>
    );
  }
  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage)?.width(1920).height(1080).url()
    : null;

  return (
    <div className="mt-16">
      {coverImageUrl && (
        <img
          src={coverImageUrl}
          alt={post.title}
          className="h-[50vh] w-full object-cover"
          width={1920}
          height={1080}
        />
      )}
      <div className="container mx-auto max-w-6xl p-8 flex flex-col gap-y-2">
        <Link href="/travel" className="hover:underline">
          Back
        </Link>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        {post.tags?.length > 0 && (
          <p>
            {post.tags.map((tag, i) => (
              <span key={i} className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded mr-2">
                {tag}
              </span>
            ))}
          </p>
        )}
        {post.excerpt && (
          <p className="italic text-base text-gray-800">{post.excerpt}</p>
        )}
        <div className="text-gray-600 text-sm border-b pb-4">
          <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
          {post.location && <p>Location: {post.location}</p>}
          {post.days && <p>Duration: {post.days} days</p>}
          {post.mapUrl && (
            <p>
              <a href={post.mapUrl} className="text-blue-600 hover:underline" target="_blank">
                View Map
              </a>
            </p>
          )}
        </div>
        <div className="mt-4">
          <PortableText value={post.body} />
        </div>
        <h2 className="text-2xl font-semibold">Itinerary</h2>
        {post.itinerary?.length > 0 && <Itinerary itinerary={post.itinerary} />}
      </div>
    </div>
  );
}