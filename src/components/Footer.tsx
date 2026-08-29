import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  aesthetic: [
    { href: "/botox", label: "Botox" },
    { href: "/fillers", label: "Dermal Fillers" },
    { href: "/treatments/skin-rejuvenation", label: "Skin Rejuvenation" },
    { href: "/treatments/prp", label: "PRP" },
    { href: "/treatments/threads", label: "Thread Lift" },
    { href: "/treatments/fat-melting", label: "Fat Melting" },
    { href: "/treatments/skin-boosters", label: "Skin Boosters" },
  ],
  medical: [
    { href: "/treatments", label: "General Practice" },
    { href: "/treatments#medical", label: "Male Health" },
    { href: "/treatments#medical", label: "Chronic Disease Management" },
    { href: "/treatments#minor-surgery", label: "Minor Surgery" },
    { href: "/treatments/minor-aesthetic-procedures", label: "Minor Procedures" },
  ],
  clinic: [
    { href: "/about", label: "About Visage" },
    { href: "/doctor", label: "Our Doctor" },
    { href: "/laboratory", label: "Laboratory Services" },
    { href: "/publications", label: "Health Blog" },
    { href: "/contact", label: "Book Appointment" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Contact bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">Get in Touch</p>
              <p className="mt-1 text-[15px] text-white/70">Open daily, 8:00 AM to 11:00 PM</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+97145758729"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                04 575 8729
              </a>
              <a
                href="https://wa.me/971581867309"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-emerald-500"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:visagepolyclinicllc@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-[13px] font-medium text-ink transition-all hover:bg-white/90 active:scale-[0.98]"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                <Image src="/logo.jpeg" alt="Visage Polyclinic" fill sizes="36px" className="object-cover" />
              </div>
              <span className="font-serif text-lg font-semibold tracking-tight text-white">Visage</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/50">
              A multi-specialty medical and aesthetic clinic in Business Bay, Dubai. Professional, personalised care under one roof.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { href: "https://www.instagram.com/visagepolyclinicdubai/", label: "Instagram", icon: <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                { href: "https://www.facebook.com/profile.php?id=61583274785342", label: "Facebook", icon: <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
                { href: "https://www.tiktok.com/@visagepolyclinicdubai", label: "TikTok", icon: <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg> },
                { href: "http://linkedin.com/company/visage-polyclinic-dubai", label: "LinkedIn", icon: <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-white/30 hover:text-white/70" title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Aesthetic Treatments */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">Aesthetic Treatments</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.aesthetic.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/50 transition-colors hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">Medical Services</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.medical.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-white/50 transition-colors hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">Contact</h4>
            <div className="mt-4 space-y-2.5 text-[13px] text-white/50">
              <p>Office 711, Regal Tower</p>
              <p>Business Bay, Dubai</p>
              <p>04 575 8729</p>
              <p>058 186 7309</p>
              <a href="mailto:visagepolyclinicllc@gmail.com" className="block transition-colors hover:text-white">visagepolyclinicllc@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} Visage Polyclinic LLC. All rights reserved.
          </p>
          <div className="mt-3 flex gap-6 sm:mt-0">
            <span className="text-[12px] text-white/20 cursor-default">Privacy Policy</span>
            <span className="text-[12px] text-white/20 cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
