import { ArrowRight, Play, ShieldCheck, Activity, BedDouble, Pill, FlaskConical } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 nc-grid-bg opacity-70 pointer-events-none" />
      <div className="absolute inset-0 nc-radial pointer-events-none" />
      <div className="absolute -top-20 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#38BDF8]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-[-12%] h-[420px] w-[420px] rounded-full bg-[#0284C7]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 nc-fade-up">
            <div
              data-testid="hero-eyebrow"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs font-mono-tech tracking-[0.18em] uppercase text-sky-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 nc-pulse" />
              Plus91 · HIMS · Trusted by 500+ Hospitals
            </div>

            <h1
              data-testid="hero-title"
              className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-[#0C1828] leading-[1.02]"
            >
              Transform Your
              <br />
              <span className="font-medium">Hospital Operations</span>
              <br />
              with{" "}
              <span className="bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#0EA5E9] bg-clip-text text-transparent font-medium">
                NanoCura
              </span>
            </h1>

            <p
              data-testid="hero-subtitle"
              className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              Complete Hospital Information Management System for OPD, IPD,
              Billing, EMR, Pharmacy, Diagnostics, and Patient Workflow
              Management — engineered for small, medium and specialty hospitals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#demo" data-testid="hero-cta-demo">
                <Button
                  size="lg"
                  className="rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white h-12 px-6 shadow-lg shadow-sky-500/25 group"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href="#pricing" data-testid="hero-cta-signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-6 border-slate-300 bg-white hover:bg-sky-50 hover:border-sky-300 text-slate-800"
                >
                  Sign Up / Subscription
                </Button>
              </a>
              <a href="#login" data-testid="hero-cta-login">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full h-12 px-5 text-slate-700 hover:text-[#0284C7] hover:bg-sky-50"
                >
                  <Play className="mr-2 h-4 w-4" /> Login Portal
                </Button>
              </a>
            </div>

            {/* Trust pills */}
            <div className="mt-10 grid grid-cols-3 max-w-md gap-4">
              {[
                { k: "500+", v: "Hospitals" },
                { k: "12M+", v: "Patients managed" },
                { k: "99.9%", v: "Uptime SLA" },
              ].map((s) => (
                <div key={s.v} data-testid={`hero-stat-${s.v}`}>
                  <div className="font-display text-3xl font-medium text-[#0C1828]">
                    {s.k}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="lg:col-span-5 relative nc-fade-up nc-delay-2">
            <div className="relative">
              {/* Floating mini cards */}
              <div className="absolute -top-6 -left-6 z-20 nc-glass rounded-2xl p-4 nc-float">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-sky-100 grid place-items-center text-[#0284C7]">
                    <BedDouble className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Bed Occupancy</div>
                    <div className="font-display text-lg font-medium text-slate-900">
                      82<span className="text-slate-400">/120</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4 z-20 nc-glass rounded-2xl p-4 nc-float" style={{ animationDelay: "1.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 grid place-items-center text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">ABHA Linked</div>
                    <div className="font-display text-lg font-medium text-slate-900">
                      96.4%
                    </div>
                  </div>
                </div>
              </div>

              {/* Main dashboard frame */}
              <div className="relative rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-sky-900/10 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50/60">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="font-mono-tech text-[10px] tracking-widest text-slate-400">
                    NANOCURA · CONTROL ROOM
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="p-5 grid grid-cols-6 gap-3">
                  <div className="col-span-3 rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white p-5">
                    <div className="text-[10px] uppercase tracking-widest text-sky-100/80">
                      Today · OPD
                    </div>
                    <div className="font-display text-3xl font-light mt-2">
                      248
                      <span className="text-sky-200/80 text-base ml-1.5">
                        visits
                      </span>
                    </div>
                    <div className="mt-4 h-12 flex items-end gap-1">
                      {[40, 65, 50, 80, 60, 95, 72].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="flex-1 rounded-sm bg-white/40"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-span-3 rounded-2xl border border-slate-200 p-4">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400">
                      Revenue · MTD
                    </div>
                    <div className="font-display text-2xl font-medium mt-2 text-slate-900">
                      ₹ 18.4 L
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-emerald-600 font-medium">▲ 12.4%</span>
                      <span className="text-[10px] text-slate-400">vs last month</span>
                    </div>
                    <svg viewBox="0 0 200 60" className="mt-3 w-full h-10">
                      <path
                        d="M0 50 L20 42 L40 46 L60 28 L80 34 L100 22 L120 30 L140 16 L160 22 L180 10 L200 14"
                        fill="none"
                        stroke="#0284C7"
                        strokeWidth="2"
                      />
                      <path
                        d="M0 50 L20 42 L40 46 L60 28 L80 34 L100 22 L120 30 L140 16 L160 22 L180 10 L200 14 L200 60 L0 60 Z"
                        fill="rgba(2,132,199,0.08)"
                      />
                    </svg>
                  </div>

                  {[
                    { i: <Activity className="h-4 w-4" />, t: "IPD", v: "82" },
                    { i: <Pill className="h-4 w-4" />, t: "Pharmacy", v: "1,204" },
                    { i: <FlaskConical className="h-4 w-4" />, t: "Lab Orders", v: "318" },
                  ].map((b) => (
                    <div
                      key={b.t}
                      className="col-span-2 rounded-xl border border-slate-200 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-slate-400">
                          {b.t}
                        </span>
                        <span className="text-[#0284C7]">{b.i}</span>
                      </div>
                      <div className="font-display text-lg font-medium mt-1 text-slate-900">
                        {b.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
