"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h2 className="text-2xl font-semibold text-ink">Something went wrong</h2>
      <p className="mt-3 text-[15px] text-warm-600">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
      >
        Try again
      </button>
    </section>
  );
}
