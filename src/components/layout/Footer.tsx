import { Container } from "../ui/Container";
import { siteConfig } from "@/content/site";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { IconLink } from "../ui/IconLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 py-8 border-t border-[var(--border)] bg-[var(--background)]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)] text-center md:text-left">
            © {year} {siteConfig.name}. Built with Next.js.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="/Sneha_Shirke_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm font-medium"
              aria-label="Download my resume as PDF"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
            <div className="flex items-center space-x-4">
              {siteConfig.socials?.github && (
                <IconLink href={siteConfig.socials.github} icon={GithubIcon} aria-label="Visit my GitHub profile" />
              )}
              {siteConfig.socials?.linkedin && (
                <IconLink href={siteConfig.socials.linkedin} icon={LinkedinIcon} aria-label="Visit my LinkedIn profile" />
              )}
              <IconLink href={`mailto:${siteConfig.email}`} icon={Mail} aria-label="Send me an email" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
