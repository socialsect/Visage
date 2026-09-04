import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70dvh] flex-col items-center justify-center px-5 text-center">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
        Page Not Found
      </p>
      <h1 className="text-[clamp(3rem,8vw,6rem)] font-semibold leading-none tracking-tight text-ink">
        404
      </h1>
      <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-warm-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-[#b79bb9] px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#997c9b] active:scale-[0.98]"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-warm-300 px-7 py-3 text-[13px] font-medium text-warm-600 transition-colors hover:border-brand-300 hover:text-ink"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
