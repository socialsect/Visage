"use client";

const services = [
  { 
    title: "General Practice", 
    desc: "Everyday medical care for adults and adolescents — from routine check-ups to ongoing health concerns.",
  },
  { 
    title: "Chronic Disease Management", 
    desc: "Regular monitoring and long-term care planning for conditions like diabetes and high blood pressure.",
  },
  { 
    title: "Male Health", 
    desc: "Focused medical care addressing health concerns specific to men, handled with discretion.",
  },
  { 
    title: "Adolescent Health", 
    desc: "Age-appropriate medical care designed around the needs of younger patients.",
  },
  { 
    title: "Minor Surgery", 
    desc: "In-clinic procedures such as lipoma and cyst removal, wound closure, and incision and drainage.",
  },
  { 
    title: "Emergency & Referral", 
    desc: "Prompt attention for urgent issues, with coordinated referrals to specialists when your care needs go beyond the clinic.",
  },
];

export function MedicalServicesList() {
  return (
    <div className="mt-16 sm:mt-24 flex flex-col gap-12 sm:gap-16 px-4 sm:px-8">
      {services.map((s, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div 
            key={s.title}
            className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-6 md:gap-16 lg:gap-24 group`}
          >
             {/* Title & Number Side */}
             <div className="w-full md:w-1/2 relative">
                <div className="relative z-10 flex items-center gap-4 sm:gap-6">
                  <span className="text-5xl sm:text-6xl font-bold text-brand-200 group-hover:text-brand-400 transition-colors duration-500 leading-none tracking-tighter">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink leading-[1.2] tracking-tight relative z-20 transition-colors group-hover:text-brand-600">
                    {s.title}
                  </h3>
                </div>
             </div>
             
             {/* Description Side */}
             <div className="w-full md:w-1/2 flex justify-start">
                <div className="relative pl-6 max-w-lg">
                  {/* Accent Line */}
                  <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-brand-200 to-transparent opacity-50 group-hover:opacity-100 group-hover:from-brand-400 transition-all duration-500" />
                  
                  <p className="text-[1rem] sm:text-[1.125rem] text-warm-600 leading-[1.7] sm:leading-[1.8]">
                    {s.desc}
                  </p>
                </div>
             </div>
          </div>
        );
      })}
    </div>
  );
}
