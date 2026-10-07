import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("max-w-6xl mx-auto px-6 sm:px-8 md:px-12 w-full", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";
