import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore the full range of aesthetic and medical treatments at Visage Polyclinic, Business Bay, Dubai.",
};

const aesthetic = [
  { title: "Botox", desc: "Wrinkle reduction and muscle relaxation across multiple treatment areas.", href: "/botox" },
  { title: "Dermal Fillers", desc: "Volume restoration, facial contouring, and wrinkle correction.", href: "/fillers" },
  { title: "Skin Rejuvenation", desc: "Chemical peels, microneedling, and mesotherapy for improved skin quality." },
  { title: "PRP & PRF", desc: "Platelet-based treatments to support skin regeneration." },
  { title: "Threads", desc: "Non-surgical lift using absorbable thread technology." },
  { title: "Fat Melting", desc: "Injectable treatment for localised fat reduction." },
  { title: "Skin Boosters", desc: "Hydrating treatments that improve skin radiance from within." },
  { title: "Minor Aesthetic Procedures", desc: "Wart, skin tag, and mole removal." },
];

const medical = [
  { title: "General Practice", desc: "Comprehensive primary medical care for a wide range of health concerns." },
  { title: "Male Health", desc: "Dedicated services addressing men's specific health needs." },
  { title: "Adolescent Health", desc: "Medical care tailored to younger patients." },
  { title: "Chronic Disease Management", desc: "Ongoing care for hypertension, diabetes, and other long-term conditions." },
  { title: "Emergency Care", desc: "Urgent attention for acute medical conditions." },
  { title: "Referral Services", desc: "Coordination with specialists when advanced care is required." },
];

const surgery = [
  { title: "Incision and Drainage", desc: "Procedures for abscesses and fluid collections." },
  { title: "Lipoma Excision", desc: "Surgical removal of benign fatty lumps." },
  { title: "Cyst Excision", desc: "Removal of skin cysts under local anaesthesia." },
];

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Our Services
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">Treatments</span> &amp; Services
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              From aesthetic medicine to general practice, comprehensive care tailored to each patient.
            </p>
          </div>
        </div>
      </section>

      {/* Aesthetic */}
      <section className="pb-20 sm:pb-28" id="aesthetic">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Aesthetic Medicine
            </h2>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-4">
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

          {/* Quick links */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/botox"
              className="group border border-warm-300 p-6 transition-colors hover:border-brand-300"
            >
              <h3 className="text-lg font-semibold text-ink group-hover:text-brand-600 transition-colors">Botox</h3>
              <p className="mt-2 text-[13px] text-warm-600">Wrinkle reduction and muscle relaxation. No downtime.</p>
            </Link>
            <Link
              href="/fillers"
              className="group border border-warm-300 p-6 transition-colors hover:border-brand-300"
            >
              <h3 className="text-lg font-semibold text-ink group-hover:text-brand-600 transition-colors">Dermal Fillers</h3>
              <p className="mt-2 text-[13px] text-warm-600">Volume restoration, contouring, and skin rejuvenation.</p>
            </Link>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* Medical */}
      <section className="py-20 sm:py-28" id="medical">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Medical Services
            </h2>
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

      {/* Surgery */}
      <section className="bg-surface-alt py-20 sm:py-28" id="minor-surgery">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Minor Surgery
            </h2>
            <p className="mt-3 text-[14px] text-warm-600">
              In-clinic surgical procedures performed in a safe, clinical environment.
            </p>
          </div>
          <div className="grid gap-px bg-warm-300 sm:grid-cols-3">
            {surgery.map((p) => (
              <div key={p.title} className="bg-surface p-7">
                <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Not sure which treatment is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Contact us for a consultation. We will help you understand your options.
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
