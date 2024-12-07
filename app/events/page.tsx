import { Metadata } from 'next';
import EventsHeader from '@/components/events/events-header';
import EventsCalendar from '@/components/events/events-calendar';
import UpcomingEvents from '@/components/events/upcoming-events';
import EventsStats from '@/components/events/events-stats';

export const metadata: Metadata = {
  title: 'Events - Project Joe',
  description: 'Manage church events and activities',
};

export default function EventsPage() {
  return (
    <div className="container mx-auto p-6">
      <EventsHeader />
      <div className="mt-8">
        <EventsStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <EventsCalendar />
          </div>
          <div>
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </div>
  );
}