import { experiences } from "@/content/experience";
import { skills } from "@/content/skills";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />

      {/* Experience Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {exp.role}
                </h3>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-700 font-medium">{exp.company}</span>
                <span className="text-slate-400 text-sm ml-auto mt-1 sm:mt-0">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-slate-600 flex gap-3">
                    <span className="text-blue-500 mt-1.5">•</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                {skillGroup.name}
              </h3>
              <ul className="space-y-2">
                {skillGroup.skills.map((item) => (
                  <li key={item} className="text-slate-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

