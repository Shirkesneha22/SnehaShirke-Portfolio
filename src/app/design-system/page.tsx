"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { IconLink } from "@/components/ui/IconLink";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function DesignSystem() {
  return (
    <Container className="py-20 space-y-24">
      <SectionReveal>
        <SectionHeading 
          title="Design System & UI Components" 
          subtitle="A playground to preview all UI elements, colors, and typography scales across both light and dark themes." 
        />
      </SectionReveal>

      {/* Typography */}
      <SectionReveal delay={0.1}>
        <div className="space-y-8">
          <h3 className="text-2xl font-heading font-semibold border-b border-[var(--border)] pb-4">Typography</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-2">Heading 1 (Space Grotesk)</p>
              <h1 className="text-5xl md:text-6xl font-bold font-heading">The quick brown fox</h1>
            </div>
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-2">Heading 2 (Space Grotesk)</p>
              <h2 className="text-4xl font-bold font-heading">The quick brown fox</h2>
            </div>
            <div>
              <p className="text-sm text-[var(--text-muted)] mb-2">Body (Inter)</p>
              <p className="text-lg">The quick brown fox jumps over the lazy dog. This is body text used for descriptions and general content.</p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Colors */}
      <SectionReveal delay={0.2}>
        <div className="space-y-8">
          <h3 className="text-2xl font-heading font-semibold border-b border-[var(--border)] pb-4">Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-[var(--background)] border border-[var(--border)]">
              <div className="w-full h-12 bg-[var(--background)] border border-[var(--border)] rounded mb-2" />
              <p className="text-sm font-medium">Background</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
              <div className="w-full h-12 bg-[var(--surface)] border border-[var(--border)] rounded mb-2" />
              <p className="text-sm font-medium">Surface</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)]">
              <div className="w-full h-12 bg-[var(--surface-hover)] border border-[var(--border)] rounded mb-2" />
              <p className="text-sm font-medium">Surface Hover</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--background)] border border-[var(--border)]">
              <div className="w-full h-12 bg-[var(--accent)] rounded mb-2" />
              <p className="text-sm font-medium">Accent</p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Buttons & Badges */}
      <SectionReveal delay={0.3}>
        <div className="space-y-8">
          <h3 className="text-2xl font-heading font-semibold border-b border-[var(--border)] pb-4">Interactive Elements</h3>
          
          <div className="space-y-4">
            <p className="text-sm font-medium text-[var(--text-muted)]">Buttons</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-sm font-medium text-[var(--text-muted)]">Badges</p>
            <div className="flex flex-wrap gap-4">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge variant="accent">Featured</Badge>
              <Badge variant="accent">New</Badge>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-sm font-medium text-[var(--text-muted)]">Icon Links</p>
            <div className="flex gap-4">
              <IconLink href="#" icon={GithubIcon} />
              <IconLink href="#" icon={TwitterIcon} />
              <IconLink href="#" icon={LinkedinIcon} />
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Cards */}
      <SectionReveal delay={0.4}>
        <div className="space-y-8">
          <h3 className="text-2xl font-heading font-semibold border-b border-[var(--border)] pb-4">Cards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="text-xl font-bold font-heading mb-2">Standard Card</h4>
              <p className="text-[var(--text-muted)] mb-4">A simple surface for grouping content.</p>
              <Button variant="secondary" size="sm">Action</Button>
            </Card>
            
            <Card hoverable className="p-6">
              <h4 className="text-xl font-bold font-heading mb-2">Hoverable Card</h4>
              <p className="text-[var(--text-muted)] mb-4">Lifts up and highlights border on hover. Good for project grids.</p>
              <Button variant="primary" size="sm">View Project</Button>
            </Card>
          </div>
        </div>
      </SectionReveal>
    </Container>
  );
}
