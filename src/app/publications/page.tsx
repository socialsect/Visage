import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanity } from "@/lib/sanity";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Health Insights & Blog",
  description:
    "Read the latest health insights, medical advice, and aesthetic treatment guides from Visage Polyclinic, Business Bay, Dubai.",
};

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  readingTime,
  "image": featuredImage.asset->url,
  "imageAlt": featuredImageAlt,
  "category": category->title,
  publishedAt,
}`;

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  category: string;
  publishedAt: string;
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function PublicationsPage() {
  const posts: Post[] = await sanity.fetch(POSTS_QUERY);

  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Blog</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Health <span className="font-display font-normal italic text-brand-500">Insights</span>
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Expert advice and insights from Visage Polyclinic on aesthetic treatments, general health, and skin care.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          {posts.length === 0 ? (
            <p className="text-center text-[15px] text-warm-500">No articles yet. Check back soon.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/publications/${post.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-warm-200">
                    <Image
                      src={post.image || "/hero-image.jpg"}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-3">
                      {post.category && (
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-500">{post.category}</span>
                      )}
                      {post.category && post.readingTime && (
                        <span className="text-[11px] text-warm-400">&middot;</span>
                      )}
                      {post.readingTime && (
                        <span className="text-[11px] text-warm-400">{post.readingTime}</span>
                      )}
                    </div>
                    <h2 className="mt-2 text-[16px] font-semibold leading-snug text-ink group-hover:text-brand-600 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-2 text-[13px] leading-relaxed text-warm-500 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="mt-3 inline-flex items-center text-[12px] font-medium text-brand-500 group-hover:text-brand-700">
                      Read more
                      <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-warm-300 py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Have a question?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">Contact us for personalised medical advice or to book a consultation.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
