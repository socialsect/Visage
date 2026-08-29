"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/about", label: "About" },
  {
    label: "Treatments",
    children: [
      { href: "/treatments", label: "All Treatments" },
      { href: "/botox", label: "Botox" },
      { href: "/fillers", label: "Dermal Fillers" },
      { href: "/treatments/skin-rejuvenation", label: "Skin Rejuvenation" },
      { href: "/treatments/prp", label: "PRP" },
      { href: "/treatments/prf", label: "PRF" },
      { href: "/treatments/threads", label: "Thread Lift" },
      { href: "/treatments/fat-melting", label: "Fat Melting" },
      { href: "/treatments/skin-boosters", label: "Skin Boosters" },
      { href: "/treatments/minor-aesthetic-procedures", label: "Minor Procedures" },
    ],
  },
  { href: "/doctor", label: "Doctor" },
  { href: "/laboratory", label: "Laboratory" },
  { href: "/publications", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleDropdownEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-warm-200 bg-surface">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(link.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                    link.children.some((c) => pathname === c.href)
                      ? "text-brand-600"
                      : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === link.label && (
                  <div
                    className="absolute left-0 top-full z-50 mt-2 w-60 rounded-lg border border-warm-200 bg-white py-2 shadow-xl"
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`block px-5 py-2.5 text-[14px] transition-colors ${
                          pathname === child.href
                            ? "bg-brand-50 text-brand-600 font-medium"
                            : "text-ink/70 hover:bg-warm-50 hover:text-ink"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-600"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+97145758729"
            className="text-[14px] font-medium text-ink/50 transition-colors hover:text-ink"
          >
            04 575 8729
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-ink px-7 py-3 text-[14px] font-medium text-white transition-all duration-200 hover:bg-warm-800 active:scale-[0.98]"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://wa.me/971581867309"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-warm-800 p-2.5 text-white transition-colors hover:bg-ink"
            aria-label="WhatsApp"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2.5 text-ink transition-colors hover:bg-warm-100"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-warm-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8">
            <div className="space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-warm-50"
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 space-y-1 border-l border-warm-200 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                            className={`block rounded-lg px-4 py-2.5 text-[14px] transition-colors ${
                              pathname === child.href
                                ? "bg-brand-50 text-brand-600 font-medium"
                                : "text-ink/60 hover:bg-warm-50 hover:text-ink"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3.5 text-[15px] font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-brand-50 text-brand-600"
                        : "text-ink/80 hover:bg-warm-50 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <div className="mt-6 space-y-3 border-t border-warm-200 pt-6">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block rounded-full bg-ink px-6 py-3.5 text-center text-[14px] font-medium text-white transition-colors hover:bg-warm-800"
              >
                Book Appointment
              </Link>
              <a
                href="https://wa.me/971581867309"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-warm-300 px-6 py-3.5 text-center text-[14px] font-medium text-warm-700 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+97145758729"
                className="block text-center text-[14px] font-medium text-warm-500"
              >
                04 575 8729
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
