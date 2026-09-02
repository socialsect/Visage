import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "PRF Treatment",
  description:
    "PRF (Platelet-Rich Fibrin) treatment at Visage Polyclinic, Business Bay, Dubai. Advanced regenerative therapy for skin renewal and collagen stimulation.",
};

const uses = [
  { title: "Advanced Skin Rejuvenation", desc: "PRF releases growth factors slowly over time, providing longer-lasting stimulation of collagen and elastin compared to PRP." },
  { title: "Under-Eye Rejuvenation", desc: "Address under-eye hollows, dark circles, and fine lines with the sustained healing properties of PRF." },
  { title: "Facial Volume Restoration", desc: "Natural volume enhancement using your own biological material to improve facial contours." },
  { title: "Skin Quality Improvement", desc: "Overall enhancement of skin texture, firmness, and radiance through sustained growth factor release." },
  { title: "Acne Scar Treatment", desc: "Improve the appearance of atrophic acne scars by promoting tissue remodelling and collagen synthesis." },
  { title: "Hair Loss Treatment", desc: "Stimulate dormant hair follicles and improve hair thickness with sustained growth factor delivery." },
];

const faqs = [
  { question: "What is PRF?", answer: "PRF (Platelet-Rich Fibrin) is an advanced form of platelet therapy. Like PRP, it uses your own blood, but the preparation method creates a fibrin matrix that releases growth factors more slowly over 10-14 days, potentially providing longer-lasting results." },
  { question: "How is PRF different from PRP?", answer: "PRF contains a fibrin matrix that acts as a scaffold, releasing growth factors gradually over a longer period. PRP releases growth factors more quickly. PRF may offer more sustained collagen stimulation." },
  { question: "Is PRF painful?", answer: "A topical anaesthetic is applied before treatment to minimise discomfort. Most patients describe the sensation as mild." },
  { question: "How many sessions are needed?", answer: "A course of 3-4 sessions spaced 4-6 weeks apart is typically recommended. Your practitioner will advise based on your specific concerns." },
];

export default function PRFPage() {
  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">Regenerative Medicine</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">PRF</span> Treatment
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Platelet-Rich Fibrin is an advanced regenerative treatment that uses your body&apos;s own growth factors released gradually over time for sustained skin renewal and collagen stimulation.
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
          <h2 className="mb-10 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">What PRF Can Treat</h2>
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

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">Interested in PRF?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">Book a consultation to discuss whether PRF is suitable for your needs.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]">Book an Appointment</Link>
            <a href="https://wa.me/971581867309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
