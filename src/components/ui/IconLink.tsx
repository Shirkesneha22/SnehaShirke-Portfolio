import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: LucideIcon;
}

export function IconLink({ href, icon: Icon, className, ...props }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "p-2 text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-hover)] rounded-md transition-colors",
        className
      )}
      {...props}
    >
      <Icon size={20} />
    </a>
  );
}
