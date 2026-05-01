import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_medixcel-hospitals/artifacts/2ojdc1fp_NanoCura%20Logo.png";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`nc-glass rounded-full flex items-center justify-between px-4 sm:px-6 py-2.5 transition-all ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          <a
            href="#top"
            data-testid="header-logo"
            className="flex items-center group shrink-0"
          >
            <span className="block overflow-hidden h-9 sm:h-11 w-[170px] sm:w-[200px] relative">
              <img
                src={LOGO_URL}
                alt="MediXcel NanoCura"
                draggable={false}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none h-[230px] sm:h-[280px] object-contain select-none"
              />
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" data-testid="header-nav">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0284C7] rounded-full hover:bg-sky-50 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href="#login" data-testid="header-login">
              <Button
                variant="ghost"
                className="rounded-full text-slate-700 hover:text-[#0284C7] hover:bg-sky-50"
              >
                Login
              </Button>
            </a>
            <a href="#demo" data-testid="header-cta-demo">
              <Button className="rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white px-5 shadow-md shadow-sky-500/20">
                Request Demo
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-slate-200"
            onClick={() => setOpen((v) => !v)}
            data-testid="header-mobile-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 nc-glass rounded-3xl p-4 space-y-1" data-testid="mobile-menu">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-[#0284C7]"
              >
                {l.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href="#login" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full rounded-xl">
                  Login
                </Button>
              </a>
              <a href="#demo" onClick={() => setOpen(false)}>
                <Button className="w-full rounded-xl bg-[#0284C7] hover:bg-[#0369A1]">
                  Request Demo
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
