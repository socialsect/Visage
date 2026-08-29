export function ContactInfo() {
  const details = [
    {
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: "Address",
      lines: ["Office 711, Regal Tower", "Business Bay, Dubai, UAE"],
    },
    {
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: "Phone",
      lines: ["04 575 8729"],
      href: "tel:+97145758729",
    },
    {
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      label: "WhatsApp / Mobile",
      lines: ["058 186 7309"],
      href: "https://wa.me/971581867309",
    },
    {
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email",
      lines: ["visagepolyclinicllc@gmail.com"],
      href: "mailto:visagepolyclinicllc@gmail.com",
    },
    {
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Hours",
      lines: ["8:00 AM to 11:00 PM, Daily"],
    },
  ];

  return (
    <div className="border border-warm-300 p-6">
      <h3 className="text-lg font-semibold text-ink">Contact Information</h3>
      <div className="mt-5 space-y-4">
        {details.map((d) => (
          <div key={d.label} className="flex items-start gap-3">
            <div className="mt-0.5 text-warm-400">{d.icon}</div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-warm-500">
                {d.label}
              </p>
              {d.href ? (
                <a
                  href={d.href}
                  className="mt-0.5 block text-[13px] text-warm-700 transition-colors hover:text-brand-600"
                >
                  {d.lines.join(", ")}
                </a>
              ) : (
                <p className="mt-0.5 text-[13px] text-warm-700">{d.lines.join(", ")}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
