import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper to merge Tailwind classes without conflicts
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'header' | 'footer' | 'nav'; // For better SEO
};

export default function Container({ 
  children, 
  className, 
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}