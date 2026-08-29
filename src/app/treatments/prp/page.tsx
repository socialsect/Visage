import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "PRP Treatment",
  description:
    "PRP (Platelet-Rich Plasma) treatment at Visage Polyclinic, Business Bay, Dubai. Natural skin rejuvenation using your body's own growth factors.",
};

const uses = [
  { title: "Facial Rejuvenation", desc: "Improve skin texture, tone, and elasticity using your own platelet-rich plasma to stimulate collagen production." },
  { title: "Under-Eye Treatment", desc: "Address dark circles and fine lines in the delicate under-eye area with PRP therapy." },
  { title: "Hair Restoration", desc: "Stimulate hair growth and improve hair density by injecting PRP into the scalp." },
  { title: "Acne Scarring", desc: "Improve the appearance of acne scars by promoting collagen remodelling and skin renewal." },
  { title: "Neck & Decolletage", desc: "Rejuvenate the skin on the neck and chest area, improving texture and reducing signs of ageing." },
  { title: "Hand Rejuvenation", desc: "Restore volume and improve skin quality on the hands for a more youthful appearance." },
];

const faqs = [
  { question: "What is PRP?", answer: "PRP (Platelet-Rich Plasma) is a treatment that uses your own blood. A small sample is drawn, centrifuged to concentrate the platelets, and then applied or injected into the treatment area. The platelets contain growth factors that stimulate healing and collagen production." },
  { question: "How long does PRP take?", answer: "The procedure typically takes 30-60 minutes, including the blood draw and preparation time." },
  { question: "Is PRP safe?", answer: "PRP uses your own blood, which significantly reduces the risk of allergic reaction or rejection. It is considered a safe treatment when performed by a qualified practitioner." },
  { question: "When will I see results?", answer: "Results develop gradually over several weeks as collagen production increases. Most patients notice improvement within 3-6 weeks, with optimal results at 3 months." },
  { question: "How many sessions are needed?", answer: "A course of 3-4 sessions spaced 4-6 weeks apart is typically recommended for optimal results. Maintenance sessions may be advised." },
];

export default function PRPPage() {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Regenerative Medicine</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">PRP</span> Treatment
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Platelet-Rich Plasma therapy uses your body&apos;s own growth factors to stimulate collagen production and natural skin rejuvenation. A natural approach to restoring volume and improving skin quality.
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
          <h2 className="mb-10 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">What PRP Can Treat</h2>
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

      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { num: "1", title: "Blood Draw", body: "A small sample of your blood is taken, similar to a routine blood test." },
              { num: "2", title: "Preparation", body: "The blood is centrifuged to separate and concentrate the platelet-rich plasma." },
              { num: "3", title: "Application", body: "The PRP is carefully applied or injected into the targeted treatment area." },
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
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Interested in PRP?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">Book a consultation to learn if PRP is the right treatment for you.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
