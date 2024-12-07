import { Metadata } from 'next';
import DashboardStats from '@/components/dashboard/stats';
import RecentActivity from '@/components/dashboard/recent-activity';
import UpcomingEvents from '@/components/dashboard/upcoming-events';

export const metadata: Metadata = {
  title: 'Dashboard - Project Joe',
  description: 'Church management system dashboard',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Project Joe Dashboard</p>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RecentActivity />
        <UpcomingEvents />
      </div>
    </div>
  );
}