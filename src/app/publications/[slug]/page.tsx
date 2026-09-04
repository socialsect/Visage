import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanity } from "@/lib/sanity";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  excerpt,
  readingTime,
  metaTitle,
  metaDescription,
  "image": featuredImage.asset->url,
  "imageAlt": featuredImageAlt,
  "category": category->title,
  "authorName": author->name,
  "authorImage": author->image.asset->url,
  publishedAt,
  updatedAt,
  body,
  faqs,
  schemaType,
  customJsonLd,
}`;

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  category: string;
  authorName: string;
  authorImage: string;
  publishedAt: string;
  updatedAt: string;
  body: PortableTextBlock[];
  faqs: { question: string; answer: string }[];
  schemaType: string;
  customJsonLd: string;
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await sanity.fetch(POST_QUERY, { slug });
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt || "",
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt || "",
      images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post: Post | null = await sanity.fetch(POST_QUERY, { slug });

  if (!post) notFound();

  const jsonLd = post.customJsonLd
    ? post.customJsonLd
    : JSON.stringify({
        "@context": "https://schema.org",
        "@type": post.schemaType || "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: post.authorName ? { "@type": "Person", name: post.authorName } : undefined,
        publisher: { "@type": "Organization", name: "Visage Polyclinic" },
      });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <Link href="/publications" className="text-[12px] font-medium text-brand-500 hover:text-brand-700">
              &larr; Back to blog
            </Link>
            <div className="mt-4 flex items-center gap-3">
              {post.category && (
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-500">{post.category}</span>
              )}
              {post.category && post.publishedAt && (
                <span className="text-[11px] text-warm-400">&middot;</span>
              )}
              {post.publishedAt && (
                <span className="text-[11px] text-warm-400">{formatDate(post.publishedAt)}</span>
              )}
              {post.publishedAt && post.readingTime && (
                <span className="text-[11px] text-warm-400">&middot;</span>
              )}
              {post.readingTime && (
                <span className="text-[11px] text-warm-400">{post.readingTime}</span>
              )}
            </div>
            <h1 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-warm-200">
            <Image src={post.image || "/hero-image.jpg"} alt={post.imageAlt || post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            {post.body && (
              <div className="prose prose-warm max-w-none text-[15px] leading-[1.85] text-warm-700">
                <PortableText value={post.body} />
              </div>
            )}

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12 border-t border-warm-300 pt-8">
                <h2 className="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-ink mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="text-[15px] font-semibold text-ink">{faq.question}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-warm-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 border-t border-warm-300 pt-8">
              <p className="text-[13px] text-warm-500">
                This article is for informational purposes only and does not constitute medical advice. Consult a qualified practitioner for personalised guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-warm-300 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Book a consultation</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
