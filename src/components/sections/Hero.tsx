import Image from "next/image";
import { siteConfig } from "@/content/site";
import { Mail, ArrowDown, FileText, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 md:gap-16 pt-8 pb-16">
      <div className="flex-1 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse motion-reduce:animate-none"></span>
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
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="w-full md:w-[320px] lg:w-[400px] flex-shrink-0 flex justify-center pt-6 md:pt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
          <Image
            src="/profile.jpg"
            alt="Sneha Shirke"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
