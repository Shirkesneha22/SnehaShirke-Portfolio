import { siteConfig } from "@/content/site";
import { MapPin, GraduationCap, Briefcase, Code } from "lucide-react";

export function About() {
  const { aboutFacts } = siteConfig;

  return (
    <section className="space-y-6 pt-12 pb-16" id="about">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">About Me</h2>
        
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-8">
            {siteConfig.aboutStory}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Location</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{aboutFacts.location}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Education</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{aboutFacts.education}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Experience</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{aboutFacts.experience}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Code className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Focus</span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{aboutFacts.focus}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
