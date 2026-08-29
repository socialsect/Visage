import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export function Logo({ className, variant = "full" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      {/* Medical cross mark — muted lilac */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="6" fill="#917a8d" />
        <path
          d="M16 8v16M8 16h16"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[22px] font-semibold tracking-tight text-ink">
            Visage
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-warm-500">
            Polyclinic
          </span>
        </span>
      )}
    </Link>
  );
}
