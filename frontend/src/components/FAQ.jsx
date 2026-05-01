import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQS = [
  {
    q: "How long does it take to implement NanoCura?",
    a: "For most small to mid-sized hospitals, full deployment takes 2–4 weeks including data migration, configuration and staff training. Multi-branch chains usually go live in 6–8 weeks with a phased rollout.",
  },
  {
    q: "Is NanoCura ABHA / PMJAY / HFR ready?",
    a: "Yes. NanoCura is natively integrated with India's health stack — ABHA registration & linking, HFR provider records, and PMJAY claim submission are built in and continuously updated.",
  },
  {
    q: "Can we run NanoCura on-premise?",
    a: "Absolutely. Premium and Enterprise plans support on-premise, private cloud, or hybrid deployments. We also offer fully-managed cloud hosting on MeitY-empanelled data centers in India.",
  },
  {
    q: "What kind of support do we get?",
    a: "Standard plans include email + chat support during business hours. Premium offers 24×7 phone support, and Enterprise customers get a dedicated success manager and custom SLAs.",
  },
  {
    q: "Will it work with our existing lab and radiology equipment?",
    a: "NanoCura supports HL7 / ASTM / DICOM and has pre-built integrations with most major instrument vendors. Our team handles the integration as part of onboarding.",
  },
  {
    q: "How is patient data secured?",
    a: "Data is encrypted at rest (AES-256) and in transit (TLS 1.3). We follow ISO 27001 controls, role-based access, mandatory MFA, and full audit logs. India data residency is the default.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 sm:py-32 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.28em] text-[#0284C7]">
              // 07 · FAQ
            </div>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#0C1828]">
              Questions,
              <br />
              <span className="font-medium">answered honestly.</span>
            </h2>
            <p className="mt-5 text-base text-slate-600">
              Couldn't find what you're looking for?{" "}
              <a href="#demo" className="text-[#0284C7] font-medium underline-offset-4 hover:underline">
                Request a demo
              </a>{" "}
              and our specialist will walk you through it.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              className="w-full divide-y divide-slate-200 border-t border-b border-slate-200"
              data-testid="faq-accordion"
            >
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b-0"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-medium tracking-tight text-[#0C1828] hover:text-[#0284C7] hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
