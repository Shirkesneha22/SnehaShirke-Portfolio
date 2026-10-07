import { Container } from "../ui/Container";
import { siteConfig } from "@/content/config";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
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
            {siteConfig.links.github && (
              <IconLink href={siteConfig.links.github} icon={Github} aria-label="GitHub" />
            )}
            {siteConfig.links.linkedin && (
              <IconLink href={siteConfig.links.linkedin} icon={Linkedin} aria-label="LinkedIn" />
            )}
            {siteConfig.links.twitter && (
              <IconLink href={siteConfig.links.twitter} icon={Twitter} aria-label="Twitter" />
            )}
            <IconLink href={`mailto:${siteConfig.email}`} icon={Mail} aria-label="Email" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
