import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ 
  title, 
  description, 
  className,
  align = 'left' 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'relative mb-8',
      align === 'center' && 'text-center',
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-foreground">{description}</p>
      )}
      <div className={cn(
        'absolute -bottom-4 h-1 bg-primary/10 rounded-full',
        align === 'center' ? 'left-1/2 transform -translate-x-1/2 w-24' : 'left-0 w-16'
      )}>
        <div className="h-full w-1/2 bg-primary rounded-full" />
      </div>
    </div>
  );
}