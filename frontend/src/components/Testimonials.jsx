import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "NanoCura cut our patient registration time by 60%. Front-desk queues that used to spill into the corridor are simply gone.",
    name: "Dr. Anand Kulkarni",
    role: "Medical Director, Sai Sanjivani",
    location: "Pune, MH",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg",
  },
  {
    quote:
      "ABHA-linked records and TPA claim automation alone saved our finance team 80 hours every month. The Plus91 team feels like part of our hospital.",
    name: "Meghna Iyer",
    role: "CFO, Lifeline Group of Hospitals",
    location: "Coimbatore, TN",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
  },
  {
    quote:
      "We rolled NanoCura across 4 branches in 3 weeks. Doctors picked up the EMR in a single training session. Genuinely impressed.",
    name: "Dr. Rohit Mehta",
    role: "CEO, Mehta Multispeciality",
    location: "Ahmedabad, GJ",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=srgb&fm=jpg&q=85&w=400",
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 sm:py-32 bg-[#0A1F3D] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage:
               "radial-gradient(800px 400px at 80% 0%, rgba(56,189,248,0.4), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(2,132,199,0.3), transparent 60%)",
           }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.28em] text-sky-300">
            // 05 · Loved by hospital leaders
          </div>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter">
            Stories from hospitals
            <br />
            <span className="font-medium text-sky-200">running on NanoCura.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className={`relative rounded-3xl p-7 border border-white/10 bg-white/5 backdrop-blur-md ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <Quote className="h-7 w-7 text-sky-300/60" />
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-slate-100">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover border border-white/20"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div>
                  <div className="font-medium text-white">{t.name}</div>
                  <div className="text-xs text-slate-300">
                    {t.role} · {t.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
