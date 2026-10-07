import { experiences } from "@/content/experience";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section className="space-y-8 pt-12 pb-16" id="experience">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-6 h-6 text-slate-900 dark:text-white" />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Experience</h2>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-4 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-10">
            <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-[#0A0A0A]"></span>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <div className="text-lg font-medium text-slate-700 dark:text-slate-300">
                  {exp.company}
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1 text-sm text-slate-500 dark:text-slate-400 mt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.startDate} – {exp.endDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="text-blue-500 mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500 block" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
