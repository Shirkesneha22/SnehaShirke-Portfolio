import { skills } from "@/content/skills";
import { Code2 } from "lucide-react";

const CORE_SKILLS = ["Python", "FastAPI", "React", "Next.js", "AWS", "PostgreSQL"];

export function Skills() {
  return (
    <section className="space-y-8 pt-12 pb-16" id="skills">
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="w-6 h-6 text-slate-900 dark:text-white" />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <div 
            key={index} 
            className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => {
                const isCore = CORE_SKILLS.includes(skill);
                return (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                      isCore
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/50 shadow-sm"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
