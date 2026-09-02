import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Skin Rejuvenation Treatments",
  description:
    "Skin rejuvenation treatments at Visage Polyclinic, Business Bay, Dubai. Chemical peels, microneedling, mesotherapy, and more for healthier, radiant skin.",
};

const treatments = [
  { title: "Chemical Peels", desc: "Controlled exfoliation using acid solutions to improve skin texture, tone, and clarity. Effective for pigmentation, acne scars, and dullness." },
  { title: "Dermapen Microneedling", desc: "Micro-injuries stimulate collagen production, improving skin texture, fine lines, and scarring with minimal downtime." },
  { title: "Mesotherapy", desc: "Micro-injections of vitamins, enzymes, and nutrients directly into the mesoderm to rejuvenate and hydrate the skin." },
  { title: "PRP Skin Rejuvenation", desc: "Your own platelet-rich plasma is applied to stimulate collagen and elastin production for natural-looking improvement." },
  { title: "Dermaplaning", desc: "Physical exfoliation removing dead skin cells and vellus hair for a smoother, brighter complexion." },
  { title: "Skin Polishing", desc: "Advanced exfoliation technique to refine skin texture and promote a more even, radiant skin tone." },
];

const faqs = [
  { question: "What is skin rejuvenation?", answer: "Skin rejuvenation refers to a range of treatments designed to improve the appearance and health of your skin. These can address concerns like dullness, uneven tone, fine lines, acne scars, and pigmentation." },
  { question: "How many sessions will I need?", answer: "The number of sessions depends on the specific treatment and your skin concerns. Some treatments show results after one session, while others may require a series of 3-6 sessions for optimal results." },
  { question: "Is there downtime?", answer: "Downtime varies by treatment. Chemical peels and microneedling may cause redness for 1-3 days. Mesotherapy typically has minimal downtime. Your practitioner will advise on what to expect." },
  { question: "Are these treatments safe for all skin types?", answer: "Most skin rejuvenation treatments are suitable for various skin types. During your consultation, we will assess your skin and recommend the most appropriate options." },
];

export default function SkinRejuvenationPage() {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Aesthetic Medicine</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Skin <span className="font-display font-normal italic text-brand-500">Rejuvenation</span>
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              A range of non-surgical treatments designed to improve skin texture, tone, and overall radiance. Each treatment is tailored to your individual skin concerns and goals.
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
          <h2 className="mb-10 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">Available Treatments</h2>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <div key={t.title} className="bg-surface p-7">
                <h3 className="text-[14px] font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { num: "1", title: "Consultation", body: "Assess your skin concerns and develop a personalised treatment plan." },
              { num: "2", title: "Treatment", body: "Targeted procedures performed with clinical precision and care." },
              { num: "3", title: "Results", body: "Gradual improvement as your skin responds to treatment over the following weeks." },
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

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Ready to improve your skin?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">Book a consultation to find the right treatment for your skin.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
