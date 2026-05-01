import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { CalendarIcon, Loader2, ShieldCheck, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "../lib/utils";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
  "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
];

const BEDS = ["1-25", "26-50", "51-100", "101-200", "201-500", "500+"];

export default function DemoForm() {
  const [form, setForm] = useState({
    hospital_name: "",
    contact_person: "",
    mobile: "",
    email: "",
    beds_size: "",
    state: "",
    message: "",
  });
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) =>
    setForm((p) => ({ ...p, [k]: e?.target ? e.target.value : e }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please pick a preferred demo date");
      return;
    }
    if (!form.beds_size || !form.state) {
      toast.error("Please complete all required fields");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/demo-requests`, {
        ...form,
        preferred_demo_date: format(date, "yyyy-MM-dd"),
      });
      toast.success("Demo requested!", {
        description: "Our team will reach out within 24 hours.",
      });
      setForm({
        hospital_name: "",
        contact_person: "",
        mobile: "",
        email: "",
        beds_size: "",
        state: "",
        message: "",
      });
      setDate(null);
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        (Array.isArray(err?.response?.data) ? "Please check the form" : null) ||
        "Something went wrong. Please try again.";
      toast.error("Could not submit", { description: String(detail).slice(0, 160) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="demo"
      data-testid="demo-section"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-sky-50/40 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — Trust panel */}
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.28em] text-[#0284C7]">
              // 04 · Request a demo
            </div>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-light tracking-tighter text-[#0C1828]">
              See NanoCura
              <br />
              <span className="font-medium">running in your hospital.</span>
            </h2>
            <p className="mt-5 text-base text-slate-600 max-w-md">
              A 30-minute personalised walkthrough with a Plus91 specialist —
              tailored to your bed-size, specialty and patient flow.
            </p>

            <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-sky-900/5">
              <img
                src="https://images.unsplash.com/photo-1615555253536-427c99e967d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwYmx1ZSUyMHNreXxlbnwwfHx8fDE3Nzc2MTc5ODN8MA&ixlib=rb-4.1.0&q=85"
                alt="Modern hospital exterior"
                className="h-64 w-full object-cover"
              />
              <div className="p-6 space-y-4 bg-white">
                <div className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-xl grid place-items-center bg-emerald-100 text-emerald-700 shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-[#0C1828]">No obligations</div>
                    <div className="text-xs text-slate-500">Your data stays private. We'll never spam.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-xl grid place-items-center bg-sky-100 text-[#0284C7] shrink-0">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-[#0C1828]">Talk to a specialist</div>
                    <div className="text-xs text-slate-500">+91 99676 75550 · Mon–Sat 9am–7pm IST</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-xl grid place-items-center bg-cyan-100 text-cyan-700 shrink-0">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-[#0C1828]">Email</div>
                    <div className="text-xs text-slate-500">nanocura@plus91.in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              data-testid="demo-form"
              className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl shadow-sky-900/5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <Label className="text-xs font-medium uppercase tracking-wider text-slate-500" htmlFor="hospital_name">
                    Hospital Name
                  </Label>
                  <Input
                    id="hospital_name"
                    data-testid="form-hospital-name"
                    required
                    value={form.hospital_name}
                    onChange={update("hospital_name")}
                    placeholder="e.g. Sai Sanjivani Multispeciality"
                    className="mt-2 h-11 rounded-xl border-slate-200 focus-visible:ring-[#0284C7]"
                  />
                </div>

                <div>
                  <Label className="text-xs font-medium uppercase tracking-wider text-slate-500" htmlFor="contact_person">
                    Contact Person
                  </Label>
                  <Input
                    id="contact_person"
                    data-testid="form-contact-person"
                    required
                    value={form.contact_person}
                    onChange={update("contact_person")}
                    placeholder="Dr. Priya Sharma"
                    className="mt-2 h-11 rounded-xl border-slate-200 focus-visible:ring-[#0284C7]"
                  />
                </div>

                <div>
                  <Label className="text-xs font-medium uppercase tracking-wider text-slate-500" htmlFor="mobile">
                    Mobile
                  </Label>
                  <Input
                    id="mobile"
                    data-testid="form-mobile"
                    required
                    value={form.mobile}
                    onChange={update("mobile")}
                    placeholder="+91 9XXXX XXXXX"
                    className="mt-2 h-11 rounded-xl border-slate-200 focus-visible:ring-[#0284C7]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label className="text-xs font-medium uppercase tracking-wider text-slate-500" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="form-email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="admin@yourhospital.com"
                    className="mt-2 h-11 rounded-xl border-slate-200 focus-visible:ring-[#0284C7]"
                  />
                </div>

                <div>
                  <Label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Beds Size
                  </Label>
                  <Select value={form.beds_size} onValueChange={update("beds_size")}>
                    <SelectTrigger
                      data-testid="form-beds-size"
                      className="mt-2 h-11 rounded-xl border-slate-200 focus:ring-[#0284C7]"
                    >
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      {BEDS.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b} beds
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    State
                  </Label>
                  <Select value={form.state} onValueChange={update("state")}>
                    <SelectTrigger
                      data-testid="form-state"
                      className="mt-2 h-11 rounded-xl border-slate-200 focus:ring-[#0284C7]"
                    >
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent className="max-h-72">
                      {STATES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="sm:col-span-2">
                  <Label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Preferred Demo Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        data-testid="form-date-trigger"
                        className={cn(
                          "mt-2 h-11 w-full justify-start rounded-xl border-slate-200 font-normal",
                          !date && "text-slate-400"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-[#0284C7]" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="sm:col-span-2">
                  <Label className="text-xs font-medium uppercase tracking-wider text-slate-500" htmlFor="message">
                    Anything else? (optional)
                  </Label>
                  <Textarea
                    id="message"
                    data-testid="form-message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Specialty, current system, key pain points…"
                    className="mt-2 min-h-[88px] rounded-xl border-slate-200 focus-visible:ring-[#0284C7]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                data-testid="form-submit"
                disabled={loading}
                size="lg"
                className="mt-6 w-full sm:w-auto rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white h-12 px-8 shadow-lg shadow-sky-500/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Request My Demo"
                )}
              </Button>
              <p className="mt-3 text-xs text-slate-500">
                By submitting, you agree to our privacy policy and consent to be contacted by Plus91 Technologies.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
