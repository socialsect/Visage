import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "PRF Treatment Dubai | Platelet-Rich Fibrin Therapy",
  description:
    "PRF treatment in Dubai — a sustained-release regenerative therapy using your own platelet-rich fibrin for gradual, longer-lasting skin renewal. Book now.",
};

const uses = [
  { title: "Advanced Skin Rejuvenation", desc: "A more sustained collagen and elastin response than PRP alone, thanks to PRF's gradual growth factor release." },
  { title: "Under-Eye Rejuvenation", desc: "Suited to the fragile under-eye area, where PRF's gentler, sustained healing process helps address hollows and fine lines." },
  { title: "Facial Volume Restoration", desc: "Uses your own biological material to add natural volume and improve facial contours, without synthetic fillers." },
  { title: "Skin Quality Improvement", desc: "Broad improvement in texture, firmness and radiance, building progressively as growth factors release over time." },
  { title: "Acne Scar Treatment", desc: "Encourages tissue remodelling and collagen synthesis to soften the appearance of atrophic acne scarring." },
  { title: "Hair Loss Treatment", desc: "Sustained growth factor delivery to the scalp, aimed at stimulating dormant follicles and improving hair thickness." },
];

const faqs = [
  { question: "What is PRF?", answer: "PRF (platelet-rich fibrin) is a regenerative treatment derived from your own blood, similar to PRP but processed without anticoagulants. This creates a fibrin matrix that holds platelets and growth factors together, releasing them gradually rather than immediately." },
  { question: "How is PRF different from PRP?", answer: "The main difference is release speed. PRP delivers growth factors more immediately after injection, while PRF's fibrin structure releases them slowly over several days to weeks — often described as offering more sustained, longer-lasting stimulation from a single treatment." },
  { question: "Is PRF painful?", answer: "Most patients describe PRF as mildly uncomfortable rather than painful, similar to a standard injection. Numbing options can be discussed during consultation for more sensitive areas." },
  { question: "How many sessions are needed?", answer: "PRF is often recommended as a short course spaced several weeks apart, with maintenance sessions afterward. The right number depends on the area treated and how your skin responds." },
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

export default function PRFPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 1. Hero Section */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Regenerative Medicine
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">PRF</span> Treatment in Dubai
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              PRF takes the same principle as PRP one step further. By processing your blood differently, PRF forms a fibrin matrix that releases growth factors gradually over time rather than all at once — giving your skin a slower, more sustained regenerative effect.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
        </div>
      </section>

      {/* 2. What PRF Can Treat */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              What PRF Can Treat
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-warm-600">
              PRF's slow-release mechanism makes it particularly effective for concerns that benefit from sustained, gradual improvement.
            </p>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-3">
            {uses.map((u) => (
              <div key={u.title} className="bg-surface p-7">
                <h3 className="text-[14px] font-semibold text-ink">{u.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Interested in PRF?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to discuss whether PRF's gradual, sustained approach is the right fit for your goals.
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
