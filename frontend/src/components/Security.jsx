import { ShieldCheck, Lock, FileCheck2, Server, KeyRound, Globe2 } from "lucide-react";

const ITEMS = [
  { i: ShieldCheck, t: "ISO 27001", d: "Information security management certified processes." },
  { i: Lock, t: "AES-256 Encryption", d: "Data encrypted at rest and TLS 1.3 in transit." },
  { i: FileCheck2, t: "HIPAA Aligned", d: "Audit-ready logs, role-based access controls." },
  { i: Server, t: "India Data Residency", d: "Hosted in MeitY-empanelled data centers in India." },
  { i: KeyRound, t: "RBAC + MFA", d: "Granular permissions, mandatory two-factor auth." },
  { i: Globe2, t: "ABHA · NHA · HFR", d: "Native interoperability with India's health stack." },
];

export default function Security() {
  return (
    <section
      id="security"
      data-testid="security-section"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.28em] text-[#0284C7]">
              // 06 · Security & Compliance
            </div>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#0C1828]">
              Patient trust is
              <br />
              <span className="font-medium">non-negotiable.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-slate-600 leading-relaxed">
              MediXcel NanoCura is engineered with hospital-grade security at its
              core — certifications, encryption, audit trails and India-first
              data residency, so your clinical & financial data stay protected.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((it) => {
            const I = it.i;
            return (
              <div
                key={it.t}
                data-testid={`security-${it.t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="group rounded-3xl border border-slate-200 bg-white p-7 nc-card-lift"
              >
                <div className="flex items-start justify-between">
                  <span className="h-12 w-12 rounded-2xl grid place-items-center bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                    <I className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.22em] text-slate-400">
                    Verified
                  </span>
                </div>
                <h3 className="font-display mt-6 text-xl font-medium text-[#0C1828]">
                  {it.t}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {it.d}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
