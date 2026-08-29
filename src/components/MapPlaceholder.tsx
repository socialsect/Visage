import Link from "next/link";

export function MapPlaceholder() {
  return (
    <div className="flex aspect-[16/9] items-center justify-center border border-warm-300 bg-warm-100">
      <div className="text-center">
        <svg className="mx-auto h-8 w-8 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
        <p className="mt-2 text-[12px] text-warm-500">[Google Maps embed pending]</p>
        <Link
          href="https://maps.google.com/?q=Regal+Tower+Business+Bay+Dubai"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center text-[11px] font-medium text-brand-500 hover:text-brand-700"
        >
          Open in Google Maps
        </Link>
      </div>
    </div>
  );
}
