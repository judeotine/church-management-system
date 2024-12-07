'use client';

import { cn } from '@/lib/utils';

interface StainedGlassProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function StainedGlass({ className, variant = 'primary' }: StainedGlassProps) {
  const variants = {
    primary: 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
    secondary: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    accent: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20'
  };

  return (
    <div className={cn(
      'absolute inset-0 -z-10 bg-gradient-to-tr opacity-30',
      variants[variant],
      className
    )}>
      <div className="absolute inset-0 bg-[url('/patterns/church-pattern.svg')] opacity-10" />
    </div>
  );
}