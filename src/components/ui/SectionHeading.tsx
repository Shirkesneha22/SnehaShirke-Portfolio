import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
}

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mb-12", className)} {...props}>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[var(--text-main)] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-[var(--text-muted)] max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);
SectionHeading.displayName = "SectionHeading";
