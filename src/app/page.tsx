import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WorkExperience from "@/components/sections/WorkExperience";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkExperience />
      <TechStack />
      <FeaturedProjects />
      <Testimonials />
      <ContactSection />
    </>
  );
}
