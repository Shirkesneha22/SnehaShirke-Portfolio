import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent";
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
          variant === "default" 
            ? "bg-[var(--surface-hover)] text-[var(--text-main)] border border-[var(--border)]"
            : "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20",
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
