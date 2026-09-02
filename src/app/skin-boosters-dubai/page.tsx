import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Skin Boosters",
  description:
    "Skin booster treatments at Visage Polyclinic, Business Bay, Dubai. Hydrating injectables for improved skin quality, texture, and radiance.",
};

const treatments = [
  { title: "Hydrating Skin Boosters", desc: "Injectable hyaluronic acid delivered into the skin to deeply hydrate, improve elasticity, and restore radiance from within." },
  { title: "Rejuvenating Boosters", desc: "Nutrient-rich formulations containing vitamins, amino acids, and minerals to revitalise tired, dull skin." },
  { title: "Brightening Treatments", desc: "Targeted formulations to address pigmentation, uneven skin tone, and loss of luminosity." },
  { title: "Anti-Ageing Boosters", desc: "Collagen-stimulating treatments that improve skin firmness and reduce the appearance of fine lines." },
];

const faqs = [
  { question: "What are skin boosters?", answer: "Skin boosters are injectable treatments that deliver hydration, vitamins, and nutrients directly into the skin. They work from within to improve skin quality, texture, and overall radiance." },
  { question: "How are skin boosters different from fillers?", answer: "While fillers add volume and contour, skin boosters focus on improving skin quality through deep hydration and nourishment. They are thinner formulations designed to spread evenly through the skin." },
  { question: "How long do results last?", answer: "Results typically last 3-6 months depending on the product used and individual factors. A course of treatments is usually recommended for optimal results." },
  { question: "Is there downtime?", answer: "Skin boosters have minimal downtime. You may experience small bumps at the injection sites that typically resolve within 24-48 hours." },
];

export default function SkinBoostersPage() {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Skin Rejuvenation</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">Skin</span> Boosters
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Injectable treatments that deliver deep hydration and nutrients directly into the skin. Improve skin quality, texture, and radiance from within for a naturally refreshed appearance.
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

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Interested in skin boosters?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">Book a consultation to find the right booster treatment for your skin.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
