import { siteConfig } from "@/content/site";
import { Mail, ArrowDown, FileText, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 md:gap-16 pt-8 pb-16">
      <div className="flex-1 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-full">
              {siteConfig.statusBadge}
            </span>
          </div>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            {siteConfig.label}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {siteConfig.headline}
          </h1>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
          {siteConfig.subtext}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="/Sneha_Shirke_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            aria-label="Download my resume as PDF"
          >
            Resume
            <Download className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-5 pt-4">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-slate-500 hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="w-full md:w-[320px] lg:w-[400px] flex-shrink-0">
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0A0A0A] shadow-xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#111]">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-slate-400 font-mono">sneha.py</span>
          </div>
          <div className="p-4 sm:p-5 font-mono text-sm">
            <div className="text-pink-400">class <span className="text-blue-400">Developer</span>:</div>
            <div className="pl-4 text-slate-300">
              <div className="text-pink-400">def <span className="text-blue-400">__init__</span>(self):</div>
              <div className="pl-4 text-slate-300">
                self.name = <span className="text-green-400">"Sneha Shirke"</span><br/>
                self.role = <span className="text-green-400">"Full Stack Eng"</span><br/>
                self.tools = [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"AWS"</span>]<br/>
              </div>
              <br/>
              <div className="text-pink-400">def <span className="text-blue-400">build</span>(self):</div>
              <div className="pl-4 text-slate-400 italic"># Ship cool things</div>
              <div className="pl-4 text-orange-300">return <span className="text-green-400">"🚀"</span></div>
            </div>
            <div className="mt-4 flex items-center text-slate-400">
              <span className="text-green-500 mr-2">~</span> $ python sneha.py
            </div>
            <div className="mt-1 text-slate-300">
              🚀 Ready to build
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
