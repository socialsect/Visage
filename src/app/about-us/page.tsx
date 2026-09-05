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
      <section className="py-20 sm:py-28 relative overflow-hidden bg-surface-alt">
        {/* Abstract background elements */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-100/40 blur-[100px] pointer-events-none" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-200/20 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Our Philosophy
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-warm-600">
              The principles that guide our approach to care, ensuring every patient feels seen, heard, and supported throughout their journey with us.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {[
              { 
                title: "Individual Assessment", 
                body: "No two patients get the same plan. We build treatment around your specific needs, goals and medical history — not a standard package.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                )
              },
              { 
                title: "Professional Standards", 
                body: "Clinical expertise applied consistently across every service, aesthetic or medical, backed by genuine care rather than a sales-driven approach.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                )
              },
              { 
                title: "Clear Communication", 
                body: "You'll always understand what's being recommended and why, so every decision about your care is one you're making with full information.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                )
              },
              { 
                title: "Patient Comfort", 
                body: "A space designed to feel calm and welcoming, without losing the clinical precision that a real medical environment requires.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                )
              },
            ].map((v) => (
              <div 
                key={v.title} 
                className="group relative overflow-hidden rounded-3xl bg-surface p-8 sm:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-warm-200 hover:border-brand-300"
              >
                {/* Glow behind icon */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-brand-100/50 blur-2xl transition-all duration-500 group-hover:bg-brand-200/60 group-hover:scale-150" />
                
                {/* Icon Container */}
                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-md">
                  {v.icon}
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-brand-900">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-warm-600 transition-colors duration-300 group-hover:text-warm-800">
                    {v.body}
                  </p>
                </div>
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
