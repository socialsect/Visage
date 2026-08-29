import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark"; // Keeping prop for backwards compatibility if used elsewhere
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12">
        <Image
          src="/logo.jpeg"
          alt="Visage Polyclinic Logo"
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
}
