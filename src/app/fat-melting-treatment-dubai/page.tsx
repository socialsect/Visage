import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Fat Melting Treatment",
  description:
    "Fat melting injections at Visage Polyclinic, Business Bay, Dubai. Non-surgical fat reduction for chin, arms, abdomen, and thighs.",
};

const areas = [
  { title: "Double Chin", desc: "Reduce submental fat under the chin to create a more defined jawline and facial profile." },
  { title: "Upper Arms", desc: "Target localised fat deposits in the upper arm area for a more toned appearance." },
  { title: "Abdomen", desc: "Address small pockets of stubborn fat in the abdominal area that resist diet and exercise." },
  { title: "Thighs", desc: "Reduce localised fat on the inner or outer thighs for a more contoured silhouette." },
  { title: "Flanks", desc: "Target love handles and flank areas for improved body contour." },
  { title: "Back", desc: "Address stubborn fat deposits on the back area for a smoother profile." },
];

const faqs = [
  { question: "What is fat melting?", answer: "Fat melting (injectable lipolysis) involves injecting a solution into targeted fat deposits. The solution breaks down fat cells, which are then naturally eliminated by the body over the following weeks." },
  { question: "How many sessions are needed?", answer: "Most patients require 2-4 sessions spaced 4-6 weeks apart, depending on the treatment area and the amount of fat being addressed." },
  { question: "Is there downtime?", answer: "There may be swelling, redness, or tenderness at the injection site for a few days. Most patients return to normal activities immediately." },
  { question: "When will I see results?", answer: "Results appear gradually over 4-8 weeks as the body processes and eliminates the treated fat cells. Optimal results are typically seen after a full course of treatment." },
];

export default function FatMeltingPage() {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Aesthetic Medicine</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">Fat</span> Melting
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              A non-surgical treatment targeting localised fat deposits. Injectable solutions break down fat cells, which are then naturally eliminated by the body. Suitable for the chin, arms, abdomen, and other areas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book Treatment</Link>
              <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">Ask a Question</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <h2 className="mb-10 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">Treatment Areas</h2>
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

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Interested in fat melting?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">Book a consultation to discuss your body contouring goals.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
