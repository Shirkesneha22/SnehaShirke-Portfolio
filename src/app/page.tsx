import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}

