import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Minor Aesthetic Procedures",
  description:
    "Minor aesthetic procedures at Visage Polyclinic, Business Bay, Dubai. Wart removal, skin tag removal, mole removal, and other procedures.",
};

const procedures = [
  { title: "Wart Removal", desc: "Safe and effective removal of warts using cryotherapy, electrosurgery, or other clinically proven methods." },
  { title: "Skin Tag Removal", desc: "Quick removal of skin tags using surgical excision or cryotherapy with minimal discomfort." },
  { title: "Mole Removal", desc: "Assessment and removal of moles for medical or cosmetic reasons, performed under local anaesthesia." },
  { title: "Milia Removal", desc: "Professional extraction of small white cysts (milia) that commonly appear around the eyes and cheeks." },
  { title: "Sebaceous Cyst Removal", desc: "Surgical removal of sebaceous cysts with minimal scarring and proper wound care." },
  { title: "Cherry Angioma Treatment", desc: "Removal of cherry angiomas (red spots) using electrocautery or laser treatment." },
];

const faqs = [
  { question: "Are these procedures painful?", answer: "Most minor aesthetic procedures are performed under local anaesthesia or with topical numbing cream, so discomfort is typically minimal." },
  { question: "Is there downtime?", answer: "Downtime is generally minimal. Most patients return to normal activities immediately, though specific aftercare instructions will be provided." },
  { question: "Will there be scarring?", answer: "All procedures are performed with care to minimise scarring. Your practitioner will discuss expected healing and any scarring risk during your consultation." },
  { question: "Do I need a consultation first?", answer: "Yes, all minor procedures require an initial consultation to assess the area, discuss options, and ensure the most appropriate treatment approach." },
];

export default function MinorAestheticPage() {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Aesthetic Procedures</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Minor <span className="font-display font-normal italic text-brand-500">Aesthetic</span> Procedures
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Quick, safe procedures for common skin concerns. Performed in-clinic by qualified practitioners with minimal downtime and lasting results.
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
          <h2 className="mb-10 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">Available Procedures</h2>
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

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Need a procedure?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">Book a consultation to discuss your concerns and treatment options.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
