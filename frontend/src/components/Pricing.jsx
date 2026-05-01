import { Check, Sparkles, Building2, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const PLUS91_LOGO =
  "https://customer-assets.emergentagent.com/job_medixcel-hospitals/artifacts/y452o2s4_plus91-logo-High-res1-1-1024x491%20%282%29.png";

const TIERS = [
  {
    id: "basic",
    name: "Basic",
    blurb: "For clinics & nursing homes starting their digital journey.",
    priceYearly: 65000,
    features: [
      "Up to 25 beds",
      "OPD + Billing + Pharmacy",
      "ABHA registration",
      "Email support",
      "1 GB document storage",
    ],
    cta: "Request Demo",
  },
  {
    id: "standard",
    name: "Standard",
    blurb: "For growing 25-100 bed hospitals scaling operations.",
    priceYearly: 75000,
    features: [
      "Up to 100 beds",
      "All Basic + IPD + Lab + Radiology",
      "Insurance & PMJAY claims",
      "Priority email + chat",
      "20 GB storage · Daily backups",
    ],
    cta: "Request Demo",
  },
  {
    id: "premium",
    name: "Premium",
    blurb: "Most popular — multi-specialty hospitals seeking deep analytics.",
    priceYearly: 125000,
    features: [
      "Up to 300 beds",
      "All Standard + HR + Inventory",
      "Advanced analytics & MIS",
      "24×7 phone support",
      "Custom integrations · 100 GB",
    ],
    highlighted: true,
    cta: "Request Demo",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    blurb: "Tailored deployments for hospital groups and chains.",
    priceYearly: null,
    features: [
      "Unlimited beds & branches",
      "On-prem or private cloud",
      "Dedicated success manager",
      "Custom SLAs · 99.99% uptime",
      "White-label & API access",
    ],
    dark: true,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
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
            Transparent annual plans.
            <br />
            <span className="font-medium">Built to scale with your hospital.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600">
            Per-hospital annual subscription for MediXcel NanoCura. No setup
            fees. Cancel anytime.
          </p>

          {/* Plus91 trust strip */}
          <div
            data-testid="pricing-plus91-strip"
            className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#0A1F3D] border border-slate-800 px-4 py-3 shadow-lg shadow-sky-900/10"
          >
            <img
              src={PLUS91_LOGO}
              alt="Plus91 Technologies"
              draggable={false}
              className="h-9 w-auto object-contain select-none"
            />
            <span className="h-6 w-px bg-slate-700" />
            <div className="leading-tight text-left">
              <div className="text-[9px] font-mono-tech uppercase tracking-[0.2em] text-sky-300">
                Powered by
              </div>
              <div className="text-xs font-medium text-white">
                Plus91 Technologies Pvt. Ltd.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((t) => {
            const price = t.priceYearly;
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
                    <>
                      <div className="flex items-baseline gap-1">
                        <span
                          data-testid={`price-${t.id}`}
                          className={`font-display text-4xl sm:text-5xl font-light tracking-tight ${
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
                          /year
                        </span>
                      </div>
                      <div
                        className={`mt-1 text-[11px] font-mono-tech uppercase tracking-[0.22em] ${
                          isDark ? "text-slate-400" : "text-slate-400"
                        }`}
                      >
                        Billed annually · Excl. GST
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        data-testid={`price-${t.id}`}
                        className={`font-display text-4xl font-light tracking-tight ${
                          isDark ? "text-white" : "text-[#0C1828]"
                        }`}
                      >
                        Custom
                      </div>
                      <div
                        className={`mt-1 text-[11px] font-mono-tech uppercase tracking-[0.22em] ${
                          isDark ? "text-slate-400" : "text-slate-400"
                        }`}
                      >
                        Tailored proposal · Excl. GST
                      </div>
                    </>
                  )}
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

                <a href="#demo" className="mt-7 block">
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

        {/* CTA cluster */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.22em] text-[#0284C7]">
                Not sure which plan fits?
              </div>
              <h3 className="font-display mt-1.5 text-2xl sm:text-3xl font-medium tracking-tight text-[#0C1828]">
                Talk to a Plus91 specialist.
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                We'll help you size MediXcel NanoCura for your hospital — beds,
                specialties, branches & integrations.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a href="#demo" data-testid="pricing-cta-request-demo">
                <Button className="rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white h-11 px-5">
                  <ArrowRight className="mr-2 h-4 w-4" /> Request Demo
                </Button>
              </a>
              <a
                href="mailto:nanocura@plus91.in?subject=NanoCura%20Sales%20Enquiry"
                data-testid="pricing-cta-contact-sales"
              >
                <Button
                  variant="outline"
                  className="rounded-full h-11 px-5 border-slate-300 hover:border-sky-300 hover:bg-sky-50"
                >
                  <Phone className="mr-2 h-4 w-4 text-[#0284C7]" /> Contact Sales
                </Button>
              </a>
              <a
                href="mailto:nanocura@plus91.in?subject=NanoCura%20Pricing%20Inquiry"
                data-testid="pricing-cta-pricing-inquiry"
              >
                <Button
                  variant="outline"
                  className="rounded-full h-11 px-5 border-slate-300 hover:border-sky-300 hover:bg-sky-50"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-[#0284C7]" /> Pricing Inquiry
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
