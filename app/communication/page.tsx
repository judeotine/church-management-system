import { Metadata } from 'next';
import CommunicationHeader from '@/components/communication/communication-header';
import CommunicationStats from '@/components/communication/communication-stats';
import RecentMessages from '@/components/communication/recent-messages';
import CommunicationChannels from '@/components/communication/communication-channels';

export const metadata: Metadata = {
  title: 'Communication - Project Joe',
  description: 'Church communication and messaging system',
};

export default function CommunicationPage() {
  return (
    <div className="container mx-auto p-6">
      <CommunicationHeader />
      <div className="mt-8">
        <CommunicationStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <RecentMessages />
          <CommunicationChannels />
        </div>
      </div>
    </div>
  );
}