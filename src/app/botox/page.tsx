import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Botox Treatments",
  description:
    "Botox treatments at Visage Polyclinic, Business Bay, Dubai. Non-surgical wrinkle reduction for face, neck, underarms and more.",
};

const areas = [
  { title: "Full-Face Botox", desc: "Comprehensive treatment targeting multiple areas for a refreshed appearance." },
  { title: "Lower-Face Slimming", desc: "Masseter treatment to slim the jawline and reduce muscle bulk." },
  { title: "Nose-Tip Slimming", desc: "Refine the appearance of the nose tip with targeted muscle relaxation." },
  { title: "Neck Botox", desc: "Treatment for horizontal neck lines and necklace lines." },
  { title: "Trap Botox", desc: "Trapezius muscle treatment for shoulder contouring and tension relief." },
  { title: "Underarm Botox", desc: "Reduction of excessive sweating by blocking sweat gland stimulation." },
  { title: "Baby-Arm Botox", desc: "Targeted treatment for the upper arm area." },
  { title: "Jotox", desc: "Lower face and jaw area treatment." },
];

const faqs = [
  { question: "What is Botox?", answer: "Botox is a non-surgical treatment that relaxes targeted facial muscles to reduce the appearance of dynamic wrinkles. It can also reduce muscle bulk in certain areas." },
  { question: "How long do results last?", answer: "Results typically last approximately 3 to 6 months, depending on the individual and treatment area." },
  { question: "Is there downtime?", answer: "Botox is described as having no downtime. Most patients return to normal activities immediately, though specific aftercare guidelines apply for the first four hours." },
  { question: "What should I avoid after treatment?", answer: "For the first four hours: avoid exercise, massaging the treated area, sleeping, smoking, alcohol, bending downwards (for face treatments), and cooking." },
  { question: "When will I see results?", answer: "Results typically begin to appear within a few days, with full results visible at approximately two weeks." },
];

export default function BotoxPage() {
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
              <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                <span className="font-display font-normal italic text-brand-500">Botox</span> Treatments
              </h1>
              <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
                A non-surgical treatment to reduce dynamic wrinkles by relaxing targeted muscles. It can also decrease muscle bulk in certain areas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-200">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&h=625&fit=crop&crop=center"
                  alt="Botox treatment at Visage Polyclinic"
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
            { label: "3–6 Months", sub: "Typical duration of results" },
            { label: "Non-Surgical", sub: "Injectable with minimal discomfort" },
          ].map((f) => (
            <div key={f.label} className="bg-surface p-6 text-center">
              <p className="text-xl font-semibold text-ink">{f.label}</p>
              <p className="mt-1 text-[12px] text-warm-500">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-warm-300"></span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                  About Botox
                </p>
              </div>
              
              <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
                We make aesthetic care Safe, Natural, and Effective
              </h2>
              
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-warm-600">
                <p>
                  At Visage Polyclinic, we believe aesthetic treatments should enhance your natural beauty, not mask it. We know that choosing to have a cosmetic procedure is a deeply personal decision. That is why we prioritize safety, precision, and natural-looking results, ensuring you feel confident in every step of your journey.
                </p>
                <p>
                  We offer a tailored approach to Botox. Rather than a one-size-fits-all method, Dr. Musa carefully evaluates your facial anatomy and muscle movement. We see you as an individual, and we believe in your right to age gracefully on your own terms.
                </p>
                <p>
                  Our work is rooted in real care, honesty, and medical expertise. No over-treatment, no unnatural freezing—just practical, professional aesthetic care that leaves you looking refreshed and revitalised.
                </p>
              </div>

              <Link
                href="/doctor"
                className="mt-10 inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3.5 text-[14px] font-medium text-white transition-all hover:bg-[#997c9b] active:scale-[0.98]"
              >
                Meet Dr. Musa
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Right Column (Image) */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-warm-200 lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=1000&fit=crop&crop=center"
                alt="Consultation at Visage Polyclinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Treatment Areas
            </h2>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <div key={a.title} className="bg-surface p-6">
                <h3 className="text-[14px] font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-warm-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              What to Expect
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { num: "1", title: "Consultation", body: "A thorough discussion of your goals, medical history, and treatment plan." },
              { num: "2", title: "Treatment", body: "Precise injections into targeted muscles. A short procedure with minimal discomfort." },
              { num: "3", title: "Aftercare", body: "Follow specific guidelines for four hours. Results develop over the following days." },
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

      {/* Aftercare */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Post-Treatment Guidelines
            </h2>
            <p className="mt-3 text-[14px] text-warm-600">
              For the first four hours after treatment:
            </p>
            <div className="mt-6 space-y-2">
              {["Avoid active exercise", "Do not massage the treated area", "Avoid sleeping", "Do not smoke", "Avoid alcohol", "Avoid bending downwards (for face treatments)", "Avoid cooking"].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-warm-200 py-3">
                  <svg className="h-3.5 w-3.5 flex-shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[13px] text-warm-700">{item}</span>
                </div>
              ))}
            </div>
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
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Ready to try Botox?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to discuss your goals and find out if Botox is right for you.
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
