import { siteConfig } from "@/content/config";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl font-medium">
          {siteConfig.headline}
        </p>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          {siteConfig.about}
        </p>
        <div className="flex items-center gap-4 pt-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-slate-500 hover:text-blue-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
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
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all hover:shadow-sm flex flex-col h-full bg-white"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-slate-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-900 transition-colors"
                      aria-label={`${project.title} GitHub repo`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
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
