import { useState } from "react";
import axios from "axios";
import { Activity, Linkedin, Twitter, Facebook, Youtube, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("You're on the list!", {
        description: "We'll send you product updates only — never spam.",
      });
      setEmail("");
    } catch (err) {
      toast.error("Could not subscribe", {
        description: err?.response?.data?.detail?.[0]?.msg || "Please check your email.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0A1F3D] text-slate-300 pt-24 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 nc-grid-bg opacity-[0.07] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Massive Let's Talk */}
        <div className="border-b border-white/10 pb-16">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.28em] text-sky-300">
            Let's talk
          </div>
          <h2 className="font-display mt-4 text-5xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.95]">
            Ready to digitise
            <br />
            <span className="font-medium bg-gradient-to-r from-sky-200 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              your hospital?
            </span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo">
              <Button
                data-testid="footer-cta-demo"
                size="lg"
                className="rounded-full bg-white text-[#0A1F3D] hover:bg-sky-100 h-12 px-6"
              >
                Request a demo
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
            </a>
            <a href="#pricing">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white h-12 px-6"
              >
                See pricing
              </Button>
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0284C7] to-[#38BDF8] text-white">
                <Activity className="h-4 w-4" strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                MediXcel <span className="font-light text-sky-300">NanoCura</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-slate-400 leading-relaxed">
              A flagship product by{" "}
              <span className="text-white font-medium">Plus91 Technologies</span> —
              building the digital backbone of healthcare across India and beyond
              since 2010.
            </p>

            <form onSubmit={subscribe} className="mt-8 max-w-sm" data-testid="newsletter-form">
              <label className="text-xs font-mono-tech uppercase tracking-[0.22em] text-sky-300">
                Newsletter
              </label>
              <div className="mt-3 flex gap-2">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="newsletter-email"
                  placeholder="you@hospital.com"
                  className="h-11 rounded-full bg-white/5 border-white/15 text-white placeholder:text-slate-400 focus-visible:ring-sky-400 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  disabled={busy}
                  data-testid="newsletter-submit"
                  className="rounded-full bg-sky-400 hover:bg-sky-300 text-[#0A1F3D] font-medium h-11 w-11 p-0 shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-mono-tech uppercase tracking-[0.22em] text-sky-300">
              Product
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Modules</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-mono-tech uppercase tracking-[0.22em] text-sky-300">
              Company
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Plus91</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-mono-tech uppercase tracking-[0.22em] text-sky-300">
              Reach us
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="text-slate-300">
                Plus91 Technologies Pvt. Ltd.<br />
                Pune, Maharashtra, India
              </li>
              <li><a href="mailto:nanocura@plus91.in" className="hover:text-white transition-colors">nanocura@plus91.in</a></li>
              <li><a href="tel:+919967675550" className="hover:text-white transition-colors">+91 99676 75550</a></li>
            </ul>
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { I: Linkedin, l: "LinkedIn", h: "#" },
                { I: Twitter, l: "Twitter", h: "#" },
                { I: Facebook, l: "Facebook", h: "#" },
                { I: Youtube, l: "YouTube", h: "#" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.h}
                  aria-label={s.l}
                  data-testid={`social-${s.l.toLowerCase()}`}
                  className="h-9 w-9 rounded-full grid place-items-center bg-white/5 border border-white/10 hover:bg-sky-400 hover:text-[#0A1F3D] hover:border-sky-400 transition-colors"
                >
                  <s.I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-slate-400">
          <div>© {new Date().getFullYear()} Plus91 Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
