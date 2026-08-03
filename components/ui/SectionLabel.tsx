import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  index?: string;
  className?: string;
}

export function SectionLabel({ label, index, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      {index && (
        <span className="font-mono text-xs text-[var(--color-muted-foreground)] tracking-wider">
          {index}
        </span>
      )}
      <span className="h-px flex-1 max-w-12 bg-[var(--color-border-strong)]" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
        {label}
      </span>
    </div>
  );
}
