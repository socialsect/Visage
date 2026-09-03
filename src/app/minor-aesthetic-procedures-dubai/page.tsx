import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Mole, Skin Tag & Wart Removal Dubai | Visage Polyclinic",
  description:
    "Minor aesthetic procedures in Dubai — mole removal, skin tag removal, wart removal and more, performed safely in-clinic. Book a consultation today.",
};

const procedures = [
  { title: "Wart Removal", desc: "Effective removal using cryotherapy, electrosurgery or other clinically proven methods, matched to the wart's size and location." },
  { title: "Skin Tag Removal", desc: "Fast, straightforward removal by surgical excision or cryotherapy, with minimal discomfort and a quick recovery." },
  { title: "Mole Removal", desc: "Proper assessment before any removal, performed under local anaesthetic for both medical and cosmetic cases." },
  { title: "Milia Removal", desc: "Careful extraction of small white cysts that commonly form around the eyes and cheeks." },
  { title: "Sebaceous Cyst Removal", desc: "Surgical removal of sebaceous cysts, carried out with attention to minimising scarring and supporting clean healing." },
  { title: "Cherry Angioma Treatment", desc: "Removal of small red spots (cherry angiomas) using electrocautery or laser, depending on size and location." },
];

const faqs = [
  { question: "Are these procedures painful?", answer: "Most minor procedures involve only mild discomfort, and local anaesthetic is used where needed to keep you comfortable throughout. Many patients describe the sensation as a brief pinch rather than significant pain." },
  { question: "Is there downtime?", answer: "Downtime is minimal for almost all of these procedures — most patients return to normal activities the same day, with only simple aftercare (such as keeping the area clean and protected) required." },
  { question: "Will there be scarring?", answer: "Every effort is made to minimise scarring through careful technique and proper wound care, though this depends on the specific procedure, the size of the area treated, and how your individual skin heals." },
  { question: "Do I need a consultation first?", answer: "Yes. Every removal starts with a proper assessment — this confirms the growth is suitable for in-clinic removal and rules out anything that needs further investigation before any procedure is carried out." },
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

export default function MinorAestheticPage() {
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
              Aesthetic Procedures
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Minor <span className="font-display font-normal italic text-brand-500">Aesthetic</span> Procedures in Dubai
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Moles, skin tags, warts and small cysts are common, harmless, and still worth having properly assessed before removal. At Visage Polyclinic, every minor procedure is performed by a qualified practitioner using clinically proven methods — quick, in-clinic, and with minimal disruption to your day.
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

      {/* 2. Available Procedures Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Available Procedures
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-warm-600">
              Straightforward, in-clinic removal for common skin growths — each treated with the method best suited to it, not a single generic approach.
            </p>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p) => (
              <div key={p.title} className="bg-surface p-7">
                <h3 className="text-[14px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{p.desc}</p>
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
            Need a Procedure?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to discuss your concern and find out which removal method is right for it.
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
