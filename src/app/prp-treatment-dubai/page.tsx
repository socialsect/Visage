import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import FeatureGrid from "@/components/FeatureGrid";
import InteractiveProcess from "@/components/InteractiveProcess";

export const metadata: Metadata = {
  title: "PRP Treatment Dubai | Platelet-Rich Plasma Therapy",
  description:
    "PRP treatment in Dubai using your own platelet-rich plasma to stimulate collagen and natural skin renewal. For face, under-eyes, hair and more. Book now.",
};

const uses = [
  { title: "Facial Rejuvenation", desc: "Encourages collagen production across the face for improved texture, tone and overall skin elasticity." },
  { title: "Under-Eye Treatment", desc: "A gentle option for the delicate under-eye area, helping to soften fine lines and reduce the appearance of dark circles." },
  { title: "Hair Restoration", desc: "Injected directly into the scalp, PRP can help stimulate follicle activity and support improved hair density over time." },
  { title: "Acne Scarring", desc: "Promotes collagen remodelling in scarred tissue, gradually softening the appearance of acne scars." },
  { title: "Neck & Décolletage", desc: "Extends rejuvenation beyond the face to address texture and early signs of ageing on the neck and chest." },
  { title: "Hand Rejuvenation", desc: "Restores volume and improves skin quality on the hands, an area that often shows age before the face does." },
];

const faqs = [
  { question: "What is PRP?", answer: "PRP (platelet-rich plasma) is a regenerative treatment made from your own blood. After a small sample is drawn and processed, the platelet-rich portion — concentrated with growth factors is reintroduced to stimulate your skin or scalp's natural repair process." },
  { question: "How long does PRP take?", answer: "A typical PRP session including blood draw, preparation and application takes around 45 minutes to an hour, depending on the treatment area." },
  { question: "Is PRP safe?", answer: "Because PRP uses your own blood, the risk of allergic reaction or rejection is minimal compared to treatments using external substances. As with any injectable procedure, it should only be carried out by a qualified medical practitioner." },
  { question: "When will I see results?", answer: "PRP works gradually, as your body's own collagen production responds to treatment. Most patients begin noticing improvement over several weeks, with results continuing to build over the following months." },
  { question: "How many sessions are needed?", answer: "PRP is typically most effective as a short course of sessions spaced several weeks apart, followed by periodic maintenance treatments. The right schedule depends on the area treated and your skin or scalp's response." },
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

export default function PRPPage() {
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
              <span className="font-display font-normal italic text-brand-500">PRP</span> Treatment in Dubai
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              PRP works with your own biology, not against it. By concentrating the growth factors already present in your blood and reintroducing them to targeted areas, PRP encourages your skin or scalp to repair and renew itself naturally, without introducing any foreign substance.
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

      {/* 2. What PRP Can Treat */}
      <FeatureGrid 
        title="What PRP Can Treat" 
        description="PRP's regenerative effect makes it useful across a surprising range of concerns — not just facial skin quality." 
        items={uses} 
      />

      {/* 3. How It Works */}
      <InteractiveProcess 
        title="How PRP Works"
        className="bg-surface-alt py-20 sm:py-28"
        steps={[
          { title: "Blood Draw", desc: "A small blood sample is taken — the same routine process as a standard blood test." },
          { title: "Preparation", desc: "Your blood is spun in a centrifuge to separate and concentrate the platelet-rich plasma from the rest of the sample." },
          { title: "Application", desc: "The concentrated PRP is precisely applied or injected into the treatment area, activating your body's own repair response." },
        ]}
      />

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
            Interested in PRP?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to find out whether PRP is the right regenerative treatment for your goals.
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
