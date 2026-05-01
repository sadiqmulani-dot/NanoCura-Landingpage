import {
  ConciergeBell,
  Receipt,
  Pill,
  Microscope,
  ScanLine,
  Boxes,
  Users2,
  FileBarChart2,
} from "lucide-react";

const MODULES = [
  { t: "Reception", d: "Walk-in registration, appointments, queue.", i: ConciergeBell, code: "MOD-01" },
  { t: "Billing", d: "Cashier, packages, settlements, refunds.", i: Receipt, code: "MOD-02" },
  { t: "Pharmacy", d: "POS, inward/outward, batch & expiry.", i: Pill, code: "MOD-03" },
  { t: "Laboratory", d: "Sample, result entry, integrations.", i: Microscope, code: "MOD-04" },
  { t: "Radiology", d: "Modality worklist, PACS-ready reports.", i: ScanLine, code: "MOD-05" },
  { t: "Inventory", d: "Stores, indents, vendors, GRN.", i: Boxes, code: "MOD-06" },
  { t: "HR / Admin", d: "Staff roster, attendance, payroll.", i: Users2, code: "MOD-07" },
  { t: "Reports", d: "100+ MIS, custom dashboards, exports.", i: FileBarChart2, code: "MOD-08" },
];

export default function Modules() {
  return (
    <section
      id="modules"
      data-testid="modules-section"
      className="relative py-24 sm:py-32 bg-white border-y border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.28em] text-[#0284C7]">
              // 02 · Modules
            </div>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#0C1828]">
              Eight modules.
              <br />
              <span className="font-medium">One operating system for your hospital.</span>
            </h2>
          </div>
          <div className="font-mono-tech text-xs uppercase tracking-[0.22em] text-slate-400">
            v 4.2 · Modular · API-First
          </div>
        </div>

        {/* Strict technical grid */}
        <div className="mt-14 border-t border-l border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => {
            const I = m.i;
            return (
              <div
                key={m.t}
                data-testid={`module-${m.t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="group relative border-r border-b border-slate-200 p-7 sm:p-8 hover:bg-sky-50/40 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-slate-400">
                    {m.code}
                  </span>
                  <span className="h-9 w-9 rounded-lg grid place-items-center border border-slate-200 bg-white text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                    <I className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="font-display mt-12 text-2xl font-medium text-[#0C1828] tracking-tight">
                  {m.t}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {m.d}
                </p>
                <div className="mt-6 h-px w-10 bg-[#0284C7] group-hover:w-16 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
