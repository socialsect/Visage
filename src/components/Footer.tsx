import Link from "next/link";
import { Logo } from "./Logo";

const footerLinks = {
  clinic: [
    { href: "/about", label: "About Visage" },
    { href: "/doctor", label: "Our Doctor" },
    { href: "/contact", label: "Book Appointment" },
  ],
  treatments: [
    { href: "/botox", label: "Botox" },
    { href: "/fillers", label: "Dermal Fillers" },
    { href: "/treatments", label: "All Treatments" },
  ],
  medical: [
    { href: "/treatments#medical", label: "General Practice" },
    { href: "/treatments#minor-surgery", label: "Minor Surgery" },
    { href: "/treatments", label: "Medical Services" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-warm-300 bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Main */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-warm-600">
              A multi-specialty medical and aesthetic clinic in Business Bay, Dubai. Professional, personalised care under one roof.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {/* Social icons */}
              <a
                href="https://www.instagram.com/visagepolyclinicdubai/"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-warm-300 text-warm-500 transition-colors hover:border-brand-300 hover:text-brand-600"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583274785342"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-warm-300 text-warm-500 transition-colors hover:border-brand-300 hover:text-brand-600"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@visagepolyclinicdubai"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-warm-300 text-warm-500 transition-colors hover:border-brand-300 hover:text-brand-600"
                title="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a
                href="http://linkedin.com/company/visage-polyclinic-dubai"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-warm-300 text-warm-500 transition-colors hover:border-brand-300 hover:text-brand-600"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
              Clinic
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.clinic.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-warm-600 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
              Treatments
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.treatments.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-warm-600 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
              Medical
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.medical.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-warm-600 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-500">
              Contact
            </h4>
            <div className="mt-4 space-y-2.5 text-[13px] text-warm-600">
              <p>04 575 8729</p>
              <p>058 186 7309</p>
              <a
                href="mailto:visagepolyclinicllc@gmail.com"
                className="block transition-colors hover:text-ink"
              >
                visagepolyclinicllc@gmail.com
              </a>
              <p className="text-warm-500">
                Open daily<br />8:00 AM &ndash; 11:00 PM
              </p>
            </div>
            <a
              href="https://wa.me/971581867309"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-brand-600 transition-colors hover:text-brand-700"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-300 py-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-[12px] text-warm-500">
            &copy; {new Date().getFullYear()} Visage Polyclinic LLC. All rights reserved.
          </p>
          <div className="mt-3 flex gap-6 sm:mt-0">
            <span className="text-[12px] text-warm-400 cursor-default">Privacy Policy</span>
            <span className="text-[12px] text-warm-400 cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
