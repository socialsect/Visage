import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import FeatureGrid from "@/components/FeatureGrid";
import InteractiveProcess from "@/components/InteractiveProcess";

export const metadata: Metadata = {
  title: "Botox Dubai | Anti-Wrinkle Treatment at Visage Polyclinic",
  description:
    "Botox in Dubai for forehead lines, frown lines and crow's feet. Natural-looking results, no downtime. Book a Botox consultation at Visage Polyclinic.",
};

const areas = [
  { title: "Full-Face Botox", desc: "A coordinated treatment across multiple areas for balanced, natural-looking results rather than one isolated fix." },
  { title: "Lower-Face Slimming", desc: "Targets the masseter muscle to soften a square jawline and ease jaw tension." },
  { title: "Nose-Tip Slimming", desc: "Relaxes the small muscle that pulls the nose tip downward when you smile, for a subtler nasal profile." },
  { title: "Neck Botox", desc: "Softens vertical neck bands (often called \"necklace lines\") caused by repeated muscle contraction." },
  { title: "Trap Botox", desc: "Treats the trapezius muscle to ease shoulder tension and create a longer, more relaxed neckline." },
  { title: "Underarm Botox", desc: "Reduces excessive underarm sweating by temporarily blocking the sweat glands' nerve signals." },
  { title: "Baby Botox", desc: "A lighter, more conservative dose for subtle softening — ideal for first-timers or a more natural look." },
  { title: "Jotox", desc: "A precise, low-dose technique targeting the jawline and lower face for a softened, more defined contour." },
];

const faqs = [
  { question: "What is Botox?", answer: "Botox is a purified protein injected into targeted facial muscles. It temporarily blocks the nerve signals that cause those muscles to contract, softening the wrinkles created by repeated expression — like frowning or squinting." },
  { question: "How long do results last?", answer: "Most patients see results last around three to six months, though this varies depending on the treatment area, your muscle strength, and how your body metabolises the treatment. Results typically fade gradually rather than disappearing overnight." },
  { question: "Is there downtime?", answer: "No. Botox is a walk-in, walk-out treatment — most patients return to normal activities the same day. You may notice slight redness or small bumps at the injection sites, which usually settle within a few hours." },
  { question: "What should I avoid after treatment?", answer: "For the first four hours, avoid exercise, alcohol, lying down, and touching or massaging the treated area. This helps keep the product exactly where it was placed." },
  { question: "When will I see results?", answer: "Botox doesn't work instantly. Most patients start noticing changes within three to five days, with full results visible at the two-week mark." },
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

export default function BotoxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 1. Hero Section */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Aesthetic Medicine
              </p>
              <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                <span className="font-display font-normal italic text-brand-500">Botox</span> Treatments in Dubai
              </h1>
              <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
                Botox smooths dynamic wrinkles by gently relaxing the muscles that cause them — forehead lines, frown lines, and crow's feet included. At Visage Polyclinic, every Botox treatment is planned around your facial anatomy and expression patterns, so the result reads as refreshed, not frozen.
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

      {/* 2. Trust Bar */}
      <section className="border-y border-warm-300 py-10 sm:py-12">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-px bg-warm-300">
            {[
              { label: "No Downtime", sub: "Back to your day immediately after treatment" },
              { label: "3–6 Months", sub: "Typical duration of results" },
              { label: "Non-Surgical", sub: "A quick injectable procedure, no incisions" },
            ].map((f) => (
              <div key={f.label} className="bg-surface p-6 text-center">
                <p className="text-xl font-semibold text-ink">{f.label}</p>
                <p className="mt-1 text-[12px] text-warm-500">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "About Botox" Section */}
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
                Safe, Considered, and Never Overdone
              </h2>
              
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-warm-600">
                <p>
                  Botox is one of the most researched treatments in aesthetic medicine, and also one of the easiest to get wrong. Overfilled brows and a permanently surprised expression usually come down to poor planning, not the product itself.
                </p>
                <p>
                  At Visage, Dr. Musa takes time before the first injection to understand how your face actually moves — which muscles drive your expressions, where you're already losing elasticity, and what you want to look like afterward, not just what a standard unit count would produce.
                </p>
                <p>
                  The goal is always the same: you, just less tired-looking. Not a different face. We won't recommend more treatment than your face needs, and we'll tell you honestly if Botox isn't the right fit for what you're trying to achieve.
                </p>
              </div>

              <Link
                href="/aesthetic-doctor-dubai"
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

      {/* 4. Treatment Areas Section */}
      <FeatureGrid 
        title="Treatment Areas" 
        description="Botox isn't a single, generic injection pattern — treatment is customised by area, depending on your muscle activity and goals." 
        items={areas} 
      />

      {/* 5. "What to Expect" Section */}
      <InteractiveProcess 
        title="What to Expect"
        className="bg-surface-alt py-20 sm:py-28"
        steps={[
          { title: "Consultation", desc: "We talk through your goals, medical history and facial movement before recommending anything — no treatment is booked on the spot." },
          { title: "Treatment", desc: "A short, precise procedure using a fine needle. Most patients describe mild discomfort, comparable to a quick pinch." },
          { title: "Aftercare", desc: "Clear aftercare instructions to follow for the first few hours. Full results develop gradually over the following one to two weeks." },
        ]}
      />

      {/* 6. "Post-Treatment Guidelines" Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-surface-alt/50 -z-10" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-brand-100/50 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-brand-100/30 blur-3xl -z-10" />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Post-Treatment Guidelines
            </h2>
            <p className="mt-3 text-[14px] text-warm-600">
              For the first four hours after treatment:
            </p>
          </div>
          
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Skip strenuous exercise",
                "Don't massage or rub the treated area",
                "Stay upright — avoid lying down",
                "Hold off on smoking",
                "Hold off on alcohol",
                "Avoid bending your head downward (for facial treatments)",
                "Skip cooking or activities involving heat exposure to the face"
              ].map((item) => (
                <div 
                  key={item} 
                  className="group relative overflow-hidden rounded-2xl bg-surface border border-warm-200 p-5 transition-all duration-300 hover:shadow-xl hover:border-brand-300 hover:-translate-y-1 cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-alt border border-warm-200 text-brand-400 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 group-hover:shadow-md">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium leading-tight text-ink group-hover:text-brand-900 transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12">
          <FAQAccordion items={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Ready to Try Botox?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book a consultation to talk through your goals and find out honestly whether Botox is the right fit for you.
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
