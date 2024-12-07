import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { StainedGlass } from '@/components/ui/stained-glass';
import { SectionHeader } from '@/components/ui/section-header';
import Link from 'next/link';
import { ArrowRight, Users, Calendar, Heart, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <StainedGlass />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Church managementsystem
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern church management system that helps you streamline operations,
            enhance member engagement and manage day-to-day activities efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatCard
            icon={Users}
            label="Active Members"
            value="1,234"
            trend="+5.2%"
          />
          <StatCard
            icon={Calendar}
            label="Weekly Events"
            value="24"
            trend="+3"
          />
          <StatCard
            icon={Heart}
            label="Volunteers"
            value="89"
            trend="+12"
          />
          <StatCard
            icon={MessageSquare}
            label="Communications"
            value="156"
            trend="+8"
          />
        </div>

        <SectionHeader 
          title="Quick Access" 
          description="Access key features and manage your church efficiently"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <QuickAccessCard
            title="Member Management"
            description="Register members, track attendance, and manage roles"
            href="/members"
            variant="primary"
          />
          <QuickAccessCard
            title="Event Scheduling"
            description="Create and manage church events with calendar integration"
            href="/events"
            variant="secondary"
          />
          <QuickAccessCard
            title="Donations"
            description="Track donations and generate giving statements"
            href="/donations"
            variant="accent"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, trend }: {
  icon: any;
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
      <Icon className="h-8 w-8 text-primary mb-4" />
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <h3 className="text-2xl font-bold">{value}</h3>
        <span className="text-sm text-green-600">{trend}</span>
      </div>
    </Card>
  );
}

function QuickAccessCard({
  title,
  description,
  href,
  variant = 'primary',
}: {
  title: string;
  description: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'accent';
}) {
  return (
    <Card className="relative p-6 hover:shadow-lg transition-shadow overflow-hidden group">
      <StainedGlass variant={variant} className="opacity-0 group-hover:opacity-30 transition-opacity" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button asChild>
        <Link href={href} className="inline-flex items-center">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </Card>
  );
}