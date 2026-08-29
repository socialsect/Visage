import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dr. Musa",
  description:
    "Meet Dr. Musa at Visage Polyclinic, Business Bay, Dubai. Professional medical and aesthetic care.",
};

export default function DoctorPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-warm-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-24 w-24 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="absolute bottom-4 left-4 text-[11px] text-warm-500">[Photo pending]</span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Our Doctor
              </p>
              <h1 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                Dr. Musa
              </h1>
              <p className="mt-1 text-[15px] font-medium text-brand-500">
                General Practitioner &amp; Aesthetic Medicine
              </p>
              <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-warm-600">
                Every patient should be treated as an individual. Care should be professional and personalised. The clinic brings multiple specialities together under one roof to provide comprehensive care.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
              >
                Book with Dr. Musa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* Profile */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Professional Profile
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { label: "Qualifications", value: "[Qualifications pending]" },
                { label: "Experience", value: "[Professional experience pending]" },
                { label: "Specialisations", value: "[Specialisations pending]" },
              ].map((field) => (
                <div key={field.label} className="border-t border-warm-300 pt-5">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
                    {field.label}
                  </h3>
                  <p className="mt-2 text-[13px] italic text-warm-400">{field.value}</p>
                </div>
              ))}
              <div className="border-t border-warm-300 pt-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
                  Areas of Practice
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Aesthetic Medicine", "General Practice", "Botox", "Dermal Fillers", "Skin Treatments", "Minor Surgery"].map((a) => (
                    <span key={a} className="rounded-full border border-warm-300 px-3 py-1 text-[11px] font-medium text-warm-600">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[12px] italic text-warm-400">
                  [Full areas of practice pending confirmation]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Schedule a consultation
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Book an appointment to discuss your treatment goals with Dr. Musa.
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
