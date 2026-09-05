import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import FeatureGrid from "@/components/FeatureGrid";
import InteractiveProcess from "@/components/InteractiveProcess";

export const metadata: Metadata = {
  title: "Dermal Fillers Dubai | Facial Contouring at Visage Polyclinic",
  description:
    "Dermal fillers in Dubai for lips, cheeks, jawline and chin. Natural volume restoration with premium fillers, tailored to your face. Book a consultation.",
};

const areas = [
  { title: "Facial Contouring", desc: "A broader treatment combining multiple areas to lift, reshape and rebalance overall facial proportions." },
  { title: "Lip Fillers", desc: "Adds volume, shape or definition to the lips — from a subtle hydration boost to a fuller, more defined look." },
  { title: "Nose Fillers", desc: "A non-surgical way to smooth bumps or refine the nasal profile without going under the knife." },
  { title: "Chin Fillers", desc: "Builds chin projection to improve facial balance, especially for those with a recessed or weaker chin line." },
  { title: "Jawline Fillers", desc: "Creates a sharper, more structured jawline contour using strategically placed filler along the jaw." },
  { title: "Body Fillers", desc: "Filler-based contouring and volume enhancement for areas beyond the face, such as hands." },
];

const boosters = [
  { title: "Skin Boosters", desc: "Injectable hydration that improves skin texture and radiance from within, rather than adding structural volume." },
  { title: "Biostimulators", desc: "Stimulates your skin's own collagen production, so improvement builds gradually over weeks rather than appearing instantly." },
  { title: "Sculptra", desc: "A biostimulatory treatment that restores facial volume progressively as your body produces new collagen — results can last significantly longer than traditional fillers." },
  { title: "Salmon DNA", desc: "A regenerative treatment using polynucleotides to support skin repair, hydration and overall skin health." },
];

const faqs = [
  { question: "What are dermal fillers?", answer: "Dermal fillers are injectable gels, most commonly made from hyaluronic acid, used to restore lost facial volume or add definition to areas like the lips, cheeks and jawline. They work by physically adding volume beneath the skin." },
  { question: "How long do fillers last?", answer: "Most traditional fillers last between six months and two years, depending on the product, treatment area and your individual metabolism. Biostimulatory treatments like Sculptra work differently and can support results for up to five years." },
  { question: "Is there downtime?", answer: "No significant downtime — most patients return to normal activities the same day. Mild swelling or bruising at the injection site is common and usually resolves within a few days." },
  { question: "What is Sculptra?", answer: "Sculptra is a biostimulatory treatment that works differently from traditional fillers — rather than adding immediate volume, it stimulates your own collagen production over time, giving gradual, longer-lasting improvement." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FillersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 1. Hero */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Aesthetic Medicine
              </p>
              <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                Dermal <span className="font-display font-normal italic text-brand-500">Fillers</span> in Dubai
              </h1>
              <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
                Dermal fillers restore volume where it's been lost and refine contours where you want more definition — lips, cheeks, jawline, chin. At Visage Polyclinic, every filler treatment is planned around your existing bone structure, not a generic template, so the result looks like an enhanced version of you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
                >
                  Book Treatment
                </Link>
                <a
                  href="https://wa.me/971581867309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600"
                >
                  Ask a Question
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-200">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1000&h=625&fit=crop&crop=center"
                  alt="Dermal filler consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="border-y border-warm-300 py-10 sm:py-12">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-px bg-warm-300">
            {[
              { label: "No Downtime", sub: "Resume normal activities the same day" },
              { label: "6 Months – 2 Years", sub: "Typical duration, depending on product and area" },
              { label: "Up to 5 Years", sub: "Longer-lasting results with biostimulatory treatments" },
            ].map((f) => (
              <div key={f.label} className="bg-surface p-6 text-center">
                <p className="text-xl font-semibold text-ink">{f.label}</p>
                <p className="mt-1 text-[12px] text-warm-500">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-warm-300"></span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                  About Dermal Fillers
                </p>
              </div>
              
              <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
                Volume Restoration That Looks Like You, Not a Different Face
              </h2>
              
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-warm-600">
                <p>
                  The most common filler mistake isn't too little product — it's the wrong placement. Overfilled cheeks or an unnaturally straight jawline usually come from ignoring the face's existing proportions rather than working with them.
                </p>
                <p>
                  At Visage, Dr. Musa starts by assessing your bone structure, skin quality and facial symmetry before recommending anything. Some patients need subtle lip enhancement; others benefit more from jawline or chin work to rebalance their overall profile. The plan follows the face, not the other way around.
                </p>
                <p>
                  Our approach favours restraint over drama. We'll always tell you honestly when less product will give a better result — and if fillers aren't the right treatment for what you're hoping to achieve, we'll say so.
                </p>
              </div>

              <Link
                href="/aesthetic-doctor-dubai"
                className="mt-10 inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3.5 text-[14px] font-medium text-white transition-all hover:bg-[#997c9b] active:scale-[0.98]"
              >
                Meet Dr. Musa
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Right Column (Image) */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-warm-200 lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?w=800&h=1000&fit=crop&crop=center"
                alt="Consultation for dermal fillers at Visage Polyclinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Treatment Areas Section */}
      <FeatureGrid 
        title="Treatment Areas" 
        description="Filler treatment is chosen by area and goal — restoring lost volume reads very differently from sculpting new definition." 
        items={areas} 
      />

      <FeatureGrid 
        title="Boosters & Biostimulators" 
        description="Not every volume concern needs a traditional filler — these treatments work with your skin's own biology for a slower, more gradual improvement." 
        items={boosters} 
      />

      {/* 6. "What to Expect" Section */}
      <InteractiveProcess 
        title="What to Expect"
        className="py-20 sm:py-28"
        steps={[
          { title: "Consultation", desc: "We discuss your goals, walk through the right options for your face, and build a plan you actually understand before booking treatment." },
          { title: "Treatment", desc: "Precise filler placement using fine needles or cannulas. Timing varies depending on the area and product used." },
          { title: "Results", desc: "Volume is visible immediately, though some initial swelling is normal and typically settles within a few days." },
        ]}
      />

      {/* 7. FAQ Section */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Interested in Dermal Fillers?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to talk through your goals and find out which treatment — if any — actually suits your face.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
            >
              Book an Appointment
            </Link>
            <a
              href="https://wa.me/971581867309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
