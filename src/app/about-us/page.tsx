import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Visage Polyclinic | Aesthetic & Medical Care Dubai",
  description:
    "Visage Polyclinic is a multi-speciality clinic in Business Bay, Dubai, offering aesthetic and general medical care under one roof. Learn our story.",
  openGraph: {
    title: "About Visage Polyclinic | Aesthetic & Medical Care Dubai",
    description: "Visage Polyclinic is a multi-speciality clinic in Business Bay, Dubai, offering aesthetic and general medical care under one roof. Learn our story.",
    images: [{ url: "https://visagepolyclinicdubai.com/api/og?title=About%20Visage%20Polyclinic&subtitle=Established%20September%202024%20%7C%20Business%20Bay%2C%20Dubai", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://visagepolyclinicdubai.com/api/og?title=About%20Visage%20Polyclinic&subtitle=Established%20September%202024%20%7C%20Business%20Bay%2C%20Dubai"],
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
              A multi-speciality clinic in the heart of Business Bay, Dubai, built around one idea: aesthetic care and general medicine don't need to live in separate places. At Visage, they sit under one roof, delivered by the same team, to the same standard.
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
                  Visage Polyclinic opened with a straightforward goal — build a clinic where patients are treated as individuals, not case numbers, in a space that feels considered rather than clinical-in-the-cold sense of the word.
                </p>
                <p>
                  Based in Regal Tower, Business Bay, Visage combines aesthetic medicine with general medical services. That combination isn't incidental — we believe good care starts with actually knowing the person in front of you, whether they're here for Botox or a check-up.
                </p>
                <p>
                  The result is a clinic that's professional and precise where precision matters, and genuinely warm everywhere else.
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
              Our Philosophy
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {[
              { title: "Individual Assessment", body: "No two patients get the same plan. We build treatment around your specific needs, goals and medical history — not a standard package." },
              { title: "Professional Standards", body: "Clinical expertise applied consistently across every service, aesthetic or medical, backed by genuine care rather than a sales-driven approach." },
              { title: "Clear Communication", body: "You'll always understand what's being recommended and why, so every decision about your care is one you're making with full information." },
              { title: "Patient Comfort", body: "A space designed to feel calm and welcoming, without losing the clinical precision that a real medical environment requires." },
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
                Multiple Specialities, One Roof
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-warm-600">
                Visage isn't a purely aesthetic clinic. Alongside treatments like Botox, fillers and skin rejuvenation, we provide general practice, chronic disease management, and minor surgery — a full range of medical care, all in one convenient Business Bay location.
              </p>
              <Link
                href="/aesthetic-treatments"
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
            Visit Us in Business Bay
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-warm-600">
            Regal Tower, Floor 7, Unit 711, Business Bay, Dubai. Open daily from 8:00 AM to 11:00 PM.
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
