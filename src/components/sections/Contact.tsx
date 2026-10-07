"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";
import { Mail, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section className="space-y-12 pt-12 pb-16" id="contact">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Let's Connect</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${siteConfig.email}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 break-all transition-colors" aria-label="Send email">
                      {siteConfig.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
                      aria-label="Copy email address"
                      title="Copy email"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">LinkedIn</p>
                  <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn profile">
                    linkedin.com/in/snehashirke
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">GitHub</p>
                  <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="GitHub profile">
                    github.com/Shirkesneha22
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-slate-200">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 dark:text-white"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-slate-200">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 dark:text-white"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-slate-200">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 dark:text-white resize-y"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={formStatus === "submitting"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors disabled:opacity-70"
            >
              {formStatus === "submitting" ? (
                "Sending..."
              ) : formStatus === "success" ? (
                <>Sent Successfully <Check className="w-5 h-5" /></>
              ) : (
                <>Send Message <Send className="w-5 h-5" /></>
              )}
            </button>
            
            {formStatus === "error" && (
              <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
        </div>
      </div>
      
      {/* Toast Notification for Email Copy */}
      {copied && (
        <div className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-300 z-50">
          <Check className="w-4 h-4 text-green-400 dark:text-green-600" />
          <span className="text-sm font-medium">Email copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
