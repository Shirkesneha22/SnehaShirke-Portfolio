import { Container } from "../ui/Container";
import { siteConfig } from "@/content/config";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { IconLink } from "../ui/IconLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 py-8 border-t border-[var(--border)] bg-[var(--background)]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © {year} {siteConfig.name}. Built with Next.js & Tailwind.
          </p>
          <div className="flex items-center space-x-4">
            {siteConfig.github && (
              <IconLink href={siteConfig.github} icon={GithubIcon} aria-label="GitHub" />
            )}
            {siteConfig.linkedin && (
              <IconLink href={siteConfig.linkedin} icon={LinkedinIcon} aria-label="LinkedIn" />
            )}
            <IconLink href={`mailto:${siteConfig.email}`} icon={Mail} aria-label="Email" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
