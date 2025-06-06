import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
        <Hero />
        <About />
        <Skills />
      <section id="projects">
        <Projects />
      </section>
        <Contact />
    </div>
  );
};

export default Index;

