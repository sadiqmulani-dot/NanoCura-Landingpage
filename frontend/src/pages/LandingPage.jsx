import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Features from "../components/Features";
import Modules from "../components/Modules";
import Pricing from "../components/Pricing";
import DemoForm from "../components/DemoForm";
import Testimonials from "../components/Testimonials";
import Security from "../components/Security";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <main data-testid="landing-page" className="relative bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <Features />
      <Modules />
      <Pricing />
      <DemoForm />
      <Testimonials />
      <Security />
      <FAQ />
      <Footer />
    </main>
  );
}
