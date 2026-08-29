import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const blogs: Record<string, { title: string; date: string; readTime: string; category: string; image: string; content: string[] }> = {
  "botox-everything-you-need-to-know": {
    title: "Botox: Everything You Need to Know Before Your First Treatment",
    date: "August 2026",
    readTime: "5 min read",
    category: "Aesthetic Medicine",
    image: "/hero-image.jpg",
    content: [
      "Botox, or botulinum toxin, is a non-surgical treatment that works by relaxing targeted facial muscles. By reducing muscle activity, it can help diminish the appearance of dynamic wrinkles caused by repeated facial expressions.",
      "Common treatment areas include the forehead, between the eyebrows (frown lines), around the eyes (crow's feet), and the neck. Botox can also be used for medical purposes, such as treating excessive sweating (hyperhidrosis) and reducing muscle bulk in areas like the jawline and shoulders.",
      "The procedure itself is quick, typically taking 15-30 minutes. A fine needle is used to inject small amounts of Botox into the targeted muscles. Most patients describe the discomfort as minimal.",
      "Results typically begin to appear within a few days, with full results visible at approximately two weeks. The effects generally last 3 to 6 months, depending on the individual and the treatment area.",
      "After treatment, it is generally advised to avoid vigorous exercise, massaging the treated area, and lying down for the first few hours. Botox is often described as having no downtime, meaning most patients return to their normal activities immediately.",
      "As with any medical procedure, Botox should be administered by a qualified and experienced practitioner. During a consultation, your doctor will assess your individual needs and recommend the most appropriate treatment plan.",
    ],
  },
  "skincare-routine-dubai-climate": {
    title: "How to Adapt Your Skincare Routine for Dubai's Climate",
    date: "August 2026",
    readTime: "4 min read",
    category: "Skin Health",
    image: "/dr-musa.jpg",
    content: [
      "Living in Dubai presents unique challenges for skin health. The combination of intense UV exposure, air conditioning, and occasional sand exposure can leave skin dehydrated, irritated, and prone to premature ageing.",
      "Sun protection is the single most important step in any Dubai skincare routine. A broad-spectrum SPF 30 or higher should be applied daily, even on cloudy days and when spending most of your time indoors, as UV rays can penetrate windows.",
      "Hydration is equally important. The constant switch between outdoor heat and indoor air conditioning can strip moisture from the skin. Using a hyaluronic acid-based serum and a good moisturiser helps maintain the skin barrier.",
      "Regular professional treatments can also help maintain skin health in Dubai's climate. Chemical peels, microneedling, and skin boosters are popular options for keeping skin refreshed and resilient.",
      "If you are experiencing persistent skin concerns such as pigmentation, acne, or premature ageing, a consultation with a qualified practitioner can help identify the most effective treatment approach for your individual skin type and concerns.",
    ],
  },
  "when-to-see-general-practitioner": {
    title: "When Should You See a General Practitioner? A Practical Guide",
    date: "July 2026",
    readTime: "4 min read",
    category: "General Health",
    image: "/hero-image.jpg",
    content: [
      "A general practitioner (GP) is often the first point of contact for any health concern. While many people only visit a doctor when they feel seriously unwell, regular check-ups and early intervention can make a significant difference to long-term health.",
      "You should consider seeing a GP if you experience persistent symptoms that do not resolve within a few days, such as ongoing fatigue, unexplained weight changes, recurring headaches, or digestive issues.",
      "Chronic conditions like hypertension (high blood pressure) and diabetes require ongoing monitoring and management. Regular check-ups help ensure these conditions are well controlled and reduce the risk of complications.",
      "Men's health is another important area that is often overlooked. Regular health screenings can detect issues early, when treatment is most effective.",
      "Adolescents also benefit from regular medical check-ups, particularly during periods of rapid growth and development. A GP can address concerns related to skin health, mental wellbeing, and general physical development.",
      "At Visage Polyclinic, our general practice services cover a wide range of health needs, from acute illness management to chronic disease care and preventive health assessments.",
    ],
  },
};

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs[slug];
  if (!blog) return { title: "Post Not Found" };
  return {
    title: blog.title,
    description: blog.content[0],
  };
}

export async function generateStaticParams() {
  return Object.keys(blogs).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs[slug];

  if (!blog) {
    return (
      <section className="py-20 sm:py-28 text-center">
        <h1 className="text-2xl font-semibold text-ink">Post not found</h1>
        <Link href="/publications" className="mt-4 inline-flex text-sm text-brand-600 hover:text-brand-700">Back to blog</Link>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <Link href="/publications" className="text-[12px] font-medium text-brand-500 hover:text-brand-700">
              &larr; Back to blog
            </Link>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-500">{blog.category}</span>
              <span className="text-[11px] text-warm-400">&middot;</span>
              <span className="text-[11px] text-warm-400">{blog.date}</span>
              <span className="text-[11px] text-warm-400">&middot;</span>
              <span className="text-[11px] text-warm-400">{blog.readTime}</span>
            </div>
            <h1 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-warm-200">
            <Image src={blog.image} alt={blog.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6 text-[15px] leading-[1.85] text-warm-700">
              {blog.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
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
