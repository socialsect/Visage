import Link from "next/link";
import Image from "next/image";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { MapEmbed } from "@/components/MapEmbed";
import { AskQuestionSection } from "@/components/AskQuestionSection";

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
      <section className="relative overflow-hidden bg-surface">
        {/* Logo watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image
            src="/logo.jpeg"
            alt=""
            width={600}
            height={600}
            className="opacity-[0.08]"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex min-h-[75dvh] flex-col items-center justify-center py-20 text-center lg:min-h-[80dvh]">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-400">
              Visage Polyclinic &middot; Business Bay, Dubai
            </p>
            <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Modern medicine.
              <br />
              <span className="font-display font-normal italic text-brand-500 pb-1 inline-block">Thoughtfully</span>
              <br />
              delivered.
            </h1>
            <p className="mt-8 max-w-lg text-[15px] leading-[1.8] text-warm-500">
              Medical and aesthetic treatments under one roof. Personalised care for every individual.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
              >
                Book an Appointment
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center rounded-full border border-warm-300 px-8 py-3.5 text-[13px] font-medium text-warm-600 transition-all duration-200 hover:border-brand-300 hover:text-ink"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              A clinic built around<br />the <span className="font-display font-normal italic text-brand-500">patient</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-warm-600">
              Established in September 2024, Visage Polyclinic brings together aesthetic medicine and general medical services in the heart of Dubai. Our approach is simple: professional care, personalised to each individual, delivered with clarity and respect.
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
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
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
                <h3 className="text-xl font-semibold text-ink group-hover:text-brand-600 transition-colors">
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
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
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
              <div className="relative aspect-[4/3] overflow-hidden bg-warm-200 sm:aspect-[16/10]">
                <Image
                  src="/dr-musa.jpg"
                  alt="Dr. Musa - Dermal filler treatments at Visage Polyclinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Fillers
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
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
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
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
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
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
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Why <span className="font-display font-normal italic">Visage</span>
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
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-warm-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-8 bg-warm-300"></span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Your Path
              </p>
              <span className="h-px w-8 bg-warm-300"></span>
            </div>
            <h2 className="relative inline-block text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              How It Works
            </h2>
          </div>

          {/* Steps */}
          <div className="relative mt-24">
            {/* Desktop connecting line */}
            <div className="absolute left-[15%] top-8 hidden w-[70%] border-t border-warm-200 md:block"></div>
            
            <div className="grid gap-16 md:grid-cols-3 md:gap-8">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-warm-200 bg-surface shadow-sm">
                  <span className="text-lg text-ink">1</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-ink">Book Your Initial Session</h3>
                <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-warm-600">
                  Start with a detailed consultation — a conversation about your concerns, aesthetic goals, and medical history.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-warm-200 bg-surface shadow-sm">
                  <span className="text-lg text-ink">2</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-ink">Get Your Personalised Plan</h3>
                <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-warm-600">
                  Dr. Musa will recommend the right treatments or procedures tailored specifically for your unique situation.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-warm-200 bg-surface shadow-sm">
                  <span className="text-lg text-ink">3</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-ink">Begin Your Treatment</h3>
                <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-warm-600">
                  Experience professional care in our Business Bay clinic, with continuous support throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Doctor ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
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
            <div className="lg:col-span-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                Our Doctor
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Dr. Musa
              </h2>
              <p className="mt-1 text-[15px] font-medium text-brand-500">
                MBChB &middot; General Practitioner &amp; Aesthetic Medicine
              </p>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-warm-600">
                Every patient should be treated as an individual. Care should be professional and personalised. The clinic brings multiple specialities together under one roof to provide comprehensive care.
              </p>
              <div className="mt-6 space-y-1 text-[13px] text-warm-500">
                <p>Over 17 years of medical experience</p>
                <p>9 years of practice in the UAE</p>
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

      {/* ─── Testimonials Carousel ─── */}
      <section className="py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 relative">
          <div className="mb-10">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              Patient feedback
            </h2>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* ─── Location & CTA ─── */}
      <section className="bg-surface-alt py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-ink">
                Find us in<br />Business Bay
              </h2>
              <div className="mt-6 space-y-3 text-[14px] leading-relaxed text-warm-600">
                <p>Office 711, Regal Tower<br />Business Bay, Dubai<br />United Arab Emirates</p>
                <p className="text-warm-500">Open daily, 8:00 AM to 11:00 PM</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-[#b79bb9] px-6 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
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
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
      <div className="visage-divider mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12" />

      {/* ─── Ask A Question ─── */}
      <AskQuestionSection />
      {/* ─── Final CTA ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-tight text-ink">
            Begin your <span className="font-display font-normal italic text-brand-500">consultation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-warm-600">
            Contact us to schedule an appointment. We look forward to welcoming you.
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
