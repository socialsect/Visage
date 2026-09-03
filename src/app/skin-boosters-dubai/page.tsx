import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Skin Boosters Dubai | Injectable Hydration Therapy",
  description:
    "Skin boosters in Dubai for deep hydration, texture and radiance — injectable treatments that improve skin quality from within. Book a consultation.",
};

const treatments = [
  { title: "Hydrating Skin Boosters", desc: "Injectable hyaluronic acid delivered directly into the skin to restore deep hydration, elasticity and a healthy glow." },
  { title: "Rejuvenating Boosters", desc: "Nutrient-rich formulations combining vitamins, amino acids and minerals to revive tired, dull-looking skin." },
  { title: "Brightening Treatments", desc: "Targeted formulas that address pigmentation and uneven tone, helping restore a more even, luminous complexion." },
  { title: "Anti-Ageing Boosters", desc: "Collagen-stimulating injectables that improve skin firmness and soften the appearance of fine lines over time." },
];

const faqs = [
  { question: "What are skin boosters?", answer: "Skin boosters are injectable treatments — typically hyaluronic acid or nutrient-based formulas — delivered into the skin's surface layers to improve hydration, texture and radiance. Unlike fillers, they're designed to enhance skin quality rather than add volume or shape." },
  { question: "How are skin boosters different from fillers?", answer: "Fillers are placed to add structural volume — plumping lips, cheeks or the jawline. Skin boosters work differently: they're distributed more broadly across the skin to improve hydration and quality, without changing facial contours." },
  { question: "How long do results last?", answer: "Most patients see results lasting a few months, with hydration and glow typically most noticeable in the weeks following treatment. A short course of sessions, followed by periodic maintenance, tends to give the most consistent results." },
  { question: "Is there downtime?", answer: "Minimal. You may notice small bumps or slight redness at the injection sites immediately after treatment, which typically settle within a day or two, allowing most patients to return to normal activities right away." },
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

export default function SkinBoostersPage() {
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
              Skin Rejuvenation
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Skin <span className="font-display font-normal italic text-brand-500">Boosters</span> in Dubai
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Not every skin concern needs volume — sometimes what's missing is hydration at a level moisturiser can't reach. Skin boosters deliver hydrating actives directly into the skin, improving texture, elasticity and radiance from within rather than adding structural shape.
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

      {/* 2. Available Treatments Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Available Treatments
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-warm-600">
              Skin boosters aren't one formula — the right approach depends on whether your skin needs hydration, brightening, or a broader anti-ageing boost.
            </p>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2">
            {treatments.map((t) => (
              <div key={t.title} className="bg-surface p-7">
                <h3 className="text-[14px] font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{t.desc}</p>
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
            Interested in Skin Boosters?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to find the right booster treatment for your skin's specific needs.
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
