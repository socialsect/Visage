import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import FeatureGrid from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Skin Rejuvenation Dubai | Chemical Peels, Microneedling",
  description:
    "Skin rejuvenation treatments in Dubai — chemical peels, microneedling, mesotherapy and more. Tailored to your skin concerns. Book a consultation today.",
};

const treatments = [
  { title: "Chemical Peels", desc: "A controlled acid solution that lifts away damaged surface skin, fading pigmentation and evening out tone and texture." },
  { title: "Dermapen Microneedling", desc: "Fine needles create controlled micro-injuries that trigger your skin's own collagen response, softening fine lines and scarring over time." },
  { title: "Mesotherapy", desc: "Direct micro-injections of vitamins and nutrients into the skin's mid-layer for a targeted hydration and rejuvenation boost." },
  { title: "PRP Skin Rejuvenation", desc: "Your own plasma, concentrated and reintroduced to the skin, encouraging natural collagen and elastin production." },
  { title: "Dermaplaning", desc: "A physical exfoliation technique that removes dead skin and fine facial hair, leaving skin smoother and better able to absorb other treatments." },
  { title: "Skin Polishing", desc: "A refining exfoliation treatment that evens out texture and helps restore a brighter, more consistent skin tone." },
];

const faqs = [
  { question: "What is skin rejuvenation?", answer: "Skin rejuvenation covers a group of treatments designed to improve skin texture, tone and overall health — from acid peels and microneedling to nutrient-based injectables like mesotherapy and PRP. The right combination depends on your specific skin concerns." },
  { question: "How many sessions will I need?", answer: "This varies by treatment and by your skin's starting condition. Some treatments show visible improvement after one session, while others — particularly collagen-stimulating options like microneedling or PRP — work best as part of a short course over several weeks." },
  { question: "Is there downtime?", answer: "Most skin rejuvenation treatments involve little to no downtime, though mild redness or sensitivity for a day or two is common depending on the treatment. Deeper chemical peels may need slightly longer to settle." },
  { question: "Are these treatments safe for all skin types?", answer: "Many skin rejuvenation treatments are suitable across a wide range of skin types, but not every treatment suits every skin. We assess your skin during consultation to recommend options that are appropriate and safe for you specifically." },
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

export default function SkinRejuvenationPage() {
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
              Aesthetic Medicine
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Skin <span className="font-display font-normal italic text-brand-500">Rejuvenation</span> in Dubai
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Tired, dull or uneven skin usually isn't fixed with one treatment — it's fixed with the right combination. At Visage Polyclinic, we assess your skin's texture, pigmentation and overall condition before recommending a rejuvenation plan built specifically around what your skin actually needs.
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

      {/* 2. Available Treatments */}
      <FeatureGrid 
        title="Available Treatments" 
        description="Six approaches to healthier skin, each working differently — from surface-level exfoliation to deeper collagen stimulation." 
        items={treatments} 
      />

      {/* 3. What to Expect */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              What to Expect
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { num: "1", title: "Consultation", body: "We look at your skin concerns directly and build a plan around them — not a generic package applied to everyone." },
              { num: "2", title: "Treatment", body: "Each procedure is carried out with clinical precision, matched to the treatment type and your skin's sensitivity." },
              { num: "3", title: "Results", body: "Improvement builds gradually as your skin responds over the following weeks — this is a renewal process, not an overnight fix." },
            ].map((s) => (
              <div key={s.num} className="border-t border-warm-300 pt-6">
                <span className="text-2xl font-semibold text-brand-400">{s.num}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Ready to Improve Your Skin?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation and we'll help you figure out which treatment or combination actually fits your skin.
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
