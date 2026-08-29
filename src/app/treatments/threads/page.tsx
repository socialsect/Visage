import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Thread Lift Treatment",
  description:
    "Non-surgical thread lift treatment at Visage Polyclinic, Business Bay, Dubai. Skin lifting and tightening using absorbable PDO threads.",
};

const areas = [
  { title: "Face Lift", desc: "Non-surgical lifting of the cheeks, jowls, and mid-face using absorbable threads for a more youthful contour." },
  { title: "Brow Lift", desc: "Elevate the brow area to open up the eyes and reduce the appearance of hooding without surgery." },
  { title: "Neck Tightening", desc: "Improve neck laxity and define the jawline with targeted thread placement." },
  { title: "Nose Contouring", desc: "Non-surgical nose reshaping using threads to refine the bridge and tip." },
  { title: "Collagen Stimulation", desc: "PDO threads stimulate your body&apos;s own collagen production, improving skin quality over time as the threads dissolve." },
  { title: "Skin Tightening", desc: "Overall improvement in skin firmness and elasticity through strategic thread placement." },
];

const faqs = [
  { question: "What are PDO threads?", answer: "PDO (Polydioxanone) threads are absorbable sutings that are inserted under the skin to provide immediate lifting and long-term collagen stimulation. They dissolve naturally over 6-12 months, leaving behind new collagen." },
  { question: "How long do thread results last?", answer: "Results typically last 1-2 years depending on the type of threads used, the treatment area, and individual factors. The collagen produced continues to provide benefits after the threads dissolve." },
  { question: "Is there downtime?", answer: "There may be mild swelling, bruising, or discomfort for a few days after treatment. Most patients return to normal activities within 1-2 days." },
  { question: "Are threads safe?", answer: "PDO threads have been used in medicine for decades and are considered safe when performed by a qualified practitioner. They are fully absorbable and biocompatible." },
];

export default function ThreadsPage() {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Aesthetic Medicine</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">Thread</span> Lift
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              A non-surgical procedure using absorbable PDO threads to lift and tighten the skin. Provides immediate lifting while stimulating your body&apos;s own collagen production for lasting improvement.
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
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Interested in a thread lift?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">Book a consultation to discuss your goals and learn if threads are right for you.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
