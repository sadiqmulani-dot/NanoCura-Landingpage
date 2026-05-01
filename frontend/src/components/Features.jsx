import {
  Stethoscope,
  BedDouble,
  Receipt,
  FileHeart,
  FlaskConical,
  Pill,
  LineChart,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

const FEATURES = [
  {
    title: "OPD Management",
    desc: "Token-less queues, doctor scheduling, e-prescriptions and quick check-in.",
    icon: Stethoscope,
    span: "md:col-span-4 lg:col-span-5",
    accent: "from-sky-50 to-white",
    chip: "Out-Patient",
  },
  {
    title: "EMR / EHR",
    desc: "Longitudinal patient records, structured notes, vitals, allergies and ABHA-linked health files.",
    icon: FileHeart,
    span: "md:col-span-4 lg:col-span-7",
    accent: "from-[#0284C7] to-[#0369A1]",
    dark: true,
    chip: "Hero Module",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzc3NjE3OTkzfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "IPD & Bed Management",
    desc: "Live bed dashboards, ward transfers, nursing notes and discharge workflows.",
    icon: BedDouble,
    span: "md:col-span-4 lg:col-span-4",
    accent: "from-white to-sky-50",
    chip: "In-Patient",
  },
  {
    title: "Billing & Insurance",
    desc: "Package billing, TPA & PMJAY claims, GST-ready invoicing.",
    icon: Receipt,
    span: "md:col-span-4 lg:col-span-4",
    accent: "from-white to-cyan-50",
    chip: "Finance",
  },
  {
    title: "Lab & Diagnostics",
    desc: "Sample tracking, instrument integration, auto-validation and PDF reports.",
    icon: FlaskConical,
    span: "md:col-span-8 lg:col-span-4",
    accent: "from-white to-sky-50",
    chip: "Diagnostics",
  },
  {
    title: "Pharmacy",
    desc: "Stock, batch & expiry tracking, e-prescription dispensing and reorder automation.",
    icon: Pill,
    span: "md:col-span-4 lg:col-span-4",
    accent: "from-white to-emerald-50",
    chip: "Inventory",
  },
  {
    title: "Real-Time Analytics",
    desc: "Operational KPIs, revenue cycle, doctor productivity and clinical outcomes.",
    icon: LineChart,
    span: "md:col-span-4 lg:col-span-4",
    accent: "from-white to-blue-50",
    chip: "Insights",
  },
  {
    title: "Govt. Integrations",
    desc: "Plug-and-play with ABHA, PMJAY, HFR & NHA frameworks — built for India.",
    icon: Landmark,
    span: "md:col-span-8 lg:col-span-4",
    accent: "from-white to-indigo-50",
    chip: "Compliance",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.28em] text-[#0284C7]">
            // 01 · Capabilities
          </div>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#0C1828]">
            Every clinical & operational workflow,
            <span className="block font-medium">in one calm system.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl">
            NanoCura unifies front-desk, clinical, financial and compliance
            workflows so your team spends less time on screens and more time
            on care.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-5">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-testid={`feature-${f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={`relative ${f.span} rounded-3xl border overflow-hidden nc-card-lift group ${
                  f.dark
                    ? "border-sky-700/30 bg-gradient-to-br " + f.accent + " text-white"
                    : "border-slate-200 bg-gradient-to-br " + f.accent + " text-slate-900"
                }`}
              >
                {f.image && (
                  <div className="absolute inset-0 opacity-25 mix-blend-overlay">
                    <img
                      src={f.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="relative p-6 sm:p-7 flex flex-col h-full min-h-[210px]">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono-tech uppercase tracking-[0.22em] ${
                        f.dark ? "text-sky-100/80" : "text-slate-400"
                      }`}
                    >
                      {f.chip}
                    </span>
                    <span
                      className={`h-9 w-9 rounded-xl grid place-items-center transition-colors ${
                        f.dark
                          ? "bg-white/15 text-white"
                          : "bg-white text-[#0284C7] border border-slate-200 group-hover:bg-[#0284C7] group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h3
                    className={`font-display mt-auto pt-10 text-2xl sm:text-3xl tracking-tight ${
                      f.dark ? "text-white font-medium" : "text-[#0C1828] font-medium"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      f.dark ? "text-sky-50/85" : "text-slate-600"
                    }`}
                  >
                    {f.desc}
                  </p>
                  <div
                    className={`mt-4 inline-flex items-center gap-1.5 text-xs font-medium ${
                      f.dark ? "text-sky-50" : "text-[#0284C7]"
                    }`}
                  >
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
