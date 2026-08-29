import Link from "next/link";
import Image from "next/image";

const featuredTreatments = [
  { title: "Botox", description: "Non-surgical wrinkle reduction and muscle relaxation. Treatments tailored to individual anatomy and goals.", href: "/botox" },
  { title: "Dermal Fillers", description: "Restore volume, contour features, and address static wrinkles with precision injectable treatments.", href: "/fillers" },
  { title: "Skin Rejuvenation", description: "Chemical peels, microneedling, PRP, and mesotherapy to improve skin quality and radiance.", href: "/treatments" },
  { title: "Threads", description: "Non-surgical lift and skin tightening using absorbable thread technology.", href: "/treatments" },
  { title: "Fat Melting", description: "Targeted injectable treatment for localised fat reduction without surgery.", href: "/treatments" },
  { title: "Regenerative Medicine", description: "PRP, PRF, and biostimulators supporting your skin's natural renewal process.", href: "/treatments" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[85dvh] bg-surface">
        <div className="mx-auto grid max-w-[1400px] items-center px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:py-0">
          {/* Copy */}
          <div className="relative z-10 py-16 sm:py-20 lg:col-span-5 lg:py-24">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Visage Polyclinic &middot; Dubai
            </p>
            <h1 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-ink">
              Personalised care,<br />
              <span className="italic text-brand-500">thoughtfully</span> delivered.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-warm-600">
              Medical and aesthetic treatments under one roof. Every patient receives individual attention in a professional, welcoming environment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-ink px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
              >
                Book an Appointment
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center text-[13px] font-medium text-warm-600 transition-colors hover:text-ink"
              >
                Explore Treatments
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden bg-warm-200 sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&h=1250&fit=crop&crop=center"
                alt="Visage Polyclinic clinic interior"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              A clinic built around the patient
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Established in September 2024, Visage Polyclinic brings together aesthetic medicine and general medical services in the heart of Business Bay. Our approach is simple: professional care, personalised to each individual, delivered with clarity and respect.
            </p>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Aesthetic Treatments ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Aesthetic Medicine
            </p>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Treatments that reflect<br className="hidden sm:block" /> your individual needs
            </h2>
          </div>

          <div className="grid gap-px bg-warm-300 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTreatments.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group bg-surface p-8 transition-colors duration-200 hover:bg-brand-50"
              >
                <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-brand-600 transition-colors">
                  {t.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-warm-600">
                  {t.description}
                </p>
                <span className="mt-5 inline-flex items-center text-[12px] font-medium text-brand-500 transition-colors group-hover:text-brand-700">
                  Learn more
                  <svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Botox Feature ─── */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Botox
              </p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Addressing dynamic wrinkles with precision
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-warm-600">
                Botox works by relaxing targeted facial muscles to reduce the appearance of dynamic wrinkles. Treatment areas include the full face, lower face, neck, underarms, and trapezius muscles. Results typically last 3 to 6 months.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Full Face", "Lower Face", "Neck", "Trap Botox", "Underarm"].map((a) => (
                  <span key={a} className="rounded-full border border-warm-300 px-3 py-1 text-[11px] font-medium text-warm-600">
                    {a}
                  </span>
                ))}
              </div>
              <Link
                href="/botox"
                className="mt-8 inline-flex items-center text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                Full Botox overview
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-200">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&h=625&fit=crop&crop=center"
                  alt="Aesthetic treatment at Visage Polyclinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fillers Feature ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-200">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1000&h=625&fit=crop&crop=center"
                  alt="Dermal filler consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Fillers
              </p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Restoring volume, refining contours
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-warm-600">
                Dermal fillers address static wrinkles and restore lost volume. Treatments range from facial contouring and lip enhancement to skin biostimulators like Sculptra. Results vary by product and individual factors.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Lips", "Jawline", "Chin", "Skin Boosters", "Sculptra"].map((a) => (
                  <span key={a} className="rounded-full border border-warm-300 px-3 py-1 text-[11px] font-medium text-warm-600">
                    {a}
                  </span>
                ))}
              </div>
              <Link
                href="/fillers"
                className="mt-8 inline-flex items-center text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                Full fillers overview
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Medical Services ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Medical Services
            </p>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Comprehensive care, one location
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "General Practice", desc: "Primary medical care for adults and adolescents across a wide range of health concerns." },
              { title: "Chronic Disease Management", desc: "Ongoing monitoring and care for conditions including hypertension and diabetes." },
              { title: "Male Health", desc: "Dedicated medical services addressing men's specific health needs." },
              { title: "Adolescent Health", desc: "Medical care tailored to the needs of younger patients." },
              { title: "Minor Surgery", desc: "In-clinic procedures including lipoma excision, cyst excision, and incision and drainage." },
              { title: "Emergency & Referral", desc: "Urgent care services and specialist referral coordination when needed." },
            ].map((s) => (
              <div key={s.title}>
                <h3 className="font-serif text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Visage ─── */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Why Visage
            </h2>
          </div>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Individual Assessment", body: "Every patient is evaluated as a unique individual. Treatment plans are developed around your specific needs." },
              { title: "Professional Standards", body: "Ethical, evidence-based medical care delivered with clinical rigour and clear communication." },
              { title: "Informed Decisions", body: "We believe in transparent communication so you can make confident, informed choices about your care." },
              { title: "Under One Roof", body: "Aesthetic and medical services in a single clinic for convenient, coordinated care." },
            ].map((item) => (
              <div key={item.title} className="bg-warm-900 p-8">
                <h3 className="font-serif text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-warm-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Doctor ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-warm-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-24 w-24 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="absolute bottom-4 left-4 text-[11px] text-warm-500">[Photo pending]</span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Our Doctor
              </p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Dr. Musa
              </h2>
              <p className="mt-1 text-[15px] font-medium text-brand-500">
                General Practitioner &amp; Aesthetic Medicine
              </p>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-warm-600">
                Every patient should be treated as an individual. Care should be professional and personalised. The clinic brings multiple specialities together under one roof to provide comprehensive care.
              </p>
              <div className="mt-6 space-y-2 text-[13px] text-warm-500">
                <p>[Qualifications pending]</p>
                <p>[Professional experience pending]</p>
              </div>
              <Link
                href="/doctor"
                className="mt-8 inline-flex items-center text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                Full profile
                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Testimonials Placeholder ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Patient feedback
            </h2>
          </div>
          <div className="mt-12 grid gap-px sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-warm-300 p-8">
                <div className="space-y-3">
                  <div className="h-3 w-3/4 rounded bg-warm-200" />
                  <div className="h-3 w-1/2 rounded bg-warm-200" />
                  <div className="h-3 w-5/6 rounded bg-warm-200" />
                </div>
                <p className="mt-6 text-[12px] italic text-warm-400">[Testimonial pending]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Location & CTA ─── */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Find us in<br />Business Bay
              </h2>
              <div className="mt-6 space-y-3 text-[14px] leading-relaxed text-warm-600">
                <p>Office 711, Regal Tower<br />Business Bay, Dubai<br />United Arab Emirates</p>
                <p className="text-warm-500">Open daily, 8:00 AM to 11:00 PM</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
                >
                  Book an Appointment
                </Link>
                <a
                  href="tel:+97145758729"
                  className="inline-flex items-center rounded-full border border-warm-300 px-6 py-3 text-[13px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600"
                >
                  04 575 8729
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex aspect-[16/9] items-center justify-center border border-warm-300 bg-warm-100">
                <div className="text-center">
                  <svg className="mx-auto h-10 w-10 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="mt-3 text-[13px] text-warm-500">[Google Maps embed pending]</p>
                  <a
                    href="https://maps.google.com/?q=Regal+Tower+Business+Bay+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-[12px] font-medium text-brand-500 hover:text-brand-700"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Begin your consultation
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-warm-600">
            Contact us to schedule an appointment. We look forward to welcoming you.
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
