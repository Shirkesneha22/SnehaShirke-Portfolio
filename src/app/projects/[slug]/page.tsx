import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight, CheckCircle2, Server, Database, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Sneha Shirke`,
    description: project.summary,
  };
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[projectIndex + 1] || projects[0];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <header className="space-y-6 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h1>
          <div className="flex items-center gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                GitHub
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2 space-y-12">
          {project.problem && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The Problem</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Solution & Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.architectureNotes && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Architecture</h2>
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm w-full sm:w-auto">
                    <Code2 className="w-6 h-6 text-blue-500" />
                    <span className="text-sm font-medium">Frontend</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 rotate-90 sm:rotate-0" />
                  <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm w-full sm:w-auto">
                    <Server className="w-6 h-6 text-green-500" />
                    <span className="text-sm font-medium">Backend API</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 rotate-90 sm:rotate-0" />
                  <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm w-full sm:w-auto">
                    <Database className="w-6 h-6 text-purple-500" />
                    <span className="text-sm font-medium">Database / Models</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            </section>
          )}

          {project.keyDecisions && project.keyDecisions.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Key Technical Decisions</h2>
              <ul className="list-disc list-inside space-y-3 text-slate-600 dark:text-slate-300 ml-2">
                {project.keyDecisions.map((decision, i) => (
                  <li key={i} className="leading-relaxed">
                    {decision}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold text-red-700 dark:text-red-400 block mb-1">Challenge {i + 1}:</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.results && project.results.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Results & Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div key={i} className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/20 flex items-center justify-center text-center">
                    <span className="font-medium text-blue-900 dark:text-blue-300">{result}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">My Role</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {project.role || "Full Stack Developer"}
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <div className="text-sm text-slate-500">
          Next Project
        </div>
        <Link 
          href={`/projects/${nextProject.slug}`}
          className="group flex items-center gap-3 text-right text-slate-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {nextProject.title}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
