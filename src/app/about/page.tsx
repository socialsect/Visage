import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Visage Polyclinic",
  description:
    "Learn about Visage Polyclinic, a multi-speciality medical and aesthetic clinic established in September 2024 in Business Bay, Dubai.",
  openGraph: {
    title: "About Visage Polyclinic | Business Bay, Dubai",
    description: "Learn about Visage Polyclinic, a multi-speciality medical and aesthetic clinic established in September 2024 in Business Bay, Dubai.",
    images: [{ url: "https://visagepolyclinic.com/api/og?title=About%20Visage%20Polyclinic&subtitle=Established%20September%202024%20%7C%20Business%20Bay%2C%20Dubai", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://visagepolyclinic.com/api/og?title=About%20Visage%20Polyclinic&subtitle=Established%20September%202024%20%7C%20Business%20Bay%2C%20Dubai"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              About Us
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              <span className="font-display font-normal italic text-brand-500">Visage</span> Polyclinic
            </h1>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              A multi-speciality clinic in the heart of Dubai, Dubai, offering professional medical and aesthetic treatments under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Established in September 2024
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-warm-600">
                <p>
                  Visage Polyclinic was founded with a clear vision: to create a medical clinic where patients receive professional, personalised care in a modern and welcoming environment.
                </p>
                <p>
                  Located in Regal Tower, Business Bay, Visage brings together aesthetic medicine and general medical services. Our approach is built on the belief that every patient deserves to be treated as an individual.
                </p>
                <p>
                  Professional and clinical where it matters, warm and welcoming where it counts.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-warm-200">
                <Image
                  src="/hero-image.jpg"
                  alt="Visage Polyclinic clinic interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Our philosophy
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {[
              { title: "Individual Assessment", body: "Every patient is evaluated on their own terms. We develop treatment plans based on your specific needs, goals, and medical history." },
              { title: "Professional Standards", body: "We uphold high standards of clinical practice across all services, combining expertise with genuine care." },
              { title: "Clear Communication", body: "We believe in transparent, honest communication so you can make informed decisions about your treatment." },
              { title: "Patient Comfort", body: "From the moment you arrive, our environment is designed to feel professional yet welcoming, clinical yet calm." },
            ].map((v) => (
              <div key={v.title} className="border-t border-warm-300 pt-6">
                <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-warm-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-speciality */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Multiple specialities, one roof
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-warm-600">
                Visage is not purely an aesthetic clinic. We provide a full spectrum of medical services, from general practice and chronic disease management to minor surgery and aesthetic treatments, all in one convenient location.
              </p>
              <Link
                href="/treatments"
                className="mt-8 inline-flex items-center text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                View all treatments
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-px bg-warm-300">
                {["Aesthetic Medicine", "General Practice", "Male Health", "Adolescent Health", "Chronic Disease", "Minor Surgery"].map((s) => (
                  <div key={s} className="bg-surface p-5 text-[13px] font-medium text-warm-700">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Visit us in Business Bay
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Regal Tower, Floor 7, Unit 711. Open daily, 8:00 AM to 11:00 PM.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
