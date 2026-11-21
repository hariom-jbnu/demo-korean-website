import SiteHeader from "@/src/components/site/SiteHeader";
import Hero from "@/src/components/site/Hero";
import CourseGrid from "@/src/components/site/CourseGrid";
import Roadmap from "@/src/components/site/Roadmap";
import FullPackage from "@/src/components/site/FullPackage";
import Testimonials from "@/src/components/site/Testimonials";
import EmailSignup from "@/src/components/site/EmailSignup";
import SiteFooter from "@/src/components/site/SiteFooter";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-[#1B192E]">
      <SiteHeader />
      <main>
        <Hero />
        <CourseGrid />
        <Roadmap />
        <FullPackage />
        <Testimonials />
        <EmailSignup />
      </main>
      <SiteFooter />
    </div>
  );
}
