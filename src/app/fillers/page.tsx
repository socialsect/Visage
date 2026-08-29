import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Dermal Fillers",
  description:
    "Dermal filler treatments at Visage Polyclinic, Business Bay, Dubai. Facial contouring, lip fillers, skin boosters, Sculptra, and more.",
};

const areas = [
  { title: "Facial Contouring", desc: "Upper-face lift and reshaping using fillers to restore volume and improve proportions." },
  { title: "Lip Fillers", desc: "Enhance lip shape, volume, and definition." },
  { title: "Nose Fillers", desc: "Non-surgical rhinoplasty to refine the appearance of the nose." },
  { title: "Chin Fillers", desc: "Enhance chin projection and contour for improved facial balance." },
  { title: "Jawline Fillers", desc: "Define and sculpt the jawline for a more structured appearance." },
  { title: "Body Fillers", desc: "Filler treatments for body contouring and volume enhancement." },
];

const boosters = [
  { title: "Skin Boosters", desc: "Hydrating treatments that improve skin quality, texture, and radiance from within." },
  { title: "Biostimulators", desc: "Treatments that stimulate your skin's own collagen production for gradual improvement." },
  { title: "Sculptra", desc: "A biostimulatory treatment that restores facial volume gradually. Results may last up to 5 years." },
  { title: "Salmon DNA", desc: "Regenerative treatment to support skin rejuvenation and healing." },
];

const faqs = [
  { question: "What are dermal fillers?", answer: "Injectable treatments used to restore volume, smooth static wrinkles, and contour facial features. Common areas include lips, cheeks, jawline, and chin." },
  { question: "How long do fillers last?", answer: "Duration varies by product, area, and individual factors. Results typically range from 6 months to 2 years. Sculptra may last longer." },
  { question: "Is there downtime?", answer: "Filler treatments generally have no downtime. Some mild swelling or bruising may occur and typically resolves within a few days." },
  { question: "What is Sculptra?", answer: "A biostimulatory filler that stimulates your body's own collagen production. Unlike traditional fillers, it works gradually. Results may last up to 5 years." },
];

export default function FillersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Aesthetic Medicine
              </p>
              <h1 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                Dermal Fillers
              </h1>
              <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
                Address static wrinkles, restore lost volume, and contour facial features with precision injectable treatments.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
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
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-200">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1000&h=625&fit=crop&crop=center"
                  alt="Dermal filler consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="border-y border-warm-300 py-10 sm:py-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-3 gap-px bg-warm-300 px-5 sm:px-8 lg:px-12">
          {[
            { label: "No Downtime", sub: "Resume activities immediately" },
            { label: "6 Months – 2 Years", sub: "Typical result duration" },
            { label: "Up to 5 Years", sub: "Sculptra results may last" },
          ].map((f) => (
            <div key={f.label} className="bg-surface p-6 text-center">
              <p className="font-serif text-xl font-semibold text-ink">{f.label}</p>
              <p className="mt-1 text-[12px] text-warm-500">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Treatment Areas
            </h2>
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

      {/* Skin Boosters */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Boosters &amp; Biostimulators
            </h2>
            <p className="mt-3 text-[14px] text-warm-600">
              Treatments that support your skin&apos;s natural renewal for gradual, lasting improvement.
            </p>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2">
            {boosters.map((b) => (
              <div key={b.title} className="bg-surface p-7">
                <h3 className="font-serif text-base font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              What to Expect
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { num: "1", title: "Consultation", body: "Discuss your goals, review options, and develop a personalised plan." },
              { num: "2", title: "Treatment", body: "Precise filler placement. Treatment times vary by area and product." },
              { num: "3", title: "Results", body: "Immediate results with fillers. Some initial swelling settles within days." },
            ].map((s) => (
              <div key={s.num} className="border-t border-warm-300 pt-6">
                <span className="font-serif text-2xl font-semibold text-brand-400">{s.num}</span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Interested in dermal fillers?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to learn which treatments may be suitable for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
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
