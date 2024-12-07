'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Users,
  Calendar,
  DollarSign,
  MessageSquare,
  Video,
  UserCog,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  Church,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Members', href: '/members' },
  { icon: Calendar, label: 'Events', href: '/events' },
  { icon: DollarSign, label: 'Donations', href: '/donations' },
  { icon: MessageSquare, label: 'Communication', href: '/communication' },
  { icon: Video, label: 'Sermons', href: '/sermons' },
  { icon: UserCog, label: 'Volunteers', href: '/volunteers' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'h-screen bg-card border-r flex flex-col transition-all duration-300 relative',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="absolute inset-0 bg-[url('/patterns/church-pattern.svg')] opacity-[0.02]" />
      
      <div className="p-4 flex items-center justify-between border-b relative">
        <div className={cn('flex items-center', collapsed && 'justify-center')}>
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Church className="h-5 w-5 text-primary" />
          </div>
          {!collapsed && (
            <span className="ml-3 font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Project Joe
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 p-2 space-y-1 relative">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center px-3 py-2 rounded-md mb-1 transition-all relative group',
              pathname === item.href
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-primary/10',
              collapsed && 'justify-center'
            )}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span className="ml-3">{item.label}</span>}
            {collapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
                {item.label}
              </div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}