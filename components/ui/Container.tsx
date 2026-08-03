import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  const Comp = Component as any;
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-[var(--max-w-content)] px-6 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </Comp>
  );
}
