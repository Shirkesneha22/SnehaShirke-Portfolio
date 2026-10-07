import { education, certifications } from "@/content/education";
import { GraduationCap, Award, CheckCircle2, Clock } from "lucide-react";

export function Education() {
  return (
    <section className="space-y-8 pt-12 pb-16" id="education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Education */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-slate-900 dark:text-white" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Education</h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/5 rounded-bl-full -mr-4 -mt-4"></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 relative z-10">
                  {edu.degree}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-1 relative z-10">
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 dark:text-slate-400 relative z-10">
                  Class of {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-slate-900 dark:text-white" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Certifications</h2>
          </div>
          
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {cert.status === "Earned" ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full border border-green-200 dark:border-green-800/50">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Earned
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-full border border-yellow-200 dark:border-yellow-800/50">
                      <Clock className="w-3.5 h-3.5" />
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
