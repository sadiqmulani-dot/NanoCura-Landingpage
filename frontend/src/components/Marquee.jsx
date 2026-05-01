const ITEMS = [
  "ABHA",
  "PMJAY",
  "HFR",
  "NHA Compliant",
  "ISO 27001",
  "HIPAA",
  "NABH Aligned",
  "DigiLocker",
  "ICD-10",
  "FHIR R4",
  "GST Ready",
  "UPI Pay",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      data-testid="integrations-marquee"
      className="relative py-10 border-y border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
        <div className="text-center text-[11px] font-mono-tech uppercase tracking-[0.32em] text-slate-400">
          Compliant · Connected · Certified
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max nc-marquee">
          {row.map((t, i) => (
            <div
              key={i}
              className="px-12 font-mono-tech text-sm uppercase tracking-[0.18em] text-slate-500 whitespace-nowrap flex items-center gap-12"
            >
              <span>{t}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
