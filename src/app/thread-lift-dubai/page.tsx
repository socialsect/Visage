import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "PDO Thread Lift Dubai | Non-Surgical Facelift at Visage",
  description:
    "PDO thread lift in Dubai for a non-surgical face and neck lift. Immediate tightening plus gradual collagen stimulation. Book a consultation at Visage.",
};

const areas = [
  { title: "Face Lift", desc: "Lifts the cheeks, jowls and mid-face using strategically placed threads for a firmer, more youthful contour." },
  { title: "Brow Lift", desc: "Opens up the eye area and softens hooding by gently elevating the brow without surgical intervention." },
  { title: "Neck Tightening", desc: "Addresses sagging along the jawline and neck, redefining the lower face contour with targeted thread placement." },
  { title: "Nose Contouring", desc: "Reshapes and refines the bridge and tip of the nose non-surgically, using threads to build subtle structure." },
  { title: "Collagen Stimulation", desc: "As PDO threads dissolve, they trigger your body's own collagen production — improving skin quality long after the initial lift." },
  { title: "Skin Tightening", desc: "Improves overall skin firmness and elasticity through strategic thread placement across looser areas of the face." },
];

const faqs = [
  { question: "What are PDO threads?", answer: "PDO (polydioxanone) threads are dissolvable medical-grade sutures inserted beneath the skin to lift sagging tissue. As they gradually dissolve over several months, they also stimulate the skin's own collagen production, extending the benefit beyond the initial lift." },
  { question: "How long do thread lift results last?", answer: "Threads themselves typically dissolve within around six months, but the collagen stimulation they trigger continues supporting skin quality well beyond that. Many patients see the overall lifting and firming effect last a year or more, though this varies by individual." },
  { question: "Is there downtime?", answer: "Thread lifts involve minimal downtime — most patients return to normal activities within a day or two. Mild swelling, bruising or a pulling sensation is common in the first few days as the skin adjusts." },
  { question: "Are threads safe?", answer: "PDO threads have a long track record of use in aesthetic medicine and are generally well-tolerated. As with any injectable or minimally invasive procedure, safety depends on proper technique and placement by a qualified practitioner." },
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

export default function ThreadsPage() {
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
              PDO <span className="font-display font-normal italic text-brand-500">Thread</span> Lift in Dubai
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              A thread lift offers what surgery promises without the surgery — real, visible lift using dissolvable PDO threads placed beneath the skin. You get immediate tightening on the day, then a slower collagen-building effect as the threads dissolve over the following months.
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
              Thread placement is planned around where skin laxity actually shows — not applied as a blanket lift across the whole face.
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
            Interested in a Thread Lift?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to talk through your goals and find out whether a thread lift is the right fit for you.
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
