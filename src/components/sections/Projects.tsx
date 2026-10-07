import { projects } from "@/content/projects";
import { ExternalLink, ArrowRight, Folder } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="space-y-8 pt-12 pb-16" id="projects">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.slug}
            className="group relative flex flex-col md:flex-row gap-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-700">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <Folder className="w-12 h-12 text-slate-400 dark:text-slate-600" />
                )}
              </div>
            </div>

            <div className="md:w-2/3 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                {project.status === "in-progress" && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    In Progress
                  </span>
                )}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {project.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-3 py-1 text-slate-500 text-xs font-semibold">
                    +{project.technologies.length - 5} more
                  </span>
                )}
              </div>
              
              <div className="mt-auto flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-2"
                    aria-label={`${project.title} GitHub repo`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
