import { Metadata } from 'next';
import DonationsHeader from '@/components/donations/donations-header';
import DonationsStats from '@/components/donations/donations-stats';
import RecentDonations from '@/components/donations/recent-donations';
import DonationsSummary from '@/components/donations/donations-summary';

export const metadata: Metadata = {
  title: 'Donations - Project Joe',
  description: 'Manage church donations and giving',
};

export default function DonationsPage() {
  return (
    <div className="container mx-auto p-6">
      <DonationsHeader />
      <div className="mt-8">
        <DonationsStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <RecentDonations />
          <DonationsSummary />
        </div>
      </div>
    </div>
  );
}