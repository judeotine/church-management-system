import { Metadata } from 'next';
import VolunteersHeader from '@/components/volunteers/volunteers-header';
import VolunteersStats from '@/components/volunteers/volunteers-stats';
import VolunteersSchedule from '@/components/volunteers/volunteers-schedule';
import VolunteersTeams from '@/components/volunteers/volunteers-teams';

export const metadata: Metadata = {
  title: 'Volunteers - Project Joe',
  description: 'Church volunteer management',
};

export default function VolunteersPage() {
  return (
    <div className="container mx-auto p-6">
      <VolunteersHeader />
      <VolunteersStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <VolunteersSchedule />
        <VolunteersTeams />
      </div>
    </div>
  );
}