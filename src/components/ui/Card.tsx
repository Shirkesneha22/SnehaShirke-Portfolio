import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300",
          hoverable && "hover:border-[var(--accent)]/50 hover:shadow-lg hover:-translate-y-1",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
