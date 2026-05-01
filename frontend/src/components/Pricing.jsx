import { Check, Sparkles, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const TIERS = [
  {
    id: "basic",
    name: "Basic",
    blurb: "For clinics & nursing homes starting their digital journey.",
    priceMonthly: 4999,
    priceYearly: 4499,
    features: [
      "Up to 25 beds",
      "OPD + Billing + Pharmacy",
      "ABHA registration",
      "Email support",
      "1 GB document storage",
    ],
    cta: "Start with Basic",
  },
  {
    id: "standard",
    name: "Standard",
    blurb: "Most popular for growing 25-100 bed hospitals.",
    priceMonthly: 9999,
    priceYearly: 8999,
    features: [
      "Up to 100 beds",
      "All Basic + IPD + Lab + Radiology",
      "Insurance & PMJAY claims",
      "Priority email + chat",
      "20 GB storage · Daily backups",
    ],
    cta: "Choose Standard",
  },
  {
    id: "premium",
    name: "Premium",
    blurb: "For multi-specialty hospitals seeking deep analytics.",
    priceMonthly: 19999,
    priceYearly: 17999,
    features: [
      "Up to 300 beds",
      "All Standard + HR + Inventory",
      "Advanced analytics & MIS",
      "24×7 phone support",
      "Custom integrations · 100 GB",
    ],
    highlighted: true,
    cta: "Go Premium",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    blurb: "Tailored deployments for groups and chains.",
    priceMonthly: null,
    priceYearly: null,
    features: [
      "Unlimited beds & branches",
      "On-prem or private cloud",
      "Dedicated success manager",
      "Custom SLAs · 99.99% uptime",
      "White-label & API access",
    ],
    dark: true,
    cta: "Talk to Sales",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 nc-radial pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.28em] text-[#0284C7]">
            // 03 · Pricing
          </div>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#0C1828]">
            Transparent plans.
            <br />
            <span className="font-medium">Built to scale with you.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600">
            Per-hospital monthly subscription. No setup fees. Cancel anytime.
          </p>

          <div
            data-testid="pricing-billing-toggle"
            className="mt-8 inline-flex items-center gap-1 rounded-full bg-white border border-slate-200 p-1 shadow-sm"
          >
            <button
              data-testid="billing-monthly"
              onClick={() => setYearly(false)}
              className={`px-5 py-2 text-sm rounded-full font-medium transition-all ${
                !yearly
                  ? "bg-[#0284C7] text-white shadow"
                  : "text-slate-600 hover:text-[#0284C7]"
              }`}
            >
              Monthly
            </button>
            <button
              data-testid="billing-yearly"
              onClick={() => setYearly(true)}
              className={`px-5 py-2 text-sm rounded-full font-medium transition-all flex items-center gap-2 ${
                yearly
                  ? "bg-[#0284C7] text-white shadow"
                  : "text-slate-600 hover:text-[#0284C7]"
              }`}
            >
              Yearly
              <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                SAVE 10%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((t) => {
            const price = yearly ? t.priceYearly : t.priceMonthly;
            const isDark = t.dark;
            const isHL = t.highlighted;
            return (
              <div
                key={t.id}
                data-testid={`pricing-tier-${t.id}`}
                className={`relative rounded-3xl p-7 nc-card-lift flex flex-col ${
                  isDark
                    ? "bg-[#0A1F3D] border border-slate-800 text-white"
                    : isHL
                    ? "bg-white border-2 border-[#0284C7] shadow-2xl shadow-sky-500/15"
                    : "bg-white border border-slate-200"
                }`}
              >
                {isHL && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0284C7] text-white text-[10px] font-mono-tech uppercase tracking-[0.22em] px-3 py-1.5 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-display text-2xl font-medium ${
                      isDark ? "text-white" : "text-[#0C1828]"
                    }`}
                  >
                    {t.name}
                  </h3>
                  {t.id === "enterprise" && (
                    <Building2
                      className={`h-5 w-5 ${isDark ? "text-sky-300" : "text-[#0284C7]"}`}
                    />
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {t.blurb}
                </p>

                <div className="mt-6">
                  {price ? (
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`font-display text-5xl font-light tracking-tight ${
                          isDark ? "text-white" : "text-[#0C1828]"
                        }`}
                      >
                        ₹{price.toLocaleString("en-IN")}
                      </span>
                      <span
                        className={`text-sm ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        /mo
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`font-display text-4xl font-light tracking-tight ${
                        isDark ? "text-white" : "text-[#0C1828]"
                      }`}
                    >
                      Custom
                    </div>
                  )}
                  <div
                    className={`mt-1 text-[11px] font-mono-tech uppercase tracking-[0.22em] ${
                      isDark ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    {price ? (yearly ? "Billed annually" : "Billed monthly") : "Custom proposal"}
                  </div>
                </div>

                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${
                        isDark ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      <span
                        className={`mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full ${
                          isDark
                            ? "bg-sky-400/20 text-sky-300"
                            : "bg-sky-100 text-[#0284C7]"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={t.id === "enterprise" ? "#demo" : "#demo"} className="mt-7 block">
                  <Button
                    data-testid={`pricing-cta-${t.id}`}
                    className={`w-full rounded-full h-11 ${
                      isDark
                        ? "bg-white text-[#0A1F3D] hover:bg-sky-100"
                        : isHL
                        ? "bg-[#0284C7] hover:bg-[#0369A1] text-white"
                        : "bg-[#0C1828] hover:bg-[#0284C7] text-white"
                    }`}
                  >
                    {t.cta}
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
