"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  delay?: number;
  children?: ReactNode;
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  ...props
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: delay,
      }}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
