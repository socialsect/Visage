import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aesthetic Treatments & Medical Services Dubai",
  description:
    "Explore aesthetic and medical treatments in Dubai — Botox, fillers, skin rejuvenation, general practice and minor surgery, all under one roof at Visage.",
};

const aesthetic = [
  { title: "Botox", desc: "Softens fine lines and expression wrinkles by relaxing targeted muscles, with results built around your natural movement.", href: "/botox-dubai" },
  { title: "Dermal Fillers", desc: "Adds back lost volume and refines facial contours using injectable treatments matched to your bone structure and goals.", href: "/dermal-fillers-dubai" },
  { title: "Skin Rejuvenation", desc: "A combination of peels, microneedling and mesotherapy that rebuilds skin quality from the inside out.", href: "/skin-rejuvenation-dubai" },
  { title: "PRP", desc: "Uses your own blood plasma to trigger the skin's natural repair process and encourage fresh collagen production.", href: "/prp-treatment-dubai" },
  { title: "PRF", desc: "A next-generation platelet therapy offering a slower, sustained release of growth factors for longer-lasting renewal.", href: "/prf-treatment-dubai" },
  { title: "Threads", desc: "Lifts and tightens sagging skin using dissolvable threads — a needle-based alternative to surgical facelifting.", href: "/thread-lift-dubai" },
  { title: "Fat Melting", desc: "Breaks down stubborn, diet-resistant fat pockets with targeted injectables, no incisions or downtime required.", href: "/fat-melting-treatment-dubai" },
  { title: "Skin Boosters", desc: "Deep hydrating injectables that restore skin elasticity and give a lasting, healthy glow from within.", href: "/skin-boosters-dubai" },
  { title: "Minor Aesthetic Procedures", desc: "Quick in-clinic removal of moles, skin tags and warts, handled with the same clinical care as any other procedure.", href: "/minor-aesthetic-procedures-dubai" },
];

const medical = [
  { title: "General Practice", desc: "Day-to-day medical care for common illnesses, check-ups, and health concerns across all adult age groups." },
  { title: "Male Health", desc: "A private, judgement-free space to address health concerns that men often put off discussing." },
  { title: "Adolescent Health", desc: "Medical care shaped around the physical and developmental needs of teenage patients." },
  { title: "Chronic Disease Management", desc: "Structured, ongoing support for long-term conditions such as diabetes and high blood pressure, with regular monitoring built in." },
  { title: "Emergency Care", desc: "Fast attention for sudden or urgent medical issues, without the wait of a hospital emergency room." },
  { title: "Referral Services", desc: "When your case needs a specialist, we coordinate the referral directly rather than leaving you to navigate it alone." },
];

const surgery = [
  { title: "Incision and Drainage", desc: "Clinical treatment of abscesses and fluid collections to relieve pain and prevent complications." },
  { title: "Lipoma Excision", desc: "Surgical removal of benign fatty lumps beneath the skin, performed as a straightforward outpatient procedure." },
  { title: "Cyst Excision", desc: "Complete removal of skin cysts under local anaesthetic, with minimal scarring and quick recovery." },
  { title: "Wound Stitching (ST&S)", desc: "Proper closure of cuts, lacerations and surgical wounds to support clean, effective healing." },
];

export default function TreatmentsPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Our Services
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">Treatments</span> &amp; Services
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Visage Polyclinic brings aesthetic treatments and general medical care together in one Dubai clinic.
            </p>
            {/* Quick-contact row (call / WhatsApp) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+97145758729"
                className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
              >
                Call Us
              </a>
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
        </div>
      </section>

      {/* 2. Aesthetic Medicine */}
      <section className="pb-20 sm:pb-28" id="aesthetic">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Aesthetic Medicine
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-warm-600">
              Non-surgical treatments to refresh, restore and maintain your skin — each one selected for your specific concerns, not applied as a standard package.
            </p>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-3">
            {aesthetic.map((t) => (
              <div key={t.title} className="bg-surface p-7">
                <h3 className="text-base font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{t.desc}</p>
                {t.href && (
                  <Link
                    href={t.href}
                    className="mt-4 inline-flex items-center text-[12px] font-medium text-brand-500 hover:text-brand-700"
                  >
                    Learn more
                    <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* 3. Featured Treatments Strip */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/botox-dubai"
              className="group border border-warm-300 p-6 transition-colors hover:border-brand-300"
            >
              <h3 className="text-lg font-semibold text-ink group-hover:text-brand-600 transition-colors">Botox</h3>
              <p className="mt-2 text-[13px] text-warm-600">The most requested treatment at Visage — subtle, natural-looking wrinkle reduction with zero recovery time.</p>
            </Link>
            <Link
              href="/dermal-fillers-dubai"
              className="group border border-warm-300 p-6 transition-colors hover:border-brand-300"
            >
              <h3 className="text-lg font-semibold text-ink group-hover:text-brand-600 transition-colors">Dermal Fillers</h3>
              <p className="mt-2 text-[13px] text-warm-600">Restore facial volume and definition with fillers chosen specifically for your face shape and skin type.</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* 4. Medical Services */}
      <section className="py-20 sm:py-28" id="medical">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Medical Services
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-warm-600">
              Visage is also a fully functioning general practice — everyday healthcare delivered by the same team you already trust for your aesthetic care.
            </p>
          </div>
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {medical.map((s) => (
              <div key={s.title} className="border-t border-warm-300 pt-5">
                <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Minor Surgery */}
      <section className="bg-surface-alt py-20 sm:py-28" id="minor-surgery">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Minor Surgery
            </h2>
            <p className="mt-4 text-[14px] text-warm-600">
              Straightforward surgical procedures performed in a fully equipped, sterile clinical setting — no hospital admission required.
            </p>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-4">
            {surgery.map((p) => (
              <div key={p.title} className="bg-surface p-7">
                <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Every treatment here starts with a real conversation, not a sales pitch. Get in touch and we'll help you figure out what actually fits your goals.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
            >
              Book a Consultation
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
