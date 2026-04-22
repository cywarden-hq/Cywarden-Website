import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "main";
  size?: "sm" | "md" | "lg" | "xl";
};

const sectionSizes = {
  sm: "py-8 sm:py-10",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20 lg:py-24",
  xl: "py-20 sm:py-24 lg:py-32",
};

export default function Section({
  children,
  className,
  as: Component = "section",
  size = "md",
}: SectionProps) {
  return (
    <Component className={cn(sectionSizes[size], className)}>
      {children}
    </Component>
  );
}