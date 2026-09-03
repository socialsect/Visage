import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Fat Melting Injections Dubai | Non-Surgical Fat Reduction",
  description:
    "Fat melting treatment in Dubai for the chin, abdomen, arms and more. Injectable fat dissolving with no surgery or downtime. Book a consultation today.",
};

const areas = [
  { title: "Double Chin", desc: "Reduces submental fat beneath the chin, sharpening the jawline and refining the overall facial profile." },
  { title: "Upper Arms", desc: "Targets localised fat in the upper arm for a more toned, defined appearance." },
  { title: "Abdomen", desc: "Addresses small, stubborn pockets of abdominal fat that resist diet and exercise." },
  { title: "Thighs", desc: "Reduces localised fat on the inner or outer thigh for a more contoured leg silhouette." },
  { title: "Flanks", desc: "Targets love handles and flank fat for a smoother, more balanced body contour." },
  { title: "Back", desc: "Addresses stubborn fat deposits along the back for a smoother overall profile." },
];

const faqs = [
  { question: "What is fat melting?", answer: "Fat melting is a non-surgical injectable treatment that breaks down fat cells in a targeted area. Once broken down, the fat is processed and naturally eliminated by your body's own lymphatic system over the following weeks." },
  { question: "How many sessions are needed?", answer: "This depends on the area treated and the amount of fat present. Most treatment plans involve a short course of sessions spaced several weeks apart to allow your body to process each round before the next." },
  { question: "Is there downtime?", answer: "Minimal. Some swelling, tenderness or firmness in the treated area is common for a few days afterward, but most patients return to normal activities immediately." },
  { question: "When will I see results?", answer: "Results build gradually as your body clears the treated fat cells, typically becoming visible over several weeks. Final results are usually assessed a few months after the last session in a course." },
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

export default function FatMeltingPage() {
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
              <span className="font-display font-normal italic text-brand-500">Fat</span> Melting Treatment in Dubai
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Diet and exercise don't always reach every stubborn pocket of fat — genetics often decide where it sits, not lifestyle. Fat melting injections target those specific areas directly, breaking down fat cells that your body then clears naturally, without surgery or significant downtime.
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

      {/* 2. Treatment Areas Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Treatment Areas
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-warm-600">
              Treatment is planned around where fat sits stubbornly for you — not a single formula applied to every body.
            </p>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="bg-surface p-7">
                <h3 className="text-[14px] font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{a.desc}</p>
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
            Interested in Fat Melting?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to discuss your body contouring goals and find out which areas are a good fit for treatment.
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
