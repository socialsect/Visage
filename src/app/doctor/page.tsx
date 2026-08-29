import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
                <Image
                  src="/dr-musa.jpg"
                  alt="Dr. Musa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 384px"
                  className="object-cover"
                />
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
                MBChB &middot; General Practitioner &amp; Aesthetic Medicine
              </p>
              <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-warm-600">
                Every patient should be treated as an individual. Care should be professional and personalised. The clinic brings multiple specialities together under one roof to provide comprehensive care.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
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
              <div className="border-t border-warm-300 pt-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
                  Qualifications
                </h3>
                <p className="mt-2 text-[14px] text-ink">MBChB</p>
              </div>
              <div className="border-t border-warm-300 pt-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
                  Title
                </h3>
                <p className="mt-2 text-[14px] text-ink">Physician &mdash; General Practice</p>
              </div>
              <div className="border-t border-warm-300 pt-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
                  Experience
                </h3>
                <div className="mt-2 space-y-1">
                  <p className="text-[14px] text-ink">Over 17 years of medical experience</p>
                  <p className="text-[14px] text-ink">9 years of practice in the UAE</p>
                </div>
              </div>
              <div className="border-t border-warm-300 pt-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
                  Areas of Practice
                </h3>
                <div className="mt-3 space-y-2">
                  <p className="text-[14px] text-ink">General Practice</p>
                  <p className="text-[14px] text-warm-600">Aesthetic Medicine (Botox, Dermal Fillers, Skin Treatments, Minor Surgery, and more)</p>
                </div>
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
